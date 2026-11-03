"""Living-room bill of materials: NaturHeld thicknesses are priced into the total."""

from __future__ import annotations

import importlib.util
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / "scripts" / "export_obyvak_skladba.py"

# Still unpriced on purpose. Each one has no single retail SKU to snapshot:
# Sto is quote-only, the floating slope/lid joint and the sealants have no product,
# and the soffit/gable wool product is not decided.
UNPRICED_SOUHRN = {
    "StoSilent Top Finish",
    "StoSilent Top Basic",
    "Spoj šikminy a víka podhledu",
    "Páska spojů parozábrany",
    "Tmel parozábrany na omítku",
    "Akryl v koutě u okna",
    "Tmel spár NaturHeld",
    "Páska koutů StoSilent",
    "Akustický tmel obvodu",
    "Latě pod svítidla",
}


def _load():
    spec = importlib.util.spec_from_file_location("export_obyvak_skladba", SCRIPT)
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


@pytest.fixture(scope="module")
def bom():
    module = _load()
    groups = module.build_lines(module.collect_quantities())
    return module, groups


def test_naturheld_thicknesses_from_the_model_are_priced(bom):
    module, groups = bom
    params = module.ObyvakParams()
    assert int(round(params.naturheld_left)) == 100
    assert int(round(params.naturheld_right)) == 100
    priced = {100: 664.0, 40: 266.0}
    seen = []
    for name in ("Šikminy", "Kastlík", "Souhrn materiálu"):
        for line in groups[name]:
            if "Dřevovláknitá" not in line.product_type:
                continue
            thickness = int(line.dimension.split()[0])
            assert line.unit_price == priced[thickness]
            assert line.reserve_pct == 12
            assert line.line_total == pytest.approx(line.qty_net * 1.12 * line.unit_price)
            assert "prirodnistavba.cz" in line.price_source
            assert "https://" in line.price_source
            assert module.NATURHELD_PRICE_DATE in line.price_source
            seen.append((name, thickness, line.qty_net, line.unit_price, line.line_total))

    souhrn = [row for row in seen if row[0] == "Souhrn materiálu"]
    hundreds = [row for row in souhrn if row[1] == 100]
    forties = [row for row in souhrn if row[1] == 40]
    assert len(hundreds) == 1
    assert len(forties) == 1
    # Both slopes are the same 100 mm board, so one line covers the whole face.
    assert hundreds[0][2] == pytest.approx(71.0, abs=0.1)
    assert forties[0][2] == pytest.approx(8.55, abs=0.05)


def test_souhrn_total_includes_naturheld_and_lists_other_gaps(bom):
    _module, groups = bom
    lines = groups["Souhrn materiálu"]
    slopes = [ln for ln in lines if ln.order == 3]
    assert len(slopes) == 1
    assert slopes[0].line_total is not None and slopes[0].line_total > 0
    names = {ln.layer for ln in lines}
    assert "Táhlo ø14 z pozednice" not in names
    assert "Krov (nosná konstrukce)" not in names
    assert "Zavětrovací pásky 40×2" not in names
    assert "Spirála Ø160" not in names
    assert any("NatuRoll" in ln.product for ln in lines)
    assert any(ln.layer == "Latě pod svítidla" and ln.qty_net == 10 for ln in lines)
    priced = sum(ln.line_total for ln in lines if ln.line_total is not None)
    assert round(priced) > round(slopes[0].line_total)
    missing = {ln.layer for ln in lines if ln.unit_price is None and ln.qty_net}
    assert missing == UNPRICED_SOUHRN


def test_unused_naturheld_thickness_is_not_silently_priced(bom):
    module, _groups = bom
    with pytest.raises(KeyError, match="80"):
        module._naturheld_price(80)
