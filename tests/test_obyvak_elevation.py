from pathlib import Path
import math
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak_elevation import build  # noqa: E402
from obyvak_geom import (  # noqa: E402
    LABEL_BASS_WOOL,
    LABEL_POCKET_FRAME,
    LABEL_RAFTERS,
    LABEL_ROOFING,
    LABEL_SLOPE_NH,
    LABEL_WALL_GKF,
    ObyvakParams,
    build_layout,
)
from obyvak_section import build as build_section  # noqa: E402
from blueprints.export_utils import export_section  # noqa: E402


def _source_z_soffit(p: ObyvakParams) -> float:
    """Independent copy of the legacy bokorys formula (ridge-center soffit)."""
    cos = math.cos(math.radians(p.roof_angle_deg))
    tan = math.tan(math.radians(p.roof_angle_deg))
    t_soft = p.finish_t + p.basic_t + p.naturheld_t + p.flex_t + p.foil_t + p.sdk_t
    t_left = p.plenum_t + p.cd_t + t_soft
    t_above = p.vent_t + p.dhv_t + p.counter_batten_t + p.batten_t + p.tile_t
    half = p.room_width / 2.0
    z_raf_inner_ridge = p.ridge_z - (t_above + p.rafter_t) / cos
    h_start = (z_raf_inner_ridge - half * tan) - t_left / cos
    return h_start + half * tan


def _faces(shape, label: str):
    return [c for c in shape.children if c.label == label]


def test_soffit_and_predsteny_match_source_sheet():
    p = ObyvakParams()
    g = build_layout(p)
    z_soffit = _source_z_soffit(p)
    assert abs(g.z_soffit - z_soffit) < 1e-9
    assert abs(g.z_soffit - 5296.8) < 1.0
    assert p.predstena_kitchen == 190.0
    assert p.predstena_living == 450.0
    assert g.x_pred_r == p.room_length - p.predstena_living
    _, section_meta = build_section()
    assert abs(g.h_start - section_meta["derived"]["h_start"]) < 1e-9


def test_elevation_geometry_is_horizontal_not_aframe():
    p = ObyvakParams()
    shape, meta = build(p)
    assert meta["kind"] == "section"
    assert meta["derived"]["predstena_kitchen"] == 190.0
    assert meta["derived"]["predstena_living"] == 450.0
    assert meta["derived"]["room_length"] == 11100.0

    labels = {c.label for c in shape.children}
    for name in ("masonry", LABEL_BASS_WOOL, LABEL_SLOPE_NH, LABEL_RAFTERS, LABEL_ROOFING, LABEL_WALL_GKF):
        assert name in labels
    assert "podhled" not in labels
    assert "eps" not in labels
    assert "koruna" not in labels
    assert LABEL_POCKET_FRAME in labels

    pred = _faces(shape, LABEL_BASS_WOOL)
    assert len(pred) == 2
    boxes = sorted((c.bounding_box().min.X, c.bounding_box().max.X) for c in pred)
    assert abs(boxes[0][0] - 0.0) < 1e-6
    assert abs(boxes[0][1] - p.predstena_kitchen) < 1e-6
    assert abs(boxes[1][0] - (p.room_length - p.predstena_living)) < 1e-6
    assert abs(boxes[1][1] - p.room_length) < 1e-6
    for face in pred:
        bb = face.bounding_box()
        assert abs(bb.min.Z - p.predstena_bottom_z) < 1e-6
        assert abs(bb.max.Z - meta["derived"]["z_soffit"]) < 1e-6

    sdk = sorted(_faces(shape, LABEL_WALL_GKF), key=lambda s: s.bounding_box().min.X)
    assert len(sdk) == 2
    face_t = max(p.sdk_t, 12.5)
    assert abs(sdk[0].bounding_box().size.X - face_t) < 1e-6
    assert abs(sdk[0].bounding_box().min.X - p.pouzdro_d) < 1e-6  # in front of pocket
    assert abs(sdk[1].bounding_box().max.X - (p.room_length - p.pouzdro_d)) < 1e-6
    pouzdra = sorted(_faces(shape, LABEL_POCKET_FRAME), key=lambda s: s.bounding_box().min.X)
    assert len(pouzdra) == 2
    assert abs(pouzdra[0].bounding_box().size.X - p.pouzdro_d) < 1e-6
    # Předstěny unchanged (never touch high plasterboard sizes).
    assert p.predstena_kitchen == 190.0
    assert p.predstena_living == 450.0

    soffit = _faces(shape, LABEL_SLOPE_NH)
    assert len(soffit) == 1
    sbb = soffit[0].bounding_box()
    assert abs(sbb.min.Z - meta["derived"]["z_soffit"]) < 1e-6
    assert abs(sbb.size.X - p.room_length) < 1e-6
    # Horizontal strip, not an A-frame: constant Z thickness, full span.
    g = build_layout(p)
    assert abs(sbb.size.Z - g.t_nh_face) < 1e-6


def test_obyvak_elevation_exports(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    shape, _meta = build()
    paths = export_section(shape, "obyvak_elevation")
    assert paths["svg"].exists()
    assert paths["dxf"].exists()
    assert paths["png"].exists()
    assert paths["svg"].stat().st_size > 0
    assert paths["dxf"].stat().st_size > 0
    assert paths["png"].stat().st_size > 0
    svg = paths["svg"].read_text()
    assert LABEL_BASS_WOOL in svg
    assert LABEL_WALL_GKF in svg
    assert LABEL_POCKET_FRAME in svg
    assert "koruna" not in svg
    assert "stroke-dasharray" in svg
