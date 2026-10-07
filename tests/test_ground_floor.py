"""Ground-floor walls: the yaml-ifc sample builds, and the voids that have a height are cut."""

from pathlib import Path
import sys

import pytest
import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

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
    assert bb.min.Z == pytest.approx(0.0, abs=1e-6)
    assert bb.max.Z == pytest.approx(DEFAULT_WALL_HEIGHT_M * 1000.0, abs=1.0)
    assert bb.max.X - bb.min.X > 40_000
    assert bb.max.Y - bb.min.Y > 14_000

    labels = {child.label for child in shape.children}
    assert {"masonry", "glazing", "door"} <= labels
    assert derived["furnishings"] == 0
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
    assert {"overview", "opening", "posts"} <= set(specs)
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
