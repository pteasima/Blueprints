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
GLASS = 13.197
DOOR = 12.0


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
    assert shower["Plane"]["Origin"] == [GLASS, SOUTH]
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
    assert walls == {"CLAD-N", "CLAD-PW", "CLAD-NS", "CLAD-E", "CLAD-S", "CLAD-W"}
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
    assert z_north * 1000 == pytest.approx(-24.375, abs=1e-6)
    assert fig["fall"] == pytest.approx(0.0125)
    assert fig["run_mm"] == pytest.approx(1950.0, abs=1e-4)
    assert fig["drop_mm"] == pytest.approx(24.375, abs=1e-4)
    assert screed_at_zero_mm() == pytest.approx(79.0)
    assert fig["screed_drain_mm"] == pytest.approx(54.625, abs=1e-4)
    assert fig["below_minimum"] is False
    assert EPS_TOP_MM == 60 and EPS_BOTTOM_MM == 40
    assert fig["head_mm"] == pytest.approx(2390.0, abs=1e-4)
    assert fig["course_mm"] == pytest.approx(1194.0, abs=1e-6)
    assert fig["shower_width_mm"] == pytest.approx(1028.0, abs=0.05)
    assert fig["east_cut_mm"] == pytest.approx(430.0, abs=0.05)
    drain = next(row for row in info["doc"]["wasteTerminals"] if row["id"] == "DRAIN-1.07")
    assert drain["Origin"][1] == pytest.approx(fig["north_y_m"])
    assert drain["Width"] == pytest.approx(1.028, abs=1e-6)


def test_door_joint_two_tiles_and_the_north_wall_stops_at_the_sill():
    info = layout()
    grout = unary_union([Polygon(ring) for ring in info["level_grout"]])
    assert grout.intersects(Polygon([(11.999, 10.2), (12.001, 10.2), (12.001, 10.4), (11.999, 10.4)]))
    full = []
    for ring in info["level_tiles"]:
        xs = [point[0] for point in ring]
        ys = [point[1] for point in ring]
        width = (max(xs) - min(xs)) * 1000
        if min(xs) >= 10.806 and max(xs) <= 12.0 and abs(width - 596.0) < 0.2:
            if min(ys) < 11.0 < max(ys):
                full.append(round(min(xs), 3))
    assert sorted(full) == pytest.approx([10.807, 11.403], abs=0.001)
    walls = wall_tiles_mm(info)
    # The door edge at x=12.50 leaves a 97 mm piece before the next module.
    # The joint stays on the door centre, so this piece is reported, not hidden.
    small = small_pieces(info)
    assert len(small) == 1
    assert small[0].startswith("CLAD-S course 0: 97.0 mm")
    north_tops = [tile["top_mm"] for tile in walls["CLAD-N"]]
    assert north_tops
    assert max(north_tops) == pytest.approx(1750.0, abs=0.05)
    assert min(tile["bottom_mm"] for tile in walls["CLAD-N"]) > 1190.0
    pw_tops = [tile["top_mm"] for tile in walls["CLAD-PW"]]
    assert pw_tops
    assert max(pw_tops) == pytest.approx(1194.0, abs=0.05)
    for wall_id in ("CLAD-E", "CLAD-S", "CLAD-W", "CLAD-NS"):
        assert max(tile["top_mm"] for tile in walls[wall_id]) == pytest.approx(2390.0, abs=0.05)
    east_widths = sorted({round(tile["width_mm"], 1) for tile in walls["CLAD-E"]})
    assert 555.0 in east_widths
    niche = next(wall for wall in info["walls"] if wall["id"] == "CLAD-NS")
    polygon = unary_union([Polygon(tile["polygon"]) for tile in niche["result"]["tiles"]])
    assert not polygon.covers(Point(0.5, 1.4))
    assert polygon.covers(Point(0.5, 0.5))
    assert polygon.covers(Point(0.5, 2.0))


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
    assert shower["Height"] - glass["Height"] == pytest.approx(0.05)
    assert cabinet["ObjectType"] == "Cabinet"
    assert top["ObjectType"] == "Countertop"
    basins = [row for row in doc["sanitaryTerminals"] if row["PredefinedType"] == "WASHHANDBASIN"]
    assert len(basins) == 2
    centres = sorted(row["Origin"][1] + row["Depth"] / 2 for row in (
        next(row for row in doc["furniture"] if row["id"] == "MIX-S"),
        next(row for row in doc["furniture"] if row["id"] == "MIX-N"),
    ))
    assert (centres[1] - centres[0]) * 1000 == pytest.approx(105.0, abs=0.05)
    pipes = sorted(row["Origin"][1] + row["Depth"] / 2 for row in doc["furniture"] if row["ObjectType"] == "Pipe")
    assert (pipes[1] - pipes[0]) * 1000 == pytest.approx(120.0, abs=0.05)
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
