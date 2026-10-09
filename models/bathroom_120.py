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
from shapely.geometry import LineString, Polygon
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

# Floor and wall stay separate so a plate can show one without the other.
LABEL_FLOOR = "floor_tile"
LABEL_WALL = "wall_tile"
LABEL_GROUT = "grout"
LABEL_DRAIN = "drain"
TILE_THICKNESS_MM = 8.5

MM = 1000.0
# Behind the tile face, so a 2 mm joint is a dark line rather than a coplanar seam.
GROUT_RECESS_M = 0.0005
# Pieces of one module meet. The 2 mm grid joint is wider than this, so it stays.
_ABUT_M = 0.0005
# Grout strips share a module only when they are the same band. A tall vertical
# joint must not bridge the 2 mm course joint into the next module.
_Z_MATCH_M = 0.0003
# Slope over one module is under 10 mm. A step taller than this is an opening.
_NOTCH_MM = 20.0

# Clear inner faces. The YAML is the source; these are the same corners.
ROOM_X0 = 30.15
ROOM_X1 = 32.325
ROOM_Y0 = 6.025
ROOM_Y1 = 7.95
ROOM_WIDTH = 2.175
ROOM_DEPTH = 1.925
# Door opening on the north wall, and the leaf 100 mm into the reveal.
DOOR_ALONG_M = 1.175
DOOR_WIDTH_M = 0.9
LEAF_INSET_M = 0.10
ZERO_X = ROOM_X0 + DOOR_ALONG_M + DOOR_WIDTH_M
ZERO_Y = ROOM_Y1 + LEAF_INSET_M
DOOR_WEST_X = ROOM_X0 + DOOR_ALONG_M
# Ceramic work sizes (metres). Wall joint 2 mm → 598 mm plan pitch.
TILE_FLOOR_M = 0.596
TILE_WALL_ALONG_M = 0.596
TILE_WALL_HEIGHT_M = 1.194
WALL_JOINT_M = 0.002
PLAN_PITCH_M = TILE_WALL_ALONG_M + WALL_JOINT_M


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


def _open_ring(coords) -> list[tuple[float, float]]:
    ring = [(float(x), float(y)) for x, y in coords]
    if len(ring) >= 2 and ring[0] == ring[-1]:
        ring = ring[:-1]
    return ring


def _drop_colinear(ring, tol: float = 1e-12) -> list[tuple[float, float]]:
    """Drop vertices that do not turn. A shared jamb edge must not stay as a line."""
    if len(ring) < 4:
        return ring
    kept = []
    count = len(ring)
    for index in range(count):
        ax, ay = ring[(index - 1) % count]
        bx, by = ring[index]
        cx, cy = ring[(index + 1) % count]
        cross = (bx - ax) * (cy - by) - (by - ay) * (cx - bx)
        if abs(cross) <= tol:
            continue
        kept.append((bx, by))
    return kept if len(kept) >= 3 else ring


def _spans(polygon):
    ss = [float(point[0]) for point in polygon]
    zs = [float(point[1]) for point in polygon]
    return (min(ss), max(ss)), (min(zs), max(zs))


def _s_gap(left, right) -> float:
    """Positive when the s-intervals are apart, negative when they overlap."""
    return max(left[0], right[0]) - min(left[1], right[1])


def _merge_wall_pieces(pieces, *, match_z: bool) -> list[dict]:
    """Join pieces of one module that an opening edge cut apart.

    Tiles merge on s-contact alone, so a sloped bottom course becomes one
    trapezoid and an opening becomes an L, a U, or a height cut. Grout also
    requires the same z-span: the 2 mm course joint must not union with the
    tall vertical joint, or the grout network becomes one polygon with holes.
    """
    if not pieces:
        return []
    by_course: dict[int, list] = {}
    for piece in pieces:
        by_course.setdefault(int(piece["course"]), []).append(piece)
    merged = []
    for course, group in by_course.items():
        spans = [_spans(piece["polygon"]) for piece in group]
        parent = list(range(len(group)))

        def find(index, parent=parent):
            while parent[index] != index:
                parent[index] = parent[parent[index]]
                index = parent[index]
            return index

        for i in range(len(group)):
            for j in range(i + 1, len(group)):
                if _s_gap(spans[i][0], spans[j][0]) > _ABUT_M:
                    continue
                if match_z:
                    zi, zj = spans[i][1], spans[j][1]
                    if abs(zi[0] - zj[0]) > _Z_MATCH_M or abs(zi[1] - zj[1]) > _Z_MATCH_M:
                        continue
                ri, rj = find(i), find(j)
                if ri != rj:
                    parent[rj] = ri
        clusters: dict[int, list] = {}
        for index, piece in enumerate(group):
            clusters.setdefault(find(index), []).append(piece)
        for cluster in clusters.values():
            merged.extend(_union_cluster(course, cluster))
    merged.sort(key=lambda piece: (piece["course"], _spans(piece["polygon"])[0][0]))
    return merged


def _union_cluster(course: int, cluster: list) -> list[dict]:
    sloped = any(piece.get("sloped") for piece in cluster)
    if len(cluster) == 1:
        polygon = _drop_colinear(_open_ring(cluster[0]["polygon"]))
        piece = {"course": course, "polygon": polygon}
        if sloped:
            piece["sloped"] = True
        return [piece]
    geom = unary_union([Polygon(piece["polygon"]) for piece in cluster])
    if not geom.is_valid:
        geom = geom.buffer(0)
    geoms = list(geom.geoms) if geom.geom_type == "MultiPolygon" else [geom]
    pieces = []
    for shape in geoms:
        if shape.geom_type != "Polygon" or shape.area <= 1e-10:
            continue
        if shape.interiors:
            raise ValueError("a merged wall piece encloses an opening; keep that void")
        polygon = _drop_colinear(_open_ring(shape.exterior.coords))
        piece = {"course": course, "polygon": polygon}
        if sloped:
            piece["sloped"] = True
        pieces.append(piece)
    if not pieces:
        raise ValueError("wall pieces unioned to nothing")
    return pieces


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
        result = wall_layout(
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
        )
        # An opening edge splits every course, including tiles the opening
        # does not reach. Join those pieces so one module is one tile: a
        # notch where the opening actually cuts, one quadrilateral where it
        # does not.
        result["tiles"] = _merge_wall_pieces(result["tiles"], match_z=False)
        result["grout"] = _merge_wall_pieces(result["grout"], match_z=True)
        walls.append({"id": row["id"], "layout": tile, "result": result})
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
    style = SECTION_LAYERS.get(label) or SECTION_LAYERS["tile"]
    rgb = style["fill"]
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
        solids.append(_paint(_floor_solid(ring, z_at, thickness, gradient), LABEL_FLOOR))
    # Each joint stays its own strip. Unioning them makes one polygon with a
    # hole per enclosed tile; dropping the holes fills the middle of the room
    # and draws that 2×2 block as a slab.
    for ring in info["floor_grout"]:
        solids.append(
            _paint(_floor_solid(ring, z_grout, thickness, gradient), LABEL_GROUT)
        )

    for wall in info["walls"]:
        tile = wall["layout"]
        frame = wall["result"]["frame"]
        thick = float(tile["Thickness"])
        for piece in wall["result"]["tiles"]:
            solids.append(
                _paint(_wall_solid(piece["polygon"], frame, thick), LABEL_WALL)
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


def _profile_rows(polygon) -> list[dict]:
    """Height of the tile between each pair of stations along the wall."""
    poly = Polygon(polygon)
    if not poly.is_valid:
        poly = poly.buffer(0)
    stations = sorted({round(float(point[0]), 6) for point in poly.exterior.coords})
    rows = []
    for left, right in zip(stations, stations[1:]):
        if right - left <= 1e-7:
            continue
        mid = (left + right) / 2.0
        hit = poly.intersection(LineString([(mid, -2.0), (mid, 12.0)]))
        zs = _intersection_z(hit)
        if len(zs) < 2:
            continue
        z0, z1 = min(zs), max(zs)
        rows.append(
            {
                "along0_mm": left * MM,
                "along1_mm": right * MM,
                "height_mm": (z1 - z0) * MM,
                "top_mm": z1 * MM,
                "bottom_mm": z0 * MM,
            }
        )
    return rows


def _intersection_z(hit) -> list[float]:
    if hit.is_empty:
        return []
    geoms = list(hit.geoms) if hasattr(hit, "geoms") else [hit]
    zs = []
    for geom in geoms:
        if geom.geom_type == "LineString":
            zs.extend(float(point[1]) for point in geom.coords)
        elif geom.geom_type == "Point":
            zs.append(float(geom.y))
    return zs


def _coalesce_rows(rows: list[dict]) -> list[dict]:
    """Join stations that only sample a straight slope, and keep a real step."""
    if not rows:
        return []
    out = [dict(rows[0])]
    for row in rows[1:]:
        prev = out[-1]
        same = (
            abs(prev["top_mm"] - row["top_mm"]) < _NOTCH_MM
            and abs(prev["bottom_mm"] - row["bottom_mm"]) < _NOTCH_MM
        )
        if not same:
            out.append(dict(row))
            continue
        prev["along1_mm"] = row["along1_mm"]
        prev["height_mm"] = max(prev["height_mm"], row["height_mm"])
        prev["top_mm"] = max(prev["top_mm"], row["top_mm"])
        prev["bottom_mm"] = min(prev["bottom_mm"], row["bottom_mm"])
    return out


def _vertex_heights_mm(polygon) -> list[float]:
    """Tile height at each station. A slope reports both ends, not the midpoint."""
    by_s: dict[float, list[float]] = {}
    for along, z in polygon:
        by_s.setdefault(round(float(along), 6), []).append(float(z))
    heights = []
    for values in by_s.values():
        if len(values) >= 2:
            heights.append((max(values) - min(values)) * MM)
    return heights or [0.0]


def _wall_tile_mm(tile: dict) -> dict:
    polygon = tile["polygon"]
    ss = [float(point[0]) for point in polygon]
    zs = [float(point[1]) for point in polygon]
    s0, s1 = min(ss), max(ss)
    rows = _coalesce_rows(_profile_rows(polygon))
    heights = _vertex_heights_mm(polygon)
    tallest = max(row["height_mm"] for row in rows) if rows else max(heights)
    notched = len(rows) > 1 and any(tallest - row["height_mm"] > _NOTCH_MM for row in rows)
    return {
        "course": int(tile["course"]),
        "along0_mm": s0 * MM,
        "along1_mm": s1 * MM,
        "width_mm": (s1 - s0) * MM,
        "height_mm": max(heights),
        "height_min_mm": min(heights),
        "top_mm": max(zs) * MM,
        "bottom_mm": min(zs) * MM,
        "notched": notched,
        "height_cut": (not notched) and max(heights) < 1000.0,
        "rows": rows,
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


def small_pieces(info: dict | None = None, limit_mm: float = 100.0) -> list[str]:
    """Separate wall tiles narrower than ``limit_mm``. A notch leg is not its own tile."""
    info = info if info is not None else layout()
    notes = []
    for wall_id, tiles in wall_tiles_mm(info).items():
        for tile in tiles:
            if tile["width_mm"] >= limit_mm:
                continue
            notes.append(
                "{wall} course {course}: {width:.1f} mm wide, "
                "along {a0:.1f}–{a1:.1f} mm, "
                "height {h0:.1f}–{h1:.1f} mm, top {top:.1f} mm".format(
                    wall=wall_id,
                    course=tile["course"],
                    width=tile["width_mm"],
                    a0=tile["along0_mm"],
                    a1=tile["along1_mm"],
                    h0=tile["height_min_mm"],
                    h1=tile["height_mm"],
                    top=tile["top_mm"],
                )
            )
    return notes


def _row_note(row: dict, tile: dict) -> str:
    width = row["along1_mm"] - row["along0_mm"]
    short = tile["height_mm"] - row["height_mm"] > _NOTCH_MM
    span = f"{row['along0_mm']:.1f}–{row['along1_mm']:.1f} mm"
    if not short:
        return f"      {span}: full height, top {row['top_mm']:.3f} mm"
    if row["bottom_mm"] > tile["bottom_mm"] + _NOTCH_MM:
        name = "leg" if width < 100.0 else "band"
        kind = f"{width:.1f} mm {name} above {row['bottom_mm']:.3f} mm"
    else:
        kind = f"{width:.1f} mm cut, top {row['top_mm']:.3f} mm"
    return f"      {span}: {kind}, {row['height_mm']:.3f} mm tall"


def report(doc: dict | None = None) -> str:
    """Plain-text schedule for the pull request."""
    info = layout(doc)
    joints = info["joints"]
    lines = [
        f"Wall joint: {info['floor']['WallJoint'] * MM:.3f} mm",
        f"Floor joint on the slope, east-west: {joints.x * MM:.3f} mm",
        f"Floor joint on the slope, north-south: {joints.y * MM:.3f} mm",
        f"Floor plan pitch: {joints.plan_pitch_x * MM:.3f} mm by {joints.plan_pitch_y * MM:.3f} mm",
        f"Floor plan tile: {joints.plan_tile_x * MM:.3f} mm by {joints.plan_tile_y * MM:.3f} mm",
        f"Gradient: [{info['plane']['Gradient'][0]:.6f}, {info['plane']['Gradient'][1]:.6f}]",
        f"Zero at the east jamb ({ZERO_X:.3f}, {ZERO_Y:.3f}): "
        f"{plane_elevation(info['plane'], ZERO_X, ZERO_Y) * MM:.3f} mm",
        f"Drain corner: {info['z_min'] * MM:.3f} mm",
        f"Northeast corner: {info['z_max'] * MM:.3f} mm",
        f"Wall tile top: {head_mm(info):.3f} mm",
        "Floor tiles:",
    ]
    for row in floor_tiles_mm(info):
        kind = "full"
        if row["notched"] and row["min_x_mm"] < ROOM_X0 * MM + 50.0 and row["min_y_mm"] < ROOM_Y0 * MM + 50.0:
            kind = "notched by the drain"
        elif row["notched"]:
            kind = "notched by the reveal"
        elif not row["full"]:
            kind = "cut"
        lines.append(
            f"  {row['width_mm']:.3f} x {row['depth_mm']:.3f} mm plan ({kind})"
        )
    lines.append("Wall tiles (one per grid module and course):")
    for wall_id, tiles in wall_tiles_mm(info).items():
        lines.append(f"  {wall_id}")
        for tile in tiles:
            if tile["notched"]:
                kind = "notched"
            elif tile["height_cut"]:
                kind = (
                    "height cut, bottom {bottom:.3f} mm".format(bottom=tile["bottom_mm"])
                )
            else:
                kind = "full module"
            lines.append(
                "    course {course}: {width:.3f} mm module, "
                "along {a0:.1f}–{a1:.1f} mm, "
                "{h0:.3f}–{h1:.3f} mm tall, top {top:.3f} mm ({kind})".format(
                    course=tile["course"],
                    width=tile["width_mm"],
                    a0=tile["along0_mm"],
                    a1=tile["along1_mm"],
                    h0=tile["height_min_mm"],
                    h1=tile["height_mm"],
                    top=tile["top_mm"],
                    kind=kind,
                )
            )
            if tile["notched"]:
                for row in tile["rows"]:
                    lines.append(_row_note(row, tile))
    lines.append("Separate tiles under 100 mm:")
    small = small_pieces(info)
    if small:
        lines.extend(f"  {note}" for note in small)
    else:
        lines.append("  none")
    return "\n".join(lines)


MODEL_NAME = "bathroom_120"
MODEL_LABEL = "Koupelna 1.20"
PROJECT = "RD Šíma 1.NP"
# Sections crop to the floor. ×10 makes the 1.5% fall and the datum readable.
SECTION_EXAGGERATION = 10
# Notes, leaders, and dimension lines. Tile and joint strokes stay black.
ANNOTATION_BLUE = "#1d4ed8"


def _mm_text(metres: float, digits: int = 3, signed: bool = False) -> str:
    mm = float(metres) * MM
    text = f"{mm:.{digits}f}"
    if signed and mm > 0:
        text = "+" + text
    return text


def _tx(en: str, cs: str) -> dict[str, str]:
    return {"en": en, "cs": cs}


def _callout(
    anchor,
    en: str,
    cs: str,
    offset: tuple[float, float],
    *,
    leader: bool = True,
    size: float | None = None,
) -> dict:
    item = {
        "kind": "callout",
        "anchor": [round(float(v), 1) for v in anchor],
        "text": _tx(en, cs),
        "offset": [round(float(offset[0]), 3), round(float(offset[1]), 3)],
    }
    if not leader:
        item["leader"] = False
    if size is not None and abs(float(size) - 1.0) > 1e-6:
        item["size"] = round(float(size), 2)
    return item


def _dim(a, b, offset: float, en: str | None = None, cs: str | None = None) -> dict:
    item: dict = {
        "kind": "dim",
        "a": [round(float(v), 1) for v in a],
        "b": [round(float(v), 1) for v in b],
        "offset": round(float(offset), 3),
    }
    if en and cs:
        item["text"] = _tx(en, cs)
    return item


def _line(points, *, dashed: bool = False, color: str | None = None, arrow: bool = False) -> dict:
    item: dict = {
        "kind": "line",
        "points": [[round(float(v), 1) for v in point] for point in points],
    }
    if dashed:
        item["dashed"] = True
    if color:
        item["color"] = color
    if arrow:
        item["arrow"] = True
    return item


def _ortho_pose(target_cad, look_gltf, up_gltf, half_w: float, half_h: float) -> dict:
    target = cad_mm_to_gltf_m(target_cad)
    dist = max(half_w, half_h, 0.35) * 5.0
    return {
        "target": target,
        "position": [
            target[0] - look_gltf[0] * dist,
            target[1] - look_gltf[1] * dist,
            target[2] - look_gltf[2] * dist,
        ],
        "up": list(up_gltf),
        "orthoFit": [half_w, half_h],
    }


def _z_mm(plane, x_m: float, y_m: float) -> float:
    return plane_elevation(plane, x_m, y_m) * MM


def _spot(plane, x_m: float, y_m: float, name_en: str, name_cs: str, offset) -> dict:
    z = _z_mm(plane, x_m, y_m)
    label = _mm_text(z / MM, signed=True)
    return _callout(
        (x_m * MM, y_m * MM, z),
        f"{name_en}\n{label} mm",
        f"{name_cs}\n{label} mm",
        offset,
    )


def drawing_figures(info: dict | None = None) -> dict:
    """Numbers the plates quote. Rounded the way the labels are."""
    info = info if info is not None else layout()
    plane = info["plane"]
    joints = info["joints"]
    gx, gy = (float(v) for v in plane["Gradient"])

    def at(x_m, y_m):
        return plane_elevation(plane, x_m, y_m)

    return {
        "gradient": [gx, gy],
        "wall_joint_mm": _mm_text(info["floor"]["WallJoint"]),
        "floor_joint_x_mm": _mm_text(joints.x),
        "floor_joint_y_mm": _mm_text(joints.y),
        "plan_pitch_mm": _mm_text(joints.plan_pitch_x, 0),
        "head_mm": _mm_text(info["levels"]["head"]),
        "drain_mm": _mm_text(at(ROOM_X0, ROOM_Y0), signed=True),
        "ne_mm": _mm_text(at(ROOM_X1, ROOM_Y1), signed=True),
        "se_mm": _mm_text(at(ROOM_X1, ROOM_Y0), signed=True),
        "nw_mm": _mm_text(at(ROOM_X0, ROOM_Y1), signed=True),
        "zero_mm": _mm_text(at(ZERO_X, ZERO_Y), signed=True),
        "west_jamb_mm": _mm_text(at(DOOR_WEST_X, ZERO_Y), signed=True),
        "percent_diagonal": "1.500%",
        "percent_x": f"{gx * 100:.4f}%",
        "percent_y": f"{gy * 100:.4f}%",
        "door_fall_mm": _mm_text(gx * DOOR_WIDTH_M),
    }


def _plate(shown: dict) -> dict:
    """Line plates: no mesh edges, and only the parts named in ``shown``."""
    opacity = {LABEL_FLOOR: 0, LABEL_WALL: 0, LABEL_GROUT: 0, LABEL_DRAIN: 0}
    opacity.update(shown)
    return {
        "opacityDefault": 0,
        "opacity": opacity,
        "edges": "none",
        "annotationColor": ANNOTATION_BLUE,
    }


def _segment(a, b) -> dict:
    return _line((a, b))


def _floor_grid(info: dict) -> list[dict]:
    """One stroke per joint, plus the room outline and the drain."""
    lines = [_line(info["footprint"] and [
        (float(x) * MM, float(y) * MM, 2.0) for x, y in (*info["footprint"], info["footprint"][0])
    ])]
    for ring in info["floor_grout"]:
        xs = [float(p[0]) for p in ring]
        ys = [float(p[1]) for p in ring]
        width = (max(xs) - min(xs)) * MM
        depth = (max(ys) - min(ys)) * MM
        if min(width, depth) > 10.0:
            continue
        if width < depth:
            x = (min(xs) + max(xs)) / 2.0 * MM
            lines.append(_segment((x, min(ys) * MM, 2.0), (x, max(ys) * MM, 2.0)))
        else:
            y = (min(ys) + max(ys)) / 2.0 * MM
            lines.append(_segment((min(xs) * MM, y, 2.0), (max(xs) * MM, y, 2.0)))
    x0, y0 = ROOM_X0 * MM, ROOM_Y0 * MM
    lines.append(
        _line(
            [
                (x0, y0, 4.0),
                (x0 + 300.0, y0, 4.0),
                (x0 + 300.0, y0 + 300.0, 4.0),
                (x0, y0 + 300.0, 4.0),
                (x0, y0, 4.0),
            ]
        )
    )
    return lines


def _plan_drawing(info: dict) -> dict:
    plane = info["plane"]
    fig = drawing_figures(info)
    joints = info["joints"]
    x0 = ROOM_X0 * MM
    x1 = ROOM_X1 * MM
    y0 = ROOM_Y0 * MM
    y1 = ROOM_Y1 * MM
    y_leaf = ZERO_Y * MM
    tile_x = joints.plan_tile_x * MM
    cx = (x0 + x1) / 2.0
    cy = (y0 + y_leaf) / 2.0
    pose = _ortho_pose((cx, cy, 80.0), (0.0, -1.0, 0.0), (0.0, 0.0, -1.0), 2.15, 1.95)
    # Top view: camera up is CAD north, so the orthoFit half-height is north-south.
    pose["up"] = [0.0, 0.0, -1.0]
    pose["position"] = cad_mm_to_gltf_m((cx, cy, 30.0 * MM))
    pose["target"] = cad_mm_to_gltf_m((cx, cy, 0.0))
    notes = [
        _callout(
            (cx, cy, 40.0),
            (
                f"ABK Poetry Stone 596×596\n"
                f"wall joint {fig['wall_joint_mm']} mm\n"
                f"floor joint {fig['floor_joint_x_mm']} mm E–W\n"
                f"floor joint {fig['floor_joint_y_mm']} mm N–S\n"
                f"plan pitch {fig['plan_pitch_mm']} mm"
            ),
            (
                f"ABK Poetry Stone 596×596\n"
                f"spára stěny {fig['wall_joint_mm']} mm\n"
                f"spára podlahy {fig['floor_joint_x_mm']} mm V–Z\n"
                f"spára podlahy {fig['floor_joint_y_mm']} mm S–J\n"
                f"modul {fig['plan_pitch_mm']} mm"
            ),
            (0.38, 0.18),
            leader=False,
        ),
        # Into the room, clear of the scale bar in the southwest corner.
        _spot(plane, ROOM_X0, ROOM_Y0, "Drain / SW 300×300", "Vpusť / JZ 300×300", (0.16, 0.08)),
        _spot(plane, ROOM_X1, ROOM_Y0, "SE", "JV", (0.14, -0.06)),
        _spot(plane, ROOM_X1, ROOM_Y1, "NE", "SV", (0.14, 0.10)),
        _spot(plane, ROOM_X0, ROOM_Y1, "NW", "SZ", (-0.16, 0.10)),
        _spot(plane, ZERO_X, ZERO_Y, "0 east jamb", "0 východní ostění", (0.12, 0.14)),
        _spot(plane, DOOR_WEST_X, ZERO_Y, "West jamb", "Západní ostění", (-0.18, 0.14)),
        _dim((x0, y0 - 280.0, 0.0), (x0 + tile_x, y0 - 280.0, 0.0), -0.04, "596 mm", "596 mm"),
        _dim((x0, y0, 0.0), (x1, y0, 0.0), -0.14, "2175 mm", "2175 mm"),
        # Positive offset is west of the wall. A negative offset lands the
        # dimension line inside the room, beside the first joint.
        _dim((x0, y0, 0.0), (x0, y1, 0.0), 0.12, "1925 mm", "1925 mm"),
        # Labels on the cut strips, with no dimension line across the tile.
        _callout(
            (x1 - 381.0 / 2.0, y0 + 280.0, 8.0),
            "381 mm",
            "381 mm",
            (0.0, 0.0),
            leader=False,
        ),
        _callout(
            (x0 + 280.0, y1 - 131.0 / 2.0, 8.0),
            "131 mm",
            "131 mm",
            (0.0, 0.0),
            leader=False,
        ),
        _dim((DOOR_WEST_X * MM, y_leaf + 80.0, 0.0), (ZERO_X * MM, y_leaf + 80.0, 0.0), 0.05, "900 mm door", "900 mm dveře"),
        _dim((ZERO_X * MM + 40.0, y1, 0.0), (ZERO_X * MM + 40.0, y_leaf, 0.0), 0.06, "100 mm to leaf", "100 mm k křídlu"),
        _line(
            [(ZERO_X * MM, y_leaf, 30.0), (x0, y0, 30.0)],
            arrow=True,
            color=ANNOTATION_BLUE,
        ),
        _callout(
            ((ZERO_X * MM + x0) / 2.0, (y_leaf + y0) / 2.0, 40.0),
            (
                f"{fig['percent_diagonal']} fall to the drain\n"
                f"{fig['percent_x']} east–west · {fig['percent_y']} north–south"
            ),
            (
                f"{fig['percent_diagonal']} spád k vpusti\n"
                f"{fig['percent_x']} východ–západ · {fig['percent_y']} sever–jih"
            ),
            (0.32, -0.06),
            leader=False,
        ),
    ]
    spec = {
        "id": "bathroom-plan",
        "projection": "ortho",
        "title": _tx("Bathroom 1.20 — floor tiles", "Koupelna 1.20 — dlažba"),
        "project": PROJECT,
        "camera": pose,
        "annotations": [*_floor_grid(info), *notes],
    }
    spec.update(_plate({LABEL_FLOOR: 1, LABEL_DRAIN: 1}))
    return spec


def _wall_edges(frame, tiles) -> list[dict]:
    """Each tile edge once, so a joint is the same weight as the outline."""
    seen = set()
    lines = []
    for tile in tiles:
        polygon = tile["polygon"]
        count = len(polygon)
        for index in range(count):
            a = polygon[index]
            b = polygon[(index + 1) % count]
            key = tuple(
                sorted(
                    (
                        (round(float(a[0]), 4), round(float(a[1]), 4)),
                        (round(float(b[0]), 4), round(float(b[1]), 4)),
                    )
                )
            )
            if key in seen:
                continue
            seen.add(key)

            def at(point, frame=frame):
                return (
                    (frame["start"][0] + frame["dx"] * float(point[0])) * MM,
                    (frame["start"][1] + frame["dy"] * float(point[0])) * MM,
                    float(point[1]) * MM,
                )

            lines.append(_segment(at(a), at(b)))
    return lines


def _wall_cuts(frame) -> list[dict]:
    """Keep only the tile thickness, so the floor and the far wall stay out."""
    nx, ny = (float(v) for v in frame["normal"])
    length = float(frame["length"])
    mx = (frame["start"][0] + frame["dx"] * length / 2.0) * MM
    my = (frame["start"][1] + frame["dy"] * length / 2.0) * MM
    room = TILE_THICKNESS_MM + 1.0
    return [
        {
            "normal": [-nx, 0.0, ny],
            "anchor": [mx + nx * room, my + ny * room, 1200.0],
        },
        {
            "normal": [nx, 0.0, -ny],
            "anchor": [mx - nx * 1.0, my - ny * 1.0, 1200.0],
        },
    ]


def _elevation_drawing(info: dict, wall_id: str) -> dict:
    """Interior elevation. The bottom edge is the sloped cut; the top is level."""
    plane = info["plane"]
    fig = drawing_figures(info)
    levels = info["levels"]
    head = levels["head"] * MM
    course_joint_z = (levels["bottom_top"] + WALL_JOINT_M) * MM
    by_id = {wall["id"]: wall for wall in info["walls"]}
    frame = by_id[wall_id]["result"]["frame"]
    length = frame["length"] * MM
    # Look from inside the room, straight at the face.
    specs = {
        "CLAD-E": ("bathroom-elev-e", "east wall", "východní stěna", (1.0, 0.0, 0.0), 131.0),
        "CLAD-N": ("bathroom-elev-n", "north wall, door", "severní stěna, dveře", (0.0, 0.0, -1.0), 381.0),
        "CLAD-S": ("bathroom-elev-s", "south wall", "jižní stěna", (0.0, 0.0, 1.0), 381.0),
        "CLAD-W": ("bathroom-elev-w", "west wall, window", "západní stěna, okno", (-1.0, 0.0, 0.0), 131.0),
    }
    scene_id, name_en, name_cs, look, cut_mm = specs[wall_id]
    def station(s_m: float, z_mm: float) -> tuple[float, float, float]:
        return (
            (frame["start"][0] + frame["dx"] * s_m) * MM,
            (frame["start"][1] + frame["dy"] * s_m) * MM,
            z_mm,
        )

    mid = frame["length"] / 2.0
    mx, my, _mz = station(mid, head * 0.46)
    pose = _ortho_pose((mx, my, head * 0.46), look, (0.0, 1.0, 0.0), length / MM * 0.72, 1.85)
    z0 = _z_mm(plane, frame["start"][0], frame["start"][1])
    end = (
        frame["start"][0] + frame["dx"] * frame["length"],
        frame["start"][1] + frame["dy"] * frame["length"],
    )
    z1 = _z_mm(plane, end[0], end[1])
    cut_s = frame["length"] - cut_mm / MM
    notes = [
        _callout(
            (mx, my, head + 80.0),
            f"level top {fig['head_mm']} mm\n2 × 1194 mm, joint {fig['wall_joint_mm']} mm",
            f"rovný vrch {fig['head_mm']} mm\n2 × 1194 mm, spára {fig['wall_joint_mm']} mm",
            (0.0, 0.06),
            leader=False,
        ),
        _dim(station(-0.06, course_joint_z), station(-0.06, head), -0.06, "1194 mm", "1194 mm"),
        _callout(
            station(0.0, z0 - 40.0),
            f"floor {_mm_text(z0 / MM, signed=True)} mm\nbottom cut",
            f"podlaha {_mm_text(z0 / MM, signed=True)} mm\nšikmý řez",
            (-0.14, -0.10),
            leader=False,
        ),
        _callout(
            station(frame["length"], z1 - 40.0),
            f"floor {_mm_text(z1 / MM, signed=True)} mm\nbottom cut",
            f"podlaha {_mm_text(z1 / MM, signed=True)} mm\nšikmý řez",
            (0.14, -0.10),
            leader=False,
        ),
        _dim(
            station(0.0, -120.0),
            station(frame["length"], -120.0),
            -0.06,
            f"{length:.0f} mm",
            f"{length:.0f} mm",
        ),
        _dim(
            station(cut_s, -40.0),
            station(frame["length"], -40.0),
            -0.045,
            f"{cut_mm:.0f} mm",
            f"{cut_mm:.0f} mm",
        ),
    ]
    spec = {
        "id": scene_id,
        "projection": "ortho",
        "title": _tx(f"Bathroom 1.20 — {name_en}", f"Koupelna 1.20 — {name_cs}"),
        "project": PROJECT,
        "cuts": _wall_cuts(frame),
        "camera": pose,
        "annotations": [*_wall_edges(frame, by_id[wall_id]["result"]["tiles"]), *notes],
    }
    spec.update(_plate({LABEL_WALL: 1}))
    return spec


def _datum_line(a_xy, b_xy) -> dict:
    """Unsloped finished floor, elevation 0, drawn on the section."""
    return _line(
        [(a_xy[0], a_xy[1], 0.0), (b_xy[0], b_xy[1], 0.0)],
        dashed=True,
        color="#c0392b",
    )


def _mix(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def _true_scale_band(p0, p1, z0: float, z1: float, *, drop_mm: float) -> list[dict]:
    """A short tile band at 1:1, under a section whose Z is exaggerated.

    The viewer multiplies every CAD Z by ``SECTION_EXAGGERATION``. Dividing
    the band's own heights by that factor puts a vertical millimetre on the
    same screen scale as a horizontal one. ``drop_mm`` is how far below
    elevation 0 the band sits on the sheet.
    """
    k = float(SECTION_EXAGGERATION)

    def zz(true_mm: float) -> float:
        return true_mm / k - drop_mm / k

    top0 = (*p0, zz(z0))
    top1 = (*p1, zz(z1))
    bot1 = (*p1, zz(z1 - TILE_THICKNESS_MM))
    bot0 = (*p0, zz(z0 - TILE_THICKNESS_MM))
    mid = (
        (p0[0] + p1[0]) / 2.0,
        (p0[1] + p1[1]) / 2.0,
        zz(max(z0, z1) + 4.0),
    )
    return [
        _segment(top0, top1),
        _segment(bot0, bot1),
        _segment(top0, bot0),
        _segment(top1, bot1),
        _callout(mid, "1:1 true scale", "1:1 skutečné měřítko", (0.0, 0.022), leader=False),
    ]


def _exaggeration_label(anchor, offset: tuple[float, float] = (0.0, -0.055)) -> dict:
    """Large note sitting just off the exaggerated slope, not on the tile."""
    return _callout(
        anchor,
        "10× vertical exaggeration",
        "10× svislé převýšení",
        offset,
        leader=False,
        size=1.65,
    )


def _slice(origin, normal_gltf, along_cad, gap_mm: float) -> list[dict]:
    """Two planes `gap_mm` apart. `along_cad` is the CAD plan step of `normal_gltf`."""
    ox, oy, oz = origin
    ax, ay = along_cad
    return [
        {"normal": [float(v) for v in normal_gltf], "anchor": [ox, oy, oz]},
        {
            "normal": [-float(normal_gltf[0]), -float(normal_gltf[1]), -float(normal_gltf[2])],
            "anchor": [ox + ax * gap_mm, oy + ay * gap_mm, oz],
        },
    ]


def _section_diagonal(info: dict) -> dict:
    """Orthographic slice on the fall. Walls stay out; the tile is the band."""
    fig = drawing_figures(info)
    x0, y0 = ZERO_X * MM, ZERO_Y * MM
    x1, y1 = ROOM_X0 * MM, ROOM_Y0 * MM
    dx, dy = x1 - x0, y1 - y0
    length = (dx * dx + dy * dy) ** 0.5
    ux, uy = dx / length, dy / length
    # Perpendicular to the glTF diagonal (ux, 0, −uy). CAD step of that look is (uy, −ux).
    look = (uy, 0.0, ux)
    mid_x = (x0 + x1) / 2.0
    mid_y = (y0 + y1) / 2.0
    pose = _ortho_pose((mid_x, mid_y, -15.0), look, (0.0, 1.0, 0.0), length / MM * 0.62, 0.14)
    z_drain = _z_mm(info["plane"], ROOM_X0, ROOM_Y0)
    # Fall text stays on the drain half. NE corner stays on the zero half.
    fall_x = _mix(mid_x, x1, 0.62)
    fall_y = _mix(mid_y, y1, 0.62)
    ne_x = _mix(mid_x, x0, 0.78)
    ne_y = _mix(mid_y, y0, 0.78)
    run = 420.0
    strip = _true_scale_band(
        (mid_x - ux * run / 2.0, mid_y - uy * run / 2.0),
        (mid_x + ux * run / 2.0, mid_y + uy * run / 2.0),
        z_drain * 0.5 - z_drain * (run / 2.0) / length,
        z_drain * 0.5 + z_drain * (run / 2.0) / length,
        drop_mm=980.0,
    )
    notes = [
        _datum_line((x0 - ux * 120.0, y0 - uy * 120.0), (x1 + ux * 120.0, y1 + uy * 120.0)),
        _segment((x0, y0, 0.0), (x1, y1, z_drain)),
        _segment((x0, y0, -TILE_THICKNESS_MM), (x1, y1, z_drain - TILE_THICKNESS_MM)),
        *strip,
        _exaggeration_label((mid_x, mid_y, -18.0), (0.0, -0.12)),
        _callout(
            (mid_x, mid_y, 22.0),
            "elevation 0, unsloped floor",
            "výška 0, nespádovaná podlaha",
            (0.0, 0.07),
            leader=False,
        ),
        _callout(
            (x0, y0, 14.0),
            f"0 east jamb {fig['zero_mm']} mm",
            f"0 východní ostění {fig['zero_mm']} mm",
            (-0.04, 0.09),
            leader=False,
        ),
        _callout(
            (x1, y1, z_drain - 18.0),
            f"drain {fig['drain_mm']} mm",
            f"vpusť {fig['drain_mm']} mm",
            (0.0, -0.05),
            leader=False,
        ),
        _callout(
            (fall_x, fall_y, z_drain * 0.81 + 28.0),
            f"{fig['percent_diagonal']} along the diagonal\nfall {fig['drain_mm']} mm",
            f"{fig['percent_diagonal']} po úhlopříčce\nspád {fig['drain_mm']} mm",
            (0.0, 0.05),
            leader=False,
        ),
        _callout(
            (ne_x, ne_y, 36.0),
            f"NE corner {fig['ne_mm']} mm",
            f"roh SV {fig['ne_mm']} mm",
            (0.06, 0.08),
            leader=False,
        ),
        _callout(
            (mid_x, mid_y, z_drain / 2.0 - 28.0),
            "tile 8.5 mm; screed thickness not measured",
            "dlažba 8,5 mm; tloušťka potěru není změřená",
            (0.0, -0.07),
            leader=False,
        ),
    ]
    spec = {
        "id": "bathroom-section-diagonal",
        "projection": "ortho",
        "verticalExaggeration": SECTION_EXAGGERATION,
        "title": _tx(
            "Bathroom 1.20 — section on the fall\nvertical ×10, horizontal true",
            "Koupelna 1.20 — řez po spádu\nsvisle ×10, vodorovně skutečně",
        ),
        "project": PROJECT,
        "cuts": _slice((mid_x, mid_y, 0.0), look, (uy, -ux), 25.0),
        "camera": pose,
        "annotations": notes,
    }
    spec.update(_plate({LABEL_FLOOR: 1}))
    return spec


def _section_door(info: dict) -> dict:
    """East–west section along the door wall, just inside the north face."""
    plane = info["plane"]
    fig = drawing_figures(info)
    y = (ROOM_Y1 - 0.05) * MM
    x0 = ROOM_X0 * MM
    x1 = ROOM_X1 * MM
    z0 = _z_mm(plane, ROOM_X0, y / MM)
    z1 = _z_mm(plane, ROOM_X1, y / MM)
    pose = _ortho_pose(((x0 + x1) / 2.0, y, -12.0), (0.0, 0.0, -1.0), (0.0, 1.0, 0.0), 1.45, 0.13)
    west = _mm_text(z0 / MM, signed=True)
    east = _mm_text(z1 / MM, signed=True)
    cx = (x0 + x1) / 2.0
    run = 420.0
    z_mid = (z0 + z1) / 2.0
    dz = (z1 - z0) * (run / 2.0) / (x1 - x0)
    strip = _true_scale_band(
        (cx - run / 2.0, y),
        (cx + run / 2.0, y),
        z_mid - dz,
        z_mid + dz,
        drop_mm=860.0,
    )
    notes = [
        _datum_line((x0 - 80.0, y), (x1 + 80.0, y)),
        _segment((x0, y, z0), (x1, y, z1)),
        _segment((x0, y, z0 - TILE_THICKNESS_MM), (x1, y, z1 - TILE_THICKNESS_MM)),
        *strip,
        _exaggeration_label((cx, y, z_mid - 6.0), (0.0, -0.08)),
        _callout(
            (cx, y, 20.0),
            "elevation 0, unsloped floor",
            "výška 0, nespádovaná podlaha",
            (0.0, 0.07),
            leader=False,
        ),
        _callout(
            (x0, y, 16.0),
            f"west {west} mm",
            f"západ {west} mm",
            (-0.08, 0.08),
            leader=False,
        ),
        _callout(
            (x1, y, 16.0),
            f"east {east} mm",
            f"východ {east} mm",
            (0.08, 0.08),
            leader=False,
        ),
        _callout(
            (cx, y, 40.0),
            f"{fig['percent_x']} east–west\ndoor leaf fall {fig['door_fall_mm']} mm / 900 mm",
            f"{fig['percent_x']} východ–západ\nspád na křídle {fig['door_fall_mm']} mm / 900 mm",
            (0.0, 0.05),
            leader=False,
        ),
        _callout(
            (cx, y, z_mid - 24.0),
            "tile 8.5 mm; screed thickness not measured",
            "dlažba 8,5 mm; tloušťka potěru není změřená",
            (0.0, -0.08),
            leader=False,
        ),
    ]
    spec = {
        "id": "bathroom-section-door",
        "projection": "ortho",
        "verticalExaggeration": SECTION_EXAGGERATION,
        "title": _tx(
            "Bathroom 1.20 — section along the door wall\nvertical ×10, horizontal true",
            "Koupelna 1.20 — řez podél dveřní stěny\nsvisle ×10, vodorovně skutečně",
        ),
        "project": PROJECT,
        "cuts": _slice(((x0 + x1) / 2.0, y, 0.0), (0.0, 0.0, -1.0), (0.0, 1.0), 20.0),
        "camera": pose,
        "annotations": notes,
    }
    spec.update(_plate({LABEL_FLOOR: 1}))
    return spec


def scenes() -> list[dict]:
    """Context views plus the tiler's plates (plan, four elevations, two sections)."""
    info = layout()
    cx = (ROOM_X0 + ROOM_X1) / 2.0
    cy = (ROOM_Y0 + ROOM_Y1) / 2.0

    def camera(eye, target, fov: float, scene_id: str, title: dict, **extra) -> dict:
        spec = {
            "id": scene_id,
            "hFovDeg": fov,
            "title": title,
            "project": PROJECT,
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
        "project": PROJECT,
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
    plates = [
        _plan_drawing(info),
        *(_elevation_drawing(info, wall_id) for wall_id in ("CLAD-E", "CLAD-N", "CLAD-S", "CLAD-W")),
        _section_diagonal(info),
        _section_door(info),
    ]
    return [floor, room, door, *plates]


def part_groups() -> list[dict]:
    return [
        {
            "id": "bathroom",
            "children": [LABEL_FLOOR, LABEL_WALL, LABEL_GROUT, LABEL_DRAIN],
        }
    ]


def build(doc: dict | None = None):
    """Tile, grout, and grate only — the plates are scenes on this model."""
    from build123d import Compound

    solids = parts(doc)
    shape = Compound(obj=solids, children=solids, label=MODEL_NAME)
    info = layout(doc)
    meta = {
        "kind": "solid",
        "derived": {
            "tiles": sum(
                1 for solid in solids if solid.label in {LABEL_FLOOR, LABEL_WALL}
            ),
            "head_mm": round(head_mm(info), 3),
            "z_min_mm": round(info["z_min"] * MM, 3),
            "z_max_mm": round(info["z_max"] * MM, 3),
        },
    }
    return shape, meta
