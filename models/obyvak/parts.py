"""Room solids: walls, roof pack, soffit, glass, ties, and ``build()``."""

from __future__ import annotations

import math
from dataclasses import asdict

from build123d import Align, Compound, Cylinder, Plane, Solid

from obyvak_geom import (
    LABEL_BASS_CW,
    LABEL_BASS_GKB,
    LABEL_BASS_STRUT,
    LABEL_BASS_UW,
    LABEL_BASS_WOOL,
    LABEL_EAVE_ACRYLIC,
    LABEL_EAVE_UD,
    LABEL_EPS,
    LABEL_FLOOR,
    LABEL_FURNITURE,
    LABEL_GLAZING,
    LABEL_MASONRY,
    LABEL_PLASTER,
    LABEL_PLENUM_WOOL,
    LABEL_RACKING_STRAP,
    LABEL_RAFTERS,
    LABEL_ROOFING,
    LABEL_SLOPE_CD,
    LABEL_SLOPE_DIRECT,
    LABEL_SLOPE_FOIL,
    LABEL_SLOPE_GKF,
    LABEL_SLOPE_LIGHT,
    LABEL_SLOPE_NH,
    LABEL_SLOPE_NONIUS,
    LABEL_SOFFIT_CD,
    LABEL_SOFFIT_DUCT,
    LABEL_SOFFIT_GKB,
    LABEL_SOFFIT_GKF,
    LABEL_SOFFIT_NH,
    LABEL_SOFFIT_NONIUS,
    LABEL_SOFFIT_UD,
    LABEL_SOFFIT_WOOL,
    LABEL_TIE_ROD,
    LABEL_VB_TAPE,
    LABEL_WALL_PLATE,
    ObyvakLayout,
    ObyvakParams,
    TIE_LIGHT_D,
    TIE_LIGHT_H,
    xz_face,
)

from .bass import _bass_trap_parts
from .openings import (
    _cut_wall_openings,
    _eave_window_cutters,
    _gable_sdk_and_pouzdra,
    _pocket_door_cutters,
)
from .solids import (
    EXPORT_KIND,
    FACE_GAP,
    MODEL_NAME,
    _aabb_hit,
    _box,
    _cut_away,
    _cyl_x,
    _cyl_y,
    _extrude_y,
    _inset_face,
    _oriented_bar,
    _paint,
    _screw_solids,
    _shrink_band,
    _shrink_closed_band,
    _split_x,
)


def _glass_panes(p: ObyvakParams, g: ObyvakLayout, gap: float) -> list:
    """Thin glass fills in the X=0 eave openings."""
    panes = []
    x_glass = g.xl_mas + (p.wall_mason - p.glass_t) / 2.0
    for y0, width in p.eave_windows:
        panes.append(
            _box(
                x_glass,
                y0 + gap,
                gap,
                p.glass_t,
                width - 2 * gap,
                p.window_h - gap,
                LABEL_GLAZING,
            )
        )
    return panes


def _parts(p: ObyvakParams, g: ObyvakLayout) -> list:
    gap = FACE_GAP
    # Room-clear eave run: gable plaster owns y∈[-plaster,0] and [L, L+plaster].
    y0, y1 = gap, p.room_length - gap
    ey = y1 - y0
    z_col = g.column_top_z
    structure: list = []

    # --- Floor: clear slab only (walls own the perimeter strip below z=0). ---
    structure.append(
        _box(gap, gap, -p.floor_t, p.room_width - 2 * gap, p.room_length - 2 * gap, p.floor_t, LABEL_FLOOR)
    )

    # --- Eave walls (panel A): mid-span only. Layer stack outside → inside. ---
    # Left (terrace / glazing): one EPS, one masonry wall, one plaster, each
    # the full run. Window cuts (below) stop at the glass head. The ring beam
    # is the same top course as on the solid wall. 100×100 columns stand in
    # pockets at the pier centres.
    structure.append(
        _box(g.xl_eps, y0, -p.floor_t, p.wall_eps - gap, ey, p.eave_wall_z + p.floor_t, LABEL_EPS)
    )
    terrace_wall = _box(
        g.xl_mas, y0, -p.floor_t, p.wall_mason - gap, ey, z_col + p.floor_t, LABEL_MASONRY
    )
    structure.append(terrace_wall)
    structure.append(
        _box(g.xl_mas, y0, z_col + gap, p.wall_mason - gap, ey, p.venec_h - gap, LABEL_MASONRY)
    )
    structure.append(_box(-p.wall_plaster, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, LABEL_PLASTER))

    x_glass = g.xl_mas + (p.wall_mason - p.glass_t) / 2.0
    x_win_col = x_glass + p.glass_t + gap
    half_win = p.window_column_size * 0.5
    for yc in g.eave_column_y_centres():
        structure.append(
            _box(
                x_win_col,
                yc - half_win,
                -p.floor_t,
                p.window_column_size - gap,
                p.window_column_size,
                z_col + p.floor_t,
                LABEL_MASONRY,
            )
        )
    # Columns occupy the pier. The wall is pocketed around them so the two
    # masonry solids do not share a volume, and the wall stays one piece.
    pockets = []
    for yc in g.eave_column_y_centres():
        pockets.append(
            _box(
                x_win_col - gap,
                yc - half_win - gap,
                -p.floor_t - 1.0,
                p.window_column_size + gap,
                p.window_column_size + 2 * gap,
                z_col + p.floor_t + 2.0,
                "_pier_pocket",
            )
        )
    structure[structure.index(terrace_wall)] = _cut_away(terrace_wall, pockets, LABEL_MASONRY)

    # Right (cabinets): continuous masonry wall; 300×300 columns stand in front of
    # the interior plaster face (entirely in the room), same Y grid as the glass posts.
    structure.append(_box(p.room_width, y0, 0.0, p.wall_plaster, ey, p.eave_wall_z, LABEL_PLASTER))
    x_furn_mas = p.room_width + p.wall_plaster + gap
    structure.append(
        _box(
            x_furn_mas,
            y0,
            -p.floor_t,
            p.wall_mason - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            LABEL_MASONRY,
        )
    )
    half_furn = p.furn_column_size * 0.5
    # Against the room-side plaster face; sits on the slab.
    x_furn_col0 = p.room_width - p.furn_column_size
    furn_col_parts: list = []
    for yc in g.eave_column_y_centres():
        furn_col_parts.append(
            _box(
                x_furn_col0,
                yc - half_furn,
                gap,
                p.furn_column_size - gap,
                p.furn_column_size,
                z_col - gap,
                LABEL_MASONRY,
            )
        )
    structure.extend(furn_col_parts)
    structure.append(
        _box(
            g.xr_mas + gap,
            y0,
            -p.floor_t,
            p.wall_eps - gap,
            ey,
            p.eave_wall_z + p.floor_t,
            LABEL_EPS,
        )
    )

    # Wall plates sit on the ring-beam course, centred on masonry thickness.
    structure.append(
        _box(g.poz_l0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, LABEL_WALL_PLATE)
    )
    structure.append(
        _box(g.poz_r0, y0, p.eave_wall_z + gap, p.plate_w, ey, p.plate_h - gap, LABEL_WALL_PLATE)
    )

    # --- Gable walls (panel B): full X, own the corners; interior shells only (no EPS). ---
    for ya, yb in (
        (g.yl_mas, -p.wall_plaster - gap),
        (p.room_length + p.wall_plaster + gap, g.yr_mas),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(g.xl_mas, g.xr_mas, -p.floor_t), LABEL_MASONRY), ya, yb, LABEL_MASONRY
            )
        )
    for ya, yb in (
        (-p.wall_plaster, -gap),
        (p.room_length + gap, p.room_length + p.wall_plaster),
    ):
        structure.append(
            _extrude_y(
                xz_face(g.gable_wall_pts(0.0, p.room_width, 0.0), LABEL_PLASTER), ya, yb, LABEL_PLASTER
            )
        )

    door_cutters = _pocket_door_cutters(p, g, gap)
    # Openings stop at the glass head. Plaster, masonry and EPS above it are
    # the same solids as the wall beside the glass.
    structure = _cut_wall_openings(structure, door_cutters)
    structure = _cut_wall_openings(structure, _eave_window_cutters(p, g, gap))

    # Rafter seat: pozednice (+ minor masonry/column/plaster contact). EPS is cut
    # around the finished rafters — real build order.
    rafter_seat_cutters = [
        s
        for s in structure
        if s.label in {LABEL_WALL_PLATE, LABEL_MASONRY, LABEL_PLASTER}
    ]
    # Krytina may still clear gable massing / plates at the ridge runout.
    roofing_cutters = [s for s in structure if s.label != LABEL_FLOOR]

    # --- Roof: krytina above krokve above vata; thinned, then notched at seat. ---
    # Krov = discrete rafters 100/160 @ 875 (sheet E_KROK), not a solid timber slab.
    krov_pts = _shrink_band(g.krov_pts(), top_n=3, gap=gap)
    krytina_pts = [(x, z + gap if i < 3 else z) for i, (x, z) in enumerate(g.krytina_pts())]
    # Plenum wool follows the 2D outline out to the rafter seats on both
    # plates (about x -140 and x 5490), inset by the face gap.
    vata_face = _inset_face(g.vata_pts(), gap, LABEL_PLENUM_WOOL)

    y_raf0, y_raf1 = gap, p.room_length - gap
    rafter_ys = g.rafter_y_stations(y_raf0, y_raf1)
    half_raf = p.rafter_w * 0.5
    krov_parts: list = []
    for yc in rafter_ys:
        ya, yb = yc - half_raf, yc + half_raf
        if yb <= ya:
            continue
        krov_parts.append(
            _cut_away(
                _extrude_y(xz_face(krov_pts, LABEL_RAFTERS), ya, yb, LABEL_RAFTERS),
                rafter_seat_cutters,
                LABEL_RAFTERS,
            )
        )
    # EPS (and room plaster on the terrace eave) wrap around rafters.
    eps_raf_cutters = list(krov_parts)
    structure = [
        _cut_away(s, eps_raf_cutters, s.label) if s.label in {LABEL_EPS, LABEL_PLASTER} else s
        for s in structure
    ]

    krytina = _cut_away(
        _extrude_y(xz_face(krytina_pts, LABEL_ROOFING), g.y_roof0, g.y_roof1, LABEL_ROOFING),
        roofing_cutters,
        LABEL_ROOFING,
    )
    # Minerální vata λ 0,039: the void above the CD pack, plus the 160 mm bays between
    # krokve. Same part. The vent channel above the rafter top stays empty.
    # Notch the soffit rods while this solid is still one prism. Cutting them
    # out after the bay fuse inverts the shell.
    vata = _extrude_y(vata_face, gap, p.room_length - gap, LABEL_PLENUM_WOOL)
    _half_hang = p.hanger_w * 0.5
    _z_cd = g.horiz_hanger_bot_z()
    _wool_notches = []
    for _xc in g.horiz_cd_x_stations():
        _wool_notches.append(
            _extrude_y(xz_face(g.horiz_cd_quad(_xc), LABEL_SOFFIT_CD), g.y_furn0, g.y_furn1, LABEL_SOFFIT_CD)
        )
        _hang_h = g.horiz_hanger_top_z(_xc) - 2.0 * gap - _z_cd
        if _hang_h < 20.0:
            continue
        for _yc in rafter_ys:
            _wool_notches.append(
                _box(
                    _xc - _half_hang,
                    _yc - _half_hang,
                    _z_cd,
                    p.hanger_w,
                    p.hanger_w,
                    _hang_h,
                    LABEL_SOFFIT_NONIUS,
                )
            )
    if _wool_notches:
        vata = _cut_away(vata, _wool_notches, LABEL_PLENUM_WOOL)
    # Same wool, between the rafters: rafter depth from plate face to plate face.
    # Where the rafter is seated in the plate the bay starts on the plate top.
    bay_face = xz_face(g.vata_rafter_bay_pts(gap), LABEL_PLENUM_WOOL)
    # Cheeks stop FACE_GAP short of each krokev so the timber and the wool do not share a face.
    cursor = gap
    y_wool1 = p.room_length - gap
    for yc in rafter_ys:
        ya = yc - half_raf - gap
        yb = yc + half_raf + gap
        if ya - cursor > gap:
            piece = _extrude_y(bay_face, cursor, ya, LABEL_PLENUM_WOOL)
            vata = _paint(vata.fuse(piece), LABEL_PLENUM_WOOL)
        cursor = max(cursor, yb)
    if y_wool1 - cursor > gap:
        piece = _extrude_y(bay_face, cursor, y_wool1, LABEL_PLENUM_WOOL)
        vata = _paint(vata.fuse(piece), LABEL_PLENUM_WOOL)

    parts: list = list(structure)
    parts.extend(_glass_panes(p, g, gap))
    parts.extend(krov_parts)
    parts.extend([krytina, vata])

    # --- Šikminy: complete acoustic / steel stack. ---
    # Slope pack runs wall-to-wall to the gables; soffit bay stays between bass traps.
    y_ceil0, y_ceil1 = gap, p.room_length - gap
    y_soff0, y_soff1 = g.y_furn0 + gap, g.y_furn1 - gap

    def _add_band(pts: list[tuple[float, float]], label: str):
        band = _shrink_closed_band(pts, gap)
        return _extrude_y(xz_face(band, label), y_ceil0, y_ceil1, label)

    # 1) NaturHeld 140, 100 mm, screwed through the GKF into the CD. No latě, no Flex.
    # Two boards per slope run: they butt at the false ridge (vertical cut).
    parts.extend(
        _split_x(
            _extrude_y(_inset_face(g.sikmina_nh_pts(), gap, LABEL_SLOPE_NH), y_ceil0, y_ceil1, LABEL_SLOPE_NH),
            g.x_false,
            LABEL_SLOPE_NH,
        )
    )

    # Triangle under the lid, above the slope board, out to the vertical soffit face.
    # Only the soffit bay has that lid. Same mineral wool as the soffit cavity.
    wedge_pts = g.soffit_wool_wedge_pts()
    wedge_solid = None
    if len(wedge_pts) >= 3:
        # One triangle, held off the lid, the vertical face and the slope board.
        x0, _z_lid = wedge_pts[0]
        x1, z_nh = wedge_pts[1]
        z_top = g.z_soffit_lid - gap
        wedge = [
            (x0, z_top),
            (x1 - gap, z_nh + gap),
            (x1 - gap, z_top),
        ]
        wedge_solid = _extrude_y(xz_face(wedge, LABEL_SOFFIT_WOOL), y_soff0, y_soff1, LABEL_SOFFIT_WOOL)

    # 2) SDK
    # Room-side GKF butts where the left and right planes meet (no step).
    parts.extend(_split_x(_add_band(g.sikmina_sdk_pts(), LABEL_SLOPE_GKF), g.x_stack_joint, LABEL_SLOPE_GKF))
    if (_sdk2 := g.sikmina_sdk2_pts()) is not None:
        parts.append(_add_band(_sdk2, LABEL_SLOPE_GKF))

    # 4) CD ⊥ krokvím (spaced along slope, run along Y)
    cd_parts: list = []
    for quad in g.sikmina_cd_quads():
        cd_parts.append(_extrude_y(xz_face(quad, LABEL_SLOPE_CD), y_ceil0, y_ceil1, LABEL_SLOPE_CD))
    parts.extend(cd_parts)

    # 5) Závěsy CD→krokev at rafter × CD crossings (same Y stations as krokve).
    zaves_parts: list = []
    half_hang = p.hanger_w * 0.5
    ceil_rafter_ys = [yc for yc in rafter_ys if y_ceil0 <= yc <= y_ceil1]
    for st in g.sikmina_cd_stations():
        xs = [pt[0] for pt in g.sikmina_cd_quad(*st)]
        if not g.sikmina_cd_in_span(xs, st[0]):
            continue
        hang_quad = g.hanger_quad(*st)
        # The eave CD is seated in the wall UD. Its direct hanger would run
        # through the wall plate and the masonry; that hanger is not built.
        if min(x for x, _z in hang_quad) < -0.5:
            continue
        plate_x0, plate_x1 = g.poz_l0, g.poz_l0 + p.plate_w
        plate_z0, plate_z1 = p.eave_wall_z, g.z_plate_top
        hxs = [x for x, _z in hang_quad]
        hzs = [z for _x, z in hang_quad]
        if (
            max(hxs) > plate_x0
            and min(hxs) < plate_x1
            and max(hzs) > plate_z0
            and min(hzs) < plate_z1
        ):
            continue
        # Window slope stays parallel to the rafters. Direct hanger on that slope.
        # Catalogue lengths are open: docs/design/obyvak.md.
        # Cabinet slope opens toward the furniture line — Nonius from the false
        # ridge onward (pack peak at x_false, left of the roof ridge).
        # Direct hanger on the left plane, including the short run past the
        # false ridge. Nonius starts where the right GKF plane takes over.
        hang_label = LABEL_SLOPE_DIRECT if st[0] <= g.x_cd_joint else LABEL_SLOPE_NONIUS
        for yc in ceil_rafter_ys:
            zaves_parts.append(
                _extrude_y(
                    xz_face(hang_quad, hang_label),
                    yc - half_hang,
                    yc + half_hang,
                    hang_label,
                )
            )
    # Any other hanger that still meets the wall is trimmed back to the room.
    wall_solids = [
        s for s in parts if getattr(s, "label", None) in {LABEL_MASONRY, LABEL_PLASTER, LABEL_WALL_PLATE}
    ]
    if wall_solids:
        for i, hanger in enumerate(zaves_parts):
            hits = [w for w in wall_solids if _aabb_hit(hanger, w)]
            if not hits:
                continue
            zaves_parts[i] = _cut_away(hanger, hits, hanger.label)
    parts.extend(zaves_parts)

    # 5b) Jutafol N AL 170 Speciál — attic face of CD, below mineral wool. Hangers pierce it.
    # Vapour brake, eave to eave (1 mm: no inset, it is thinner than two gaps).
    foil_part = _extrude_y(xz_face(g.sikmina_foil_pts(), LABEL_SLOPE_FOIL), y_ceil0, y_ceil1, LABEL_SLOPE_FOIL)
    foil_tools = list(cd_parts) + [part for part in parts if part.label == LABEL_SLOPE_GKF]
    if zaves_parts:
        foil_tools = zaves_parts + foil_tools
    if foil_tools:
        foil_part = _cut_away(foil_part, foil_tools, LABEL_SLOPE_FOIL)
    parts.append(foil_part)

    # Left eave: bent UD screwed to the plate (the GKF is fixed to it) and the
    # brake's bond tape on both wall plasters; acrylic bead at the planned cut.
    eave_ud = None
    for quad in g.eave_ud_left_quads():
        piece = _extrude_y(xz_face(quad, LABEL_EAVE_UD), y_ceil0, y_ceil1, LABEL_EAVE_UD)
        eave_ud = piece if eave_ud is None else eave_ud.fuse(piece)
    if eave_ud is not None:
        gkf_for_ud = [part for part in parts if part.label == LABEL_SLOPE_GKF]
        if gkf_for_ud:
            eave_ud = _cut_away(eave_ud, gkf_for_ud, LABEL_EAVE_UD)
        eave_ud = _paint(eave_ud, LABEL_EAVE_UD)
        parts.append(eave_ud)
        parts.extend(
            _screw_solids(
                g, g.eave_ud_left_screw_quads(), y_ceil0 + 10.0, y_ceil1 - 10.0, spacing=625.0
            )
        )
        parts.extend(_screw_solids(g, g.eave_gkf_screw_quads(), y_ceil0 + 10.0, y_ceil1 - 10.0))
        for i, part in enumerate(parts):
            if part.label in {LABEL_SLOPE_NH, LABEL_SLOPE_FOIL} and _aabb_hit(part, eave_ud):
                parts[i] = _cut_away(part, [eave_ud], part.label)
    for band in g.vb_tape_pts():
        tape = _extrude_y(xz_face(band, LABEL_VB_TAPE), y_ceil0, y_ceil1, LABEL_VB_TAPE)
        tape_tools = []
        if eave_ud is not None and _aabb_hit(tape, eave_ud):
            tape_tools.append(eave_ud)
        if _aabb_hit(tape, foil_part):
            tape_tools.append(foil_part)
        if tape_tools:
            tape = _cut_away(tape, tape_tools, LABEL_VB_TAPE)
        parts.append(tape)
    parts.append(
        _extrude_y(xz_face(g.eave_acrylic_pts(), LABEL_EAVE_ACRYLIC), y_ceil0, y_ceil1, LABEL_EAVE_ACRYLIC)
    )

    # 6) Zavětrovací pásky: long thin 40×2 straps at 45°, crossing into X on each slope.
    # ~6 per side (3 X pairs) along the 11 m room length — racking restraint along Y.
    paska_parts: list = []
    n_x_pairs = 3
    y_span = y_ceil1 - y_ceil0

    def _add_slope_bracing(
        s0: float,
        s1: float,
        point_at,
        n_room: tuple[float, float, float],
    ) -> None:
        """place 3 X pairs on one slope; s = distance along slope from eave."""
        slope_len = s1 - s0
        if slope_len < 200 or y_span < 200:
            return
        off = p.strap_t * 0.5 + 2.0 * gap  # clear of shrunk krov underside
        nx, ny, nz = n_room
        for i in range(n_x_pairs):
            y_c = y_ceil0 + (i + 0.5) * y_span / n_x_pairs
            half = min(y_span / (2 * n_x_pairs) * 0.9, slope_len * 0.42)
            s_c = 0.5 * (s0 + s1)
            # Diagonal A: +s with +y ; Diagonal B: +s with -y (45° in the face).
            # Stack the two legs of each X by strap thickness so they mate, not fuse.
            for k, sign in enumerate((+1.0, -1.0)):
                sa, sb = s_c - half, s_c + half
                ya, yb = y_c - sign * half, y_c + sign * half
                if ya < y_ceil0 + 50 or yb > y_ceil1 - 50:
                    continue
                if sa < s0 + 50 or sb > s1 - 50:
                    continue
                layer = off + k * (p.strap_t + gap)
                p0 = point_at(sa, ya)
                p1 = point_at(sb, yb)
                p0 = (p0[0] + nx * layer, p0[1] + ny * layer, p0[2] + nz * layer)
                p1 = (p1[0] + nx * layer, p1[1] + ny * layer, p1[2] + nz * layer)
                bar = _oriented_bar(
                    p0, p1, p.strap_w, p.strap_t, LABEL_RACKING_STRAP, thin_dir=(nx, ny, nz)
                )
                if bar is not None:
                    paska_parts.append(bar)

    # Left slope: eave→false ridge; room-normal points down-right into the room.
    def _left_raf(s: float, y: float):
        x = s * g.cos
        return (x, y, g.z_raf(x))

    s_left = g.x_false / g.cos
    _add_slope_bracing(0.0, s_left, _left_raf, (g.sin, 0.0, -g.cos))

    # Right slope: false ridge→furniture line; descending as x grows.
    def _right_raf(s: float, y: float):
        # s from false ridge toward eave/furniture along the slope.
        x = g.x_false + s * g.cos
        return (x, y, g.z_raf(x))

    s_right = (g.x_furn - g.x_false) / g.cos
    _add_slope_bracing(0.0, s_right, _right_raf, (-g.sin, 0.0, -g.cos))

    # Guarantee FACE_GAP mates: shave float nicks against krokve / hangers.
    if paska_parts:
        tools = list(krov_parts) + zaves_parts
        paska_parts = [_cut_away(bar, tools, LABEL_RACKING_STRAP) for bar in paska_parts]

    parts.extend(paska_parts)

    # Mineral wool must not swallow CD / hangers / foil / pásky.
    if cd_parts or zaves_parts or paska_parts:
        tools = cd_parts + zaves_parts + paska_parts + [foil_part]
        vata = _cut_away(vata, tools, LABEL_PLENUM_WOOL)
        for i, part in enumerate(parts):
            if part.label == LABEL_PLENUM_WOOL:
                parts[i] = vata
                break

    # The eave CD is centred within 100 mm of the wall. Its attic corner
    # crosses the plaster; cut that tail off at the UD and the wall.
    if eave_ud is not None:
        wall_clip = _box(
            -400.0,
            y_ceil0 - 5.0,
            2000.0,
            400.0 + g.x_gkf_end_l,
            (y_ceil1 - y_ceil0) + 10.0,
            5000.0,
            LABEL_EAVE_UD,
        )
        for i, cd in enumerate(cd_parts):
            tools = []
            if _aabb_hit(cd, eave_ud):
                tools.append(eave_ud)
            if cd.bounding_box().min.X < g.x_gkf_end_l - 0.5:
                tools.append(wall_clip)
            if not tools:
                continue
            trimmed = _cut_away(cd, tools, LABEL_SLOPE_CD)
            cd_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is cd:
                    parts[j] = trimmed
                    break

    # --- Soffit bay: ducts under a lid that lands on the pozednice. ---
    # Box: krokve → Nonius → front CD → drop through the lid → vertical CD
    # → bottom CD into the wall UD. The wall angle is a brace only.
    # Lid edge: continuous steel cleat on the plate cheek. Not a hang point.
    # Ducts are already anchored to the wall. This box only keeps them clear.
    t = g.t_soffit_face
    x_duct0, x_duct1 = g.soffit_duct_x_extent()
    lat_end = g.x_nh_inner + p.cd_t
    if x_duct0 < lat_end + 8.0:
        raise ValueError(
            f"soffit ducts collide with the front CD ({x_duct0:.1f} < {lat_end + 8:.1f})"
        )
    if x_duct1 > p.room_width - 4.0:
        raise ValueError(f"soffit ducts run through the plaster ({x_duct1:.1f})")
    if g.z_soffit_duct_bot() < g.column_top_z + 10.0:
        raise ValueError(
            f"soffit ducts hit the column heads ({g.z_soffit_duct_bot():.1f} < {g.column_top_z + 10:.1f})"
        )
    if g.z_soffit_duct_crown() > g.z_soffit_lid - 5.0:
        raise ValueError("soffit ducts do not fit under the lid on the pozednice")

    # Flat top under the lid (the slope GKF bears on the lid). 1 mm off each mate.
    z_nh_out = z_nh_in = g.z_soffit_lid - gap
    soffit_nh = [
        (g.x_nh_outer + gap, g.z_nabeh_bot + gap),
        (g.x_nh_inner - gap, g.z_nabeh_bot + gap),
        (g.x_nh_inner - gap, z_nh_in),
        (g.x_nh_outer + gap, z_nh_out),
    ]
    parts.append(_extrude_y(xz_face(soffit_nh, LABEL_SOFFIT_NH), y_soff0, y_soff1, LABEL_SOFFIT_NH))
    # GKB underside over the cabinets, butting the NH side face.
    tb = g.t_soffit_bottom
    soffit_gkb = [
        (g.x_nh_inner + gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + gap),
        (p.room_width - gap, g.z_nabeh_bot + tb - gap),
        (g.x_nh_inner + gap, g.z_nabeh_bot + tb - gap),
    ]
    parts.append(_extrude_y(xz_face(soffit_gkb, LABEL_SOFFIT_GKB), y_soff0, y_soff1, LABEL_SOFFIT_GKB))

    # Mineral wool in the acoustic cavity, stopped short of the pipes.
    z_rail_top = g.z_soffit_rail()
    wool_box = [
        (g.x_nh_inner + gap, g.z_nabeh_bot + tb + gap),
        (p.room_width - gap, g.z_nabeh_bot + tb + gap),
        (p.room_width - gap, z_rail_top - gap),
        (g.x_nh_inner + gap, z_rail_top - gap),
    ]
    wool_solid = _extrude_y(xz_face(wool_box, LABEL_SOFFIT_WOOL), y_soff0, y_soff1, LABEL_SOFFIT_WOOL)

    # Lid from the plane intersection onto the plate. No vertical riser.
    # The joint angle on the rost CD holds the board edge.
    # Lid pack: one GKF under the plate top, the next layers stacked above it.
    lid_solids: list = []
    xb = g.x_gkf_kink
    if p.sdk_t > 2 * gap:
        for k in range(p.soffit_lid_layers):
            z_a = g.z_soffit_lid + k * p.sdk_t
            lid = [
                (xb + gap, z_a + gap),
                (g.poz_r0 - gap, z_a + gap),
                (g.poz_r0 - gap, z_a + p.sdk_t - gap),
                (xb + gap, z_a + p.sdk_t - gap),
            ]
            lid_solids.append(_extrude_y(xz_face(lid, LABEL_SOFFIT_GKF), y_soff0, y_soff1, LABEL_SOFFIT_GKF))

    # Horizontal CD on the lid. No UD on the plaster — the board ends on the plate.
    horiz_cd_parts: list = []
    for xc in g.horiz_cd_x_stations():
        horiz_cd_parts.append(
            _extrude_y(xz_face(g.horiz_cd_quad(xc), LABEL_SOFFIT_CD), y_soff0, y_soff1, LABEL_SOFFIT_CD)
        )
    parts.extend(horiz_cd_parts)

    # Nonius: each lid CD → krokev. The joint angle screws to the rost CD.
    horiz_zaves: list = []
    half_hang = p.hanger_w * 0.5
    z_cd_top = g.horiz_hanger_bot_z()
    for xc in g.horiz_cd_x_stations():
        z_top = g.horiz_hanger_top_z(xc) - 2.0 * gap
        hang_h = z_top - z_cd_top
        if hang_h < 20.0:
            continue
        for yc in ceil_rafter_ys:
            horiz_zaves.append(
                _box(
                    xc - half_hang,
                    yc - half_hang,
                    z_cd_top,
                    p.hanger_w,
                    p.hanger_w,
                    hang_h,
                    LABEL_SOFFIT_NONIUS,
                )
            )
    if horiz_zaves and krov_parts:
        horiz_zaves = [_cut_away(z, krov_parts, LABEL_SOFFIT_NONIUS) for z in horiz_zaves]
    parts.extend(horiz_zaves)
    # The last cabinet-slope CD is within one module of the joint, so its
    # Nonius reaches the same rafter as the soffit hanger. Notch the slope
    # hanger; the soffit rod stays the continuous piece.
    if horiz_zaves:
        for i, z in enumerate(zaves_parts):
            if getattr(z, "label", None) != LABEL_SLOPE_NONIUS:
                continue
            hits = [h for h in horiz_zaves if _aabb_hit(z, h)]
            if not hits:
                continue
            trimmed = _cut_away(z, hits, LABEL_SLOPE_NONIUS)
            zaves_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is z:
                    parts[j] = trimmed
                    break

    # Slope GKF / lid joint is intentionally unresolved. No angle, no UD.
    ud_parts: list = []

    # CD/UD rost: vertical CD behind the NH, bottom CD into a wall UD.
    # The lid CD is the only hang. The ducts are not. No timber packers —
    # nothing heavy is fixed to this frame.
    fd = p.cd_t
    half_w = p.cd_w * 0.5
    bt = p.wall_bracket_t
    z_wood0 = g.z_nabeh_bot + tb + gap + bt
    # Land on the lid. The rost CD is on the attic side of that board; a short
    # drop through the GKF is the screw, not a riser.
    z_lat_top = g.z_soffit_lid - gap
    face_h = z_lat_top - z_wood0
    x_front = g.x_nh_inner + gap
    x_wall = p.room_width - p.wall_plaster - gap
    x_ud1 = x_wall - bt - gap
    x_ud0 = x_ud1 - p.ud_w
    frame_parts: list = []
    drop_parts: list = []
    bracket_parts: list = []
    soffit_ys = g.soffit_rost_y_stations(
        y_soff0, y_soff1, g.sikmina_rost_y_stations(y_ceil0, y_ceil1)
    )
    if face_h > fd + gap and x_ud0 - (x_front + fd) > gap and z_rail_top - z_wood0 > fd:
        # UD channel along the eave wall. The bottom CDs socket into it.
        frame_parts.append(
            _box(
                x_ud0,
                y_soff0,
                z_wood0,
                p.ud_w - gap,
                y_soff1 - y_soff0,
                fd - gap,
                LABEL_SOFFIT_UD,
            )
        )
        cd_xs = g.horiz_cd_x_stations()
        for yc in soffit_ys:
            ya, yb = yc - half_w, yc + half_w
            if yb <= ya:
                continue
            # Vertical CD against the NH, beside the duct pack (not through it).
            frame_parts.append(
                _box(x_front, ya, z_wood0, fd - gap, yb - ya, face_h, LABEL_SOFFIT_CD)
            )
            # Bottom CD spanning toward the wall UD.
            frame_parts.append(
                _box(
                    x_front + fd,
                    ya,
                    z_wood0,
                    max(x_ud0 - (x_front + fd), gap),
                    yb - ya,
                    fd - gap,
                    LABEL_SOFFIT_CD,
                )
            )
            # Drop on the vertical CD, still under the lid CD (60 mm covers it).
            z_drop1 = g.z_soffit_cd_bot
            drop_h = z_drop1 - z_lat_top
            rost_x = g.x_soffit_cd
            if drop_h > gap and any(abs(x - rost_x) < 1.0 for x in cd_xs):
                # Lid CD sits right over the vertical CD.
                xc = x_front + fd * 0.5
                drop_parts.append(
                    _box(
                        xc - p.soffit_drop_w * 0.5,
                        yc - p.soffit_drop_t * 0.5,
                        z_lat_top,
                        p.soffit_drop_w,
                        p.soffit_drop_t,
                        drop_h,
                        LABEL_SOFFIT_NONIUS,
                    )
                )
            # Wall angle: horizontal under the CD + vertical up the plaster.
            leg = p.wall_bracket_leg
            z_ang = z_wood0 - bt
            bracket_parts.append(
                _box(x_wall - leg, ya, z_ang, leg - bt, yb - ya, bt, LABEL_SOFFIT_NONIUS)
            )
            bracket_parts.append(
                _box(x_wall - bt, ya, z_ang + bt, bt, yb - ya, leg - bt, LABEL_SOFFIT_NONIUS)
            )

    # Ø160 spiral ducts along the soffit, 2-over-1. Already anchored to the wall.
    duct_parts: list = []
    r_duct = p.duct_od * 0.5
    for cx, cz in g.soffit_duct_centers():
        duct_parts.append(_cyl_y(cx, y_soff0, y_soff1, cz, r_duct, LABEL_SOFFIT_DUCT))

    # Continuous angle on the plate cheek, holding the board edge. Not the hang.
    cleat_parts: list = []
    setback = g.poz_r0 - p.room_width
    cleat_leg = min(p.wall_bracket_leg, max(setback - 15.0, bt + 10.0))
    cleat_parts.append(
        _box(
            g.poz_r0 - cleat_leg,
            y_soff0,
            g.z_soffit_lid - bt - gap,
            cleat_leg - gap,
            y_soff1 - y_soff0,
            bt,
            LABEL_SOFFIT_NONIUS,
        )
    )
    cleat_parts.append(
        _box(
            g.poz_r0 - bt - gap,
            y_soff0,
            g.z_soffit_lid - cleat_leg,
            bt,
            y_soff1 - y_soff0,
            cleat_leg - bt - gap,
            LABEL_SOFFIT_NONIUS,
        )
    )

    service_steel = drop_parts + bracket_parts + cleat_parts
    if frame_parts:
        if service_steel:
            frame_parts = [_cut_away(f, service_steel, f.label) for f in frame_parts]
        wool_solid = _cut_away(wool_solid, frame_parts + service_steel, LABEL_SOFFIT_WOOL)
        parts.append(wool_solid)
        parts.extend(frame_parts)
    else:
        parts.append(wool_solid)
    if wedge_solid is not None:
        if ud_parts:
            wedge_solid = _cut_away(wedge_solid, ud_parts, LABEL_SOFFIT_WOOL)
        parts.append(wedge_solid)
    if drop_parts or horiz_zaves:
        for i, part in enumerate(parts):
            if part.label != LABEL_SOFFIT_UD or part.bounding_box().size.Y < 1000.0:
                continue
            hits = [d for d in drop_parts + horiz_zaves if _aabb_hit(part, d)]
            if hits:
                parts[i] = _cut_away(part, hits, LABEL_SOFFIT_UD)
    parts.extend(drop_parts)
    parts.extend(bracket_parts)
    parts.extend(cleat_parts)
    parts.extend(duct_parts)

    # The slope NaturHeld keeps its thickness up to the vertical soffit face,
    # so its top corner crosses the lid. The lid wins; the wool triangle is
    # what's left above the board.
    if lid_solids:
        for i, part in enumerate(parts):
            if part.label != LABEL_SLOPE_NH:
                continue
            hits = [lid for lid in lid_solids if _aabb_hit(part, lid)]
            if hits:
                parts[i] = _cut_away(part, hits, LABEL_SLOPE_NH)

    # The slope grid stops short of the lid. If a profile still meets the
    # board, the lid wins. The joint itself is not framed.
    if lid_solids:
        for i, cd in enumerate(cd_parts):
            hits = [lid for lid in lid_solids if _aabb_hit(cd, lid)]
            if not hits:
                continue
            trimmed = _cut_away(cd, hits, LABEL_SLOPE_CD)
            cd_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is cd:
                    parts[j] = trimmed
                    break
    if bracket_parts and cd_parts:
        for i, bracket in enumerate(bracket_parts):
            hits = [cd for cd in cd_parts if _aabb_hit(bracket, cd)]
            if not hits:
                continue
            trimmed = _cut_away(bracket, hits, LABEL_SOFFIT_UD)
            bracket_parts[i] = trimmed
            for j, part in enumerate(parts):
                if part is bracket:
                    parts[j] = trimmed
                    break

    # GKF last so the rost drop can pierce the lid.
    pierce = drop_parts
    for lid_solid in lid_solids:
        if pierce:
            lid_solid = _cut_away(lid_solid, pierce, LABEL_SOFFIT_GKF)
        parts.append(lid_solid)

    # --- Cabinets: clear of right plaster; top leaves furniture_gap under the box. ---
    furn_w = p.furniture_width - gap
    furn_y0, furn_y1 = g.y_furn0 + gap, g.y_furn1 - gap
    furniture = _box(g.x_furn, furn_y0, 0.0, furn_w, furn_y1 - furn_y0, p.furniture_height, LABEL_FURNITURE)
    # 300×300 columns protrude into the cabinet / soffit bay — notch those runs.
    if furn_col_parts:
        furniture = _cut_away(furniture, furn_col_parts, LABEL_FURNITURE)
        soffit_cut_labels = {
            LABEL_SOFFIT_NH,
            LABEL_SOFFIT_WOOL,
            LABEL_SOFFIT_UD,
            LABEL_SOFFIT_GKF,
            LABEL_SOFFIT_GKB,
            LABEL_SOFFIT_CD,
            LABEL_SOFFIT_NONIUS,
            LABEL_SOFFIT_DUCT,
        }
        parts = [
            _cut_away(part, furn_col_parts, part.label) if part.label in soffit_cut_labels else part
            for part in parts
        ]
    parts.append(furniture)

    # --- Bass traps (detail C/D): interior cabinets under continuous šikminy. ---
    # Gable-only hang; top soft-joints to NH face — pack itself is not interrupted.
    parts.extend(_bass_trap_parts(p, g, gap))

    parts.extend(_gable_sdk_and_pouzdra(p, g, gap))

    # Where a bass trap stands against the left wall, the brake's tape and the
    # acrylic bead stop at the trap (sealed to its board instead).
    bass = [
        x
        for x in parts
        if x.label in {LABEL_BASS_CW, LABEL_BASS_UW, LABEL_BASS_STRUT, LABEL_BASS_GKB, LABEL_BASS_WOOL}
    ]
    eave_seal = {LABEL_VB_TAPE, LABEL_EAVE_ACRYLIC}
    parts = [
        _cut_away(x, [b for b in bass if _aabb_hit(x, b)], x.label) if x.label in eave_seal else x
        for x in parts
    ]
    _add_ties_and_lights(parts, p, g, gap)
    return parts


def _cut_strict(solid: Solid, tools: list, label: str) -> Solid:
    """Like ``_cut_away``, but a failed boolean is a broken tie, not a skip."""
    out = solid
    for tool in tools:
        try:
            nxt = out.cut(tool)
        except Exception as exc:
            raise RuntimeError(f"tie clearance failed on {label}") from exc
        if nxt is None or nxt.volume <= 0:
            raise RuntimeError(f"tie clearance removed {label}")
        out = nxt
    return _paint(out, label)


def _add_ties_and_lights(parts: list, p: ObyvakParams, g: ObyvakLayout, gap: float) -> None:
    """Ø14 ties between the wall plates, and the spot pairs on the slopes.

    The bars are bored through whatever they cross (plates, walls, ceiling
    pack) with 1 mm radial clearance. They are not bored through the ducts.
    Spot heads stand just proud of the room face; they do not cut the board.
    """
    z = g.tie_axis_z(gap)
    ys = g.tie_y_stations(gap, p.room_length - gap)
    if len(ys) != 6:
        raise ValueError(f"expected 6 tie rods, the rafter grid gives {len(ys)}")
    x0, x1 = g.tie_x_ends(gap)
    radius = p.tie_d * 0.5
    rods = [_cyl_x(x0, x1, y, z, radius, LABEL_TIE_ROD) for y in ys]
    # Open the hole on the outer cheek, 1 mm past the bar end.
    cutters = [
        _cyl_x(
            g.poz_l0 - gap,
            g.poz_r0 + p.plate_w + gap,
            y,
            z,
            radius + gap,
            LABEL_TIE_ROD,
        )
        for y in ys
    ]
    try:
        cutter = cutters[0]
        for extra in cutters[1:]:
            cutter = cutter.fuse(extra)
        tools = [cutter]
    except Exception:
        tools = cutters

    for rod in rods:
        for part in parts:
            if part.label == LABEL_SOFFIT_DUCT and _aabb_hit(rod, part):
                raise ValueError("tie rod intersects a soffit duct")

    for i, part in enumerate(parts):
        if part.label in {LABEL_SOFFIT_DUCT, LABEL_TIE_ROD, LABEL_SLOPE_LIGHT}:
            continue
        if not any(_aabb_hit(part, tool) for tool in tools):
            continue
        parts[i] = _cut_strict(part, tools, part.label)

    parts.extend(rods)

    head_r = TIE_LIGHT_D * 0.5
    for x, y, zc, nx, nz, _side in g.light_contacts(gap, p.room_length - gap, gap):
        nlen = math.hypot(nx, nz) or 1.0
        nx, nz = nx / nlen, nz / nlen
        tx, tz = -nz, nx
        lift = gap + TIE_LIGHT_H * 0.5
        origin = (x + nx * lift, y, zc + nz * lift)
        solid = Plane(origin=origin, x_dir=(tx, 0.0, tz), z_dir=(nx, 0.0, nz)) * Cylinder(
            head_r, TIE_LIGHT_H, align=(Align.CENTER, Align.CENTER, Align.CENTER)
        )
        parts.append(_paint(solid, LABEL_SLOPE_LIGHT))


def _compound(parts: list, label: str = MODEL_NAME) -> Compound:
    return Compound(obj=parts, children=parts, label=label)


def _meta(p: ObyvakParams, g: ObyvakLayout) -> dict:
    return {
        "params": asdict(p),
        "kind": EXPORT_KIND,
        "derived": {
            "h_start": g.h_start,
            "z_soffit": g.z_soffit,
            "z_false": g.z_false,
            "predstena_kitchen": p.predstena_kitchen,
            "predstena_living": p.predstena_living,
            "y_furn0": g.y_furn0,
            "y_furn1": g.y_furn1,
            "room_width": p.room_width,
            "room_length": p.room_length,
            "face_gap": FACE_GAP,
        },
    }


def build(params: ObyvakParams | None = None):
    p = params or ObyvakParams()
    g = ObyvakLayout(p)
    return _compound(_parts(p, g)), _meta(p, g)
