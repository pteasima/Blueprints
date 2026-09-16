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
        "sdk",
        "podhled",
        "sklo",
    ):
        assert name in labels
    assert "koruna" not in labels

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

    gable_eps = [
        c
        for c in _labeled(shape, "eps")
        if c.bounding_box().size.Y < p.wall_mason + p.wall_plaster + 1.0
    ]
    assert gable_eps == []

    pouzdra = sorted(_labeled(shape, "pouzdro"), key=lambda s: (s.bounding_box().min.Y, s.bounding_box().min.X))
    assert len(pouzdra) == len(p.pocket_doors)
    sdk_faces = sorted(_labeled(shape, "sdk"), key=lambda s: s.bounding_box().min.Y)
    assert len(sdk_faces) == 2
    face_t = max(p.sdk_t, 12.5)
    for face in sdk_faces:
        bb = face.bounding_box()
        assert abs(bb.size.Y - face_t) < 1e-6
        assert abs(bb.max.Z - (p.pocket_door_h - FACE_GAP)) <= 1.0
    # Local pouzdro sits beside openings, behind SDK (covered, not cut out of SDK).
    for part in pouzdra:
        bb = part.bounding_box()
        assert bb.size.X < p.room_width * 0.5
        assert abs(bb.max.Z - (p.pocket_door_h - FACE_GAP)) <= 1.0
    # SDK sits in front of pouzdro (into the room), not flush with cutouts for pockets.
    k_sdk = sdk_faces[0].bounding_box()
    l_sdk = sdk_faces[1].bounding_box()
    k_pouzdra = [part for part in pouzdra if part.bounding_box().max.Y < p.room_length / 2]
    l_pouzdra = [part for part in pouzdra if part.bounding_box().min.Y > p.room_length / 2]
    assert k_pouzdra and l_pouzdra
    assert abs(k_sdk.min.Y - (FACE_GAP + p.pouzdro_d)) < 1e-6
    assert k_sdk.min.Y >= max(part.bounding_box().max.Y for part in k_pouzdra) - 1e-6
    assert l_sdk.max.Y <= min(part.bounding_box().min.Y for part in l_pouzdra) + 1e-6
    # Walk-through door holes only: SDK volume well below a solid full-width board.
    full_sdk_vol = (p.room_width - 2 * FACE_GAP) * face_t * (p.pocket_door_h - FACE_GAP)
    assert sdk_faces[0].volume < full_sdk_vol * 0.75  # two kitchen door holes
    assert sdk_faces[1].volume < full_sdk_vol * 0.9  # one living door hole
    # Předstěny depths immutable.
    assert p.predstena_kitchen == 190.0
    assert p.predstena_living == 450.0

    # Door openings: chodba+spíž on kitchen gable; zádveří on living; window-corner vs inset.
    kitchen_doors = sorted(
        [d for d in p.pocket_doors if d[0] == "kitchen"], key=lambda d: d[1]
    )
    living_doors = [d for d in p.pocket_doors if d[0] == "living"]
    assert len(kitchen_doors) == 2
    assert len(living_doors) == 1
    assert kitchen_doors[0][1] == 0.0  # chodba · window corner
    assert abs(kitchen_doors[1][1] - (p.room_width - p.pocket_spiz_inset - 1000.0)) < 1e-6
    assert living_doors[0][1] == 0.0  # zádveří · window corner
    kitchen_pouzdra = [part for part in pouzdra if part.bounding_box().max.Y < p.room_length / 2]
    living_pouzdra = [part for part in pouzdra if part.bounding_box().min.Y > p.room_length / 2]
    assert len(kitchen_pouzdra) == 2  # spíž + chodba on kitchen gable
    assert len(living_pouzdra) == 1
    glass = _labeled(shape, "sklo")
    assert len(glass) == len(p.eave_windows)
    for (y0, width), pane in zip(
        sorted(p.eave_windows, key=lambda w: w[0]),
        sorted(glass, key=lambda s: s.bounding_box().min.Y),
        strict=True,
    ):
        bb = pane.bounding_box()
        assert bb.max.X < 0.0  # window eave opposite cabinets
        assert abs(bb.min.Y - (y0 + FACE_GAP)) < 1e-6
        assert abs(bb.size.Y - (width - 2 * FACE_GAP)) < 1e-6
        assert abs(bb.max.Z - (p.window_h - FACE_GAP)) <= 1.0
    gable_walls = [
        c
        for c in _labeled(shape, "zdivo")
        if c.bounding_box().size.X > p.room_width * 0.5
    ]
    assert len(gable_walls) == 2

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
    p = ObyvakParams()
    shape, _meta = build(p)
    paths = export_shape(shape, "obyvak", formats=("step", "stl", "svg", "png"))
    assert paths["step"].stat().st_size > 0
    assert paths["stl"].stat().st_size > 0
    assert paths["png"].stat().st_size > 0
    preview, _ = build_preview(p)
    full_n = len(shape.children)
    assert len(preview.children) < full_n
    furn_eave = [
        c
        for c in preview.children
        if c.label in {"eps", "zdivo", "omitka", "pozednice", "nabytek"}
        and c.bounding_box().min.X >= p.room_width - 1.0
    ]
    assert furn_eave == []
    assert any(c.label == "sklo" for c in preview.children)
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
    assert "sdk" in elev_labels
    assert "koruna" not in elev_labels
    from blueprints.export_utils import export_section as _export_section

    sliced = _export_section(sec, "obyvak", stem="slice_section")
    assert sliced["png"].stat().st_size > 0
    sliced_e = _export_section(elev, "obyvak", stem="slice_elevation")
    assert sliced_e["png"].stat().st_size > 0
