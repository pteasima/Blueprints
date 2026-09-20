from pathlib import Path
import math
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak_section import ObyvakParams, build, build_layout  # noqa: E402
from obyvak_geom import (  # noqa: E402
    LABEL_FLOOR,
    LABEL_PLENUM_WOOL,
    LABEL_RACKING_STRAP,
    LABEL_RAFTERS,
    LABEL_ROOFING,
    LABEL_SLOPE_BATTENS,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_FLEX,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_BATTENS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_FLEX,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
)
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
        "masonry",
        "eps",
        LABEL_RAFTERS,
        LABEL_PLENUM_WOOL,
        LABEL_SLOPE_FLEX,
        LABEL_SOFFIT_FLEX,
        "furniture",
        LABEL_SLOPE_NH,
        LABEL_SOFFIT_NH,
        LABEL_ROOFING,
        LABEL_SLOPE_GKF,
        LABEL_SOFFIT_GKF,
        LABEL_SLOPE_BATTENS,
        LABEL_SOFFIT_BATTENS,
        LABEL_SLOPE_CD,
        LABEL_SOFFIT_CD,
    ):
        assert name in labels
    assert "podhled" not in labels
    assert "NaturHeld 140" not in labels
    assert "sdk" not in labels
    assert meta["derived"]["cd_count"] >= 5
    paths = export_section(shape, "obyvak_section")
    assert paths["svg"].exists()
    assert paths["dxf"].exists()
    assert paths["png"].exists()
    assert paths["svg"].stat().st_size > 0
    assert paths["dxf"].stat().st_size > 0
    assert paths["png"].stat().st_size > 0
