from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak import build, build_elevation_slice, build_preview, build_section_slice  # noqa: E402
from obyvak_geom import ObyvakParams, build_layout  # noqa: E402
from obyvak_section import build as build_section  # noqa: E402
from blueprints.export_utils import export_shape  # noqa: E402


def _labeled(shape, name: str):
    return [c for c in shape.children if c.label == name]


def test_layout_ceiling_and_gable():
    p = ObyvakParams()
    g = build_layout(p)
    assert abs(g.z_ceil(0.0) - g.h_start) < 1e-9
    assert abs(g.z_ceil(g.x_false) - g.z_false) < 1e-9
    assert abs(g.z_ceil(g.x_furn) - g.z_gkf_horiz) < 1e-9
    assert abs(g.z_gable_top(0.0) - p.eave_wall_z) < 1e-9
    assert abs(g.z_gable_top(p.room_width) - p.eave_wall_z) < 1e-9
    assert g.z_gable_top(g.x_ridge) > g.z_soffit
    assert g.y_furn0 == p.predstena_kitchen
    assert g.y_furn1 == p.room_length - p.predstena_living


def test_3d_matches_section_and_elevation_masses():
    p = ObyvakParams()
    g = build_layout(p)
    shape, meta = build(p)
    assert meta["kind"] == "solid"
    _, section_meta = build_section()
    assert abs(meta["derived"]["h_start"] - section_meta["derived"]["h_start"]) < 1e-9

    labels = {c.label for c in shape.children}
    for name in (
        "podlaha",
        "eps",
        "zdivo",
        "krov",
        "krytina",
        "vata",
        "nabytek",
        "soffit",
        "predstena",
        "pouzdro",
        "koruna",
        "podhled",
    ):
        assert name in labels

    kitchen, living = sorted(_labeled(shape, "predstena"), key=lambda s: s.bounding_box().min.Y)
    kbb, lbb = kitchen.bounding_box(), living.bounding_box()
    # Faces are inset by a hairline so they do not share plaster planes (z-fight).
    assert kbb.min.Y > 0.0
    assert kbb.min.Y < 1.0
    assert abs(kbb.size.Y - (p.predstena_kitchen - kbb.min.Y)) < 1e-6
    assert lbb.max.Y < p.room_length
    assert lbb.max.Y > p.room_length - 1.0
    assert abs(lbb.size.Y - p.predstena_living + (p.room_length - lbb.max.Y)) < 1e-6
    assert abs(kbb.min.Z - p.predstena_bottom_z) < 1.0
    assert abs(kbb.max.Z - g.z_false) < 1.0

    furn = _labeled(shape, "nabytek")[0].bounding_box()
    assert abs(furn.size.X - p.furniture_width) < 1e-6
    assert abs(furn.min.Y - g.y_furn0) < 1e-6
    assert abs(furn.max.Y - g.y_furn1) < 1e-6

    bb = shape.bounding_box()
    assert bb.min.X < 0
    assert bb.max.X > p.room_width
    assert bb.min.Y < 0
    assert bb.max.Y > p.room_length
    assert abs(bb.max.Z - p.ridge_z) < 5.0


def test_obyvak_3d_exports(tmp_path, monkeypatch):
    import blueprints.export_utils as eu

    monkeypatch.setattr(eu, "EXPORTS_DIR", tmp_path)
    shape, _meta = build()
    paths = export_shape(shape, "obyvak", formats=("step", "stl", "svg", "png"))
    assert paths["step"].stat().st_size > 0
    assert paths["stl"].stat().st_size > 0
    assert paths["png"].stat().st_size > 0
    preview, _ = build_preview()
    full_n = len(shape.children)
    assert len(preview.children) < full_n
    left_eave = [
        c
        for c in preview.children
        if c.label in {"eps", "zdivo", "omitka", "pozednice"} and c.bounding_box().max.X <= 1.0
    ]
    assert left_eave == []
    cut = export_shape(preview, "obyvak", stem="cutaway", formats=("svg", "png"))
    assert cut["png"].stat().st_size > 0

    sec, _ = build_section_slice()
    sec_labels = {c.label for c in sec.children}
    assert "nabytek" in sec_labels
    assert "soffit" in sec_labels
    assert "krov" in sec_labels
    assert "predstena" not in sec_labels

    elev, _ = build_elevation_slice()
    elev_labels = {c.label for c in elev.children}
    assert "predstena" in elev_labels
    assert "pouzdro" in elev_labels
    assert "koruna" in elev_labels
    from blueprints.export_utils import export_section as _export_section

    sliced = _export_section(sec, "obyvak", stem="slice_section")
    assert sliced["png"].stat().st_size > 0
    sliced_e = _export_section(elev, "obyvak", stem="slice_elevation")
    assert sliced_e["png"].stat().st_size > 0
