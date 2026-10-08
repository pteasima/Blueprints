"""Bathroom 1.20 — sloped floor, ceramic tiles, grout, and the point drain.

Source: ``inputs/ground_floor/bathroom-1.20.yaml``. The layout is yaml-ifc's
(``floor_layout``, ``wall_layout``, ``floor_joint_widths``). Solids are
millimetres, placed in the ground-floor storey so they sit in the room.

The screed, the membrane, and the suspended ceiling have no measured
thickness, so they stay properties on the file and are not extruded. The
grate is the nominal 8 mm yaml-ifc uses when ``Height`` is omitted. Grout is
recessed 0.5 mm behind the tile face so the joint reads in the viewer; the
joint width is the layout width.

    python -m blueprints.export ground_floor
"""

from __future__ import annotations

from pathlib import Path

from build123d import Color, Face, Pos, Solid, Vector, Wire
from shapely.geometry import Polygon
from shapely.ops import unary_union

from yaml_ifc import floor_joint_widths, plane_elevation
from yaml_ifc.supported import DEFAULT_GRATE_THICKNESS
from yaml_ifc.tiling import floor_layout, plane_minmax, wall_layout
from yaml_ifc.to_ifc import build_ifc, validation_errors
from yaml_ifc.yamlio import load as load_yaml_ifc

from blueprints.export_utils import SECTION_LAYERS
from blueprints.scenes import cad_mm_to_gltf_m


SOURCE_PATH = (
    Path(__file__).resolve().parents[1] / "inputs" / "ground_floor" / "bathroom-1.20.yaml"
)

LABEL_TILE = "tile"
LABEL_GROUT = "grout"
LABEL_DRAIN = "drain"

MM = 1000.0
# Behind the tile face, so a 2 mm joint is a dark line rather than a coplanar seam.
GROUT_RECESS_M = 0.0005

# Clear inner faces. The YAML is the source; these are the same corners.
ROOM_X0 = 30.15
ROOM_X1 = 32.325
ROOM_Y0 = 6.025
ROOM_Y1 = 7.95
ROOM_WIDTH = 2.175
ROOM_DEPTH = 1.925


def load_document(path: Path | None = None) -> dict:
    return load_yaml_ifc(path or SOURCE_PATH)


def _by_id(rows) -> dict:
    return {row["id"]: row for row in rows or []}


def _plane_of(doc: dict) -> dict:
    return _by_id(doc["slabs"])["SLAB-1.20"]["Plane"]


def _floor(doc: dict) -> dict:
    return _by_id(doc["coverings"])["FLR-1.20"]["TileLayout"]


def _walls(doc: dict) -> list[dict]:
    return [
        row
        for row in doc["coverings"]
        if (row.get("TileLayout") or {}).get("Axis")
    ]


def layout(doc: dict | None = None) -> dict:
    """Tile and grout rings in storey metres, plus the shared course lines."""
    doc = doc if doc is not None else load_document()
    plane = _plane_of(doc)
    floor = _floor(doc)
    footprint = _by_id(doc["slabs"])["SLAB-1.20"]["Footprint"]
    joints = floor_joint_widths(
        floor["Tile"],
        floor["Tile"],
        floor["WallJoint"],
        plane["Gradient"],
    )
    laid = floor_layout(
        plane,
        floor["Tile"],
        floor["Tile"],
        floor["WallJoint"],
        floor["GridOrigin"],
        floor["Footprint"],
        floor.get("Cutouts") or (),
        floor.get("JointInset") or 0.0,
    )
    z_min, z_max = plane_minmax(plane, footprint)
    walls = []
    for row in _walls(doc):
        tile = row["TileLayout"]
        walls.append(
            {
                "id": row["id"],
                "layout": tile,
                "result": wall_layout(
                    plane,
                    tile["Tile"],
                    tile["Joint"],
                    tile["Courses"],
                    tile["BottomJoint"],
                    tile["GridOrigin"],
                    tile["Axis"],
                    tile["Inside"],
                    tile.get("Openings") or (),
                    z_min=z_min,
                    footprint=footprint,
                ),
            }
        )
    return {
        "doc": doc,
        "plane": plane,
        "floor": floor,
        "footprint": footprint,
        "joints": joints,
        "floor_tiles": laid["tiles"],
        "floor_grout": laid["grout"],
        "z_min": z_min,
        "z_max": z_max,
        "walls": walls,
        "levels": walls[0]["result"]["levels"],
    }


def _color(label: str) -> Color:
    rgb = SECTION_LAYERS[label]["fill"]
    return Color(rgb[0] / 255.0, rgb[1] / 255.0, rgb[2] / 255.0)


def _paint(shape, label: str):
    shape.label = label
    shape.color = _color(label)
    shape.room_id = "1.20"
    return shape


def _extrude(points: list[Vector], direction: tuple[float, float, float]):
    def _once(ring):
        face = Face(Wire.make_polygon(ring))
        solid = Solid.extrude(face, direction)
        if solid is not None and float(solid.volume) > 1.0:
            return solid
        return None

    solid = _once(points)
    if solid is not None:
        return solid
    solid = _once(list(reversed(points)))
    if solid is None:
        raise ValueError("tile face did not extrude")
    return solid


def _down(gradient, thickness_m: float) -> tuple[float, float, float]:
    """Offset along the downward normal, in millimetres."""
    gx, gy = (float(v) for v in gradient)
    length = (gx * gx + gy * gy + 1.0) ** 0.5
    scale = float(thickness_m) * MM / length
    return (-gx * scale, -gy * scale, -1.0 * scale)


def _floor_solid(ring, z_at, thickness_m: float, gradient):
    points = [
        Vector(float(x) * MM, float(y) * MM, float(z_at(x, y)) * MM) for x, y in ring
    ]
    return _extrude(points, _down(gradient, thickness_m))


def _wall_solid(polygon, frame, thickness_m: float):
    nx, ny = frame["normal"]
    points = []
    for along, z in polygon:
        x = frame["start"][0] + frame["dx"] * float(along)
        y = frame["start"][1] + frame["dy"] * float(along)
        points.append(Vector(x * MM, y * MM, float(z) * MM))
    return _extrude(points, (nx * thickness_m * MM, ny * thickness_m * MM, 0.0))


def _merged_rings(rings) -> list[list[tuple[float, float]]]:
    """Join rectangles that share an edge (the drain notch is one tile)."""
    if not rings:
        return []
    merged = unary_union([Polygon(ring) for ring in rings])
    geoms = list(merged.geoms) if merged.geom_type == "MultiPolygon" else [merged]
    outlines = []
    for geom in geoms:
        if geom.area <= 1e-10:
            continue
        coords = [(float(x), float(y)) for x, y in geom.exterior.coords]
        if len(coords) >= 2 and coords[0] == coords[-1]:
            coords = coords[:-1]
        outlines.append(coords)
    return outlines


def parts(doc: dict | None = None) -> list:
    """Tile, grout, and grate solids in storey millimetres."""
    info = layout(doc)
    plane = info["plane"]
    gradient = plane["Gradient"]
    thickness = float(info["floor"]["Thickness"])
    solids = []

    def z_at(x, y):
        return plane_elevation(plane, x, y)

    def z_grout(x, y):
        return z_at(x, y) - GROUT_RECESS_M

    for ring in _merged_rings(info["floor_tiles"]):
        solids.append(_paint(_floor_solid(ring, z_at, thickness, gradient), LABEL_TILE))
    for ring in _merged_rings(info["floor_grout"]):
        solids.append(
            _paint(_floor_solid(ring, z_grout, thickness, gradient), LABEL_GROUT)
        )

    for wall in info["walls"]:
        tile = wall["layout"]
        frame = wall["result"]["frame"]
        thick = float(tile["Thickness"])
        for piece in wall["result"]["tiles"]:
            solids.append(
                _paint(_wall_solid(piece["polygon"], frame, thick), LABEL_TILE)
            )
        for piece in wall["result"]["grout"]:
            solids.append(
                _paint(
                    _wall_solid(piece["polygon"], frame, thick - GROUT_RECESS_M),
                    LABEL_GROUT,
                )
            )

    drain = _by_id(info["doc"]["wasteTerminals"])["DRAIN-1.20"]
    ox, oy = (float(v) for v in drain["Origin"])
    width, depth = float(drain["Width"]), float(drain["Depth"])
    ring = [(0.0, 0.0), (width, 0.0), (width, depth), (0.0, depth)]
    corner = plane_elevation(plane, ox, oy)

    def z_grate(x, y):
        return plane_elevation(plane, ox + x, oy + y) - corner

    grate = _floor_solid(ring, z_grate, DEFAULT_GRATE_THICKNESS, gradient)
    # The mesh is local to the grate corner. Shift it onto the storey.
    placed = Pos(ox * MM, oy * MM, corner * MM) * grate
    solids.append(_paint(placed, LABEL_DRAIN))
    return solids


def validate(doc: dict | None = None) -> list[str]:
    """IFC validation messages. An empty list means the file is in the subset."""
    model = build_ifc(doc if doc is not None else load_document())
    return validation_errors(model)


def _mm(metres: float) -> float:
    return float(metres) * MM


def drain_bottom_z_mm(doc: dict | None = None) -> float:
    """Lowest point of the grate, millimetres. The tile is cut clear of it."""
    info = layout(doc)
    plane = info["plane"]
    points = info["footprint"]
    drain = min(points, key=lambda p: plane_elevation(plane, p[0], p[1]))
    top = plane_elevation(plane, drain[0], drain[1])
    _gx, _gy, dz = _down(plane["Gradient"], DEFAULT_GRATE_THICKNESS)
    return top * MM + dz


def _span(points, index: int) -> float:
    values = [float(point[index]) for point in points]
    return max(values) - min(values)


def _piece_size_mm(ring) -> tuple[float, float, float]:
    """Plan width, plan depth, and area, in millimetres / mm²."""
    poly = Polygon(ring)
    return (_span(ring, 0) * MM, _span(ring, 1) * MM, float(poly.area) * MM * MM)


def floor_tiles_mm(info: dict | None = None) -> list[dict]:
    """One entry per floor tile, after the drain notch is joined back together."""
    info = info if info is not None else layout()
    rows = []
    full_x = info["joints"].plan_tile_x * MM
    full_y = info["joints"].plan_tile_y * MM
    for ring in _merged_rings(info["floor_tiles"]):
        width, depth, area = _piece_size_mm(ring)
        box = width * depth
        notched = area < box - 1.0
        full = (
            abs(width - full_x) < 0.05
            and abs(depth - full_y) < 0.05
            and not notched
        )
        rows.append(
            {
                "width_mm": width,
                "depth_mm": depth,
                "area_mm2": area,
                "notched": notched,
                "full": full,
                "min_x_mm": min(point[0] for point in ring) * MM,
                "min_y_mm": min(point[1] for point in ring) * MM,
            }
        )
    rows.sort(key=lambda row: (row["min_y_mm"], row["min_x_mm"]))
    return rows


def _wall_tile_mm(tile: dict) -> dict:
    polygon = tile["polygon"]
    ss = [float(point[0]) for point in polygon]
    zs = [float(point[1]) for point in polygon]
    s0, s1 = min(ss), max(ss)
    # Height at each end of a trapezoid: top z minus the bottom z at that s.
    by_s: dict[float, list[float]] = {}
    for s, z in polygon:
        key = round(float(s), 6)
        by_s.setdefault(key, []).append(float(z))
    heights = []
    for values in by_s.values():
        heights.append((max(values) - min(values)) * MM)
    return {
        "course": int(tile["course"]),
        "along0_mm": s0 * MM,
        "along1_mm": s1 * MM,
        "width_mm": (s1 - s0) * MM,
        "height_mm": max(heights) if heights else 0.0,
        "height_min_mm": min(heights) if heights else 0.0,
        "top_mm": max(zs) * MM,
        "bottom_mm": min(zs) * MM,
    }


def wall_tiles_mm(info: dict | None = None) -> dict[str, list[dict]]:
    info = info if info is not None else layout()
    return {
        wall["id"]: [_wall_tile_mm(tile) for tile in wall["result"]["tiles"]]
        for wall in info["walls"]
    }


def head_mm(info: dict | None = None) -> float:
    info = info if info is not None else layout()
    return float(info["levels"]["head"]) * MM


def choices(info: dict | None = None) -> list[str]:
    """Where the fewest-cuts rule overrode a continuous floor grid."""
    info = info if info is not None else layout()
    notes = []
    by_id = {wall["id"]: wall for wall in info["walls"]}
    floor_origin = [float(v) for v in info["floor"]["GridOrigin"]]

    def shifted(wall_id: str) -> bool:
        origin = [float(v) for v in by_id[wall_id]["layout"]["GridOrigin"]]
        return any(abs(a - b) > 1e-6 for a, b in zip(origin, floor_origin))

    if shifted("CLAD-W"):
        notes.append(
            "West wall vertical joints do not follow the floor grid. "
            "A shared grid would put a 173 mm piece against the window and split "
            "the 250 mm pier north of the window into 129 mm and 119 mm. "
            "The grid starts at the window's south jamb: a full 600 mm tile meets "
            "the jamb, the south end is one 173 mm cut, and the pier is one 250 mm tile. "
            "That 173 mm tile is still 1200 mm tall at the drain corner."
        )
    if shifted("CLAD-N"):
        notes.append(
            "North wall vertical joints do not follow the floor grid. "
            "A shared grid would leave a 27 mm strip above the door, where a joint "
            "falls just inside the opening. The grid starts at the door's west jamb: "
            "a full 600 mm tile meets the jamb, the west end of the wall is one 573 mm cut, "
            "and the 100 mm east of the door is the pier, one tile. "
            "Above the door the head cuts the upper course to about 260 mm; "
            "that band is one full width and one 298 mm remainder, not a sliver."
        )
    return notes


def report(doc: dict | None = None) -> str:
    """Plain-text schedule for the pull request."""
    info = layout(doc)
    joints = info["joints"]
    lines = [
        f"Wall joint: {info['floor']['WallJoint'] * MM:.3f} mm",
        f"Floor joint on the slope, east-west: {joints.x * MM:.5f} mm",
        f"Floor joint on the slope, north-south: {joints.y * MM:.5f} mm",
        f"Floor plan pitch: {joints.plan_pitch_x * MM:.3f} mm by {joints.plan_pitch_y * MM:.3f} mm",
        f"Floor plan tile: {joints.plan_tile_x * MM:.3f} mm by {joints.plan_tile_y * MM:.3f} mm",
        f"Drain corner: {info['z_min'] * MM:.3f} mm",
        f"Door corner: {info['z_max'] * MM:.3f} mm",
        f"Wall tile top: {head_mm(info):.3f} mm",
        "Floor tiles:",
    ]
    for row in floor_tiles_mm(info):
        kind = "full"
        if row["notched"]:
            kind = "notched by the drain"
        elif not row["full"]:
            kind = "cut"
        lines.append(
            f"  {row['width_mm']:.3f} x {row['depth_mm']:.3f} mm plan ({kind})"
        )
    lines.append("Wall tiles (width, height at the two ends, top):")
    for wall_id, tiles in wall_tiles_mm(info).items():
        lines.append(f"  {wall_id}")
        for tile in tiles:
            lines.append(
                "    course {course}: {width:.3f} mm wide, "
                "{h0:.3f}–{h1:.3f} mm tall, top {top:.3f} mm".format(
                    course=tile["course"],
                    width=tile["width_mm"],
                    h0=tile["height_min_mm"],
                    h1=tile["height_mm"],
                    top=tile["top_mm"],
                )
            )
    for note in choices(info):
        lines.append(note)
    return "\n".join(lines)


def scenes() -> list[dict]:
    """Floor plan, a view into the room, and the door threshold."""
    cx = (ROOM_X0 + ROOM_X1) / 2.0
    cy = (ROOM_Y0 + ROOM_Y1) / 2.0

    def camera(eye, target, fov: float, scene_id: str, title: dict, **extra) -> dict:
        spec = {
            "id": scene_id,
            "hFovDeg": fov,
            "title": title,
            "project": "RD Šíma 1.NP",
            "camera": {
                "target": cad_mm_to_gltf_m(tuple(v * MM for v in target)),
                "position": cad_mm_to_gltf_m(tuple(v * MM for v in eye)),
                "up": [0.0, 1.0, 0.0],
            },
        }
        spec.update(extra)
        return spec

    floor = {
        "id": "bathroom-floor",
        "projection": "ortho",
        "title": {"en": "Bathroom 1.20 floor", "cs": "Koupelna 1.20 dlažba"},
        "project": "RD Šíma 1.NP",
        "cuts": [
            {
                "normal": [0.0, -1.0, 0.0],
                "anchor": [cx * MM, cy * MM, 120.0],
            }
        ],
        "camera": {
            "target": cad_mm_to_gltf_m((cx * MM, cy * MM, 0.0)),
            "position": cad_mm_to_gltf_m((cx * MM, cy * MM, 30.0 * MM)),
            "up": [0.0, 0.0, -1.0],
            "orthoFit": [1.50, 1.40],
        },
    }
    room = camera(
        (31.90, 7.40, 1.55),
        (30.70, 6.40, 0.35),
        50,
        "bathroom",
        {"en": "Bathroom 1.20", "cs": "Koupelna 1.20"},
    )
    door = camera(
        (31.20, 7.00, 0.42),
        (32.10, 7.90, 0.06),
        40,
        "bathroom-door",
        {"en": "Bathroom 1.20 door", "cs": "Koupelna 1.20 práh"},
    )
    return [floor, room, door]
