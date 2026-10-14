"""Bathroom 1.07: fall to the north wall drain, EPS left at 60+60."""

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
GLASS = 13.072


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
    props = shower["PropertySets"][0]["Properties"]
    assert props["EpsTopMm"] == 60 and props["EpsBottomMm"] == 60
    assert props["ScreedAtZeroMm"] == 59
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
    assert walls == {"CLAD-N", "CLAD-NS", "CLAD-E", "CLAD-S", "CLAD-W"}
    assert "CLAD-WP" not in walls and "CLAD-CH" not in walls
    house = load_yaml(ROOT / "inputs" / "ground_floor" / "ground-floor.yaml")
    chase = next(row for row in house["walls"] if row["id"] == "W-040")
    # East face of the 300 mm chase is the bathroom face x=9.725.
    assert chase["Axis"]["Start"][0] + chase["Thickness"] / 2 == pytest.approx(WEST)
    assert validate(doc) == []


def test_fall_runs_from_the_south_to_the_north_drain():
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
    assert fig["drop_mm"] / fig["run_mm"] == pytest.approx(0.0125, abs=1e-9)
    assert screed_at_zero_mm() == pytest.approx(59.0)
    assert fig["screed_drain_mm"] == pytest.approx(34.625, abs=1e-4)
    assert fig["below_minimum"] is True
    assert fig["screed_if_eps_omitted_mm"] == pytest.approx(94.625, abs=1e-3)
    assert EPS_TOP_MM == 60 and EPS_BOTTOM_MM == 60
    assert fig["head_mm"] == pytest.approx(2390.0, abs=1e-4)
    assert fig["course_mm"] == pytest.approx(1194.0, abs=1e-6)
    assert fig["sill_gap_mm"] == pytest.approx(556.0, abs=1e-4)
    assert fig["shower_width_mm"] == pytest.approx(1153.0, abs=1e-4)
    drain = next(row for row in info["doc"]["wasteTerminals"] if row["id"] == "DRAIN-1.07")
    assert drain["ObjectType"] == "WallDrain"
    assert drain["Origin"][1] == pytest.approx(fig["north_y_m"])
    assert drain["Width"] == pytest.approx(1.153, abs=1e-6)
    catalog = drain["PropertySets"][0]["Properties"]
    assert catalog["CatalogOverallLengthMm"] == 1140
    assert catalog["InstallHeightMm"] == 52


def test_shower_floor_is_cut_600_by_555_and_walls_start_at_zero():
    info = layout()
    east = []
    depths = []
    for ring in info["shower_tiles"]:
        xs = [point[0] for point in ring]
        ys = [point[1] for point in ring]
        width = (max(xs) - min(xs)) * 1000
        depth = (max(ys) - min(ys)) * 1000
        depths.append(depth)
        if abs(max(xs) - EAST) < 1e-6:
            east.append(width)
    assert east
    assert all(width == pytest.approx(555.0, abs=0.05) for width in east)
    assert any(depth == pytest.approx(599.95, abs=0.05) for depth in depths)
    assert any(depth == pytest.approx(144.0, abs=0.2) for depth in depths)
    overlap = unary_union([Polygon(ring) for ring in info["level_tiles"]]).intersection(
        unary_union([Polygon(ring) for ring in info["shower_tiles"]])
    )
    assert overlap.area == pytest.approx(0.0, abs=1e-8)
    walls = wall_tiles_mm(info)
    assert small_pieces(info) == []
    for wall_id in ("CLAD-N", "CLAD-E", "CLAD-S", "CLAD-W", "CLAD-NS"):
        bottoms = [tile["bottom_mm"] for tile in walls[wall_id] if tile["course"] == 0]
        assert bottoms
        assert min(bottoms) == pytest.approx(0.0, abs=0.05)
    niche = next(wall for wall in info["walls"] if wall["id"] == "CLAD-NS")
    polygon = Polygon(niche["result"]["tiles"][0]["polygon"])
    # Centred opening: sill 800 mm, clear of the tile.
    assert not polygon.covers(Point(0.55, 1.0))
    assert polygon.covers(Point(0.55, 0.4))


def test_tub_fits_against_the_prewall_and_the_plates_stay_five():
    doc = load_document()
    tub = next(row for row in doc["sanitaryTerminals"] if row["id"] == "BATH-1.07")
    prewall = next(row for row in doc["furniture"] if row["id"] == "PW-VANITY")
    assert tub["Depth"] == pytest.approx(1.9)
    assert tub["Width"] == pytest.approx(0.9)
    assert tub["Height"] == pytest.approx(0.45)
    assert prewall["Depth"] == pytest.approx(0.195)
    assert prewall["Depth"] < 0.2
    gap = NORTH - (tub["Origin"][1] + tub["Depth"]) - prewall["Depth"]
    assert gap == pytest.approx(0.005, abs=1e-6)
    solids = parts()
    labels = {solid.label for solid in solids}
    assert {LABEL_FLOOR, LABEL_WALL, LABEL_DRAIN, LABEL_FIXTURE, LABEL_PREWALL, LABEL_SCREEN, LABEL_PROFILE} <= labels
    assert sum(1 for solid in solids if solid.label == LABEL_FIXTURE) == 3
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
