"""Room 1.11 (Ložnice) field devices on the ground floor.

Source: ``inputs/ground_floor/bedroom-1.11.yaml``. The boxes are the
extrusions ``yaml_ifc`` writes. Faces of the room are measured from
``ground-floor.yaml`` (axis and thickness), not copied from the device file.

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

from pathlib import Path

from build123d import Align, Box, Color, Plane, Pos
from ifcopenshell.util.placement import get_local_placement
from yaml_ifc import validation_errors
from yaml_ifc.supported import ELECTRICAL, FURNISHINGS, PSET_NAME
from yaml_ifc.to_ifc import build_ifc
from yaml_ifc.yamlio import load as load_yaml_ifc

from blueprints.export_utils import SECTION_LAYERS
from blueprints.scenes import cad_mm_to_gltf_m


SOURCE_PATH = (
    Path(__file__).resolve().parents[1]
    / "inputs"
    / "ground_floor"
    / "bedroom-1.11.yaml"
)
WALLS_PATH = SOURCE_PATH.with_name("ground-floor.yaml")

MM = 1000.0
MESH_GAP_MM = 1.0
# Top of the plan cut sits above the ceiling access point (top at 2.50 m).
PLAN_CUT_Z_M = 2.55

# Viewer label per YAML list. lightFixtures is a furnishing list; the rest
# are the electrical lists. Distribution boards and cables are not placed.
DEVICE_LISTS = (
    ("lightFixtures", "light"),
    ("switchingDevices", "switch"),
    ("sensors", "sensor"),
    ("outlets", "outlet"),
    ("actuators", "actuator"),
)
_LIST_CLASS = {key: ifc for key, ifc, _type in (*FURNISHINGS, *ELECTRICAL)}


def load_document(path: Path | None = None) -> dict:
    source = path or SOURCE_PATH
    if not source.is_file():
        return {}
    return load_yaml_ifc(source)


def device_records(doc: dict | None = None) -> list[dict]:
    """Each placed device plus its list name. The space is not included."""
    data = doc if doc is not None else load_document()
    records = []
    for key, label in DEVICE_LISTS:
        for element in data.get(key) or []:
            records.append({**element, "list": key, "label": label})
    return records


def room_faces(walls_path: Path | None = None) -> dict[str, float]:
    """Inner faces of bay 1.11, metres, from the wall axes.

    North is the south face of W-013 extended across the bay. W-013 starts
    at W-031, so that face is not a wall solid on this bay.
    """
    doc = load_yaml_ifc(walls_path or WALLS_PATH)
    walls = {wall["id"]: wall for wall in doc["walls"]}

    def face(wall_id: str, side: str) -> float:
        wall = walls[wall_id]
        start = wall["Axis"]["Start"]
        thickness = float(wall["Thickness"])
        if side == "east":
            return float(start[0]) + thickness / 2.0
        if side == "west":
            return float(start[0]) - thickness / 2.0
        if side == "north":
            return float(start[1]) + thickness / 2.0
        if side == "south":
            return float(start[1]) - thickness / 2.0
        raise ValueError(side)

    return {
        "west": face("W-030", "east"),
        "east": face("W-031", "west"),
        "south": face("W-002", "north"),
        "north": face("W-013", "south"),
    }


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
    return painted


def _pset_props(element) -> dict:
    found = {}
    for group in element.get("PropertySets") or []:
        if group.get("Name") == "Pset_YamlIfc":
            found.update(group.get("Properties") or {})
    return found


def _under_bed_strip(doc: dict) -> list:
    """Cable 3 is a U: the foot and the two long sides, not the headboard.

    One yaml-ifc box cannot be that U, so the viewer gets three segments
    read from the bed outline. They sit under the mattress.
    """
    bed = next((item for item in doc.get("furniture") or [] if item.get("id") == "BED-1.11"), None)
    if bed is None:
        return []
    props = _pset_props(bed)
    x0, y0 = float(props["X0"]), float(props["Y0"])
    x1, y1 = float(props["X1"]), float(props["Y1"])
    inset = 0.02
    foot = (y1 - y0) - 2.0 * inset
    side = (x1 - x0) - inset
    elev = 0.02
    return [
        _axis_box((x0, y1 - inset, elev), (0.0, -1.0), (foot, inset, inset), "C3-S"),
        _axis_box((x0 + inset, y1 - inset, elev), (1.0, 0.0), (side, inset, inset), "C3-S"),
        _axis_box((x0 + inset, y0, elev), (1.0, 0.0), (side, inset, inset), "C3-S"),
    ]


def parts(path: Path | None = None) -> list:
    """One solid per boxed device, plus the bed, the rails, and the under-bed U."""
    doc = load_document(path)
    if not doc or not any(doc.get(key) for key, _label in DEVICE_LISTS):
        return []
    labels = {key: label for key, label in DEVICE_LISTS}
    if any(key not in _LIST_CLASS for key in labels):
        raise ValueError("a device list is not in the yaml-ifc schema")
    model = build_ifc(doc)
    errors = validation_errors(model)
    if errors:
        raise ValueError("yaml-ifc bedroom devices failed validation: " + "; ".join(errors))
    found = []
    for key, label in (*DEVICE_LISTS, ("furniture", "furniture")):
        ifc_class = _LIST_CLASS[key]
        for product in model.by_type(ifc_class):
            part = _solid_from_product(product, label, key)
            if part is not None:
                found.append(part)
    found.extend(_under_bed_strip(doc))
    return found


def scenes() -> list[dict]:
    """A phone glance into 1.11, and a top view of the whole L."""
    # Outer margin includes the facade blinds and the hallway face of OP09.
    west, east = -0.2, 6.0
    south, north = 2.65, 9.75
    cx = (west + east) / 2.0
    cy = (south + north) / 2.0
    half_x = (east - west) / 2.0
    half_y = (north - south) / 2.0
    # Inside the south-west corner, looking toward the bed, the lamp, and the pendant.
    eye = (1.05, 3.45, 1.65)
    target = (2.7, 6.15, 1.35)
    return [
        {
            "id": "bedroom-1.11",
            "hFovDeg": 58,
            "title": {"en": "1.11 bedroom", "cs": "1.11 ložnice"},
            "project": "RD Šíma 1.NP",
            "camera": {
                "target": cad_mm_to_gltf_m(tuple(value * MM for value in target)),
                "position": cad_mm_to_gltf_m(tuple(value * MM for value in eye)),
                "up": [0.0, 1.0, 0.0],
            },
        },
        {
            "id": "plan-1.11",
            "projection": "ortho",
            "title": {"en": "1.11 bedroom, top", "cs": "1.11 ložnice, půdorys"},
            "project": "RD Šíma 1.NP",
            "cuts": [
                {
                    "normal": [0.0, -1.0, 0.0],
                    "anchor": [cx * MM, cy * MM, PLAN_CUT_Z_M * MM],
                }
            ],
            "camera": {
                "target": cad_mm_to_gltf_m((cx * MM, cy * MM, 0.0)),
                "position": cad_mm_to_gltf_m((cx * MM, cy * MM, 30.0 * MM)),
                "up": [0.0, 0.0, -1.0],
                "orthoFit": [half_x, half_y],
            },
        },
    ]
