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
    WINDOW_TRAVEL,
    build,
    furnishing_records,
    scenes,
    window_panels,
    window_slide_sign,
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

    # OP27/OP29 have had a height since Petr's 2026-11-12 O11 reading.
    without_height = {item["id"] for item in openings if item.get("Height") is None}
    assert without_height == set()
    assert meta["openings_skipped"] == []
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
    motions = {item["id"]: item for item in meta["door_motions"] if item["kind"] != "drawer"}
    assert set(motions) == {door["id"] for door in doc["doors"]}
    # Sliding: the bedroom wardrobe pocket (wider than a single leaf, no
    # OperationType) and the three tall living-room pocket doors.
    assert {item_id for item_id, item in motions.items() if item["kind"] == "sliding"} == {
        "D-OP03",
        "D-OP24",
        "D-OP25",
        "D-OP33",
    }
    # The garage doors D5/D6 are sectional overhead doors (Petr 2026-11-12).
    assert {item_id for item_id, item in motions.items() if item["kind"] == "sectional"} == {
        "D-OP49",
        "D-OP50",
    }
    # Bedroom OP03, the double pocket into 1.10 Šatna: two 0.9 m halves that
    # slide apart into W-018 (docs/electrical/rooms/1.11-geometry.md).
    op03 = motions["D-OP03"]
    assert [p["span"] for p in op03["panels"]] == [[0.0, 0.5], [0.5, 1.0]]
    assert op03["panels"][0]["slide"] == pytest.approx([-0.9, 0.0, 0.0], abs=1e-6)
    assert op03["panels"][1]["slide"] == pytest.approx([0.9, 0.0, 0.0], abs=1e-6)
    for item in motions.values():
        if item["kind"] != "hinged":
            continue
        assert item["sign"] in (1, -1)
        assert item["axis"] == [0.0, 1.0, 0.0]
        assert item["hinge"][1] == pytest.approx(item["center"][1], abs=1e-6)
        span = math.hypot(item["hinge"][0] - item["center"][0], item["hinge"][2] - item["center"][2])
        assert 0.25 < span < 0.7
    committed = json.loads((ROOT / "docs" / "models" / "ground_floor.doors.json").read_text())
    assert committed == meta["door_motions"]
    windows_json = json.loads((ROOT / "docs" / "models" / "ground_floor.windows.json").read_text())
    assert windows_json == meta["window_motions"]
    assert {item["id"] for item in meta["window_motions"]} == {item["id"] for item in doc["windows"]}
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
    # No OperationType: bi-parting, two halves sliding apart over the jambs.
    # The leaf runs along the wall from start (CAD y=1215) to end (1985).
    assert wide["start"] == pytest.approx([5.0, 1.0425, -1.215], abs=1e-4)
    assert wide["end"] == pytest.approx([5.0, 1.0425, -1.985], abs=1e-4)
    assert [p["span"] for p in wide["panels"]] == [[0.0, 0.5], [0.5, 1.0]]
    assert wide["panels"][0]["slide"] == pytest.approx([0.0, 0.0, 0.385], abs=1e-4)
    assert wide["panels"][1]["slide"] == pytest.approx([0.0, 0.0, -0.385], abs=1e-4)
    left = _door_motion(part, {**filler, "OverallWidth": 5.15, "OperationType": "SLIDING_TO_LEFT"})
    assert [p["span"] for p in left["panels"]] == [[0.0, 1.0]]
    assert left["panels"][0]["slide"] == pytest.approx([0.0, 0.0, 0.77], abs=1e-4)
    right = _door_motion(part, {**filler, "OverallWidth": 5.15, "OperationType": "SLIDING_TO_RIGHT"})
    assert right["panels"][0]["slide"] == pytest.approx([0.0, 0.0, -0.77], abs=1e-4)


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


# Which panes open, per window (docs/design/ground-floor.md, Windows).
# Panels run along the host wall axis; W-002 and W-001 run west to east.
SLIDE_THEN_FIXED = ["SLIDINGHORIZONTAL", "FIXEDCASEMENT"]
WINDOW_PANES = {
    # Bedroom 1.11 west, wide (O3) and narrow (O4): fixed glass, Petr 2026-11-12.
    "WIN-OP01": ["FIXEDCASEMENT"],
    "WIN-OP02": ["FIXEDCASEMENT"],
    # Large south windows (O2): west sash slides east over the fixed east pane.
    "WIN-OP05": SLIDE_THEN_FIXED,  # bedroom 1.11
    "WIN-OP08": SLIDE_THEN_FIXED,  # 1.12
    "WIN-OP13": SLIDE_THEN_FIXED,  # 1.13
    "WIN-OP16": SLIDE_THEN_FIXED,  # 1.14
    # Office 1.15 (O1): mirrored, the east sash slides west.
    "WIN-OP21": ["FIXEDCASEMENT", "SLIDINGHORIZONTAL"],
    # Garzonka 1.23 (O10): as the bedroom.
    "WIN-OP35": SLIDE_THEN_FIXED,
    # Batch 2, Petr 2026-11-12: every small high window is fixed glass.
    "WIN-OP04": ["FIXEDCASEMENT"],  # O5, 1.10
    "WIN-OP07": ["FIXEDCASEMENT"],  # O5, 1.09
    "WIN-OP12": ["FIXEDCASEMENT"],  # O6, 1.08
    "WIN-OP15": ["FIXEDCASEMENT", "FIXEDCASEMENT"],  # O7, 1.07, two panes
    "WIN-OP42": ["FIXEDCASEMENT", "FIXEDCASEMENT"],  # O8, 1.17, two panes
    "WIN-OP30": ["FIXEDCASEMENT"],  # 1.23 east
    "WIN-OP31": ["FIXEDCASEMENT"],  # 1.20 east
    "WIN-OP45": ["FIXEDCASEMENT"],  # O9, garage
    "WIN-OP46": ["FIXEDCASEMENT"],
    "WIN-OP47": ["FIXEDCASEMENT"],
    "WIN-OP48": ["FIXEDCASEMENT"],
    # Entrance OP39b (drawn fixed) and the tall hall window OP26 (Petr 2026-10-05).
    "WIN-OP39b": ["FIXEDCASEMENT"],
    "WIN-OP26": ["FIXEDCASEMENT"],
    # Living-room O11: fixed middle, outer sashes slide toward it.
    "WIN-OP27": ["SLIDINGHORIZONTAL"],
    "WIN-OP28": ["FIXEDCASEMENT"],
    "WIN-OP29": ["SLIDINGHORIZONTAL"],
}


def _windows():
    return {item["id"]: item for item in _document()["windows"]}


def test_window_panes_per_room():
    windows = _windows()
    for window_id, expected in WINDOW_PANES.items():
        panels = window_panels(windows[window_id])
        assert [p["operation"] for p in panels] == expected, window_id
        n = len(expected)
        assert [p["span"] for p in panels] == [
            [pytest.approx(i / n), pytest.approx((i + 1) / n)] for i in range(n)
        ]
        partition = "SINGLE_PANEL" if n == 1 else "DOUBLE_PANEL_VERTICAL"
        assert windows[window_id]["PartitioningType"] == partition
    # Every window now has panel data.
    assert set(windows) == set(WINDOW_PANES)


def test_window_slide_direction_rules():
    fixed = {"operation": "FIXEDCASEMENT"}
    slide = {"operation": "SLIDINGHORIZONTAL"}
    assert window_slide_sign([fixed], 0) == 0
    assert window_slide_sign([slide, fixed], 0) == 1
    assert window_slide_sign([slide, fixed], 1) == 0
    assert window_slide_sign([fixed, slide], 1) == -1
    assert window_slide_sign([{"operation": "NOTDEFINED"}], 0) == 1
    assert window_slide_sign([{"operation": "BOTTOMHUNG"}], 0) == 0
    with pytest.raises(ValueError):
        window_slide_sign([fixed, slide, fixed], 1)
    with pytest.raises(ValueError):
        window_panels({"id": "X", "PartitioningType": "DOUBLE_PANEL_VERTICAL"})
    with pytest.raises(ValueError):
        window_panels(
            {
                "id": "X",
                "PartitioningType": "DOUBLE_PANEL_VERTICAL",
                "PropertySets": [
                    {"Name": "Pset_BlueprintsWindow", "Properties": {"PanelOperations": "FIXEDCASEMENT"}}
                ],
            }
        )


def test_committed_window_records():
    records = {
        item["id"]: item
        for item in json.loads((ROOT / "docs" / "models" / "ground_floor.windows.json").read_text())
    }
    for window_id, expected in WINDOW_PANES.items():
        record = records[window_id]
        moving = [p for p in record["panels"] if any(abs(v) > 1e-9 for v in p["slide"])]
        assert record["operable"] == bool(moving), window_id
        assert [p["operation"] for p in record["panels"]] == expected
    for window_id in ("WIN-OP01", "WIN-OP02"):
        assert records[window_id]["operable"] is False
    for window_id, expected in WINDOW_PANES.items():
        if len(expected) != 2 or "SLIDINGHORIZONTAL" not in expected:
            continue
        record = records[window_id]
        sash_i = expected.index("SLIDINGHORIZONTAL")
        sash, fixed = record["panels"][sash_i], record["panels"][1 - sash_i]
        assert fixed["slide"] == [0.0, 0.0, 0.0]
        # glTF X is plan x (east). The sash slides toward the fixed pane by
        # WINDOW_TRAVEL of its own width, along the wall.
        width = sash["max"][0] - sash["min"][0]
        toward = 1 if fixed["center"][0] > sash["center"][0] else -1
        assert sash["slide"] == pytest.approx([toward * width * WINDOW_TRAVEL, 0.0, 0.0], abs=1e-5)
        assert (toward > 0) == (window_id != "WIN-OP21"), window_id
        # The sash runs in its own track, indoors (north, glTF −Z) of the fixed pane.
        assert sash["max"][2] < fixed["min"][2] + 1e-9


def test_living_room_o11_sashes_meet_in_the_middle():
    """OP27/OP29 slide toward OP28 on the indoor face and meet at its centre."""
    records = {item["id"]: item for item in build()[1]["window_motions"]}
    centre = records["WIN-OP28"]["panels"][0]["center"][0]
    assert records["WIN-OP28"]["operable"] is False
    left, right = records["WIN-OP27"]["panels"][0], records["WIN-OP29"]["panels"][0]
    assert left["max"][0] + left["slide"][0] == pytest.approx(centre, abs=1e-4)
    assert right["min"][0] + right["slide"][0] == pytest.approx(centre, abs=1e-4)
    # glTF −Z is north, indoors: both sashes run in front of the fixed pane.
    fixed = records["WIN-OP28"]["panels"][0]
    assert left["max"][2] < fixed["min"][2] and right["max"][2] < fixed["min"][2]


def _door_records():
    return {item["id"]: item for item in build()[1]["door_motions"] if item["kind"] != "drawer"}


def test_garage_doors_are_sectional():
    from ground_floor import SECTIONAL_BEND_MM, SECTIONAL_SECTIONS

    records = _door_records()
    for door_id in ("D-OP49", "D-OP50"):
        r = records[door_id]
        assert r["kind"] == "sectional"
        assert r["sections"] == SECTIONAL_SECTIONS
        assert r["bend"] == pytest.approx(SECTIONAL_BEND_MM / 1000.0)
        # W-067 is the garage's east wall at plan x 44.875 (faces 44.70–45.05);
        # the leaf hangs inside, west of the inner face, and its track runs west.
        assert r["inward"] == pytest.approx([-1.0, 0.0, 0.0])
        assert r["center"][0] < 44.70
        assert r["bottom"][1] == pytest.approx(0.0, abs=1e-6)
        # Head 2.25 m less the leaf gap; the track's level run stays under the
        # 2.75 m garage ceiling.
        assert r["top"][1] == pytest.approx(2.235, abs=1e-3)
        assert r["top"][1] + r["bend"] < 2.75


def test_living_room_pocket_doors_slide_into_the_wall():
    records = _door_records()
    # (id, slides north): leaves parked per the DWG plan, on the living-room face.
    for door_id, north in (("D-OP24", True), ("D-OP25", False), ("D-OP33", True)):
        r = records[door_id]
        assert r["kind"] == "sliding"
        assert len(r["panels"]) == 1
        width = abs(r["end"][2] - r["start"][2])
        slide = r["panels"][0]["slide"]
        # Its full width along the wall (glTF −Z is north).
        assert abs(slide[2]) == pytest.approx(width, abs=1e-6)
        assert (slide[2] < 0) == north, door_id


# Hinge side and swing, Petr 2026-11-12 (docs/OpeningsSpec.md). Plan
# coordinates; the hinge is the jamb it hangs on, the swing the room it
# opens into, given as the plan direction from the wall.
HINGES = {
    "D-OP06": ("east", "north"),  # bedroom → en-suite 1.09
    "D-OP09": ("south", "west"),  # bedroom → hallway 1.05, into the bedroom
    "D-OP10": ("east", "south"),  # 1.05 → 1.12
    "D-OP14": ("east", "south"),  # 1.05 → 1.13
    "D-OP18": ("east", "south"),  # 1.05 → 1.14
    "D-OP22": ("east", "south"),  # 1.05 → 1.15
    "D-OP19": ("west", "north"),  # WC 1.06, the reference, unchanged
    "D-OP11": ("west", "north"),  # laundry 1.08, as the WC
    "D-OP17": ("west", "north"),  # bathroom 1.07, as the WC
    "D-OP20": ("south", "east"),  # pantry exterior door, inward
    "D-OP23": ("east", "north"),  # 1.05 → 1.04
    # Petr's 11:43 sketch of the entrance area (docs/OpeningsSpec.md):
    "D-OP37": ("south", "east"),  # 1.01 → WC 1.19, inward
    "D-OP38": ("south", "east"),  # 1.01 → 1.17 garage hallway
    "D-OP34": ("east", "south"),  # 1.01 → bathroom 1.20, inward
    "D-OP40": ("east", "north"),  # 1.22 → 1.21
    "D-OP32": ("south", "east"),  # terrace door, glazed, opens into 1.01 (sketch)
}


def _plan(v):
    """glTF (x, y_up, −y) → plan (x, y)."""
    return v[0], -v[2]


def test_hinge_sides_and_swings():
    import math as _m

    records = _door_records()
    for door_id, (side, swing) in HINGES.items():
        r = records[door_id]
        assert r["kind"] == "hinged", door_id
        hx, hy = _plan(r["hinge"])
        cx, cy = _plan(r["center"])
        jamb = {"east": hx > cx, "west": hx < cx, "north": hy > cy, "south": hy < cy}
        assert jamb[side], (door_id, side)
        # Open: rotate the centre 90° about +Y (glTF) by sign, as the viewer does.
        a = r["sign"] * _m.pi / 2
        dx, dz = r["center"][0] - r["hinge"][0], r["center"][2] - r["hinge"][2]
        ox = r["hinge"][0] + _m.cos(a) * dx + _m.sin(a) * dz
        oz = r["hinge"][2] - _m.sin(a) * dx + _m.cos(a) * dz
        px, py = ox, -oz
        went = {"east": px > hx + 0.2, "west": px < hx - 0.2, "north": py > hy + 0.2, "south": py < hy - 0.2}
        assert went[swing], (door_id, swing, (px, py), (hx, hy))


def test_hallway_doors_hang_flush_like_the_wc():
    """OP11, OP17 and OP19 share the hallway face line (W-017, y 9.475).

    The leaf's south face, not its midplane, sits on that line, so the
    centre is 20 mm north of it (half of DOOR_LEAF_MM).
    """
    from ground_floor import DOOR_LEAF_MM

    records = _door_records()
    wc = records["D-OP19"]["center"][2]
    for door_id in ("D-OP11", "D-OP17"):
        assert records[door_id]["center"][2] == pytest.approx(wc, abs=1e-6), door_id
    # glTF −Z is plan Y; the hallway face of each leaf is at y 9.475.
    half = DOOR_LEAF_MM / 1000.0 / 2.0
    face_y = -wc - half
    assert face_y == pytest.approx(9.475, abs=1e-6)


def test_flush_leaf_offset_math():
    from ground_floor import DOOR_LEAF_MM, flush_leaf_offset_m

    leaf = DOOR_LEAF_MM / 1000.0
    # 250 mm wall, flush to +Y: midplane 105 mm toward +Y.
    assert flush_leaf_offset_m(1, 0.25, leaf) == pytest.approx(0.105)
    assert flush_leaf_offset_m(-1, 0.25, leaf) == pytest.approx(-0.105)
    # 125 mm wall, flush to −Y: midplane 42.5 mm toward −Y.
    assert flush_leaf_offset_m(-1, 0.125, leaf) == pytest.approx(-0.0425)
    # Axis is the face (W-017): leaf sits on the room side, midplane 20 mm off the axis.
    assert flush_leaf_offset_m(-1, 0.05, leaf, axis_is_face=True) == pytest.approx(0.020)
    assert flush_leaf_offset_m(1, 0.05, leaf, axis_is_face=True) == pytest.approx(-0.020)


# Interior hinged doors that follow the reverse-door rule, and the local-Y
# face they sit flush with. docs/OpeningsSpec.md, Reverse interior doors.
REVERSE_FLUSH = {
    "D-OP06": -1,
    "D-OP09": -1,
    "D-OP10": 1,
    "D-OP14": 1,
    "D-OP18": 1,
    "D-OP22": 1,
    "D-OP19": -1,
    "D-OP11": -1,  # flush plane is the W-017 line, via LeafOffset
    "D-OP17": -1,
    "D-OP23": -1,
    "D-OP34": 1,
    "D-OP37": 1,
    "D-OP38": 1,
    "D-OP40": -1,
}
# Exterior / non-reverse hinged leaves stay in the wall centre plane.
CENTRED_HINGED = ("D-OP20", "D-OP32", "D-OP39a", "D-OP41")


def _plan_xy(v):
    return v[0], -v[2]


def test_reverse_interior_doors_sit_flush():
    """Each reverse leaf's circulation face is coplanar with the flush plane."""
    from ground_floor import (
        DOOR_LEAF_MM,
        _axis,
        _door_field,
        _thickness_m,
        flush_leaf_offset_m,
        load_document,
    )

    doc = load_document()
    doors = {item["id"]: item for item in doc["doors"]}
    openings = {item["id"]: item for item in doc["openings"]}
    walls = {item["id"]: item for item in doc["walls"]}
    records = _door_records()
    half = DOOR_LEAF_MM / 1000.0 / 2.0

    for door_id, flush in REVERSE_FLUSH.items():
        door = doors[door_id]
        opening = openings[door["FillsOpening"]]
        wall = walls[opening["VoidsElement"]]
        (sx, sy), (ex, ey), length = _axis(wall)
        ux, uy = (ex - sx) / length, (ey - sy) / length
        lx, ly = -uy, ux  # local +Y
        mid = opening["AlongAxis"] + opening["Width"] / 2.0
        ax, ay = sx + ux * mid, sy + uy * mid
        cx, cy = _plan_xy(records[door_id]["center"])
        off = (cx - ax) * lx + (cy - ay) * ly
        thick, missing = _thickness_m(wall)
        expected = _door_field(door, "LeafOffset")
        if expected is None:
            expected = flush_leaf_offset_m(
                flush, thick, DOOR_LEAF_MM / 1000.0, axis_is_face=missing
            )
        else:
            expected = float(expected)
        assert off == pytest.approx(expected, abs=1e-6), door_id
        # The flush-side face of the 40 mm leaf is on the intended plane.
        face = off + flush * half
        if expected is not None and _door_field(door, "LeafOffset") is not None:
            # OP11/OP17: the plane is y 9.475, W-017's axis, along local −Y.
            assert ay + face * ly + 0 * lx == pytest.approx(9.475, abs=1e-6), door_id
        elif missing:
            assert face == pytest.approx(0.0, abs=1e-6), door_id
        else:
            assert face == pytest.approx(flush * thick / 2.0, abs=1e-6), door_id

    for door_id in CENTRED_HINGED:
        door = doors[door_id]
        opening = openings[door["FillsOpening"]]
        wall = walls[opening["VoidsElement"]]
        (sx, sy), (ex, ey), length = _axis(wall)
        ux, uy = (ex - sx) / length, (ey - sy) / length
        lx, ly = -uy, ux
        mid = opening["AlongAxis"] + opening["Width"] / 2.0
        ax, ay = sx + ux * mid, sy + uy * mid
        cx, cy = _plan_xy(records[door_id]["center"])
        off = (cx - ax) * lx + (cy - ay) * ly
        assert off == pytest.approx(0.0, abs=1e-6), door_id


def test_head_heights_match_the_window_head():
    """Main door OP39a and garage-hallway door OP38: head 2.50 m = OP39b's head."""
    doc = _document()
    openings = {item["id"]: item for item in doc["openings"]}
    doors = {item["id"]: item for item in doc["doors"]}
    window_head = openings["OP39b"]["SillHeight"] + openings["OP39b"]["Height"]
    assert window_head == pytest.approx(2.5)
    for oid in ("OP38", "OP39a"):
        assert openings[oid]["SillHeight"] + openings[oid]["Height"] == pytest.approx(window_head)
        assert doors[f"D-{oid}"]["OverallHeight"] == pytest.approx(window_head)


def test_terrace_door_is_a_glazed_hinged_leaf():
    """OP32 onto the terrace: hinged, glass in a frame (Petr 2026-11-12)."""
    import struct

    from ground_floor import is_glazed_door

    doc = _document()
    doors = {item["id"]: item for item in doc["doors"]}
    glazed = [d for d, item in doors.items() if is_glazed_door(item)]
    assert glazed == ["D-OP32"]
    assert _door_records()["D-OP32"]["kind"] == "hinged"
    data = (ROOT / "docs" / "models" / "ground_floor.glb").read_bytes()
    n, _ = struct.unpack_from("<II", data, 12)
    nodes = json.loads(data[20 : 20 + n])["nodes"]
    host = [x for x in nodes if x.get("name") == "door__D-OP32__"]
    assert len(host) == 1
    kids = sorted(nodes[i].get("name") for i in host[0].get("children", []))
    assert kids == ["door", "glazing__D-OP32__"]
