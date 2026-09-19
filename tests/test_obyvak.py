from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak import FACE_GAP, build, build_elevation_slice, build_preview, build_section_slice, scenes  # noqa: E402
from obyvak_geom import (  # noqa: E402
    LABEL_FLEX,
    LABEL_NATURHELD,
    LABEL_ROST,
    ObyvakParams,
    build_layout,
)
from obyvak_section import build as build_section  # noqa: E402
from blueprints.export_utils import export_shape  # noqa: E402
from blueprints.scenes import cad_mm_to_gltf_m, write_scenes_json  # noqa: E402


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
    # Acoustic face + Flex pack + GKF match the contractor soft stack below CD.
    assert abs(g.t_nh_face - (p.finish_t + p.basic_t + p.naturheld_t)) < 1e-9
    assert abs(g.t_soft_below_sdk - 137.5) < 1e-9
    assert abs(g.t_left - 244.5) < 1e-9
    assert g.l_hanger_right > g.l_hanger_left
    assert abs(g.z_nabeh_bot - (p.furniture_height + p.furniture_gap)) < 1e-9
    assert g.x_nh_inner == g.x_furn + g.t_nh_face
    # GKF zlom flush with wooden rost front; front CD hangs the lattice there.
    assert g.x_sdk_break == g.x_nh_inner
    assert g.x_sdk_break > g.x_furn
    cds = g.horiz_cd_x_stations()
    assert cds
    assert abs(cds[0] - (g.x_nh_inner + p.cd_w * 0.5)) < 1e-9
    t0 = g.t_nh_face + g.t_flex_pack
    z_inner = g.z_slope_plane_offset(g.x_sdk_break, t0)
    assert z_inner > g.z_gkf_horiz + p.sdk_t + 20.0  # vertical return has real height


def test_sikminy_and_soffit_stack_in_3d():
    """Šikminy NH / rost // krokvím / CD ⊥ / Flex and soffit box."""
    p = ObyvakParams()
    g = build_layout(p)
    shape, _ = build(p)
    nh = _labeled(shape, LABEL_NATURHELD)
    flex = _labeled(shape, LABEL_FLEX)
    rost = _labeled(shape, LABEL_ROST)
    cds = _labeled(shape, "cd")
    zaves = _labeled(shape, "zaves")
    pasky = _labeled(shape, "paska")
    assert len(nh) >= 2  # slope NH + soffit L
    assert len(flex) >= 2  # slope Flex + box Flex
    assert len(rost) >= 8  # slope latě (along Y) + soffit frame
    assert len(cds) >= 5  # CD ⊥ krokvím along slope
    assert len(zaves) >= 10
    # ~6 straps/side (3 X pairs × 2 diagonals) along the 11 m length.
    assert len(pasky) >= 10
    assert len(pasky) <= 14
    # Pásky are long 45° diagonals (span both X and Y), not short along-rafter clips.
    for strap in pasky:
        bb = strap.bounding_box()
        assert bb.size.Y > 800.0
        assert bb.size.X > 400.0
    # Room-facing NH on slopes sits at H_START.
    slope_nh = min(nh, key=lambda s: s.bounding_box().min.X)
    assert abs(slope_nh.bounding_box().min.Z - (g.h_start + FACE_GAP)) < 2.0
    # Soffit box underside clears the cabinets by furniture_gap.
    box_nh = max(nh, key=lambda s: s.bounding_box().min.X)
    assert abs(box_nh.bounding_box().min.Z - (g.z_nabeh_bot + FACE_GAP)) < 2.0
    assert box_nh.bounding_box().min.Z >= p.furniture_height + p.furniture_gap - 1.0
    furn = _labeled(shape, "nabytek")[0].bounding_box()
    assert box_nh.bounding_box().min.Z >= furn.max.Z + p.furniture_gap - 2.0
    # Ceiling GKF: horizontal lid + vertical return at rost front (continuous shell).
    lids = [
        c
        for c in _labeled(shape, "sdk")
        if c.bounding_box().min.Z >= g.z_gkf_horiz - 1.0
        and c.bounding_box().min.X >= g.x_furn - 1.0
    ]
    assert len(lids) >= 2  # lid + vertical return (slope SDK also reaches rost front)
    horiz_lids = [
        c
        for c in lids
        if c.bounding_box().size.Z < p.sdk_t + 1.0
        and c.bounding_box().size.X > 100.0
    ]
    assert len(horiz_lids) == 1
    assert abs(horiz_lids[0].bounding_box().size.Z - (p.sdk_t - 2 * FACE_GAP)) < 1e-3
    verts = [
        c
        for c in lids
        if c.bounding_box().size.X < p.sdk_t + 1.0
        and c.bounding_box().min.Z >= g.z_gkf_horiz + p.sdk_t - 2.0
    ]
    assert len(verts) == 1
    # Attic face of vertical GKF flush with rost front / CD front.
    assert abs(verts[0].bounding_box().max.X - (g.x_nh_inner - FACE_GAP)) < 2.0
    # Lid extends past the CD (room-ward) to seat the vertical — proper L corner.
    assert horiz_lids[0].bounding_box().min.X < g.x_nh_inner - p.sdk_t * 0.5
    assert abs(horiz_lids[0].bounding_box().min.X - (g.x_nh_inner - p.sdk_t + FACE_GAP)) < 2.0
    # Vertical top is cut to the slope (trapezoid taller on the room side).
    vbb = verts[0].bounding_box()
    assert vbb.size.Z > p.cd_t  # taller than a square butt at cd_t
    # Front soffit CD flush with rost edge (front face at x_nh_inner).
    front_cds = [
        c
        for c in cds
        if abs(c.bounding_box().min.X - g.x_nh_inner) < 2.0
        and c.bounding_box().min.Z >= g.z_gkf_horiz + p.sdk_t - 2.0
    ]
    assert len(front_cds) >= 1
    # Drop hangers exist at the front CD (box hangs at lattice edge, not mid-bay only).
    front_drops = [
        c
        for c in zaves
        if abs(c.bounding_box().center().X - (g.x_nh_inner + p.cd_w * 0.5)) < p.cd_w
        and c.bounding_box().min.Z < g.z_gkf_horiz + p.sdk_t
        and c.bounding_box().max.Z > g.z_gkf_horiz - p.rost_d
    ]
    assert len(front_drops) >= 1
    # krov is roof timber only — soffit-frame latě use dreveny_rost.
    for part in _labeled(shape, "krov"):
        bb = part.bounding_box()
        assert not (bb.min.X >= g.x_furn - 1.0 and bb.max.Z <= g.z_gkf_horiz + 1.0)
    # Slope latě are // krokvím: thin in Y, long along the slope (X).
    slope_rost = [
        c
        for c in rost
        if c.bounding_box().min.X < 100.0 and c.bounding_box().max.X <= g.x_furn + 1.0
    ]
    assert len(slope_rost) >= 5
    assert all(c.bounding_box().size.Y < p.rost_spacing for c in slope_rost)
    assert all(c.bounding_box().size.X > 500.0 for c in slope_rost)
    # Soffit rost is a lattice (latě @625), not full-depth solid boards.
    soffit_rost = [
        c
        for c in rost
        if c.bounding_box().min.X >= g.x_nh_inner - 1.0
    ]
    assert len(soffit_rost) >= 10
    assert all(c.bounding_box().size.Y < p.rost_spacing for c in soffit_rost)
    # CD are ⊥ krokvím: thin along slope (X), long in Y.
    assert all(c.bounding_box().size.X < p.cd_spacing for c in cds)
    assert all(c.bounding_box().size.Y > 1000.0 for c in cds)
    # Horizontal CD + Nonius over the soffit bay (GKF lid → CD → rafters).
    horiz_cds = [c for c in cds if c.bounding_box().min.X >= g.x_furn - 1.0]
    assert len(horiz_cds) >= 2
    assert all(c.bounding_box().size.Y > 1000.0 for c in horiz_cds)
    soffit_hangers = [
        c
        for c in zaves
        if c.bounding_box().min.X >= g.x_furn - 1.0
        and c.bounding_box().min.Z >= g.z_gkf_horiz + p.sdk_t - 1.0
    ]
    assert len(soffit_hangers) >= 4
    # Soffit rost includes top rails under GKF + wall-braced underside latě.
    soffit_rost = [c for c in rost if c.bounding_box().min.X >= g.x_nh_inner - 1.0]
    assert len(soffit_rost) >= 15
    top_rails = [
        c
        for c in soffit_rost
        if c.bounding_box().min.Z >= g.z_gkf_horiz - p.rost_d - 2.0
        and c.bounding_box().size.X > 200.0
    ]
    assert len(top_rails) >= 5
    wall_braces = [
        c
        for c in zaves
        if c.bounding_box().min.X >= p.room_width - p.wall_plaster - p.wall_bracket_leg - 5.0
        and c.bounding_box().max.Z <= g.z_nabeh_bot + g.t_nh_face + p.wall_bracket_leg + 5.0
        and c.bounding_box().min.Z <= g.z_nabeh_bot + g.t_nh_face + 5.0
    ]
    assert len(wall_braces) >= 4


def test_soffit_hangs_from_cd_not_furniture_or_pozednice():
    """Soffit load path: krokve → Nonius → CD → drop hangers → rost (wall = brace only)."""
    p = ObyvakParams()
    g = build_layout(p)
    shape, _ = build(p)
    # No rost/CD/zaves share volume with furniture.
    furn = _labeled(shape, "nabytek")[0]
    for label in (LABEL_ROST, "cd", "zaves"):
        for part in _labeled(shape, label):
            if part.bounding_box().min.X < g.x_furn - 1.0:
                continue
            try:
                hit = part.intersect(furn)
            except Exception:
                continue
            if not hit:
                continue
            shapes = list(hit) if hasattr(hit, "__iter__") and not hasattr(hit, "volume") else [hit]
            vol = sum(float(getattr(s, "volume", 0) or 0) for s in shapes)
            assert vol <= 1.0, f"{label} intersects furniture"
    # Pozednice stays above the hang plane — not a hang point.
    for poz in _labeled(shape, "pozednice"):
        assert poz.bounding_box().min.Z >= p.eave_wall_z - 1.0
        assert poz.bounding_box().min.Z > g.z_gkf_horiz + 50.0


def test_soffit_scene_recipe():
    specs = scenes()
    assert len(specs) == 1
    s = specs[0]
    assert s["id"] == "soffit"
    assert s["label"] == "Soffit"
    assert s["projection"] == "ortho"
    assert s["opacityDefault"] == 0.5
    assert s["opacity"] == {
        LABEL_FLEX: 1,
        LABEL_NATURHELD: 1,
        LABEL_ROST: 1,
        "omitka": 1,
    }
    assert len(s["cuts"]) == 1
    assert s["cuts"][0]["t"] == 0.5
    # glTF −Z ← CAD +Y (length); half the room length removed from kitchen side.
    assert s["cuts"][0]["normal"] == [0.0, 0.0, -1.0]
    cam = s["camera"]
    assert cam["up"] == [0.0, 1.0, 0.0]  # glTF Y = CAD up
    assert len(cam["target"]) == 3
    assert len(cam["position"]) == 3
    # Look along −Z (kitchen → living); camera has larger Z than target.
    assert cam["position"][2] > cam["target"][2]
    assert abs(cam["position"][0] - cam["target"][0]) < 1e-9
    assert abs(cam["position"][1] - cam["target"][1]) < 1e-9
    assert len(cam["orthoFit"]) == 2
    assert cam["orthoFit"][0] > 0 and cam["orthoFit"][1] > 0
    # Target sits in the cabinet soffit bay (glTF metres).
    p = ObyvakParams()
    g = build_layout(p)
    tx, ty, tz = cam["target"]
    assert g.x_furn * 0.001 <= tx <= (g.x_furn + p.furniture_width) * 0.001
    assert g.z_nabeh_bot * 0.001 <= ty <= g.z_gkf_horiz * 0.001
    assert -g.y_furn1 * 0.001 <= tz <= -g.y_furn0 * 0.001
    # CAD (0,0,1000) height → glTF Y = 1.
    assert abs(cad_mm_to_gltf_m((0, 0, 1000))[1] - 1.0) < 1e-12
    assert abs(cad_mm_to_gltf_m((0, 1000, 0))[2] - (-1.0)) < 1e-12


def test_write_scenes_json(tmp_path):
    path = write_scenes_json("obyvak", scenes(), tmp_path / "obyvak.scenes.json")
    data = path.read_text(encoding="utf-8")
    assert '"soffit"' in data
    assert path.stat().st_size > 0


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
        LABEL_FLEX,
        "predstena",
        "pouzdro",
        "sdk",
        LABEL_NATURHELD,
        "sklo",
        LABEL_ROST,
        "cd",
        "zaves",
        "paska",
    ):
        assert name in labels
    assert "koruna" not in labels
    assert "podhled" not in labels
    assert "soffit" not in labels

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
    # Gable pocket SDK faces only (slope/lid GKF sit much higher).
    sdk_faces = sorted(
        [
            c
            for c in _labeled(shape, "sdk")
            if c.bounding_box().max.Z <= p.pocket_door_h + 1.0
        ],
        key=lambda s: s.bounding_box().min.Y,
    )
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
    assert sdk_faces[0].volume < full_sdk_vol * 0.9  # one kitchen door hole (chodba)
    assert sdk_faces[1].volume < full_sdk_vol * 0.75  # two living door holes (spíž + zádveří)
    # Předstěny depths immutable.
    assert p.predstena_kitchen == 190.0
    assert p.predstena_living == 450.0

    # Spíž on far gable (Y=L) with zádveří; chodba alone on near gable (Y=0).
    kitchen_doors = [d for d in p.pocket_doors if d[0] == "kitchen"]
    living_doors = sorted(
        [d for d in p.pocket_doors if d[0] == "living"], key=lambda d: d[1]
    )
    assert len(kitchen_doors) == 1
    assert len(living_doors) == 2
    assert kitchen_doors[0][1] == 0.0  # chodba · window corner · Y=0
    assert living_doors[0][1] == 0.0  # zádveří · window corner · Y=L
    assert abs(living_doors[1][1] - (p.room_width - p.pocket_spiz_inset - 1000.0)) < 1e-6
    kitchen_pouzdra = [part for part in pouzdra if part.bounding_box().max.Y < p.room_length / 2]
    living_pouzdra = [part for part in pouzdra if part.bounding_box().min.Y > p.room_length / 2]
    assert len(kitchen_pouzdra) == 1
    assert len(living_pouzdra) == 2
    # Explicit: pantry pouzdro is on the living/far gable, not kitchen/near.
    spiz = [
        part
        for part in living_pouzdra
        if part.bounding_box().min.X > p.room_width * 0.4
    ]
    assert len(spiz) == 1
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
    assert "soffit" not in sec_labels
    assert LABEL_FLEX in sec_labels
    assert LABEL_NATURHELD in sec_labels
    assert LABEL_ROST in sec_labels
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
