"""RD Šíma ground floor — walls and the openings cut through them.

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

OP27 and OP29 store ``HeadHeight`` only. Height and sill are not invented
(yaml-ifc gives those openings no solid), so they are not cut. Their host
W-023 stays a 100 mm glazed band with only OP28 removed.

Door and window leaves are thin panels in the void: timber doors, glazing
for windows and for the W-023 run. Plain openings stay empty.

W-004 and W-014 are the 120 mm closed squares on the silná layer. The file
keeps them as short walls because IfcColumn is deferred. Neither axis meets
another wall, so at overview scale they read as two thin vertical bars.

Kitchen and living furniture is a second file, ``furnishings.yaml``, the
same commit's furnishings schema. The file has the room space, the kitchen
boxes, and the fridge. Each element is one box: the ``IfcExtrudedAreaSolid``
that ``yaml_ifc`` writes (placement origin at the minimum corner, profile
centred so the box fills Width × Depth × Height). This model does not read
those sizes itself. Solids are inset by 1 mm so flush modules do not share
a face. Walls are not moved to make a box fit. The space has no body.

Bathroom 1.20 is a third file, ``bathroom-1.20.yaml``. Floor tiles, wall
tiles, grout, and the ACO point drain are the solids ``yaml_ifc`` lays out
for that file. The screed, the membrane, and the ceiling have no measured
thickness and are not extruded.

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
    Rot,
    Solid,
    Vector,
    Wire,
)
from ifcopenshell.util.placement import get_local_placement
from yaml_ifc import footprints, validation_errors
from yaml_ifc.supported import FURNISHINGS, PSET_NAME
from yaml_ifc.to_ifc import build_ifc
from yaml_ifc.yamlio import load as load_yaml_ifc

from bathroom_120 import (
    LABEL_DRAIN,
    LABEL_FLOOR,
    LABEL_GROUT,
    LABEL_WALL,
    head_mm as bathroom_head_mm,
    parts as bathroom_parts,
    scenes as bathroom_scenes,
)
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

LABEL_MASONRY = "masonry"
LABEL_GLAZING = "glazing"
LABEL_DOOR = "door"
LABEL_CABINET = "cabinet"
LABEL_APPLIANCE = "appliance"
LABEL_SINK = "sink"
LABEL_FURNITURE = "furniture"
LABEL_RUG = "rug"
LABEL_LIGHT = "light"

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


def _solid_from_product(product, label: str, list_key: str):
    """build123d box from the converter's extrusion, in millimetres."""
    solid = _body_extrusion(product)
    if solid is None:
        return None
    width, depth, height = (_mm(value) for value in _corner_size(product, solid))
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
    painted.furnishing_id = _yaml_id(product)
    painted.furnishing_list = list_key
    return painted


def _furnishing_parts(doc: dict) -> list:
    """Boxes the converter writes. A partial size has no solid."""
    if not doc or not any(doc.get(key) for key in FURNISHING_LISTS):
        return []
    if set(FURNISHING_LABELS) != set(FURNISHING_LISTS):
        raise ValueError("viewer labels do not match yaml-ifc furnishing lists")
    model = build_ifc(doc)
    errors = validation_errors(model)
    if errors:
        raise ValueError("yaml-ifc furnishings failed validation: " + "; ".join(errors))
    parts = []
    for key, ifc_class, _type_class in FURNISHINGS:
        for product in model.by_type(ifc_class):
            part = _solid_from_product(product, FURNISHING_LABELS[key], key)
            if part is not None:
                parts.append(part)
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


def build(path: Path | None = None, furnishings_path: Path | None = None):
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
        leaves = []

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
                leaf = _leaf("door", along, width, sill, oheight, thickness, doors[opening["id"]])
                if leaf is not None:
                    leaves.append((leaf, LABEL_DOOR))
            elif opening["id"] in windows:
                leaf = _leaf(
                    "window", along, width, sill, oheight, thickness, windows[opening["id"]]
                )
                if leaf is not None:
                    leaves.append((leaf, LABEL_GLAZING))

        cut_mm3 += float(body.volume)
        angle = math.degrees(math.atan2(ey - sy, ex - sx))
        origin = (_mm(sx), _mm(sy), _mm(_base_z_m(wall, storey_z)))
        for solid in _solids(body):
            placed = _place(solid, origin, angle, label)
            placed.wall_id = wall["id"]
            parts.append(placed)
        for leaf, leaf_label in leaves:
            for solid in _solids(leaf):
                parts.append(_place(solid, origin, angle, leaf_label))

    furnishing_parts = _furnishing_parts(furnishings)
    parts.extend(furnishing_parts)
    bath_parts = bathroom_parts()
    parts.extend(bath_parts)

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
            "furnishings": len(furnishing_parts),
            "furnishings_commit": SOURCE_COMMIT,
            "bathroom_tiles": sum(
                1 for part in bath_parts if part.label in {LABEL_FLOOR, LABEL_WALL}
            ),
            "bathroom_grout": sum(1 for part in bath_parts if part.label == LABEL_GROUT),
            "bathroom_head_mm": round(bathroom_head_mm(), 3),
        },
        "footprints_omitted": omitted,
        "openings_cut": cut_ids,
        "openings_skipped": skipped,
        "openings_failed": failed,
        "thickness_filled": thickness_filled,
        "removed_volume_m3": removed,
        "expected_opening_volume_m3": expected_mm3 / 1e9,
        "doors": len(doors),
        "windows": len(windows),
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


def _plan_scene(scene_id: str, px: float, py: float, half_x_m: float, half_y_m: float) -> dict:
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
                "anchor": [_mm(px), _mm(py), _mm(PLAN_CUT_Z_M)],
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
        *bathroom_scenes(),
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
                LABEL_APPLIANCE,
                LABEL_SINK,
                LABEL_FURNITURE,
                LABEL_RUG,
                LABEL_LIGHT,
            ],
        },
        {
            "id": "bathroom",
            "children": [LABEL_FLOOR, LABEL_WALL, LABEL_GROUT, LABEL_DRAIN],
        },
    ]


if __name__ == "__main__":
    from blueprints.export_utils import export_shape, summarize_params

    shape, meta = build()
    paths = export_shape(
        shape,
        MODEL_NAME,
        scenes=scenes(),
        part_groups=part_groups(),
        label=MODEL_LABEL,
    )
    print(f"Built {MODEL_NAME}: {summarize_params(meta['derived'])}")
    if meta["openings_skipped"]:
        print("  not cut:", ", ".join(item["id"] for item in meta["openings_skipped"]))
    if meta["openings_failed"]:
        print("  failed:", ", ".join(meta["openings_failed"]))
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")
