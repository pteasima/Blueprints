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
    SOURCE_PATH,
    choices,
    floor_tiles_mm,
    head_mm,
    layout,
    load_document,
    parts,
    scenes,
    validate,
    wall_tiles_mm,
)
from yaml_ifc.tiling import wall_layout  # noqa: E402


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


def test_walls_keep_one_cut_and_drop_alignment_at_the_openings():
    info = layout()
    walls = wall_tiles_mm(info)
    assert _widths(walls["CLAD-E"]) == pytest.approx([600, 600, 600, 119] * 2, abs=0.05)
    assert _widths(walls["CLAD-S"]) == pytest.approx([600, 600, 600, 369] * 2, abs=0.05)
    # North: 573 + 600 on the west pier, 600 + 298 above the door, 100 mm pier.
    assert sorted(_widths(walls["CLAD-N"], 0)) == pytest.approx([100, 573, 600], abs=0.05)
    assert sorted(_widths(walls["CLAD-N"], 1)) == pytest.approx(
        [100, 298, 573, 600, 600], abs=0.05
    )
    assert min(_widths(walls["CLAD-N"])) == pytest.approx(100.0, abs=0.05)
    # West: 173 at the drain, full tile at the window, 298 under it, 250 mm pier.
    assert sorted(_widths(walls["CLAD-W"], 0)) == pytest.approx(
        [173, 250, 298, 600, 600], abs=0.05
    )
    assert min(_widths(walls["CLAD-W"])) > 150
    notes = " ".join(choices(info))
    assert "West wall" in notes and "North wall" in notes
    # East and south still share the floor origin.
    by_id = {wall["id"]: wall["layout"]["GridOrigin"] for wall in info["walls"]}
    assert by_id["CLAD-E"] == info["floor"]["GridOrigin"]
    assert by_id["CLAD-S"] == info["floor"]["GridOrigin"]
    assert by_id["CLAD-N"][0] == pytest.approx(31.325)
    assert by_id["CLAD-W"][1] == pytest.approx(6.8)


def test_shared_floor_grid_would_add_the_thin_pieces():
    """The pieces Petr ruled out, computed on the floor origin and not built."""
    info = layout()
    plane = info["plane"]
    footprint = info["footprint"]
    floor_origin = info["floor"]["GridOrigin"]

    def widths(layout_row):
        tile = layout_row["TileLayout"] if "TileLayout" in layout_row else layout_row
        result = wall_layout(
            plane,
            tile["Tile"],
            tile["Joint"],
            tile["Courses"],
            tile["BottomJoint"],
            floor_origin,
            tile["Axis"],
            tile["Inside"],
            tile.get("Openings") or (),
            z_min=info["z_min"],
            footprint=footprint,
        )
        found = []
        for piece in result["tiles"]:
            polygon = piece["polygon"]
            span = max(point[0] for point in polygon) - min(point[0] for point in polygon)
            found.append(span * 1000)
        return found

    by_id = {row["id"]: row for row in info["doc"]["coverings"]}
    north = widths(by_id["CLAD-N"])
    west = widths(by_id["CLAD-W"])
    assert min(north) == pytest.approx(27.0, abs=0.5)
    assert any(abs(width - 129.0) < 1.0 for width in west)


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
    assert HEAD_MM in tops or any(abs(value - HEAD_MM) < 0.01 for value in tops)
    assert max(tops) == pytest.approx(HEAD_MM, abs=0.01)
    # The window keeps the tiles below the sill. Nothing is cut off above the head.
    assert 1750.0 in tops or any(abs(value - 1750.0) < 0.01 for value in tops)
    above_door = [
        tile
        for tile in walls["CLAD-N"]
        if tile["course"] == 1 and tile["height_mm"] < 300
    ]
    assert above_door
    assert {round(tile["height_mm"], 3) for tile in above_door} == {260.434} or all(
        tile["height_mm"] == pytest.approx(260.434, abs=0.01) for tile in above_door
    )


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
