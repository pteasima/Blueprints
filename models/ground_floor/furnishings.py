"""Furnishing solids: converter boxes, appliances, kitchen runs, soffit."""
from __future__ import annotations

from ifcopenshell.util.placement import get_local_placement
from yaml_ifc.supported import FURNISHINGS, PSET_NAME
from yaml_ifc.to_ifc import build_ifc
from yaml_ifc import validation_errors
from build123d import Align, Box, Plane, Pos

from blueprints.scenes import cad_mm_to_gltf_m
from living_geometry import OAK_TYPES, living_detail
import ceiling_line
import kitchen_cabinet
import kitchen_ifc
import soffit

from .constants import (
    FURNISHING_LABELS,
    FURNISHING_LISTS,
    LABEL_OAK,
    LABEL_UPHOLSTERY,
    LABEL_WORKTOP,
    MESH_GAP_MM,
    MM,
    ROOM_PIERS_M,
    ROOM_X0,
    ROOM_X1,
    ROOM_Y0,
    ROOM_Y1,
    SOFA_TYPES,
    STONE_TYPES,
)
from .document import load_furnishings
from .kitchen import _kitchen_run_parts
from .paint import _mm, _paint, _tag


def _yaml_id(product) -> str:
    for rel in product.IsDefinedBy or []:
        if not rel.is_a("IfcRelDefinesByProperties"):
            continue
        pset = rel.RelatingPropertyDefinition
        if getattr(pset, "Name", None) != PSET_NAME:
            continue
        for prop in pset.HasProperties or []:
            if prop.Name == "id" and prop.NominalValue is not None:
                return str(prop.NominalValue.wrappedValue)
    return str(product.Name)


def _body_extrusion(product):
    representation = product.Representation
    if representation is None:
        return None
    for shape in representation.Representations or []:
        if shape.RepresentationIdentifier != "Body":
            continue
        for item in shape.Items or []:
            if item.is_a("IfcExtrudedAreaSolid"):
                return item
    return None


def _corner_size(product, solid) -> tuple[float, float, float]:
    """Width, depth, height in metres, from a corner-origin rectangle."""
    profile = solid.SweptArea
    if profile is None or not profile.is_a("IfcRectangleProfileDef"):
        raise ValueError(f"{product.Name} body is not a rectangular box")
    width, depth = float(profile.XDim), float(profile.YDim)
    centre = profile.Position.Location.Coordinates
    if abs(float(centre[0]) - width / 2.0) > 1e-4 or abs(float(centre[1]) - depth / 2.0) > 1e-4:
        raise ValueError(f"{product.Name} box is not placed on its minimum corner")
    location = solid.Position.Location.Coordinates
    if any(abs(float(value)) > 1e-4 for value in location):
        raise ValueError(f"{product.Name} extrusion is not at the placement origin")
    return width, depth, float(solid.Depth)


def _solid_from_product(product, label: str, list_key: str, element: dict | None, motions=None):
    """build123d solids from the converter's extrusion, in millimetres.

    One solid. Kitchen run parts are built by ``_kitchen_run_parts``.
    """
    solid = _body_extrusion(product)
    if solid is None:
        return []
    width, depth, height = (_mm(value) for value in _corner_size(product, solid))
    matrix = get_local_placement(product.ObjectPlacement)
    origin = tuple(float(matrix[index, 3]) * MM for index in range(3))
    x_dir = tuple(float(matrix[index, 0]) for index in range(3))
    z_dir = tuple(float(matrix[index, 2]) for index in range(3))
    gap = min(MESH_GAP_MM, width * 0.25, depth * 0.25, height * 0.25)
    plane = Plane(origin=origin, x_dir=x_dir, z_dir=z_dir)
    yaml_id = _yaml_id(product)
    doors = _appliance_doors(element, width, depth, height) if element else None
    if doors:
        return _appliance_with_doors(doors, plane, origin, x_dir, z_dir, width, depth, height, gap,
                                     label, yaml_id, list_key, motions)
    detail = living_detail(element, width, depth, height, gap) if element else None
    if detail is None:
        detail = Pos(gap / 2.0, gap / 2.0, gap / 2.0) * Box(
            width - gap,
            depth - gap,
            height - gap,
            align=(Align.MIN, Align.MIN, Align.MIN),
        )
    return [_tag(_paint(plane * detail, label), yaml_id, list_key)]


def _appliance_doors(element: dict, width: float, depth: float, height: float) -> list | None:
    """Door leaves of a free-standing appliance (``Pset_ApplianceDoors``),
    product-local mm: (suffix, x0, x1, z0, z1, hinge) with hinge "L" / "R"
    as you face it (L = local x 0). Petr, 2026-11-23 (t865u): "let me open
    ... fridge (side hinge). Dont overthink the modeling of the insides".

    ``Layout: quad`` (the 4-door fridge): two leaves over two, each hinged
    on its outer edge, split at ``Split`` (m above the base), ``Gap``
    between leaves. Doors ``Thickness`` deep from the front face (local
    y 0). All guess: from the maker's photos, not a drawing."""
    props = None
    for pset in element.get("PropertySets") or []:
        if pset.get("Name") == "Pset_ApplianceDoors":
            props = pset.get("Properties") or {}
    if not props:
        return None
    layout = str(props.get("Layout", ""))
    gap = float(props.get("Gap", 0.004)) * 1000.0
    split = float(props.get("Split", 0.0)) * 1000.0
    base = float(props.get("Base", 0.0)) * 1000.0
    t = float(props.get("Thickness", 0.05)) * 1000.0
    if layout != "quad":
        raise ValueError(f"{element.get('id')}: Pset_ApplianceDoors Layout {layout!r}, only quad")
    if not (base < split < height):
        raise ValueError(f"{element.get('id')}: door Split {split} outside {base}..{height}")
    mid = width / 2.0
    g = gap / 2.0
    leaves = [("DOOR1", 0.0, mid - g, split + g, height, "L"), ("DOOR2", mid + g, width, split + g, height, "R"),
              ("DOOR3", 0.0, mid - g, base, split - g, "L"), ("DOOR4", mid + g, width, base, split - g, "R")]
    return [(sfx, x0, x1, z0, z1, h, t) for sfx, x0, x1, z0, z1, h in leaves]


def _appliance_with_doors(doors, plane, origin, x_dir, z_dir, width, depth, height, gap,
                          label, yaml_id, list_key, motions):
    """The appliance body behind its doors plus one hinged leaf solid each,
    with a ``hinged`` record per leaf (the viewer's doors.js)."""
    t = doors[0][6]
    y_dir = (z_dir[1] * x_dir[2] - z_dir[2] * x_dir[1], z_dir[2] * x_dir[0] - z_dir[0] * x_dir[2],
             z_dir[0] * x_dir[1] - z_dir[1] * x_dir[0])

    def world(x, y, z):
        return tuple(origin[i] + x * x_dir[i] + y * y_dir[i] + z * z_dir[i] for i in range(3))

    body = Pos(gap / 2.0, t, gap / 2.0) * Box(width - gap, depth - t - gap / 2.0, height - gap,
                                               align=(Align.MIN, Align.MIN, Align.MIN))
    out = [_tag(_paint(plane * body, label), yaml_id, list_key)]
    for sfx, x0, x1, z0, z1, hinge, _t in doors:
        leaf = Pos(x0, 0.0, z0) * Box(x1 - x0, t, z1 - z0, align=(Align.MIN, Align.MIN, Align.MIN))
        did = f"{yaml_id}-{sfx}"
        part = _tag(_paint(plane * leaf, label), did, list_key)
        part.furnishing_id = yaml_id  # one furnishing; each leaf its own mesh
        out.append(part)
        if motions is None:
            continue
        zm = (z0 + z1) / 2.0
        hx, fx = (x0, x1) if hinge == "L" else (x1, x0)
        centre = cad_mm_to_gltf_m(world((x0 + x1) / 2.0, t / 2.0, zm))
        hp = cad_mm_to_gltf_m(world(hx, 0.0, zm))
        fp = cad_mm_to_gltf_m(world(fx, 0.0, zm))
        op = cad_mm_to_gltf_m(world(hx, -100.0, zm))  # out of the front, local -y
        vx, vz = fp[0] - hp[0], fp[2] - hp[2]
        nx, nz = op[0] - hp[0], op[2] - hp[2]
        sign = 1 if (vz * nx + -vx * nz) > 0 else -1
        motions.append({"id": did, "kind": "hinged", "element": did,
                        "center": [round(v, 6) + 0.0 for v in centre],
                        "hinge": [round(v, 6) + 0.0 for v in hp], "axis": [0, 1, 0], "sign": sign})
    return out


def _furnishing_parts(doc: dict, motions: list | None = None, layers: dict | None = None) -> list:
    """Boxes the converter writes. A partial size has no solid."""
    if not doc or not any(doc.get(key) for key in FURNISHING_LISTS):
        return []
    if set(FURNISHING_LABELS) != set(FURNISHING_LISTS):
        raise ValueError("viewer labels do not match yaml-ifc furnishing lists")
    by_id = {
        element["id"]: element
        for key in FURNISHING_LISTS
        for element in (doc.get(key) or [])
    }
    model = build_ifc(doc)
    # Kitchen runs: bays become groups, parts become the run's children
    # (models/kitchen_ifc.py). Their solids come from the same layout below.
    runs = kitchen_cabinet.runs(doc)
    # The living-room LED panels in electrical_rooms need this same layout.
    # Do not publish an empty list from a synthetic furnishings document:
    # that would hide KR-WEST-H from PanelRun lights (C180-S) still loaded
    # from the default electrical plan.
    import electrical_rooms

    if runs:
        electrical_rooms.share_kitchen_runs(runs)
    # Petr, 2026-11-13: the ceiling line is an invariant (models/ceiling_line.py).
    ceiling_line.check_ceiling_line(doc, FURNISHING_LISTS, runs)
    for run in runs:
        run.notes.extend(ceiling_line.check_open_envelopes(
            [run], (ROOM_X0, ROOM_X1, ROOM_Y0, ROOM_Y1), ceiling_line.lining_obstacles(doc, FURNISHING_LISTS)))
    written = set(kitchen_ifc.apply(model, doc, runs).values())
    errors = validation_errors(model)
    if errors:
        raise ValueError("yaml-ifc furnishings failed validation: " + "; ".join(errors))
    parts = []
    for run in runs:
        parts.extend(_kitchen_run_parts(run, motions, layers))
    for key, ifc_class, _type_class in FURNISHINGS:
        for product in model.by_type(ifc_class):
            if product.GlobalId in written:
                continue
            element = by_id.get(_yaml_id(product))
            label = FURNISHING_LABELS[key]
            object_type = element.get("ObjectType") if element is not None else None
            if object_type in OAK_TYPES:
                label = LABEL_OAK
            elif object_type in SOFA_TYPES:
                label = LABEL_UPHOLSTERY
            elif object_type in STONE_TYPES:
                label = LABEL_WORKTOP
            parts.extend(_solid_from_product(product, label, key, element, motions))
    return parts


def soffit_solids() -> list:
    """The soffit over the north cabinets: its NaturHeld face and GKB
    underside (models/soffit.py), one mesh each, inset by the mesh gap."""
    out = []
    half = MESH_GAP_MM / 2.0
    for eid, label, x0, x1, y0, y1, z0, z1 in soffit.boxes((ROOM_X0, ROOM_X1, ROOM_Y0, ROOM_Y1), ROOM_PIERS_M):
        solid = Pos(x0 + half, y0 + half, z0 + half) * Box(
            x1 - x0 - MESH_GAP_MM, y1 - y0 - MESH_GAP_MM, z1 - z0 - MESH_GAP_MM,
            align=(Align.MIN, Align.MIN, Align.MIN))
        painted = _paint(solid, label)
        painted.element_id = eid
        out.append(painted)
    return out
