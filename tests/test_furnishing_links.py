"""Pset_Links (models/furnishing_links.py) and the 2026-11-20 c living-room
junction at the W-053 pier, resolved from furnishings.yaml."""

from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

import furnishing_links  # noqa: E402
import living_geometry  # noqa: E402
from ground_floor import load_furnishings  # noqa: E402
from yaml_ifc.yamlio import load as load_yaml_ifc  # noqa: E402


def _el(elem_id, **kw):
    out = {"id": elem_id, "Depth": 0.5, "Height": 1.0}
    links = kw.pop("links", None)
    out.update(kw)
    if links:
        out["PropertySets"] = [{"Name": "Pset_Links", "Properties": links}]
    return out


def _by_id(doc):
    return {e["id"]: e for key in furnishing_links.LISTS for e in doc.get(key) or []}


def test_links_resolve_in_order_and_east_sets_x_or_width():
    doc = {"furniture": [
        _el("A-1", Origin=[1.0, 2.0], Width=0.3),
        _el("B-1", links={"Width": "A-1.Width", "East": "A-1.East + 1", "Y": "A-1.North"}),
        _el("C-1", links={"X": "A-1.X", "East": "B-1.X", "Y": "0.0 + 2", "Top": "B-1.Height * 2.5",
                          "Elevation": "0.0 + 0.5", "Pset_X.Mid": "(X + East) / 2"}),
    ]}
    out = _by_id(furnishing_links.resolve(doc))
    assert out["B-1"]["Width"] == pytest.approx(0.3)
    assert out["B-1"]["Origin"] == pytest.approx([2.0, 2.5])  # East 2.3 - 0.3, Y the north face
    assert out["C-1"]["Origin"] == pytest.approx([1.0, 2.0]) and out["C-1"]["Width"] == pytest.approx(1.0)  # East 2.0 - X 1.0
    assert out["C-1"]["Height"] == pytest.approx(2.0)  # Top 2.5 - Elevation 0.5
    mid = next(p for p in out["C-1"]["PropertySets"] if p["Name"] == "Pset_X")["Properties"]["Mid"]
    assert mid == pytest.approx(1.5)


def test_link_cycle_and_bad_reference_stop_the_load():
    cyc = {"furniture": [_el("A-1", Origin=[0, 0], links={"Width": "B-1.Width"}),
                         _el("B-1", Origin=[0, 0], links={"Width": "A-1.Width"})]}
    with pytest.raises(furnishing_links.LinkError):
        furnishing_links.resolve(cyc)
    bad = {"furniture": [_el("A-1", Origin=[0, 0], links={"Width": "Z-9.Width"})]}
    with pytest.raises(furnishing_links.LinkError):
        furnishing_links.resolve(bad)
    evil = {"furniture": [_el("A-1", Origin=[0, 0], links={"Width": "__import__('os')"})]}
    with pytest.raises(furnishing_links.LinkError):
        furnishing_links.resolve(evil)


def test_tall_corner_cabinet_is_the_armrest_width():
    # Petr, 2026-11-20 c: "That tall corner cabinet in living room should be
    # the exact width of the couch armrest."
    doc = _by_id(load_furnishings())
    arm, tc = doc["FN-ARME"], doc["SF-TC"]
    assert tc["Width"] == arm["Width"]
    assert tc["Origin"][0] + tc["Width"] == pytest.approx(arm["Origin"][0] + arm["Width"])
    raw = _by_id(load_yaml_ifc(ROOT / "inputs/ground_floor/furnishings.yaml"))["SF-TC"]
    assert "Width" not in raw and "Origin" not in raw  # linked, not copied


def test_w053_junction_is_clean():
    # Petr, 2026-11-20 c: "that whole bookshelf area and base cabinets below
    # it need to be tightened, the connection to the column is weird".
    doc = _by_id(load_furnishings())
    assert not {"SF-DN70", "CV-BS-R053E", "CV-BS-DN70"} & set(doc)
    f053, slat, lb, bk, tc = (doc[k] for k in ("SF-F053", "CV-SLAT-W053", "SF-LB", "FN-BK", "SF-TC"))
    pier_east = f053["Origin"][0] + f053["Width"]
    assert slat["Origin"][0] + slat["Width"] == pytest.approx(pier_east)
    assert lb["Origin"][0] == pytest.approx(pier_east) and bk["Origin"][0] == pytest.approx(pier_east)
    assert lb["Origin"][0] + lb["Width"] == pytest.approx(tc["Origin"][0])
    assert bk["Origin"][0] + bk["Width"] == pytest.approx(tc["Origin"][0])
    # The bookshelf stands on the counter and meets the oak top board.
    lining = doc["SF-DH-LINING"]
    assert bk["Elevation"] == pytest.approx(lb["Height"])
    assert bk["Elevation"] + bk["Height"] == pytest.approx(lining["Elevation"])


def test_oak_top_board_runs_to_the_living_room_in_one_piece():
    # Petr, 2026-11-20 c: "That oak top board above the dining area should be
    # flush with soffit and extend all the way to the living room in one piece."
    doc = _by_id(load_furnishings())
    lining, tc = doc["SF-DH-LINING"], doc["SF-TC"]
    assert lining["Origin"][0] + lining["Width"] == pytest.approx(tc["Origin"][0])
    assert lining["Origin"][1] == pytest.approx(15.15)  # the soffit's room face
    assert lining["Elevation"] + lining["Height"] == pytest.approx(2.45)  # the ceiling line
    w, d, h = (lining[k] * 1000.0 for k in ("Width", "Depth", "Height"))
    segs = living_geometry.lining_segments(lining, w, d, h)
    notched = [s for s in segs if s[3] < d - 1e-6]
    assert len(notched) == 2  # round both pier slat panels
    parts = living_geometry.living_detail(lining, w, d, h, 0.0)
    assert len(parts) == 1  # one piece


def test_bookshelf_has_the_oak_veneer_backing():
    # Petr, 2026-11-20 c: "living room bookshelf needs the same accoustic
    # backpanel (yours is still seethrough with no oak veneer backing)".
    bk = _by_id(load_furnishings())["FN-BK"]
    props = next(p for p in bk["PropertySets"] if p["Name"] == "Pset_Bookshelf")["Properties"]
    assert props["BackingThickness"] == pytest.approx(0.006)
    w, d, h = (bk[k] * 1000.0 for k in ("Width", "Depth", "Height"))
    parts = living_geometry.living_detail(bk, w, d, h, 0.0)
    boxes = [p.bounding_box() for p in parts]
    back = [b for b in boxes if b.max.Y == pytest.approx(d) and b.size.Y == pytest.approx(6.0)]
    assert len(back) == 1 and back[0].size.X == pytest.approx(w - 2 * 20.0, abs=1.0)  # between the 20 case sides


def test_silestone_thickness_comes_from_the_catalogue():
    # 2026-11-20 f: one source (silestone-blanco-maple.thickness_m) for every
    # Silestone part; the returns and slats follow.
    from ground_floor import load_furnishings

    doc = load_furnishings()
    by = {e["id"]: e for k in ("furniture", "systemFurniture", "coverings") for e in doc.get(k) or []}
    t = furnishing_links.material_thickness("silestone-blanco-maple")
    assert t == pytest.approx(0.02)
    for rid in ("KR-ISL", "KR-WEST", "KR-DN"):
        run = next(p["Properties"] for p in by[rid]["PropertySets"] if p["Name"] == "Pset_KitchenRun")
        assert run["WorktopThickness"] == pytest.approx(t)
    assert by["CV-BS-DN"]["Depth"] == pytest.approx(t)
    assert by["CV-BS-DN"]["Origin"][1] + t == pytest.approx(15.60)
    assert by["CV-BS-R052"]["Width"] == pytest.approx(t)
    assert by["CV-SLAT-W052"]["Origin"][0] + by["CV-SLAT-W052"]["Width"] == pytest.approx(22.45 + t)
    assert by["CV-SLAT-W053"]["Origin"][0] == pytest.approx(25.15 - t)
    # Pier + slat cladding depth (Petr, 2026-11-20 f).
    for eid in ("SF-DH", "FN-BK"):
        assert by[eid]["Origin"][1] == pytest.approx(15.324)
        assert by[eid]["Depth"] == pytest.approx(0.276)


def test_unknown_material_link_stops():
    with pytest.raises(furnishing_links.LinkError):
        furnishing_links.material_thickness("no-such-stone")
