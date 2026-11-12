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


def test_knife_bay_is_the_only_drawer_bay():
    doc = load_furnishings()
    ids = [e["id"] for e in doc["systemFurniture"] if kc.has_drawers(e)]
    assert ids == ["SF-I600a"]


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
        (597, 197), (597, 197), (597, 397)]
    assert all(round(d.box[1] - d.box[0]) == 556 for d in drawers)
    assert all(d.extension == 550.0 for d in drawers)
    assert run.carcass_z1 - run.carcass_z0 == pytest.approx(800.0)


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
    island = [r for r in model.by_type("IfcRelAggregates") if r.RelatingObject.Name == "Ostrov"]
    assert len(island) == 1 and len(island[0].RelatedObjects) == len(_runs()["KR-ISL"].parts)


def test_drawer_motions_in_model():
    _shape, meta = build()
    drawers = [m for m in meta["door_motions"] if m["kind"] == "drawer"]
    assert [m["id"] for m in drawers] == ["SF-I600a-D1", "SF-I600a-D2", "SF-I600a-D3"]
    for m in drawers:
        assert m["element"] == m["id"]
        assert m["slide"] == pytest.approx([-0.55, 0.0, 0.0])
        assert m["center"][2] == pytest.approx(-13.0, abs=1e-6)


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
    doc = copy.deepcopy(load_furnishings())
    bay = next(e for e in doc["systemFurniture"] if e["id"] == "SF-I600b")
    bay["PropertySets"].append({"Name": "Pset_Drawers", "Properties": {"NominalHeights": "0.2 0.2 *"}})
    run = _runs(doc)["KR-ISL"]
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
