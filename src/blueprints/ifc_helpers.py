"""Shared helpers for turning yaml-ifc products into viewer solids.

Used by the bedroom 1.11 and other-room electrical models
(``models/bedroom_111.py``, ``models/electrical_rooms.py``).
"""

from __future__ import annotations

from build123d import Align, Box, Color, Plane, Pos
from ifcopenshell.util.placement import get_local_placement
from yaml_ifc.supported import ELECTRICAL, FURNISHINGS, PSET_NAME

from blueprints.export_utils import SECTION_LAYERS

MM = 1000.0
MESH_GAP_MM = 1.0

# Viewer label key → IFC class, from the yaml-ifc furnishings and electrical lists.
_LIST_CLASS = {key: ifc for key, ifc, _type in (*FURNISHINGS, *ELECTRICAL)}


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


def _paint(shape, label: str):
    rgb = SECTION_LAYERS[label]["fill"]
    shape.label = label
    shape.color = Color(rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0)
    return shape


def _solid_from_product(product, label: str, list_key: str):
    solid = _body_extrusion(product)
    if solid is None:
        return None
    width, depth, height = (float(value) * MM for value in _corner_size(product, solid))
    matrix = get_local_placement(product.ObjectPlacement)
    origin = tuple(float(matrix[index, 3]) * MM for index in range(3))
    x_dir = tuple(float(matrix[index, 0]) for index in range(3))
    z_dir = tuple(float(matrix[index, 2]) for index in range(3))
    gap = min(MESH_GAP_MM, width * 0.25, depth * 0.25, height * 0.25)
    plane = Plane(origin=origin, x_dir=x_dir, z_dir=z_dir)
    box = Pos(gap / 2.0, gap / 2.0, gap / 2.0) * Box(
        width - gap,
        depth - gap,
        height - gap,
        align=(Align.MIN, Align.MIN, Align.MIN),
    )
    painted = _paint(plane * box, label)
    painted.device_id = _yaml_id(product)
    painted.device_list = list_key
    painted.element_id = painted.device_id
    return painted


def _axis_box(origin, x_dir, size, device_id: str, label: str = "light"):
    """A box from its minimum corner. ``x_dir`` is local +X in plan; local +Y is +90° about Z."""
    width, depth, height = (float(value) * MM for value in size)
    gap = min(MESH_GAP_MM, width * 0.25, depth * 0.25, height * 0.25)
    ux, uy = x_dir
    plane = Plane(
        origin=tuple(float(value) * MM for value in origin),
        x_dir=(ux, uy, 0.0),
        z_dir=(0.0, 0.0, 1.0),
    )
    box = Pos(gap / 2.0, gap / 2.0, gap / 2.0) * Box(
        width - gap,
        depth - gap,
        height - gap,
        align=(Align.MIN, Align.MIN, Align.MIN),
    )
    painted = _paint(plane * box, label)
    painted.device_id = device_id
    painted.device_list = "lightFixtures"
    painted.element_id = device_id
    return painted


def _pset_props(element) -> dict:
    found = {}
    for group in element.get("PropertySets") or []:
        if group.get("Name") == "Pset_YamlIfc":
            found.update(group.get("Properties") or {})
    return found
