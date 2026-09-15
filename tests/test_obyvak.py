from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak import FACE_GAP, build, build_elevation_slice, build_preview, build_section_slice  # noqa: E402
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
    assert meta["derived"]["face_gap"] == FACE_GAP
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
    assert abs(kbb.min.Y - FACE_GAP) < 1e-6
    assert abs(kbb.size.Y - (p.predstena_kitchen - 2 * FACE_GAP)) < 1e-6
    assert abs(lbb.max.Y - (p.room_length - FACE_GAP)) < 1e-6
    assert abs(lbb.size.Y - (p.predstena_living - 2 * FACE_GAP)) < 1e-6
    assert abs(kbb.min.Z - (p.predstena_bottom_z + FACE_GAP)) < 1.0
    assert abs(kbb.max.Z - (g.z_false - FACE_GAP)) < 1.0

    furn = _labeled(shape, "nabytek")[0].bounding_box()
    assert abs(furn.size.X - (p.furniture_width - FACE_GAP)) < 1e-6
    assert abs(furn.min.Y - (g.y_furn0 + FACE_GAP)) < 1e-6
    assert abs(furn.max.Y - (g.y_furn1 - FACE_GAP)) < 1e-6

    # Nominal layer thicknesses still present (minus interface clearance).
    eave_eps = [
        c
        for c in _labeled(shape, "eps")
        if abs(c.bounding_box().size.X - (p.wall_eps - FACE_GAP)) < 1e-3
    ]
    assert eave_eps, "expected eave EPS strips with full insulation thickness"
    assert abs(eave_eps[0].bounding_box().size.X - (p.wall_eps - FACE_GAP)) < 1e-6

    bb = shape.bounding_box()
    assert bb.min.X < 0
    assert bb.max.X > p.room_width
    assert bb.min.Y < 0
    assert bb.max.Y > p.room_length
    assert abs(bb.max.Z - p.ridge_z) < 5.0


def test_3d_parts_do_not_interpenetrate():
    """Distinct solids must not share volume (mates use FACE_GAP; roof is notched)."""
    shape, _ = build()
    kids = list(shape.children)

    def aabb_hit(a, b) -> bool:
        ba, bb = a.bounding_box(), b.bounding_box()
        return (
            min(ba.max.X, bb.max.X) > max(ba.min.X, bb.min.X)
            and min(ba.max.Y, bb.max.Y) > max(ba.min.Y, bb.min.Y)
            and min(ba.max.Z, bb.max.Z) > max(ba.min.Z, bb.min.Z)
        )

    violations = []
    for i, a in enumerate(kids):
        for b in kids[i + 1 :]:
            if not aabb_hit(a, b):
                continue
            try:
                hit = a.intersect(b)
            except Exception:
                continue
            if not hit:
                continue
            shapes = list(hit) if hasattr(hit, "__iter__") and not hasattr(hit, "volume") else [hit]
            vol = 0.0
            for s in shapes:
                try:
                    vol += float(s.volume)
                except Exception:
                    pass
            if vol > 1.0:  # mm³
                violations.append((a.label, b.label, round(vol, 1)))
    assert violations == []


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
