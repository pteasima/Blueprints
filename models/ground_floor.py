"""RD Šíma ground floor — walls and the openings cut through them.

Source: ``inputs/ground_floor/ground-floor.yaml``, vendored from
pteasima/yaml-ifc @ 7cbed81. Lengths in that file are metres. Solids are
millimetres, the same as the other build123d models, so the existing viewer
path (glTF metres, Z-up CAD → Y-up) applies unchanged.

Wall height: no wall in the file has ``Height``. yaml-ifc extrudes a wall
that has a thickness (or a footprint/profile) and no height by 3 m
(``DEFAULT_WALL_HEIGHT``) and does not write that height back. This model
uses that 3 m. The clear heights listed in the YAML header belong to rooms,
and ``IfcSpace`` is not in the file. The obývák roof section is one room,
not a storey wall height, so it is not applied here.

W-017 has no ``Thickness``. The axis is the drawn silná line, not a measured
centreline. A 50 mm band is centred on that line so the wall is a solid and
OP19 can be cut through it. yaml-ifc would otherwise emit no wall body.

OP27 and OP29 store ``HeadHeight`` only. Height and sill are not invented
(yaml-ifc gives those openings no solid), so they are not cut. Their host
W-023 stays a 100 mm glazed band with only OP28 removed.

Door and window leaves are thin panels in the void: timber doors, glazing
for windows and for the W-023 run. Plain openings stay empty.

W-004 and W-014 are the 120 mm closed squares on the silná layer. The file
keeps them as short walls because IfcColumn is deferred. Neither axis meets
another wall, so at overview scale they read as two thin vertical bars.

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

import math
from pathlib import Path

import yaml
from build123d import Align, Box, Color, Compound, Pos, Rot

from blueprints.export_utils import SECTION_LAYERS
from blueprints.scenes import cad_mm_to_gltf_m


MODEL_NAME = "ground_floor"
MODEL_LABEL = "RD Šíma 1.NP"
EXPORT_KIND = "solid"

SOURCE_REPO = "pteasima/yaml-ifc"
SOURCE_COMMIT = "7cbed81"
SOURCE_PATH = (
    Path(__file__).resolve().parents[1] / "inputs" / "ground_floor" / "ground-floor.yaml"
)

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


def load_document(path: Path | None = None) -> dict:
    source = path or SOURCE_PATH
    with source.open(encoding="utf-8") as handle:
        doc = yaml.safe_load(handle)
    if not isinstance(doc, dict):
        raise ValueError(f"{source} is not a yaml-ifc mapping")
    return doc


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


def _cutter(along, width, sill, oheight, length, thickness, wheight, pad: float):
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
    depth = thickness + 2.0 * pad
    return Pos(x0, 0.0, z0) * Box(w, depth, h, align=(Align.MIN, Align.CENTER, Align.MIN))


def _subtract_opening(wall, along, width, sill, oheight, length, thickness, wheight):
    for pad in (CUT_PAD_MM, 10.0):
        cutter = _cutter(along, width, sill, oheight, length, thickness, wheight, pad)
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


def build(path: Path | None = None):
    doc = load_document(path)
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
        uncut_mm3 += length * thickness * height
        body = Box(length, thickness, height, align=(Align.MIN, Align.CENTER, Align.MIN))
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
                body, along, width, sill, oheight, length, thickness, height
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
            parts.append(_place(solid, origin, angle, label))
        for leaf, leaf_label in leaves:
            for solid in _solids(leaf):
                parts.append(_place(solid, origin, angle, leaf_label))

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
        },
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
    # Door OP39a and window OP39b occupy along 0.30–2.50 m.
    along = 1.40
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


def scenes() -> list[dict]:
    doc = load_document()
    return [_overview_scene(doc), _opening_scene(doc), _posts_scene(doc)]


def part_groups() -> list[dict]:
    return [
        {
            "id": "shell",
            "children": [LABEL_MASONRY, LABEL_GLAZING, LABEL_DOOR],
        }
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
