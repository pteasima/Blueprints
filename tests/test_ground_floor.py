"""Ground-floor walls: the yaml-ifc sample builds, and the voids that have a height are cut."""

from pathlib import Path
import json
import math
import sys

import pytest
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from bathroom_120 import drain_bottom_z_mm  # noqa: E402
from ground_floor import (  # noqa: E402
    CORNER_VIEWS,
    DEFAULT_WALL_HEIGHT_M,
    LABEL_GLAZING,
    LABEL_MASONRY,
    MISSING_THICKNESS_M,
    OPENING_VIEW_WALL,
    PLAN_CUT_Z_M,
    PLAN_HALF_M,
    SOURCE_COMMIT,
    SOURCE_PATH,
    build,
    furnishing_records,
    scenes,
)


def _document():
    return yaml.safe_load(SOURCE_PATH.read_text(encoding="utf-8"))


def test_source_records_yaml_ifc_origin():
    note = (ROOT / "inputs" / "ground_floor" / "README.md").read_text(encoding="utf-8")
    assert SOURCE_COMMIT in note
    assert "yaml-ifc" in note
    assert SOURCE_PATH.is_file()


def test_ground_floor_builds_and_cuts_openings():
    doc = _document()
    walls = doc["walls"]
    openings = doc["openings"]
    assert len(walls) == 67
    assert len(openings) == 50
    assert len(doc["doors"]) == 24
    assert len(doc["windows"]) == 24
    assert sum(1 for wall in walls if wall.get("Thickness") is None) == 1
    assert all(wall.get("Height") is None for wall in walls)
    connections = doc["connections"]
    tees = [row for row in connections if row["RelatingConnectionType"] == "ATPATH"]
    assert len(connections) == 55
    assert len(tees) == 32
    assert len(connections) - len(tees) == 23

    shape, meta = build()
    assert shape is not None
    derived = meta["derived"]
    assert derived["walls"] == 67
    assert derived["openings"] == 50
    assert derived["wall_height_m"] == DEFAULT_WALL_HEIGHT_M
    assert derived["w017_thickness_m"] == MISSING_THICKNESS_M
    assert meta["thickness_filled"] == ["W-017"]
    assert meta["footprints_omitted"] == ["W-017"]
    assert derived["footprints"] == 66

    without_height = {item["id"] for item in openings if item.get("Height") is None}
    assert without_height == {"OP27", "OP29"}
    assert {item["id"] for item in meta["openings_skipped"]} == without_height
    assert meta["openings_failed"] == []
    assert derived["openings_cut"] == 50 - len(without_height)
    assert set(meta["openings_cut"]) == {item["id"] for item in openings} - without_height

    expected = meta["expected_opening_volume_m3"]
    assert expected > 1.0
    assert meta["removed_volume_m3"] == pytest.approx(expected, rel=1e-6)

    bb = shape.bounding_box()
    # The 1.07 wall-drain body hangs 52 mm below height 0. The 1.20 grate is
    # the other low solid. The house takes whichever is lower.
    assert bb.min.Z == pytest.approx(min(drain_bottom_z_mm(), -52.0), abs=0.5)
    assert bb.min.Z < -40.0
    assert bb.max.Z == pytest.approx(DEFAULT_WALL_HEIGHT_M * 1000.0, abs=1.0)
    assert derived["bathroom_tiles"] > 20
    assert derived["bathroom_head_mm"] == pytest.approx(2348.511, abs=0.001)
    assert derived["bathroom_107_tiles"] > 40
    assert derived["bathroom_107_head_mm"] == pytest.approx(2230.0, abs=0.001)
    assert derived["bathroom_107_drop_mm"] == pytest.approx(23.8125, abs=0.001)
    assert derived["bathroom_107_screed_drain_mm"] == pytest.approx(55.1875, abs=0.001)
    assert bb.max.X - bb.min.X > 40_000
    assert bb.max.Y - bb.min.Y > 14_000

    labels = {child.label for child in shape.children}
    assert {"masonry", "glazing", "door"} <= labels
    motions = {item["id"]: item for item in meta["door_motions"]}
    from ground_floor import is_sliding_window

    door_ids = {door["id"] for door in doc["doors"]}
    assert door_ids <= set(motions)
    cut = set(meta["openings_cut"])
    sliding_windows = {
        window["id"]
        for window in doc["windows"]
        if is_sliding_window(window) and window["FillsOpening"] in cut
    }
    assert {item_id for item_id in motions if str(item_id).startswith("WIN-")} == sliding_windows
    assert sliding_windows
    fixed_windows = {window["id"] for window in doc["windows"] if not is_sliding_window(window)}
    assert fixed_windows.isdisjoint(motions)
    # Wider than a single leaf: one slab, not a hinged swing. The file has
    # no hinge side, so every narrower leaf uses the start jamb and +Y.
    assert {
        item_id
        for item_id, item in motions.items()
        if item["kind"] == "sliding" and item_id in door_ids
    } == {"D-OP03", "D-OP49", "D-OP50"}
    for item in motions.values():
        if item["kind"] == "sliding":
            assert "hinge" not in item
            distance = math.hypot(*item["slide"])
            assert 0.2 < distance < 6.0
            continue
        assert item["sign"] == 1
        assert item["axis"] == [0.0, 1.0, 0.0]
        assert item["hinge"][1] == pytest.approx(item["center"][1], abs=1e-6)
        span = math.hypot(item["hinge"][0] - item["center"][0], item["hinge"][2] - item["center"][2])
        assert 0.25 < span < 0.7
    committed = json.loads((ROOT / "docs" / "models" / "ground_floor.doors.json").read_text())
    assert committed == meta["door_motions"]
    fixtures = json.loads((ROOT / "docs" / "models" / "ground_floor.fixtures.json").read_text())
    assert fixtures == meta["fixture_motions"]
    roles: dict[str, int] = {}
    for item in fixtures:
        roles[item["role"]] = roles.get(item["role"], 0) + 1
        assert len(item["center"]) == 3
    # Boxed devices only. Cable 3 is three segments; the mmWave has no solid.
    assert roles == {
        "power": 4,
        "data": 2,
        "sensor": 2,
        "switch": 5,
        "blind": 3,
        "light": 8,
    }
    assert sum(1 for item in fixtures if item["id"] == "C3-S") == 3
    assert "BED-1.11" not in {item["id"] for item in fixtures}
    assert "C9-R" not in {item["id"] for item in fixtures}
    assert derived["furnishings"] == len(furnishing_records())
    host = next(wall for wall in walls if wall["id"] == OPENING_VIEW_WALL)
    hosted = [item["id"] for item in openings if item["VoidsElement"] == host["id"]]
    assert "OP39a" in hosted and "OP39b" in hosted


def _wall_solids(shape):
    grouped: dict[str, list] = {}
    for child in shape.children:
        wall_id = getattr(child, "wall_id", None)
        if wall_id and child.label in {LABEL_MASONRY, LABEL_GLAZING}:
            grouped.setdefault(wall_id, []).append(child)
    return grouped


def _intersection_mm3(parts_a, parts_b) -> float:
    total = 0.0
    for left in parts_a:
        for right in parts_b:
            common = left.intersect(right)
            if common is None:
                continue
            total += sum(float(solid.volume) for solid in common)
    return total


def test_hinge_rotation_sign_follows_side_and_swing():
    from ground_floor import hinge_rotation_sign

    assert hinge_rotation_sign("start", 1) == 1
    assert hinge_rotation_sign("end", 1) == -1
    assert hinge_rotation_sign("start", -1) == -1
    assert hinge_rotation_sign("end", -1) == 1


def test_start_hinge_is_the_leaf_edge_on_a_turned_wall():
    """Pivot is the mid-thickness edge, not the panel centre. Wall runs +Y."""
    from ground_floor import LABEL_DOOR, _door_motion, _leaf, _place, _solids

    filler = {"id": "D-TEST", "OverallWidth": 0.8, "OverallHeight": 2.1}
    leaf = _leaf("door", 200.0, 800.0, 0.0, 2100.0, 200.0, filler)
    part = _place(_solids(leaf)[0], (5000.0, 1000.0, 0.0), 90.0, LABEL_DOOR)
    motion = _door_motion(part, filler)
    # The leaf is inset 15 mm from the opening, so the start edge is at
    # CAD y=1215, not the jamb at 1200. Mid-height of the 2085 mm leaf is
    # 1042.5. glTF is (x, z, −y) in metres.
    assert motion["kind"] == "hinged"
    assert motion["sign"] == 1
    assert motion["hinge"] == pytest.approx([5.0, 1.0425, -1.215], abs=1e-4)
    assert motion["center"][0] == pytest.approx(5.0, abs=1e-4)
    assert motion["center"][2] == pytest.approx(-1.6, abs=1e-4)

    end = _door_motion(part, {**filler, "HingeSide": "R", "Swing": 1})
    assert end["sign"] == -1
    assert end["hinge"] == pytest.approx([5.0, 1.0425, -1.985], abs=1e-4)

    wide = _door_motion(part, {**filler, "OverallWidth": 5.15})
    assert wide["kind"] == "sliding"
    assert "hinge" not in wide
    # The solid is still the 0.8 m leaf (inset by the gap). Slide that far.
    assert math.hypot(*wide["slide"]) == pytest.approx(0.77, abs=0.02)


def test_sliding_window_follows_width_unless_the_operation_says_otherwise():
    from ground_floor import (
        LABEL_GLAZING,
        _leaf,
        _place,
        _solids,
        _window_motion,
        is_sliding_window,
    )

    assert is_sliding_window({"OverallWidth": 2.4}) is True
    assert is_sliding_window({"OverallWidth": 0.9}) is False
    assert is_sliding_window({"OverallWidth": 3.0, "OperationType": "FIXED"}) is False
    assert is_sliding_window({"OverallWidth": 0.6, "PartitioningType": "SLIDING_TO_LEFT"}) is True
    filler = {"id": "WIN-TEST", "OverallWidth": 2.4, "OverallHeight": 2.5}
    leaf = _leaf("window", 0.0, 2400.0, 0.0, 2500.0, 300.0, filler)
    part = _place(_solids(leaf)[0], (1000.0, 2000.0, 0.0), 0.0, LABEL_GLAZING)
    motion = _window_motion(part, filler)
    assert motion["kind"] == "sliding"
    assert motion["id"] == "WIN-TEST"
    assert "hinge" not in motion
    distance = math.hypot(*motion["slide"])
    assert 2.0 < distance < 2.4
    assert motion["slide"][0] < 0
    assert abs(motion["slide"][0]) == pytest.approx(distance, abs=1e-6)
    assert _window_motion(part, {"id": "WIN-N", "OverallWidth": 0.9, "OverallHeight": 2.5}) is None


def test_butt_corners_do_not_overlap():
    """Adjoining wall solids share a face and essentially no volume."""
    doc = _document()
    shape, _meta = build()
    solids = _wall_solids(shape)
    seen = {"L": None, "T": None}
    checked = []
    for row in doc["connections"]:
        pair = (row["RelatingElement"], row["RelatedElement"])
        if pair[0] not in solids or pair[1] not in solids:
            continue
        kind = "T" if row["RelatingConnectionType"] == "ATPATH" else "L"
        volume = _intersection_mm3(solids[pair[0]], solids[pair[1]])
        assert volume == pytest.approx(0.0, abs=1.0), (kind, pair, volume)
        checked.append(kind)
        seen[kind] = pair
    assert seen["L"] is not None and seen["T"] is not None
    assert checked.count("L") >= 1 and checked.count("T") >= 1
    by_end = {
        (row["RelatedElement"], row["RelatedConnectionType"]): row for row in doc["connections"]
    }
    for spec in CORNER_VIEWS:
        row = by_end[(spec["related"], spec["end"])]
        kind = "T" if row["RelatingConnectionType"] == "ATPATH" else "L"
        assert spec["id"].startswith(f"{kind}-")


def test_plan_scenes_keep_the_perspective_views():
    specs = {item["id"]: item for item in scenes()}
    assert {"overview", "opening", "posts", "bathroom-floor", "bathroom", "bathroom-door"} <= set(specs)
    for spec in CORNER_VIEWS:
        assert spec["id"] in specs
        assert "projection" not in specs[spec["id"]]
        plan = specs[f"plan-{spec['id']}"]
        assert plan["projection"] == "ortho"
        assert plan["cuts"][0]["normal"] == [0.0, -1.0, 0.0]
        assert plan["cuts"][0]["anchor"][2] == pytest.approx(PLAN_CUT_Z_M * 1000.0)
        assert plan["camera"]["orthoFit"] == [PLAN_HALF_M, PLAN_HALF_M]
        assert plan["camera"]["up"] == [0.0, 0.0, -1.0]
    overview = specs["plan"]
    assert overview["projection"] == "ortho"
    assert overview["cuts"][0]["anchor"][2] == PLAN_CUT_Z_M * 1000.0
    half_x, half_y = overview["camera"]["orthoFit"]
    assert half_x > 20
    assert half_y > 8
