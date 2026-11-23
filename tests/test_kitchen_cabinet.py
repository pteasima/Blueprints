"""Kitchen monoblock runs: shared dividers, drawers, worktop, IFC groups.

Facts and sources: docs/design/kitchen-cabinets.md. Not run while the test
workflow is paused (AGENTS.md); written against the 2026-11-12 layout.
"""

import copy
import math
from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

import kitchen_cabinet as kc  # noqa: E402
import kitchen_ifc  # noqa: E402
from ground_floor import build, load_furnishings  # noqa: E402
from yaml_ifc.to_ifc import build_ifc, validation_errors  # noqa: E402


def _runs(doc=None):
    return {r.id: r for r in kc.runs(doc or load_furnishings())}


def test_drawer_and_pullout_bays():
    # KitchenPlan.jpg: three-bullet notes on the island 600 / 500 / 600 are
    # three drawers each; the west run's "suplik uklid", "kos / kompost"
    # and "trideny odpad" are pull-outs (docs/design/kitchen-cabinets.md).
    doc = load_furnishings()
    ids = [e["id"] for e in doc["systemFurniture"] if kc.has_drawers(e)]
    # Since 2026-11-19 (Petr: "Add the rest of the drawers, hinged doors,
    # etc. ... on a best effort basis"): the tall run's lower bands, the
    # island's 300 pull-out and east row, the dining base and the living
    # counter too. 2026-11-20: the east row is four full-height drawers and
    # the living counter is dead space (Petr).
    assert ids == ["SF-T2", "SF-T3", "SF-T4", "SF-I600a", "SF-I500b", "SF-I600b", "SF-I300",
                   "SF-E600a", "SF-E600b", "SF-E600c", "SF-E700", "SF-A250", "SF-B800", "SF-C850", "SF-DN"]


def test_zone_spec_grammar():
    bay = {"id": "X", "PropertySets": [{"Name": kc.PSET_FRONTS, "Properties": {
        "Layout": "door * hinge=R shelves=4 racks=4 | front 0.81"}}]}
    assert kc.zone_spec(bay) == [("door", "*", {"hinge": "R", "shelves": "4", "racks": "4"}),
                                 ("front", "0.81", {})]
    with pytest.raises(ValueError, match="unknown band kind"):
        kc.zone_spec({"id": "X", "PropertySets": [{"Name": kc.PSET_FRONTS, "Properties": {"Layout": "drawr *"}}]})


def test_island_drawer_bays_follow_the_notes():
    run = _runs()["KR-ISL"]
    for bay_id, contents in (
        ("SF-I500b", ["koření", "oleje, octy, mouky, cukry, dochucovadla", "hrnce"]),
        ("SF-I600b", ["příbory", "vařečky, stěrky, naběračky", "pánve"]),
    ):
        drawers = [run.part(f"{bay_id}-D{i}").drawer for i in (1, 2, 3)]
        assert [d.content for d in drawers] == contents
    # Petr, 2026-11-13: the top drawers are MAXIMERA's lowest (band 100, box
    # 78); the bottom drawer takes the rest. Under the hob the top band stays
    # 200 (a 100 band leaves 61 mm to the hob limit, the low box is 78).
    fronts = {b: [round(run.part(f"{b}-D{i}").drawer.front[5] - run.part(f"{b}-D{i}").drawer.front[4])
                  for i in (1, 2, 3)] for b in ("SF-I600a", "SF-I500b", "SF-I600b")}
    assert fronts == {"SF-I600a": [97, 97, 607], "SF-I500b": [97, 97, 607], "SF-I600b": [197, 97, 507]}
    # Best effort, 2026-11-19: the sink bay a door, the 300 a pull-out.
    # Petr, 2026-11-20: "east side of kitchen island are 4 large full height drawers".
    assert run.part("SF-I500a-DOOR1").door.hinge == "L"
    assert run.part("SF-I300-D1").role == "PullOut" and len(run.part("SF-I300-D1").drawer.items) == 3
    assert not [p for p in run.parts if p.role == "Front"]


def test_island_east_row_drawers_are_on_the_gridfinity_grid():
    run = _runs()["KR-ISL"]
    # Petr, 2026-11-20: "east side of kitchen island are 4 large full height
    # drawers": one drawer per bay, one front at the full 807.
    grids = {}
    for bay_id in ("SF-E600a", "SF-E600b", "SF-E600c", "SF-E700"):
        assert not any(p.id == f"{bay_id}-D2" for p in run.parts)
        # Petr, 2026-11-20 d: "I can't see the merivobox drawer on kitchen
        # island east": the F box plus two inner drawers, M (coupled) and K.
        i1, i2 = run.part(f"{bay_id}-D1-I1"), run.part(f"{bay_id}-D1-I2")
        assert (i1.role, i2.role) == ("InnerDrawer", "InnerDrawer")
        # Blum MERIVOBOX (2026-11-23): profile 15 under each box, M 91, K 129.
        assert (i1.drawer.box[4], i1.drawer.box[5]) == (pytest.approx(771.0), pytest.approx(862.0))
        assert (i2.drawer.box[4], i2.drawer.box[5]) == (pytest.approx(483.5), pytest.approx(612.5))
        assert i1.props["Latched"] and not i2.props.get("Latched")
        # Petr, 2026-11-23 (t851u): the north three exactly 13 columns with 2
        # mm play (626 / 617 / 617), SF-E700 the rest (640, 14 over).
        assert i1.drawer.grid == i2.drawer.grid == (13, 10)
        d = run.part(f"{bay_id}-D1").drawer
        assert round(d.front[5] - d.front[4]) == 807
        # Petr, 2026-11-22 (t795u): "the bottom main one doesnt need
        # gridfinity (remove the gridfinity plate too)"; the grid is the inner
        # drawers' (same Blum inside as the main box).
        assert d.grid is None
        n, m = i1.drawer.grid
        assert tuple(i1.drawer.inside[:2]) == pytest.approx(tuple(d.inside[:2]))
        # Petr, 2026-11-20 c: "East island cabinets are 694,604,604,583
        # wide, they should be the same width. Three of these should fit
        # gridfinity, the fourth can be slightly differnt. Also, give them
        # Merivobox drawers." Four x 625; MERIVOBOX inside = clear - 51,
        # NL 550 - 26 - 16. The end bays (clear 598) are whole cells, the
        # middle ones (clear 607) 9 over. Petr, 2026-11-23 (t835u): east row
        # 530 deep, NL 500: inside depth 458 = 10 cells + 37.
        slack = 14.0 if bay_id == "SF-E700" else 0.0
        assert d.inside[0] == pytest.approx(n * 42.0 + 2.0 + slack) and d.inside[1] == pytest.approx(m * 42.0 + 2.0 + 36.0)
        part = run.part(f"{bay_id}-D1")
        assert part.props["System"] == "Blum MERIVOBOX" and part.props["NominalLength"] == pytest.approx(0.5)
        assert part.props["DrawerSide"] == "E" and i1.props["DrawerSide"] == "M" and i2.props["DrawerSide"] == "K"
        grids[bay_id] = i1.drawer.grid
    assert grids == {b: (13, 10) for b in ("SF-E600a", "SF-E600b", "SF-E600c", "SF-E700")}
    assert [run.bay(b).width for b in ("SF-E700", "SF-E600c", "SF-E600b", "SF-E600a")] == pytest.approx([626.0, 617.0, 617.0, 640.0])  # t883u: the north one off grid
    assert sum(b.width for b in run.bays if not b.front_low) == pytest.approx(2500.0)


def test_tall_doors_hinge_as_the_notes_say():
    runs = _runs()
    t1 = runs["KR-TALL-W"].part("SF-T1-DOOR1")
    t2 = runs["KR-TALL"].part("SF-T2-DOOR1")
    assert t1.door.hinge == "L" and t2.door.hinge == "R"
    assert round(t1.boxes[0][1] - t1.boxes[0][0]) == 597  # 600 grid door
    # The rest of the 750 is a filler on the hinge (wall) side.
    filler = runs["KR-TALL-W"].part("SF-T1-FILLER1").boxes[0]
    assert filler[1] <= t1.boxes[0][0]
    assert t1.door.hinge_a == pytest.approx(t1.boxes[0][0])
    # T2: door racks ("police na dverich") and the hinge on the T3 side.
    assert len(t2.boxes) == 1 + 4
    assert t2.door.hinge_a == pytest.approx(t2.boxes[0][1])
    shelves = [p for p in runs["KR-TALL"].parts if p.id.startswith("SF-T2-SH1-")]
    # t883u: four shelves again (the sealer moved to the island).
    assert len(shelves) == 4
    # t883u: T1 split into two doors; the lower band's shelves are SH2.
    t1_shelves = sorted(p.boxes[0][4] for p in runs["KR-TALL-W"].parts if p.id.startswith("SF-T1-SH2-"))
    # t887u: one placeholder shelf in the lower door's band (118-797).
    assert len(t1_shelves) == 1 and 118.0 < t1_shelves[0] < 797.0


def test_oven_column_niches_fit_miele():
    run = _runs()["KR-TALL"]
    oven = run.part("EA-DGC7465")
    micro = run.part("EA-M2230")
    assert oven.props["NicheClearHeight"] == pytest.approx(0.593)
    assert micro.props["NicheClearHeight"] == pytest.approx(0.356)
    for part in (oven, micro):
        assert part.props["NicheClearWidth"] == pytest.approx(0.564)
        assert part.role == "Appliance" and part.id in run.bay("SF-T3").members
    # The oven stands on the counter-line board; the microwave over it.
    # t869u: lowered for Zuzana; t870u: the niche starts at 800 (818, 928 before).
    assert oven.props["Elevation"] == pytest.approx(0.800)
    assert micro.props["Elevation"] > oven.props["Elevation"] + 0.59
    # Fascias do not touch the slab fronts above and below.
    front1 = run.part("SF-T3-DOOR1").boxes[0]
    assert front1[4] >= micro.boxes[0][5]


def test_niche_outside_the_makers_range_is_rejected():
    doc = copy.deepcopy(load_furnishings())
    bay = next(e for e in doc["systemFurniture"] if e["id"] == "SF-T3")
    for pset in bay["PropertySets"]:
        if pset["Name"] == kc.PSET_FRONTS:
            pset["Properties"]["Layout"] = "front * | niche 0.33 clear=0.564 | niche 0.593 clear=0.564 | front 0.81"
    with pytest.raises(ValueError, match="EA-M2230"):
        kc.runs(doc)


def test_disposers_and_taps_hang_on_their_sinks():
    runs = _runs()
    for run_id, bay_id, disposer, tap, sink in (
        ("KR-WEST", "SF-B800", "EA-EVO3-W", "SN-TAP-W", "SN-RS15"),
        ("KR-ISL", "SF-I500a", "EA-EVO3-I", "SN-TAP-I", "SN-RS1840"),
    ):
        run = runs[run_id]
        bay = run.bay(bay_id)
        assert disposer in bay.members and tap in bay.members and sink in bay.external
        box = run.part(disposer).boxes[0]
        assert box[5] - box[4] == pytest.approx(368.0)
        assert box[1] - box[0] == pytest.approx(145.0)
    # The west bins stop 10 under the disposer.
    west = runs["KR-WEST"]
    pull = west.part("SF-B800-D1").drawer
    # Since 2026-11-23 (t842u) the bins hang in a U frame round the disposer.
    assert pull.frame and len(pull.frame["bins"]) == 4  # two bins, rim + body each


def test_west_sink_sits_forward_on_teka_drain_and_official_m71():
    """Petr, 2026-11-22 (t819u): move the west Teka 60 mm toward the front,
    hang the disposer on the official drain, and use the official M71 sizes.
    HoleOffset is measured from the inner bowl back (it used to be applied
    from the rim, 20 mm too far back)."""
    runs = _runs()
    west = runs["KR-WEST"]
    bay = west.bay("SF-B800")
    sink_box = next(box for box, oid in bay.obstacles if oid == "SN-RS15")
    # Set back 21 on 2026-11-23 (Petr, t841u): the front Teka clip (hole 30
    # from the cut-out edge) and its plate clear the drawer front (inner
    # face c 18): cut-out edge c 63, 45 behind it (guess:).
    assert sink_box[2:4] == pytest.approx((41.0, 481.0))
    cut = next(v for v in west.part("KR-WEST-WORKTOP").voids if v.name == "SN-RS15")
    assert (cut.c0, cut.c1) == pytest.approx((63.0, 459.0))
    assert cut.c0 - 18.0 >= 45.0
    disp = west.part("EA-EVO3-W").boxes[0]
    assert (disp[2] + disp[3]) / 2 == pytest.approx(346.0)
    assert disp[2:4] == pytest.approx((273.5, 418.5))
    tap = west.part("SN-TAP-W")
    body, arm, nozzle = tap.boxes
    hole = (body[2] + body[3]) / 2
    assert hole == pytest.approx(531.0)
    # Cosentino ≥ 50 of stone between the cut-out and the Ø35 hole; Teka min 65
    # from the bowl to the hole.
    assert hole - 17.5 - cut.c1 == pytest.approx(54.5) and hole - (cut.c1 + 2.0) >= 65.0
    assert tap.props["HoleBehindBowl"] == pytest.approx(0.07)
    assert body[5] - body[4] == pytest.approx(445.0)
    # Reach from the hole centre to the spout tip (front of the arm).
    assert arm[2] == pytest.approx(hole - 235.0)
    assert nozzle[4] == pytest.approx(930.0 + 333.0)


def test_island_sink_sits_against_the_south_divider_on_teka_drain():
    """Petr, 2026-11-23 (t834u): move the Teka RS15 18.40 to the south
    divider (KitchenPlan.jpg), hang the disposer on the official drain, and
    leave ≥50 mm of stone between the cut-out and the Aquno M81 Ø35 hole.
    t841u: SF-I500a takes the rest of the row (470), and the sink keeps its
    cut-out 45 from the divider face so the Teka clips clear it (guess:)."""
    runs = _runs()
    isl = runs["KR-ISL"]
    bay = isl.bay("SF-I500a")
    assert bay.width == pytest.approx(470.0)
    sink = next(box for box, oid in bay.obstacles if oid == "SN-RS1840")
    div = isl.part("KR-ISL-DIV-SF-I500a-SF-I600a").boxes[0]
    # Along the run: a 0 at the north body end, the divider at a 461–479.
    # Rim a 218–438, inner bowl a 238–418 (20 mm rim, 2 mm cut-out inset).
    assert div[0:2] == pytest.approx((461.0, 479.0))
    assert sink[0:2] == pytest.approx((218.0, 438.0))
    cut = next(v for v in isl.part("KR-ISL-WORKTOP").voids if v.name == "SN-RS1840")
    assert (cut.a0, cut.a1) == pytest.approx((240.0, 416.0))
    assert div[0] - cut.a1 == pytest.approx(45.0) and sink[1] < div[0]
    # 258 mm from the worktop's north edge (a -20) to the inner bowl (a 238).
    assert cut.a0 - 2.0 - (-20.0) == pytest.approx(258.0)
    # Still centred on the bay depth, now 630 (Blum MERIVOBOX NL 600,
    # 2026-11-23, t835u): cut-out c 117–513.
    assert (cut.c0, cut.c1) == pytest.approx((117.0, 513.0))
    disp = isl.part("EA-EVO3-I").boxes[0]
    # Drain 115 mm from the inner bowl back (c 515): centre c 400.
    assert (disp[2] + disp[3]) / 2 == pytest.approx(400.0)
    assert disp[2:4] == pytest.approx((327.5, 472.5))
    # Along the run the disposer stays centred on the bowl (a 390).
    assert (disp[0] + disp[1]) / 2 == pytest.approx((sink[0] + sink[1]) / 2)
    tap = isl.part("SN-TAP-I")
    body = tap.boxes[0]
    hole = (body[2] + body[3]) / 2
    assert hole == pytest.approx(581.0)
    assert tap.props["HoleBehindBowl"] == pytest.approx(0.066)
    # Cosentino: stone between the cut-out and the Ø35 hole ≥ 50 mm.
    assert hole - 17.5 - cut.c1 == pytest.approx(50.5)


def test_wall_cabinets_have_hf_bifold_fronts_that_open_partly_folded():
    """Petr, 2026-11-13: "I want this hinge for the top cabinets", "top
    cabinets to start at 1560mm", "don't move anything up, make it shorter in
    height", and "they stay only partially folded, like my image" (HF top)."""
    runs = _runs()
    run = runs["KR-WEST-H"]
    for bay in run.bays:
        assert bay.z_base == pytest.approx(1560.0) and bay.z_base + bay.height == pytest.approx(2450.0)
        upper, lower = run.part(f"{bay.id}-LIFT1"), run.part(f"{bay.id}-LIFT2")
        assert upper.props["FittingCode"] == "HF"
        assert "assume the hinge exists" in upper.props["BlumRangeOverride"]
        assert upper.boxes[0][4] > lower.boxes[0][5]
        kc_min, kc_max = kc.AVENTOS["HF"]["lf"]
        assert kc_min <= upper.props["PowerFactor"] <= kc_max
        # Petr, 2026-11-13: "do 88 degrees in the model." (an HF opening-angle stop)
        assert upper.props["OpeningAngle"] == 88.0
        assert upper.lift.angles[-1] == pytest.approx(math.radians(88.0))
        assert lower.lift.parent == 0
        # Open, the lower front hangs partly folded, not flat behind the upper.
        hang = math.degrees(upper.lift.angles[-1] + lower.lift.angles[-1])
        assert hang == pytest.approx(lower.props["OpenLowerAngle"], abs=0.1)
        assert -15.0 < hang < 0.0
        assert lower.props["OpenBottomEdgeHeight"] == pytest.approx(1.980, abs=0.003)  # 1.991 before the 10 overhang (2026-11-22 c)
        # Space above: at least Blum's Y for the 88° stop (28).
        assert upper.props["OpenAbove"] >= upper.props["BlumOpenAbove"] == pytest.approx(0.028)
        mechs = [run.part(f"{bay.id}-LIFTMECH-{s}") for s in ("L", "R")]
        arms = [run.part(f"{bay.id}-LIFTARM-{s}") for s in ("L", "R")]
        # The lever is rigid, fixed to the lower front, pivoting at the mechanism's underside.
        assert all(a.lift.stretch is None and a.lift.pivot_z == pytest.approx(mechs[0].boxes[0][4]) for a in arms)
        assert lower.boxes[0][4] < arms[0].boxes[0][4] < lower.boxes[0][5]
        shelves = [p for p in run.parts if p.role == "Shelf" and p.id.startswith(bay.id)]
        assert len(shelves) == 2
        assert all(sh.boxes[0][5] <= min(m.boxes[0][4] for m in mechs) for sh in shelves)
    assert {bid for bid, _box in run.clearances} == {b.id for b in run.bays}


def test_lift_outside_blum_range_stops_the_export():
    doc = copy.deepcopy(load_furnishings())
    bay = next(e for e in doc["systemFurniture"] if e["id"] == "SF-BH800")
    for pset in bay["PropertySets"]:
        if pset["Name"] == "Pset_Fronts":
            pset["Properties"]["Layout"] = "lift * fitting=HK shelves=2"
            pset["Properties"].pop("BlumRangeOverride")
    with pytest.raises(ValueError, match="cabinet height"):
        _runs(doc)


def test_lift_angle_must_be_an_hf_stop():
    doc = copy.deepcopy(load_furnishings())
    bay = next(e for e in doc["systemFurniture"] if e["id"] == "SF-BH800")
    for pset in bay["PropertySets"]:
        if pset["Name"] == "Pset_Fronts":
            pset["Properties"]["Layout"] = "lift * fitting=HF angle=90 shelves=2"
    with pytest.raises(ValueError, match="opening-angle stops are 116, 107, 97, 88, 81"):
        _runs(doc)


def test_blum_range_override_keeps_the_breach():
    doc = copy.deepcopy(load_furnishings())
    bay = next(e for e in doc["systemFurniture"] if e["id"] == "SF-BH800")
    for pset in bay["PropertySets"]:
        if pset["Name"] == "Pset_Fronts":
            pset["Properties"]["Layout"] = "lift * fitting=HK shelves=2"
    front = _runs(doc)["KR-WEST-H"].part("SF-BH800-LIFT")
    assert "205–600" in front.props["OutsideBlumRange"]


def test_nothing_above_the_ceiling_line():
    import ceiling_line
    from ground_floor import FURNISHING_LISTS, ROOM_X0, ROOM_X1, ROOM_Y0, ROOM_Y1

    doc = load_furnishings()
    runs = list(_runs(doc).values())
    ceiling_line.check_ceiling_line(doc, FURNISHING_LISTS, runs)
    room = (ROOM_X0, ROOM_X1, ROOM_Y0, ROOM_Y1)
    lining = ceiling_line.lining_obstacles(doc, FURNISHING_LISTS)
    assert [o[0] for o in lining] == ["SF-DH-LINING", "SF-DH-RET-W", "SF-DH-RET-E"]
    notes = ceiling_line.check_open_envelopes(runs, room, lining)
    # Three west wall cabinets and SF-DH's two HF sections. Since the oak
    # lining (Petr, 2026-11-20) SF-DH is 844 high, so its open fronts get
    # Blum's 28 under the lining (2432) and nothing clashes.
    assert len(notes) == 5 and not [n for n in notes if n.startswith("open:")]
    assert all("0 from the SF-DH-LINING" in n and "38 from the soffit" in n for n in notes if n.startswith("SF-DH-S"))
    dh = next(r for r in runs if r.id == "KR-DH")
    assert "OpenClash" not in dh.part("SF-DH-S1-LIFT1").props
    assert dh.part("SF-DH-S1-LIFT1").props["BlumOpenAbove"] == pytest.approx(0.028)
    # The old 890 cabinet's open fronts would meet the lining: the export stops.
    doc2 = copy.deepcopy(doc)
    next(e for e in doc2["systemFurniture"] if e["id"] == "SF-DH")["Height"] = 0.89
    with pytest.raises(ValueError, match="SF-DH-S1-LIFT open meets the SF-DH-LINING"):
        ceiling_line.check_open_envelopes(list(_runs(doc2).values()), room, lining)
    doc = copy.deepcopy(doc)
    next(e for e in doc["systemFurniture"] if e["id"] == "SF-DH")["Height"] = 0.9
    with pytest.raises(ValueError, match="ceiling line"):
        ceiling_line.check_ceiling_line(doc, FURNISHING_LISTS, list(_runs(doc).values()))


def test_over_fridge_has_a_pair_of_doors():
    run = _runs()["KR-TALL-F"]
    leaves = [run.part(f"SF-TF-DOOR{i}").door for i in (1, 2)]
    assert sorted(leaf.hinge for leaf in leaves) == ["L", "R"]
    fridge_top = 1876.0
    assert run.bays[0].z_base >= fridge_top


def test_fronts_layout_is_parametric():
    doc = copy.deepcopy(load_furnishings())
    bay = next(e for e in doc["systemFurniture"] if e["id"] == "SF-I500b")
    for pset in bay["PropertySets"]:
        if pset["Name"] == "Pset_Drawers":
            pset["Properties"]["NominalHeights"] = "0.15 0.15 0.2 *"
    run = _runs(doc)["KR-ISL"]
    assert [round(run.part(f"SF-I500b-D{i}").drawer.nominal) for i in (1, 2, 3, 4)] == [150, 150, 200, 310]


def test_island_clear_widths():
    run = _runs()["KR-ISL"]
    clear = {b["id"]: b["clear"] for b in kc.bay_summary(run)}
    assert clear == {
            # Petr, 2026-11-23 (t841u): 13, 12 and 11 Gridfinity columns with 2 mm play.
        "SF-I500a": 443.0, "SF-I600a": 557.0, "SF-I500b": 515.0, "SF-I600b": 599.0, "SF-I300": 278.0,
        "SF-E600a": 599.0, "SF-E600b": 599.0, "SF-E600c": 599.0, "SF-E700": 613.0,
    }


def test_divider_is_in_both_bays_once():
    run = _runs()["KR-ISL"]
    div = "KR-ISL-DIV-SF-I600a-SF-I500b"
    assert [p.id for p in run.parts].count(div) == 1
    assert div in run.bay("SF-I600a").members and div in run.bay("SF-I500b").members
    for bay in run.bays:
        assert "KR-ISL-BACK" in bay.members


def test_sf_i600a_drawers():
    run = _runs()["KR-ISL"]
    drawers = [run.part(f"SF-I600a-D{i}").drawer for i in (1, 2, 3)]
    assert [d.nominal for d in drawers] == [100.0, 100.0, 610.0]
    assert [d.content for d in drawers] == ["nože", "nářadí", "dole nevím"]
    assert [(round(d.front[1] - d.front[0]), round(d.front[5] - d.front[4])) for d in drawers] == [
        (572, 97), (572, 97), (572, 607)]
    # Blum MERIVOBOX NL 600 (Petr, 2026-11-23, t835u): inside = clear 557 − 51
    # by NL 600 − 26 − 16; sides M, M, E. 557 since t841u (12 columns).
    assert all((round(d.inside[0]), round(d.inside[1])) == (506, 558) for d in drawers)
    assert [round(d.box[5] - d.box[4]) for d in drawers] == [91, 91, 192]
    assert [d.side for d in drawers] == ["M", "M", "E"] and all(d.nl == pytest.approx(600.0) for d in drawers)
    assert all(d.grid == (12, 13) for d in drawers)  # 12 x 42 + 2 = 506
    # No box front (2026-11-22 e, t795u): the box is the inside + the 19
    # back, as long as the NL allows.
    assert all(d.extension == pytest.approx(558.0 + 19.0 + 19.0) for d in drawers)
    # The 100 fronts are too low for an M box (space 108): the box hangs below.
    assert [d.drop for d in drawers] == pytest.approx([26.0, 34.0, 0.0])
    assert run.carcass_z1 - run.carcass_z0 == pytest.approx(810.0)


def test_island_worktop_and_cladding():
    run = _runs()["KR-ISL"]
    a0, a1, c0, c1, z0, z1 = run.worktop
    # 1160 deep body (Blum MERIVOBOX, Petr 2026-11-23, t835u: west row 630
    # for NL 600, east row 530 for NL 500) + 20 overhang on the west; flush
    # with the east fronts since 2026-11-20 f.
    assert (a1 - a0, c1 - c0, z1 - z0, z1) == pytest.approx((2540.0, 1180.0, 20.0, 930.0))
    assert (c0, c1) == pytest.approx((-20.0, 1160.0))
    clad = run.part("KR-ISL-CLAD-N").boxes[0]
    # 2026-11-20 f: the end panels run up to the top and meet it at 45 degrees.
    assert clad[1] - clad[0] == pytest.approx(20.0) and clad[4] == 0.0 and clad[5] == pytest.approx(930.0)
    assert clad[2:4] == pytest.approx((-20.0, 1160.0))


def test_island_mitre_joints():
    run = _runs()["KR-ISL"]
    top = run.part("KR-ISL-WORKTOP")
    assert len(top.cuts) == 2
    for name, outer, inner in (("N", -20.0, 0.0), ("S", 2520.0, 2500.0)):
        clad = run.part(f"KR-ISL-CLAD-{name}")
        (cut,) = clad.cuts
        # Both cuts lie on the joint line from the outer top corner (outer, 930)
        # to the inner bottom corner (inner, 910): a 45 degree plane.
        for tri in (cut, next(t for t in top.cuts if abs(t[0][0] - outer) < 2)):
            on_line = [p for p in tri if abs((p[0] - outer) * (930.0 - 910.0) / (inner - outer) - (930.0 - p[1])) < 1e-6]
            assert len(on_line) == 2, (name, tri)
    assert run.part("KR-ISL-WORKTOP").material == "Silestone Blanco Maple"
    assert run.part("KR-ISL-CLAD-N").material == "Silestone Blanco Maple"


def test_mitre_solids():
    from ground_floor import _kitchen_run_parts

    run = _runs()["KR-ISL"]
    solids = {s.element_id: s for s in _kitchen_run_parts(run)}
    top, clad = solids["KR-ISL-WORKTOP"], solids["KR-ISL-CLAD-N"]
    # The mitred end loses a 20 x 20 / 2 triangle over the depth; the panel the same.
    # (Boxes shrink by half the 1 mm mesh gap.)
    box = 19.0 * 1179.0 * 929.0
    assert clad.volume == pytest.approx(box - 200.0 * 1179.0, rel=0.003)
    assert clad.volume < box - 150.0 * 1179.0
    assert top.volume < 2539.0 * 1179.0 * 19.0 - 2 * 150.0 * 1179.0


def test_height_change_follows():
    doc = copy.deepcopy(load_furnishings())
    for e in doc["systemFurniture"]:
        if kc.run_of(e) == "KR-ISL":
            e["Height"] = 1.03
    run = _runs(doc)["KR-ISL"]
    assert run.carcass_z1 - run.carcass_z0 == pytest.approx(900.0)
    d3 = run.part("SF-I600a-D3").drawer
    assert d3.nominal == pytest.approx(700.0)
    assert run.worktop[5] == pytest.approx(1030.0)
    assert run.part("KR-ISL-CLAD-N").boxes[0][5] == pytest.approx(1030.0)


def test_width_change_moves_dividers_and_worktop():
    doc = copy.deepcopy(load_furnishings())
    for e in doc["systemFurniture"]:
        if e["id"] == "SF-B800":
            e["Width"] = 0.9
        if e["id"] in ("SF-A250", "SF-A600"):
            e["Origin"] = [e["Origin"][0], round(e["Origin"][1] + 0.065, 6)]  # 835 since t848u
    run = _runs(doc)["KR-WEST"]
    assert run.bay("SF-B800").clear_width == pytest.approx(882.0)
    assert run.worktop[1] - run.worktop[0] == pytest.approx(2565.0)


def test_ifc_groups_and_assembly():
    doc = load_furnishings()
    model = build_ifc(doc)
    kitchen_ifc.apply(model, doc)
    assert validation_errors(model) == []
    groups = {g.Name: g for g in model.by_type("IfcGroup")}
    assert "Ostrov západ 600" in groups
    assert "Furniture" in groups and "Electrical" in groups
    furniture = groups["Furniture"]
    electrical = groups["Electrical"]
    rels = [
        r for r in model.by_type("IfcRelAssignsToGroup")
        if r.RelatingGroup and r.RelatingGroup.GlobalId == furniture.GlobalId
    ]
    assert {r.RelatedObjectsType for r in rels} == {"GROUP", "PRODUCT"}
    group_rel = next(r for r in rels if r.RelatedObjectsType == "GROUP")
    product_rel = next(r for r in rels if r.RelatedObjectsType == "PRODUCT")
    child_names = {g.Name for g in group_rel.RelatedObjects}
    skip = {furniture.GlobalId, electrical.GlobalId}
    bay_names = {g.Name for g in groups.values() if g.GlobalId not in skip}
    assert child_names == bay_names
    member_ids = {kitchen_ifc._yaml_id(p) for p in product_rel.RelatedObjects}
    # Loose pieces (sofa, table, standalone cabinets, worktops not in a bay).
    assert {"FN-GATTA", "FN-S2A", "KR-ISL-WORKTOP"} <= member_ids
    # SF-DH and SF-TC are bays of their own runs since 2026-11-19.
    assert {"Jídelna horní", "Rohová vysoká"} <= child_names
    # Kitchen-run assemblies stay out: their bays are already child groups.
    assert "KR-ISL" not in member_ids and "KR-WEST" not in member_ids
    # Electrical stays empty until a circuit or IfcSystem exists in the model.
    assert not [
        r for r in model.by_type("IfcRelAssignsToGroup")
        if r.RelatingGroup and r.RelatingGroup.GlobalId == electrical.GlobalId
    ]
    island = [r for r in model.by_type("IfcRelAggregates") if r.RelatingObject.Name == "Ostrov"]
    aggregated = [p for p in _runs()["KR-ISL"].parts
                  if p.role not in kitchen_ifc.NOT_AGGREGATED and p.builtin is None]
    assert len(island) == 1 and len(island[0].RelatedObjects) == len(aggregated)
    # Built-ins keep their yaml product and room, gain a body, join the bay.
    by_id = kitchen_ifc._products_by_yaml_id(model)
    oven = by_id["EA-DGC7465"]
    assert oven.is_a("IfcElectricAppliance") and oven.PredefinedType == "ELECTRICCOOKER"
    assert oven.Representation is not None
    assert [r.RelatingStructure.Name for r in oven.ContainedInStructure] == ["1.02 Obývák"]
    t3 = groups["Vysoká 600 trouba"]
    t3_members = {kitchen_ifc._yaml_id(o) for r in t3.IsGroupedBy for o in r.RelatedObjects}
    assert {"EA-DGC7465", "EA-M2230", "SF-T3-DOOR1", "SF-T3-PACK3L"} <= t3_members
    tap = by_id["SN-TAP-I"]
    assert tap.is_a("IfcSanitaryTerminal") and not tap.Decomposes
    # The bay over the fridge is a new group under Furniture.
    assert "Nad lednicí 908" in child_names


EAST_SLIDE = 0.496  # MERIVOBOX NL 500: inside 458 + 2 x 19 (2026-11-23, t835u)
DN_SLIDE = 0.396  # MERIVOBOX NL 400: inside 358 + 2 x 19 (2026-11-20 c)


def test_drawer_motions_in_model():
    _shape, meta = build()
    drawers = [m for m in meta["door_motions"] if m["kind"] == "drawer"]
    island = [m for m in drawers if m["id"].startswith("SF-I")]
    assert [m["id"] for m in island] == [f"{b}-D{i}" for b in ("SF-I600a", "SF-I500b", "SF-I600b") for i in (1, 2, 3)] + [
        "SF-I300-D1"]
    for m in drawers:
        assert m["element"] == m["id"]
    # The slide is the full extension, the box length (Blum MERIVOBOX NL 600
    # since 2026-11-23, t835u: inside 558 + 2 x 19).
    for m in island:
        assert m["slide"] == pytest.approx([-0.596, 0.0, 0.0])
    east = [m for m in drawers if m["id"].startswith("SF-E")]
    # MERIVOBOX NL 550 since 2026-11-20 c, NL 500 since 2026-11-23.
    assert len(east) == 12 and all(m["slide"] == pytest.approx([EAST_SLIDE, 0.0, 0.0]) for m in east)
    # 2026-11-20 d: each east front has two MERIVOBOX inner drawers.
    assert sorted(m["id"] for m in east if m.get("parent")) == sorted(
        f"{b}-D1-I{k}" for b in ("SF-E600a", "SF-E600b", "SF-E600c", "SF-E700") for k in (1, 2))
    # SF-I600a spans y 12.755–13.330 (575 since 2026-11-23, t841u).
    assert [m["center"][2] for m in island[:3]] == pytest.approx([-13.0425] * 3, abs=1e-6)
    west = [m for m in drawers if m["id"] in ("SF-A250-D1", "SF-B800-D1", "SF-C850-D1")]
    # Blum MERIVOBOX NL 550 in the 600 west run (2026-11-23).
    assert len(west) == 3 and all(m["slide"] == pytest.approx([0.546, 0.0, 0.0]) for m in west if m["id"] != "SF-B800-D1")
    # SF-B800's bin frame runs on MOVENTO NL 450 (2026-11-23, t842u).
    assert next(m for m in west if m["id"] == "SF-B800-D1")["slide"] == pytest.approx([0.45, 0.0, 0.0])
    # Dining base drawers slide south (glTF +z). The living counter is dead
    # space since 2026-11-20 (no drawers).
    found = [m for m in drawers if m["id"].startswith("SF-DN-S")]
    assert found and all(m["slide"] == pytest.approx([0.0, 0.0, DN_SLIDE]) for m in found)
    # Petr, 2026-11-20 c: "Let me close the Merivobox drawers by tapping":
    # every inner drawer is its own record, tied to its front's drawer.
    inner = [m for m in found if "-I" in m["id"]]
    assert len(inner) == 8 and all(m["parent"] == m["id"].rsplit("-I", 1)[0] for m in inner)
    assert [m["coupled"] for m in inner] == [True, False] * 4
    assert not [m for m in drawers if m["id"].startswith("SF-LB")]


def test_cabinet_door_motions_swing_outward():
    _shape, meta = build()
    doors = {m["id"]: m for m in meta["door_motions"] if m["kind"] == "hinged" and m["id"].startswith("SF-")}
    assert {"SF-T1-DOOR1", "SF-T2-DOOR1", "SF-TF-DOOR1", "SF-TF-DOOR2", "SF-T3-DOOR1", "SF-T4-DOOR1",
            "SF-I500a-DOOR1", "SF-F052-DOOR1", "SF-F053-DOOR1", "SF-TC-DOOR1"} <= set(doors)
    # SF-DH is AVENTOS HF since 2026-11-20; SF-LB dead space (no doors).
    assert not [d for d in doors if d.startswith(("SF-DH", "SF-LB", "SF-E600a"))]
    # T1 hinges on its west edge and opens toward the room (south, glTF +z).
    t1 = doors["SF-T1-DOOR1"]
    assert t1["element"] == "SF-T1-DOOR1" and t1["axis"] == [0, 1, 0]
    assert t1["hinge"][0] < t1["center"][0] and t1["sign"] == -1
    t2 = doors["SF-T2-DOOR1"]
    assert t2["hinge"][0] > t2["center"][0] and t2["sign"] == 1


def test_sink_cutouts_are_teka_undermount():
    runs = _runs()
    isl = {v.name: v for v in runs["KR-ISL"].part("KR-ISL-WORKTOP").voids}
    west = {v.name: v for v in runs["KR-WEST"].part("KR-WEST-WORKTOP").voids}
    rs15 = west["SN-RS15"]
    assert (round(rs15.a1 - rs15.a0, 3), round(rs15.c1 - rs15.c0, 3), rs15.radius) == (706.0, 396.0, 13.0)
    s18 = isl["SN-RS1840"]
    assert (round(s18.a1 - s18.a0, 3), round(s18.c1 - s18.c0, 3)) == (176.0, 396.0)


def test_undermount_rim_must_meet_the_stone():
    doc = copy.deepcopy(load_furnishings())
    sink = next(e for e in doc["sanitaryTerminals"] if e["id"] == "SN-RS15")
    sink["Elevation"] = 0.73
    with pytest.raises(ValueError, match="undermount"):
        kc.runs(doc)


def test_hob_flush_fit_in_sf_i600b():
    run = _runs()["KR-ISL"]
    hob = run.hobs["SF-I600b"]
    assert hob.mounting == "FlushFit"
    assert hob.glass[5] == pytest.approx(930.0)
    assert hob.underside == pytest.approx(879.0)
    assert hob.back_edge >= 50.0
    voids = {v.name: v for v in run.part("KR-ISL-WORKTOP").voids}
    assert voids["hob rebate"].depth == pytest.approx(5.5)
    assert voids["hob"].a1 - voids["hob"].a0 == pytest.approx(600.0)
    assert "EA-KM8665" in run.bay("SF-I600b").members
    assert "SF-I600b-RAIL-F" not in [p.id for p in run.parts]


def test_gridfinity_drawers_fit_the_grid():
    run = _runs()["KR-ISL"]
    p = run.params
    for bay in ("SF-I600a", "SF-I500b", "SF-I600b"):
        for i in (1, 2, 3):
            d = run.part(f"{bay}-D{i}").drawer
            n, m = d.grid
            # Blum MERIVOBOX (2026-11-23): clear − 51 is exactly n x 42 + 2
            # since t841u (2 mm play); NL 600 leaves 10 in depth.
            assert d.inside[0] == pytest.approx(n * 42 + 2) and d.inside[1] == pytest.approx(m * 42 + 2 + 10)
            # The baseplate rides in the drawer: n × m cells, on the inside
            # floor, snapped to the front (Petr, t835u).
            plate = d.items[0]
            assert plate[1] - plate[0] == pytest.approx(n * p["GridfinityPitch"])
            assert plate[4] == pytest.approx(d.floor_z)
            assert plate[2] == pytest.approx(d.box[2]) == pytest.approx(d.front[3])
    # East: inner drawers only (2026-11-22 e, t795u); the middle bays 9 over
    # across; NL 500 since 2026-11-23 leaves 37 in depth.
    west = [f"open: {b}-D{i} inside {w} x 558 is +0 / +10 off the Gridfinity {n}x13 size (scripts/gridfinity_fit.py)"
            for b, w, n in (("SF-I600a", 506, 12), ("SF-I500b", 464, 11), ("SF-I600b", 548, 13)) for i in (1, 2, 3)]
    # Petr, 2026-11-23 (t851u): 13 columns exactly in the north three.
    east = {"SF-E600a": (548, 13, 0), "SF-E600b": (548, 13, 0), "SF-E600c": (548, 13, 0), "SF-E700": (562, 13, 14)}
    assert [n for n in run.notes if "Gridfinity" in n] == west + [
        f"open: {b}-D1-I{k} inside {w} x 458 is +{sl} / +36 off the Gridfinity {n}x10 size (scripts/gridfinity_fit.py)"
        for b, (w, n, sl) in east.items() for k in (1, 2)]


def test_drawer_boxes_have_no_box_front_and_east_grid_is_inner_only():
    """Petr, 2026-11-22 (t795u): "we remove the useless frame frontsides";
    east: Gridfinity on the inner drawers, none in the main one."""
    run = _runs()["KR-ISL"]
    p = run.params
    d = run.part("SF-I600a-D1")
    # front, bottom, two sides, back, then the baseplate: no box front.
    assert len(d.boxes) == 5 + len(d.drawer.items)
    walls = [b for b in d.boxes[1:5] if b[1] - b[0] > 100 and abs(b[3] - b[2]) <= p["BoxWall"] + 1e-6]
    assert len(walls) == 1  # only the back
    main = run.part("SF-E600a-D1")
    assert main.drawer.grid is None and not main.drawer.baseplate and main.props.get("Gridfinity") is None
    inner = run.part("SF-E600a-D1-I1")
    assert inner.drawer.grid == (13, 10) and inner.drawer.baseplate  # 548 = 13 x 42 + 2 (t851u)
    ib = inner.drawer.box
    assert inner.drawer.inside[1] == pytest.approx(abs(ib[3] - ib[2]) - 2 * p["BoxWall"])  # own front + back


def test_drawers_under_the_hob_clear_it():
    run = _runs()["KR-ISL"]
    hob = run.hobs["SF-I600b"]
    top = run.part("SF-I600b-D1").drawer
    assert top.box[5] <= hob.underside - 8.0 + 1e-6


def test_west_backsplash_up_to_wall_cabinets():
    run = _runs()["KR-WEST"]
    (box,) = run.part("KR-WEST-BACKSPLASH").boxes
    # 20 mm since 2026-11-20 f (12 before), linked to the catalogue.
    assert box[3] - box[2] == pytest.approx(20.0)
    assert (box[4], box[5]) == (pytest.approx(930.0), pytest.approx(1560.0))
    assert box[1] - box[0] == pytest.approx(2500.0)


def test_west_run_ends_flush():
    # Petr, 2026-11-22 (option 2): the carcass end sides are the cream end
    # panels, flush with the wall segment y 11.35-13.85 between the pocket
    # doors OP24 / OP25; no 20 mm claddings, the top stops flush.
    run = _runs()["KR-WEST"]
    a0 = min(b.a0 for b in run.bays)  # y 11.35, the OP24 jamb
    a1 = a0 + 2500.0  # y 13.85, the OP25 jamb
    assert not [p for p in run.parts if p.role == "Cladding"]
    assert run.worktop[:2] == (pytest.approx(a0), pytest.approx(a1))
    (south,) = run.part("KR-WEST-END-S").boxes
    assert south[:2] == (pytest.approx(a0), pytest.approx(a0 + 18.0))
    # The dishwasher slot has no carcass: an 18 panel closes it, floor to
    # the worktop underside, wall to the fronts' face.
    panel = run.part("KR-WEST-NICHE-END-N")
    (box,) = panel.boxes
    assert box[:2] == (pytest.approx(a1 - 18.0), pytest.approx(a1))
    assert (box[4], box[5]) == (0.0, pytest.approx(910.0)) and panel.label == "cabinet"
    assert run.bay("SF-A600").a1 - run.bay("SF-A600").a0 == pytest.approx(600.0)
    # Nothing of the run (legs, kickboard, top, backsplash) past either end.
    for part in run.parts:
        for b in part.boxes:
            assert b[0] >= a0 - 1e-6 and b[1] <= a1 + 1e-6, part.id
    # The wall cabinets above stay inside the same segment.
    wall = _runs()["KR-WEST-H"]
    a0 = min(b.a0 for b in wall.bays)
    assert max(b.a1 for b in wall.bays) == pytest.approx(a0 + 2500.0)
    for part in wall.parts:
        for b in part.boxes:
            assert b[0] >= a0 - 1e-6 and b[1] <= a0 + 2500.0 + 1e-6, part.id


def test_dining_run_box_bodies_under_stone():
    run = _runs()["KR-DN"]
    # 2026-11-20 c: SF-DN70 (the 70 sliver east of the pier) is gone; the
    # bays with fronts are carcasses (2026-11-19).
    assert not [p for p in run.parts if "SF-DN70" in p.id]
    # Petr, 2026-11-20 h: "the dining part has 20 silestone and 20 oak below
    # it": the top stays 930, the carcass stops at 890.
    assert run.carcass_z1 == pytest.approx(890.0)
    under = run.part("KR-DN-UNDERLAY")
    assert under.label == "oak" and under.boxes == [(300.0, 3000.0, 0.0, 450.0, 890.0, 910.0)]
    # 2026-11-20 b: the Silestone stays only over SF-DN; SF-F052 gets its
    # own oak piece, SF-F053 goes under KR-LB's oak counter.
    slabs = run.part("KR-DN-WORKTOP").boxes
    assert len(slabs) == 1 and slabs[0][:2] == (pytest.approx(300.0), pytest.approx(3000.0))
    # 2026-11-20 f: no overhang, the top as deep as the boxes (450).
    assert all(s[5] == pytest.approx(930.0) and s[2] == pytest.approx(0.0) and s[3] == pytest.approx(450.0)
               for s in slabs)
    own = run.part("SF-F052-WORKTOP")
    assert own.label == "oak" and own.boxes == [(0.0, 300.0, 0.0, 200.0, 890.0, 930.0)]
    lb = _runs()["KR-LB"].part("KR-LB-WORKTOP")
    # "the living room counter is the same thickness as the bookshelves, which is 40"
    assert all((b[4], b[5]) == (pytest.approx(890.0), pytest.approx(930.0)) for b in lb.boxes)
    assert lb.label == "oak" and lb.props["Covers"] == "SF-F053"
    assert sorted((round(b[0]), round(b[1]), round(b[3])) for b in lb.boxes) == [(-300, 0, 200), (0, 4150, 450)]
    assert not [p for p in run.parts if p.role == "Cladding"]


def test_living_counter_open_niche():
    # Petr, 2026-11-23 (t910u): cream niche under the oak top, floor at 650,
    # 20 mm back, 430 clear, seven blank fronts shortened under the floor.
    run = _runs()["KR-LB"]
    floor = run.part("SF-LB-NICHE-FLOOR")
    assert floor.boxes == [(0.0, 4150.0, 0.0, 450.0, 632.0, 650.0)]
    back = run.part("SF-LB-NICHE-BACK")
    # West side board (20) insets the back; east runs to SF-TC.
    assert back.boxes == [(20.0, 4150.0, 430.0, 450.0, 650.0, 890.0)]
    west = run.part("SF-LB-NICHE-END-W")
    assert west.boxes == [(0.0, 20.0, 0.0, 450.0, 650.0, 890.0)]
    assert not [p for p in run.parts if p.id == "SF-LB-NICHE-END-E"]
    fronts = [p for p in run.parts if p.id.startswith("SF-LB-S") and p.role == "Front"]
    assert len(fronts) == 7
    assert all((p.boxes[0][4], p.boxes[0][5]) == (pytest.approx(1.5), pytest.approx(630.5)) for p in fronts)
    top = run.part("KR-LB-WORKTOP")
    assert all((b[4], b[5]) == (pytest.approx(890.0), pytest.approx(930.0)) for b in top.boxes)
    # No rails under the oak top any more; the cream body stops at 650.
    assert not [p for p in run.parts if p.role == "Rail"]


def test_dining_flush_kickboard():
    # Petr, 2026-11-20 b: "a bottom fixed kickboard with the same 100mm
    # height (flush with the cabinet fronts)".
    run = _runs()["KR-DN"]
    kick = [p for p in run.parts if p.role == "Plinth"]
    # Petr, 2026-11-20 d: "theres no reason there should be a split in the
    # kickboard where each column meets the dining are, it can just be one
    # continous kickboard": one part, split only by the Dreame opening.
    assert [p.id for p in kick] == ["KR-DN-PLINTH-S"]
    assert [(b[0], b[1]) for b in kick[0].boxes] == [(0.0, pytest.approx(417.5)), (pytest.approx(857.5), 3300.0)]
    assert all((b[2], b[3], b[4], b[5]) == (0.0, 18.0, 0.0, 100.0) for p in kick for b in p.boxes)
    assert all(kick[0].id in b.members for b in run.bays)
    assert run.part("SF-F052-DOOR1").boxes[0][4] == pytest.approx(101.5)
    # Petr: the western cupboard switches hinge direction; the eastern stays.
    assert run.part("SF-F052-DOOR1").props["Hinge"] == "L"
    assert run.part("SF-F053-DOOR1").props["Hinge"] == "R"


def test_legs_behind_a_kickboard():
    # Petr, 2026-11-20 b: "add kickboard (cover) to the existing plinth /
    # toe-kick areas": legs plus a kickboard 50 behind the fronts.
    runs = _runs()
    for rid, legs, boards in (("KR-ISL", 22, 2), ("KR-WEST", 8, 2)):
        run = runs[rid]
        kick = [p for p in run.parts if p.role == "Plinth"]
        assert len(kick) == boards
        assert all(p.props["Setback"] == pytest.approx(0.05) and b[3] - b[2] == pytest.approx(18.0)
                   for p in kick for b in p.boxes)
        found = [p for p in run.parts if p.role == "Leg"]
        assert len(found) == legs and all(p.boxes[0][5] == pytest.approx(100.0) for p in found)
    # The west run's kickboard runs on across the dishwasher slot.
    west = runs["KR-WEST"]
    plinth = west.part("SF-A600-PLINTH-E").boxes[0][:4]
    # The slot moved 18 south on 2026-11-22 (FlushEnds), 250-850 before.
    assert tuple(round(v - min(b.a0 for b in west.bays), 3) for v in plinth[:2]) == (2482.0 - 600.0, 2482.0)
    assert plinth[2:] == (50.0, 68.0)
    # Front legs clear the board (c 50–68): LegInset 80 from the fronts' back.
    leg = runs["KR-ISL"].part("KR-ISL-LEG-SF-I500a-N-F").boxes[0]
    assert leg[2] == pytest.approx(78.0)
    assert runs["KR-TALL"].carcass_z1 == pytest.approx(2450.0)


def test_wide_bays_split_into_sections():
    # Petr, 2026-11-19: "Add the rest of the drawers, hinged doors, etc. to
    # the whole kitchen and living room on a best effort basis."
    runs = _runs()
    dn = runs["KR-DN"]
    bay = dn.bay("SF-DN")
    # Petr, 2026-11-20 b: four sections, one full-height drawer each.
    dividers = sorted(dn.part(f"SF-DN-SDIV{k}").boxes[0][0] + 9.0 - bay.a0 for k in range(1, 4))
    assert dividers == pytest.approx([675.0, 1350.0, 2025.0])
    assert all(f"SF-DN-SDIV{k}" in bay.members for k in range(1, 4))
    for k in (2, 3, 4):
        d = dn.part(f"SF-DN-S{k}-D1")
        assert d.drawer.front[1] - d.drawer.front[0] == pytest.approx(672.0)
        assert (d.drawer.front[4], d.drawer.front[5]) == (pytest.approx(101.5), pytest.approx(888.5))  # 890 carcass, 2026-11-20 h
        assert d.props["InnerDrawers"] == "M,K" and d.props["Latch"] == "Blum ZI7.0M07"
        inner = dn.part(f"SF-DN-S{k}-D1-I2")
        assert inner.role == "InnerDrawer" and inner.props["SideHeight"] == pytest.approx(0.129)  # Blum K
    # Section 1: the Dreame X60 Master station under a shorter drawer.
    d1 = dn.part("SF-DN-S1-D1")
    assert d1.drawer.front[4] == pytest.approx(261.5)
    dock = dn.part("EA-DREAME-X60M")
    a0, a1, _c0, c1, z0, z1 = dock.boxes[0]
    assert (a1 - a0, c1, z0, z1) == (pytest.approx(416.0), pytest.approx(443.0), 0.0, pytest.approx(249.0))
    kick = dn.part("KR-DN-PLINTH-S").boxes
    assert all(b[1] <= a0 or b[0] >= a1 for b in kick)  # open over the station
    # Petr, 2026-11-20 c: "lets center the dreame x60 station on its
    # cabinet. The rectangles left on the left and right in front of the
    # dead space can actually be part of the drawer front face": centred on
    # section 1, one front with a notch, no fixed panels.
    s1 = (d1.drawer.front[0] + d1.drawer.front[1]) / 2.0
    assert (a0 + a1) / 2.0 == pytest.approx(s1)
    assert not [p for p in dn.parts if "DEAD" in p.id]
    legs = d1.boxes[1:3]
    assert [(b[4], b[5]) for b in legs] == [(pytest.approx(101.5), pytest.approx(261.5))] * 2
    assert legs[0][0] == pytest.approx(d1.drawer.front[0]) and legs[1][1] == pytest.approx(d1.drawer.front[1])
    assert d1.props["FrontNotch"] == pytest.approx(0.44) and d1.props["FrontNotchHeight"] == pytest.approx(0.16)
    assert {f"SF-DN-S1-DOCKSIDE{k}" for k in (1, 2)} <= {p.id for p in dn.parts}
    assert d1.props["InnerDrawers"] == "M,K"
    # Petr, 2026-11-20: "remove living room drawers behind couch. Those
    # cabinets are dead space": seven blank fixed fronts, nothing moves.
    lb = runs["KR-LB"]
    assert [p.role for p in lb.parts if p.id.startswith("SF-LB-S") and p.role in ("Front", "Drawer", "Door")] == ["Front"] * 7
    assert all(p.drawer is None and p.door is None for p in lb.parts)
    # Petr, 2026-11-20: "dining area top cabinets split in half, same flip
    # out opening as kitchen top cabinets, same 88deg setting."
    dh = runs["KR-DH"]
    div = dh.part("SF-DH-SDIV1").boxes[0]
    assert (div[0] + div[1]) / 2.0 - dh.bay("SF-DH").a0 == pytest.approx(1350.0)
    for k in (1, 2):
        up, low = dh.part(f"SF-DH-S{k}-LIFT1"), dh.part(f"SF-DH-S{k}-LIFT2")
        assert up.props["FittingCode"] == "HF" and up.props["OpeningAngle"] == 88.0
        assert up.lift is not None and low.lift is not None
        assert up.boxes[0][1] - up.boxes[0][0] == pytest.approx(1347.0)
    # 844 high under the oak lining since 2026-11-20 (top 2404 = 2450 − 18 − 28).
    assert max(b[5] for p in dh.parts for b in p.boxes) == pytest.approx(2404.0)
    tc = runs["KR-TC"]
    assert tc.part("SF-TC-DOOR1").boxes[0][4] > 660.0  # over the sofa's east arm


def test_sections_grammar():
    el = {"id": "X", "Width": 1.0, "PropertySets": [{"Name": kc.PSET_FRONTS, "Properties": {
        "Sections": "0.3 *", "Layout": "doors *", "Layout2": "drawer *", "Contents2": "a"}}]}
    assert kc.section_widths(el, 1000.0) == pytest.approx([300.0, 700.0])
    assert kc.section_widths(dict(el, PropertySets=[{"Name": kc.PSET_FRONTS, "Properties": {"Sections": "4"}}]),
                             1000.0) == pytest.approx([250.0] * 4)
    subs = kc.section_elements(el)
    assert [kc.zone_spec(e)[0][0] for e in subs] == ["doors", "drawer"]
    assert kc.zone_contents(subs[1]) == ["a"]
    assert kc.has_drawers(el)


def test_dining_drawers_merivobox_and_gridfinity():
    # Petr, 2026-11-20 c: "Give gridfinity to the dining area cabinets too."
    # The sections take the bay's Pset_Drawers (MERIVOBOX, Gridfinity).
    run = _runs()["KR-DN"]
    p = run.params
    for k, inside in ((1, 597.0), (2, 606.0), (3, 606.0), (4, 597.0)):
        outer = run.part(f"SF-DN-S{k}-D1")
        d = outer.drawer
        assert outer.props["System"] == "Blum MERIVOBOX" and outer.props["NominalLength"] == pytest.approx(0.4)
        assert d.inside[:2] == pytest.approx((inside, 358.0)) and d.grid == (14, 8)
        for i in (1, 2):
            inner = run.part(f"SF-DN-S{k}-D1-I{i}")
            assert inner.role == "InnerDrawer" and inner.drawer.grid == (14, 8)
            assert inner.props["Parent"] == outer.id
            assert bool(inner.props.get("Latched")) == (i == 1)
            plate = inner.drawer.items[0]
            assert plate[1] - plate[0] == pytest.approx(14 * p["GridfinityPitch"])


def test_tall_run_east_side_kickboard():
    # Petr, 2026-11-20 d: "Please add a bit of kickboard between the kitchen
    # and dining areas in the south-north direction (the side of the tall
    # kitchen cabinet has a hole with no kickboard)".
    run = _runs()["KR-TALL"]
    side = run.part("KR-TALL-PLINTH-E")
    (box,) = side.boxes
    a_hi = run.bays[-1].a1
    # Petr, 2026-11-20 h: "Needs to be flush with the cabinet side."
    assert (box[0], box[1]) == (pytest.approx(a_hi - 18.0), pytest.approx(a_hi))  # 18 board, flush
    end = run.part("KR-TALL-END-E").boxes[0]
    assert (end[0], end[1]) == (pytest.approx(box[0]), pytest.approx(box[1]))
    assert (box[2], box[3]) == (pytest.approx(68.0), pytest.approx(621.0))  # front board's back to the carcass back (629 deep since 2026-11-23)
    assert (box[4], box[5]) == (0.0, pytest.approx(100.0))
    assert side.id in run.bays[-1].members and side.props["Setback"] == pytest.approx(0.0)
    # It meets the dining kickboard face to face at x 22.150.
    dn = _runs()["KR-DN"].part("KR-DN-PLINTH-S").boxes[0]
    assert run.frame.world(box[1], 0.0, 0.0)[0] == pytest.approx(_runs()["KR-DN"].frame.world(dn[0], 0.0, 0.0)[0])


def test_led_panels_routed_into_the_wall_cabinet_bottoms():
    # Petr, 2026-11-22 a: "I want the underside of the cabinet to be a full
    # led panel, with some reasonable padding. [...] Use the right thickness
    # cabinet bottom so the panel can be routed into it." And on PR #138:
    # "cant we make it a single panel even accross where the cabinets meet?"
    runs_ = _runs()
    west, dh = runs_["KR-WEST-H"], runs_["KR-DH"]
    assert len(west.led_fields) == 1 and len(dh.led_fields) == 1
    for run in (west, dh):
        assert run.carcass_z0 == pytest.approx(1560.0)  # the underside does not move
        (f,) = run.led_fields
        bottoms = [p for p in run.parts if p.role == "Bottom"]
        assert len(bottoms) == 1  # one board under the whole run
        lo = min(b[4] for b in bottoms[0].boxes)
        hi = max(b[5] for b in bottoms[0].boxes)
        assert (lo, hi) == (pytest.approx(1560.0), pytest.approx(1590.0))  # 30 bottom
        assert f.diffuser[4:] == (pytest.approx(1560.0), pytest.approx(1563.0))  # flush, 3 mm
        assert f.pocket[5] == pytest.approx(1575.0)  # 15 deep, 15 web left
        assert all(f.plate[0] - 1e-6 <= m[0] and m[1] <= f.plate[1] + 1e-6 for m in f.modules)
        assert all(b[1] - b[0] <= 1000.0 + 1e-6 for b in f.plates)  # butted plates
        assert sum(b[1] - b[0] for b in f.plates) == pytest.approx(f.plate[1] - f.plate[0])
        # The dividers stand on the bottom; the end sides run down past it.
        for p in run.parts:
            if p.role == "Divider":
                assert p.boxes[0][4] == pytest.approx(1590.0), p.id
            if p.role == "EndSide":
                assert p.boxes[0][4] == pytest.approx(1560.0), p.id
    (fw,) = west.led_fields
    assert fw.diffuser[1] - fw.diffuser[0] == pytest.approx(2408.5)  # 2.75 play each end
    assert [round(m[1] - m[0]) for m in fw.modules] == [495, 495, 495, 495, 416]
    (fd,) = dh.led_fields
    assert fd.diffuser[1] - fd.diffuser[0] == pytest.approx(2608.0)  # 3 play each end


def test_j_grips_and_wall_front_overhang():
    """Petr, 2026-11-22 c: VOXTORP-style J grips on drawers and hinged doors
    (top edge; tall doors the latch edge), 10 mm overhang on the wall cabinets."""
    import ground_floor
    parts = {p.id: (r, p) for r in kc.runs(ground_floor.load_furnishings()) for p in r.parts}
    _r, d = parts["SF-I600a-D1"]
    (g,) = d.grips
    assert d.props["Grip"] == "J top"
    a0, a1, c0, c1, z0, z1 = g.bounds()
    face = d.drawer.front[2]
    assert z1 > d.drawer.front[5] and z0 == pytest.approx(d.drawer.front[5] - 28.0)  # the cup's bottom
    assert c1 == pytest.approx(face + 14.0)  # up to the 4 back wall of the 18 front
    assert any(len(sg) == 3 for sg in g.segments)  # rounded: arcs
    # The lip: face material up to the crest, 21 below the edge; no undercut.
    at_face = [q for q in g.profile if abs(q[0] - face) < 1e-6]
    assert min(q[1] for q in at_face) == pytest.approx(d.drawer.front[5] - 22.0)  # crest 21 + R1
    _r, door = parts["SF-T2-DOOR1"]
    # t883u: tall north-wall doors get the upside-down J on the bottom edge.
    assert door.props["Grip"] == "J bottom"
    # Petr, 2026-11-23 (t865u): "same J grip everywhere": pull-outs and the
    # dishwasher's decor panel get the top grip; fixed blank fronts do not.
    assert parts["SF-B800-D1"][1].grips and parts["SF-B800-D1"][1].props["Grip"] == "J top"
    assert parts["SF-A600-PANEL"][1].props["Grip"] == "J top"
    assert not parts["SF-LB-S1-FRONT"][1].grips
    for lift in ("SF-BH800-LIFT2", "SF-DH-S1-LIFT2"):
        assert parts[lift][1].boxes[0][4] == pytest.approx(1550.0)
    assert parts["SF-BH800-LIFT1"][1].boxes[0][5] == pytest.approx(2448.5)


def test_sink_frame_hangs_two_filur_bins_round_the_disposer():
    """Petr, 2026-11-23 (t842u): replace the MERIVOBOX M + standing FILURs
    with a U-shaped MDF frame round the disposer, two holes (the FILUR's
    29 x 38 cm less 5 a side) each hanging one FILUR 42 l by its rim, on
    Blum concealed runners, BLUMOTION, manual opening; the shortest runner
    that takes both bins past the worktop edge. t848u: SF-B800 835 wide;
    t849u: the bins hang 10 over the carcass bottom."""
    run = _runs()["KR-WEST"]
    part = run.part("SF-B800-D1")
    d = part.drawer
    fr = d.frame
    assert run.bay("SF-B800").width == pytest.approx(835.0)
    assert part.props["System"].startswith("Blum MOVENTO 760H") and part.props["RunnerArticle"] == "760H4501S"
    assert "MERIVOBOX" not in part.props["System"] and "TIP-ON" not in part.props["System"]
    assert fr["nl"] == 450 and d.extension == pytest.approx(450.0)
    assert fr["hole"] == pytest.approx((280.0, 370.0))
    assert fr["skw"] == pytest.approx(817.0 - 42.0)
    # Bins 12 mm in front of the worktop edge (overhang 20) when pulled out;
    # NL 420 would leave them 18 mm under it.
    assert fr["lift"] == pytest.approx(12.0)
    # Bins 10 over the carcass bottom (118): plate top 648, 62 under the bowl
    # (710), lids 32 under it.
    assert (fr["plate_top"], fr["top_gap"], fr["lid_gap"], fr["floor_gap"]) == pytest.approx((648.0, 62.0, 32.0, 10.0))
    # 30 mm of MDF between each hole and the disposer notch at 835.
    assert fr["strip"] == pytest.approx((30.0, 30.0))
    disposer = run.part("EA-EVO3-W").boxes[0]
    pieces = [b for b in d.items if b not in fr["bins"]]
    assert not [b for b in pieces if kc._plan_meet(b, disposer) and b[5] > disposer[4] and b[4] < disposer[5]]
    assert not [b for b in fr["bins"] if kc._plan_meet(b, disposer)]
    assert any("SF-B800 bin frame: MOVENTO NL 450" in n for n in run.notes)
    # t866u: no side walls and no back panel; the runners screw under the
    # plate (bottom 630, runner 21 below), the bins hang free. Only the two
    # rear hook blocks (40) reach under the plate; two 90° angles tie the
    # front to the plate.
    assert fr["runner_z0"] == pytest.approx(648.0 - 18.0 - 21.0) and d.profile_z == pytest.approx(609.0)
    under = [b for b in pieces if b[4] < 630.0 - 1e-6]
    assert len(under) == 2 and all(b[5] - b[4] == pytest.approx(40.0) for b in under)
    assert fr["brackets"] == 2 and "no side walls" in part.props["FrameKind"]
    assert any("no side walls" in n for n in run.notes)


def test_recycling_cabinet_is_the_deepest_empty_merivobox():
    part = _runs()["KR-WEST"].part("SF-C850-D1")
    assert part.props["NominalLength"] == pytest.approx(0.55) and part.drawer.side == "E"
    assert part.drawer.items == []  # Petr, t835u: it stays empty


def test_one_drawer_under_the_oven_line_and_the_sealer_in_the_pantry():
    """Petr, 2026-11-23 (t870u): SF-T2, SF-T3 and SF-T4 each one outer
    drawer up to the oven line (fronts level), SF-T3's with only a shelf
    for oven trays, SF-T2's and SF-T4's with one MERIVOBOX inner drawer;
    the Maxxo Chamber Line 40 on the SF-T2 pantry floor."""
    run = _runs()["KR-TALL"]
    tops = []
    for bay in ("SF-T2", "SF-T3", "SF-T4"):
        drawers = [p for p in run.parts if p.id.startswith(f"{bay}-D") and p.role == "Drawer"]
        assert [p.id for p in drawers] == [f"{bay}-D1"]
        tops.append(drawers[0].drawer.front[5])
        assert drawers[0].props["Grip"] == "J top"
    # t874u: fronts 795.5, one front gap under the oven door (798.5).
    assert tops == pytest.approx([795.5] * 3)
    oven_door = run.part("EA-DGC7465-DOOR").boxes[0]
    assert oven_door[4] - tops[1] == pytest.approx(3.0)
    assert run.part("SF-T3-BOARD3").boxes[0][4:] == pytest.approx((782.0, 800.0))
    assert run.part("SF-T2-DOOR1").boxes[0][4] == pytest.approx(798.5) and run.part("SF-T4-DOOR1").boxes[0][4] == pytest.approx(798.5)
    # t871u: the tray shelf is fixed in the carcass, not in the drawer.
    assert not run.part("SF-T3-D1").drawer.items and not run.part("SF-T3-D1").props.get("InnerDrawers")
    shelf = run.part("SF-T3-SH4-1")
    assert shelf.drawer is None and shelf.boxes[0][5] == pytest.approx(676.0)
    assert shelf.boxes[0][4] > run.part("SF-T3-D1").drawer.box[5]
    assert run.part("SF-T2-D1").props["InnerDrawers"] == "M" and run.part("SF-T4-D1").props["InnerDrawers"] == "M"
    # t883u: the sealer left the pantry for the island's north east drawer.
    sealer = _runs()["KR-ISL"].part("EA-MAXXO-CL40")
    assert sealer.props["InnerDrawer"] == "SF-E600a-D1-I1" and sealer.props["ClearanceAbove"] == pytest.approx(0.03)
    assert sealer.props["SpareAlongRun"] > 0 and sealer.props["SpareAcrossDepth"] > 0


def test_kenwood_rides_its_inner_drawer():
    """Petr, 2026-11-23 (t889u): the Kenwood Chef XL in SF-E600b (next to
    the sealer's SF-E600a), on its only inner drawer with 30 over it, the
    control side north; it and the sealer slide with their inner drawers."""
    run = _runs()["KR-ISL"]
    assert run.part("SF-E600b-D1").props["InnerDrawers"] == "K"
    mixer = run.part("EA-KENWOOD-CHEF-XL")
    assert mixer.props["InnerDrawer"] == "SF-E600b-D1-I1"
    assert mixer.props["ClearanceAbove"] == pytest.approx(0.03)
    assert mixer.props["SpareAlongRun"] > 0 and mixer.props["SpareAcrossDepth"] > 0
    host = run.part("SF-E600b-D1-I1").drawer
    display = run.part("EA-KENWOOD-CHEF-XL-DISPLAY")
    # North is low a on the island: the display is on the mixer's low-a side.
    assert display.boxes[0][1] <= min(b[0] for b in mixer.boxes) + 30.0
    for pid in ("EA-KENWOOD-CHEF-XL", "EA-KENWOOD-CHEF-XL-BOWL", "EA-KENWOOD-CHEF-XL-DISPLAY", "EA-MAXXO-CL40"):
        part = run.part(pid)
        assert part.drawer is not None and part.drawer.extension == pytest.approx(host.extension)
        assert part.props["InnerDrawer"].endswith("-D1-I1")
