from pathlib import Path
import math
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak_elevation import build  # noqa: E402
from obyvak_geom import ObyvakParams, build_layout  # noqa: E402
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
    assert abs(g.z_soffit - 5135.3) < 1.0
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
    for name in ("zdivo", "predstena", "podhled", "krov", "krytina"):
        assert name in labels
    assert "eps" not in labels
    assert "koruna" not in labels
    assert "pouzdro" in labels

    pred = _faces(shape, "predstena")
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

    pouzdra = _faces(shape, "pouzdro")
    assert len(pouzdra) == 2
    boxes = sorted((c.bounding_box().min.X, c.bounding_box().max.X) for c in pouzdra)
    assert abs(boxes[0][0] - 0.0) < 1e-6
    assert abs(boxes[0][1] - p.pouzdro_d) < 1e-6
    assert abs(boxes[1][0] - (p.room_length - p.pouzdro_d)) < 1e-6
    assert abs(boxes[1][1] - p.room_length) < 1e-6
    for face in pouzdra:
        bb = face.bounding_box()
        assert abs(bb.min.Z - 0.0) < 1e-6
        assert abs(bb.max.Z - p.pocket_door_h) < 1e-6
        # Under the SDK kastlík, not outside the masonry.
        assert bb.min.X >= -1e-6
        assert bb.max.X <= p.room_length + 1e-6

    soffit = _faces(shape, "podhled")
    assert len(soffit) == 1
    sbb = soffit[0].bounding_box()
    assert abs(sbb.min.Z - meta["derived"]["z_soffit"]) < 1e-6
    assert abs(sbb.size.X - p.room_length) < 1e-6
    # Horizontal strip, not an A-frame: constant Z thickness, full span.
    assert abs(sbb.size.Z - p.soffit_hint_t) < 1e-6


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
    assert "predstena" in svg
    assert "pouzdro" in svg
    assert "koruna" not in svg
    assert "stroke-dasharray" in svg
