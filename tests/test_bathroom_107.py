"""Bathroom 1.07: fall and screed logic as relational checks."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bathroom_107 import (  # noqa: E402
    load_document,
    screed_at_zero_mm,
    validate,
    figures,
)
from yaml_ifc import plane_elevation  # noqa: E402


def test_level_slab_is_flat_and_the_shower_falls_to_the_drain(bathroom_107_layout):
    """The level floor is flat; the shower plane falls toward the drain by fall × run."""
    info = bathroom_107_layout
    fig = figures(info)
    level = next(row for row in info["doc"]["slabs"] if row["id"] == "SLAB-LEVEL")
    shower = next(row for row in info["doc"]["slabs"] if row["id"] == "SLAB-SHOWER")
    assert level["Plane"]["Gradient"] == [0, 0]
    fall = abs(float(shower["Plane"]["Gradient"][1]))
    assert fall > 0
    assert fig["fall"] == pytest.approx(fall)
    assert fig["drop_mm"] == pytest.approx(fig["fall"] * fig["run_mm"], rel=1e-6)
    assert fig["run_mm"] > 0
    # The south entry is the high side; the drain, on the north, is lower.
    assert fig["z_south_mm"] > fig["z_north_mm"]
    plane = info["shower_plane"]
    fp = shower["Footprint"]
    south = min(point[1] for point in fp)
    north = max(point[1] for point in fp)
    east = max(point[0] for point in fp)
    assert plane_elevation(plane, east, south) > plane_elevation(plane, east, north)
    assert validate(info["doc"]) == []


def test_screed_at_the_drain_is_screed_at_zero_minus_the_drop(bathroom_107_layout):
    """Screed thickness at the drain equals the zero-line screed minus the fall drop, and stays above the minimum."""
    info = bathroom_107_layout
    fig = figures(info)
    assert fig["screed_drain_mm"] == pytest.approx(fig["screed_zero_mm"] - fig["drop_mm"], rel=1e-6)
    assert fig["screed_zero_mm"] == pytest.approx(screed_at_zero_mm())
    shower = next(row for row in info["doc"]["slabs"] if row["id"] == "SLAB-SHOWER")
    props = shower["PropertySets"][0]["Properties"]
    minimum = float(props["MinimumScreedMm"])
    assert fig["screed_drain_mm"] >= minimum - 1e-6
    assert fig["below_minimum"] is False


def test_shower_floor_tiles_are_full_equal_modules(bathroom_107_layout):
    """The shower floor is tiled in full equal modules, with no leftover sliver at the drain."""
    info = bathroom_107_layout
    widths = {
        round((max(p[0] for p in ring) - min(p[0] for p in ring)) * 1000, 1)
        for ring in info["shower_tiles"]
    }
    assert widths
    assert len(widths) == 1


def test_fixtures_line_up_with_each_other():
    """Fixture relationships: shower matches the glass head, vanity and mixers are centred on their neighbours."""
    doc = load_document()
    by_id = {row["id"]: row for key in ("furniture", "sanitaryTerminals") for row in doc.get(key) or []}
    glass, shower, prewall = by_id["GLASS-1.07"], by_id["PW-SHOWER"], by_id["PW-VANITY"]
    assert shower["Height"] == pytest.approx(glass["Height"])
    assert shower["Depth"] == pytest.approx(prewall["Depth"])
    assert shower["Origin"][1] == pytest.approx(prewall["Origin"][1])
    # The shower prewall and the vanity prewall meet.
    assert prewall["Origin"][0] + prewall["Width"] == pytest.approx(shower["Origin"][0])
    cabinet = by_id["VANITY-CAB"]
    basins = [row for row in doc["sanitaryTerminals"] if row["PredefinedType"] == "WASHHANDBASIN"]
    assert len(basins) == 2
    basin_centres = sorted(row["Origin"][0] + row["Width"] / 2 for row in basins)
    mixers = [row for row in doc["furniture"] if row["id"].startswith("MIX-B")]
    mixer_centres = sorted(row["Origin"][0] + row["Width"] / 2 for row in mixers)
    assert mixer_centres == pytest.approx(basin_centres, abs=1e-6)
    # The two basins sit symmetrically on the cabinet.
    cabinet_centre = cabinet["Origin"][0] + cabinet["Width"] / 2
    assert sum(basin_centres) / 2 == pytest.approx(cabinet_centre, abs=1e-3)
    assert validate(doc) == []
