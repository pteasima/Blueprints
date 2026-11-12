"""Kitchen monoblock runs: shared dividers, drawers, worktop, IFC groups.

Facts and sources: docs/design/kitchen-cabinets.md. Not run while the test
workflow is paused (AGENTS.md); written against the 2026-11-12 layout.
"""

import copy
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
    assert ids == ["SF-I600a", "SF-I500b", "SF-I600b", "SF-A250", "SF-B800", "SF-C850"]


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
        assert [d.nominal for d in drawers] == [200.0, 200.0, 400.0]
        assert [d.content for d in drawers] == contents
        assert [round(d.front[5] - d.front[4]) for d in drawers] == [197, 197, 407]
    # The slab-front bays the plan does not give a front type for stay slabs.
    for bay_id in ("SF-I500a", "SF-I300", "SF-E600a", "SF-E600b", "SF-E600c", "SF-E700"):
        assert run.part(f"{bay_id}-FRONT").role == "Front"


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
    assert len(shelves) == 4
    t1_shelves = sorted(p.boxes[0][4] for p in runs["KR-TALL-W"].parts if p.id.startswith("SF-T1-SH1-"))
    assert t1_shelves[0] == pytest.approx(118.0 + 400.0)


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
    assert oven.props["Elevation"] == pytest.approx(0.928)
    assert micro.props["Elevation"] > oven.props["Elevation"] + 0.59
    # Fascias do not touch the slab fronts above and below.
    front1 = run.part("SF-T3-FRONT1").boxes[0]
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
    assert pull.box[5] <= west.part("EA-EVO3-W").boxes[0][4] - 10.0 + 1e-6
    assert len(pull.items) == 2


def test_wall_cabinets_and_over_fridge_have_pairs_of_doors():
    runs = _runs()
    for run_id, bay_id in (("KR-WEST-H", "SF-AH850"), ("KR-WEST-H", "SF-BH800"),
                           ("KR-WEST-H", "SF-CH850"), ("KR-TALL-F", "SF-TF")):
        run = runs[run_id]
        leaves = [run.part(f"{bay_id}-DOOR{i}").door for i in (1, 2)]
        assert sorted(leaf.hinge for leaf in leaves) == ["L", "R"]
    tf = runs["KR-TALL-F"]
    fridge_top = 1876.0
    assert tf.bays[0].z_base >= fridge_top


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
        "SF-I500a": 473.0, "SF-I600a": 582.0, "SF-I500b": 482.0, "SF-I600b": 582.0, "SF-I300": 273.0,
        "SF-E600a": 573.0, "SF-E600b": 582.0, "SF-E600c": 582.0, "SF-E700": 673.0,
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
    assert [d.nominal for d in drawers] == [200.0, 200.0, 400.0]
    assert [d.content for d in drawers] == ["nože", "nářadí", "dole nevím"]
    assert [(round(d.front[1] - d.front[0]), round(d.front[5] - d.front[4])) for d in drawers] == [
        (597, 197), (597, 197), (597, 407)]
    assert all(round(d.box[1] - d.box[0]) == 556 for d in drawers)
    assert all(d.extension == 550.0 for d in drawers)
    assert run.carcass_z1 - run.carcass_z0 == pytest.approx(810.0)


def test_island_worktop_and_cladding():
    run = _runs()["KR-ISL"]
    a0, a1, c0, c1, z0, z1 = run.worktop
    assert (a1 - a0, c1 - c0, z1 - z0, z1) == pytest.approx((2540.0, 1260.0, 20.0, 930.0))
    clad = run.part("KR-ISL-CLAD-N").boxes[0]
    assert clad[1] - clad[0] == pytest.approx(20.0) and clad[4] == 0.0 and clad[5] == pytest.approx(910.0)


def test_height_change_follows():
    doc = copy.deepcopy(load_furnishings())
    for e in doc["systemFurniture"]:
        if kc.run_of(e) == "KR-ISL":
            e["Height"] = 1.03
    run = _runs(doc)["KR-ISL"]
    assert run.carcass_z1 - run.carcass_z0 == pytest.approx(900.0)
    d3 = run.part("SF-I600a-D3").drawer
    assert d3.nominal == pytest.approx(500.0)
    assert run.worktop[5] == pytest.approx(1030.0)
    assert run.part("KR-ISL-CLAD-N").boxes[0][5] == pytest.approx(1010.0)


def test_width_change_moves_dividers_and_worktop():
    doc = copy.deepcopy(load_furnishings())
    for e in doc["systemFurniture"]:
        if e["id"] == "SF-B800":
            e["Width"] = 0.9
        if e["id"] in ("SF-A250", "SF-A600"):
            e["Origin"] = [e["Origin"][0], round(e["Origin"][1] + 0.1, 6)]
    run = _runs(doc)["KR-WEST"]
    assert run.bay("SF-B800").clear_width == pytest.approx(882.0)
    assert run.worktop[1] - run.worktop[0] == pytest.approx(2600.0)


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
    assert {"FN-GATTA", "FN-S2A", "SF-DH", "SF-LB", "SF-TC", "KR-ISL-WORKTOP"} <= member_ids
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
    assert {"EA-DGC7465", "EA-M2230", "SF-T3-FRONT1", "SF-T3-PACK3L"} <= t3_members
    tap = by_id["SN-TAP-I"]
    assert tap.is_a("IfcSanitaryTerminal") and not tap.Decomposes
    # The bay over the fridge is a new group under Furniture.
    assert "Nad lednicí 908" in child_names


def test_drawer_motions_in_model():
    _shape, meta = build()
    drawers = [m for m in meta["door_motions"] if m["kind"] == "drawer"]
    island = [m for m in drawers if m["id"].startswith("SF-I")]
    assert [m["id"] for m in island] == [f"{b}-D{i}" for b in ("SF-I600a", "SF-I500b", "SF-I600b") for i in (1, 2, 3)]
    for m in drawers:
        assert m["element"] == m["id"]
    for m in island:
        assert m["slide"] == pytest.approx([-0.55, 0.0, 0.0])
    assert [m["center"][2] for m in island[:3]] == pytest.approx([-13.0] * 3, abs=1e-6)
    west = [m for m in drawers if m["id"] in ("SF-A250-D1", "SF-B800-D1", "SF-C850-D1")]
    assert len(west) == 3 and all(m["slide"] == pytest.approx([0.55, 0.0, 0.0]) for m in west)


def test_cabinet_door_motions_swing_outward():
    _shape, meta = build()
    doors = {m["id"]: m for m in meta["door_motions"] if m["kind"] == "hinged" and m["id"].startswith("SF-")}
    assert {"SF-T1-DOOR1", "SF-T2-DOOR1", "SF-TF-DOOR1", "SF-TF-DOOR2", "SF-AH850-DOOR1"} <= set(doors)
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


def test_drawers_under_the_hob_clear_it():
    run = _runs()["KR-ISL"]
    hob = run.hobs["SF-I600b"]
    top = run.part("SF-I600b-D1").drawer
    assert top.box[5] <= hob.underside - 8.0 + 1e-6


def test_west_backsplash_up_to_wall_cabinets():
    run = _runs()["KR-WEST"]
    (box,) = run.part("KR-WEST-BACKSPLASH").boxes
    assert box[3] - box[2] == pytest.approx(12.0)
    assert (box[4], box[5]) == (pytest.approx(930.0), pytest.approx(1550.0))
    assert box[1] - box[0] == pytest.approx(2500.0)


def test_west_run_ends_clad():
    run = _runs()["KR-WEST"]
    for name in ("KR-WEST-CLAD-N", "KR-WEST-CLAD-S"):
        (box,) = run.part(name).boxes
        assert box[1] - box[0] == pytest.approx(20.0) and (box[4], box[5]) == (0.0, pytest.approx(910.0))
    assert run.worktop[1] - run.worktop[0] == pytest.approx(2540.0)


def test_dining_run_box_bodies_under_stone():
    run = _runs()["KR-DN"]
    assert run.part("SF-DN-BODY").boxes[0][5] == pytest.approx(910.0)
    slabs = run.part("KR-DN-WORKTOP").boxes
    assert len(slabs) == 4 and all(s[5] == pytest.approx(930.0) and s[2] == pytest.approx(-30.0) for s in slabs)
    assert not [p for p in run.parts if p.role == "Cladding"]


def test_open_legs_no_kick_board():
    runs = _runs()
    for rid, legs in (("KR-ISL", 22), ("KR-WEST", 8)):
        run = runs[rid]
        assert not [p for p in run.parts if p.role == "Plinth"]
        found = [p for p in run.parts if p.role == "Leg"]
        assert len(found) == legs and all(p.boxes[0][5] == pytest.approx(100.0) for p in found)
    assert runs["KR-TALL"].carcass_z1 == pytest.approx(2450.0)
