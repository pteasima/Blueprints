"""Bathroom 1.07: door-centred floor joint, shower EPS 60+40, fixtures."""

from pathlib import Path
import sys

import pytest
from shapely.geometry import Point, Polygon
from shapely.ops import unary_union

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bathroom_107 import (  # noqa: E402
    ANNOTATION_BLUE,
    EPS_BOTTOM_MM,
    EPS_TOP_MM,
    LABEL_DRAIN,
    LABEL_FIXTURE,
    LABEL_FLOOR,
    LABEL_PREWALL,
    LABEL_PROFILE,
    LABEL_SCREEN,
    LABEL_VANITY,
    LABEL_WALL,
    SOURCE_PATH,
    figures,
    layout,
    load_document,
    parts,
    scenes,
    screed_at_zero_mm,
    validate,
)
from bathroom_120 import small_pieces, wall_tiles_mm  # noqa: E402
from yaml_ifc import plane_elevation  # noqa: E402
from yaml_ifc.yamlio import load as load_yaml  # noqa: E402


EAST = 14.225
SOUTH = 10.15
NORTH = 12.25
WEST = 9.725
GLASS = 13.0965
SHOWER = 13.1045
FACE = 12.055
DOOR = 12.0
TILE = 0.0085


def _area(rings) -> float:
    return float(unary_union([Polygon(ring) for ring in rings]).area)


def test_room_is_a_rectangle_and_the_chase_left_the_bathroom():
    doc = load_document()
    assert SOURCE_PATH.is_file()
    space = doc["spaces"][0]
    assert space["Name"] == "Koupelna" and space["LongName"] == "1.07"
    level = next(row for row in doc["slabs"] if row["id"] == "SLAB-LEVEL")
    shower = next(row for row in doc["slabs"] if row["id"] == "SLAB-SHOWER")
    assert level["Plane"]["Gradient"] == [0, 0]
    assert shower["Plane"]["Gradient"] == [0, -0.0125]
    assert shower["Plane"]["Origin"][0] == pytest.approx(SHOWER)
    assert shower["Plane"]["Origin"][1] == pytest.approx(SOUTH)
    assert shower["Plane"]["Elevation"] == 0
    level_props = level["PropertySets"][0]["Properties"]
    props = shower["PropertySets"][0]["Properties"]
    assert level_props["EpsTopMm"] == 60 and level_props["EpsBottomMm"] == 60
    assert level_props["ScreedAtZeroMm"] == 59
    assert props["EpsTopMm"] == 60 and props["EpsBottomMm"] == 40
    assert props["ScreedAtZeroMm"] == 79
    assert props["Fall"] == 0.0125
    assert props["MinimumScreedMm"] == 45
    room = _area(
        [
            [
                [WEST, SOUTH],
                [EAST, SOUTH],
                [EAST, NORTH],
                [WEST, NORTH],
            ]
        ]
    )
    assert room == pytest.approx(9.45, abs=0.001)
    walls = {row["id"] for row in doc["coverings"] if (row.get("TileLayout") or {}).get("Axis")}
    assert walls == {"CLAD-PW", "CLAD-NS", "CLAD-E", "CLAD-S", "CLAD-W"}
    house = load_yaml(ROOT / "inputs" / "ground_floor" / "ground-floor.yaml")
    chase = next(row for row in house["walls"] if row["id"] == "W-040")
    assert chase["Axis"]["Start"][0] + chase["Thickness"] / 2 == pytest.approx(WEST)
    assert validate(doc) == []


def test_fall_and_the_shower_screed():
    info = layout()
    fig = figures(info)
    plane = info["shower_plane"]
    z_south = plane_elevation(plane, EAST, SOUTH)
    z_north = plane_elevation(plane, EAST, fig["north_y_m"])
    assert z_south == pytest.approx(0.0, abs=1e-12)
    assert z_north * 1000 == pytest.approx(-23.8125, abs=1e-6)
    assert fig["fall"] == pytest.approx(0.0125)
    assert fig["run_mm"] == pytest.approx(1905.0, abs=1e-4)
    assert fig["drop_mm"] == pytest.approx(23.8125, abs=1e-4)
    assert screed_at_zero_mm() == pytest.approx(79.0)
    assert fig["screed_drain_mm"] == pytest.approx(55.1875, abs=1e-4)
    assert fig["below_minimum"] is False
    assert EPS_TOP_MM == 60 and EPS_BOTTOM_MM == 40
    assert fig["head_mm"] == pytest.approx(2390.0, abs=1e-4)
    assert fig["course_mm"] == pytest.approx(1194.0, abs=1e-6)
    assert fig["shower_width_mm"] == pytest.approx(1112.0, abs=0.05)
    assert fig["north_y_m"] == pytest.approx(FACE)
    glass = next(row for row in info["doc"]["furniture"] if row["id"] == "GLASS-1.07")
    tile_face = EAST - TILE
    glass_east = glass["Origin"][0] + glass["Width"]
    assert glass_east == pytest.approx(SHOWER)
    assert (tile_face - glass_east) * 1000 == pytest.approx(1112.0, abs=0.05)
    drain = next(row for row in info["doc"]["wasteTerminals"] if row["id"] == "DRAIN-1.07")
    assert drain["Origin"][0] == pytest.approx(glass_east)
    assert drain["Origin"][1] == pytest.approx(FACE + TILE)
    assert drain["Width"] == pytest.approx(1.112, abs=1e-6)
    # Shower floor is two full 555 mm modules. The old 86.5 and 430 mm cuts are gone.
    shower_widths = sorted(
        round((max(p[0] for p in ring) - min(p[0] for p in ring)) * 1000, 1) for ring in info["shower_tiles"]
    )
    assert shower_widths
    assert set(shower_widths) == {555.0}


def test_door_joint_two_tiles_and_plaster_above_the_shelf():
    info = layout()
    grout = unary_union([Polygon(ring) for ring in info["level_grout"]])
    assert grout.intersects(Polygon([(11.999, 10.2), (12.001, 10.2), (12.001, 10.4), (11.999, 10.4)]))
    # The origin butt is opened into a 2 mm joint, so those two tiles lose 1 mm each.
    full = []
    for ring in info["level_tiles"]:
        xs = [point[0] for point in ring]
        ys = [point[1] for point in ring]
        width = (max(xs) - min(xs)) * 1000
        assert width < 597.0
        if min(ys) < 11.0 < max(ys) and 10.80 < min(xs) < 12.0 and width > 590:
            full.append(round(min(xs), 3))
    assert sorted(full) == pytest.approx([10.807, 11.404], abs=0.002)
    assert grout.intersects(Polygon([(11.402, 10.2), (11.404, 10.2), (11.404, 10.4), (11.402, 10.4)]))
    walls = wall_tiles_mm(info)
    # Door edges leave a piece under 100 mm on each jamb. The east one was
    # already there. The west one was hidden inside the origin butt slab.
    small = small_pieces(info)
    assert len(small) == 4
    assert all(line.startswith("CLAD-S") for line in small)
    assert sum("96.0 mm" in line for line in small) == 2
    assert sum("97.0 mm" in line for line in small) == 2
    assert "CLAD-N" not in walls
    pw_tops = [tile["top_mm"] for tile in walls["CLAD-PW"]]
    assert pw_tops
    assert max(pw_tops) == pytest.approx(1194.0, abs=0.05)
    for wall_id in ("CLAD-E", "CLAD-S", "CLAD-W", "CLAD-NS"):
        assert max(tile["top_mm"] for tile in walls[wall_id]) == pytest.approx(2390.0, abs=0.05)
    for wall_id, tiles in walls.items():
        assert max(tile["width_mm"] for tile in tiles) < 700.0
    east_widths = sorted({round(tile["width_mm"], 1) for tile in walls["CLAD-E"]})
    assert 555.0 not in east_widths
    ns_widths = sorted({round(tile["width_mm"], 1) for tile in walls["CLAD-NS"]})
    assert 555.0 in ns_widths
    assert 549.0 not in ns_widths
    niche = next(wall for wall in info["walls"] if wall["id"] == "CLAD-NS")
    polygon = unary_union([Polygon(tile["polygon"]) for tile in niche["result"]["tiles"]])
    # Low niche from the glass end: sill 1194, 280 high, along 0–400 mm.
    assert not polygon.covers(Point(0.20, 1.30))
    assert not polygon.covers(Point(0.38, 1.30))
    assert polygon.covers(Point(0.50, 1.30))
    assert polygon.covers(Point(0.70, 1.30))
    assert polygon.covers(Point(0.20, 0.50))
    assert polygon.covers(Point(0.20, 1.70))


def test_fixtures_shelf_glass_and_the_plates():
    doc = load_document()
    tub = next(row for row in doc["sanitaryTerminals"] if row["id"] == "BATH-1.07")
    prewall = next(row for row in doc["furniture"] if row["id"] == "PW-VANITY")
    shelf = next(row for row in doc["furniture"] if row["id"] == "SHELF-W")
    glass = next(row for row in doc["furniture"] if row["id"] == "GLASS-1.07")
    shower = next(row for row in doc["furniture"] if row["id"] == "PW-SHOWER")
    cabinet = next(row for row in doc["furniture"] if row["id"] == "VANITY-CAB")
    top = next(row for row in doc["furniture"] if row["id"] == "VANITY-TOP")
    assert tub["Origin"][0] == pytest.approx(9.905)
    assert tub["Width"] == pytest.approx(0.9)
    assert tub["Depth"] == pytest.approx(1.9)
    assert shelf["Width"] == pytest.approx(0.18)
    assert shelf["Height"] == pytest.approx(tub["Height"])
    assert prewall["Height"] == pytest.approx(1.194)
    assert prewall["Depth"] + 0.0085 == pytest.approx(0.195)
    assert glass["Height"] == pytest.approx(2.45)
    assert glass["Depth"] == pytest.approx(1.155)
    assert shower["Height"] - glass["Height"] == pytest.approx(0.05)
    assert shower["Depth"] == pytest.approx(prewall["Depth"])
    assert shower["Origin"][1] == pytest.approx(prewall["Origin"][1])
    face = prewall["Origin"][1] - TILE
    assert face == pytest.approx(FACE)
    glass_north = glass["Origin"][1] + glass["Depth"]
    assert (face - glass_north) * 1000 == pytest.approx(50.0, abs=0.05)
    assert cabinet["ObjectType"] == "Cabinet"
    assert cabinet["Width"] == pytest.approx(1.6)
    assert top["ObjectType"] == "Countertop"
    basins = [row for row in doc["sanitaryTerminals"] if row["PredefinedType"] == "WASHHANDBASIN"]
    assert len(basins) == 2
    basin_centres = sorted(row["Origin"][0] + row["Width"] / 2 for row in basins)
    assert basin_centres == pytest.approx([11.478, 12.523], abs=0.001)
    cabinet_centre = cabinet["Origin"][0] + cabinet["Width"] / 2
    # The vanity is centred on the door joint, not on the mixer midpoint.
    # The joints one tile either side are 597 mm and 598 mm from that joint.
    assert cabinet_centre == pytest.approx(DOOR, abs=0.0001)
    shower_mixer = next(row for row in doc["furniture"] if row["id"] == "MIX-SH")
    mixer_centre = shower_mixer["Origin"][0] + shower_mixer["Width"] / 2
    joint = SHOWER + 0.555 + 0.001
    assert mixer_centre == pytest.approx(joint, abs=0.001)
    shower_pipes = sorted(
        row["Origin"][0] + row["Width"] / 2
        for row in doc["furniture"]
        if row["id"].startswith("PIPE-SH")
    )
    assert (shower_pipes[1] - shower_pipes[0]) * 1000 == pytest.approx(150.0, abs=0.05)
    assert sum(shower_pipes) / 2 == pytest.approx(joint, abs=0.001)
    basin_mixers = [row for row in doc["furniture"] if row["id"].startswith("MIX-B")]
    assert len(basin_mixers) == 2
    mixer_centres = sorted(row["Origin"][0] + row["Width"] / 2 for row in basin_mixers)
    assert mixer_centres == pytest.approx(basin_centres, abs=0.001)
    assert (mixer_centres[1] - mixer_centres[0]) * 1000 == pytest.approx(1045.0, abs=0.05)
    outer = sorted(
        row["Origin"][0] + row["Width"] / 2
        for row in doc["furniture"]
        if row["id"] in ("PIPE-B-W-L", "PIPE-B-E-R")
    )
    assert outer == pytest.approx([11.403, 12.598], abs=0.001)
    assert (outer[1] - outer[0]) * 1000 == pytest.approx(1195.0, abs=0.05)
    for row in basin_mixers:
        assert row["Elevation"] > 0.85
    solids = parts()
    labels = {solid.label for solid in solids}
    assert {LABEL_FLOOR, LABEL_WALL, LABEL_DRAIN, LABEL_FIXTURE, LABEL_PREWALL, LABEL_SCREEN, LABEL_PROFILE, LABEL_VANITY} <= labels
    assert sum(1 for solid in solids if solid.label == LABEL_VANITY) == 1
    assert sum(1 for solid in solids if solid.label == LABEL_DRAIN) == 2
    drawn = scenes()
    assert [scene["id"] for scene in drawn] == [
        "bath107-plan",
        "bath107-elev-n",
        "bath107-elev-e",
        "bath107-elev-s",
        "bath107-elev-w",
    ]
    assert all(scene["annotationColor"] == ANNOTATION_BLUE for scene in drawn)
    assert DOOR == 12.0
