"""Kitchen runs in IFC: one assembly per run, one group per bay.

The structure agreed with Petr (2026-11-11, docs/design/kitchen-cabinets.md):

- the run (``KR-ISL`` …, an ``IfcFurniture`` written by yaml-ifc) owns every
  physical part through ``IfcRelAggregates``: end sides, shared dividers,
  bottoms, rails, backs, fronts, drawers, plinth, worktop and cladding;
- each bay (``SF-I600a`` …) is an ``IfcGroup`` with the same GlobalId the
  yaml-ifc box had, so Home's references survive. ``IfcRelAssignsToGroup``
  lists its own parts plus the shared ones it touches; a divider is in two
  groups. The bay keeps its property sets (``Pset_Drawers`` …);
- parts are never duplicated, so a quantity take-off counts each board once;
- two root groups hang off to the side of the spatial tree: ``Furniture``
  (``GRP-FURNITURE``) lists every bay group as a child, and ``Electrical``
  (``GRP-ELECTRICAL``) is empty until circuits exist, then those systems
  are assigned under it (Petr, 2026-11-12).

yaml-ifc (vendored, not edited) has no assemblies or plain groups, so this
runs on the model it builds. ``apply`` is idempotent per model build.
Geometry comes from ``kitchen_cabinet.runs``; the IFC bodies are the same
boxes (metres) the viewer meshes are cut from.
"""

from __future__ import annotations

import numpy as np
from ifcopenshell.util.placement import get_local_placement
from yaml_ifc.ids import global_id
from yaml_ifc.supported import PSET_NAME

import kitchen_cabinet as kc

PSET_PART = "Pset_KitchenPart"

# IFC4 classes. IfcSystemFurnitureElement has PANEL and WORKSURFACE, the two
# kinds of furniture part a kitchen body is made of. Drawers have no IFC enum.
PART_CLASS = {
    "Worktop": ("IfcSystemFurnitureElement", "WORKSURFACE"),
    "Cladding": ("IfcCovering", "CLADDING"),
    "Backsplash": ("IfcCovering", "CLADDING"),
    "Drawer": ("IfcSystemFurnitureElement", "USERDEFINED"),
    "Body": ("IfcSystemFurnitureElement", "USERDEFINED"),  # a whole box bay (Carcass: Box)
    # The hob is an appliance, not a piece of the carcass: it is contained in
    # the room like the dishwasher and only joins its bay's group.
    "Hob": ("IfcElectricAppliance", "ELECTRICCOOKER"),
}
NOT_AGGREGATED = frozenset({"Hob"})
FURNITURE_GROUP_ID = "GRP-FURNITURE"
ELECTRICAL_GROUP_ID = "GRP-ELECTRICAL"
ARC_SEGMENTS = 6  # per rounded cut-out corner
DEFAULT_CLASS = ("IfcSystemFurnitureElement", "PANEL")


def _yaml_id(product) -> str | None:
    for rel in getattr(product, "IsDefinedBy", None) or []:
        if not rel.is_a("IfcRelDefinesByProperties"):
            continue
        pset = rel.RelatingPropertyDefinition
        if getattr(pset, "Name", None) != PSET_NAME:
            continue
        for prop in pset.HasProperties or []:
            if prop.Name == "id" and prop.NominalValue is not None:
                return str(prop.NominalValue.wrappedValue)
    return None


def _products_by_yaml_id(model) -> dict:
    out = {}
    for product in model.by_type("IfcObject"):
        yid = _yaml_id(product)
        if yid:
            out[yid] = product
    return out


class _Writer:
    def __init__(self, model):
        self.m = model
        self.body = next(
            c for c in model.by_type("IfcGeometricRepresentationSubContext") if c.ContextIdentifier == "Body"
        )
        self.materials = {}

    def point(self, *xyz):
        return self.m.create_entity("IfcCartesianPoint", Coordinates=tuple(float(v) for v in xyz))

    def direction(self, *xyz):
        return self.m.create_entity("IfcDirection", DirectionRatios=tuple(float(v) for v in xyz))

    def placement(self, run_product, frame: kc.Frame):
        """Part placement: the run frame, relative to the run's own placement."""
        parent = run_product.ObjectPlacement
        matrix = np.array(get_local_placement(parent), dtype=float)
        rot, origin = matrix[:3, :3], matrix[:3, 3]
        world_o = np.array([frame.ox / 1000.0, frame.oy / 1000.0, 0.0])
        local_o = rot.T @ (world_o - origin)
        local_x = rot.T @ np.array([frame.ux, frame.uy, 0.0])
        local_z = rot.T @ np.array([0.0, 0.0, 1.0])
        axis = self.m.create_entity(
            "IfcAxis2Placement3D",
            Location=self.point(*local_o),
            Axis=self.direction(*local_z),
            RefDirection=self.direction(*local_x),
        )
        return self.m.create_entity("IfcLocalPlacement", PlacementRelTo=parent, RelativePlacement=axis)

    def _polyline(self, a0, a1, c0, c1, reverse=False, radius=0.0):
        pts = _outline(a0, a1, c0, c1, radius)
        if reverse:
            pts.reverse()
        pts.append(pts[0])
        return self.m.create_entity(
            "IfcPolyline", Points=[self.m.create_entity("IfcCartesianPoint", Coordinates=p) for p in pts]
        )

    def extrusion(self, box, voids=()):
        a0, a1, c0, c1, z0, z1 = (v / 1000.0 for v in box)
        if voids:
            profile = self.m.create_entity(
                "IfcArbitraryProfileDefWithVoids",
                ProfileType="AREA",
                OuterCurve=self._polyline(a0, a1, c0, c1),
                InnerCurves=[
                    self._polyline(h.a0 / 1000.0, h.a1 / 1000.0, h.c0 / 1000.0, h.c1 / 1000.0,
                                   reverse=True, radius=h.radius / 1000.0)
                    for h in voids
                ],
            )
            pos = self.m.create_entity("IfcAxis2Placement3D", Location=self.point(0.0, 0.0, z0))
        else:
            profile = self.m.create_entity(
                "IfcRectangleProfileDef",
                ProfileType="AREA",
                Position=self.m.create_entity(
                    "IfcAxis2Placement2D",
                    Location=self.m.create_entity(
                        "IfcCartesianPoint", Coordinates=((a1 - a0) / 2.0, (c1 - c0) / 2.0)
                    ),
                ),
                XDim=a1 - a0,
                YDim=c1 - c0,
            )
            pos = self.m.create_entity("IfcAxis2Placement3D", Location=self.point(a0, c0, z0))
        return self.m.create_entity(
            "IfcExtrudedAreaSolid",
            SweptArea=profile,
            Position=pos,
            ExtrudedDirection=self.direction(0.0, 0.0, 1.0),
            Depth=z1 - z0,
        )

    def cylinder(self, box):
        a0, a1, c0, c1, z0, z1 = (v / 1000.0 for v in box)
        profile = self.m.create_entity(
            "IfcCircleProfileDef",
            ProfileType="AREA",
            Position=self.m.create_entity(
                "IfcAxis2Placement2D",
                Location=self.m.create_entity("IfcCartesianPoint", Coordinates=(0.0, 0.0)),
            ),
            Radius=(a1 - a0) / 2.0,
        )
        return self.m.create_entity(
            "IfcExtrudedAreaSolid",
            SweptArea=profile,
            Position=self.m.create_entity(
                "IfcAxis2Placement3D", Location=self.point((a0 + a1) / 2.0, (c0 + c1) / 2.0, z0)
            ),
            ExtrudedDirection=self.direction(0.0, 0.0, 1.0),
            Depth=z1 - z0,
        )

    def shape(self, part: kc.Part):
        if part.shape == "cylinder":
            items = [self.cylinder(part.boxes[0])]
            rep = self.m.create_entity(
                "IfcShapeRepresentation",
                ContextOfItems=self.body,
                RepresentationIdentifier="Body",
                RepresentationType="SweptSolid",
                Items=items,
            )
            return self.m.create_entity("IfcProductDefinitionShape", Representations=[rep])
        items = [self.extrusion(b, v) for b, v in _layers(part.boxes[0], part.voids)]
        items += [self.extrusion(b) for b in part.boxes[1:]]
        rep = self.m.create_entity(
            "IfcShapeRepresentation",
            ContextOfItems=self.body,
            RepresentationIdentifier="Body",
            RepresentationType="SweptSolid",
            Items=items,
        )
        return self.m.create_entity("IfcProductDefinitionShape", Representations=[rep])

    def value(self, v):
        if isinstance(v, bool):
            return self.m.create_entity("IfcBoolean", v)
        if isinstance(v, (int, float)):
            return self.m.create_entity("IfcReal", float(v))
        return self.m.create_entity("IfcLabel", str(v))

    def pset(self, product, name, props: dict, key: str):
        values = [
            self.m.create_entity("IfcPropertySingleValue", Name=k, NominalValue=self.value(v))
            for k, v in props.items()
            if v is not None
        ]
        pset = self.m.create_entity("IfcPropertySet", GlobalId=global_id(f"pset:{name}:{key}"), Name=name, HasProperties=values)
        self.m.create_entity(
            "IfcRelDefinesByProperties",
            GlobalId=global_id(f"rel:defines:{name}:{key}"),
            RelatedObjects=[product],
            RelatingPropertyDefinition=pset,
        )

    def material(self, name: str):
        if name not in self.materials:
            category = "Quartz surface" if "silestone" in name.lower() else None
            self.materials[name] = self.m.create_entity("IfcMaterial", Name=name, Category=category)
        return self.materials[name]


def _outline(a0, a1, c0, c1, r=0.0):
    """Rectangle corners, counter-clockwise; rounded corners as short chords."""
    if r <= 0:
        return [(a0, c0), (a1, c0), (a1, c1), (a0, c1)]
    pts = []
    for cx, cy, start in ((a1 - r, c0 + r, -90), (a1 - r, c1 - r, 0), (a0 + r, c1 - r, 90), (a0 + r, c0 + r, 180)):
        for i in range(ARC_SEGMENTS + 1):
            t = np.radians(start + 90.0 * i / ARC_SEGMENTS)
            pts.append((float(cx + r * np.cos(t)), float(cy + r * np.sin(t))))
    return pts


def _inside(v, w) -> bool:
    return v.a0 >= w.a0 and v.a1 <= w.a1 and v.c0 >= w.c0 and v.c1 <= w.c1


def _layers(box, voids):
    """Split a slab with pockets (a flush hob rebate) into a lower slab with
    the through holes and a top layer with the pockets, so each stays one
    extruded profile. Returns [(box, voids)]."""
    pockets = [v for v in voids if v.depth]
    through = [v for v in voids if not v.depth]
    if not pockets:
        return [(box, through)]
    depths = {round(v.depth, 3) for v in pockets}
    if len(depths) != 1:
        raise ValueError(f"one pocket depth per worktop, got {sorted(depths)}")
    d = pockets[0].depth
    a0, a1, c0, c1, z0, z1 = box
    top = pockets + [v for v in through if not any(_inside(v, w) for w in pockets)]
    return [((a0, a1, c0, c1, z0, z1 - d), through), ((a0, a1, c0, c1, z1 - d, z1), top)]


def _bbox(part: kc.Part) -> tuple[float, float, float]:
    a0 = min(b[0] for b in part.boxes)
    a1 = max(b[1] for b in part.boxes)
    c0 = min(b[2] for b in part.boxes)
    c1 = max(b[3] for b in part.boxes)
    z0 = min(b[4] for b in part.boxes)
    z1 = max(b[5] for b in part.boxes)
    return a1 - a0, c1 - c0, z1 - z0


def _bay_to_group(model, product, w: _Writer):
    """Replace the yaml-ifc box of a bay by an IfcGroup with the same GlobalId."""
    gid = product.GlobalId
    product.GlobalId = global_id(f"retired-box:{gid}")
    group = model.create_entity(
        "IfcGroup",
        GlobalId=gid,
        Name=product.Name,
        Description=product.Description,
        ObjectType=product.ObjectType or "KitchenBay",
    )
    rels = list(product.IsDefinedBy or []) + list(getattr(product, "IsTypedBy", None) or [])
    for rel in rels:
        if rel.is_a("IfcRelDefinesByProperties"):
            rel.RelatedObjects = [group if o == product else o for o in rel.RelatedObjects]
        elif rel.is_a("IfcRelDefinesByType"):
            rest = [o for o in rel.RelatedObjects if o != product]
            if rest:
                rel.RelatedObjects = rest
            else:
                rtype = rel.RelatingType
                model.remove(rel)
                model.remove(rtype)
    for rel in list(product.ContainedInStructure or []):
        rest = [o for o in rel.RelatedElements if o != product]
        rel.RelatedElements = rest
    placement = product.ObjectPlacement
    shape = product.Representation
    model.remove(product)
    if placement is not None and not model.get_inverse(placement):
        model.remove(placement)
    if shape is not None and not model.get_inverse(shape):
        for rep in shape.Representations or []:
            for item in rep.Items or []:
                model.remove(item)
            model.remove(rep)
        model.remove(shape)
    return group


def apply(model, doc: dict, runs: list | None = None) -> dict:
    """Rewrite the kitchen in ``model`` as run assemblies and bay groups.

    Returns ``{part_id: GlobalId}`` for every part written, so a caller can
    tell the new products from yaml-ifc's own.
    """
    runs = kc.runs(doc) if runs is None else runs
    if not runs:
        _ensure_root_groups(model, [])
        return {}
    w = _Writer(model)
    by_id = _products_by_yaml_id(model)
    written = {}
    bay_groups = []
    for run in runs:
        run_product = by_id[run.id]
        children = []
        loose = []  # contained in the room, not aggregated (the hob)
        products = {}
        for part in run.parts:
            ifc_class, predefined = PART_CLASS.get(part.role, DEFAULT_CLASS)
            values = dict(
                GlobalId=global_id(part.id),
                Name=part.name,
                ObjectType=part.role,
                ObjectPlacement=w.placement(run_product, run.frame),
                Representation=w.shape(part),
                PredefinedType=predefined,
            )
            product = model.create_entity(ifc_class, **values)
            w.pset(product, PSET_NAME, {"id": part.id}, part.id)
            length, depth, height = _bbox(part)
            w.pset(
                product,
                PSET_PART,
                {
                    "Role": part.role,
                    "Run": run.id,
                    "Width": round(length / 1000.0, 6),
                    "Depth": round(depth / 1000.0, 6),
                    "Height": round(height / 1000.0, 6),
                    "Material": part.material,
                },
                part.id,
            )
            if part.material:
                model.create_entity(
                    "IfcRelAssociatesMaterial",
                    GlobalId=global_id(f"rel:material:{part.id}"),
                    RelatedObjects=[product],
                    RelatingMaterial=w.material(part.material),
                )
            if part.role == "Hob":
                hob = next(h for h in run.hobs.values() if h.id == part.id)
                w.pset(product, kc.PSET_HOB, {"Model": part.name, "Mounting": hob.mounting,
                                              "CutoutToBackEdge": round(hob.back_edge / 1000.0, 6)}, part.id)
            (loose if part.role in NOT_AGGREGATED else children).append(product)
            products[part.id] = product
            written[part.id] = product.GlobalId
        model.create_entity(
            "IfcRelAggregates",
            GlobalId=global_id(f"rel:aggregates:{run.id}"),
            RelatingObject=run_product,
            RelatedObjects=children,
        )
        if loose:
            structure = next(
                (r.RelatingStructure for r in (run_product.ContainedInStructure or [])), None
            )
            if structure is None:
                raise ValueError(f"{run.id} is in no spatial structure; the hob needs one")
            model.create_entity(
                "IfcRelContainedInSpatialStructure",
                GlobalId=global_id(f"rel:contained:{run.id}:appliances"),
                RelatedElements=loose,
                RelatingStructure=structure,
            )
        parts_by_id = products
        for bay in run.bays:
            group = _bay_to_group(model, by_id[bay.id], w)
            bay_groups.append(group)
            members = [parts_by_id[m] for m in bay.members]
            members += [by_id[e] for e in bay.external if e in by_id]
            if not members:
                continue
            model.create_entity(
                "IfcRelAssignsToGroup",
                GlobalId=global_id(f"rel:group:{bay.id}"),
                RelatedObjects=members,
                RelatingGroup=group,
            )
    _ensure_root_groups(model, bay_groups)
    return written


def _id_pset(model, product, yaml_id: str) -> None:
    values = [
        model.create_entity(
            "IfcPropertySingleValue",
            Name="id",
            NominalValue=model.create_entity("IfcLabel", yaml_id),
        )
    ]
    pset = model.create_entity(
        "IfcPropertySet",
        GlobalId=global_id(f"pset:{PSET_NAME}:{yaml_id}"),
        Name=PSET_NAME,
        HasProperties=values,
    )
    model.create_entity(
        "IfcRelDefinesByProperties",
        GlobalId=global_id(f"rel:defines:{PSET_NAME}:{yaml_id}"),
        RelatedObjects=[product],
        RelatingPropertyDefinition=pset,
    )


def _plain_group(model, yaml_id: str, name: str, object_type: str, description: str = ""):
    group = model.create_entity(
        "IfcGroup",
        GlobalId=global_id(yaml_id),
        Name=name,
        Description=description or None,
        ObjectType=object_type,
    )
    _id_pset(model, group, yaml_id)
    return group


def _assign_to_group(model, group, members, key: str, objects_type: str | None = None) -> None:
    if not members:
        return
    values = dict(
        GlobalId=global_id(f"rel:group:{key}"),
        RelatedObjects=list(members),
        RelatingGroup=group,
    )
    if objects_type:
        values["RelatedObjectsType"] = objects_type
    model.create_entity("IfcRelAssignsToGroup", **values)


def _ensure_root_groups(model, bay_groups) -> None:
    """Furniture holds every kitchen bay; Electrical holds systems, or stays empty.

    Petr, 2026-11-12: "lets have a furniture group with cabinets being
    children, electrical group (empty for now)."
    """
    # IfcSystem includes IfcDistributionCircuit; not plain IfcGroup bays.
    systems = list(model.by_type("IfcSystem"))
    if not bay_groups and not systems:
        return
    by_id = _products_by_yaml_id(model)
    furniture = by_id.get(FURNITURE_GROUP_ID)
    if furniture is None:
        furniture = _plain_group(
            model,
            FURNITURE_GROUP_ID,
            "Furniture",
            "Furniture",
            "Kitchen cabinet bays",
        )
    electrical = by_id.get(ELECTRICAL_GROUP_ID)
    if electrical is None:
        electrical = _plain_group(
            model,
            ELECTRICAL_GROUP_ID,
            "Electrical",
            "Electrical",
            "Electrical systems and circuits",
        )
    _assign_to_group(model, furniture, bay_groups, FURNITURE_GROUP_ID, "GROUP")
    extra = [
        item
        for item in systems
        if item.GlobalId not in {furniture.GlobalId, electrical.GlobalId}
    ]
    _assign_to_group(model, electrical, extra, ELECTRICAL_GROUP_ID, "GROUP")
