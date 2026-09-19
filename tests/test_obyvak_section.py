from pathlib import Path
import math
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak_section import ObyvakParams, build, build_layout  # noqa: E402
from obyvak_geom import LABEL_FLEX, LABEL_NATURHELD, LABEL_ROST  # noqa: E402
from blueprints.export_utils import export_section  # noqa: E402


def _source_h_start(p: ObyvakParams) -> float:
    """Independent copy of the legacy-sheet formula."""
    cos = math.cos(math.radians(p.roof_angle_deg))
    tan = math.tan(math.radians(p.roof_angle_deg))
    t_soft = p.finish_t + p.basic_t + p.naturheld_t + p.flex_t + p.foil_t + p.sdk_t
    t_left = p.plenum_t + p.cd_t + t_soft
    t_above = p.vent_t + p.dhv_t + p.counter_batten_t + p.batten_t + p.tile_t
    x_ridge = p.room_width / 2.0
    z_raf_inner_ridge = p.ridge_z - (t_above + p.rafter_t) / cos
    z_raf_0 = z_raf_inner_ridge - abs(0.0 - x_ridge) * tan
    return z_raf_0 - t_left / cos


def test_derived_matches_source_sheet():
    p = ObyvakParams()
    g = build_layout(p)
    assert g.x_furn == p.room_width - p.furniture_width
    assert g.x_false == (p.room_width - p.furniture_width) / 2.0
    assert g.z_nabeh_bot == p.furniture_height + p.furniture_gap
    assert abs(g.h_start - _source_h_start(p)) < 1e-9
    assert abs(g.h_start - 2891.0) < 2.0
    assert g.z_gkf_horiz == g.h_start
    assert g.z_false == g.h_start + g.x_false * g.tan
    soffit_h = g.z_gkf_horiz - g.z_nabeh_bot
    assert soffit_h > 0


def test_obyvak_section_builds_and_exports(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    shape, meta = build()
    assert shape is not None
    assert meta["kind"] == "section"
    labels = {c.label for c in shape.children}
    for name in (
        "zdivo",
        "eps",
        "krov",
        "vata",
        LABEL_FLEX,
        "nabytek",
        LABEL_NATURHELD,
        "krytina",
        "sdk",
        LABEL_ROST,
    ):
        assert name in labels
    assert "podhled" not in labels
    assert "soffit" not in labels
    paths = export_section(shape, "obyvak_section")
    assert paths["svg"].exists()
    assert paths["dxf"].exists()
    assert paths["png"].exists()
    assert paths["svg"].stat().st_size > 0
    assert paths["dxf"].stat().st_size > 0
    assert paths["png"].stat().st_size > 0
