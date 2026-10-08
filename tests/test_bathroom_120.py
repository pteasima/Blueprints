"""Bathroom 1.20: one sloped plane, tiles from the drain, and the point drain."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bathroom_120 import (  # noqa: E402
    LABEL_DRAIN,
    LABEL_GROUT,
    LABEL_TILE,
    ROOM_DEPTH,
    ROOM_WIDTH,
    ROOM_X0,
    ROOM_X1,
    ROOM_Y0,
    ROOM_Y1,
    SOURCE_PATH,
    floor_tiles_mm,
    head_mm,
    layout,
    load_document,
    parts,
    scenes,
    small_pieces,
    validate,
    wall_tiles_mm,
)


PITCH_MM = 602.0
HEAD_MM = 2360.434


def _widths(tiles, course=None):
    rows = tiles if course is None else [tile for tile in tiles if tile["course"] == course]
    return [tile["width_mm"] for tile in rows]


def test_file_records_the_room_and_the_unmeasured_layers():
    doc = load_document()
    assert SOURCE_PATH.is_file()
    slab = next(row for row in doc["slabs"] if row["id"] == "SLAB-1.20")
    heating = slab["PropertySets"][0]["Properties"]
    assert heating["UnderfloorHeating"] is True
    assert "Thickness" not in slab
    membrane = next(row for row in doc["coverings"] if row["id"] == "MEM-1.20")
    props = membrane["PropertySets"][0]["Properties"]
    assert props["UpstandMin"] == 0.1
    assert props["UpstandMax"] == 0.15
    assert props["ShowerUpstandMin"] == 2
    assert props["DoorEdge"] == "taped"
    assert "TileLayout" not in membrane
    drain = doc["wasteTerminals"][0]
    assert drain["Name"] == "ACO 450420"
    assert drain["Origin"] == [30.15, 6.025]
    assert drain["Width"] == 0.3 and drain["Depth"] == 0.3
    assert "Height" not in drain
    assert validate(doc) == []


def test_plane_joints_and_the_level_top():
    info = layout()
    assert info["z_max"] == pytest.approx(0.0, abs=1e-9)
    assert info["z_min"] * 1000 == pytest.approx(-43.566, abs=0.001)
    assert info["z_min"] < 0
    joints = info["joints"]
    assert info["floor"]["WallJoint"] * 1000 == pytest.approx(2.0)
    assert joints.x * 1000 == pytest.approx(2.03797, abs=1e-4)
    assert joints.y * 1000 == pytest.approx(2.02975, abs=1e-4)
    assert joints.plan_pitch_x * 1000 == pytest.approx(PITCH_MM)
    assert head_mm(info) == pytest.approx(HEAD_MM, abs=0.001)
    # Two courses, no strip above the second. The door corner is the high point.
    assert info["levels"]["course_tops"][-1] * 1000 == pytest.approx(HEAD_MM, abs=0.001)
    assert len(info["levels"]["course_tops"]) == 2
    leaf = 0.011232 * 0.8 * 1000
    assert leaf == pytest.approx(8.986, abs=0.001)


def test_floor_starts_with_full_tiles_at_the_drain():
    info = layout()
    rows = floor_tiles_mm(info)
    full = [row for row in rows if row["full"]]
    notched = [row for row in rows if row["notched"]]
    assert len(full) == 8
    assert len(notched) == 1
    drain_tile = notched[0]
    assert drain_tile["min_x_mm"] == pytest.approx(30.15 * 1000, abs=0.05)
    assert drain_tile["min_y_mm"] == pytest.approx(6.025 * 1000, abs=0.05)
    assert drain_tile["width_mm"] == pytest.approx(info["joints"].plan_tile_x * 1000, abs=0.05)
    east = [
        row
        for row in rows
        if abs(row["width_mm"] - 369.0) < 0.05 and row["depth_mm"] > 200
    ]
    north = [
        row
        for row in rows
        if abs(row["depth_mm"] - 119.0) < 0.05 and row["width_mm"] > 500
    ]
    corner = [
        row
        for row in rows
        if abs(row["width_mm"] - 369.0) < 0.05 and abs(row["depth_mm"] - 119.0) < 0.05
    ]
    assert len(east) == 3
    assert len(north) == 3
    assert len(corner) == 1
    assert ROOM_WIDTH * 1000 - 3 * PITCH_MM == pytest.approx(369.0, abs=0.001)
    assert ROOM_DEPTH * 1000 - 3 * PITCH_MM == pytest.approx(119.0, abs=0.001)
    # Nothing above the door corner, and the grate is the southwest 300 mm.
    assert info["floor"]["GridOrigin"] == [30.15, 6.025]


def _world_edges(wall):
    frame = wall["result"]["frame"]
    xs, ys = set(), set()
    for piece in wall["result"]["tiles"]:
        for along, _z in piece["polygon"]:
            x = frame["start"][0] + frame["dx"] * float(along)
            y = frame["start"][1] + frame["dy"] * float(along)
            xs.add(float(x))
            ys.add(float(y))
    return xs, ys


def _nearest(value, edges):
    return min(abs(value - edge) for edge in edges)


def _tile(tiles, course, along0):
    return next(
        tile
        for tile in tiles
        if tile["course"] == course and abs(tile["along0_mm"] - along0) < 0.1
    )


def _vertical_edges(polygon, along_m, tol=1e-4):
    points = list(polygon)
    hits = []
    for start, end in zip(points, points[1:] + points[:1]):
        if abs(start[0] - along_m) > tol or abs(end[0] - along_m) > tol:
            continue
        if abs(start[1] - end[1]) <= 1e-4:
            continue
        hits.append(tuple(sorted((float(start[1]), float(end[1])))))
    return hits


def test_walls_continue_the_floor_grid():
    info = layout()
    walls = wall_tiles_mm(info)
    origin = info["floor"]["GridOrigin"]
    assert all(wall["layout"]["GridOrigin"] == origin for wall in info["walls"])
    assert _widths(walls["CLAD-E"]) == pytest.approx([600, 600, 600, 119] * 2, abs=0.05)
    assert _widths(walls["CLAD-S"]) == pytest.approx([600, 600, 600, 369] * 2, abs=0.05)
    # The door voids the lower course. What remains is a real width cut.
    assert sorted(_widths(walls["CLAD-N"], 0)) == pytest.approx([100, 573, 600], abs=0.05)
    # Upper course: one tile per module. The 27 mm and 269 mm pieces are legs.
    assert sorted(_widths(walls["CLAD-N"], 1)) == pytest.approx([369, 600, 600, 600], abs=0.05)
    # The sill is above this course, so the window does not cut it.
    assert _widths(walls["CLAD-W"], 0) == pytest.approx([600, 600, 600, 119], abs=0.05)
    assert _widths(walls["CLAD-W"], 1) == pytest.approx([600, 600, 600, 119], abs=0.05)
    assert small_pieces(info) == []


def test_wall_floor_joints_meet_at_the_corners():
    """Module boundaries match. The plan-tile vs wall-tile joint edge stays under 0.1 mm."""
    info = layout()
    pitch = info["joints"].plan_pitch_x
    origin = info["floor"]["GridOrigin"]
    floor_x, floor_y = set(), set()
    for ring in info["floor_tiles"]:
        for x, y in ring:
            floor_x.add(float(x))
            floor_y.add(float(y))
    by_id = {wall["id"]: wall for wall in info["walls"]}
    north_x, _north_y = _world_edges(by_id["CLAD-N"])
    south_x, _south_y = _world_edges(by_id["CLAD-S"])
    _east_x, east_y = _world_edges(by_id["CLAD-E"])
    _west_x, west_y = _world_edges(by_id["CLAD-W"])

    def module_lines(start, low, high):
        lines = []
        n = 0
        while True:
            value = start + n * pitch
            if value > high + 1e-9:
                break
            if value >= low - 1e-9:
                lines.append(value)
            n += 1
        return lines

    for value in module_lines(origin[0], ROOM_X0, ROOM_X1):
        assert _nearest(value, floor_x) < 5e-5
        assert _nearest(value, north_x) < 5e-5
        assert _nearest(value, south_x) < 5e-5
    for value in module_lines(origin[1], ROOM_Y0, ROOM_Y1):
        assert _nearest(value, floor_y) < 5e-5
        assert _nearest(value, east_y) < 5e-5
        assert _nearest(value, west_y) < 5e-5

    # Both sides of each joint, not the drain notch (300 mm off the grid).
    for edge in floor_x:
        if min(abs(edge - line) for line in module_lines(origin[0], ROOM_X0, ROOM_X1)) > 0.003:
            continue
        assert _nearest(edge, north_x) < 1e-4
        assert _nearest(edge, south_x) < 1e-4
    for edge in floor_y:
        if min(abs(edge - line) for line in module_lines(origin[1], ROOM_Y0, ROOM_Y1)) > 0.003:
            continue
        assert _nearest(edge, east_y) < 1e-4
        assert _nearest(edge, west_y) < 1e-4


def test_openings_notch_a_tile_instead_of_splitting_it():
    info = layout()
    by_id = {wall["id"]: wall for wall in info["walls"]}
    walls = wall_tiles_mm(info)

    west_lower = [
        piece["polygon"]
        for piece in by_id["CLAD-W"]["result"]["tiles"]
        if piece["course"] == 0
    ]
    for polygon in west_lower:
        assert _vertical_edges(polygon, 0.775) == []
        assert _vertical_edges(polygon, 1.675) == []
    course_joint = [
        piece
        for piece in by_id["CLAD-W"]["result"]["grout"]
        if piece["course"] == 1
        and max(p[1] for p in piece["polygon"]) - min(p[1] for p in piece["polygon"]) < 0.01
    ]
    joint_spans = sorted(
        (min(p[0] for p in piece["polygon"]), max(p[0] for p in piece["polygon"]))
        for piece in course_joint
    )
    assert any(abs(start - 0.602) < 1e-4 and abs(end - 1.202) < 1e-4 for start, end in joint_spans)
    assert any(abs(start - 1.204) < 1e-4 and abs(end - 1.804) < 1e-4 for start, end in joint_spans)

    west = walls["CLAD-W"]
    south_of_window = _tile(west, 1, 602)
    assert south_of_window["notched"] is True
    assert south_of_window["width_mm"] == pytest.approx(600.0, abs=0.05)
    full, cut = south_of_window["rows"]
    assert full["along1_mm"] == pytest.approx(775.0, abs=0.05)
    assert full["top_mm"] == pytest.approx(HEAD_MM, abs=0.01)
    assert cut["along0_mm"] == pytest.approx(775.0, abs=0.05)
    assert cut["along1_mm"] == pytest.approx(1202.0, abs=0.05)
    assert cut["top_mm"] == pytest.approx(1750.0, abs=0.01)
    assert cut["height_mm"] == pytest.approx(589.566, abs=0.01)
    north_of_window = _tile(west, 1, 1204)
    assert north_of_window["notched"] is True
    assert north_of_window["width_mm"] == pytest.approx(600.0, abs=0.05)
    cut, full = north_of_window["rows"]
    assert cut["along1_mm"] == pytest.approx(1675.0, abs=0.05)
    assert cut["top_mm"] == pytest.approx(1750.0, abs=0.01)
    assert full["along0_mm"] == pytest.approx(1675.0, abs=0.05)
    assert full["height_mm"] == pytest.approx(1200.0, abs=0.05)
    # The jamb line exists only above the sill, on the upper course.
    upper = [
        piece["polygon"]
        for piece in by_id["CLAD-W"]["result"]["tiles"]
        if piece["course"] == 1 and abs(min(p[0] for p in piece["polygon"]) - 0.602) < 1e-4
    ]
    jamb = _vertical_edges(upper[0], 0.775)
    assert len(jamb) == 1
    assert jamb[0][0] == pytest.approx(1.75, abs=1e-4)
    assert jamb[0][1] * 1000 == pytest.approx(HEAD_MM, abs=0.01)

    north = walls["CLAD-N"]
    door_tile = _tile(north, 1, 602)
    assert door_tile["notched"] is True
    assert door_tile["width_mm"] == pytest.approx(600.0, abs=0.05)
    pier, leg = door_tile["rows"]
    assert pier["along1_mm"] == pytest.approx(1175.0, abs=0.05)
    assert pier["height_mm"] == pytest.approx(1200.0, abs=0.05)
    assert leg["along0_mm"] == pytest.approx(1175.0, abs=0.05)
    assert leg["along1_mm"] == pytest.approx(1202.0, abs=0.05)
    assert leg["along1_mm"] - leg["along0_mm"] == pytest.approx(27.0, abs=0.05)
    assert leg["height_mm"] == pytest.approx(260.434, abs=0.01)
    assert leg["bottom_mm"] == pytest.approx(2100.0, abs=0.01)
    assert leg["top_mm"] == pytest.approx(HEAD_MM, abs=0.01)
    above = _tile(north, 1, 1204)
    assert above["height_cut"] is True
    assert above["width_mm"] == pytest.approx(600.0, abs=0.05)
    assert above["height_mm"] == pytest.approx(260.434, abs=0.01)
    assert above["bottom_mm"] == pytest.approx(2100.0, abs=0.01)
    east = _tile(north, 1, 1806)
    assert east["notched"] is True
    assert east["width_mm"] == pytest.approx(369.0, abs=0.05)
    band, pier = east["rows"]
    assert band["along1_mm"] - band["along0_mm"] == pytest.approx(269.0, abs=0.05)
    assert band["height_mm"] == pytest.approx(260.434, abs=0.01)
    assert band["bottom_mm"] == pytest.approx(2100.0, abs=0.01)
    assert pier["along1_mm"] - pier["along0_mm"] == pytest.approx(100.0, abs=0.05)
    assert pier["height_mm"] == pytest.approx(1200.0, abs=0.05)
    # The leg shares the tile top. No joint continues up from the door head.
    door_poly = next(
        piece["polygon"]
        for piece in by_id["CLAD-N"]["result"]["tiles"]
        if piece["course"] == 1 and abs(min(p[0] for p in piece["polygon"]) - 0.602) < 1e-4
    )
    head_edge = _vertical_edges(door_poly, 1.175)
    assert len(head_edge) == 1
    assert head_edge[0][1] == pytest.approx(2.1, abs=1e-4)


def test_bottom_course_is_full_height_at_the_drain_and_level_on_top():
    info = layout()
    walls = wall_tiles_mm(info)
    south = next(
        tile
        for tile in walls["CLAD-S"]
        if tile["course"] == 0 and tile["along0_mm"] < 0.1
    )
    assert south["width_mm"] == pytest.approx(600.0, abs=0.05)
    assert south["height_mm"] == pytest.approx(1200.0, abs=0.05)
    west = next(
        tile
        for tile in walls["CLAD-W"]
        if tile["course"] == 0 and tile["along0_mm"] < 0.1
    )
    assert west["height_mm"] == pytest.approx(1200.0, abs=0.05)
    tops = {round(tile["top_mm"], 3) for tiles in walls.values() for tile in tiles}
    cut_tops = {
        round(row["top_mm"], 3)
        for tiles in walls.values()
        for tile in tiles
        for row in tile["rows"]
    }
    assert HEAD_MM in tops or any(abs(value - HEAD_MM) < 0.01 for value in tops)
    assert max(tops) == pytest.approx(HEAD_MM, abs=0.01)
    # The sill is the top of the notched leg, not of the whole module.
    assert any(abs(value - 1750.0) < 0.01 for value in cut_tops)
    above_door = [
        tile
        for tile in walls["CLAD-N"]
        if tile["course"] == 1 and tile["height_mm"] < 300
    ]
    assert len(above_door) == 1
    assert above_door[0]["height_mm"] == pytest.approx(260.434, abs=0.01)
    assert above_door[0]["width_mm"] == pytest.approx(600.0, abs=0.05)


def test_solids_sit_in_the_room_with_the_drain_in_the_southwest():
    solids = parts()
    labels = {solid.label for solid in solids}
    assert labels == {LABEL_TILE, LABEL_GROUT, LABEL_DRAIN}
    drain = next(solid for solid in solids if solid.label == LABEL_DRAIN)
    box = drain.bounding_box()
    assert box.min.X == pytest.approx(30.15 * 1000, abs=0.2)
    assert box.min.Y == pytest.approx(6.025 * 1000, abs=0.2)
    assert box.max.X - box.min.X == pytest.approx(300.0, abs=0.5)
    assert box.max.Y - box.min.Y == pytest.approx(300.0, abs=0.5)
    assert box.max.Z < -30.0
    tiles = [solid.bounding_box() for solid in solids if solid.label == LABEL_TILE]
    assert min(box.min.Z for box in tiles) > drain.bounding_box().min.Z
    assert max(box.max.Z for box in tiles) == pytest.approx(HEAD_MM, abs=0.05)
    assert min(box.min.X for box in tiles) == pytest.approx(30.15 * 1000, abs=0.5)
    assert max(box.max.X for box in tiles) == pytest.approx(32.325 * 1000, abs=0.5)
    assert min(box.min.Y for box in tiles) == pytest.approx(6.025 * 1000, abs=0.5)
    assert max(box.max.Y for box in tiles) == pytest.approx(7.95 * 1000, abs=0.5)


def test_viewer_scenes_frame_the_floor_the_room_and_the_door():
    specs = {item["id"]: item for item in scenes()}
    assert {"bathroom-floor", "bathroom", "bathroom-door"} <= set(specs)
    plan = specs["bathroom-floor"]
    assert plan["projection"] == "ortho"
    assert plan["cuts"][0]["normal"] == [0.0, -1.0, 0.0]
    assert plan["cuts"][0]["anchor"][2] == 120.0
    assert plan["camera"]["up"] == [0.0, 0.0, -1.0]
    assert specs["bathroom"]["hFovDeg"] == 50
    assert specs["bathroom-door"]["hFovDeg"] == 40
