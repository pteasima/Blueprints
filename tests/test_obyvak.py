from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak import (  # noqa: E402
    FACE_GAP,
    build,
    build_elevation_slice,
    build_section_slice,
    part_groups,
    scenes,
)
from obyvak_geom import (  # noqa: E402
    LABEL_EPS,
    LABEL_FLOOR,
    LABEL_FURNITURE,
    LABEL_MASONRY,
    LABEL_PLASTER,
    LABEL_PLENUM_WOOL,
    LABEL_POCKET_FRAME,
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
    LABEL_WALL_GKF,
    LABEL_WALL_PLATE,
    LABEL_BASS_WOOL,
    LABEL_BASS_GKB,
    LABEL_BASS_CD,
    LABEL_BASS_HANGER,
    LABEL_GLAZING,
    PART_GROUPS,
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
    # Eave→ridge rise matches roof tan (same 40° as krytina / krokve).
    assert abs((g.z_gable_top(g.x_ridge) - g.z_gable_top(0.0)) / g.x_ridge - g.tan) < 1e-9
    # Crown polygon samples eaves so exterior corners do not flatten the rake.
    crown = g.gable_wall_pts(g.xl_mas, g.xr_mas, -p.floor_t)[2:]
    crown_xs = [x for x, _ in crown]
    assert 0.0 in crown_xs
    assert p.room_width in crown_xs
    assert g.x_ridge in crown_xs
    # Chord from clear-span eave to ridge stays at roof pitch (not the shallower
    # exterior-corner→ridge shortcut that used to read ~37°).
    i0 = crown_xs.index(0.0)
    ir = crown_xs.index(g.x_ridge)
    x0, z0 = crown[i0]
    xr, zr = crown[ir]
    assert abs((zr - z0) / (xr - x0) - g.tan) < 1e-9
    assert g.y_furn0 == p.predstena_kitchen
    assert g.y_furn1 == p.room_length - p.predstena_living
    assert p.roof_overhang == 80.0
    assert abs(g.left_eave - (g.xl_eps - p.roof_overhang)) < 1e-9
    assert abs(g.column_top_z - (p.eave_wall_z - p.venec_h)) < 1e-9
    assert g.eave_pier_spans() == [(3050.0, 3250.0), (7750.0, 7950.0)]
    assert g.eave_column_y_centres() == [3150.0, 7850.0]
    # Pozednice centred on masonry / věnec thickness.
    assert abs(g.poz_l0 + p.plate_w * 0.5 - (g.xl_mas + p.wall_mason * 0.5)) < 1e-9
    assert abs(g.poz_r0 + p.plate_w * 0.5 - (g.xr_int + p.wall_plaster + p.wall_mason * 0.5)) < 1e-9
    # Rafter underside seats on pozednice top at plate mid-X.
    x_bear = g.poz_l0 + p.plate_w * 0.5
    assert abs(g.z_raf(x_bear) - (p.eave_wall_z + p.plate_h)) < 1.0
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


def test_krov_is_discrete_rafters():
    """Krov = krokve 100/160 @ 875 mm (sheet E_KROK), not a solid timber slab."""
    p = ObyvakParams()
    g = build_layout(p)
    assert p.rafter_spacing == 875.0
    assert p.rafter_w == 100.0
    shape, _ = build(p)
    krovs = _labeled(shape, LABEL_RAFTERS)
    expected = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    assert len(krovs) == len(expected)
    assert len(krovs) >= 10
    for part in krovs:
        bb = part.bounding_box()
        assert abs(bb.size.Y - p.rafter_w) < 1e-3
        assert bb.size.X > p.room_width  # full A-frame eave↔eave
    # Neighbouring centres are ~875 mm apart.
    centers = sorted(c.bounding_box().center().Y for c in krovs)
    for a, b in zip(centers, centers[1:]):
        assert abs((b - a) - p.rafter_spacing) < 1.0


def test_sikminy_and_soffit_stack_in_3d():
    """Šikminy NH / rost // krokvím / CD ⊥ / Flex and soffit box."""
    p = ObyvakParams()
    g = build_layout(p)
    shape, _ = build(p)
    nh = _labeled(shape, LABEL_SLOPE_NH) + _labeled(shape, LABEL_SOFFIT_NH)
    flex = _labeled(shape, LABEL_SLOPE_FLEX) + _labeled(shape, LABEL_SOFFIT_FLEX)
    rost = _labeled(shape, LABEL_SLOPE_BATTENS) + _labeled(shape, LABEL_SOFFIT_BATTENS)
    cds = _labeled(shape, LABEL_SLOPE_CD) + _labeled(shape, LABEL_SOFFIT_CD)
    zaves = _labeled(shape, LABEL_SLOPE_NONIUS) + _labeled(shape, LABEL_SOFFIT_NONIUS)
    pasky = _labeled(shape, LABEL_RACKING_STRAP)
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
    furn = _labeled(shape, LABEL_FURNITURE)[0].bounding_box()
    assert box_nh.bounding_box().min.Z >= furn.max.Z + p.furniture_gap - 2.0
    # Ceiling GKF: horizontal lid + vertical return at rost front (continuous shell).
    lids = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_GKF) + _labeled(shape, LABEL_SLOPE_GKF)
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
    # Rafters are roof timber only — soffit-frame latě use *_battens.
    for part in _labeled(shape, LABEL_RAFTERS):
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
    # Šikminy pack runs wall-to-wall (bass traps sit under it, do not replace it).
    nh = _labeled(shape, LABEL_SLOPE_NH)
    assert any(c.bounding_box().size.Y > p.room_length - 10.0 for c in nh)
    # Soffit rost is a lattice (latě @625), not full-depth solid boards.
    soffit_rost = [
        c
        for c in rost
        if c.bounding_box().min.X >= g.x_nh_inner - 1.0
    ]
    assert len(soffit_rost) >= 10
    assert all(c.bounding_box().size.Y < p.rost_spacing for c in soffit_rost)
    # CD are ⊥ krokvím: thin along slope (X), long in Y (šikminy / soffit only).
    slope_cds = [c for c in cds if c.bounding_box().size.Y > 1000.0]
    assert slope_cds
    assert all(c.bounding_box().size.X < p.cd_spacing for c in slope_cds)
    # Horizontal CD + Nonius over the soffit bay (GKF lid → CD → rafters).
    horiz_cds = [c for c in slope_cds if c.bounding_box().min.X >= g.x_furn - 1.0]
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
    furn = _labeled(shape, LABEL_FURNITURE)[0]
    for label in (LABEL_SOFFIT_BATTENS, LABEL_SOFFIT_CD, LABEL_SOFFIT_NONIUS):
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
    for poz in _labeled(shape, LABEL_WALL_PLATE):
        assert poz.bounding_box().min.Z >= p.eave_wall_z - 1.0
        assert poz.bounding_box().min.Z > g.z_gkf_horiz + 50.0


def test_soffit_scene_recipe():
    specs = scenes()
    assert len(specs) == 4
    assert [s["id"] for s in specs] == [
        "soffit",
        "gable",
        "sikmina-lattice",
        "sikmina-section",
    ]
    s = specs[0]
    assert s["id"] == "soffit"
    assert "label" not in s or s.get("label") is None
    assert s["projection"] == "ortho"
    assert s["opacityDefault"] == 0.5
    assert s["opacity"] == {
        "soffit": 1,
        LABEL_PLASTER: 1,
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


def test_gable_scene_recipe():
    """Gable: ISO length cut framed on the full šikminy (not soffit-zoomed)."""
    specs = {s["id"]: s for s in scenes()}
    assert "gable" in specs
    s = specs["gable"]
    assert s["projection"] == "ortho"
    assert s["opacityDefault"] == 0.5
    assert s["opacity"] == {
        "slopes": 1,
        LABEL_PLASTER: 1,
    }
    assert len(s["cuts"]) == 1
    assert s["cuts"][0]["t"] == 0.5
    assert s["cuts"][0]["normal"] == [0.0, 0.0, -1.0]
    cam = s["camera"]
    assert cam["up"] == [0.0, 1.0, 0.0]
    # Look along −Z (kitchen → living); camera on the kitchen side.
    assert cam["position"][2] > cam["target"][2]
    assert abs(cam["position"][0] - cam["target"][0]) < 1e-9
    assert abs(cam["position"][1] - cam["target"][1]) < 1e-9
    assert cam["orthoFit"][0] > 0 and cam["orthoFit"][1] > 0
    p = ObyvakParams()
    g = build_layout(p)
    tx, ty, tz = cam["target"]
    # Target near room mid-width / mid-height of the pitched pack.
    assert 0.0 <= tx <= p.room_width * 0.001
    assert (p.furniture_height - 150.0) * 0.001 <= ty <= (p.ridge_z + 100.0) * 0.001
    assert -g.y_furn1 * 0.001 <= tz <= -g.y_furn0 * 0.001
    # Span covers both eaves (orthoFit half-widths in metres).
    assert cam["orthoFit"][0] * 2 > p.room_width * 0.001
    assert cam["orthoFit"][1] * 2 > (p.ridge_z - p.furniture_height) * 0.001
    # Distinct from Soffit zoom (wider framing).
    soffit_fit = specs["soffit"]["camera"]["orthoFit"]
    assert cam["orthoFit"][0] > soffit_fit[0]
    assert cam["orthoFit"][1] > soffit_fit[1]


def test_sikmina_drawing_scenes():
    """Lattice is head-on to the 40° face; section keeps the věnec and misses columns."""
    import math

    specs = {s["id"]: s for s in scenes()}
    p = ObyvakParams()
    g = build_layout(p)
    columns = g.eave_column_y_centres()

    lattice = specs["sikmina-lattice"]
    assert lattice["projection"] == "ortho"
    assert lattice["opacityDefault"] == 0
    assert lattice["opacity"][LABEL_SLOPE_BATTENS] == 1
    assert lattice["opacity"][LABEL_SLOPE_CD] == 1
    assert lattice["opacity"][LABEL_RAFTERS] == 1
    assert LABEL_MASONRY not in lattice["opacity"]
    assert LABEL_SLOPE_NH not in lattice["opacity"]
    assert LABEL_SLOPE_GKF not in lattice["opacity"]
    assert LABEL_ROOFING not in lattice["opacity"]
    assert len(lattice["cuts"]) == 3
    assert lattice["title"]["cs"].startswith("Šikmina")
    assert lattice["title"]["en"]
    assert lattice["project"] == "Obývák 1.02"
    up = lattice["camera"]["up"]
    assert abs(up[2]) < 1e-9
    assert up[0] > 0.5 and up[1] > 0.5
    cam = lattice["camera"]
    assert cam["position"][0] > cam["target"][0]
    assert cam["position"][1] < cam["target"][1]
    for cut in lattice["cuts"]:
        y = cut["anchor"][1]
        assert all(abs(y - c) > 400.0 for c in columns)
    texts = []
    for ann in lattice["annotations"]:
        if ann["kind"] == "dim" and "text" not in ann:
            continue
        assert "en" in ann["text"] and "cs" in ann["text"]
        texts.append(ann["text"]["cs"])
    assert any("625" in t for t in texts)
    assert any("krokev" in t.lower() or "Krokev" in t or "pozednici" in t for t in texts)

    section = specs["sikmina-section"]
    assert section["opacityDefault"] == 0
    assert section["opacity"]["slopes"] == 1
    assert section["opacity"][LABEL_MASONRY] == 1
    assert section["opacity"][LABEL_WALL_PLATE] == 1
    assert section["opacity"][LABEL_RAFTERS] == 1
    assert LABEL_FURNITURE not in section["opacity"]
    assert len(section["cuts"]) == 3
    assert section["camera"]["position"][2] > section["camera"]["target"][2]
    ys = []
    for cut in section["cuts"]:
        ys.append(cut["anchor"][1])
        assert all(abs(cut["anchor"][1] - c) > 400.0 for c in columns)
    assert any(abs(cut["anchor"][0] - g.x_ridge) < 1.0 for cut in section["cuts"])
    dims = [ann for ann in section["annotations"] if ann["kind"] == "dim"]
    assert len(dims) >= 2
    rafter_dims = []
    for dim in dims:
        dist = math.dist(dim["a"], dim["b"])
        rafter_dims.append(dist)
        y = dim["a"][1]
        assert all(abs(y - c) > 400.0 for c in columns)
    assert any(abs(d - p.rafter_t) < 1.0 for d in rafter_dims)
    assert any(abs(d - p.venec_h) < 1.0 for d in rafter_dims)
    joined = " ".join(
        ann["text"]["cs"] for ann in section["annotations"] if "text" in ann
    )
    assert "NaturHeld" in joined
    assert "pozednici" in joined or "Pozednice" in joined
    assert "40°" in joined
    assert "Nonius" in joined


def test_write_scenes_json(tmp_path):
    path = write_scenes_json("obyvak", scenes(), tmp_path / "obyvak.scenes.json")
    data = path.read_text(encoding="utf-8")
    assert '"soffit"' in data
    assert '"gable"' in data
    assert '"sikmina-lattice"' in data
    assert '"sikmina-section"' in data
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
        LABEL_FLOOR,
        LABEL_EPS,
        LABEL_MASONRY,
        LABEL_RAFTERS,
        LABEL_ROOFING,
        LABEL_PLENUM_WOOL,
        LABEL_FURNITURE,
        LABEL_SLOPE_FLEX,
        LABEL_SOFFIT_FLEX,
        LABEL_POCKET_FRAME,
        LABEL_SLOPE_GKF,
        LABEL_SOFFIT_GKF,
        LABEL_WALL_GKF,
        LABEL_SLOPE_NH,
        LABEL_SOFFIT_NH,
        LABEL_GLAZING,
        LABEL_SLOPE_BATTENS,
        LABEL_SOFFIT_BATTENS,
        LABEL_SLOPE_CD,
        LABEL_SOFFIT_CD,
        LABEL_SLOPE_NONIUS,
        LABEL_SOFFIT_NONIUS,
        LABEL_RACKING_STRAP,
        LABEL_BASS_WOOL,
        LABEL_BASS_GKB,
        LABEL_BASS_CD,
        LABEL_BASS_HANGER,
    ):
        assert name in labels
    assert "koruna" not in labels
    assert "venec" not in labels
    assert "column" not in labels
    assert "podhled" not in labels
    assert "predstena" not in labels  # replaced by layered bass-trap solids
    assert "sdk" not in labels
    assert "NaturHeld 140" not in labels

    # Columns are masonry: 100×100 in front of glass; 300×300 in front of cabinet wall.
    x_glass = g.xl_mas + (p.wall_mason - p.glass_t) / 2.0
    x_win_col = x_glass + p.glass_t
    x_furn_col0 = p.room_width - p.furn_column_size
    assert x_furn_col0 + p.furn_column_size == p.room_width  # hard against interior face
    win_cols = []
    furn_cols = []
    for c in _labeled(shape, LABEL_MASONRY):
        bb = c.bounding_box()
        if abs(bb.max.Z - g.column_top_z) > 2.0 and abs(bb.max.Z - (g.column_top_z - FACE_GAP)) > 2.0:
            continue
        if abs(bb.size.Y - p.window_column_size) < 2.0 and bb.min.X >= x_win_col - 2.0 and bb.max.X < 0.0:
            win_cols.append(c)
        # Entirely in the room, against the cabinet-wall plaster.
        if (
            abs(bb.size.Y - p.furn_column_size) < 2.0
            and abs(bb.size.X - (p.furn_column_size - FACE_GAP)) < 2.0
            and bb.max.X <= p.room_width + 1.0
            and bb.min.X >= x_furn_col0 - 2.0
        ):
            furn_cols.append(c)
    assert len(win_cols) == 2
    assert len(furn_cols) == 2
    for yc, col in zip(g.eave_column_y_centres(), sorted(win_cols, key=lambda s: s.bounding_box().min.Y), strict=True):
        bb = col.bounding_box()
        assert abs(bb.min.Y + bb.size.Y * 0.5 - yc) < 1.0
    for yc, col in zip(g.eave_column_y_centres(), sorted(furn_cols, key=lambda s: s.bounding_box().min.Y), strict=True):
        bb = col.bounding_box()
        assert abs(bb.min.Y + bb.size.Y * 0.5 - yc) < 1.0
        assert abs(bb.min.X - x_furn_col0) < 2.0
        assert bb.max.X <= p.room_width + 1.0  # not inside the wall

    # Bass traps: kitchen MW+GKB (190) and living GKB+MW (450).
    bass_wool = _labeled(shape, LABEL_BASS_WOOL)
    assert len(bass_wool) == 2
    kitchen_wool, living_wool = sorted(bass_wool, key=lambda s: s.bounding_box().min.Y)
    assert abs(kitchen_wool.bounding_box().min.Y - FACE_GAP) < 1e-6
    assert abs(kitchen_wool.bounding_box().size.Y - (p.bass_k_wool - 2 * FACE_GAP)) < 1.0
    assert abs(living_wool.bounding_box().max.Y - (p.room_length - FACE_GAP)) < 1e-6
    assert abs(living_wool.bounding_box().size.Y - (p.bass_l_wool - 2 * FACE_GAP)) < 1.0

    bass_gkb = [
        c
        for c in _labeled(shape, LABEL_BASS_GKB)
        if c.bounding_box().min.Z >= p.predstena_bottom_z - 1.0
        and c.bounding_box().size.Y < 30.0  # vertical membrane face (~12.5)
    ]
    assert len(bass_gkb) >= 2
    k_gkb, l_gkb = sorted(bass_gkb, key=lambda s: s.bounding_box().min.Y)[:2]
    assert abs(k_gkb.bounding_box().max.Y - (p.predstena_kitchen - FACE_GAP)) < 1.0
    assert abs(l_gkb.bounding_box().min.Y - (g.y_pred_r + FACE_GAP)) < 1.0
    # Short rear třmeny exist at both gables (no hangers into krov).
    bass_trmeny = _labeled(shape, LABEL_BASS_HANGER)
    assert len(bass_trmeny) >= 4
    bass_cd = _labeled(shape, LABEL_BASS_CD)
    assert len(bass_cd) >= 8  # rear+front at several X stations × 2 gables

    furn = _labeled(shape, LABEL_FURNITURE)[0].bounding_box()
    assert abs(furn.size.X - (p.furniture_width - FACE_GAP)) < 1e-6
    assert abs(furn.min.Y - (g.y_furn0 + FACE_GAP)) < 1e-6
    assert abs(furn.max.Y - (g.y_furn1 - FACE_GAP)) < 1e-6

    # Nominal layer thicknesses still present (minus interface clearance).
    eave_eps = [
        c
        for c in _labeled(shape, LABEL_EPS)
        if abs(c.bounding_box().size.X - (p.wall_eps - FACE_GAP)) < 1e-3
    ]
    assert eave_eps, "expected eave EPS strips with full insulation thickness"
    assert abs(eave_eps[0].bounding_box().size.X - (p.wall_eps - FACE_GAP)) < 1e-6

    gable_eps = [
        c
        for c in _labeled(shape, LABEL_EPS)
        if c.bounding_box().size.Y < p.wall_mason + p.wall_plaster + 1.0
    ]
    assert gable_eps == []

    pouzdra = sorted(_labeled(shape, LABEL_POCKET_FRAME), key=lambda s: (s.bounding_box().min.Y, s.bounding_box().min.X))
    assert len(pouzdra) == len(p.pocket_doors)
    # Gable pocket SDK faces only (slope/lid GKF sit much higher).
    sdk_faces = sorted(
        [
            c
            for c in _labeled(shape, LABEL_WALL_GKF)
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
    glass = _labeled(shape, LABEL_GLAZING)
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
        for c in _labeled(shape, LABEL_MASONRY)
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
    paths = export_shape(shape, "obyvak", formats=("step", "stl"))
    assert paths["step"].stat().st_size > 0
    assert paths["stl"].stat().st_size > 0
    assert "png" not in paths
    assert "svg" not in paths

    sec, _ = build_section_slice()
    sec_labels = {c.label for c in sec.children}
    assert LABEL_FURNITURE in sec_labels
    assert "soffit" not in sec_labels
    assert LABEL_SLOPE_FLEX in sec_labels
    assert LABEL_SLOPE_NH in sec_labels
    # Slice is snapped onto a krokev (875 grid); rost latě use 625 and may miss.
    assert LABEL_RAFTERS in sec_labels
    assert "predstena" not in sec_labels

    elev, _ = build_elevation_slice()
    elev_labels = {c.label for c in elev.children}
    assert "predstena" not in elev_labels
    assert LABEL_BASS_WOOL in elev_labels  # schematic trap massing at gables
    assert LABEL_WALL_GKF in elev_labels
    assert "koruna" not in elev_labels


def test_part_groups_tree():
    groups = part_groups()
    assert groups == PART_GROUPS
    ids = [g["id"] for g in groups]
    assert ids == ["shell", "slopes", "soffit", "bass_traps", "furniture"]
    leaf_ids = {c for g in groups for c in g["children"]}
    shape, _ = build()
    for label in {c.label for c in shape.children}:
        assert label in leaf_ids, label
