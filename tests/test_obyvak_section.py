from pathlib import Path
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
    LABEL_SLOPE_CD,
    LABEL_SLOPE_FOIL,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_UD,
    LABEL_SOFFIT_WOOL,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
)
from blueprints.export_utils import export_section  # noqa: E402


def test_derived_matches_source_sheet():
    """Room face is set so the left stack, including 160 mm of wool, fits the rafter."""
    p = ObyvakParams()
    g = build_layout(p)
    stack = (
        p.finish_t
        + p.basic_t
        + p.naturheld_left
        + p.sdk_t
        + p.cd_t
        + p.foil_t
        + p.wool_below_left
    )
    assert g.x_furn == p.room_width - p.furniture_width
    assert g.x_false == (p.room_width - p.furniture_width) / 2.0
    assert g.z_nabeh_bot == p.furniture_height + p.furniture_gap
    assert abs(g.t_left - stack) < 1e-6
    assert abs(g.wool_left - p.wool_below_left) < 1e-6
    assert abs(g.h_start - 3019.97) < 0.05
    assert abs(g.z_false - 5075.77) < 0.05
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
        LABEL_SOFFIT_WOOL,
        "furniture",
        LABEL_SLOPE_NH,
        LABEL_SOFFIT_NH,
        LABEL_ROOFING,
        LABEL_SLOPE_GKF,
        LABEL_SOFFIT_GKF,
        LABEL_SOFFIT_UD,
        LABEL_SLOPE_CD,
        LABEL_SLOPE_FOIL,
        LABEL_SOFFIT_CD,
    ):
        assert name in labels
    assert "venec" not in labels
    assert "podhled" not in labels
    assert "NaturHeld 140" not in labels
    assert "sdk" not in labels
    assert "soffit_battens" not in labels
    assert meta["derived"]["cd_count"] >= 5
    paths = export_section(shape, "obyvak_section")
    assert paths["svg"].exists()
    assert paths["dxf"].exists()
    assert paths["png"].exists()
    assert paths["svg"].stat().st_size > 0
    assert paths["dxf"].stat().st_size > 0
    assert paths["png"].stat().st_size > 0
