"""SF-I600a drawer cabinet: every drawer size follows the cabinet parameters.

Facts and sources: docs/design/kitchen-cabinets.md.
"""

import copy
from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

import kitchen_cabinet as kc  # noqa: E402
from ground_floor import build, load_furnishings  # noqa: E402


def _element(element_id="SF-I600a"):
    doc = load_furnishings()
    return next(e for e in doc["systemFurniture"] if e["id"] == element_id)


def _layout(el):
    return kc.layout(el, el["Width"] * 1000, el["Depth"] * 1000, el["Height"] * 1000)


def test_knife_cabinet_is_the_only_drawer_cabinet():
    doc = load_furnishings()
    ids = [e["id"] for e in doc["systemFurniture"] if kc.has_drawers(e)]
    assert ids == ["SF-I600a"]


def test_sf_i600a_layout():
    el = _element()
    lay = _layout(el)
    # Petr: counter 930. IKEA defaults: worktop 38, plinth 92 -> METOD carcass 800.
    assert el["Height"] == pytest.approx(0.93)
    assert lay.carcass_height == pytest.approx(800.0)
    assert [d.nominal for d in lay.drawers] == [200.0, 200.0, 400.0]
    assert [d.content for d in lay.drawers] == ["nože", "nářadí", "dole nevím"]
    fronts = [(d.front[3] - d.front[0], d.front[5] - d.front[2]) for d in lay.drawers]
    assert fronts == [(597.0, 197.0), (597.0, 197.0), (597.0, 397.0)]
    # 3 mm between fronts.
    for upper, lower in zip(lay.drawers, lay.drawers[1:]):
        assert upper.front[2] - lower.front[5] == pytest.approx(3.0)
    assert all(d.extension == lay.slide_length == 550.0 for d in lay.drawers)
    # Drawer boxes stay inside the carcass when shut.
    t = lay.params["BoardThickness"]
    for d in lay.drawers:
        assert d.box[0] >= t and d.box[3] <= lay.width - t
        assert d.box[4] <= lay.depth - lay.params["BackThickness"]
        assert d.box[2] >= lay.carcass_z0 + t


@pytest.mark.parametrize("key,value", [("Width", 0.8), ("Height", 1.03), ("Depth", 0.5)])
def test_drawers_follow_the_box(key, value):
    el = copy.deepcopy(_element())
    el[key] = value
    lay = _layout(el)
    w, d, h = el["Width"] * 1000, el["Depth"] * 1000, el["Height"] * 1000
    gap = lay.params["FrontGap"]
    assert lay.carcass_height == pytest.approx(h - 38 - 92)
    assert sum(dr.nominal for dr in lay.drawers) == pytest.approx(lay.carcass_height)
    for dr in lay.drawers:
        assert dr.front[3] - dr.front[0] == pytest.approx(w - gap)
        assert dr.box[4] <= d - lay.params["BackThickness"]
    assert lay.slide_length % 50 == 0


def test_drawer_motions_in_model():
    _shape, meta = build()
    drawers = [m for m in meta["door_motions"] if m["kind"] == "drawer"]
    assert [m["id"] for m in drawers] == ["SF-I600a-D1", "SF-I600a-D2", "SF-I600a-D3"]
    for m in drawers:
        # West row faces west: slides toward -X (glTF), the full 550.
        assert m["slide"] == pytest.approx([-0.55, 0.0, 0.0])
        assert m["center"][2] == pytest.approx(-13.0, abs=1e-6)
