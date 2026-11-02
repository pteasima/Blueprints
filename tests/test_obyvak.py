from pathlib import Path
import sys

import pytest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

from obyvak import (  # noqa: E402
    FACE_GAP,
    bass_cd_centres,
    bass_soffit_stop_x,
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
    LABEL_SLOPE_LIGHT,
    LABEL_TIE_ROD,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_DIRECT,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_UD,
    LABEL_SOFFIT_WOOL,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
    LABEL_WALL_GKF,
    LABEL_WALL_PLATE,
    LABEL_BASS_WOOL,
    LABEL_BASS_GKB,
    LABEL_BASS_CW,
    LABEL_BASS_UW,
    LABEL_BASS_STRUT,
    LABEL_BASS_ANGLE,
    LABEL_BASS_ANCHOR,
    LABEL_BASS_TAPE,
    LABEL_BASS_ACRYLIC,
    LABEL_GLAZING,
    PART_GROUPS,
    ObyvakParams,
    TIE_LIGHT_ABOVE,
    TIE_LIGHT_PAIR,
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
    assert g.y_furn0 == p.predstena_living
    assert g.y_furn1 == p.room_length - p.predstena_kitchen
    assert abs((g.y_furn1 - g.y_furn0) - (p.room_length - p.predstena_kitchen - p.predstena_living)) < 1e-9
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
    # Slope board + foil + GKF. The soffit face is the thinner 40 mm board.
    assert p.naturheld_left == 100.0
    assert p.naturheld_right == 100.0
    assert p.soffit_naturheld_t == 40.0
    assert abs(g.t_nh_left - (p.finish_t + p.basic_t + p.naturheld_left)) < 1e-9
    assert abs(g.t_nh_right - (p.finish_t + p.basic_t + p.naturheld_right)) < 1e-9
    assert abs(g.t_gkf_room_right - g.t_gkf_room_left) < 1e-9
    assert abs(g.t_soffit_face - (p.finish_t + p.basic_t + p.soffit_naturheld_t)) < 1e-9
    assert abs(g.t_flex_pack - 0.0) < 1e-9
    assert abs(g.t_foil_outer_left - g.t_cd_outer_left - p.foil_t) < 1e-9
    assert g.wool_left > 0.0 and g.wool_right > g.wool_left
    # Kitchen wool stops 20 mm short of the back of the front CD.
    assert abs(p.bass_k_wool - 130.5) < 1e-9
    assert abs(p.bass_k_air - (p.cd_t + 20.0)) < 1e-9
    assert abs(p.bass_k_wool + p.bass_k_air + p.bass_k_gkb - p.predstena_kitchen) < 1e-9
    assert g.l_hanger_right > g.l_hanger_left
    assert abs(g.z_nabeh_bot - (p.furniture_height + p.furniture_gap)) < 1e-9
    assert g.x_nh_inner == g.x_furn + g.t_soffit_face
    # Ceiling CD module is 500 mm. 2 m / 2.5 m / 3 m boards end on a CD.
    assert p.cd_spacing == 500.0
    assert p.rost_spacing == 500.0
    assert p.cd_first_inset <= 100.0
    assert p.rost_first_inset <= 100.0
    for board_mm in (2000.0, 2500.0, 3000.0):
        assert abs(board_mm % p.cd_spacing) < 1e-6
    left_cds = [st for st in g.sikmina_cd_stations() if st[0] < g.x_false]
    assert left_cds
    assert abs(left_cds[0][0] / g.cos - p.cd_first_inset) < 1e-6
    assert left_cds[0][0] / g.cos <= 100.0
    # Right slope restarts at the false ridge: 90 mm, then even 500 mm steps.
    rights = [st for st in g.sikmina_cd_stations() if st[0] > g.x_false]
    alongs = [(st[0] - g.x_false) / g.cos for st in rights]
    assert alongs
    assert abs(alongs[0] - p.cd_first_inset) < 1e-6
    for a, b in zip(alongs, alongs[1:]):
        assert abs((b - a) - p.cd_spacing) < 1e-6
    board_end = g.right_slope_along_end()
    assert alongs[-1] + p.cd_w * 0.5 < board_end - 5.0
    assert alongs[-1] + p.cd_spacing + p.cd_w * 0.5 > board_end - 5.0
    bottom = rights[-1]
    quad = g.sikmina_cd_quad(*bottom)
    assert max(x for x, _z in quad) < g.gkf_end_room[0] - 5.0
    assert max(x for x, _z in quad) < g.x_soffit_cd_room - 50.0
    for a, b in zip(left_cds, left_cds[1:]):
        assert abs((b[0] - a[0]) / g.cos - p.cd_spacing) < 1.0
    # One 500 mm grid for the soffit CD studs. The bay does not start a second inset.
    slope_ys = g.sikmina_rost_y_stations(1.0, p.room_length - 1.0)
    soffit_ys = g.soffit_rost_y_stations(g.y_furn0 + 1.0, g.y_furn1 - 1.0, slope_ys)
    assert soffit_ys
    assert all(y in slope_ys for y in soffit_ys)
    restarted = g.sikmina_rost_y_stations(g.y_furn0 + 1.0, g.y_furn1 - 1.0)
    # Not a second inset at the předstěna. At 500 mm the two origins are 50 mm apart.
    assert soffit_ys[0] in slope_ys
    assert abs(soffit_ys[0] - restarted[0]) > 1.0
    # Slope NaturHeld runs to the vertical soffit face. The triangle above it,
    # under the lid, is one wool solid and stops at that face.
    wedge = g.soffit_wool_wedge_pts()
    assert len(wedge) == 3
    assert abs(max(x for x, _z in wedge) - g.x_furn) < 1e-6
    assert abs(max(z for _x, z in wedge) - g.z_soffit_lid) < 1e-6
    nh_pts = g.soffit_nh_pts()
    # Riser board is flat-topped under the lid now; the slope GKF bears on the lid.
    assert any(abs(x - g.x_nh_inner) < 1e-6 and abs(z - g.z_soffit_lid) < 1e-6 for x, z in nh_pts)
    assert any(abs(x - g.x_furn) < 1e-6 and abs(z - g.z_soffit_lid) < 1e-6 for x, z in nh_pts)
    assert max(z for _x, z in nh_pts) <= g.z_soffit_lid + 1e-6
    # Lattice still hangs at the rost. The gypsum joint is room-ward of that,
    # where the slope underside meets the lid — one CD cannot cover both lines.
    assert g.x_sdk_break == g.x_nh_inner
    assert g.x_sdk_break > g.x_furn
    # Slope GKF is cut level and bears on the lid top: no gap, no acrylic joint.
    lid_top = g.z_soffit_cd_bot
    assert abs(lid_top - (g.z_soffit_lid + p.soffit_lid_layers * p.sdk_t)) < 1e-6
    assert abs(g.gkf_end_room[1] - lid_top) < 1e-6
    assert abs(g.gkf_end_attic[1] - lid_top) < 1e-6
    # Lid widens to the lowered slope. The outer GKF contact is the old CD line, shifted.
    assert abs(g.x_gkf_kink - g.gkf_end_room[0]) < 1e-6
    assert g.x_gkf_kink < g.x_furn
    assert abs((g.x_soffit_cd_room - g.gkf_end_attic[0]) - 175.43) < 0.2
    assert abs(g.joint_overhang - (g.x_soffit_cd_room - g.gkf_end_room[0])) < 1e-6
    cds = g.horiz_cd_x_stations()
    assert cds == [g.x_soffit_cd]
    assert abs(g.x_soffit_cd - (g.x_soffit_cd_room + p.cd_w * 0.5)) < 1e-6
    # The slope/lid joint is open: no angle and no horizontal UD.
    # Equal boards: the GKF planes meet on the false ridge.
    assert abs(g.x_stack_joint - g.x_false) < 1e-6
    assert abs(
        g.plane_z(g.x_stack_joint, g.t_gkf_room_left, right=False)
        - g.plane_z(g.x_stack_joint, g.t_gkf_room_right, right=True)
    ) < 1e-6
    sdk = g.sikmina_sdk_pts()
    for a, b in zip(sdk, sdk[1:]):
        assert not (abs(a[0] - g.x_false) < 1e-6 and abs(b[0] - g.x_false) < 1e-6)
    sdk = g.sikmina_sdk_pts()
    assert any(abs(x - g.gkf_end_room[0]) < 1e-6 and abs(z - g.gkf_end_room[1]) < 1e-6 for x, z in sdk)
    assert any(abs(x - g.gkf_end_mid[0]) < 1e-6 and abs(z - g.gkf_end_mid[1]) < 1e-6 for x, z in sdk)
    # Road side carries 2x GKF; the outer layer ends at the same square end.
    sdk2 = g.sikmina_sdk2_pts()
    assert any(abs(x - g.gkf_end_attic[0]) < 1e-6 and abs(z - g.gkf_end_attic[1]) < 1e-6 for x, z in sdk2)
    assert abs(g.t_gkf_attic_right - g.t_gkf_room_right - 25.0) < 1e-6
    # CD planes meet at x_cd_joint with no step.
    assert abs(
        g.plane_z(g.x_cd_joint, g.t_gkf_attic_left, right=False)
        - g.plane_z(g.x_cd_joint, g.t_gkf_attic_right, right=True)
    ) < 1e-6
    # Left cavity is the 160 mm design target. Right is the deeper hang.
    assert abs(g.wool_left - 160.0) < 0.05
    assert 430.0 < g.wool_right < 445.0


def _overlap_volume(a, b) -> float:
    ba, bb = a.bounding_box(), b.bounding_box()
    if (
        min(ba.max.X, bb.max.X) <= max(ba.min.X, bb.min.X)
        or min(ba.max.Y, bb.max.Y) <= max(ba.min.Y, bb.min.Y)
        or min(ba.max.Z, bb.max.Z) <= max(ba.min.Z, bb.min.Z)
    ):
        return 0.0
    hit = a.intersect(b)
    if hit is None:
        return 0.0
    try:
        return float(hit.volume)
    except Exception:
        return 0.0


def test_tie_rods_and_slope_lights():
    """Six ø14 ties in every other bay, and five spot pairs on each slope."""
    p = ObyvakParams()
    g = build_layout(p)
    y0, y1 = FACE_GAP, p.room_length - FACE_GAP
    ys = g.tie_y_stations(y0, y1)
    raf = g.rafter_y_stations(y0, y1)
    half = p.rafter_w * 0.5
    assert p.tie_d == 14.0
    assert len(ys) == 6
    assert len(raf) == 13
    for a, b in zip(ys, ys[1:]):
        assert b - a == pytest.approx(2 * p.rafter_spacing)
    for y in ys:
        bay = next((a, b) for a, b in zip(raf, raf[1:]) if a + half < y < b - half)
        near = y - (bay[0] + half)
        far = (bay[1] - half) - y
        assert near == pytest.approx(p.tie_face_clear)
        assert near < far
    z = g.tie_axis_z(FACE_GAP)
    # Mid-plate (3250) is inside the ducts. The bar sits in the top of the plate.
    assert z > p.eave_wall_z + 0.5 * p.plate_h
    assert z < p.eave_wall_z + p.plate_h
    assert z > g.z_soffit_duct_crown() + 0.5 * p.tie_d + FACE_GAP - 1e-6
    light_ys = g.light_y_between_ties(ys)
    assert len(light_ys) == 5
    for y, a, b in zip(light_ys, ys, ys[1:]):
        assert y == pytest.approx(0.5 * (a + b))
    heads = g.light_contacts(y0, y1, FACE_GAP)
    assert len(heads) == 20
    assert sum(1 for h in heads if h[5] == "L") == 10
    assert sum(1 for h in heads if h[5] == "R") == 10
    # Pair centre is TIE_LIGHT_ABOVE above the tie; both heads stay above the bar.
    assert min(h[2] for h in heads) > z + 40.0
    assert abs(
        sum(h[2] for h in heads if h[5] == "L") / 10.0 - (z + TIE_LIGHT_ABOVE)
    ) < 1e-6

    shape, _ = build(p)
    rods = _labeled(shape, LABEL_TIE_ROD)
    lights = _labeled(shape, LABEL_SLOPE_LIGHT)
    assert len(rods) == 6
    assert len(lights) == 20
    x0, x1 = g.tie_x_ends(FACE_GAP)
    for rod, y in zip(sorted(rods, key=lambda s: s.bounding_box().center().Y), ys):
        bb = rod.bounding_box()
        assert bb.center().Y == pytest.approx(y)
        assert bb.size.Y == pytest.approx(p.tie_d, abs=0.05)
        assert bb.size.Z == pytest.approx(p.tie_d, abs=0.05)
        assert bb.size.X == pytest.approx(x1 - x0, abs=0.05)
        assert bb.min.Z > g.z_soffit_duct_crown() + FACE_GAP
        assert bb.max.Z < p.eave_wall_z + p.plate_h
    assert sum(1 for lit in lights if lit.bounding_box().center().X < g.x_ridge) == 10
    assert sum(1 for lit in lights if lit.bounding_box().center().X > g.x_ridge) == 10
    assert min(lit.bounding_box().min.Z for lit in lights) > z
    # Two heads of a pair sit side by side along the room, same point on the slope.
    left = [
        lit.bounding_box().center()
        for lit in lights
        if lit.bounding_box().center().X < g.x_ridge
    ]
    assert max(c.X for c in left) - min(c.X for c in left) < 0.5
    assert max(c.Z for c in left) - min(c.Z for c in left) < 0.5
    ys_l = sorted(c.Y for c in left)
    assert len(ys_l) == 10
    for i, centre in enumerate(light_ys):
        a, b = ys_l[2 * i], ys_l[2 * i + 1]
        assert b - a == pytest.approx(TIE_LIGHT_PAIR, abs=0.5)
        assert 0.5 * (a + b) == pytest.approx(centre)

    ducts = _labeled(shape, LABEL_SOFFIT_DUCT)
    rafters = _labeled(shape, LABEL_RAFTERS)
    boards = _labeled(shape, LABEL_SLOPE_NH)
    for rod in rods:
        for other in ducts + rafters:
            assert _overlap_volume(rod, other) < 1.0
    for lit in lights:
        for board in boards:
            assert _overlap_volume(lit, board) < 1.0

    ids = [s["id"] for s in scenes()]
    assert {"ties-front", "ties-plan", "ties-section"} <= set(ids)


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


def test_mineral_wool_fills_rafter_bays():
    """Mineral wool packs the 160 mm between krokve and stops under the vent."""
    from build123d import Box, Location

    p = ObyvakParams()
    g = build_layout(p)
    shape, _ = build(p)
    wool_parts = _labeled(shape, LABEL_PLENUM_WOOL)
    assert len(wool_parts) == 1
    wool = wool_parts[0]
    bb = wool.bounding_box()
    # Into the rafter depth at the ridge, still below the ventilation / tiles.
    assert bb.max.Z > g.z_raf(g.x_ridge) + p.rafter_t * 0.5
    assert bb.max.Z < g.z_raf_outer(g.x_ridge) + 0.5

    stations = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    x = 0.45 * g.x_false
    z_mid = 0.5 * (g.z_raf(x) + g.z_raf_outer(x))
    def _hit_volume(shape, xyz) -> float:
        hit = shape.intersect(Location(xyz) * Box(8, 8, 8))
        if hit is None:
            return 0.0
        solids = list(hit.solids()) if hasattr(hit, "solids") else [hit]
        return sum(float(s.volume) for s in solids if s is not None)

    y_bay = 0.5 * (stations[4] + stations[5])
    assert _hit_volume(wool, (x, y_bay, z_mid)) > 100.0
    # The krokev itself stays timber.
    assert _hit_volume(wool, (x, stations[4], z_mid)) < 1.0
    # The same bay runs out over both wall plates, from the plate top through
    # the rafter depth. One solid; the plate and the rafter stay clear.
    assert bb.min.X < g.poz_l0 + 20.0
    assert bb.max.X > g.poz_r0 + p.plate_w - 20.0
    for x_plate in (0.5 * (g.poz_l0 + g.poz_l0 + p.plate_w), 0.5 * (g.poz_r0 + g.poz_r0 + p.plate_w)):
        z_in = max(g.z_raf(x_plate), g.z_plate_top) + 40.0
        assert z_in < g.z_raf_outer(x_plate) - 10.0
        assert _hit_volume(wool, (x_plate, y_bay, z_in)) > 100.0
        assert _hit_volume(wool, (x_plate, y_bay, g.z_plate_top - 20.0)) < 1.0
        assert _hit_volume(wool, (x_plate, stations[4], z_in)) < 1.0


def test_plenum_fill_hangers_and_vent():
    """Wool depths stay as solved, the vent stays empty, and hangers fit the stock."""
    import math

    from build123d import Box, Location

    p = ObyvakParams()
    g = build_layout(p)
    assert g.z_soffit_lid == p.eave_wall_z + p.plate_h - p.sdk_t
    assert abs(g.wool_left - (g.t_left - g.t_foil_outer_left)) < 1e-6
    assert abs(g.wool_right - (g.t_right - g.t_foil_outer_right)) < 1e-6
    assert abs(g.wool_left - p.wool_below_left) < 0.05
    assert 430.0 < g.wool_right < 445.0

    def _lengths():
        found = []
        for st in g.sikmina_cd_stations():
            xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
            if not g.sikmina_cd_in_span(xs, st[0]):
                continue
            quad = g.hanger_quad(*st)
            (x0, z0), (x1, z1) = quad[1], quad[2]
            side = "L" if st[0] <= g.x_stack_joint else "R"
            found.append((side, math.hypot(x1 - x0, z1 - z0)))
        return found

    hangs = _lengths()
    left = [n for side, n in hangs if side == "L"]
    right = [n for side, n in hangs if side == "R"]
    assert left and right
    assert all(150.0 < n < 170.0 for n in left)
    # 200 mm leg reaches the underside. The spare folds up the rafter cheek
    # and stays below the rafter top, clear of the 40 mm vent.
    assert all(0.0 < 200.0 - n < p.rafter_t for n in left)
    assert all(420.0 < n < 450.0 for n in right)
    xc = g.horiz_cd_x_stations()[0]
    soffit_drop = g.horiz_hanger_top_z(xc) - g.horiz_hanger_bot_z()
    assert soffit_drop < 440.0

    shape, _ = build(p)
    wool = _labeled(shape, LABEL_PLENUM_WOOL)[0]

    def _hit_volume(xyz) -> float:
        hit = wool.intersect(Location(xyz) * Box(8, 8, 8))
        if hit is None:
            return 0.0
        solids = list(hit.solids()) if hasattr(hit, "solids") else [hit]
        return sum(float(s.volume) for s in solids if s is not None)

    stations = g.rafter_y_stations(FACE_GAP, p.room_length - FACE_GAP)
    y_bay = 0.5 * (stations[4] + stations[5])
    x_right = 0.5 * (g.x_ridge + g.x_furn)
    z_foil = g.z_slope_offset(x_right, g.t_foil_outer)
    mid = 0.5 * g.l_hanger_right
    gap_pt = (x_right + g.sin * mid, y_bay, z_foil + g.cos * mid)
    assert _hit_volume(gap_pt) > 100.0
    # 15 mm above the rafter top is inside the 40 mm vent on both slopes.
    for x in (0.45 * g.x_false, x_right):
        vent_pt = (x, y_bay, g.z_raf_outer(x) + 15.0)
        assert _hit_volume(vent_pt) < 1.0


def test_sikminy_and_soffit_stack_in_3d():
    """Šikminy NH screwed to CD, and the soffit box with mineral wool and its rost."""
    p = ObyvakParams()
    g = build_layout(p)
    shape, _ = build(p)
    nh = _labeled(shape, LABEL_SLOPE_NH) + _labeled(shape, LABEL_SOFFIT_NH)
    wool = _labeled(shape, LABEL_SOFFIT_WOOL)
    rost = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_CD)
        if c.bounding_box().size.Y < 500.0
    ]
    cds = _labeled(shape, LABEL_SLOPE_CD) + _labeled(shape, LABEL_SOFFIT_CD)
    zaves = _labeled(shape, LABEL_SLOPE_NONIUS) + _labeled(shape, LABEL_SOFFIT_NONIUS)
    direct = _labeled(shape, LABEL_SLOPE_DIRECT)
    assert direct
    assert all(c.bounding_box().center().X <= g.x_stack_joint + 5.0 for c in direct)
    # The eave CD is in the wall UD. No direct hanger remains inside the wall.
    assert all(c.bounding_box().min.X >= -1.0 for c in direct)
    slope_nonius = _labeled(shape, LABEL_SLOPE_NONIUS)
    assert slope_nonius
    assert all(c.bounding_box().center().X >= g.x_false - 1.0 for c in slope_nonius)
    # First Nonius past the false ridge must use the true gap along the attic
    # normal (not the face-X underestimate) — otherwise it looks like a Direct.
    first_nonius = min(slope_nonius, key=lambda c: c.bounding_box().center().X)
    fn = first_nonius.bounding_box()
    assert (fn.size.X ** 2 + fn.size.Z ** 2) ** 0.5 > 250.0
    pasky = _labeled(shape, LABEL_RACKING_STRAP)
    assert len(nh) >= 2  # slope NH + soffit L
    assert len(wool) >= 2  # soffit cavity plus the one triangle under the lid
    assert len(rost) >= 8  # soffit CD studs only; the slope has none
    assert "soffit_battens" not in {c.label for c in shape.children}
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
    # NaturHeld stops 3 mm off the wall for the acrylic bead, so the lowest
    # corner sits a few millimetres above the room-face datum.
    assert abs(slope_nh.bounding_box().min.Z - g.h_start) < 6.0
    # Soffit box underside clears the cabinets by furniture_gap.
    box_nh = max(nh, key=lambda s: s.bounding_box().min.X)
    assert abs(box_nh.bounding_box().min.Z - (g.z_nabeh_bot + FACE_GAP)) < 2.0
    assert box_nh.bounding_box().min.Z >= p.furniture_height + p.furniture_gap - 1.0
    furn = _labeled(shape, LABEL_FURNITURE)[0].bounding_box()
    assert box_nh.bounding_box().min.Z >= furn.max.Z + p.furniture_gap - 2.0
    # Slope GKF bears on the lid: its lowest point is the lid top, up to the CD.
    slope_boards = _labeled(shape, LABEL_SLOPE_GKF)
    assert slope_boards
    slope_board = max(slope_boards, key=lambda s: s.bounding_box().max.X)
    assert abs(slope_board.bounding_box().max.X - g.gkf_end_attic[0]) < 8.0
    assert g.x_soffit_cd_room - slope_board.bounding_box().max.X > 150.0
    assert abs(slope_board.bounding_box().min.Z - g.z_soffit_cd_bot) < 2.0
    horiz_lids = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_GKF)
        if c.bounding_box().size.Z < p.sdk_t + 1.0 and c.bounding_box().size.X > 100.0
    ]
    assert len(horiz_lids) == p.soffit_lid_layers
    for lid in horiz_lids:
        assert abs(lid.bounding_box().size.Z - (p.sdk_t - 2 * FACE_GAP)) < 1e-3
        assert abs(lid.bounding_box().min.X - (g.x_gkf_kink + FACE_GAP)) < 2.0
    risers = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_GKF)
        if c.bounding_box().size.X < p.sdk_t + 2.0
    ]
    assert risers == []
    # Last slope CD stays inside one module of the open joint, clear of the lid.
    slope_carriers = [
        c
        for c in cds
        if c.bounding_box().max.X < g.x_gkf_kink and c.bounding_box().max.Z > g.z_soffit_lid
    ]
    assert slope_carriers
    last_cd = max(slope_carriers, key=lambda c: c.bounding_box().max.X)
    assert (g.x_gkf_kink - last_cd.bounding_box().max.X) / g.cos < p.cd_spacing
    soffit_cd_parts = _labeled(shape, LABEL_SOFFIT_CD)
    assert soffit_cd_parts
    # The lid CD is centred over the vertical CD, so it may reach past the NH face.
    assert min(c.bounding_box().min.X for c in soffit_cd_parts) >= g.x_soffit_cd_room - 1.0
    assert abs(g.x_soffit_cd - (g.x_nh_inner + p.cd_t * 0.5)) < 1e-6
    ud_track = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_UD)
        if c.bounding_box().size.Y > 1000.0 and c.bounding_box().min.X < g.x_furn
    ]
    assert ud_track == []
    brackets = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_UD)
        if c.bounding_box().size.Y < 80.0
    ]
    assert brackets == []
    from build123d import Box, Location

    ex, ez = g.gkf_end_room
    ax, az = g.gkf_end_mid
    # Level cut: probe just above the bearing line on the lid.
    probe = Location((0.5 * (ex + ax), p.room_length * 0.5, 0.5 * (ez + az) + 4.0)) * Box(6.0, 30.0, 4.0)
    pieces = []
    for board in slope_boards:
        hit = board.intersect(probe)
        pieces += list(hit.solids()) if hit is not None and hasattr(hit, "solids") else []
    assert pieces, "slope board has no thickness at the square end"
    # Mates pull 1 mm off each face, so the solid reads a little under 12.5.
    thick = max(s.bounding_box().size.Z for s in pieces)
    assert thick > 3.0, thick
    # Front soffit CD where the outer slope GKF plane meets the lid top.
    front_cds = [
        c
        for c in cds
        if abs(c.bounding_box().min.X - g.x_soffit_cd_room) < 2.0
        and c.bounding_box().min.Z >= g.z_soffit_lid + p.sdk_t - 2.0
    ]
    assert len(front_cds) >= 1
    # Drop hangers exist at the front CD (box hangs at lattice edge, not mid-bay only).
    front_drops = [
        c
        for c in zaves
        if abs(c.bounding_box().center().X - g.x_soffit_cd) < p.cd_w
        and c.bounding_box().min.Z < g.z_soffit_lid + p.sdk_t
        and c.bounding_box().max.Z > g.z_soffit_lid
    ]
    assert len(front_drops) >= 1
    # Rafters are roof timber only — the kastlík frame is CD/UD.
    for part in _labeled(shape, LABEL_RAFTERS):
        bb = part.bounding_box()
        assert not (bb.min.X >= g.x_furn - 1.0 and bb.max.Z <= g.z_gkf_horiz + 1.0)
    # Šikminy pack runs wall-to-wall (bass traps sit under it, do not replace it).
    nh = _labeled(shape, LABEL_SLOPE_NH)
    assert any(c.bounding_box().size.Y > p.room_length - 10.0 for c in nh)
    # Soffit rost is a CD lattice (@500), not full-depth solid boards.
    soffit_rost = [
        c
        for c in rost
        if c.bounding_box().min.X >= g.x_nh_inner - 1.0
    ]
    assert len(soffit_rost) >= 10
    assert all(c.bounding_box().size.Y < p.rost_spacing for c in soffit_rost)
    verticals = [
        c
        for c in soffit_rost
        if c.bounding_box().size.Z > 400.0 and c.bounding_box().size.X < p.cd_t + 5.0
    ]
    assert verticals
    vertical_ys = sorted(c.bounding_box().center().Y for c in verticals)
    for a, b in zip(vertical_ys, vertical_ys[1:]):
        assert abs((b - a) - p.rost_spacing) < 1.0
    assert all(abs(c.bounding_box().size.X - (p.cd_t - FACE_GAP)) < 1.5 for c in verticals)
    uds = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_UD)
        if c.bounding_box().max.X > p.room_width - 80.0
    ]
    assert len(uds) == 1
    ud = uds[0].bounding_box()
    assert ud.size.Y > 1000.0
    assert abs(ud.size.X - (p.ud_w - FACE_GAP)) < 1.0
    assert abs(ud.size.Z - (p.cd_t - FACE_GAP)) < 1.0
    # CD are ⊥ krokvím: thin along slope (X), long in Y (šikminy / soffit only).
    slope_cds = [c for c in cds if c.bounding_box().size.Y > 1000.0]
    assert slope_cds
    assert all(c.bounding_box().size.X < p.cd_spacing for c in slope_cds)
    # First slope CD is the 90 mm eave axis, not the next module.
    eave_cd = min(slope_cds, key=lambda c: c.bounding_box().min.X)
    assert eave_cd.bounding_box().min.X < 50.0
    assert eave_cd.bounding_box().min.X >= g.x_gkf_end_l - 1.0
    # One horizontal CD + Nonius over the soffit bay (GKF lid → rost CD → rafters).
    rost_x = g.x_soffit_cd
    horiz_cds = [c for c in slope_cds if c.bounding_box().min.X >= g.x_furn - 1.0]
    assert len(horiz_cds) == 1
    assert abs(horiz_cds[0].bounding_box().center().X - rost_x) < 2.0
    assert horiz_cds[0].bounding_box().size.Y > 1000.0
    soffit_hangers = [
        c
        for c in zaves
        if c.bounding_box().min.X >= g.x_furn - 1.0
        and c.bounding_box().min.Z >= g.z_soffit_lid + p.sdk_t - 1.0
    ]
    assert len(soffit_hangers) >= 4
    assert all(abs(c.bounding_box().center().X - rost_x) < p.cd_w for c in soffit_hangers)
    # Bottom CDs run to the wall UD. No second horizontal row under the ducts.
    soffit_rost = [c for c in rost if c.bounding_box().min.X >= g.x_nh_inner - 1.0]
    assert len(soffit_rost) >= 15
    top_rails = [
        c
        for c in soffit_rost
        if abs(c.bounding_box().max.Z - g.z_soffit_rail()) < 3.0
        and c.bounding_box().size.X > 200.0
    ]
    assert top_rails == []
    wall_braces = [
        c
        for c in zaves
        if c.bounding_box().min.X >= p.room_width - p.wall_plaster - p.wall_bracket_leg - 5.0
        and c.bounding_box().max.Z <= g.z_nabeh_bot + g.t_soffit_face + p.wall_bracket_leg + 5.0
        and c.bounding_box().min.Z <= g.z_nabeh_bot + g.t_soffit_face + 5.0
    ]
    assert len(wall_braces) >= 4


def test_soffit_hangs_from_cd_not_furniture_or_pozednice():
    """Soffit load path: krokve → Nonius → CD → drop hangers → rost (wall = brace only)."""
    p = ObyvakParams()
    g = build_layout(p)
    shape, _ = build(p)
    # No rost/CD/zaves share volume with furniture.
    furn = _labeled(shape, LABEL_FURNITURE)[0]
    for label in (LABEL_SOFFIT_CD, LABEL_SOFFIT_UD, LABEL_SOFFIT_NONIUS):
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
        assert poz.bounding_box().min.Z > g.z_gkf_horiz + 10.0


def test_soffit_ducts_sit_under_lid_on_wall_plate():
    """Three Ø160 pipes under the GKF; the board ends on the pozednice, not the plaster."""
    p = ObyvakParams()
    g = build_layout(p)
    shape, _ = build(p)
    ducts = _labeled(shape, LABEL_SOFFIT_DUCT)
    assert len(ducts) == 3
    r = p.duct_od * 0.5
    for duct in ducts:
        bb = duct.bounding_box()
        assert abs(bb.size.X - p.duct_od) < 1.0
        assert abs(bb.size.Z - p.duct_od) < 1.0
        # Warm side of the lid, clear of the column heads.
        assert bb.max.Z < g.z_soffit_lid - 5.0
        assert bb.min.Z > g.column_top_z + 10.0
        assert bb.max.X < p.room_width - 4.0
        assert bb.min.X > g.x_nh_inner + p.cd_t + 5.0
    # 2-over-1: two crowns at the same height, one nested below.
    crowns = sorted(d.bounding_box().max.Z for d in ducts)
    assert abs(crowns[1] - crowns[2]) < 1.0
    assert crowns[0] < crowns[1] - r
    lids = [
        c
        for c in _labeled(shape, LABEL_SOFFIT_GKF)
        if c.bounding_box().size.Z < p.sdk_t + 1.0 and c.bounding_box().size.X > 100.0
    ]
    assert len(lids) == p.soffit_lid_layers
    lids = sorted(lids, key=lambda c: c.bounding_box().min.Z)
    # Bottom layer top flush with the plate; the next layers stack on the attic side.
    assert abs(lids[0].bounding_box().max.Z - (g.z_plate_top - FACE_GAP)) < 1.0
    assert abs(lids[-1].bounding_box().max.Z - (g.z_soffit_cd_bot - FACE_GAP)) < 1.0
    lid = lids[0].bounding_box()
    assert lid.min.Z > p.eave_wall_z + 50.0
    assert abs(lid.max.X - (g.poz_r0 - FACE_GAP)) < 1.0
    assert lid.max.X > p.room_width
    # Plate is the edge fix, still not a rost hang point.
    for poz in _labeled(shape, LABEL_WALL_PLATE):
        if poz.bounding_box().min.X < p.room_width:
            continue
        assert poz.bounding_box().min.Z > g.z_soffit_rail()


def test_soffit_scene_recipe():
    specs = scenes()
    assert [s["id"] for s in specs][:4] == [
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
    assert g.z_nabeh_bot * 0.001 <= ty <= g.z_soffit_lid * 0.001
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
    """Lattice is head-on to the window slope; section shows both slopes and the soffit."""
    specs = {s["id"]: s for s in scenes()}
    p = ObyvakParams()
    g = build_layout(p)
    columns = g.eave_column_y_centres()

    lattice = specs["sikmina-lattice"]
    assert lattice["projection"] == "ortho"
    assert lattice["opacityDefault"] == 0
    assert lattice["opacity"][LABEL_SLOPE_CD] == 1
    assert lattice["opacity"][LABEL_SLOPE_DIRECT] == 1
    assert lattice["opacity"][LABEL_RAFTERS] == 1
    assert LABEL_MASONRY not in lattice["opacity"]
    assert LABEL_SLOPE_NH not in lattice["opacity"]
    assert "slope_naturheld_flex_50" not in lattice["opacity"]
    assert "slope_battens" not in lattice["opacity"]
    assert lattice["opacity"][LABEL_SLOPE_GKF] == 0.35
    assert LABEL_ROOFING not in lattice["opacity"]
    assert len(lattice["cuts"]) == 3
    assert lattice["title"]["cs"].startswith("Šikmina")
    assert lattice["title"]["en"].startswith("Šikmina")
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
    assert any("500" in t for t in texts)
    assert not any("625" in t for t in texts)
    assert any("krokv" in t.lower() for t in texts)
    assert any("60×27 mm" in t for t in texts)
    assert any("200 mm" in t for t in texts)
    assert any("3631100170" in t for t in texts)
    assert any("40×2 mm" in t for t in texts)
    assert not any("pozednic" in t.lower() or "věnc" in t.lower() for t in texts)

    # Lattice callouts also share a left column (outside → in, top → bottom).
    lat_callouts = [a for a in lattice["annotations"] if a["kind"] == "callout"]
    assert len(lat_callouts) == 3
    import math

    from blueprints.scenes import cad_mm_to_gltf_m

    up = lattice["camera"]["up"]
    lx = lattice["camera"]["target"][0] - lattice["camera"]["position"][0]
    ly = lattice["camera"]["target"][1] - lattice["camera"]["position"][1]
    lz = lattice["camera"]["target"][2] - lattice["camera"]["position"][2]
    ln = math.sqrt(lx * lx + ly * ly + lz * lz) or 1.0
    look_n = (lx / ln, ly / ln, lz / ln)
    hw, hh = lattice["camera"]["orthoFit"]
    target = lattice["camera"]["target"]

    label_ndc = []
    for ann in lat_callouts:
        gx, gy, gz = cad_mm_to_gltf_m(ann["anchor"])
        dx, dy, dz = gx - target[0], gy - target[1], gz - target[2]
        rx = look_n[1] * up[2] - look_n[2] * up[1]
        ry = look_n[2] * up[0] - look_n[0] * up[2]
        rz = look_n[0] * up[1] - look_n[1] * up[0]
        sx = (dx * rx + dy * ry + dz * rz) / hw
        sy = (dx * up[0] + dy * up[1] + dz * up[2]) / hh
        label_ndc.append((sx + ann["offset"][0] * 2, sy + ann["offset"][1] * 2))
    assert max(x for x, _ in label_ndc) - min(x for x, _ in label_ndc) < 0.05
    assert all(-0.75 < x < -0.35 for x, _ in label_ndc)
    by_y = [
        a["text"]["en"].split("\n")[0]
        for a, _ in sorted(
            zip(lat_callouts, label_ndc), key=lambda pair: pair[1][1], reverse=True
        )
    ]
    assert by_y[0].startswith("Páska")
    assert by_y[-1].startswith("CD")
    assert any(t.startswith("Přímý závěs") for t in by_y)

    section = specs["sikmina-section"]
    assert section["opacityDefault"] == 0
    assert "slopes" not in section["opacity"]
    assert section["opacity"][LABEL_MASONRY] == 1
    assert section["opacity"][LABEL_WALL_PLATE] == 1
    assert section["opacity"][LABEL_RAFTERS] == 1
    assert "slope_battens" not in section["opacity"]
    assert section["opacity"][LABEL_SLOPE_CD] == 1
    assert section["opacity"][LABEL_SLOPE_DIRECT] == 1
    assert section["opacity"][LABEL_SOFFIT_UD] == 1
    assert "soffit_battens" not in section["opacity"]
    assert section["opacity"][LABEL_SOFFIT_CD] == 1
    assert section["opacity"][LABEL_SOFFIT_NONIUS] == 1
    wool = 0.18
    board = 0.35
    assert section["opacity"][LABEL_PLENUM_WOOL] == wool
    assert section["opacity"][LABEL_SLOPE_NH] == wool
    assert "slope_naturheld_flex_50" not in section["opacity"]
    assert section["opacity"][LABEL_SOFFIT_NH] == wool
    assert section["opacity"][LABEL_SOFFIT_WOOL] == wool
    assert section["opacity"][LABEL_SLOPE_GKF] == board
    assert section["opacity"][LABEL_SOFFIT_GKF] == board
    assert LABEL_FURNITURE not in section["opacity"]
    assert len(section["cuts"]) == 2
    assert section["title"]["en"].startswith("Šikmina")
    assert section["title"]["cs"].startswith("Šikmina")
    assert section["camera"]["position"][2] > section["camera"]["target"][2]
    # Both slopes: the frame reaches the cabinet eave, and nothing cuts at the ridge.
    assert section["camera"]["orthoFit"][0] > (g.x_ridge * 0.001)
    for cut in section["cuts"]:
        assert all(abs(cut["anchor"][1] - c) > 400.0 for c in columns)
        assert abs(cut["normal"][0]) < 1e-9
    assert not any(abs(cut["anchor"][0] - g.x_ridge) < 1.0 for cut in section["cuts"])
    dims = [ann for ann in section["annotations"] if ann["kind"] == "dim"]
    assert dims == []
    joined = " ".join(
        ann["text"]["cs"] for ann in section["annotations"] if "text" in ann
    )
    assert "NaturHeld 140, 100 mm" in joined
    assert "přes GKF → CD" in joined or "přes GKF" in joined
    assert "Jutafol N AL 170 Speciál" in joined
    assert "GKF 12,5 mm" in joined
    assert "Vario" not in joined
    assert "Flex" not in joined
    assert "λ 0,039" in joined
    assert "mezi krokvemi" in joined and "160 mm" in joined
    assert "plénum" not in joined.lower()
    joined_en = " ".join(
        ann["text"]["en"] for ann in section["annotations"] if "text" in ann
    )
    assert "λ 0,039" in joined_en
    assert "mezi krokvemi" in joined_en and "160 mm" in joined_en
    assert "NaturHeld 140, 100 mm" in joined_en
    assert "Jutafol N AL 170 Speciál" in joined_en
    assert "Parozábrana" in joined_en
    assert "GKF 12,5 mm" in joined_en
    assert "přes GKF" in joined_en
    assert "plenum" not in joined_en.lower()
    assert "Nonius" in joined
    assert "200 mm" in joined
    assert "3631100170" in joined
    assert "540 mm" in joined
    # StoSilent must not own the through-GKF note.
    for ann in section["annotations"]:
        if ann.get("kind") != "callout":
            continue
        en = ann["text"]["en"]
        if "StoSilent" in en and "NaturHeld" not in en:
            assert "přes GKF" not in en
    low = joined.lower()
    assert "přesah" not in low and "overhang" not in low
    assert "pozednic" not in low and "wall plate" not in low
    assert "věnc" not in low and "páska" not in low and "strap" not in low
    assert "40°" not in joined
    assert "soffit" not in low and "podhled" not in low

    # Outside→in column: shared screen-X, tip Y = label Y (horizontal leaders).
    callouts = [ann for ann in section["annotations"] if ann["kind"] == "callout"]
    assert len(callouts) == 6
    label_xs = []
    label_ys = []
    tip_ys = []
    hw, hh = section["camera"]["orthoFit"]
    target = section["camera"]["target"]
    from blueprints.scenes import cad_mm_to_gltf_m

    for ann in callouts:
        gx, gy, _ = cad_mm_to_gltf_m(ann["anchor"])
        ndc_x = (gx - target[0]) / hw
        ndc_y = (gy - target[1]) / hh
        lx = ndc_x + ann["offset"][0] * 2
        ly = ndc_y + ann["offset"][1] * 2
        label_xs.append(lx)
        label_ys.append(ly)
        tip_ys.append(ndc_y)
        # Horizontal leader: label Y matches tip Y.
        assert abs(ly - ndc_y) < 0.02
    assert max(label_xs) - min(label_xs) < 0.05
    assert all(-0.8 < x < -0.45 for x in label_xs)
    # Top of column is outside (wool near ridge); bottom is room face (NaturHeld).
    order = [t.split("\n")[0] for t in (a["text"]["en"] for a in callouts)]
    by_y = [t for _, t in sorted(zip(label_ys, order), reverse=True)]
    assert by_y[0].startswith("Minerální vata")
    assert by_y[1].startswith("Přímý závěs")
    assert by_y[2].startswith("Parozábrana")
    assert by_y[-1].startswith("NaturHeld 140")
    assert any(t.startswith("GKF") for t in by_y)
    # Direct + Nonius share one note and one leader.
    hang = next(a for a in callouts if a["text"]["en"].startswith("Přímý závěs"))
    assert "Nonius" in hang["text"]["en"]
    assert hang["anchor"][0] < g.x_false
    assert "tips" not in hang
    # Tips walk down the slope — label Ys are spread, not stacked on one tip.
    assert max(tip_ys) - min(tip_ys) > 0.25
    assert section["opacity"][LABEL_SOFFIT_DUCT] == 1
    assert section["opacity"]["slope_foil"] == board


def test_bass_trap_scenes_keep_the_vertical_lattice():
    """Viewer scenes and plates describe the model as it is: vertical studs, no flip."""
    import math

    specs = {s["id"]: s for s in scenes()}
    assert [
        "bass-kitchen",
        "bass-living",
        "bass-kitchen-elevation",
        "bass-kitchen-section",
        "bass-living-elevation",
        "bass-living-section",
    ] == [s["id"] for s in scenes() if s["id"].startswith("bass-")]

    p = ObyvakParams()
    x_stop = bass_soffit_stop_x(p)
    x_furn = p.room_width - p.furniture_width
    studs = bass_cd_centres(x_stop, 625.0, p.bass_cw_w, FACE_GAP)
    assert len(studs) == 9
    assert abs((x_furn - 4375.0) - 525.0) < 1e-6

    def cam_mm(spec):
        x, y_up, z = spec["camera"]["position"]
        return (x / 0.001, -z / 0.001, y_up / 0.001)

    for side, depth, spacing, n_studs, cw in (
        ("kitchen", 190.0, 625.0, 9, 50.0),
        ("living", 450.0, 625.0, 9, 125.0),
    ):
        view = specs[f"bass-{side}"]
        assert view["projection"] == "ortho"
        assert view["opacityDefault"] == 0
        assert view["opacity"][LABEL_BASS_GKB] < 0.25
        assert view["opacity"][LABEL_BASS_CW] == 1
        assert view["opacity"][LABEL_BASS_STRUT] == 1
        assert "bass_wall_hanger" not in view["opacity"]
        assert view["opacity"][LABEL_BASS_WOOL] < 1
        assert view["title"]["en"].startswith(
            "Štít kuchyně" if side == "kitchen" else "Štít obýváku"
        )
        assert "svislé" in view["title"]["en"]
        assert "svislé" in view["title"]["cs"]
        assert f"{spacing:g}" in view["title"]["en"]
        # Cut opens an early stud and keeps the soffit end. The other gable is behind the camera.
        assert any(c["normal"] == [1.0, 0.0, 0.0] and c["anchor"][0] == studs[2] for c in view["cuts"])
        cx, cy, _cz = cam_mm(view)
        assert cx < studs[2]
        if side == "living":
            assert cy < p.room_length * 0.5
            assert view["camera"]["target"][2] > -1.0  # glTF Z = −CAD Y, living end
        else:
            assert cy > p.room_length * 0.5
            assert view["camera"]["target"][2] < -p.room_length * 0.0005

        elev = specs[f"bass-{side}-elevation"]
        assert elev["opacity"][LABEL_BASS_GKB] == 0
        assert elev["opacity"][LABEL_BASS_CW] == 1
        assert elev["opacity"][LABEL_BASS_UW] == 1
        assert elev["opacityDefault"] == 0
        joined = " ".join(a["text"]["en"] for a in elev["annotations"] if "text" in a)
        joined_cs = " ".join(a["text"]["cs"] for a in elev["annotations"] if "text" in a)
        assert "svisle" in joined
        assert "svisle" in joined_cs
        assert f"{n_studs} stojek @ {spacing:g}" in joined
        assert f"CW {cw:g}" in joined
        assert "525 mm" in joined
        assert "podhled" in joined
        assert "horizontal stud" not in joined.lower()
        dims = [a for a in elev["annotations"] if a["kind"] == "dim"]
        dim_text = " ".join(a["text"]["en"] for a in dims)
        assert f"{spacing:g} mm" in dim_text
        assert "525 mm" in dim_text
        if side == "kitchen":
            assert "1100 mm" in dim_text and "1000 mm" in dim_text
        else:
            assert "1000 mm" in dim_text

        section = specs[f"bass-{side}-section"]
        assert section["opacity"][LABEL_BASS_GKB] == 1
        assert len(section["cuts"]) == 2
        sec_text = " ".join(a["text"]["en"] for a in section["annotations"] if "text" in a)
        if side == "kitchen":
            assert "130,5 mm" in sec_text and "47 mm" in sec_text and "190 mm" in sec_text
            assert section["cuts"][0]["anchor"][0] == 2500.0
        else:
            assert "300 mm" in sec_text and "137,5 mm" in sec_text and "450 mm" in sec_text
            assert section["cuts"][0]["anchor"][0] == 2500.0
        assert "250 mm" in sec_text and "12,5 mm" in sec_text

        # Callouts share one column and stay on the plate.
        callouts = [a for a in elev["annotations"] if a["kind"] == "callout"]
        hw, hh = elev["camera"]["orthoFit"]
        aspect = 2400 / 1697
        if hw < hh * aspect:
            hw = hh * aspect
        elif hh < hw / aspect:
            hh = hw / aspect
        target = elev["camera"]["target"]
        pos = elev["camera"]["position"]
        look = (target[0] - pos[0], target[1] - pos[1], target[2] - pos[2])
        ln = math.sqrt(sum(v * v for v in look)) or 1.0
        look = tuple(v / ln for v in look)
        up = tuple(elev["camera"]["up"])
        label_x = []
        for ann in callouts:
            gx, gy, gz = cad_mm_to_gltf_m(ann["anchor"])
            dx, dy, dz = gx - target[0], gy - target[1], gz - target[2]
            rx = look[1] * up[2] - look[2] * up[1]
            ry = look[2] * up[0] - look[0] * up[2]
            rz = look[0] * up[1] - look[1] * up[0]
            sx = (dx * rx + dy * ry + dz * rz) / hw
            sy = (dx * up[0] + dy * up[1] + dz * up[2]) / hh
            lx = sx + ann["offset"][0] * 2
            ly = sy + ann["offset"][1] * 2
            label_x.append(lx)
            assert -0.82 < lx < 0.82
            assert -0.7 < ly < 0.7
        assert max(label_x) - min(label_x) < 0.05


def test_write_scenes_json(tmp_path):
    path = write_scenes_json("obyvak", scenes(), tmp_path / "obyvak.scenes.json")
    data = path.read_text(encoding="utf-8")
    assert '"soffit"' in data
    assert '"gable"' in data
    assert '"sikmina-lattice"' in data
    assert '"sikmina-section"' in data
    assert '"bass-kitchen"' in data
    assert '"bass-living"' in data
    assert '"bass-kitchen-elevation"' in data
    assert '"bass-living-section"' in data
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
        LABEL_SOFFIT_WOOL,
        LABEL_POCKET_FRAME,
        LABEL_SLOPE_GKF,
        LABEL_SOFFIT_GKF,
        LABEL_WALL_GKF,
        LABEL_SLOPE_NH,
        LABEL_SOFFIT_NH,
        LABEL_GLAZING,
        LABEL_SOFFIT_UD,
        LABEL_SLOPE_CD,
        LABEL_SOFFIT_CD,
        LABEL_SLOPE_NONIUS,
        LABEL_SOFFIT_NONIUS,
        LABEL_RACKING_STRAP,
        LABEL_BASS_WOOL,
        LABEL_BASS_GKB,
        LABEL_BASS_CW,
        LABEL_BASS_UW,
        LABEL_BASS_STRUT,
        LABEL_BASS_ANGLE,
        LABEL_BASS_ANCHOR,
        LABEL_BASS_ACRYLIC,
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

    # Bass traps: living MW at Y=0 (450) and kitchen MW at Y=L (190).
    bass_wool = _labeled(shape, LABEL_BASS_WOOL)
    assert len(bass_wool) == 2
    living_wool, kitchen_wool = sorted(bass_wool, key=lambda s: s.bounding_box().min.Y)
    assert abs(living_wool.bounding_box().min.Y - FACE_GAP) < 1e-6
    assert abs(living_wool.bounding_box().size.Y - (p.bass_l_wool - 2 * FACE_GAP)) < 1.0
    assert abs(kitchen_wool.bounding_box().max.Y - (p.room_length - FACE_GAP)) < 1e-6
    assert abs(kitchen_wool.bounding_box().size.Y - (p.bass_k_wool - 2 * FACE_GAP)) < 1.0

    bass_gkb = [
        c
        for c in _labeled(shape, LABEL_BASS_GKB)
        if c.bounding_box().min.Z >= p.predstena_bottom_z - 1.0
        and c.bounding_box().size.Y < 30.0  # vertical membrane face (~12.5)
    ]
    assert len(bass_gkb) >= 2
    l_gkb, k_gkb = sorted(bass_gkb, key=lambda s: s.bounding_box().min.Y)[:2]
    assert abs(l_gkb.bounding_box().max.Y - (p.predstena_living - FACE_GAP)) < 1.0
    assert abs(k_gkb.bounding_box().min.Y - (g.y_pred_r + FACE_GAP)) < 1.0
    # Wall struts, no třmeny and no hangers into the slopes.
    assert not _labeled(shape, "bass_wall_hanger")
    assert not _labeled(shape, "bass_cd")
    assert len(_labeled(shape, LABEL_BASS_STRUT)) >= 8
    assert len(_labeled(shape, LABEL_BASS_CW)) == 18

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
    assert sdk_faces[0].volume < full_sdk_vol * 0.9  # one living door hole at Y=0
    assert sdk_faces[1].volume < full_sdk_vol * 0.75  # two kitchen door holes at Y=L
    # Předstěny depths immutable.
    assert p.predstena_kitchen == 190.0
    assert p.predstena_living == 450.0

    # Two kitchen doors stay on Y=L; the single living door stays on Y=0.
    kitchen_doors = sorted(
        [d for d in p.pocket_doors if d[0] == "kitchen"], key=lambda d: d[1]
    )
    living_doors = [d for d in p.pocket_doors if d[0] == "living"]
    assert len(kitchen_doors) == 2
    assert len(living_doors) == 1
    assert living_doors[0][1] == 0.0 and living_doors[0][2] == 1000.0
    assert kitchen_doors[0][1] == 0.0 and kitchen_doors[0][2] == 1100.0
    assert abs(kitchen_doors[1][1] - (p.room_width - p.pocket_spiz_inset - 1000.0)) < 1e-6
    assert kitchen_doors[1][2] == 1000.0
    living_pouzdra = [part for part in pouzdra if part.bounding_box().max.Y < p.room_length / 2]
    kitchen_pouzdra = [part for part in pouzdra if part.bounding_box().min.Y > p.room_length / 2]
    assert len(living_pouzdra) == 1
    assert len(kitchen_pouzdra) == 2
    # The cabinet-eave opening stays on the far (kitchen) gable.
    far_opening = [
        part
        for part in kitchen_pouzdra
        if part.bounding_box().min.X > p.room_width * 0.4
    ]
    assert len(far_opening) == 1
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
        # Lintel sits on the opening head. The ring beam stays at column_top_z.
        y_mid = y0 + width * 0.5
        lintel_bottom = [
            part.bounding_box().min.Z
            for part in _labeled(shape, LABEL_MASONRY)
            if part.bounding_box().min.Y <= y_mid <= part.bounding_box().max.Y
            and part.bounding_box().max.X < 0.0
            and part.bounding_box().min.Z < g.column_top_z - 1.0
            and part.bounding_box().max.Z > p.window_h
        ]
        assert lintel_bottom, (y0, width)
        assert abs(min(lintel_bottom) - (p.window_h + FACE_GAP)) <= 0.5
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
            # Soffit Nonius rods pierce the vapour brake on purpose (taped grommet),
            # screws are driven into what they fix, and the bass-trap anchor is
            # set into the plaster and the Ytong.
            wall = {LABEL_PLASTER, LABEL_MASONRY}
            labels = {a.label, b.label}
            if labels == {"slope_foil", "soffit_nonius"} or "joint_screw" in labels:
                continue
            if "bass_anchor" in labels and labels & wall:
                continue
            if vol > 1.0:  # mm³
                violations.append((a.label, b.label, round(vol, 1)))
    assert violations == [], sorted({(a, b) for a, b, _v in violations})


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
    assert LABEL_SOFFIT_WOOL in sec_labels
    assert "slope_naturheld_flex_50" not in sec_labels
    assert "slope_battens" not in sec_labels
    assert LABEL_SLOPE_NH in sec_labels
    # Slice is snapped onto a krokev (875 grid); soffit CD studs use 500 and may miss.
    assert LABEL_RAFTERS in sec_labels
    assert "predstena" not in sec_labels

    elev, _ = build_elevation_slice()
    elev_labels = {c.label for c in elev.children}
    assert LABEL_TIE_ROD in elev_labels  # ridge cut sees each tie as a circle
    assert "predstena" not in elev_labels
    assert LABEL_BASS_WOOL in elev_labels  # schematic trap massing at gables
    assert LABEL_WALL_GKF in elev_labels
    assert "koruna" not in elev_labels


def test_soffit_acoustics_ignore_the_steel_section():
    """CD/UD replaces the timber latě. Side face 40 mm board; underside is GKB 12.5."""
    from blueprints.acoustics.obyvak import room_geometry

    geom = room_geometry()
    assert geom.soffit_board == 0.04
    assert abs(geom.soffit - 10.459723420146625) < 1e-6
    assert abs(geom.soffit_wool_depth - 0.47910580837556743) < 1e-9
    assert abs(geom.soffit_under_fraction - 0.45001189906549344) < 1e-9
    assert abs(geom.soffit_air_depth - 0.32589419162443256) < 1e-9


def test_default_gable_lattices_and_as_built_wool():
    """Both traps are vertical CW @ 625. Wool stays 130.5 and 300."""
    p = ObyvakParams()
    assert abs(p.bass_k_wool - 130.5) < 1e-9
    assert abs(p.bass_k_air - 47.0) < 1e-9
    assert abs(p.bass_l_wool - 300.0) < 1e-9
    assert abs(p.bass_l_air - 137.5) < 1e-9
    assert p.bass_k_cw == 50.0 and p.bass_l_cw == 125.0
    x_stop = bass_soffit_stop_x(p)
    x_furn = p.room_width - p.furniture_width
    studs = bass_cd_centres(x_stop, 625.0, p.bass_cw_w, FACE_GAP)
    assert studs[1:-1] == [625.0, 1250.0, 1875.0, 2500.0, 3125.0, 3750.0, 4375.0]
    assert abs(studs[0] - (p.bass_cw_w * 0.5 + FACE_GAP)) < 1e-6
    assert abs(studs[-1] - (x_stop - p.bass_cw_w * 0.5 - FACE_GAP)) < 1e-6
    assert abs(x_furn - 4375.0 - 525.0) < 1e-6
    assert len(studs) == 9

    shape, _ = build(p)
    cws = _labeled(shape, LABEL_BASS_CW)

    def vertical_xs(side: str) -> list[float]:
        xs = []
        for part in cws:
            bb = part.bounding_box()
            if side == "kitchen" and bb.min.Y < p.room_length * 0.5:
                continue
            if side == "living" and bb.max.Y > p.room_length * 0.5:
                continue
            xs.append(round(bb.center().X, 1))
        return sorted(set(xs))

    assert vertical_xs("kitchen") == [round(x, 1) for x in studs]
    assert vertical_xs("living") == [round(x, 1) for x in studs]
    kitchen_stud = next(part for part in cws if part.bounding_box().min.Y > p.room_length * 0.5)
    wool = next(part for part in _labeled(shape, LABEL_BASS_WOOL) if part.bounding_box().min.Y > p.room_length * 0.5)
    # CW 50 notches about 3 mm into the 130.5 mm wool; the bay air stays 47 mm.
    bite = kitchen_stud.bounding_box().max.Y - wool.bounding_box().min.Y
    assert 0.0 < bite < 6.0

    # Mid-height struts reach the wall (tape + gap), not the UW flange.
    # A bent angle sits there and an anchor continues into the block.
    tab_t, tab_return = 2.0, 20.0
    y_steel_l = FACE_GAP + p.bass_tape_t
    y_bar_l = y_steel_l + tab_t + tab_return + FACE_GAP
    y_steel_k = p.room_length - FACE_GAP - p.bass_tape_t
    y_bar_k = y_steel_k - tab_t - tab_return - FACE_GAP
    mason_l = -p.wall_plaster - FACE_GAP
    mason_k = p.room_length + p.wall_plaster + FACE_GAP

    def on_side(part, side: str) -> bool:
        bb = part.bounding_box()
        if side == "kitchen":
            return bb.min.Y > p.room_length * 0.5
        return bb.max.Y < p.room_length * 0.5

    for side, y_bar, y_steel, mason_face, into_room in (
        ("living", y_bar_l, y_steel_l, mason_l, 1.0),
        ("kitchen", y_bar_k, y_steel_k, mason_k, -1.0),
    ):
        bars = [s.bounding_box() for s in _labeled(shape, LABEL_BASS_STRUT) if on_side(s, side)]
        angles = [s.bounding_box() for s in _labeled(shape, LABEL_BASS_ANGLE) if on_side(s, side)]
        anchors = [s.bounding_box() for s in _labeled(shape, LABEL_BASS_ANCHOR) if on_side(s, side)]
        assert bars and angles and anchors
        assert len(angles) == len(anchors)
        if into_room > 0:
            full = [bb for bb in bars if bb.min.Y < y_bar + 2.0]
            assert full and all(abs(bb.min.Y - y_bar) < 1.0 for bb in full)
            assert any(abs(bb.min.Y - y_steel) < 0.6 for bb in angles)
            assert all(bb.min.Y < mason_face - 50.0 for bb in anchors)
            assert all(bb.max.Y < 0.0 for bb in anchors)
        else:
            full = [bb for bb in bars if bb.max.Y > y_bar - 2.0]
            assert full and all(abs(bb.max.Y - y_bar) < 1.0 for bb in full)
            assert any(abs(bb.max.Y - y_steel) < 0.6 for bb in angles)
            assert all(bb.max.Y > mason_face + 50.0 for bb in anchors)
            assert all(bb.min.Y > p.room_length for bb in anchors)

    # The lining stops at the soffit face. Only the acrylic bead enters the gap.
    solid_labels = (
        LABEL_BASS_GKB,
        LABEL_BASS_WOOL,
        LABEL_BASS_CW,
        LABEL_BASS_UW,
        LABEL_BASS_STRUT,
        LABEL_BASS_TAPE,
    )
    for label in solid_labels:
        for part in _labeled(shape, label):
            assert part.bounding_box().max.X <= x_stop + 0.05, label
    for part in _labeled(shape, LABEL_BASS_ACRYLIC):
        assert part.bounding_box().max.X <= x_furn - FACE_GAP + 0.05
    for side in ("kitchen", "living"):
        beads = []
        for part in _labeled(shape, LABEL_BASS_ACRYLIC):
            bb = part.bounding_box()
            if side == "kitchen" and bb.min.Y < p.room_length * 0.5:
                continue
            if side == "living" and bb.max.Y > p.room_length * 0.5:
                continue
            if bb.min.X >= x_stop - 0.1 and bb.size.Z > 200.0:
                beads.append(bb)
        assert len(beads) == 1
        bb = beads[0]
        assert abs(bb.size.X - p.bass_acrylic) < 0.2
        assert bb.min.X >= x_stop + FACE_GAP - 0.05
        assert bb.max.X <= x_furn - FACE_GAP + 0.05



def test_shallow_trap_is_on_the_two_door_gable():
    """The 190 mm trap (wool 130.5 / air 47) sits on the gable with two sliding doors."""
    p = ObyvakParams()
    assert p.pocket_door_h <= p.predstena_bottom_z
    kitchen = [d for d in p.pocket_doors if d[0] == "kitchen"]
    living = [d for d in p.pocket_doors if d[0] == "living"]
    assert len(kitchen) == 2
    assert len(living) == 1
    # Openings stay at the coordinates already in the model.
    assert sorted((d[1], d[2]) for d in kitchen) == [(0.0, 1100.0), (3700.0, 1000.0)]
    assert (living[0][1], living[0][2]) == (0.0, 1000.0)

    shape, _ = build(p)
    wool = _labeled(shape, LABEL_BASS_WOOL)
    shallow = min(wool, key=lambda s: s.bounding_box().size.Y)
    deep = max(wool, key=lambda s: s.bounding_box().size.Y)
    assert abs(shallow.bounding_box().size.Y - (p.bass_k_wool - 2 * FACE_GAP)) < 1.0
    assert abs(deep.bounding_box().size.Y - (p.bass_l_wool - 2 * FACE_GAP)) < 1.0
    assert shallow.bounding_box().min.Y > p.room_length * 0.5
    assert deep.bounding_box().max.Y < p.room_length * 0.5

    pouzdra = _labeled(shape, LABEL_POCKET_FRAME)

    def far(part) -> bool:
        return part.bounding_box().min.Y > p.room_length * 0.5

    assert sum(1 for part in pouzdra if far(part)) == 2
    assert sum(1 for part in pouzdra if not far(part)) == 1
    assert far(shallow)
    sdk = [
        c
        for c in _labeled(shape, LABEL_WALL_GKF)
        if c.bounding_box().max.Z <= p.pocket_door_h + 1.0
    ]
    two_door_face = next(c for c in sdk if far(c))
    one_door_face = next(c for c in sdk if not far(c))
    assert two_door_face.volume < one_door_face.volume


def test_part_groups_tree():
    groups = part_groups()
    assert groups == PART_GROUPS
    ids = [g["id"] for g in groups]
    assert ids == ["shell", "slopes", "soffit", "bass_traps", "furniture"]
    leaf_ids = {c for g in groups for c in g["children"]}
    shape, _ = build()
    for label in {c.label for c in shape.children}:
        assert label in leaf_ids, label


def test_drawings_are_cut_from_the_3d_model():
    """Every drawn face in every obyvák drawing is a section of a 3D solid.

    No drawing module may build its own geometry: the faces carry the label of
    a GLB solid, and a point inside each face lies inside a solid of that label.
    """
    import ast
    from pathlib import Path

    from build123d import Vector

    import obyvak
    import obyvak_elevation
    import obyvak_eave_left
    import obyvak_joint
    import obyvak_section

    models = Path(__file__).resolve().parents[1] / "models"
    banned = {"xz_face", "xz_rect", "xz_line", "xz_polyline", "xz_ngon"}
    for name in ("obyvak_section", "obyvak_elevation", "obyvak_joint", "obyvak_eave_left", "obyvak_detail"):
        tree = ast.parse((models / f"{name}.py").read_text(encoding="utf-8"))
        used = {n.id for n in ast.walk(tree) if isinstance(n, ast.Name)} | {
            n.attr for n in ast.walk(tree) if isinstance(n, ast.Attribute)
        }
        assert not (used & banned), (name, used & banned)
        calls = {
            n.func.attr
            for n in ast.walk(tree)
            if isinstance(n, ast.Call) and isinstance(n.func, ast.Attribute)
        }
        assert not any(c.endswith("_pts") or c.endswith("_quads") for c in calls), (name, calls)

    p = ObyvakParams()
    solids = obyvak.model_parts(p)
    by_label: dict = {}
    for s in solids:
        by_label.setdefault(s.label, []).append(s)
    y_cut = obyvak.section_y(p)

    def inside_any(label, pt) -> bool:
        return any(s.is_inside(pt, tolerance=0.5) for s in by_label.get(label, []))

    def interior_point(face):
        verts, tris = face.tessellate(0.5)
        a, b, c = (verts[k] for k in max(tris, key=lambda t: (verts[t[1]] - verts[t[0]]).cross(verts[t[2]] - verts[t[0]]).length))
        return (a + b + c) / 3.0

    sec, _ = obyvak_section.build(p)
    for mod in (obyvak_joint, obyvak_eave_left):
        det, _ = mod.build(p)
        assert {c.label for c in det.children} <= {c.label for c in sec.children}
    for face in sec.children:
        assert face.label in by_label, face.label
        q = interior_point(face)
        at_cut = inside_any(face.label, Vector(q.X, y_cut, q.Z))
        seen = any(
            s.is_inside(Vector(q.X, 0.5 * (s.bounding_box().min.Y + s.bounding_box().max.Y), q.Z), tolerance=0.5)
            for s in by_label[face.label]
        )
        assert at_cut or seen, (face.label, q)
    elev, meta = obyvak_elevation.build(p)
    x_cut = meta["derived"]["x_cut"]
    for face in elev.children:
        assert face.label in by_label, face.label
        q = interior_point(face)
        assert inside_any(face.label, Vector(x_cut, q.X, q.Z)), (face.label, q)


def test_left_eave_note_is_one_gkf_layer():
    """The left slope is a single GKF layer; the detail must not say 2x."""
    import obyvak_eave_left

    notes = [text for *_skip, text in obyvak_eave_left.notes()]
    assert any(text == "1× GKF 12,5 končí v UD" for text in notes)
    assert not any("2x GKF" in text for text in notes)
