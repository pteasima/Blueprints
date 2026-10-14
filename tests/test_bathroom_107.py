"""Bathroom 1.07: level floor, 1.25% shower fall, linear drain, EPS left at 80+50."""

from pathlib import Path
import sys

import pytest
from shapely.geometry import Polygon
from shapely.ops import unary_union

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bathroom_107 import (  # noqa: E402
    ANNOTATION_BLUE,
    EPS_BOTTOM_MM,
    EPS_TOP_MM,
    LABEL_DRAIN,
    LABEL_FLOOR,
    LABEL_GROUT,
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
from yaml_ifc.from_ifc import _lift_tiles  # noqa: E402
from yaml_ifc.supported import PSET_NAME  # noqa: E402
from yaml_ifc.to_ifc import build_ifc  # noqa: E402


EAST = 14.225
SOUTH = 10.15
NORTH = 12.25
WEST = 9.725
GLASS = 13.072
PITCH_MM = 598.0


def _area(rings) -> float:
    return float(unary_union([Polygon(ring) for ring in rings]).area)


def test_room_faces_and_the_unthinned_build_up():
    doc = load_document()
    assert SOURCE_PATH.is_file()
    space = doc["spaces"][0]
    assert space["id"] == "SP-1.07"
    assert space["Name"] == "Koupelna"
    assert space["LongName"] == "1.07"
    level = next(row for row in doc["slabs"] if row["id"] == "SLAB-LEVEL")
    shower = next(row for row in doc["slabs"] if row["id"] == "SLAB-SHOWER")
    assert level["Plane"]["Gradient"] == [0, 0]
    assert shower["Plane"]["Origin"] == [GLASS, NORTH]
    assert shower["Plane"]["Elevation"] == 0
    assert shower["Plane"]["Gradient"] == [0, 0.0125]
    props = shower["PropertySets"][0]["Properties"]
    assert props["EpsTopMm"] == 80
    assert props["EpsBottomMm"] == 50
    assert props["ScreedAtZeroMm"] == 49
    assert props["ScreedAtDrainMm"] == 22.75
    assert props["Fall"] == 0.0125
    assert props["DrainDropMm"] == 26.25
    assert props["MinimumScreedMm"] == 45
    assert props["ScreedBelowMinimum"] is True
    assert "not applied" in props["EpsProposal"]
    assert "20" not in str(props["EpsBottomMm"])
    level_props = level["PropertySets"][0]["Properties"]
    assert level_props["EpsBottomMm"] == 50
    assert level_props["BuildUpMm"] == 250
    room = _area([level["Footprint"], shower["Footprint"]])
    assert room == pytest.approx(9.415, abs=0.001)
    drain = next(row for row in doc["wasteTerminals"] if row["id"] == "DRAIN-1.07")
    assert drain["ObjectType"] == "LinearDrain"
    assert drain["Origin"] == [GLASS, SOUTH]
    assert drain["Width"] == pytest.approx(1.153, abs=1e-9)
    assert drain["Depth"] == pytest.approx(0.08)
    assert "Height" not in drain
    for row in doc["coverings"]:
        tile = row.get("TileLayout") or {}
        if tile.get("Axis"):
            assert tile["CourseZMin"] == pytest.approx(-0.02625)
    assert validate(doc) == []


def test_course_datum_round_trips():
    model = build_ifc(load_document())
    wall = next(item for item in model.by_type("IfcCovering") if item.Name == "East wall tiles")
    book = {}
    for rel in wall.IsDefinedBy:
        pset = rel.RelatingPropertyDefinition
        if getattr(pset, "Name", None) != PSET_NAME:
            continue
        for prop in pset.HasProperties:
            book[prop.Name] = prop.NominalValue.wrappedValue
    assert book["CourseZMin"] == pytest.approx(-0.02625)
    restored = {}
    _lift_tiles(restored, book)
    assert restored["TileLayout"]["CourseZMin"] == pytest.approx(-0.02625)


def test_fall_is_the_geometry_and_the_screed_stays_thin():
    info = layout()
    fig = figures(info)
    plane = info["shower_plane"]
    z_north = plane_elevation(plane, EAST, NORTH)
    z_south = plane_elevation(plane, EAST, SOUTH)
    assert z_north == pytest.approx(0.0, abs=1e-12)
    assert (z_north - z_south) * 1000 == pytest.approx(26.25, abs=1e-6)
    assert fig["fall"] == pytest.approx(0.0125, abs=1e-12)
    assert fig["run_mm"] == pytest.approx(2100.0, abs=1e-6)
    assert fig["drop_mm"] == pytest.approx(26.25, abs=1e-6)
    assert fig["drop_mm"] / fig["run_mm"] == pytest.approx(0.0125, abs=1e-9)
    assert screed_at_zero_mm() == pytest.approx(49.0)
    assert fig["screed_zero_mm"] == pytest.approx(49.0)
    assert fig["screed_drain_mm"] == pytest.approx(22.75, abs=1e-6)
    assert fig["below_minimum"] is True
    assert fig["screed_if_eps_omitted_mm"] == pytest.approx(72.75, abs=1e-6)
    assert EPS_TOP_MM == 80 and EPS_BOTTOM_MM == 50
    assert info["z_min"] * 1000 == pytest.approx(-26.25, abs=1e-6)
    assert fig["head_mm"] == pytest.approx(2365.75, abs=1e-6)
    assert fig["course_mm"] == pytest.approx(1169.75, abs=1e-6)
    assert fig["sill_gap_mm"] == pytest.approx(580.25, abs=1e-6)
    assert fig["shower_width_mm"] == pytest.approx(1153.0, abs=1e-6)
    assert info["joints_level"].x * 1000 == pytest.approx(2.0, abs=1e-6)
    assert info["joints_level"].y * 1000 == pytest.approx(2.0, abs=1e-6)
    assert info["joints_shower"].y * 1000 == pytest.approx(2.0467, abs=1e-3)
    assert info["joints_shower"].plan_pitch_y * 1000 == pytest.approx(PITCH_MM)
    assert info["joints_level"].plan_pitch_x * 1000 == pytest.approx(PITCH_MM)


def test_tiles_hang_from_the_east_and_share_the_drain_course():
    info = layout()
    east = []
    for ring in info["shower_tiles"]:
        xs = [point[0] for point in ring]
        width = (max(xs) - min(xs)) * 1000
        if abs(max(xs) - EAST) < 1e-6:
            east.append(width)
    assert east
    assert all(width == pytest.approx(555.0, abs=0.05) for width in east)
    assert _area(info["level_tiles"]) + _area(info["shower_tiles"]) < 9.415
    overlap = unary_union([Polygon(ring) for ring in info["level_tiles"]]).intersection(
        unary_union([Polygon(ring) for ring in info["shower_tiles"]])
    )
    assert overlap.area == pytest.approx(0.0, abs=1e-8)
    walls = wall_tiles_mm(info)
    assert small_pieces(info) == []
    assert {wall["id"] for wall in info["walls"]} >= {
        "CLAD-N",
        "CLAD-E",
        "CLAD-S",
        "CLAD-SS",
        "CLAD-W",
        "CLAD-WP",
        "CLAD-CH",
    }
    # The 2 mm bottom joint sits under the tile, so a full 1194 mm blank
    # starts 2 mm above the drain (−26.250 mm) and ends on the course joint.
    south = [tile for tile in walls["CLAD-SS"] if tile["course"] == 0]
    assert len(south) == 1
    assert south[0]["height_mm"] == pytest.approx(1194.0, abs=0.05)
    assert south[0]["bottom_mm"] == pytest.approx(-24.25, abs=0.05)
    assert south[0]["top_mm"] == pytest.approx(1169.75, abs=0.05)
    assert walls["CLAD-N"]
    assert any(abs(tile["width_mm"] - 555.0) < 0.05 for tile in walls["CLAD-N"])
    pier = [tile["width_mm"] for tile in walls["CLAD-WP"]]
    cheek = [tile["width_mm"] for tile in walls["CLAD-CH"]]
    assert pier and all(width == pytest.approx(200.0, abs=0.05) for width in pier)
    assert cheek and all(width == pytest.approx(175.0, abs=0.05) for width in cheek)


def test_solids_and_the_five_plates():
    solids = parts()
    labels = {solid.label for solid in solids}
    assert labels == {LABEL_FLOOR, LABEL_WALL, LABEL_GROUT, LABEL_DRAIN}
    assert sum(1 for solid in solids if solid.label == LABEL_DRAIN) == 1
    assert all(getattr(solid, "room_id", None) == "1.07" for solid in solids)
    floor_z = [
        solid.bounding_box().min.Z
        for solid in solids
        if solid.label == LABEL_FLOOR
    ]
    assert min(floor_z) == pytest.approx(-33.724, abs=0.05)
    assert max(solid.bounding_box().max.Z for solid in solids if solid.label == LABEL_FLOOR) == pytest.approx(
        0.0, abs=0.05
    )
    drawn = scenes()
    assert [scene["id"] for scene in drawn] == [
        "bath107-plan",
        "bath107-elev-n",
        "bath107-elev-e",
        "bath107-elev-s",
        "bath107-elev-w",
    ]
    assert all(scene["annotationColor"] == ANNOTATION_BLUE for scene in drawn)
    assert ANNOTATION_BLUE == "#1d4ed8"
