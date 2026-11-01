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
    """False-ridge height follows the joint-derived room face."""
    tan = math.tan(math.radians(p.roof_angle_deg))
    half = p.room_width / 2.0
    from obyvak_geom import ObyvakLayout

    h_start = ObyvakLayout(p).h_start
    return h_start + half * tan


def _faces(shape, label: str):
    return [c for c in shape.children if c.label == label]


def test_soffit_and_predsteny_match_source_sheet():
    p = ObyvakParams()
    g = build_layout(p)
    z_soffit = _source_z_soffit(p)
    assert abs(g.z_soffit - z_soffit) < 1e-9
    assert abs(g.z_soffit - 5411.77) < 0.05
    assert p.predstena_kitchen == 190.0
    assert p.predstena_living == 450.0
    assert g.x_pred_l == p.predstena_living
    assert g.x_pred_r == p.room_length - p.predstena_kitchen
    _, section_meta = build_section()
    assert abs(g.h_start - section_meta["derived"]["h_start"]) < 1e-9


def test_elevation_is_cut_from_the_model():
    p = ObyvakParams()
    shape, meta = build(p)
    assert meta["kind"] == "section"
    assert meta["derived"]["predstena_kitchen"] == 190.0
    assert meta["derived"]["predstena_living"] == 450.0
    assert meta["derived"]["room_length"] == 11100.0

    labels = {c.label for c in shape.children}
    for name in ("masonry", LABEL_BASS_WOOL, LABEL_SLOPE_NH, LABEL_RAFTERS, LABEL_ROOFING, LABEL_WALL_GKF):
        assert name in labels
    assert LABEL_POCKET_FRAME in labels
    # Drawing X is world Y: the room spans 0..room_length.
    pouzdra = sorted(_faces(shape, LABEL_POCKET_FRAME), key=lambda s: s.bounding_box().min.X)
    assert len(pouzdra) == 2
    assert pouzdra[0].bounding_box().min.X < 1.5
    assert pouzdra[1].bounding_box().max.X > p.room_length - 1.5
    for face in shape.children:
        assert abs(face.bounding_box().min.Y) < 1e-6 and abs(face.bounding_box().max.Y) < 1e-6


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
