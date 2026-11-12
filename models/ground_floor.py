"""RD Šíma ground floor — walls and the openings cut through them.

Design facts: docs/design/ground-floor.md, bathrooms in
docs/design/bathrooms.md, room 1.02 furniture in docs/design/furnishings.md.
The visual centre of 1.02 is the false ridge, not the wall-to-wall middle.

Source: ``inputs/ground_floor/ground-floor.yaml``, vendored from
pteasima/yaml-ifc @ 0f96c26. Lengths in that file are metres. Solids are
millimetres, the same as the other build123d models, so the existing viewer
path (glTF metres, Z-up CAD → Y-up) applies unchanged.

Each wall that has a body is extruded from ``yaml_ifc.footprints``. Those
polygons are the butt joints IfcOpenShell builds for the file's
``connections``: the relating wall runs through, and the related wall is
trimmed to its face. Corner geometry is not computed here.

Wall height: no wall in the file has ``Height``. yaml-ifc extrudes a wall
that has a thickness (or a footprint/profile) and no height by 3 m
(``DEFAULT_WALL_HEIGHT``) and does not write that height back. This model
uses that 3 m. The clear heights listed in the YAML header belong to rooms,
and ``IfcSpace`` is not in the file. The obývák roof section is one room,
not a storey wall height, so it is not applied here.

W-017 has no ``Thickness``. The axis is the drawn silná line, not a measured
centreline. ``footprints`` leaves it out. A 50 mm band is centred on that
line so the wall is a solid and OP19 can be cut through it. yaml-ifc would
otherwise emit no wall body.

OP27 and OP29 (the sliding outer parts of the living-room window O11) have
height 2.5 m and sill 0 since Petr's 2026-11-12 reading of the elevation, so
W-023 is cut at OP27, OP28 and OP29 and keeps the two 100 mm posts.

Door and window leaves are thin panels in the void: timber doors, glazing
for windows and for the W-023 run. Plain openings stay empty.

W-004 and W-014 are the 120 mm closed squares on the silná layer. The file
keeps them as short walls because IfcColumn is deferred. Neither axis meets
another wall, so at overview scale they read as two thin vertical bars.

Kitchen and living furniture is a second file, ``furnishings.yaml``, the
same commit's furnishings schema. The file has the room space, the kitchen
boxes, the fridge, and the living-room run from plan v3. Each element is
one placement: the ``IfcExtrudedAreaSolid`` that ``yaml_ifc`` writes
(placement origin at the minimum corner, profile centred so the box fills
Width × Depth × Height). The kitchen, the sofa and the cabinets stay that
box. The Gatta table, the chairs and the bookshelf are drawn inside the
same box. Kitchen cabinets are monoblock runs (``kitchen_cabinet.runs``):
each part is its own solid, and ``kitchen_ifc.apply`` turns the bay boxes
into IfcGroups and the parts into the run's IfcRelAggregates children
(docs/design/kitchen-cabinets.md). This model does not read the sizes itself; the detail builders
use the extrusion. Solids are inset by 1 mm so flush modules do not share
a face. Walls are not moved to make a box fit. The space has no body.

Bathroom 1.20 is a third file, ``bathroom-1.20.yaml``. Floor tiles, wall
tiles, grout, and the ACO point drain are the solids ``yaml_ifc`` lays out
for that file. The screed, the membrane, and the ceiling have no measured
thickness and are not extruded.

Bathroom 1.07 is ``bathroom-1.07.yaml``. The shower falls 1.25% from the
south toward a wall drain in the north pre-wall. EPS under the shower is 60+40.

Bedroom 1.11 field devices are ``bedroom-1.11.yaml``. Lights, buttons,
sensors, outlets, and blind actuators are boxes in the room.

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

import math
from pathlib import Path

from build123d import (
    Align,
    Box,
    Color,
    Compound,
    Face,
    Plane,
    Pos,
    RectangleRounded,
    Rot,
    Solid,
    Vector,
    Wire,
    extrude,
)
from ifcopenshell.util.placement import get_local_placement
from yaml_ifc import footprints, validation_errors
from yaml_ifc.supported import FURNISHINGS, PSET_NAME
from yaml_ifc.to_ifc import build_ifc
from yaml_ifc.yamlio import load as load_yaml_ifc

from bathroom_107 import (
    figures as bathroom_107_figures,
    parts as bathroom_107_parts,
    scenes as bathroom_107_scenes,
)
from bedroom_111 import (
    parts as bedroom_111_parts,
    scenes as bedroom_111_scenes,
)
from bathroom_120 import (
    LABEL_DRAIN,
    LABEL_FLOOR,
    LABEL_GROUT,
    LABEL_WALL,
    head_mm as bathroom_head_mm,
    parts as bathroom_parts,
    scenes as bathroom_scenes,
)
from living_geometry import OAK_TYPES, living_detail
import kitchen_cabinet
import kitchen_ifc
from blueprints.export_utils import SECTION_LAYERS
from blueprints.scenes import cad_mm_to_gltf_m


MODEL_NAME = "ground_floor"
MODEL_LABEL = "RD Šíma 1.NP"
EXPORT_KIND = "solid"

SOURCE_REPO = "pteasima/yaml-ifc"
SOURCE_COMMIT = "0f96c26"
SOURCE_PATH = (
    Path(__file__).resolve().parents[1] / "inputs" / "ground_floor" / "ground-floor.yaml"
)
FURNISHINGS_PATH = SOURCE_PATH.with_name("furnishings.yaml")

# yaml-ifc ``DEFAULT_WALL_HEIGHT``. Not written back into the YAML.
DEFAULT_WALL_HEIGHT_M = 3.0
# Placeholder band for W-017, centred on the drawn line.
MISSING_THICKNESS_M = 0.05
GLAZED_WALLS = frozenset({"W-023"})
# Close view: this wall carries door OP39a and window OP39b side by side.
OPENING_VIEW_WALL = "W-060"

MM = 1000.0
# Cutter sticks out of the wall so the boolean does not share a face with it.
CUT_PAD_MM = 2.0
DOOR_LEAF_MM = 40.0
WINDOW_LEAF_MM = 24.0
LEAF_GAP_MM = 15.0
# Glazed hinged door (the terrace "balcony" door OP32, Petr 2026-11-12): a
# frame of this face width round a glass pane, same leaf thickness. Set by
# Pset_DoorCommon.GlazingAreaFraction > 0 on the IfcDoor (a standard IFC
# property), not by id. The frame width is a typical aluminium profile face,
# not product data.
GLAZED_DOOR_FRAME_MM = 70.0
GLAZED_DOOR_GLASS_MM = 24.0
# A sliding sash runs in its own track beside the fixed pane, so it can pass
# over it without the two panes sharing a plane. Offset from the frame centre
# toward local +Y, which is indoors on the west-to-east south-façade walls
# (W-001, W-002) that carry every sash so far (docs/design/ground-floor.md,
# Windows).
SASH_GAP_MM = 6.0
# Share of its own width a sliding sash travels when open (the viewer's
# pre-panel 80 %, kept so the animation reads the same).
WINDOW_TRAVEL = 0.8

LABEL_MASONRY = "masonry"
LABEL_GLAZING = "glazing"
LABEL_DOOR = "door"
LABEL_CABINET = "cabinet"
LABEL_APPLIANCE = "appliance"
LABEL_SINK = "sink"
LABEL_FURNITURE = "furniture"
LABEL_UPHOLSTERY = "upholstery"
LABEL_OAK = "oak"
LABEL_RUG = "rug"
LABEL_LIGHT = "light"
SOFA_TYPES = frozenset({"SofaSeat", "SofaBack", "SofaArm"})

# YAML list → viewer label. The list keys are yaml-ifc's, not a local guess.
# Spaces are not extruded.
FURNISHING_LABELS = {
    "systemFurniture": LABEL_CABINET,
    "electricAppliances": LABEL_APPLIANCE,
    "sanitaryTerminals": LABEL_SINK,
    "furniture": LABEL_FURNITURE,
    "coverings": LABEL_RUG,
    "lightFixtures": LABEL_LIGHT,
}
FURNISHING_LISTS = tuple(key for key, _ifc_class, _type_class in FURNISHINGS)
# Clear room 1.02, metres, from the wall footprints. See furnishings.yaml.
ROOM_ID = "SP-1.02"
ROOM_X0 = 18.8
ROOM_X1 = 29.9
ROOM_Y0 = 10.25
ROOM_Y1 = 15.6
# 300 mm piers in front of the north wall (W-052, W-053).
ROOM_PIERS_M = (
    (22.15, 22.45, 15.35, 15.6),
    (25.15, 25.45, 15.35, 15.6),
)
# Shrink each solid so two flush boxes do not share a face.
MESH_GAP_MM = 1.0
# Drawing note for room 1.02. Not an IfcSpace field.
ROOM_CLEAR_M = 5.05


def load_document(path: Path | None = None) -> dict:
    return load_yaml_ifc(path or SOURCE_PATH)


def load_furnishings(path: Path | None = None) -> dict:
    """Furnishings document. Missing file means the walls-only model."""
    source = path or FURNISHINGS_PATH
    if not source.is_file():
        return {}
    return load_yaml_ifc(source)


def furnishing_records(doc: dict | None = None) -> list[dict]:
    """Each YAML element plus its list name. Spaces are not included."""
    furn = doc if doc is not None else load_furnishings()
    records = []
    for key in FURNISHING_LISTS:
        for element in furn.get(key) or []:
            records.append({**element, "list": key, "label": FURNISHING_LABELS[key]})
    return records


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
    detail = living_detail(element, width, depth, height, gap) if element else None
    if detail is None:
        detail = Pos(gap / 2.0, gap / 2.0, gap / 2.0) * Box(
            width - gap,
            depth - gap,
            height - gap,
            align=(Align.MIN, Align.MIN, Align.MIN),
        )
    return [_tag(_paint(plane * detail, label), yaml_id, list_key)]


def _tag(painted, yaml_id: str, list_key: str):
    painted.furnishing_id = yaml_id
    painted.furnishing_list = list_key
    painted.element_id = yaml_id
    return painted


LABEL_WORKTOP = "worktop"
LABEL_HOB = "hob"
# Stone on a wall behind a counter that is not a kitchen run (the dining
# cabinets' backsplash): drawn as worktop stone.
STONE_TYPES = frozenset({"Backsplash"})


def _void_solid(void, z0: float, z1: float):
    """A worktop cut-out as a solid, run frame mm (rounded corners if any)."""
    w, d = void.a1 - void.a0, void.c1 - void.c0
    pos = Pos((void.a0 + void.a1) / 2.0, (void.c0 + void.c1) / 2.0, z0)
    if void.radius > 0:
        return pos * extrude(RectangleRounded(w, d, void.radius), amount=z1 - z0)
    return pos * Box(w, d, z1 - z0, align=(Align.CENTER, Align.CENTER, Align.MIN))


def _run_box(box, shrink: float):
    a0, a1, c0, c1, z0, z1 = box
    return Pos(a0 + shrink, c0 + shrink, z0 + shrink) * Box(
        a1 - a0 - 2 * shrink, c1 - c0 - 2 * shrink, z1 - z0 - 2 * shrink, align=(Align.MIN,) * 3
    )


def _kitchen_run_parts(run, motions=None) -> list:
    """Solids for one kitchen run (docs/design/kitchen-cabinets.md).

    Every part is its own mesh named by its part id, so the viewer can hide
    a divider with either neighbouring bay. Boxes shrink by half the mesh
    gap so touching boards do not share a face. A drawer is fused unshrunk
    (the viewer moves it as one connected mesh) and set back half a gap.
    """
    frame = run.frame
    plane = Plane(origin=(frame.ox, frame.oy, 0.0), x_dir=(frame.ux, frame.uy, 0.0), z_dir=(0.0, 0.0, 1.0))
    half = MESH_GAP_MM / 2.0
    out = []
    for part in run.parts:
        if part.drawer is not None:
            dr = part.drawer
            solid = _run_box(part.boxes[0], 0.0)
            for box in part.boxes[1:]:
                solid = solid + _run_box(box, 0.0)
            inward = -dr.out * half
            solid = Pos(0.0, inward, 0.0) * solid
        else:
            pieces = [_run_box(box, half) for box in part.boxes]
            solid = pieces[0] if len(pieces) == 1 else Compound(obj=pieces)
            z0, z1 = part.boxes[0][4], part.boxes[0][5]
            for void in part.voids:
                bottom = z0 - 1.0 if not void.depth else z1 - void.depth
                solid = solid - _void_solid(void, bottom, z1 + 1.0)
        label = {"worktop": LABEL_WORKTOP, "hob": LABEL_HOB}.get(part.label, LABEL_CABINET)
        out.append(_tag(_paint(plane * solid, label), part.id, "systemFurniture"))
        if part.drawer is None or motions is None:
            continue
        dr = part.drawer
        a = (min(b[0] for b in part.boxes) + max(b[1] for b in part.boxes)) / 2.0
        c = (min(b[2] for b in part.boxes) + max(b[3] for b in part.boxes)) / 2.0 - dr.out * half
        z = (min(b[4] for b in part.boxes) + max(b[5] for b in part.boxes)) / 2.0
        centre = frame.world(a, c, z)
        moved = frame.world(a, c + dr.out * dr.extension, z)
        cg = cad_mm_to_gltf_m(centre)
        mg = cad_mm_to_gltf_m(moved)
        motions.append(
            {
                "id": part.id,
                "kind": "drawer",
                "element": part.id,
                "center": [round(v, 6) for v in cg],
                "slide": [round(q - p, 6) + 0.0 for p, q in zip(cg, mg)],
            }
        )
    return out


def _furnishing_parts(doc: dict, motions: list | None = None) -> list:
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
    written = set(kitchen_ifc.apply(model, doc, runs).values())
    errors = validation_errors(model)
    if errors:
        raise ValueError("yaml-ifc furnishings failed validation: " + "; ".join(errors))
    parts = []
    for run in runs:
        parts.extend(_kitchen_run_parts(run, motions))
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


def _color(label: str) -> Color:
    rgb = SECTION_LAYERS[label]["fill"]
    return Color(rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0)


def _paint(shape, label: str):
    shape.label = label
    shape.color = _color(label)
    return shape


def _mm(metres: float) -> float:
    return float(metres) * MM


def _axis(wall: dict) -> tuple[tuple[float, float], tuple[float, float], float] | None:
    axis = wall.get("Axis") or {}
    start, end = axis.get("Start"), axis.get("End")
    if not start or not end:
        return None
    sx, sy = float(start[0]), float(start[1])
    ex, ey = float(end[0]), float(end[1])
    length = math.hypot(ex - sx, ey - sy)
    if length < 1e-9:
        raise ValueError(f"{wall.get('id')} has a zero-length axis")
    return (sx, sy), (ex, ey), length


def _thickness_m(wall: dict) -> tuple[float, bool]:
    """Return (thickness metres, True when the file omitted Thickness)."""
    if wall.get("Thickness") is not None:
        return float(wall["Thickness"]), False
    return MISSING_THICKNESS_M, True


def _height_m(wall: dict) -> float:
    if wall.get("Height") is not None:
        return float(wall["Height"])
    return DEFAULT_WALL_HEIGHT_M


def _base_z_m(wall: dict, storey_elevation: float) -> float:
    return storey_elevation + float(wall.get("Elevation") or 0.0)


def _void(opening: dict) -> tuple[float, float, float, float] | None:
    """Along, width, height, sill in metres. None when the void has no height."""
    if opening.get("Height") is None:
        return None
    height = float(opening["Height"])
    if opening.get("SillHeight") is not None:
        sill = float(opening["SillHeight"])
    elif opening.get("HeadHeight") is not None:
        sill = float(opening["HeadHeight"]) - height
    else:
        sill = 0.0
    return float(opening["AlongAxis"]), float(opening["Width"]), height, sill


def _overlap(a0: float, a1: float, b0: float, b1: float) -> float:
    return max(0.0, min(a1, b1) - max(a0, b0))


def _cutter(along, width, sill, oheight, length, y0, y1, wheight, pad: float):
    x0, w = along, width
    z0, h = sill, oheight
    if along <= pad:
        x0 -= pad
        w += pad
    if along + width >= length - pad:
        w += pad
    if sill <= pad:
        z0 -= pad
        h += pad
    if sill + oheight >= wheight - pad:
        h += pad
    depth = (y1 - y0) + 2.0 * pad
    return Pos(x0, (y0 + y1) / 2.0, z0) * Box(
        w, depth, h, align=(Align.MIN, Align.CENTER, Align.MIN)
    )


def _subtract_opening(wall, along, width, sill, oheight, length, y0, y1, wheight):
    for pad in (CUT_PAD_MM, 10.0):
        cutter = _cutter(along, width, sill, oheight, length, y0, y1, wheight, pad)
        try:
            cut = wall - cutter
        except Exception:
            continue
        if cut.volume < wall.volume - 1.0:
            return cut, True
    return wall, False


def _leaf(kind: str, along, width, sill, oheight, thickness, filler: dict):
    overall_w = filler.get("OverallWidth")
    overall_h = filler.get("OverallHeight")
    leaf_w = min(_mm(overall_w) if overall_w is not None else width, width)
    leaf_h = min(_mm(overall_h) if overall_h is not None else oheight, oheight)
    gap = min(LEAF_GAP_MM, leaf_w * 0.04, leaf_h * 0.02)
    if leaf_w > width - 2.0 * gap:
        leaf_w = width - 2.0 * gap
    if kind == "door":
        if leaf_h > oheight - gap:
            leaf_h = oheight - gap
        z = sill
    else:
        if leaf_h > oheight - 2.0 * gap:
            leaf_h = oheight - 2.0 * gap
        z = sill + (oheight - leaf_h) / 2.0
    if leaf_w < 20.0 or leaf_h < 20.0:
        return None
    leaf_t = DOOR_LEAF_MM if kind == "door" else WINDOW_LEAF_MM
    leaf_t = min(leaf_t, thickness * 0.45)
    if leaf_t >= thickness:
        leaf_t = thickness * 0.4
    x = along + (width - leaf_w) / 2.0
    return Pos(x, 0.0, z) * Box(
        leaf_w, leaf_t, leaf_h, align=(Align.MIN, Align.CENTER, Align.MIN)
    )


# A single swing leaf. Wider panels are pocket or sliding leaves modelled as
# one slab (bedroom OP03, terrace D5/D6). They slide instead of swinging; see
# _sliding_panels for how the slab splits into panels.
HINGED_LEAF_MAX_M = 1.4
_SLIDING_OPS = frozenset(
    {
        "SLIDING_TO_LEFT",
        "SLIDING_TO_RIGHT",
        "DOUBLE_DOOR_SLIDING",
        "DOUBLE_DOOR_SINGLE_SWING",
        "DOUBLE_DOOR_DOUBLE_SWING",
        "FOLDING_TO_LEFT",
        "FOLDING_TO_RIGHT",
        "DOUBLE_DOOR_FOLDING",
        "REVOLVING",
        "ROLLINGUP",
    }
)
# Sectional overhead door (the garage doors D5/D6, Petr 2026-11-12). IFC4's
# IfcDoorTypeOperationEnum has no sectional value, so the door is
# ``OperationType: USERDEFINED`` with this name in a property set
# (``UserDefinedOperationType``, the IFC attribute yaml-ifc does not write).
SECTIONAL_OPERATION = "SECTIONAL_OVERHEAD"
# Simplified sectional door for the viewer (not product data): the leaf is
# cut into this many equal horizontal sections that run up a vertical track,
# round a quarter bend of this radius at the leaf head, and then run
# horizontally into the room under the ceiling. 4 sections of about 0.56 m
# for a 2.25 m opening is typical for residential garage doors.
SECTIONAL_SECTIONS = 4
SECTIONAL_BEND_MM = 300.0
# The sectional leaf hangs behind the opening, on the inner wall face, so its
# track does not cut through the lintel. Clearance from the face:
SECTIONAL_FACE_GAP_MM = 20.0
# Hinge side is along the host wall. Facing local +Y (looking toward −Y),
# start/L is the left jamb. Swing +1 opens toward local +Y.
# SINGLE_SWING_LEFT / RIGHT name that same pair; the file does not set them.
_SWING_OPS = {
    "SINGLE_SWING_LEFT": ("start", 1),
    "DOUBLE_SWING_LEFT": ("start", 1),
    "SINGLE_SWING_RIGHT": ("end", 1),
    "DOUBLE_SWING_RIGHT": ("end", 1),
}


def _door_field(filler: dict, name: str):
    if filler.get(name) is not None:
        return filler.get(name)
    for pset in filler.get("PropertySets") or []:
        props = pset.get("Properties") or {}
        if name in props and props[name] is not None:
            return props[name]
    return None


def _hinge_side(value) -> str:
    """``start``/``L`` or ``end``/``R`` along the wall axis. Default start."""
    if value is None:
        return "start"
    text = str(value).strip().lower()
    if text in {"end", "r", "right"}:
        return "end"
    return "start"


def _opens_toward_plus_y(value) -> int:
    """+1 opens toward local +Y, −1 toward local −Y. Default +1."""
    if value is None:
        return 1
    if isinstance(value, str):
        text = value.strip().lower()
        if text in {"-", "-1", "m", "-y", "minus"}:
            return -1
        return 1
    try:
        return 1 if float(value) >= 0 else -1
    except (TypeError, ValueError):
        return 1


def hinge_rotation_sign(side: str, opens_toward_plus_y: int) -> int:
    """Sign of a 90° rotation about local +Z (glTF +Y) that opens the leaf.

    The leaf runs +X from a start hinge and the opposite way from an end
    hinge. +90° about +Z carries +X toward +Y and −X toward −Y.
    """
    plus_rotation_opens_plus_y = side != "end"
    want_plus = opens_toward_plus_y > 0
    return 1 if plus_rotation_opens_plus_y == want_plus else -1


def is_sectional(filler: dict) -> bool:
    """True for a sectional overhead door (``SECTIONAL_OPERATION``)."""
    return (
        filler.get("OperationType") == "USERDEFINED"
        and _door_field(filler, "UserDefinedOperationType") == SECTIONAL_OPERATION
    )


def _classify_door(filler: dict) -> dict:
    """Hinged, sliding or sectional, from the operation, width and hinge/swing fields."""
    op = filler.get("OperationType")
    width = filler.get("OverallWidth")
    if is_sectional(filler):
        return {
            "id": filler.get("id"),
            "kind": "sectional",
            "side": "start",
            "opens": _opens_toward_plus_y(_door_field(filler, "Swing")),
            "sign": 1,
        }
    sliding = op in _SLIDING_OPS or (
        op not in _SWING_OPS and width is not None and float(width) > HINGED_LEAF_MAX_M
    )
    if op in _SWING_OPS and not sliding:
        side, opens = _SWING_OPS[op]
    else:
        side = _hinge_side(_door_field(filler, "HingeSide"))
        opens = _opens_toward_plus_y(_door_field(filler, "Swing"))
    return {
        "id": filler.get("id"),
        "kind": "sliding" if sliding else "hinged",
        "side": side,
        "opens": opens,
        "sign": hinge_rotation_sign(side, opens),
    }


def _point_cad(location, x: float, y: float, z: float) -> tuple[float, float, float]:
    moved = location * Pos(x, y, z)
    v = moved.position
    return (float(v.X), float(v.Y), float(v.Z))


def is_glazed_door(filler: dict) -> bool:
    """True when ``Pset_DoorCommon.GlazingAreaFraction`` is above zero."""
    value = _door_field(filler, "GlazingAreaFraction")
    try:
        return value is not None and float(value) > 0.0
    except (TypeError, ValueError):
        return False


def _glazed_leaf(leaf, origin, angle, element_id: str):
    """Frame (door label) plus glass pane (glazing label), as one door part.

    The two solids sit in one labelled compound, so the GLB has one
    ``door__<id>__`` node holding both meshes and the viewer swings them
    together. ``leaf`` is the plain slab in wall-local millimetres.
    """
    bb = leaf.bounding_box()
    w = float(bb.max.X - bb.min.X)
    t = float(bb.max.Y - bb.min.Y)
    h = float(bb.max.Z - bb.min.Z)
    f = min(GLAZED_DOOR_FRAME_MM, w / 4.0, h / 4.0)
    inner = Pos(float(bb.min.X) + f, float(bb.min.Y) - 1.0, float(bb.min.Z) + f) * Box(
        w - 2.0 * f, t + 2.0, h - 2.0 * f, align=(Align.MIN, Align.MIN, Align.MIN)
    )
    frame = leaf - inner
    gt = min(GLAZED_DOOR_GLASS_MM, t * 0.6)
    yc = (float(bb.min.Y) + float(bb.max.Y)) / 2.0
    glass = Pos(float(bb.min.X) + f, yc, float(bb.min.Z) + f) * Box(
        w - 2.0 * f, gt, h - 2.0 * f, align=(Align.MIN, Align.CENTER, Align.MIN)
    )
    frame_part = _place(frame, origin, angle, LABEL_DOOR)
    glass_part = _place(glass, origin, angle, LABEL_GLAZING)
    # Named ``glazing__<id>__`` so the viewer gives it the glass material
    # (identityOf stops at the first node with an element id).
    glass_part.element_id = element_id
    part = Compound(children=[frame_part, glass_part])
    part.label = LABEL_DOOR
    part.color = _color(LABEL_DOOR)
    part.element_id = element_id
    return part


def _door_motion(part, filler: dict) -> dict | None:
    """glTF-metre hinge for one placed leaf. None when the solid is not a panel.

    The leaf's local frame (its placement) has X along the wall, Y through the
    thickness, Z up. The pivot sits on the hinge edge, mid-thickness. ``sign``
    is the 90° rotation about glTF +Y.
    """
    spec = _classify_door(filler)
    local = part.moved(part.location.inverse())
    bb = local.bounding_box()
    w = float(bb.max.X - bb.min.X)
    t = float(bb.max.Y - bb.min.Y)
    h = float(bb.max.Z - bb.min.Z)
    if w < 20.0 or t < 1.0 or h < 20.0 or t > w or t > h:
        return None
    x0, y0, z0 = float(bb.min.X), float(bb.min.Y), float(bb.min.Z)
    center_local = (x0 + w / 2.0, y0 + t / 2.0, z0 + h / 2.0)
    hinge_x = x0 if spec["side"] == "start" else x0 + w
    hinge_local = (hinge_x, y0 + t / 2.0, z0 + h / 2.0)
    center = cad_mm_to_gltf_m(_point_cad(part.location, *center_local))
    record = {
        "id": spec["id"],
        "kind": spec["kind"],
        "center": [round(v, 6) for v in center],
    }
    if spec["kind"] == "sectional":
        record.update(_sectional_record(part, (x0, y0, z0, w, t, h), spec["opens"]))
        return record
    if spec["kind"] == "sliding":
        start = cad_mm_to_gltf_m(_point_cad(part.location, x0, y0 + t / 2.0, z0 + h / 2.0))
        end = cad_mm_to_gltf_m(_point_cad(part.location, x0 + w, y0 + t / 2.0, z0 + h / 2.0))
        record["start"] = [round(v, 6) for v in start]
        record["end"] = [round(v, 6) for v in end]
        record["panels"] = _sliding_panels(filler.get("OperationType"), start, end)
        return record
    if spec["kind"] != "hinged":
        return record
    hinge = cad_mm_to_gltf_m(_point_cad(part.location, *hinge_local))
    record["hinge"] = [round(v, 6) for v in hinge]
    record["axis"] = [0.0, 1.0, 0.0]
    record["sign"] = spec["sign"]
    return record


def _sectional_record(part, box, opens: int) -> dict:
    """Viewer fields for a sectional door, glTF metres.

    ``bottom``/``top`` are the leaf's bottom and top edge centres (mid
    thickness) when shut; ``start``/``end`` its jamb ends at mid-height;
    ``inward`` the unit vector into the room the track runs into; and
    ``sections``/``bend`` the viewer's simplified track
    (``SECTIONAL_SECTIONS``, ``SECTIONAL_BEND_MM``).
    """
    x0, y0, z0, w, t, h = box
    yc, xc = y0 + t / 2.0, x0 + w / 2.0

    def at(x, y, z):
        return [round(v, 6) + 0.0 for v in cad_mm_to_gltf_m(_point_cad(part.location, x, y, z))]

    origin = cad_mm_to_gltf_m(_point_cad(part.location, xc, yc, z0))
    toward = cad_mm_to_gltf_m(_point_cad(part.location, xc, yc + 1000.0 * opens, z0))
    inward = [q - p for p, q in zip(origin, toward)]
    norm = math.sqrt(sum(v * v for v in inward)) or 1.0
    return {
        "start": at(x0, yc, z0 + h / 2.0),
        "end": at(x0 + w, yc, z0 + h / 2.0),
        "bottom": at(xc, yc, z0),
        "top": at(xc, yc, z0 + h),
        "inward": [round(v / norm, 6) + 0.0 for v in inward],
        "sections": SECTIONAL_SECTIONS,
        "bend": round(SECTIONAL_BEND_MM / MM, 6),
    }


def _sectional_leaf(leaf, opens: int, y0: float, y1: float):
    """Move a sectional leaf from the wall centre to just inside the wall face."""
    bb = leaf.bounding_box()
    t = float(bb.max.Y - bb.min.Y)
    face = y1 if opens > 0 else y0
    target = face + opens * (SECTIONAL_FACE_GAP_MM + t / 2.0)
    centre = float(bb.min.Y + bb.max.Y) / 2.0
    return Pos(0.0, target - centre, 0.0) * leaf


def _sliding_panels(operation, start, end) -> list[dict]:
    """Panels of a sliding slab for the viewer, glTF metres.

    The model keeps a sliding door as one slab from ``start`` to ``end`` (the
    jamb ends of the leaf, mid-height, mid-thickness). Each panel is a
    fraction ``span`` of that slab and ``slide`` is its full opening move.
    ``SLIDING_TO_LEFT`` / ``SLIDING_TO_RIGHT`` slide the whole slab its own
    width toward the start or end jamb (start is the left jamb, as for
    hinges). Anything else, including no ``OperationType``, is bi-parting:
    two halves, each sliding half the width over its own jamb. That is
    bedroom OP03's double pocket (docs/electrical/rooms/1.11-geometry.md).
    """
    along = [b - a for a, b in zip(start, end)]

    def scaled(factor: float) -> list[float]:
        return [round(v * factor, 6) + 0.0 for v in along]

    if operation == "SLIDING_TO_LEFT":
        return [{"span": [0.0, 1.0], "slide": scaled(-1.0)}]
    if operation == "SLIDING_TO_RIGHT":
        return [{"span": [0.0, 1.0], "slide": scaled(1.0)}]
    return [
        {"span": [0.0, 0.5], "slide": scaled(-0.5)},
        {"span": [0.5, 1.0], "slide": scaled(0.5)},
    ]


# --- Windows: which panes open --------------------------------------------
# IFC keeps the panel split on IfcWindow.PartitioningType and each panel's
# OperationType on IfcWindowPanelProperties. yaml-ifc passes
# PartitioningType through but has no panel properties, so the operations
# sit in a property set, one IFC IfcWindowPanelOperationEnum name per panel,
# in order along the host wall axis (start jamb to end jamb, the AlongAxis
# direction). Sources and the per-window reading of the drawings:
# docs/design/ground-floor.md, Windows.
WINDOW_PANELS_PSET = "Pset_BlueprintsWindow"
WINDOW_PANELS_PROP = "PanelOperations"
WINDOW_FIXED = "FIXEDCASEMENT"
WINDOW_SLIDING = "SLIDINGHORIZONTAL"
# A window with no panel data keeps the pre-panel behaviour: one pane that
# slides along the wall. It is not a claim about the real window.
WINDOW_UNKNOWN = "NOTDEFINED"
_WINDOW_OPERATIONS = frozenset(
    {
        "SIDEHUNGRIGHTHAND",
        "SIDEHUNGLEFTHAND",
        "TILTANDTURNRIGHTHAND",
        "TILTANDTURNLEFTHAND",
        "TOPHUNG",
        "BOTTOMHUNG",
        "PIVOTHORIZONTAL",
        "PIVOTVERTICAL",
        WINDOW_SLIDING,
        "SLIDINGVERTICAL",
        "REMOVABLECASEMENT",
        WINDOW_FIXED,
        "OTHEROPERATION",
        WINDOW_UNKNOWN,
    }
)
_WINDOW_PARTITIONS = {
    "SINGLE_PANEL": 1,
    "DOUBLE_PANEL_VERTICAL": 2,
    "TRIPLE_PANEL_VERTICAL": 3,
}


def window_panels(filler: dict) -> list[dict]:
    """Panels of one window, along the host wall from its start jamb.

    Each panel is ``{"operation", "span"}``; ``span`` is the share of the
    leaf width, equal splits. No panel data is one ``NOTDEFINED`` panel.
    """
    ops_text = _door_field(filler, WINDOW_PANELS_PROP)
    partition = filler.get("PartitioningType")
    if ops_text is None:
        if partition not in (None, "SINGLE_PANEL", "NOTDEFINED"):
            raise ValueError(f"{filler.get('id')}: {partition} needs {WINDOW_PANELS_PROP}")
        ops = [WINDOW_UNKNOWN]
    else:
        ops = str(ops_text).split()
    for op in ops:
        if op not in _WINDOW_OPERATIONS:
            raise ValueError(f"{filler.get('id')}: unknown window panel operation {op}")
    expected = _WINDOW_PARTITIONS.get(partition) if partition else None
    if partition and expected is None and partition != "NOTDEFINED":
        raise ValueError(f"{filler.get('id')}: unsupported PartitioningType {partition}")
    if expected is not None and expected != len(ops):
        raise ValueError(
            f"{filler.get('id')}: {partition} has {expected} panels, got {len(ops)} operations"
        )
    n = len(ops)
    return [
        {"operation": op, "span": [round(i / n, 6), round((i + 1) / n, 6)]}
        for i, op in enumerate(ops)
    ]


def window_slide_override(filler: dict) -> tuple[int | None, float | None]:
    """``SlideToward`` (start/end) and ``SlideTravel`` (metres) from the pset.

    A lone sliding sash that runs past its own opening, over a neighbouring
    fixed window (the living-room O11 unit, OP27/OP29 over OP28), names its
    direction and travel; nothing else gives them. Either may be None.
    """
    toward = _door_field(filler, "SlideToward")
    travel = _door_field(filler, "SlideTravel")
    sign = None
    if toward is not None:
        text = str(toward).strip().lower()
        if text not in {"start", "end"}:
            raise ValueError(f"{filler.get('id')}: SlideToward must be start or end, got {toward}")
        sign = 1 if text == "end" else -1
    return sign, (float(travel) if travel is not None else None)


def window_slide_sign(panels: list[dict], index: int, toward: int | None = None) -> int:
    """+1 slides toward the end jamb, −1 toward the start, 0 does not move.

    A sliding sash runs over its fixed neighbour. A lone pane (no fixed
    neighbour, e.g. the ``NOTDEFINED`` default) slides toward the end jamb,
    unless ``toward`` (``window_slide_override``) says otherwise.
    """
    op = panels[index]["operation"]
    if op == WINDOW_FIXED:
        return 0
    if op not in (WINDOW_SLIDING, WINDOW_UNKNOWN):
        # Hinged, tilting or pivoting panes are not animated yet.
        return 0
    if toward is not None:
        return toward
    before = index > 0 and panels[index - 1]["operation"] == WINDOW_FIXED
    after = index + 1 < len(panels) and panels[index + 1]["operation"] == WINDOW_FIXED
    if before and after:
        raise ValueError(f"panel {index} is between two fixed panes; slide direction is ambiguous")
    if before:
        return -1
    return 1


def _window_sashes(leaf, filler: dict, face_y: float | None = None) -> list[tuple[dict, object]]:
    """Split the glazing slab into one solid per panel.

    A moving sash steps off the frame centre by one pane plus
    ``SASH_GAP_MM`` toward local +Y so it can slide over the fixed pane.
    A sash with ``SlideTravel`` runs past its own opening, so it sits on the
    local +Y (indoor) wall face ``face_y`` plus ``SASH_GAP_MM``, clear of the
    posts between the openings.
    """
    panels = window_panels(filler)
    toward, travel = window_slide_override(filler)
    if travel is not None and face_y is not None and len(panels) == 1:
        if window_slide_sign(panels, 0, toward) != 0:
            bb = leaf.bounding_box()
            t = float(bb.max.Y - bb.min.Y)
            yc = float(bb.min.Y + bb.max.Y) / 2.0
            moved = Pos(0.0, face_y + SASH_GAP_MM + t / 2.0 - yc, 0.0) * leaf
            return [(dict(panels[0], index=0), moved)]
    if len(panels) == 1:
        return [(dict(panels[0], index=0), leaf)]
    bb = leaf.bounding_box()
    x0, w = float(bb.min.X), float(bb.max.X - bb.min.X)
    t, h = float(bb.max.Y - bb.min.Y), float(bb.max.Z - bb.min.Z)
    z0, yc = float(bb.min.Z), float((bb.min.Y + bb.max.Y) / 2.0)
    out = []
    for i, panel in enumerate(panels):
        a, b = panel["span"]
        y = yc
        if window_slide_sign(panels, i) != 0:
            y = yc + (t + SASH_GAP_MM)
        solid = Pos(x0 + w * a, y, z0) * Box(
            w * (b - a), t, h, align=(Align.MIN, Align.CENTER, Align.MIN)
        )
        out.append((dict(panel, index=i), solid))
    return out


def _window_motion(filler: dict, placed_panels: list[tuple[dict, object]]) -> dict:
    """Viewer record for one window, glTF metres.

    ``start``/``end`` are the leaf's jamb ends (mid-height). Each panel has
    its world box (``min``/``max``, to sort the glTF face meshes into
    panels), ``centre``, and ``slide``, the full opening move (zero for a
    fixed pane). ``operable`` is false when no panel moves: the viewer then
    leaves the window out of taps and tap targets.
    """
    panels = [panel for panel, _ in placed_panels]
    boxes = []
    for _, part in placed_panels:
        bb = part.bounding_box()
        a = cad_mm_to_gltf_m((bb.min.X, bb.min.Y, bb.min.Z))
        b = cad_mm_to_gltf_m((bb.max.X, bb.max.Y, bb.max.Z))
        boxes.append(([min(p, q) for p, q in zip(a, b)], [max(p, q) for p, q in zip(a, b)]))
    # Wall direction from the leaf's own placement: local +X is the axis.
    loc = placed_panels[0][1].location
    o = cad_mm_to_gltf_m(_point_cad(loc, 0.0, 0.0, 0.0))
    u = cad_mm_to_gltf_m(_point_cad(loc, 1000.0, 0.0, 0.0))
    axis = [q - p for p, q in zip(o, u)]
    norm = math.sqrt(sum(v * v for v in axis)) or 1.0
    axis = [v / norm for v in axis]
    lo = [min(b[0][k] for b in boxes) for k in range(3)]
    hi = [max(b[1][k] for b in boxes) for k in range(3)]
    mid = [(p + q) / 2.0 for p, q in zip(lo, hi)]
    half_w = sum(abs(axis[k]) * (hi[k] - lo[k]) for k in range(3)) / 2.0
    start = [mid[k] - axis[k] * half_w for k in range(3)]
    end = [mid[k] + axis[k] * half_w for k in range(3)]
    toward, travel = window_slide_override(filler)
    out_panels = []
    for i, panel in enumerate(panels):
        lo_i, hi_i = boxes[i]
        width = sum(abs(axis[k]) * (hi_i[k] - lo_i[k]) for k in range(3))
        sign = window_slide_sign(panels, i, toward)
        run = travel if travel is not None else width * WINDOW_TRAVEL
        slide = [round(axis[k] * sign * run, 6) + 0.0 for k in range(3)]
        out_panels.append(
            {
                "operation": panel["operation"],
                "span": panel["span"],
                "center": [round((p + q) / 2.0, 6) for p, q in zip(lo_i, hi_i)],
                "min": [round(v, 6) for v in lo_i],
                "max": [round(v, 6) for v in hi_i],
                "slide": slide,
            }
        )
    return {
        "id": filler["id"],
        "kind": "window",
        "partitioning": filler.get("PartitioningType") or "SINGLE_PANEL",
        "operable": any(window_slide_sign(panels, i, toward) != 0 for i in range(len(panels))),
        "start": [round(v, 6) for v in start],
        "end": [round(v, 6) for v in end],
        "panels": out_panels,
    }


def _solids(shape):
    found = list(shape.solids())
    return found or [shape]


def _place(shape, origin, angle_deg, label: str):
    moved = Pos(origin[0], origin[1], origin[2]) * Rot(0, 0, angle_deg) * shape
    return _paint(moved, label)


def _wall_label(wall_id: str) -> str:
    return LABEL_GLAZING if wall_id in GLAZED_WALLS else LABEL_MASONRY


def _local_ring_mm(ring, sx: float, sy: float, ux: float, uy: float) -> list[tuple[float, float]]:
    """Plan metres in the Axis frame → millimetres in the wall's local XY."""
    points: list[tuple[float, float]] = []
    for x, y in ring:
        dx, dy = float(x) - sx, float(y) - sy
        local = ((dx * ux + dy * uy) * MM, (-dx * uy + dy * ux) * MM)
        if points and abs(points[-1][0] - local[0]) < 1e-4 and abs(points[-1][1] - local[1]) < 1e-4:
            continue
        points.append(local)
    if (
        len(points) > 1
        and abs(points[0][0] - points[-1][0]) < 1e-4
        and abs(points[0][1] - points[-1][1]) < 1e-4
    ):
        points.pop()
    if len(points) < 3:
        raise ValueError("footprint ring has fewer than 3 corners")
    return points


def _extrude_plan(points: list[tuple[float, float]], height: float):
    face = Face(Wire.make_polygon([Vector(x, y, 0.0) for x, y in points]))
    try:
        return Solid.extrude(face, (0.0, 0.0, height))
    except Exception:
        return Solid.extrude(face.reversed(), (0.0, 0.0, height))


def _span_y(body, thickness: float) -> tuple[float, float]:
    """Local Y extent the opening cutter has to cross."""
    bounds = body.bounding_box()
    half = thickness / 2.0
    return min(float(bounds.min.Y), -half), max(float(bounds.max.Y), half)


def build(
    path: Path | None = None,
    furnishings_path: Path | None = None,
    electrical_path: Path | None = None,
):
    doc = load_document(path)
    furn_path = furnishings_path
    if furn_path is None:
        furn_path = (path or SOURCE_PATH).with_name("furnishings.yaml")
    furnishings = load_furnishings(furn_path)
    walls = doc.get("walls") or []
    openings = doc.get("openings") or []
    doors = {
        item["FillsOpening"]: item
        for item in (doc.get("doors") or [])
        if item.get("FillsOpening")
    }
    windows = {
        item["FillsOpening"]: item
        for item in (doc.get("windows") or [])
        if item.get("FillsOpening")
    }
    by_wall: dict[str, list] = {}
    for opening in openings:
        by_wall.setdefault(opening["VoidsElement"], []).append(opening)

    storey_z = float((doc.get("storey") or {}).get("Elevation") or 0.0)
    parts = []
    door_motions: list[dict] = []
    window_motions: list[dict] = []
    cut_ids: list[str] = []
    skipped: list[dict[str, str]] = []
    failed: list[str] = []
    thickness_filled: list[str] = []
    uncut_mm3 = 0.0
    cut_mm3 = 0.0
    expected_mm3 = 0.0

    wall_by_id = {wall["id"]: wall for wall in walls}
    for opening in openings:
        if opening["VoidsElement"] not in wall_by_id:
            raise ValueError(f"{opening['id']} voids unknown wall {opening['VoidsElement']}")

    rings = footprints(doc)
    omitted = [wall["id"] for wall in walls if wall["id"] not in rings]

    for wall in walls:
        frame = _axis(wall)
        if frame is None:
            raise ValueError(f"{wall.get('id')} has no axis")
        (sx, sy), (ex, ey), length_m = frame
        thick_m, filled = _thickness_m(wall)
        if filled:
            thickness_filled.append(wall["id"])
        height_m = _height_m(wall)
        length, thickness, height = _mm(length_m), _mm(thick_m), _mm(height_m)
        ux, uy = (ex - sx) / length_m, (ey - sy) / length_m
        ring = rings.get(wall["id"])
        if ring is None:
            if not filled:
                raise ValueError(f"{wall['id']} has a thickness but yaml_ifc.footprints omitted it")
            body = Box(length, thickness, height, align=(Align.MIN, Align.CENTER, Align.MIN))
        else:
            body = _extrude_plan(_local_ring_mm(ring, sx, sy, ux, uy), height)
        uncut_mm3 += float(body.volume)
        y0, y1 = _span_y(body, thickness)
        label = _wall_label(wall["id"])
        window_leaves = []
        door_leaves = []

        for opening in by_wall.get(wall["id"], []):
            void = _void(opening)
            if void is None:
                skipped.append(
                    {
                        "id": opening["id"],
                        "reason": (
                            "HeadHeight only; Height and SillHeight are not in the source, "
                            "so the void is not cut"
                        ),
                    }
                )
                continue
            along_m, width_m, oheight_m, sill_m = void
            along, width, oheight, sill = (
                _mm(along_m),
                _mm(width_m),
                _mm(oheight_m),
                _mm(sill_m),
            )
            ix = _overlap(along, along + width, 0.0, length)
            iz = _overlap(sill, sill + oheight, 0.0, height)
            expected = ix * thickness * iz
            if expected <= 1.0:
                failed.append(opening["id"])
                continue
            body, ok = _subtract_opening(
                body, along, width, sill, oheight, length, y0, y1, height
            )
            if not ok:
                failed.append(opening["id"])
                continue
            cut_ids.append(opening["id"])
            expected_mm3 += expected
            if opening["id"] in doors:
                filler = doors[opening["id"]]
                leaf = _leaf("door", along, width, sill, oheight, thickness, filler)
                offset = _door_field(filler, "LeafOffset")
                if leaf is not None and offset is not None:
                    # Leaf plane off the wall axis, local +Y, metres (OP11/OP17
                    # sit flush with the hallway face, like the WC door OP19).
                    leaf = Pos(0.0, _mm(float(offset)), 0.0) * leaf
                if leaf is not None and is_sectional(filler):
                    opens = _opens_toward_plus_y(_door_field(filler, "Swing"))
                    leaf = _sectional_leaf(leaf, opens, y0, y1)
                if leaf is not None:
                    door_leaves.append((leaf, filler))
            elif opening["id"] in windows:
                filler = windows[opening["id"]]
                leaf = _leaf("window", along, width, sill, oheight, thickness, filler)
                if leaf is not None:
                    window_leaves.append((_window_sashes(leaf, filler, y1), filler))

        cut_mm3 += float(body.volume)
        angle = math.degrees(math.atan2(ey - sy, ex - sx))
        origin = (_mm(sx), _mm(sy), _mm(_base_z_m(wall, storey_z)))
        for solid in _solids(body):
            placed = _place(solid, origin, angle, label)
            placed.wall_id = wall["id"]
            placed.element_id = wall["id"]
            parts.append(placed)
        for sashes, filler in window_leaves:
            placed_panels = []
            for panel, solid in sashes:
                placed = _place(solid, origin, angle, LABEL_GLAZING)
                placed.element_id = filler["id"]
                parts.append(placed)
                placed_panels.append((panel, placed))
            window_motions.append(_window_motion(filler, placed_panels))
        for leaf, filler in door_leaves:
            if is_glazed_door(filler) and not is_sectional(filler):
                part = _glazed_leaf(leaf, origin, angle, filler["id"])
                parts.append(part)
                # Hinge from the plain slab: it carries the wall-local frame.
                motion = _door_motion(_place(leaf, origin, angle, LABEL_DOOR), filler)
                if motion is not None:
                    door_motions.append(motion)
                continue
            for solid in _solids(leaf):
                part = _place(solid, origin, angle, LABEL_DOOR)
                part.element_id = filler["id"]
                parts.append(part)
                motion = _door_motion(part, filler)
                if motion is not None:
                    door_motions.append(motion)

    furnishing_parts = _furnishing_parts(furnishings, door_motions)
    parts.extend(furnishing_parts)
    bath_parts = bathroom_parts()
    parts.extend(bath_parts)
    bath107_parts = bathroom_107_parts()
    parts.extend(bath107_parts)
    if electrical_path is None and path is not None:
        electrical_path = Path(path).with_name("bedroom-1.11.yaml")
    bed_parts = bedroom_111_parts(electrical_path)
    parts.extend(bed_parts)
    bath107 = bathroom_107_figures()

    assembly = Compound(obj=parts, children=parts, label=MODEL_NAME)
    removed = (uncut_mm3 - cut_mm3) / 1e9
    meta = {
        "kind": EXPORT_KIND,
        "derived": {
            "source": f"{SOURCE_REPO}@{SOURCE_COMMIT}",
            "walls": len(walls),
            "openings": len(openings),
            "openings_cut": len(cut_ids),
            "wall_height_m": DEFAULT_WALL_HEIGHT_M,
            "w017_thickness_m": MISSING_THICKNESS_M,
            "footprints": len(rings),
            "furnishings": len({part.furnishing_id for part in furnishing_parts}),
            "furnishings_commit": SOURCE_COMMIT,
            "bathroom_tiles": sum(
                1 for part in bath_parts if part.label in {LABEL_FLOOR, LABEL_WALL}
            ),
            "bathroom_grout": sum(1 for part in bath_parts if part.label == LABEL_GROUT),
            "bathroom_head_mm": round(bathroom_head_mm(), 3),
            "bathroom_107_tiles": sum(
                1 for part in bath107_parts if part.label in {LABEL_FLOOR, LABEL_WALL}
            ),
            "bathroom_107_head_mm": round(bath107["head_mm"], 3),
            "bathroom_107_drop_mm": round(bath107["drop_mm"], 3),
            "bathroom_107_screed_drain_mm": round(bath107["screed_drain_mm"], 3),
            "bedroom_111": len(bed_parts),
        },
        "footprints_omitted": omitted,
        "openings_cut": cut_ids,
        "openings_skipped": skipped,
        "openings_failed": failed,
        "thickness_filled": thickness_filled,
        "removed_volume_m3": removed,
        "expected_opening_volume_m3": expected_mm3 / 1e9,
        "doors": len(doors),
        "door_motions": door_motions,
        "windows": len(windows),
        "window_motions": window_motions,
    }
    return assembly, meta


def _bounds_mm(doc: dict) -> tuple[float, float, float, float, float, float]:
    xs: list[float] = []
    ys: list[float] = []
    for wall in doc.get("walls") or []:
        frame = _axis(wall)
        if frame is None:
            continue
        (sx, sy), (ex, ey), _length = frame
        xs.extend((_mm(sx), _mm(ex)))
        ys.extend((_mm(sy), _mm(ey)))
    return min(xs), min(ys), 0.0, max(xs), max(ys), _mm(DEFAULT_WALL_HEIGHT_M)


def _overview_scene(doc: dict) -> dict:
    x0, y0, z0, x1, y1, z1 = _bounds_mm(doc)
    center = cad_mm_to_gltf_m(((x0 + x1) / 2.0, (y0 + y1) / 2.0, (z0 + z1) / 2.0))
    span_m = max(x1 - x0, y1 - y0, z1 - z0) / MM
    dist = span_m * 1.85
    return {
        "id": "overview",
        "hFovDeg": 55,
        "camera": {
            "target": center,
            "position": [
                center[0] + dist * 0.75,
                center[1] + dist * 0.55,
                center[2] + dist * 0.75,
            ],
            "up": [0.0, 1.0, 0.0],
        },
    }


def _opening_scene(doc: dict) -> dict:
    wall = next(item for item in doc["walls"] if item["id"] == OPENING_VIEW_WALL)
    (sx, sy), (ex, ey), length = _axis(wall)
    ux, uy = (ex - sx) / length, (ey - sy) / length
    # Door OP39a (along 0.475 m) and window OP39b (along 1.575 m) sit side by side.
    # The shared point is the middle of that pair after the axis snap.
    along = 1.575
    px, py = sx + ux * along, sy + uy * along
    # East of W-060 and north of W-025 (y ≈ 11.6). A camera south of that
    # wall sits against its face and never sees the door and the window.
    eye = (px + 4.0, py - 0.35, 1.65)
    target = (px, py + 0.15, 1.30)
    return {
        "id": "opening",
        "hFovDeg": 48,
        "camera": {
            "target": cad_mm_to_gltf_m((_mm(target[0]), _mm(target[1]), _mm(target[2]))),
            "position": cad_mm_to_gltf_m((_mm(eye[0]), _mm(eye[1]), _mm(eye[2]))),
            "up": [0.0, 1.0, 0.0],
        },
    }


def _posts_scene(doc: dict) -> dict:
    """W-004 and W-014, the two free-standing 120 mm squares."""
    wall_a = next(item for item in doc["walls"] if item["id"] == "W-004")
    wall_b = next(item for item in doc["walls"] if item["id"] == "W-014")
    def mid(wall):
        (sx, sy), (ex, ey), _length = _axis(wall)
        return (sx + ex) / 2.0, (sy + ey) / 2.0
    ax, ay = mid(wall_a)
    bx, by = mid(wall_b)
    px, py = (ax + bx) / 2.0, (ay + by) / 2.0
    # Close enough that a 120 mm square reads as a column, still framing both.
    eye = (px + 6.0, py - 1.6, 1.8)
    target = (px, py, 1.5)
    return {
        "id": "posts",
        "hFovDeg": 58,
        "camera": {
            "target": cad_mm_to_gltf_m((_mm(target[0]), _mm(target[1]), _mm(target[2]))),
            "position": cad_mm_to_gltf_m((_mm(eye[0]), _mm(eye[1]), _mm(eye[2]))),
            "up": [0.0, 1.0, 0.0],
        },
    }


# Butt-joint close-ups. The target is the related wall's snapped end, which
# is the centre-line intersection stored in the YAML. The eye offset is only
# a camera position; the wall solids come from yaml_ifc.footprints.
CORNER_VIEWS = (
    {
        "id": "L-W054-W001",
        "related": "W-001",
        "end": "ATSTART",
        "eye_m": (-1.15, -1.2, 2.8),
        "target_z_m": 0.35,
        "hFovDeg": 42,
    },
    {
        "id": "L-W026-W030",
        "related": "W-030",
        "end": "ATEND",
        "eye_m": (-1.25, -1.35, 2.7),
        "target_z_m": 0.35,
        "hFovDeg": 42,
    },
    {
        "id": "T-W029-W050",
        "related": "W-050",
        "end": "ATEND",
        "eye_m": (1.15, -2.15, 1.85),
        "target_z_m": 1.05,
        "hFovDeg": 40,
    },
    {
        "id": "T-W030-W018",
        "related": "W-018",
        "end": "ATSTART",
        "eye_m": (1.7, 1.15, 1.7),
        "target_z_m": 1.05,
        "hFovDeg": 40,
    },
)


def _end_m(wall: dict, kind: str) -> tuple[float, float]:
    frame = _axis(wall)
    if frame is None:
        raise ValueError(f"{wall.get('id')} has no axis")
    (sx, sy), (ex, ey), _length = frame
    return (sx, sy) if kind == "ATSTART" else (ex, ey)


def _corner_scene(doc: dict, spec: dict) -> dict:
    wall = next(item for item in doc["walls"] if item["id"] == spec["related"])
    px, py = _end_m(wall, spec["end"])
    ex, ey, ez = spec["eye_m"]
    eye = (px + ex, py + ey, ez)
    target = (px, py, spec["target_z_m"])
    return {
        "id": spec["id"],
        "hFovDeg": spec["hFovDeg"],
        "camera": {
            "target": cad_mm_to_gltf_m((_mm(target[0]), _mm(target[1]), _mm(target[2]))),
            "position": cad_mm_to_gltf_m((_mm(eye[0]), _mm(eye[1]), _mm(eye[2]))),
            "up": [0.0, 1.0, 0.0],
        },
    }


# Plan close-ups of the same four joints. Half-extent is metres: a square
# view is about 2.7 m across, wide enough to read the butt and the two walls.
PLAN_HALF_M = 1.35
PLAN_CUT_Z_M = 1.0


def _plan_scene(
    scene_id: str,
    px: float,
    py: float,
    half_x_m: float,
    half_y_m: float,
    cut_z_m: float = PLAN_CUT_Z_M,
) -> dict:
    """Top-down orthographic view with a horizontal cut at 1 m.

    The cut normal is glTF −Y (CAD down), so the storey above 1 m is removed
    and the caps are the plan footprints.
    """
    return {
        "id": scene_id,
        "projection": "ortho",
        "cuts": [
            {
                "normal": [0.0, -1.0, 0.0],
                "anchor": [_mm(px), _mm(py), _mm(cut_z_m)],
            }
        ],
        "camera": {
            "target": cad_mm_to_gltf_m((_mm(px), _mm(py), 0.0)),
            "position": cad_mm_to_gltf_m((_mm(px), _mm(py), _mm(30.0))),
            "up": [0.0, 0.0, -1.0],
            "orthoFit": [half_x_m, half_y_m],
        },
    }


def _plan_corner_scene(doc: dict, spec: dict) -> dict:
    wall = next(item for item in doc["walls"] if item["id"] == spec["related"])
    px, py = _end_m(wall, spec["end"])
    return _plan_scene(f"plan-{spec['id']}", px, py, PLAN_HALF_M, PLAN_HALF_M)


def _plan_overview_scene(doc: dict) -> dict:
    x0, y0, _z0, x1, y1, _z1 = _bounds_mm(doc)
    pad = 1000.0
    return _plan_scene(
        "plan",
        ((x0 + x1) / 2.0) / MM,
        ((y0 + y1) / 2.0) / MM,
        ((x1 - x0) / 2.0 + pad) / MM,
        ((y1 - y0) / 2.0 + pad) / MM,
    )


def _room_scene(
    scene_id: str,
    eye: tuple[float, float, float],
    target: tuple[float, float, float],
    fov: float,
    title: dict,
) -> dict:
    """Perspective inside room 1.02. Eye and target are storey metres."""
    return {
        "id": scene_id,
        "hFovDeg": fov,
        "title": title,
        "project": "RD Šíma 1.NP",
        "camera": {
            "target": cad_mm_to_gltf_m(tuple(_mm(v) for v in target)),
            "position": cad_mm_to_gltf_m(tuple(_mm(v) for v in eye)),
            "up": [0.0, 1.0, 0.0],
        },
    }


# Same three glances as the owner's SketchUp views.
# kitchen-living: standing in the kitchen, looking east toward the sofa.
# living-kitchen: standing by the sofa, looking west; glass is on the left.
# kitchen-run: looking north at the cabinet wall; tall units on the left.
FURNITURE_VIEWS = (
    {
        "id": "kitchen-living",
        "eye": (19.3, 12.0, 1.55),
        "target": (27.2, 13.6, 0.95),
        "hFovDeg": 52,
        "title": {"en": "Kitchen toward the living room", "cs": "Kuchyň k obýváku"},
    },
    {
        "id": "living-kitchen",
        "eye": (28.9, 10.7, 1.55),
        "target": (21.2, 14.2, 1.05),
        "hFovDeg": 52,
        "title": {"en": "Living room toward the kitchen", "cs": "Obývák ke kuchyni"},
    },
    {
        "id": "kitchen-run",
        "eye": (22.7, 12.35, 1.55),
        "target": (20.2, 15.35, 1.25),
        "hFovDeg": 50,
        "title": {"en": "Kitchen cabinet wall", "cs": "Kuchyňská linka"},
    },
    {
        # Island top from the west aisle: the hob (SF-I600b) and the sink
        # (SF-I500a) cut into the Silestone (kitchen-cabinets.md).
        "id": "kitchen-island",
        "eye": (19.75, 11.55, 1.85),
        "target": (20.95, 12.75, 0.9),
        "hFovDeg": 55,
        "title": {"en": "Island: hob and sink", "cs": "Ostrov: varná deska a dřez"},
    },
    {
        # The north dining wall: the oak bases and the Silestone backsplash.
        "id": "dining-wall",
        "eye": (24.0, 11.4, 1.7),
        "target": (24.0, 15.4, 1.2),
        "hFovDeg": 70,
        "title": {"en": "Dining wall backsplash", "cs": "Obklad stěny u jídelny"},
    },
    {
        "id": "living-terrace",
        "eye": (22.9, 10.55, 1.55),
        "target": (27.0, 14.3, 1.05),
        "hFovDeg": 70,
        "title": {"en": "Living room from the terrace", "cs": "Obývák od terasy"},
    },
)


def scenes() -> list[dict]:
    doc = load_document()
    return [
        _overview_scene(doc),
        _opening_scene(doc),
        _posts_scene(doc),
        *(_corner_scene(doc, spec) for spec in CORNER_VIEWS),
        _plan_overview_scene(doc),
        *(_plan_corner_scene(doc, spec) for spec in CORNER_VIEWS),
        *(
            _room_scene(spec["id"], spec["eye"], spec["target"], spec["hFovDeg"], spec["title"])
            for spec in FURNITURE_VIEWS
        ),
        _plan_scene(
            "living-plan",
            (ROOM_X0 + ROOM_X1) / 2.0,
            (ROOM_Y0 + ROOM_Y1) / 2.0,
            (ROOM_X1 - ROOM_X0) / 2.0 + 0.7,
            (ROOM_Y1 - ROOM_Y0) / 2.0 + 0.55,
            2.0,
        ),
        *bathroom_scenes(),
        *bathroom_107_scenes(),
        *bedroom_111_scenes(),
    ]


def part_groups() -> list[dict]:
    return [
        {
            "id": "shell",
            "children": [LABEL_MASONRY, LABEL_GLAZING, LABEL_DOOR],
        },
        {
            "id": "interior",
            "children": [
                LABEL_CABINET,
                LABEL_WORKTOP,
                LABEL_OAK,
                LABEL_APPLIANCE,
                LABEL_HOB,
                LABEL_SINK,
                LABEL_UPHOLSTERY,
                LABEL_FURNITURE,
                LABEL_RUG,
                LABEL_LIGHT,
            ],
        },
        {
            "id": "bathroom",
            "children": [
                LABEL_FLOOR,
                LABEL_WALL,
                LABEL_GROUT,
                LABEL_DRAIN,
                "fixture",
                "prewall",
                "screen",
                "profile",
                "vanity",
            ],
        },
        {
            "id": "electrical",
            "children": [
                "switch",
                "sensor",
                "outlet",
                "actuator",
            ],
        },
    ]


def ifc_index() -> dict:
    """Spatial index for the viewer inspector. One row per yaml-ifc product."""
    from bathroom_107 import SOURCE_PATH as BATH_107
    from bathroom_120 import SOURCE_PATH as BATH_120
    from bedroom_111 import SOURCE_PATH as BEDROOM
    from blueprints.ifc_index import index_documents

    docs = []
    for path in (SOURCE_PATH, FURNISHINGS_PATH, BEDROOM, BATH_120, BATH_107):
        if path.is_file():
            docs.append(load_yaml_ifc(path))
    return index_documents(docs, transform=kitchen_ifc.apply)


if __name__ == "__main__":
    from blueprints.export_utils import export_shape, summarize_params

    shape, meta = build()
    paths = export_shape(
        shape,
        MODEL_NAME,
        scenes=scenes(),
        part_groups=part_groups(),
        label=MODEL_LABEL,
        ifc_index=ifc_index(),
    )
    from blueprints.scenes import write_doors_json

    motions = meta.get("door_motions") or []
    repo = Path(__file__).resolve().parents[1]
    write_doors_json(MODEL_NAME, motions, repo / "docs" / "models" / f"{MODEL_NAME}.doors.json")
    write_doors_json(
        MODEL_NAME,
        meta.get("window_motions") or [],
        repo / "docs" / "models" / f"{MODEL_NAME}.windows.json",
    )
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    if meta["openings_skipped"]:
        print("  not cut:", ", ".join(item["id"] for item in meta["openings_skipped"]))
    if meta["openings_failed"]:
        print("  failed:", ", ".join(meta["openings_failed"]))
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
