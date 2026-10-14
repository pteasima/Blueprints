"""Bathroom 1.07 — level floor, shower fall to a north wall drain.

Source: ``inputs/ground_floor/bathroom-1.07.yaml``. Layout is yaml-ifc's
(``floor_layout``, ``wall_layout``). The shower falls 1.25% from the south
entry toward the wall drain in the north pre-wall. Wall tiles start at
height 0; stainless profiles take the fall on both sides.

The screed, the membrane, and the ceiling stay properties. EPS under the
shower is 60+40 mm, so the screed at finished-floor zero is 79 mm.

    python -m blueprints.export bathroom_107
"""

from __future__ import annotations

from pathlib import Path

from build123d import Align, Box, Compound, Pos, Vector

from yaml_ifc import plane_elevation
from yaml_ifc.tiling import floor_joint_widths, floor_layout, wall_layout
from yaml_ifc.to_ifc import build_ifc, validation_errors
from yaml_ifc.yamlio import load as load_yaml_ifc

from bathroom_120 import (
    ANNOTATION_BLUE,
    GROUT_RECESS_M,
    TILE_THICKNESS_MM,
    _callout,
    _color,
    _dim,
    _extrude,
    _floor_solid,
    _line,
    _merge_wall_pieces,
    _ortho_pose,
    _tx,
    _wall_edges,
    _wall_solid,
)
from blueprints.export_utils import export_shape
from blueprints.scenes import cad_mm_to_gltf_m


SOURCE_PATH = (
    Path(__file__).resolve().parents[1] / "inputs" / "ground_floor" / "bathroom-1.07.yaml"
)

LABEL_FLOOR = "floor_tile"
LABEL_WALL = "wall_tile"
LABEL_GROUT = "grout"
LABEL_DRAIN = "drain"
LABEL_FIXTURE = "fixture"
LABEL_PREWALL = "prewall"
LABEL_SCREEN = "screen"
LABEL_PROFILE = "profile"
LABEL_VANITY = "vanity"

MM = 1000.0
# Bottom to top, finished floor at 0. The 8 mm membrane closes the 250 mm sum.
BUILDUP_MM = 250.0
WATERPROOF_MM = 8.0
EPS_TOP_MM = 60.0
# Shower only. The level floor stays 60+60, screed 59, in the YAML.
EPS_BOTTOM_MM = 40.0
NOP_MM = 50.0
FINISH_MM = 13.0
SCREED_MIN_MM = 45.0
FALL = 0.0125
# Wall tiles are cut here. The two-course line is 2390; the opening removes it.
TILE_HEAD_M = 2.230
ROOM_SOUTH_M = 10.15
ROOM_NORTH_M = 12.25
DOOR_LEAF_Y_M = 9.475
PASSAGE_X0_M = 11.50
PASSAGE_X1_M = 12.50
# KOV 3G110CM body, inside the pre-wall. The visible slot is CatalogGrateWidth.
DRAIN_BODY_WIDTH_M = 0.127
DRAIN_BODY_HEIGHT_M = 0.052
DRAIN_SLOT_HEIGHT_M = 0.035
DRAIN_SLOT_THICK_M = 0.008
PROFILE_WIDTH_M = 0.010

MODEL_NAME = "bathroom_107"
MODEL_LABEL = "Koupelna 1.07"
PROJECT = "RD Šíma 1.NP"
# Elevations the plates draw. The jog faces are tiled and dimensioned on the plan.
PLATE_WALLS = ("CLAD-PW", "CLAD-E", "CLAD-S", "CLAD-W")


def load_document(path: Path | None = None) -> dict:
    return load_yaml_ifc(path or SOURCE_PATH)


def _by_id(rows) -> dict:
    return {row["id"]: row for row in rows or []}


def _plane(doc: dict, slab_id: str) -> dict:
    return _by_id(doc["slabs"])[slab_id]["Plane"]


def _covering(doc: dict, covering_id: str) -> dict:
    return _by_id(doc["coverings"])[covering_id]


def _props(row: dict) -> dict:
    for pset in row.get("PropertySets") or []:
        if pset.get("Name") == "Pset_YamlIfc":
            return dict(pset.get("Properties") or {})
    return {}


def screed_at_zero_mm() -> float:
    """Shower screed where the finished floor is 0. EPS under the shower is 60+40."""
    return BUILDUP_MM - WATERPROOF_MM - EPS_TOP_MM - EPS_BOTTOM_MM - NOP_MM - FINISH_MM


def layout(doc: dict | None = None) -> dict:
    """Tile rings in storey metres, and the shared course lines."""
    doc = doc if doc is not None else load_document()
    level_plane = _plane(doc, "SLAB-LEVEL")
    shower_plane = _plane(doc, "SLAB-SHOWER")
    level = _covering(doc, "FLR-LEVEL")["TileLayout"]
    shower = _covering(doc, "FLR-SHOWER")["TileLayout"]
    shower_fp = _by_id(doc["slabs"])["SLAB-SHOWER"]["Footprint"]
    z_min = min(plane_elevation(shower_plane, x, y) for x, y in shower_fp)
    z_north = plane_elevation(shower_plane, shower_fp[0][0], max(p[1] for p in shower_fp))
    level_laid = floor_layout(
        level_plane,
        level["Tile"],
        level["Tile"],
        level["WallJoint"],
        level["GridOrigin"],
        level["Footprint"],
        level.get("Cutouts") or (),
        level.get("JointInset") or 0.0,
    )
    shower_laid = floor_layout(
        shower_plane,
        shower["Tile"],
        shower["Tile"],
        shower["WallJoint"],
        shower["GridOrigin"],
        shower["Footprint"],
        shower.get("Cutouts") or (),
        shower.get("JointInset") or 0.0,
    )
    # The origin butt is a shared edge with no grout. Open it before anything
    # unions the two tiles into a double-width slab.
    level_joint = float(level["WallJoint"])
    level_tiles, level_extra = _open_butt_joints(level_laid["tiles"], level_joint)
    shower_tiles, shower_extra = _open_butt_joints(shower_laid["tiles"], float(shower["WallJoint"]))
    walls = []
    for row in doc["coverings"]:
        tile = row.get("TileLayout") or {}
        if not tile.get("Axis"):
            continue
        plane = _plane(doc, row["Plane"])
        # Walls are on the level plane, so the course datum is 0 unless a
        # file sets CourseZMin. The bottom edge is that plane plus BottomJoint.
        course_z = tile.get("CourseZMin")
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
            z_min=0.0 if course_z is None else float(course_z),
            footprint=shower_fp,
        )
        # Same origin butt as the floor: open it before pieces that share
        # an edge are unioned into a double-width tile.
        opened, extra_grout = _open_wall_butts(result["tiles"], float(tile["Joint"]))
        result["tiles"] = _merge_wall_pieces(opened, match_z=False)
        result["grout"] = _merge_wall_pieces([*result["grout"], *extra_grout], match_z=True)
        walls.append({"id": row["id"], "layout": tile, "plane": plane, "result": result})
    if not walls:
        raise ValueError("room 1.07 has no wall tiles")
    # The vanity pre-wall is one course. Head is the two-course line, from a
    # full-height wall. Above the vanity shelf there is no cladding: plaster.
    full = next(wall for wall in walls if int(wall["layout"]["Courses"]) >= 2)
    return {
        "doc": doc,
        "level_plane": level_plane,
        "shower_plane": shower_plane,
        "level": level,
        "shower": shower,
        "level_tiles": level_tiles,
        "level_grout": [*level_laid["grout"], *level_extra],
        "shower_tiles": shower_tiles,
        "shower_grout": [*shower_laid["grout"], *shower_extra],
        "joints_level": floor_joint_widths(
            level["Tile"], level["Tile"], level["WallJoint"], level_plane["Gradient"]
        ),
        "joints_shower": floor_joint_widths(
            shower["Tile"], shower["Tile"], shower["WallJoint"], shower_plane["Gradient"]
        ),
        "z_min": z_min,
        "z_north": z_north,
        "walls": walls,
        "levels": full["result"]["levels"],
        "shower_props": _props(_by_id(doc["slabs"])["SLAB-SHOWER"]),
    }


def _paint(shape, label: str):
    shape.label = label
    shape.color = _color(label)
    shape.room_id = "1.07"
    return shape


def _open_wall_butts(pieces, joint: float = 0.002):
    """Open a vertical joint where two wall tiles share an s-edge."""
    from shapely.geometry import Polygon, box
    from shapely.ops import unary_union

    if not pieces:
        return [], []
    by_course: dict[int, list[int]] = {}
    polys = []
    for index, piece in enumerate(pieces):
        by_course.setdefault(int(piece["course"]), []).append(index)
        polys.append(Polygon(piece["polygon"]))
    half = float(joint) / 2.0
    blades: dict[int, list] = {index: [] for index in range(len(pieces))}
    extra = []
    for course, indexes in by_course.items():
        for a in range(len(indexes)):
            for b in range(a + 1, len(indexes)):
                i, j = indexes[a], indexes[b]
                bi, bj = polys[i].bounds, polys[j].bounds
                if abs(bi[2] - bj[0]) <= 1e-6:
                    shared = (bi[2] + bj[0]) / 2.0
                elif abs(bj[2] - bi[0]) <= 1e-6:
                    shared = (bj[2] + bi[0]) / 2.0
                else:
                    continue
                z0, z1 = max(bi[1], bj[1]), min(bi[3], bj[3])
                if z1 - z0 <= 1e-4:
                    continue
                blade = box(shared - half, z0, shared + half, z1)
                blades[i].append(blade)
                blades[j].append(blade)
                extra.append(
                    {
                        "course": course,
                        "polygon": [
                            (shared - half, z0),
                            (shared + half, z0),
                            (shared + half, z1),
                            (shared - half, z1),
                        ],
                    }
                )
    opened = []
    for index, piece in enumerate(pieces):
        poly = polys[index]
        if blades[index]:
            poly = poly.difference(unary_union(blades[index]))
        geoms = list(poly.geoms) if poly.geom_type == "MultiPolygon" else [poly]
        for geom in geoms:
            if geom.is_empty or geom.area <= 1e-10:
                continue
            coords = [(float(s), float(z)) for s, z in geom.exterior.coords]
            if len(coords) >= 2 and coords[0] == coords[-1]:
                coords = coords[:-1]
            opened.append({**piece, "polygon": coords})
    return opened, extra


def _open_butt_joints(rings, joint: float = 0.002):
    """Open a real joint where two tiles share an edge.

    A module boundary at the grid origin has no grout: the tiles on either
    side meet, and unioning them draws one double-width slab. Shrink each
    side by half the wall joint and return that strip as grout.
    """
    from shapely.geometry import Polygon, box
    from shapely.ops import unary_union

    polys = [Polygon(ring) for ring in rings]
    half = float(joint) / 2.0
    touches = []
    for i in range(len(polys)):
        a = polys[i].bounds
        for j in range(i + 1, len(polys)):
            b = polys[j].bounds
            for left, right in ((a[2], b[0]), (b[2], a[0])):
                if abs(left - right) <= 1e-6:
                    y0, y1 = max(a[1], b[1]), min(a[3], b[3])
                    if y1 - y0 > 1e-4:
                        touches.append(("v", (left + right) / 2.0, y0, y1))
            for bottom, top in ((a[3], b[1]), (b[3], a[1])):
                if abs(bottom - top) <= 1e-6:
                    x0, x1 = max(a[0], b[0]), min(a[2], b[2])
                    if x1 - x0 > 1e-4:
                        touches.append(("h", (bottom + top) / 2.0, x0, x1))
    if not touches:
        return list(rings), []
    blades = []
    grout = []
    for kind, coord, u0, u1 in touches:
        if kind == "v":
            blades.append(box(coord - half, u0, coord + half, u1))
            grout.append(
                [
                    (coord - half, u0),
                    (coord + half, u0),
                    (coord + half, u1),
                    (coord - half, u1),
                ]
            )
        else:
            blades.append(box(u0, coord - half, u1, coord + half))
            grout.append(
                [
                    (u0, coord - half),
                    (u1, coord - half),
                    (u1, coord + half),
                    (u0, coord + half),
                ]
            )
    blade = unary_union(blades)
    opened = []
    for poly in polys:
        cut = poly.difference(blade)
        if cut.is_empty:
            continue
        geoms = list(cut.geoms) if cut.geom_type == "MultiPolygon" else [cut]
        for geom in geoms:
            coords = [(float(x), float(y)) for x, y in geom.exterior.coords]
            if len(coords) >= 2 and coords[0] == coords[-1]:
                coords = coords[:-1]
            opened.append(coords)
    return opened, grout


def parts(doc: dict | None = None) -> list:
    """Tile, grout, and the linear drain, in storey millimetres."""
    info = layout(doc)
    solids = []

    def add_floor(rings, plane, label: str, recess: float = 0.0):
        gradient = plane["Gradient"]

        def z_at(x, y, plane=plane, recess=recess):
            return plane_elevation(plane, x, y) - recess

        thickness = float(info["level"]["Thickness"])
        for ring in rings:
            solids.append(_paint(_floor_solid(ring, z_at, thickness, gradient), label))

    # Keep each tile. Merging fills the origin butt and draws ~1192 mm slabs.
    add_floor(info["level_tiles"], info["level_plane"], LABEL_FLOOR)
    add_floor(info["shower_tiles"], info["shower_plane"], LABEL_FLOOR)
    add_floor(info["level_grout"], info["level_plane"], LABEL_GROUT, GROUT_RECESS_M)
    add_floor(info["shower_grout"], info["shower_plane"], LABEL_GROUT, GROUT_RECESS_M)

    for wall in info["walls"]:
        frame = wall["result"]["frame"]
        thick = float(wall["layout"]["Thickness"])
        for piece in wall["result"]["tiles"]:
            solids.append(_paint(_wall_solid(piece["polygon"], frame, thick), LABEL_WALL))
        for piece in wall["result"]["grout"]:
            solids.append(
                _paint(
                    _wall_solid(piece["polygon"], frame, thick - GROUT_RECESS_M),
                    LABEL_GROUT,
                )
            )

    solids.extend(_drain_solids(info))
    solids.extend(_fixture_boxes(info["doc"]))
    solids.extend(_edge_profiles(info))
    return solids


def _box(origin, size, label: str, elevation: float = 0.0):
    x, y = (float(v) for v in origin)
    width, depth, height = (float(v) for v in size)
    solid = Pos(x * MM, y * MM, elevation * MM) * Box(
        width * MM,
        depth * MM,
        height * MM,
        align=(Align.MIN, Align.MIN, Align.MIN),
    )
    return _paint(solid, label)


def _fixture_boxes(doc: dict) -> list:
    """Tub, basins, pre-walls, and the glass, from the YAML boxes."""
    labels = {
        "BATH": LABEL_FIXTURE,
        "WASHHANDBASIN": LABEL_FIXTURE,
        "PreWall": LABEL_PREWALL,
        "Shelf": LABEL_PREWALL,
        "GlassScreen": LABEL_SCREEN,
        "Cabinet": LABEL_VANITY,
        "Countertop": LABEL_FIXTURE,
        "Mixer": LABEL_FIXTURE,
        "Pipe": LABEL_FIXTURE,
        "TiledFront": LABEL_WALL,
        "Soffit": LABEL_PREWALL,
    }
    solids = []
    for key in ("sanitaryTerminals", "furniture"):
        for row in doc.get(key) or []:
            if None in (row.get("Width"), row.get("Depth"), row.get("Height")):
                continue
            label = None
            for kind in (row.get("PredefinedType"), row.get("ObjectType")):
                if kind in labels:
                    label = labels[kind]
                    break
            if label is None:
                continue
            solids.append(
                _box(
                    row["Origin"],
                    (row["Width"], row["Depth"], row["Height"]),
                    label,
                    float(row.get("Elevation") or 0.0),
                )
            )
    return solids


def _drain_solids(info: dict) -> list:
    """Wall drain: 35 mm slot on the pre-wall face, 52×127 mm body inside it.

    The slot top is at height 0, where the wall tiles start. The body hangs
    the catalog installation height below that, inside the pre-wall.
    """
    drain = _by_id(info["doc"]["wasteTerminals"])["DRAIN-1.07"]
    ox, oy = (float(v) for v in drain["Origin"])
    length = float(drain["Width"])
    # The face is the south side of the pre-wall. Depth in the file is the
    # catalog slot width; the body is the wider catalog section, to the north.
    slot = _box(
        (ox, oy - DRAIN_SLOT_THICK_M),
        (length, DRAIN_SLOT_THICK_M, DRAIN_SLOT_HEIGHT_M),
        LABEL_DRAIN,
        elevation=-DRAIN_SLOT_HEIGHT_M,
    )
    body = _box(
        (ox, oy),
        (length, DRAIN_BODY_WIDTH_M, DRAIN_BODY_HEIGHT_M),
        LABEL_DRAIN,
        elevation=-DRAIN_BODY_HEIGHT_M,
    )
    return [slot, body]


def _edge_profiles(info: dict) -> list:
    """10 mm stainless wedges, top at 0, bottom on the shower plane."""
    plane = info["shower_plane"]
    fp = info["shower"]["Footprint"]
    south = min(point[1] for point in fp)
    north = max(point[1] for point in fp)
    west = min(point[0] for point in fp)
    east = max(point[0] for point in fp)
    z_north = plane_elevation(plane, west, north)
    solids = []
    # The footprint already stops on the glass east face and the east tile face.
    for x_face, direction in (
        (west, 1.0),
        (east, -1.0),
    ):
        x0 = x_face if direction > 0 else x_face - PROFILE_WIDTH_M
        points = [
            Vector(x0 * MM, south * MM, 0.0),
            Vector(x0 * MM, north * MM, 0.0),
            Vector(x0 * MM, north * MM, z_north * MM),
        ]
        solids.append(_paint(_extrude(points, (PROFILE_WIDTH_M * MM, 0.0, 0.0)), LABEL_PROFILE))
    return solids


def validate(doc: dict | None = None) -> list[str]:
    model = build_ifc(doc if doc is not None else load_document())
    return validation_errors(model)


def _floor_z(info: dict, x: float, y: float) -> float:
    """Finished floor: the shower plane inside the shower, otherwise 0."""
    fp = info["shower"]["Footprint"]
    xs = [point[0] for point in fp]
    ys = [point[1] for point in fp]
    if min(xs) - 1e-6 <= x <= max(xs) + 1e-6 and min(ys) - 1e-6 <= y <= max(ys) + 1e-6:
        return plane_elevation(info["shower_plane"], x, y)
    return 0.0


def head_mm(info: dict | None = None) -> float:
    """Finished tile head. Course layout still reaches 2390; the cut is an opening."""
    del info
    return TILE_HEAD_M * MM


def figures(info: dict | None = None) -> dict:
    """Numbers the plates and the screed note quote."""
    info = info if info is not None else layout()
    plane = info["shower_plane"]
    fp = info["shower"]["Footprint"]
    south = min(point[1] for point in fp)
    north = max(point[1] for point in fp)
    west = min(point[0] for point in fp)
    east = max(point[0] for point in fp)
    z_south = plane_elevation(plane, east, south)
    z_north = plane_elevation(plane, east, north)
    # The south entry is the high side. The drain, on the north, is lower.
    drop_mm = (z_south - z_north) * MM
    run_mm = (north - south) * MM
    screed0 = screed_at_zero_mm()
    screed_drain = screed0 - drop_mm
    joints = info["joints_shower"]
    glass = _by_id(info["doc"]["furniture"])["GLASS-1.07"]
    glass_west = float(glass["Origin"][0])
    glass_east = glass_west + float(glass["Width"])
    # The shower footprint stops on the east tile face. Subtracting the tile
    # thickness again would shrink the clear opening.
    tile_face = east
    glass_north = float(glass["Origin"][1]) + float(glass["Depth"])
    prewall = _by_id(info["doc"]["furniture"])["PW-SHOWER"]
    cheek_mm = (glass_west - float(prewall["Origin"][0])) * MM
    return {
        "drop_mm": drop_mm,
        "run_mm": run_mm,
        "fall": abs(float(plane["Gradient"][1])),
        "z_south_mm": z_south * MM,
        "z_north_mm": z_north * MM,
        "screed_zero_mm": screed0,
        "screed_drain_mm": screed_drain,
        "below_minimum": screed_drain < SCREED_MIN_MM - 1e-6,
        "east_cut_mm": _edge_cut_mm(info["shower_tiles"], east, "east"),
        "glass_cut_mm": _edge_cut_mm(info["shower_tiles"], west, "west"),
        "head_mm": head_mm(info),
        "course_mm": float(info["levels"]["bottom_top"]) * MM,
        "sill_gap_mm": 1750.0 - float(info["levels"]["bottom_top"]) * MM,
        "wall_joint_mm": float(info["shower"]["WallJoint"]) * MM,
        "floor_joint_y_mm": joints.y * MM,
        "plan_pitch_mm": joints.plan_pitch_y * MM,
        # Opening built as 549 | 2 | 549: glass east face to east tile face.
        "shower_width_mm": (tile_face - glass_east) * MM,
        "glass_x_m": glass_west,
        "glass_east_m": glass_east,
        "glass_south_m": float(glass["Origin"][1]),
        "glass_north_m": glass_north,
        "cheek_mm": cheek_mm,
        "tile_face_m": tile_face,
        "south_y_m": south,
        "north_y_m": north,
        "east_x_m": east,
    }


def _edge_cut_mm(rings, x_edge: float, side: str) -> float:
    widths = []
    for ring in rings:
        xs = [point[0] for point in ring]
        edge = min(xs) if side == "west" else max(xs)
        if abs(edge - x_edge) < 1e-6:
            widths.append((max(xs) - min(xs)) * MM)
    return max(widths) if widths else 0.0


def _mm_text(mm: float, digits: int = 3, signed: bool = False) -> str:
    text = f"{float(mm):.{digits}f}"
    if signed and mm > 0:
        text = "+" + text
    return text


def _plate(shown: dict) -> dict:
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


def _grid_lines(tiles, grout, z_mm: float) -> list[dict]:
    lines = []
    for ring in (*tiles, *grout):
        closed = list(ring) + [ring[0]]
        points = [(float(x) * MM, float(y) * MM, z_mm) for x, y in closed]
        lines.append(_line(points))
    return lines


def _room_east(info: dict) -> float:
    """Structural east face. The shower floor stops 8.5 mm west, on the tile face."""
    east = next(wall for wall in info["walls"] if wall["id"] == "CLAD-E")
    return float(east["result"]["frame"]["start"][0])


def _plan_drawing(info: dict) -> dict:
    fig = figures(info)
    level_fp = info["level"]["Footprint"]
    room_east = _room_east(info)
    xs = [p[0] for p in level_fp] + [room_east]
    ys = [p[1] for p in level_fp]
    x0, x1 = min(xs) * MM, max(xs) * MM
    y0, y1 = min(ys) * MM, max(ys) * MM
    cx, cy = (x0 + x1) / 2.0, (y0 + y1) / 2.0
    glass = fig["glass_x_m"] * MM
    pose = {
        "target": cad_mm_to_gltf_m((cx, cy, 0.0)),
        "position": cad_mm_to_gltf_m((cx, cy, 30.0 * MM)),
        "up": [0.0, 0.0, -1.0],
        "orthoFit": [3.4, 2.0],
    }
    drop = _mm_text(fig["drop_mm"])
    screed = _mm_text(fig["screed_drain_mm"])
    notes = [
        _callout(
            (cx, cy + 400.0, 30.0),
            (
                f"ABK Poetry Stone 596×596\n"
                f"wall joint {_mm_text(fig['wall_joint_mm'])} mm\n"
                f"shower joint N–S {_mm_text(fig['floor_joint_y_mm'])} mm\n"
                f"plan pitch {_mm_text(fig['plan_pitch_mm'], 0)} mm"
            ),
            (
                f"ABK Poetry Stone 596×596\n"
                f"spára stěny {_mm_text(fig['wall_joint_mm'])} mm\n"
                f"spára sprchy S–J {_mm_text(fig['floor_joint_y_mm'])} mm\n"
                f"modul {_mm_text(fig['plan_pitch_mm'], 0)} mm"
            ),
            (0.42, 0.22),
            leader=False,
        ),
        _callout(
            (glass + 200.0, y0 + 400.0, 8.0),
            f"drain {_mm_text(fig['z_south_mm'], signed=True)} mm",
            f"vpust {_mm_text(fig['z_south_mm'], signed=True)} mm",
            (0.16, -0.08),
        ),
        _callout(
            (glass + 200.0, y1 - 80.0, 8.0),
            f"shower north {_mm_text(fig['z_north_mm'], signed=True)} mm",
            f"sever sprchy {_mm_text(fig['z_north_mm'], signed=True)} mm",
            (0.12, 0.1),
        ),
        _callout(
            (x0 + 800.0, cy, 8.0),
            "level floor 0.000 mm",
            "rovná podlaha 0.000 mm",
            (-0.2, 0.08),
            leader=False,
        ),
        _dim(
            (x0, ROOM_SOUTH_M * MM, 0.0),
            (room_east * MM, ROOM_SOUTH_M * MM, 0.0),
            -0.16,
            f"{(room_east - min(p[0] for p in level_fp)) * MM:.0f} mm",
            f"{(room_east - min(p[0] for p in level_fp)) * MM:.0f} mm",
        ),
        _dim(
            (x0, ROOM_SOUTH_M * MM, 0.0),
            (x0, ROOM_NORTH_M * MM, 0.0),
            0.16,
            f"{(ROOM_NORTH_M - ROOM_SOUTH_M) * MM:.0f} mm",
            f"{(ROOM_NORTH_M - ROOM_SOUTH_M) * MM:.0f} mm",
        ),
        _dim(
            (PASSAGE_X0_M * MM, DOOR_LEAF_Y_M * MM, 0.0),
            (PASSAGE_X0_M * MM, ROOM_SOUTH_M * MM, 0.0),
            -0.10,
            "675 mm",
            "675 mm",
        ),
        _dim(
            (fig["glass_east_m"] * MM, y1 + 80.0, 0.0),
            (fig["tile_face_m"] * MM, y1 + 80.0, 0.0),
            0.08,
            f"{fig['shower_width_mm']:.0f} mm 549|2|549",
            f"{fig['shower_width_mm']:.0f} mm 549|2|549",
        ),
        _dim(
            ((fig["glass_x_m"] - fig["cheek_mm"] / MM) * MM, ROOM_NORTH_M * MM + 40.0, 0.0),
            (glass, ROOM_NORTH_M * MM + 40.0, 0.0),
            0.08,
            f"{fig['cheek_mm']:.0f} mm wall past glass",
            f"{fig['cheek_mm']:.0f} mm stěna přes sklo",
        ),
        _line(
            [(glass, fig["glass_north_m"] * MM, 40.0), (glass, fig["glass_south_m"] * MM, 40.0)],
            dashed=True,
            color=ANNOTATION_BLUE,
        ),
        _callout(
            (glass, cy, 40.0),
            "glass mounted on the wall\n50 mm cheek to the west",
            "sklo na stěně\n50 mm líc západně",
            (-0.22, 0.0),
        ),
        _callout(
            ((PASSAGE_X0_M + PASSAGE_X1_M) / 2.0 * MM, (DOOR_LEAF_Y_M + ROOM_SOUTH_M) / 2.0 * MM, 20.0),
            "passage 675 mm\ndoor 2100 mm\ntiles to 2230 mm",
            "průchod 675 mm\ndveře 2100 mm\nobklad do 2230 mm",
            (0.0, -0.08),
            leader=False,
        ),
        _line(
            [(glass + 500.0, y1 - 80.0, 20.0), (glass + 500.0, y0 + 80.0, 20.0)],
            arrow=True,
            color=ANNOTATION_BLUE,
        ),
        _callout(
            (glass + 700.0, cy, 40.0),
            (
                f"1.250% to the north drain\n"
                f"{drop} mm / {round(fig['run_mm'])} mm\n"
                f"screed at drain {screed} mm\n"
                f"EPS 60+40"
            ),
            (
                f"1.250% k severní vpusti\n"
                f"{drop} mm / {round(fig['run_mm'])} mm\n"
                f"potěr u vpusti {screed} mm\n"
                f"EPS 60+40"
            ),
            (0.28, -0.02),
            leader=False,
        ),
    ]
    spec = {
        "id": "bath107-plan",
        "projection": "ortho",
        "title": _tx("Bathroom 1.07 — floor tiles", "Koupelna 1.07 — dlažba"),
        "project": PROJECT,
        "camera": pose,
        "annotations": [
            *_grid_lines(info["level_tiles"], info["level_grout"], 2.0),
            *_grid_lines(info["shower_tiles"], info["shower_grout"], 2.0),
            *notes,
        ],
    }
    spec.update(_plate({LABEL_FLOOR: 1, LABEL_DRAIN: 1}))
    return spec


def _wall_cuts(frame) -> list[dict]:
    nx, ny = (float(v) for v in frame["normal"])
    length = float(frame["length"])
    mx = (frame["start"][0] + frame["dx"] * length / 2.0) * MM
    my = (frame["start"][1] + frame["dy"] * length / 2.0) * MM
    room = TILE_THICKNESS_MM + 1.0
    return [
        {"normal": [-nx, 0.0, ny], "anchor": [mx + nx * room, my + ny * room, 1200.0]},
        {"normal": [nx, 0.0, -ny], "anchor": [mx - nx * 1.0, my - ny * 1.0, 1200.0]},
    ]


def _station(frame, s_m: float, z_mm: float) -> tuple[float, float, float]:
    return (
        (frame["start"][0] + frame["dx"] * s_m) * MM,
        (frame["start"][1] + frame["dy"] * s_m) * MM,
        z_mm,
    )


def _elevation_drawing(info: dict, wall_ids: tuple[str, ...], scene_id: str, name_en: str, name_cs: str, look) -> dict:
    fig = figures(info)
    by_id = {wall["id"]: wall for wall in info["walls"]}
    frames = [by_id[wall_id]["result"]["frame"] for wall_id in wall_ids]
    frame = frames[0]
    length = sum(item["length"] for item in frames) * MM
    head = fig["head_mm"]
    course = fig["course_mm"]
    mid_s = frames[0]["length"] / 2.0
    mx, my, _mz = _station(frame, mid_s, head * 0.45)
    # South and north are one straight line even when the cladding is split.
    if len(frames) > 1:
        end = frames[-1]
        far = _station(end, end["length"], 0.0)
        near = _station(frames[0], 0.0, 0.0)
        mx = (near[0] + far[0]) / 2.0
        my = (near[1] + far[1]) / 2.0
        length = max(abs(far[0] - near[0]), abs(far[1] - near[1]))
    pose = _ortho_pose((mx, my, head * 0.45), look, (0.0, 1.0, 0.0), length / MM * 0.72, 1.7)
    edges = []
    for wall_id in wall_ids:
        edges.extend(_wall_edges(by_id[wall_id]["result"]["frame"], by_id[wall_id]["result"]["tiles"]))
    z0 = _floor_z(info, frame["start"][0], frame["start"][1]) * MM
    end_frame = frames[-1]
    end_xy = (
        end_frame["start"][0] + end_frame["dx"] * end_frame["length"],
        end_frame["start"][1] + end_frame["dy"] * end_frame["length"],
    )
    z1 = _floor_z(info, end_xy[0], end_xy[1]) * MM
    notes = [
        _callout(
            (mx, my, head + 90.0),
            (
                f"tiles cut at {_mm_text(head)} mm\n"
                f"plaster above, soffit over the shower"
            ),
            (
                f"obklad řezán na {_mm_text(head)} mm\n"
                f"nad tím omítka, nad sprchou podhled"
            ),
            (0.0, 0.06),
            leader=False,
        ),
        _dim(
            _station(frame, -0.08, 0.0),
            _station(frame, -0.08, head),
            -0.08,
            f"{head:.0f} mm",
            f"{head:.0f} mm",
        ),
        _callout(
            _station(frame, 0.0, z0 - 50.0),
            f"floor {_mm_text(z0, signed=True)} mm\nbottom cut",
            f"podlaha {_mm_text(z0, signed=True)} mm\nšikmý řez",
            (-0.16, -0.1),
            leader=False,
        ),
        _callout(
            _station(end_frame, end_frame["length"], z1 - 50.0),
            f"floor {_mm_text(z1, signed=True)} mm\nbottom cut",
            f"podlaha {_mm_text(z1, signed=True)} mm\nšikmý řez",
            (0.16, -0.1),
            leader=False,
        ),
        _dim(
            _station(frame, 0.0, -160.0),
            _station(end_frame, end_frame["length"], -160.0),
            -0.08,
            f"{length:.0f} mm",
            f"{length:.0f} mm",
        ),
    ]
    if "CLAD-PW" in wall_ids:
        notes.append(
            _callout(
                _station(frame, frame["length"] * 0.35, 1500.0),
                "plaster above the shelf\nshelf on the 1194 mm joint",
                "nad policí omítka\npolice na spáře 1194 mm",
                (0.16, 0.08),
                leader=False,
            )
        )
        notes.append(
            _callout(
                _station(frame, frame["length"] * 0.55, 1000.0),
                "vanity on the door joint\nouter pipes one tile either side",
                "skříňka na spáře dveří\nkrajní trubky o dlaždici vedle",
                (0.12, 0.08),
                leader=False,
            )
        )
    if "CLAD-NS" in wall_ids:
        shower = by_id["CLAD-NS"]["result"]["frame"]
        notes.append(
            _callout(
                _station(shower, shower["length"] / 2.0, course),
                "549 | 2 | 549 mm\nTango 150 mm on the joint",
                "549 | 2 | 549 mm\nTango 150 mm na spáře",
                (0.16, 0.1),
            )
        )
        notes.append(
            _callout(
                _station(shower, shower["length"] * 0.25, 1400.0),
                "niche 340×280, centred\nbottom on the 1194 joint",
                "nika 340×280, ve středu\nspodek na spáře 1194",
                (-0.12, 0.08),
                leader=False,
            )
        )
    if "CLAD-E" in wall_ids:
        notes.append(
            _callout(
                _station(frame, frame["length"] * 0.5, 80.0),
                "tiles from 0\nsloped profile below",
                "obklad od 0\nspádová lišta pod ním",
                (0.16, -0.08),
                leader=False,
            )
        )
    spec = {
        "id": scene_id,
        "projection": "ortho",
        "title": _tx(f"Bathroom 1.07 — {name_en}", f"Koupelna 1.07 — {name_cs}"),
        "project": PROJECT,
        "cuts": _wall_cuts(frame),
        "camera": pose,
        "annotations": [*edges, *notes],
    }
    spec.update(_plate({LABEL_WALL: 1}))
    return spec


def scenes(info: dict | None = None) -> list[dict]:
    """Plan and one elevation per wall. The jog is on the plan."""
    info = info if info is not None else layout()
    return [
        _plan_drawing(info),
        _elevation_drawing(
            info,
            ("CLAD-PW", "CLAD-NS"),
            "bath107-elev-n",
            "north wall, window",
            "severní stěna, okno",
            (0.0, 0.0, -1.0),
        ),
        _elevation_drawing(
            info, ("CLAD-E",), "bath107-elev-e", "east wall, shower", "východní stěna, sprcha", (1.0, 0.0, 0.0)
        ),
        _elevation_drawing(
            info,
            ("CLAD-S", "CLAD-SS"),
            "bath107-elev-s",
            "south wall, door",
            "jižní stěna, dveře",
            (0.0, 0.0, 1.0),
        ),
        _elevation_drawing(
            info, ("CLAD-W",), "bath107-elev-w", "west wall", "západní stěna", (-1.0, 0.0, 0.0)
        ),
    ]


def part_groups() -> list[dict]:
    return [
        {
            "id": "bathroom-107",
            "children": [
                LABEL_FLOOR,
                LABEL_WALL,
                LABEL_GROUT,
                LABEL_DRAIN,
                LABEL_FIXTURE,
                LABEL_PREWALL,
                LABEL_SCREEN,
                LABEL_PROFILE,
                LABEL_VANITY,
            ],
        }
    ]


def build(doc: dict | None = None):
    solids = parts(doc)
    shape = Compound(obj=solids, children=solids, label=MODEL_NAME)
    fig = figures()
    meta = {
        "kind": "solid",
        "derived": {
            "tiles": sum(1 for solid in solids if solid.label in {LABEL_FLOOR, LABEL_WALL}),
            "head_mm": round(fig["head_mm"], 3),
            "drop_mm": round(fig["drop_mm"], 3),
            "screed_drain_mm": round(fig["screed_drain_mm"], 3),
            "eps_mm": f"{EPS_TOP_MM:.0f}+{EPS_BOTTOM_MM:.0f}",
        },
    }
    return shape, meta


def _svg_escape(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def write_plates(directory: Path, info: dict | None = None) -> list[Path]:
    """Black tile lines, blue notes. One plan and one elevation per wall."""
    import cairosvg

    info = info if info is not None else layout()
    directory.mkdir(parents=True, exist_ok=True)
    plates = [
        ("bath107-plan", _svg_plan(info)),
        ("bath107-elev-n", _svg_wall(info, ("CLAD-PW", "CLAD-NS"), "North wall — window", "Severní stěna — okno")),
        ("bath107-elev-e", _svg_wall(info, ("CLAD-E",), "East wall — shower", "Východní stěna — sprcha")),
        ("bath107-elev-s", _svg_wall(info, ("CLAD-S", "CLAD-SS"), "South wall — door", "Jižní stěna — dveře")),
        ("bath107-elev-w", _svg_wall(info, ("CLAD-W",), "West wall", "Západní stěna")),
    ]
    written = []
    for name, svg in plates:
        svg_path = directory / f"{name}.svg"
        png_path = directory / f"{name}.png"
        svg_path.write_text(svg, encoding="utf-8")
        cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(png_path), output_width=2200)
        written.append(png_path)
    return written


def _svg_document(body: str, title: str) -> str:
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="2200" height="1400" viewBox="0 0 2200 1400">
<rect width="2200" height="1400" fill="#f7f4ef"/>
<text x="48" y="52" font-family="DejaVu Sans, sans-serif" font-size="28" fill="#1a1a1a">{_svg_escape(title)}</text>
<text x="48" y="82" font-family="DejaVu Sans, sans-serif" font-size="16" fill="#1d4ed8">RD Šíma 1.NP · Koupelna 1.07 · blue notes, black joints</text>
{body}
</svg>
"""


def _poly(points, color="#1a1a1a", width=1.4) -> str:
    coords = " ".join(f"{x:.1f},{y:.1f}" for x, y in points)
    return (
        f'<polyline points="{coords}" fill="none" stroke="{color}" '
        f'stroke-width="{width}" stroke-linejoin="miter"/>'
    )


def _svg_text(x, y, text, size=16, anchor="middle", color="#1d4ed8") -> str:
    lines = text.split("\n")
    chunks = []
    for index, line in enumerate(lines):
        dy = 0 if index == 0 else size + 2
        chunks.append(
            f'<tspan x="{x:.1f}" dy="{dy}">{_svg_escape(line)}</tspan>'
        )
    return (
        f'<text y="{y:.1f}" text-anchor="{anchor}" font-family="DejaVu Sans, sans-serif" '
        f'font-size="{size}" fill="{color}">{"".join(chunks)}</text>'
    )


def _svg_dim(x0, y0, x1, y1, text, horizontal: bool) -> str:
    color = "#1d4ed8"
    if horizontal:
        y = (y0 + y1) / 2.0
        line = (
            f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x0:.1f}" y2="{y:.1f}" stroke="{color}" stroke-width="1"/>'
            f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x1:.1f}" y2="{y:.1f}" stroke="{color}" stroke-width="1"/>'
            f'<line x1="{x0:.1f}" y1="{y:.1f}" x2="{x1:.1f}" y2="{y:.1f}" stroke="{color}" stroke-width="1.4"/>'
        )
        label = _svg_text((x0 + x1) / 2.0, y - 8, text, 15)
    else:
        x = (x0 + x1) / 2.0
        line = (
            f'<line x1="{x0:.1f}" y1="{y0:.1f}" x2="{x:.1f}" y2="{y0:.1f}" stroke="{color}" stroke-width="1"/>'
            f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x:.1f}" y2="{y1:.1f}" stroke="{color}" stroke-width="1"/>'
            f'<line x1="{x:.1f}" y1="{y0:.1f}" x2="{x:.1f}" y2="{y1:.1f}" stroke="{color}" stroke-width="1.4"/>'
        )
        label = _svg_text(x - 8, (y0 + y1) / 2.0, text, 15, anchor="end")
    return line + label


def _svg_plan(info: dict) -> str:
    fig = figures(info)
    level = info["level"]["Footprint"]
    room_east = _room_east(info)
    xs = [p[0] for p in level] + [room_east]
    ys = [p[1] for p in level]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    scale = 280.0
    origin_x, origin_y = 180.0, 1180.0

    def pt(x_m, y_m):
        return origin_x + (x_m - min_x) * scale, origin_y - (y_m - min_y) * scale

    body = []
    shell = [
        (min_x, ROOM_SOUTH_M),
        (PASSAGE_X0_M, ROOM_SOUTH_M),
        (PASSAGE_X0_M, DOOR_LEAF_Y_M),
        (PASSAGE_X1_M, DOOR_LEAF_Y_M),
        (PASSAGE_X1_M, ROOM_SOUTH_M),
        (room_east, ROOM_SOUTH_M),
        (room_east, ROOM_NORTH_M),
        (min_x, ROOM_NORTH_M),
    ]
    body.append(_poly([pt(x, y) for x, y in (*shell, shell[0])], width=2.2))
    for ring in (*info["level_tiles"], *info["shower_tiles"], *info["level_grout"], *info["shower_grout"]):
        body.append(_poly([pt(x, y) for x, y in (*ring, ring[0])]))
    gx0, gy0 = pt(fig["glass_x_m"], fig["glass_south_m"])
    gx1, gy1 = pt(fig["glass_x_m"], fig["glass_north_m"])
    body.append(
        f'<line x1="{gx0:.1f}" y1="{gy0:.1f}" x2="{gx1:.1f}" y2="{gy1:.1f}" '
        f'stroke="#1d4ed8" stroke-width="1.6" stroke-dasharray="8 6"/>'
    )
    for row in (*(info["doc"].get("sanitaryTerminals") or []), *(info["doc"].get("furniture") or [])):
        if None in (row.get("Origin"), row.get("Width"), row.get("Depth")):
            continue
        x, y = row["Origin"]
        ring = [
            (x, y),
            (x + row["Width"], y),
            (x + row["Width"], y + row["Depth"]),
            (x, y + row["Depth"]),
        ]
        body.append(_poly([pt(px, py) for px, py in (*ring, ring[0])], color="#1d4ed8", width=1.3))
    drain = _by_id(info["doc"]["wasteTerminals"])["DRAIN-1.07"]
    ox, oy = drain["Origin"]
    drain_ring = [
        (ox, oy),
        (ox + drain["Width"], oy),
        (ox + drain["Width"], oy - 0.02),
        (ox, oy - 0.02),
    ]
    body.append(_poly([pt(px, py) for px, py in (*drain_ring, drain_ring[0])], color="#1d4ed8", width=2.4))
    x0, y_south = pt(min_x, ROOM_SOUTH_M)
    x1, _y = pt(room_east, ROOM_SOUTH_M)
    _x, y_north = pt(min_x, ROOM_NORTH_M)
    body.append(_svg_dim(x0, y_south + 36, x1, y_south + 36, f"{(room_east - min_x) * MM:.0f} mm", True))
    body.append(_svg_dim(x0 - 36, y_south, x0 - 36, y_north, f"{(ROOM_NORTH_M - ROOM_SOUTH_M) * MM:.0f} mm", False))
    px, py_door = pt(PASSAGE_X0_M, DOOR_LEAF_Y_M)
    _px, py_room = pt(PASSAGE_X0_M, ROOM_SOUTH_M)
    body.append(_svg_dim(px - 28, py_door, px - 28, py_room, "675 mm", False))
    sx0, sy = pt(fig["glass_east_m"], ROOM_NORTH_M)
    sx1, _sy = pt(fig["tile_face_m"], ROOM_NORTH_M)
    shower_mm = fig["shower_width_mm"]
    body.append(_svg_dim(sx0, y_north - 28, sx1, y_north - 28, f"{shower_mm:.0f} mm 549|2|549", True))
    cheek_x, cheek_y = pt(fig["glass_x_m"] - fig["cheek_mm"] / MM, ROOM_NORTH_M)
    glass_wx, _glass_wy = pt(fig["glass_x_m"], ROOM_NORTH_M)
    body.append(_svg_dim(cheek_x, cheek_y - 52, glass_wx, cheek_y - 52, f"{fig['cheek_mm']:.0f} mm wall past glass", True))
    lx, ly = pt((min_x + fig["glass_x_m"]) / 2.0, (min_y + 12.055) / 2.0)
    body.append(_svg_text(lx, ly, "level floor\n0.000 mm", 18))
    dx, dy = pt(fig["glass_x_m"] + 0.28, fig["north_y_m"] - 0.55)
    body.append(
        _svg_text(
            dx,
            dy,
            f"wall drain {_mm_text(fig['z_north_mm'], signed=True)} mm\n"
            f"1.250% from the south\n"
            f"{fig['drop_mm']:.3f} mm / {round(fig['run_mm'])} mm\n"
            f"screed {fig['screed_drain_mm']:.3f} mm\n"
            f"EPS 60+40",
            15,
            anchor="start",
        )
    )
    body.append(_svg_text(gx0 + 10, (gy0 + gy1) / 2.0, "glass on the wall\n50 mm cheek", 15, anchor="start"))
    body.append(_svg_text(pt(10.2, 11.1)[0], pt(10.2, 11.1)[1], "Zen 190\ntiled front", 15, anchor="start"))
    body.append(_svg_text(pt(12.0, 10.35)[0], pt(12.0, 10.35)[1], "door centre\njoint", 15))
    body.append(
        _svg_text(
            pt(12.0, 9.8)[0],
            pt(12.0, 9.8)[1],
            "passage 675 mm\ndoor 2100\ntiles to 2230",
            14,
        )
    )
    body.append(
        _svg_text(
            pt(11.70, 11.85)[0],
            pt(11.70, 11.85)[1],
            "vanity on the door joint\none top, two basins\nouter pipes one tile out",
            15,
        )
    )
    return _svg_document("".join(body), "Koupelna 1.07 — floor tiles and shower fall")


def _svg_wall(info: dict, wall_ids: tuple[str, ...], title_en: str, title_cs: str) -> str:
    fig = figures(info)
    by_id = {wall["id"]: wall for wall in info["walls"]}
    tiles = []
    shift = 0.0
    for wall_id in wall_ids:
        for tile in by_id[wall_id]["result"]["tiles"]:
            polygon = [(float(s) + shift, float(z)) for s, z in tile["polygon"]]
            tiles.append(polygon)
        shift += by_id[wall_id]["result"]["frame"]["length"]
    length = shift
    head = fig["head_mm"] / MM
    scale = min(1700.0 / max(length, 0.2), 1000.0 / 2.6)
    origin_x, origin_y = 160.0, 1180.0

    def pt(s_m, z_m):
        return origin_x + s_m * scale, origin_y - z_m * scale

    body = []
    for polygon in tiles:
        body.append(_poly([pt(s, z) for s, z in (*polygon, polygon[0])]))
    x0, y_floor = pt(0.0, 0.0)
    x1, _yf = pt(length, 0.0)
    _x, y_head = pt(0.0, head)
    body.append(_svg_dim(x0, y_floor + 40, x1, y_floor + 40, f"{round(length * MM)} mm", True))
    body.append(_svg_dim(x0 - 40, y_floor, x0 - 40, y_head, f"{fig['head_mm']:.0f} mm", False))
    body.append(_svg_text(origin_x + length * scale / 2.0, 130, f"tiles cut at {fig['head_mm']:.0f} mm, plaster above", 18))

    def finished_floor(wall_id: str, at_end: bool) -> float:
        wall = by_id[wall_id]
        frame = wall["result"]["frame"]
        station = frame["length"] if at_end else 0.0
        x = frame["start"][0] + frame["dx"] * station
        y = frame["start"][1] + frame["dy"] * station
        return _floor_z(info, x, y)

    left_bottom = finished_floor(wall_ids[0], False)
    right_bottom = finished_floor(wall_ids[-1], True)
    body.append(_svg_text(origin_x, origin_y + 78, f"floor {left_bottom * MM:+.3f} mm", 15, anchor="start"))
    body.append(_svg_text(origin_x + length * scale, origin_y + 78, f"floor {right_bottom * MM:+.3f} mm", 15, anchor="end"))
    if "CLAD-PW" in wall_ids:
        body.append(
            _svg_text(
                origin_x + 80,
                pt(0.2, 1.5)[1],
                "plaster above the shelf\nshelf on joint 1194\nmirrors, note only\nvanity on the door joint",
                15,
                anchor="start",
            )
        )
    if "CLAD-NS" in wall_ids:
        shower_s = by_id["CLAD-PW"]["result"]["frame"]["length"]
        mx, my = pt(shower_s + by_id["CLAD-NS"]["result"]["frame"]["length"] / 2.0, fig["course_mm"] / MM)
        body.append(
            _svg_text(
                mx,
                my - 16,
                "549 | 2 | 549\nTango 150 mm on the joint\nniche 340×280 centred on 1194",
                15,
            )
        )
    if "CLAD-E" in wall_ids:
        body.append(_svg_text(origin_x + 40, pt(0.4, 0.15)[1], "tiles from 0, sloped profile", 15, anchor="start"))
    body.append(_svg_text(48, 1360, title_cs, 14, anchor="start"))
    return _svg_document("".join(body), f"Koupelna 1.07 — {title_en}")


def _main():
    shape, meta = build()
    paths = export_shape(
        shape,
        MODEL_NAME,
        scenes=scenes(),
        part_groups=part_groups(),
        label=MODEL_LABEL,
    )
    print(f"Built {MODEL_NAME}: {meta['derived']}")
    for fmt, path in paths.items():
        print(f"  {fmt}: {path}")


if __name__ == "__main__":
    _main()
