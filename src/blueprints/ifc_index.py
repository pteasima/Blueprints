"""IFC inspector index from a yaml-ifc document.

The viewer does not parse IFC. Export walks the IfcOpenShell model
``yaml_ifc`` already builds and writes ``docs/models/<id>.ifc.json``.
Spatial containment and IfcRelAggregates / IfcRelNests are the only
parent links. Everything else (property sets, cable number, circuit,
role) is carried on the element for the popover note.
"""

from __future__ import annotations

from typing import Any

from yaml_ifc.to_ifc import build_ifc, validation_errors

# Shown as dimensions when the value is known. Other facts stay in the note.
DIMENSION_NAMES = (
    "OverallWidth",
    "OverallHeight",
    "Width",
    "Depth",
    "Height",
    "Thickness",
    "Length",
    "Elevation",
    "RefElevation",
    "SillHeight",
    "AlongAxis",
    "HeadHeight",
)

PSET_ID_NAMES = ("yaml-ifc", "Pset_YamlIfc")


def index_documents(docs: list[dict]) -> dict[str, Any]:
    """Merge one index per yaml-ifc document. Same GlobalId keeps one element."""
    indexes = []
    for doc in docs:
        if not doc or not doc.get("project"):
            continue
        model = build_ifc(doc)
        errors = validation_errors(model)
        if errors:
            raise ValueError("yaml-ifc document failed validation: " + "; ".join(errors))
        indexes.append(index_model(model))
    return merge_indexes(indexes)


def merge_indexes(indexes: list[dict]) -> dict[str, Any]:
    elements: dict[str, dict] = {}
    roots: list[str] = []
    for index in indexes:
        for gid, element in (index.get("elements") or {}).items():
            if gid not in elements:
                elements[gid] = element
                continue
            _fill_missing(elements[gid], element)
        for root in index.get("roots") or []:
            if root not in roots:
                roots.append(root)
    return {"elements": elements, "roots": roots}


def index_model(model) -> dict[str, Any]:
    """Flat element map plus project roots. Children are derived from the links."""
    parent_of: dict[str, str] = {}
    parent_order: dict[str, int] = {}
    # Aggregates first, nests after, so a nested port stays under its device.
    sequence = 0
    for rel_type in ("IfcRelAggregates", "IfcRelNests"):
        for rel in model.by_type(rel_type):
            parent = rel.RelatingObject
            if parent is None:
                continue
            for child in rel.RelatedObjects or []:
                if child is None:
                    continue
                parent_of[child.GlobalId] = parent.GlobalId
                parent_order[child.GlobalId] = sequence
                sequence += 1

    container_of: dict[str, str] = {}
    for rel in model.by_type("IfcRelContainedInSpatialStructure"):
        structure = rel.RelatingStructure
        if structure is None:
            continue
        for element in rel.RelatedElements or []:
            if element is None:
                continue
            container_of[element.GlobalId] = structure.GlobalId

    circuits: dict[str, list[str]] = {}
    for rel in model.by_type("IfcRelAssignsToGroup"):
        group = rel.RelatingGroup
        if group is None or not group.is_a("IfcDistributionCircuit"):
            continue
        label = _text(getattr(group, "Name", None)) or _text(getattr(group, "GlobalId", None))
        for element in rel.RelatedObjects or []:
            if element is None or not label:
                continue
            circuits.setdefault(element.GlobalId, [])
            if label not in circuits[element.GlobalId]:
                circuits[element.GlobalId].append(label)

    elements: dict[str, dict] = {}
    order = 0
    products = (
        list(model.by_type("IfcContext"))
        + list(model.by_type("IfcProduct"))
        + list(model.by_type("IfcGroup"))
    )
    for product in products:
        gid = getattr(product, "GlobalId", None)
        if not gid or gid in elements:
            continue
        record = _element_record(product)
        record["order"] = parent_order.get(gid, 10_000 + order)
        record["parentId"] = parent_of.get(gid)
        record["containerId"] = container_of.get(gid)
        record["circuits"] = circuits.get(gid, [])
        elements[gid] = record
        order += 1

    roots = [
        gid
        for gid, element in elements.items()
        if element["type"] == "IfcProject"
    ]
    roots.sort(key=lambda gid: elements[gid]["order"])
    return {"elements": elements, "roots": roots}


def _element_record(product) -> dict[str, Any]:
    psets = _property_sets(product)
    yaml_id = _yaml_id(psets)
    if not yaml_id and product.is_a("IfcProject"):
        # yaml-ifc stores the project id in LongName. It has no yaml-ifc pset.
        yaml_id = _text(getattr(product, "LongName", None))
    if not yaml_id:
        yaml_id = _text(getattr(product, "Name", None)) or product.GlobalId
    predefined = _text(getattr(product, "PredefinedType", None))
    object_type = _text(getattr(product, "ObjectType", None))
    dimensions = []
    seen = set()
    for name in DIMENSION_NAMES:
        value = _plain(getattr(product, name, None))
        if value is None or name in seen:
            continue
        seen.add(name)
        dimensions.append({"name": name, "value": value})
    for pset in psets:
        for name, value in (pset.get("properties") or {}).items():
            if name not in DIMENSION_NAMES or name in seen or value is None:
                continue
            seen.add(name)
            dimensions.append({"name": name, "value": value})
    if "Thickness" not in seen:
        thickness = _layer_thickness(product)
        if thickness is not None:
            dimensions.append({"name": "Thickness", "value": thickness})
    cables = []
    for pset in psets:
        number = (pset.get("properties") or {}).get("CableNumber")
        if number is None:
            continue
        text = str(number)
        if text not in cables:
            cables.append(text)
    role = predefined or object_type or ""
    return {
        "globalId": product.GlobalId,
        "id": yaml_id,
        "type": product.is_a(),
        "name": _text(getattr(product, "Name", None)) or yaml_id,
        "description": _text(getattr(product, "Description", None)) or "",
        "tag": _text(getattr(product, "Tag", None)) or "",
        "predefinedType": predefined or "",
        "objectType": object_type or "",
        "role": role,
        "dimensions": dimensions,
        "propertySets": psets,
        "cables": cables,
        "circuits": [],
    }


def _property_sets(product) -> list[dict[str, Any]]:
    found = []
    for rel in getattr(product, "IsDefinedBy", None) or []:
        if not rel.is_a("IfcRelDefinesByProperties"):
            continue
        pset = rel.RelatingPropertyDefinition
        if pset is None or not pset.is_a("IfcPropertySet"):
            continue
        props = {}
        for prop in pset.HasProperties or []:
            if not prop.is_a("IfcPropertySingleValue"):
                continue
            value = _plain(getattr(prop, "NominalValue", None))
            if value is None:
                continue
            props[str(prop.Name)] = value
        found.append({"name": _text(getattr(pset, "Name", None)) or "Pset", "properties": props})
    return found


def _yaml_id(psets: list[dict]) -> str | None:
    for name in PSET_ID_NAMES:
        for pset in psets:
            if pset.get("name") != name:
                continue
            value = (pset.get("properties") or {}).get("id")
            if value:
                return str(value)
    return None


def _layer_thickness(product) -> float | None:
    associations = getattr(product, "HasAssociations", None) or []
    for rel in associations:
        if not rel.is_a("IfcRelAssociatesMaterial"):
            continue
        material = rel.RelatingMaterial
        layer_set = getattr(material, "ForLayerSet", None) or material
        layers = getattr(layer_set, "MaterialLayers", None) or []
        total = 0.0
        found = False
        for layer in layers:
            value = getattr(layer, "LayerThickness", None)
            if value is None:
                continue
            total += float(value)
            found = True
        if found:
            return total
    return None


def _fill_missing(kept: dict, extra: dict) -> None:
    for key, value in extra.items():
        current = kept.get(key)
        if current in (None, "", [], {}):
            kept[key] = value


def _plain(value: Any) -> Any:
    if value is None:
        return None
    wrapped = getattr(value, "wrappedValue", None)
    if wrapped is not None:
        return _plain(wrapped)
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float, str)):
        return value
    text = str(value).strip()
    if not text or text.startswith("#") or "entity instance" in text:
        return None
    return text


def _text(value: Any) -> str:
    plain = _plain(value)
    if plain is None:
        return ""
    return str(plain)
