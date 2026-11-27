"""Gable bass-trap (předstěna) solids and lattice helpers."""

from __future__ import annotations

import math

from obyvak_geom import (
    LABEL_BASS_ACRYLIC,
    LABEL_BASS_ANCHOR,
    LABEL_BASS_ANGLE,
    LABEL_BASS_CW,
    LABEL_BASS_GKB,
    LABEL_BASS_STRUT,
    LABEL_BASS_TAPE,
    LABEL_BASS_UW,
    LABEL_BASS_WOOL,
    ObyvakLayout,
    ObyvakParams,
    xz_face,
)

from .solids import FACE_GAP, _aabb_hit, _box, _cut_away, _cyl_y, _extrude_y, _paint


def _predstena_outline(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list[tuple[float, float]]:
    """XZ outline of the gable bass-trap box (bottom @ 2450 → underside of ceiling)."""
    pts = []
    for i, (x, z) in enumerate(g.predstena_pts()):
        x = min(max(x, gap), p.room_width - gap)
        z = z + gap if i < 2 else z - gap
        pts.append((x, z))
    return pts


def bass_cd_centres(length: float, spacing: float, profile_w: float, gap: float) -> list[float]:
    """CD centres on the make-up grid, kept inside the gable.

    Screw lines match the acoustic lattice: a profile at the start, then exact
    modules, then one make-up bay at the far edge. A 60 mm CD cannot sit on the
    wall line, so each end profile moves in by half its width.
    """
    if spacing <= 1.0 or length <= 1.0:
        raise ValueError("length and spacing must be positive")
    half = profile_w * 0.5
    lo = half + gap
    hi = length - half - gap
    if hi <= lo:
        return []
    lines = [0.0]
    x = spacing
    while x < length - 0.5:
        lines.append(x)
        x += spacing
    if length - lines[-1] > 0.5:
        lines.append(length)
    centres: list[float] = []
    for line in lines:
        centre = min(max(line, lo), hi)
        if centres and centre - centres[-1] < profile_w * 0.75:
            continue
        centres.append(centre)
    return centres


def bass_soffit_stop_x(p: ObyvakParams) -> float:
    """X where the trap solids end, short of the soffit face by the acrylic bead.

    The soffit face is the vertical NH at the cabinet line (``x_furn``). The
    bead occupies the gap; the frame, board and wool stay on the room side of it.
    """
    x_furn = p.room_width - p.furniture_width
    return x_furn - p.bass_acrylic - 2.0 * FACE_GAP


def _down_normal(x0: float, z0: float, x1: float, z1: float) -> tuple[float, float]:
    """Unit normal of a ceiling segment, pointing downward."""
    dx, dz = x1 - x0, z1 - z0
    span = math.hypot(dx, dz) or 1.0
    nx, nz = -dz / span, dx / span
    if nz > 0.0:
        nx, nz = -nx, -nz
    return nx, nz


def _band_below(
    x0: float, z0: float, x1: float, z1: float, near: float, far: float
) -> list[tuple[float, float]]:
    """Quad under a segment, offset `near` then `far` along the downward normal."""
    nx, nz = _down_normal(x0, z0, x1, z1)
    return [
        (x0 + nx * near, z0 + nz * near),
        (x1 + nx * near, z1 + nz * near),
        (x1 + nx * far, z1 + nz * far),
        (x0 + nx * far, z0 + nz * far),
    ]


def _offset_open(path: list[tuple[float, float]], dist: float) -> list[tuple[float, float]]:
    """Move an open polyline by ``dist`` along the downward bisector."""
    if len(path) < 2:
        return list(path)
    normals = [_down_normal(a[0], a[1], b[0], b[1]) for a, b in zip(path, path[1:])]
    out = []
    for i, (x, z) in enumerate(path):
        if i == 0:
            nx, nz = normals[0]
        elif i == len(path) - 1:
            nx, nz = normals[-1]
        else:
            nx = normals[i - 1][0] + normals[i][0]
            nz = normals[i - 1][1] + normals[i][1]
            scale = math.hypot(nx, nz) or 1.0
            nx, nz = nx / scale, nz / scale
        out.append((x + nx * dist, z + nz * dist))
    return out


def _ceiling_segments(g: ObyvakLayout, x_stop: float) -> list[tuple[float, float, float, float]]:
    """Top of the trap, left to right: window eave, false ridge, soffit stop.

    The cabinet bay (past the soffit face) is not part of the trap.
    """
    path = [
        (0.0, g.h_start),
        (g.x_false, g.z_false),
        (x_stop, g.z_ceil(x_stop)),
    ]
    return [
        (a[0], a[1], b[0], b[1])
        for a, b in zip(path, path[1:])
        if math.hypot(b[0] - a[0], b[1] - a[1]) > 1.0
    ]


def _strut_centres(z0: float, z1: float, bar: float, max_step: float) -> list[float]:
    """1/3 and 2/3 of the stud, plus a head fixing, with no gap over ``max_step``.

    Short studs keep a single mid strut. The head bar is how the top of the
    stud bears on the wall track instead of on the slope.
    """
    height = z1 - z0
    margin = bar * 0.5 + 2.0
    if height < bar + 20.0:
        return []
    lo, hi = z0 + margin, z1 - margin
    if hi <= lo:
        return []
    if height <= max_step:
        raw = [0.5 * (z0 + z1)]
    else:
        raw = [z0 + height / 3.0, z0 + 2.0 * height / 3.0, hi]
        # Extra bars if a third of a tall stud would still exceed the step.
        guard = 0
        while guard < 6:
            guard += 1
            pts = [z0, *sorted(raw), z1]
            widest = max(range(len(pts) - 1), key=lambda i: pts[i + 1] - pts[i])
            gap = pts[widest + 1] - pts[widest]
            if gap <= max_step + 1.0:
                break
            raw.append(0.5 * (pts[widest] + pts[widest + 1]))
    out: list[float] = []
    for z in sorted(raw):
        z = min(max(z, lo), hi)
        if out and z - out[-1] < bar + 30.0:
            continue
        out.append(z)
    return out


def _clip_span(
    x0: float, z0: float, x1: float, z1: float, lo: float, hi: float
) -> tuple[float, float, float, float] | None:
    """Keep the portion of a segment inside ``lo <= x <= hi``."""
    dx, dz = x1 - x0, z1 - z0
    if abs(dx) < 1e-6:
        return (x0, z0, x1, z1) if lo <= x0 <= hi else None
    t_lo = (lo - x0) / dx
    t_hi = (hi - x0) / dx
    a, b = (t_lo, t_hi) if t_lo <= t_hi else (t_hi, t_lo)
    t0, t1 = max(0.0, a), min(1.0, b)
    if t1 - t0 < 0.02:
        return None
    return (x0 + dx * t0, z0 + dz * t0, x0 + dx * t1, z0 + dz * t1)


def _bass_trap_parts(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Standalone CW linings on the two gable walls.

    Nothing here is fixed to the slopes or to the soffit. The bottom UW sits
    at 2450 on the base, with sealing tape under it. The top UW follows the
    slope and is screwed to the gable wall (tape between track and wall).
    Vertical CW studs at 625 mm carry the GKB. CW/UA offcuts tie the studs
    back to the wall. The lining stops at the soffit face. A flexible acrylic
    bead is the only meeting with the slope finish and with that face.
    """
    # Perpendicular-ish clearance under the new ceiling so the bead and the
    # 1 mm mate gap both fit. 14 mm vertical is about 11 mm perpendicular at 40°.
    head_drop = 14.0
    x_stop = bass_soffit_stop_x(p)
    outline = [
        (gap, p.predstena_bottom_z + gap),
        (x_stop, p.predstena_bottom_z + gap),
        (x_stop, g.z_ceil(x_stop) - head_drop),
        (g.x_false, g.z_false - head_drop),
        (gap, g.h_start - head_drop),
    ]
    face = xz_face(outline, "predstena")
    parts: list = []
    steel: list = []

    def add_end(side: str) -> None:
        cw = p.bass_k_cw if side == "kitchen" else p.bass_l_cw
        wool = p.bass_k_wool if side == "kitchen" else p.bass_l_wool
        gkb = p.bass_k_gkb if side == "kitchen" else p.bass_l_gkb
        depth = p.predstena_kitchen if side == "kitchen" else p.predstena_living
        toward = -1.0 if side == "kitchen" else 1.0
        y_wall = p.room_length if side == "kitchen" else 0.0
        y_room = y_wall + toward * depth
        # Wool against the wall. GKB on the room face. CW against the GKB,
        # so a stud deeper than the air notches the wool and nowhere else.
        if toward > 0:
            y_wool0, y_wool1 = gap, wool - gap
            y_gkb0 = y_room - gkb + gap
            y_gkb1 = y_room - gap
            y_stud1 = y_gkb0 - gap
            y_stud0 = y_stud1 - cw
            y_track0, y_track1 = gap + p.bass_tape_t, gap + p.bass_tape_t + p.bass_uw_flange
        else:
            y_wool0, y_wool1 = y_wall - wool + gap, y_wall - gap
            y_gkb0 = y_room + gap
            y_gkb1 = y_room + gkb - gap
            y_stud0 = y_gkb1 + gap
            y_stud1 = y_stud0 + cw
            y_track1 = y_wall - gap - p.bass_tape_t
            y_track0 = y_track1 - p.bass_uw_flange
        if y_wool1 > y_wool0:
            parts.append(_extrude_y(face, y_wool0, y_wool1, LABEL_BASS_WOOL))
        if y_gkb1 > y_gkb0:
            parts.append(_extrude_y(face, y_gkb0, y_gkb1, LABEL_BASS_GKB))

        z_tape0 = p.predstena_bottom_z + gap
        z_uw0 = z_tape0 + p.bass_tape_t
        z_uw1 = z_uw0 + p.bass_uw_flange
        z_stud0 = z_uw1 + gap
        # Bottom track on the stud line, tape under the web, up to the soffit stop.
        track_w = x_stop - gap
        steel.append(
            _box(gap, y_stud0, z_tape0, track_w, y_stud1 - y_stud0, p.bass_tape_t, LABEL_BASS_TAPE)
        )
        steel.append(
            _box(
                gap,
                y_stud0,
                z_uw0,
                track_w,
                y_stud1 - y_stud0,
                p.bass_uw_flange,
                LABEL_BASS_UW,
            )
        )
        # Separate segments, not a mitre: a mitred bead crosses the GKB, and
        # neighbouring tracks overlap at the ridge. Each piece stays under its face.
        # Ridge ends are shortened so the two tracks do not meet; the free ends
        # only leave the eave bead and the soffit bead.
        if toward > 0:
            ty0, ty1 = gap, gap + p.bass_tape_t
        else:
            ty1 = y_wall - gap
            ty0 = ty1 - p.bass_tape_t
        segments = _ceiling_segments(g, x_stop)
        for i, (x0, z0, x1, z1) in enumerate(segments):
            dx, dz = x1 - x0, z1 - z0
            span = math.hypot(dx, dz) or 1.0
            trim0 = 80.0 if i > 0 else 20.0
            trim1 = 80.0 if i < len(segments) - 1 else 12.0
            x0 += dx * trim0 / span
            z0 += dz * trim0 / span
            x1 -= dx * trim1 / span
            z1 -= dz * trim1 / span
            clipped = _clip_span(x0, z0, x1, z1, 10.0, x_stop)
            if clipped is None:
                continue
            x0, z0, x1, z1 = clipped
            steel.append(
                _extrude_y(
                    xz_face(_band_below(x0, z0, x1, z1, 12.0, 12.0 + p.bass_uw_flange), LABEL_BASS_UW),
                    y_track0,
                    y_track1,
                    LABEL_BASS_UW,
                )
            )
            steel.append(
                _extrude_y(
                    xz_face(_band_below(x0, z0, x1, z1, 8.0, 8.0 + p.bass_tape_t), LABEL_BASS_TAPE),
                    ty0,
                    ty1,
                    LABEL_BASS_TAPE,
                )
            )
            parts.append(
                _extrude_y(
                    xz_face(_band_below(x0, z0, x1, z1, 3.0, 3.0 + p.bass_acrylic), LABEL_BASS_ACRYLIC),
                    y_gkb0,
                    y_gkb1,
                    LABEL_BASS_ACRYLIC,
                )
            )
        # Vertical bead in the gap to the soffit face. Not fixed to the box.
        x_bead0 = x_stop + gap
        z_bead0 = g.z_nabeh_bot + gap
        z_bead1 = min(g.z_ceil(x_bead0), g.z_ceil(x_bead0 + p.bass_acrylic)) - p.bass_acrylic
        if z_bead1 - z_bead0 > 40.0:
            parts.append(
                _box(
                    x_bead0,
                    y_gkb0,
                    z_bead0,
                    p.bass_acrylic,
                    y_gkb1 - y_gkb0,
                    z_bead1 - z_bead0,
                    LABEL_BASS_ACRYLIC,
                )
            )

        stations = bass_cd_centres(x_stop, p.bass_stud_spacing, p.bass_cw_w, gap)
        half = p.bass_cw_w * 0.5
        for xc in stations:
            x0 = xc - half
            z_top = min(g.z_ceil(x) for x in (x0, xc, x0 + p.bass_cw_w)) - head_drop
            if z_top - z_stud0 < 80.0:
                continue
            steel.append(_box(x0, y_stud0, z_stud0, p.bass_cw_w, y_stud1 - y_stud0, z_top - z_stud0, LABEL_BASS_CW))
            # The track flange is only at the floor and the ceiling. Mid-height
            # struts have to reach the wall themselves: clearance is the sealing
            # tape and the mate gap, then a bent angle, then the offcut.
            tab_t = 2.0
            tab_return = 20.0
            tab_lip = 15.0
            anchor_embed = 60.0
            y_steel = (gap + p.bass_tape_t) if toward > 0 else (y_wall - gap - p.bass_tape_t)
            y_stud_near = (y_stud0 - gap) if toward > 0 else (y_stud1 + gap)
            if toward > 0:
                y_bar0 = y_steel + tab_t + tab_return + gap
                y_bar1 = y_stud_near
                plaster_face = -gap
                mason_face = -p.wall_plaster - gap
                y_shank0, y_shank1 = mason_face - anchor_embed, plaster_face + 0.4
            else:
                y_bar0 = y_stud_near
                y_bar1 = y_steel - tab_t - tab_return - gap
                plaster_face = y_wall + gap
                mason_face = y_wall + p.wall_plaster + gap
                y_shank0, y_shank1 = plaster_face - 0.4, mason_face + anchor_embed
            if y_bar1 - y_bar0 < 20.0:
                continue
            uw_here = [s for s in steel if s.label == LABEL_BASS_UW]
            for zc in _strut_centres(z_stud0, z_top, p.bass_strut_h, p.bass_strut_max_step):
                bar = _box(
                    x0,
                    y_bar0,
                    zc - p.bass_strut_h * 0.5,
                    p.bass_cw_w,
                    y_bar1 - y_bar0,
                    p.bass_strut_h,
                    LABEL_BASS_STRUT,
                )
                hits = [u for u in uw_here if _aabb_hit(bar, u)]
                if hits:
                    bar = _cut_away(bar, hits, LABEL_BASS_STRUT)
                if float(bar.volume) < 100.0:
                    continue
                steel.append(bar)
                bb = bar.bounding_box()
                reaches = (bb.min.Y < y_bar0 + 2.0) if toward > 0 else (bb.max.Y > y_bar1 - 2.0)
                if not reaches:
                    continue
                z_tab0 = zc - p.bass_strut_h * 0.5 - tab_lip
                z_tab = p.bass_strut_h + 2.0 * tab_lip
                if toward > 0:
                    wall_leg = _box(x0, y_steel, z_tab0, p.bass_cw_w, tab_t, z_tab, LABEL_BASS_ANGLE)
                    ret_leg = _box(
                        x0,
                        y_steel + tab_t,
                        zc - p.bass_strut_h * 0.5,
                        p.bass_cw_w,
                        tab_return,
                        p.bass_strut_h,
                        LABEL_BASS_ANGLE,
                    )
                else:
                    wall_leg = _box(x0, y_steel - tab_t, z_tab0, p.bass_cw_w, tab_t, z_tab, LABEL_BASS_ANGLE)
                    ret_leg = _box(
                        x0,
                        y_steel - tab_t - tab_return,
                        zc - p.bass_strut_h * 0.5,
                        p.bass_cw_w,
                        tab_return,
                        p.bass_strut_h,
                        LABEL_BASS_ANGLE,
                    )
                angle = _paint(wall_leg.fuse(ret_leg), LABEL_BASS_ANGLE)
                hits = [u for u in uw_here if _aabb_hit(angle, u)]
                if hits:
                    angle = _cut_away(angle, hits, LABEL_BASS_ANGLE)
                if float(angle.volume) < 40.0:
                    continue
                steel.append(angle)
                steel.append(_cyl_y(xc, y_shank0, y_shank1, zc, 4.0, LABEL_BASS_ANCHOR))
        # Vertical board joints: 1250 mm sheets span two 625 mm bays and land on a stud.
        # The soffit end is the acrylic bead, not a taped joint.
        for xj in range(int(p.bass_board_w), int(x_stop), int(p.bass_board_w)):
            if xj + 25.0 > x_stop - gap:
                continue
            z_top = min(g.z_ceil(x) for x in (xj - 25.0, float(xj), xj + 25.0)) - head_drop
            if z_top - z_uw1 < 40.0:
                continue
            if toward > 0:
                jt0, jt1 = y_gkb1 + gap, y_gkb1 + gap + 1.0
            else:
                jt1 = y_gkb0 - gap
                jt0 = jt1 - 1.0
            parts.append(
                _box(xj - 25.0, jt0, z_uw1, 50.0, jt1 - jt0, z_top - z_uw1, LABEL_BASS_TAPE)
            )

    add_end("living")
    add_end("kitchen")

    # Wool is friction-fit around the steel, never inside a profile.
    wool_parts = [part for part in parts if part.label == LABEL_BASS_WOOL]
    kept = [part for part in parts if part.label != LABEL_BASS_WOOL]
    for wool in wool_parts:
        tools = [tool for tool in steel if _aabb_hit(wool, tool)]
        kept.append(_cut_away(wool, tools, LABEL_BASS_WOOL) if tools else wool)
    kept.extend(steel)
    return kept
