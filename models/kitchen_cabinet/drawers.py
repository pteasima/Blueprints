"""Blum MERIVOBOX drawers, frame pull-outs, and Gridfinity inserts."""
from __future__ import annotations

import math

from .geometry import _plan_meet, c_range
from .hardware import (
    MERIVOBOX_70KG_NL,
    MERIVOBOX_AUTO_SIDES,
    MERIVOBOX_MIN_FRONT,
    MERIVOBOX_NL,
    MERIVOBOX_NL_BY_SIDE,
    MOVENTO_NL,
    PSET_DRAWERS,
    PSET_FRONTS,
    TOL,
)
from .props import _front_z0, _prop
from .types import Bay, Drawer, Zone


def inner_side_height(p: dict, letter: str) -> float:
    """Blum MERIVOBOX side height for a letter (N, M, K, E, F), mm."""
    key = "InnerSide" + str(letter).strip().upper()
    if key not in p:
        raise ValueError(f"unknown Blum side height {letter!r} (N, M, K, E)")
    return p[key]


def merivobox_space_requirement(p: dict, letter: str) -> float:
    """Blum space requirement in the cabinet (mm): profile 15 + side +
    tilt 2 (N 85.5, M 108, K 146, E 209, incl. 2 mm tilt)."""
    return p["MerivoboxProfileBelow"] + inner_side_height(p, letter) + p["MerivoboxTilt"]


def merivobox_min_front(letter: str) -> float:
    """Blum minimum decor-front height (mm) for a standard drawer or
    high-fronted pull-out. Equal to the space requirement (planning
    drawing: min. 54* + the upper min.**). Inner-drawer aluminium front
    pieces are Blum parts with different mins and are not this function."""
    letter = str(letter).strip().upper()
    if letter not in MERIVOBOX_MIN_FRONT:
        raise ValueError(f"unknown Blum side {letter!r} (N, M, K, E)")
    return MERIVOBOX_MIN_FRONT[letter]


def inner_drawers(p: dict, dr: "Drawer", zone_top: float, letters: list, clear: float | None = None) -> list[tuple]:
    """Inner drawer boxes behind one outer front (run frame mm), top first:
    the top one ``InnerTopGap`` under ``zone_top``, the rest spaced evenly
    between it and the outer drawer's box, each the outer box's plan.

    ``clear`` (mm, the band's ``inner_clear=``): the top inner drawer's
    floor sits that far under ``zone_top`` instead, so exactly that much
    room is over it (Petr, 2026-11-23, t883u: the vacuum sealer's drawer
    "just tall enough" for the closed sealer + 30)."""
    a0, a1, c0, c1, _bz0, bz1 = dr.box
    heights = [inner_side_height(p, x) for x in letters]
    top = zone_top - p["InnerTopGap"]
    if clear is not None:
        top = min(top, zone_top - clear - p["BoxBottomThickness"] + heights[0])
    free = top - bz1 - sum(heights)
    if free < 0:
        raise ValueError(f"inner drawers {letters} do not fit over the outer box ({free:.0f} mm short)")
    gap = free / len(heights)  # the same clear height over each drawer below
    need = p["MerivoboxProfileBelow"] + p["MerivoboxTilt"]
    if gap < need - TOL:
        raise ValueError(f"inner drawers {letters}: {gap:.0f} mm between boxes, Blum needs {need:g} "
                         "(profile under the side and tilt over it)")
    out = []
    z = top
    for h in heights:
        out.append((a0, a1, c0, c1, z - h, z))
        z -= h + gap
    return out


def drawer_system(element: dict) -> str:
    """Every drawer is Blum ``MERIVOBOX`` (Petr, 2026-11-23, t835u). The
    IKEA MAXIMERA assumption is gone; ``Pset_Drawers.System`` may only say
    MERIVOBOX."""
    v = str(_prop(element, PSET_DRAWERS, "System", "MERIVOBOX")).upper()
    if v != "MERIVOBOX":
        raise ValueError(f"{element['id']}: Pset_Drawers.System is MERIVOBOX (the only drawer system), got {v}")
    return v


def merivobox_nl(p: dict, side_depth: float, element: dict | None = None) -> float:
    """The bay's Blum MERIVOBOX nominal length: ``Pset_Drawers.NominalLength``
    (metres) if set, else the longest NL that fits (Blum: inside cabinet
    depth >= NL + 3). Raises when the set one does not fit."""
    want = _prop(element, PSET_DRAWERS, "NominalLength") if element is not None else None
    if want is not None:
        nl = float(want) * 1000.0
        if all(abs(nl - x) > TOL for x in MERIVOBOX_NL):
            raise ValueError(f"{element['id']}: MERIVOBOX NominalLength {nl:g} is not a Blum length {MERIVOBOX_NL}")
        if nl + p["MerivoboxDepthClearance"] > side_depth + TOL:
            raise ValueError(f"{element['id']}: MERIVOBOX NL {nl:g} needs {nl + p['MerivoboxDepthClearance']:g} "
                             f"inside depth, the cabinet has {side_depth:g}")
        return nl
    fits = [nl for nl in MERIVOBOX_NL if nl + p["MerivoboxDepthClearance"] <= side_depth + TOL]
    if not fits:
        raise ValueError(f"no MERIVOBOX nominal length fits {side_depth:.0f} mm")
    return fits[-1]


def merivobox_side(p: dict, kind: str, room: float, nl: float, want: str | None = None) -> str:
    """The drawer side letter for one band: ``want`` (the band's ``box=``) if
    given, else for a pull-out E, else the tallest of E, K, M, N whose Blum
    space requirement (profile 15 + side + tilt 2) fits ``room`` and that is
    made in ``nl``; if none fits, the lowest side made in ``nl``. That
    fallback is not Blum's front-coverage rule (min. front = space
    requirement); hanging boxes are listed, not a reason to shrink the
    front, see kitchen-cabinets.md "MERIVOBOX front coverage"."""
    if want:
        letter = str(want).strip().upper()
        if nl not in MERIVOBOX_NL_BY_SIDE.get(letter, ()):
            raise ValueError(f"MERIVOBOX side {letter} is not made in NL {nl:g} (Blum)")
        return letter
    if kind == "pullout":
        return "E"
    made = [x for x in MERIVOBOX_AUTO_SIDES if nl in MERIVOBOX_NL_BY_SIDE[x]]
    for letter in made:
        need = merivobox_space_requirement(p, letter)
        if need <= room + TOL:
            return letter
    return made[-1]


def merivobox_load(p: dict, kind: str, letter: str, inner_w: float, nl: float) -> int:
    """40 or 70 kg profile. Petr, 2026-11-23 (t895u): 70 kg wherever Blum
    makes it (NL 450-600, any box height, outer or inner), else 40 kg."""
    return 70 if any(abs(nl - x) <= TOL for x in MERIVOBOX_70KG_NL) else 40


def merivobox_profile_article(load: int, nl: float) -> str:
    """Blum MERIVOBOX BLUMOTION cabinet profile pair (left/right): 450.xxx1B
    for 40 kg, 453.xxx1B for 70 kg (NL 450-600 only), e.g. 453.5001B for NL
    500 (MERIVOBOX ordering information, "Cabinet profile left/right")."""
    return f"{450 if load == 40 else 453}.{int(round(nl))}1B"


def drawer_inside(bay: Bay, p: dict, back_y: float) -> tuple[float, float]:
    """Drawer inside width and depth (mm), Blum MERIVOBOX: LW − 51 by
    NL − 26 − 16 (see ``IKEA_DEFAULTS_MM``)."""
    nl = merivobox_nl(p, back_y - p["FrontThickness"], bay.element)
    return (bay.clear_width - p["MerivoboxWidthDeduction"],
            nl - p["MerivoboxBaseDeduction"] - p["MerivoboxBackThickness"])


def drawer_box_length(bay: Bay, p: dict, back_y: float) -> float:
    """The drawn drawer box's length (mm), back of the decor front to the
    box back: Blum inside plus the back wall, plus a box front panel if
    there is one. After t795u the main drawer has no front panel
    (``BoxFrontPanel`` 0); adding a second ``BoxWall`` here used to leave
    a 19 mm phantom cavity behind the Gridfinity (visible slack 57 mm in
    an NL 500 drawer that Blum's inside of 458 cannot use; Petr t978u)."""
    _w, inner_d = drawer_inside(bay, p, back_y)
    return inner_d + p["BoxWall"] + p["BoxFrontPanel"]


def gridfinity_main(element: dict) -> bool:
    """``Pset_Drawers.GridfinityMain`` (default true): false keeps the
    baseplate out of a main drawer that carries inner drawers (they get it)."""
    v = _prop(element, PSET_DRAWERS, "GridfinityMain", True)
    return v is True or str(v).lower() == "true"


def gridfinity_cells(p: dict, inside: float) -> tuple[int, float]:
    """Whole Gridfinity cells that fit an inside length, and the slack over
    n × pitch + play (0 when the drawer is sized to the grid)."""
    pitch, play = p["GridfinityPitch"], p["GridfinityPlay"]
    n = int(math.floor((inside - play) / pitch + 1e-6))
    return n, inside - (n * pitch + play)


def wants_gridfinity(element: dict) -> bool:
    v = _prop(element, PSET_DRAWERS, "Gridfinity", _prop(element, PSET_FRONTS, "Gridfinity", False))
    return v is True or str(v).lower() == "true"


def _drawer(bay: Bay, p: dict, zone: Zone, number: int, back_y: float, ceiling: float | None,
            obstacles: list, carcass_z0: float = 0.0, top_limit: float | None = None,
            on_board: bool = False, stack_top: float | None = None) -> Drawer:
    """One Blum MERIVOBOX drawer or pull-out in its band, from the clear
    opening (mm).

    The box (sides, back and base ``BoxWall`` / ``BoxBottomThickness``,
    closed at the front by the decor front itself) is ``drawer_box_length``
    long, centred in the opening, full extension (travel = box length). Its
    side letter comes from ``merivobox_side``. Vertically, the cabinet
    profile sits on the band's floor (the carcass bottom or a board for the
    lowest band) and takes ``MerivoboxProfileBelow`` under the side and
    ``MerivoboxTilt`` over it (Blum's space requirement: the box base is
    then 15 mm above a minimum-height front's lower edge). When that would
    reach the top rail, the hob limit or the profile of the drawer above
    (``stack_top``), the box moves down instead (``Drawer.drop``): metal
    sides cannot be trimmed. A drop that puts the box below the decor front
    is not a Blum recommendation; it happens only when the front is shorter
    than ``merivobox_min_front`` (listed in kitchen-cabinets.md "MERIVOBOX
    front coverage", agreed fronts not silently grown).
    """
    if zone.opts.get("frame"):
        return _frame_pullout(bay, p, zone, number, back_y, obstacles, carcass_z0, on_board)
    tf, wall = p["FrontThickness"], p["BoxWall"]
    inner_w, inner_d = drawer_inside(bay, p, back_y)
    if inner_w <= 0 or inner_d <= 0:
        raise ValueError(f"{bay.id}: no room for a drawer ({inner_w} × {inner_d})")
    nl = merivobox_nl(p, back_y - tf, bay.element)
    length = drawer_box_length(bay, p, back_y)
    has_inner = bool(str(zone.opts.get("inner", "")).strip())
    # Gridfinity: in the main drawer unless it carries inner drawers (then in
    # those; Petr, t795u: "for the island east side, we want gridfinity on
    # the inner drawer, the bottom main one doesnt need gridfinity").
    grid_here = (zone.kind == "drawer" and wants_gridfinity(bay.element)
                 and not (has_inner and not gridfinity_main(bay.element)))
    g = p["FrontGap"] / 2.0
    out_dir = -1.0 if bay.front_low else 1.0
    fc0, fc1 = c_range(bay, 0.0, tf)
    front = (bay.a0 + g, bay.a1 - g, fc0, fc1, _front_z0(p, zone, carcass_z0), zone.slot_z1 - g)
    lowest = abs(zone.slot_z0 - carcass_z0) < TOL
    # The profile stands on the carcass bottom or a fixed board under the
    # band (a dock); a band higher up starts on its own bottom line.
    floor0 = zone.slot_z0 + (p["BoardThickness"] if lowest or on_board else 0.0)
    roof = zone.slot_z1
    for lim in (top_limit, ceiling):
        if lim is not None:
            roof = min(roof, lim)
    letter = merivobox_side(p, zone.kind, roof - floor0, nl, zone.opts.get("box"))
    box_h = inner_side_height(p, letter)
    below, tilt = p["MerivoboxProfileBelow"], p["MerivoboxTilt"]
    bz0 = floor0 + below
    limit, why = None, ""
    for lim, name in ((top_limit, "rail"), (ceiling, "hob"), (stack_top, "drawer above")):
        if lim is not None and (limit is None or lim < limit):
            limit, why = lim, name
    drop = 0.0
    if limit is not None and bz0 + box_h + tilt > limit + TOL:
        drop = bz0 + box_h + tilt - limit
        bz0 -= drop
    if bz0 - below < carcass_z0 + p["BoardThickness"] - TOL:
        raise ValueError(f"{bay.id}: MERIVOBOX {letter} drawer {number} under the {why} does not fit "
                         f"over the carcass bottom ({carcass_z0 + p['BoardThickness'] - bz0 + below:.0f} mm short)")
    mid = (bay.clear_lo + bay.clear_hi) / 2.0
    half = inner_w / 2.0 + wall
    bc0, bc1 = c_range(bay, tf, tf + length)
    box = (mid - half, mid + half, bc0, bc1, bz0, bz0 + box_h)
    for obox, top, oid in obstacles:
        if _plan_meet(box, obox) and box[5] > top + TOL:
            raise ValueError(f"{bay.id}: MERIVOBOX {letter} drawer {number} (top {box[5]:.0f}) runs into {oid} "
                             f"(bottom {top:.0f}); pick a lower side with box=")
    floor_z = bz0 + p["BoxBottomThickness"]
    item_top = zone.slot_z1 - g - p["BoxHeightReserve"]
    items = _items(p, zone, box, out_dir, item_top, floor_z)
    twin = None
    if zone.opts.get("twin"):
        # Blum SPACE TWIN (MERIVOBOX, narrow cabinets KB 150-250, catalogue
        # 2024/25 pp. 282-283): one front carries two standard MERIVOBOX boxes,
        # each on one cabinet profile, diagonally offset (lower box on the
        # left profile, upper box on the right, as drawn on p. 283). The low
        # box is this drawer's own (box=); the upper one (twin=) sits as high
        # as the band allows (guess:, Blum gives installation heights X, not
        # the upper box position).
        up = str(zone.opts["twin"]).strip().upper()
        uh = inner_side_height(p, up)
        utop = (limit if limit is not None else roof) - tilt
        uz0 = utop - uh
        if uz0 - below < box[5] + tilt - TOL:
            raise ValueError(f"{bay.id}: SPACE TWIN {letter} + {up} do not fit one above the other "
                             f"({box[5] + tilt - uz0 + below:.0f} mm short)")
        ubox = (box[0], box[1], box[2], box[3], uz0, utop)
        back_lo = out_dir > 0
        uback = (ubox[0], ubox[1], ubox[2], ubox[2] + wall, uz0, utop) if back_lo else \
            (ubox[0], ubox[1], ubox[3] - wall, ubox[3], uz0, utop)
        items = items + [(ubox[0], ubox[1], ubox[2], ubox[3], uz0, uz0 + p["BoxBottomThickness"]),
                         (ubox[0], ubox[0] + wall, ubox[2], ubox[3], uz0, utop),
                         (ubox[1] - wall, ubox[1], ubox[2], ubox[3], uz0, utop), uback]
        twin = {"side": up, "box": ubox, "profile_z": uz0 - below, "lower_profile": "left",
                "upper_profile": "right", "floor_z": uz0 + p["BoxBottomThickness"]}
    grid = None
    if grid_here:
        n, _sw = gridfinity_cells(p, inner_w)
        m, _sd = gridfinity_cells(p, inner_d)
        grid = (n, m)
        # Snapped to the drawer front (Petr, 2026-11-23, t835u: "snapped to
        # the front of the drawer"); the slack in depth is at the back.
        f0 = tf + p["BoxFrontPanel"]  # the inside starts at the back of the front
        ic0, ic1 = c_range(bay, f0, f0 + m * p["GridfinityPitch"])
        baseplate = gridfinity_baseplate(p, n, m, mid, (ic0 + ic1) / 2.0, floor_z)
        items = items + baseplate
    else:
        baseplate = []
    return Drawer(number, zone.content, zone.nominal, zone.slot_z0, front, box, length, out_dir, 0.0,
                  kind=zone.kind, items=items, zone=zone.index,
                  inside=(inner_w, inner_d, box[5] - floor_z), floor_z=floor_z, grid=grid,
                  baseplate=baseplate, side=letter, nl=nl,
                  load=p["SpaceTwinLoad"] if twin else merivobox_load(p, zone.kind, letter, inner_w, nl), drop=drop,
                  profile_z=bz0 - below, twin=twin)


def _frame_pullout(bay: Bay, p: dict, zone: Zone, number: int, back_y: float, obstacles: list,
                   carcass_z0: float, on_board: bool) -> Drawer:
    """A pull-out that hangs bins by their rims in an MDF plate (Petr,
    2026-11-23, t842u): ``frame=u bin=WxDxH n=2`` (metres, the bin's outer
    size with its rim). No side walls and no back panel (Petr, t866u): the
    plate ``FrameBoard`` thick runs on Blum MOVENTO 760H runners (concealed,
    BLUMOTION S, manual opening) screwed under its edge strips, with one
    hole per bin (outer size less ``FrameHoleInset`` a side), the outer
    holes against the edge strips, and a notch open to the back round the
    disposer so the frame slides past it. The bins hang free below the
    plate. A small block under each arm's back end takes the runner's rear
    hook (guess:), and two 90° steel angles inside tie the plate to the
    decor front (guess:).

    The runner is the shortest MOVENTO NL whose travel (= NL, guess:) takes
    the bins ``FrameLiftClearance`` in front of the worktop edge, so they
    lift straight up. The plate sits so the bin tops stay
    ``FrameTopClearance`` under the lowest obstacle over them (the bowl)."""
    tf, t = p["FrontThickness"], p["BoardThickness"]
    fb, fs, inset = p["FrameBoard"], p["FrameSide"], p["FrameHoleInset"]
    bw, bd, bh = (float(v) * 1000.0 for v in str(zone.opts.get("bin", "0.29x0.38x0.55")).lower().split("x"))
    n = int(zone.opts.get("n", 2))
    out_dir = -1.0 if bay.front_low else 1.0
    g = p["FrontGap"] / 2.0
    fc0, fc1 = c_range(bay, 0.0, tf)
    front = (bay.a0 + g, bay.a1 - g, fc0, fc1, _front_z0(p, zone, carcass_z0), zone.slot_z1 - g)
    depth = back_y - tf
    # Bins: offsets behind the carcass front (the decor front's back is tf).
    hole0 = tf + p["FrameFrontStrip"]
    rim_back = hole0 - inset + bd
    need = rim_back + p["WorktopOverhang"] + p["FrameLiftClearance"]
    fit = [nl for nl in MOVENTO_NL if nl + 3.0 <= depth + TOL and nl - 10.0 >= rim_back - tf + p["FrameBack"]]
    nl = next((x for x in fit if x >= need - TOL), None)
    if nl is None:
        raise ValueError(f"{bay.id}: no MOVENTO length takes the bins past the worktop edge (needs {need:.0f})")
    skl = nl - 10.0
    lift = nl - rim_back - p["WorktopOverhang"]  # bins' back edge in front of the worktop edge, pulled out
    # Across: SKW = LW - 42 between the sides, centred in the opening.
    lw = bay.clear_hi - bay.clear_lo
    skw = lw - 42.0
    mid = (bay.clear_lo + bay.clear_hi) / 2.0
    ia0, ia1 = mid - skw / 2.0, mid + skw / 2.0
    hw, hd = bw - 2 * inset, bd - 2 * inset
    if n != 2:
        raise ValueError(f"{bay.id}: frame=u takes two bins, one each side of the disposer")
    holes_a = [(ia0, ia0 + hw), (ia1 - hw, ia1)]
    # The disposer (or whatever hangs lowest between the holes).
    disp = [(ob, top, oid) for ob, top, oid in obstacles if ob[5] - ob[4] > 50.0 and ob[1] - ob[0] < 300.0]
    if not disp:
        raise ValueError(f"{bay.id}: frame=u needs a disposer to go round")
    dbox = disp[0][0]
    nc = p["FrameNotchClearance"]
    notch_a = (dbox[0] - nc, dbox[1] + nc)
    strip_l, strip_r = notch_a[0] - holes_a[0][1], holes_a[1][0] - notch_a[1]
    if min(strip_l, strip_r) < -TOL:
        raise ValueError(f"{bay.id}: the bin holes run into the disposer notch ({min(strip_l, strip_r):.1f} mm)")
    dc = sorted(dbox[2:4])
    d_front = min(abs(dc[0] - c_range(bay, 0.0, 0.0)[0]), abs(dc[1] - c_range(bay, 0.0, 0.0)[0]))
    notch_front = d_front - nc
    # Heights: the plate under the bowl, the bins hanging from it.
    floor0 = zone.slot_z0 + (t if abs(zone.slot_z0 - carcass_z0) < TOL or on_board else 0.0)
    bins_plan = [(a0 - inset, a1 + inset) for a0, a1 in holes_a]
    bc = sorted(c_range(bay, hole0 - inset, rim_back))
    over = [ob[4] for ob, _top, _oid in obstacles
            if any(_plan_meet((a0, a1, bc[0], bc[1], 0, 0), ob) for a0, a1 in bins_plan)]
    roof = min(over) if over else zone.slot_z1 - g
    # Petr, 2026-11-23 (t849u): the bins hang FrameFloorGap over the carcass
    # bottom; the plate follows. Their lids must stay FrameTopClearance
    # under the lowest obstacle over them (the bowl).
    bin_bottom = floor0 + p["FrameFloorGap"]
    plate_top = bin_bottom + (bh - p["BinRim"])
    floor_gap = bin_bottom - floor0
    if plate_top + p["BinRim"] > roof - p["FrameTopClearance"] + TOL:
        raise ValueError(f"{bay.id}: hanging bins' lids reach the bowl ({roof - plate_top - p['BinRim']:.0f} mm)")
    pz0 = plate_top - fb
    runner_z0 = pz0 - p["FrameRunnerBelow"]

    def cr(o0, o1):
        return c_range(bay, o0, o1)

    f0, f1 = tf, tf + skl
    h0, h1 = hole0, hole0 + hd
    items = [
        # Rear hook blocks under the arms' back ends (no side walls, no back panel).
        (ia0 - fs, ia0, *cr(f1 - p["FrameBack"], f1), pz0 - p["FrameBackHeight"], pz0),
        (ia1, ia1 + fs, *cr(f1 - p["FrameBack"], f1), pz0 - p["FrameBackHeight"], pz0),
        # The U plate: front band, the bridge between the holes in front of
        # the notch, the strips over the sides, beside the notch, behind the holes.
        (ia0 - fs, ia1 + fs, *cr(f0, h0), pz0, plate_top),
        (holes_a[0][1], holes_a[1][0], *cr(h0, notch_front), pz0, plate_top),
        (ia0 - fs, ia0, *cr(h0, h1), pz0, plate_top),
        (ia1, ia1 + fs, *cr(h0, h1), pz0, plate_top),
        (holes_a[0][1], notch_a[0], *cr(notch_front, f1), pz0, plate_top),
        (notch_a[1], holes_a[1][0], *cr(notch_front, f1), pz0, plate_top),
        (ia0 - fs, notch_a[0], *cr(h1, f1), pz0, plate_top),
        (notch_a[1], ia1 + fs, *cr(h1, f1), pz0, plate_top),
    ]
    # Two 90° angles on the bridge between the bins, front to plate (Petr,
    # t866u: "for front panel rigidity").
    bl, bwid, bt = p["FrameBracket"], p["FrameBracketWidth"], p["FrameBracketThick"]
    bmid = (holes_a[0][1] + holes_a[1][0]) / 2.0
    for a0 in (bmid - 40.0 - bwid, bmid + 40.0):
        items.append((a0, a0 + bwid, *cr(f0, f0 + bl), plate_top, plate_top + bt))  # leg on the plate
        items.append((a0, a0 + bwid, *cr(f0, f0 + bt), plate_top, plate_top + bl))  # leg on the front
    items = [b for b in items if b[1] - b[0] > TOL and abs(b[3] - b[2]) > TOL and b[5] - b[4] > TOL]
    taper = p["BinTaper"]
    bins = []
    for a0, a1 in bins_plan:
        bins.append((a0, a1, *bc, plate_top, plate_top + p["BinRim"]))  # rim and lid on the plate
        bins.append((a0 + taper, a1 - taper, *cr(hole0 - inset + taper, rim_back - taper), bin_bottom, plate_top))
    box = (ia0 - fs, ia1 + fs, *cr(f0, f1), bin_bottom, plate_top + p["BinRim"])
    frame = dict(nl=nl, skl=skl, skw=skw, lw=lw, plate_top=plate_top, plate=fb, bin_bottom=bin_bottom,
                 floor_gap=floor_gap, roof=roof, top_gap=roof - plate_top, lid_gap=roof - plate_top - p["BinRim"],
                 hole=(hw, hd), strip=(strip_l, strip_r), notch=notch_a, notch_front=notch_front,
                 notch_clear=nc, lift=lift, front_strip=p["FrameFrontStrip"], back_strip=skl - (h1 - tf),
                 bins=bins, holes=[(a0, a1, *cr(h0, h1)) for a0, a1 in holes_a],
                 runner_z0=runner_z0, brackets=2, bracket=(bl, bwid, bt))
    return Drawer(number, zone.content, zone.nominal, zone.slot_z0, front, box, nl, out_dir, 0.0,
                  kind=zone.kind, items=items + bins, zone=zone.index,
                  inside=(skw, skl, plate_top - bin_bottom), floor_z=pz0, side="", nl=nl, load=40,
                  profile_z=runner_z0, frame=frame)


def gridfinity_baseplate(p: dict, n: int, m: int, a_mid: float, c_mid: float, z0: float) -> list:
    """An n × m Gridfinity baseplate as boxes (run frame mm): a thin floor
    and a rib on every grid line, centred on the drawer's inside floor. A
    drawing aid, not the real profiled plate."""
    pitch, h, rib = p["GridfinityPitch"], p["GridfinityHeight"], p["GridfinityRib"]
    w, d = n * pitch, m * pitch
    a0, c0 = a_mid - w / 2.0, c_mid - d / 2.0
    out = [(a0, a0 + w, c0, c0 + d, z0, z0 + p["GridfinityFloor"])]
    for i in range(n + 1):
        x = a0 + i * pitch
        out.append((max(a0, x - rib / 2.0), min(a0 + w, x + rib / 2.0), c0, c0 + d, z0, z0 + h))
    for j in range(m + 1):
        y = c0 + j * pitch
        out.append((a0, a0 + w, max(c0, y - rib / 2.0), min(c0 + d, y + rib / 2.0), z0, z0 + h))
    return out


def _items(p: dict, zone: Zone, box: tuple, out_dir: float, item_top: float | None = None,
           floor_z: float | None = None) -> list:
    """Baskets (shelves) or bins riding in a pull-out box (run frame mm).

    ``items=shelves n=N``: N boards spread evenly from the box floor up to
    ``item_top`` (the front less ``BoxHeightReserve``; guess:, they stand for
    inner pull-outs or a rack behind the tall front, since a MERIVOBOX box
    stops at its E side). ``items=bins n=N``: N equal bins over the inside
    width up to ``item_top`` (guess:), or with ``bin=WxDxH`` (metres) N bins
    of that real size standing on the floor, front against the decor front,
    the outer two against the box sides and the rest spread evenly between.
    """
    kind = zone.opts.get("items")
    n = int(zone.opts.get("n", 0))
    if not kind or n <= 0:
        return []
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = box
    ia0, ia1 = a0 + wall, a1 - wall
    iz0 = floor_z if floor_z is not None else z0 + p["BoxBottomThickness"]
    top = item_top if item_top is not None else z1
    # The decor front closes the box: the inside runs from the box's front
    # end to its back wall.
    if out_dir < 0:  # pulls toward -c: the front end is c0
        ic_front, ic_back = c0, c1 - wall
    else:
        ic_front, ic_back = c1, c0 + wall
    ic0, ic1 = sorted((ic_front, ic_back))
    out = []
    if kind == "shelves":
        board = wall
        if zone.opts.get("at") is not None and n == 1:
            # ``at=`` metres over the box floor (t870u: SF-T3's oven-tray
            # shelf on the E box's top edge).
            z = iz0 + float(zone.opts["at"]) * 1000.0
            return [(ia0, ia1, ic0, ic1, z, z + board)]
        step = (top - iz0 - n * board) / (n + 1)
        for k in range(n):
            z = iz0 + step * (k + 1) + board * k
            out.append((ia0, ia1, ic0, ic1, z, z + board))
        return out
    if kind == "bins":
        size = zone.opts.get("bin")
        if size:
            bw, bd, bh = (float(v) * 1000.0 for v in str(size).lower().split("x"))
            if n * bw > ia1 - ia0 + TOL or bd > ic1 - ic0 + TOL:
                raise ValueError(f"{n} bins {bw:g} x {bd:g} do not fit the {ia1 - ia0:g} x {ic1 - ic0:g} inside")
            step = (ia1 - ia0 - bw) / (n - 1) if n > 1 else 0.0
            for k in range(n):
                x0 = ia0 + k * step if n > 1 else (ia0 + ia1 - bw) / 2.0
                d0, d1 = sorted((ic_front, ic_front - out_dir * bd))
                out.append((x0, x0 + bw, d0, d1, iz0, iz0 + bh))
            return out
        gap = p["BinGap"]
        w = (ia1 - ia0 - (n + 1) * gap) / n
        for k in range(n):
            x0 = ia0 + gap + k * (w + gap)
            out.append((x0, x0 + w, ic0 + gap, ic1 - gap, iz0, top))
        return out
    raise ValueError(f"pull-out items={kind!r}: shelves or bins")


def bin_clearance(dr: "Drawer", obstacles: list) -> tuple[float, float]:
    """Smallest gaps (mm) between a pull-out's bins and the things hanging
    into the bay (a sink bowl, a disposer), drawer closed: beside them in
    plan where the heights overlap (``side``), and from a bin top up to an
    obstacle's bottom where they overlap in plan (``top``). The drawer
    slides along c, so a bin beside a disposer stays beside it."""
    side, top = math.inf, math.inf
    for it in dr.items:
        for box, _oid in obstacles:
            plan = _plan_meet(it, box)
            if plan:
                top = min(top, box[4] - it[5])
            elif it[4] < box[5] and box[4] < it[5]:
                # beside it: the gap across the sliding direction
                side = min(side, max(box[0] - it[1], it[0] - box[1]))
    return (side if side < math.inf else 0.0, top if top < math.inf else 0.0)


def drawer_boxes(dr: Drawer, p: dict) -> list:
    """Front plus the box (bottom, two sides, back; a box front board only
    when ``BoxFrontPanel`` > 0), run frame, then anything riding in it
    (baskets, bins, a Gridfinity baseplate). The decor front closes the box."""
    if dr.frame:  # hanging-bin frame: its pieces are the items
        return [dr.front, *dr.items]
    wall, fp = p["BoxWall"], p["BoxFrontPanel"]
    a0, a1, c0, c1, z0, z1 = dr.box
    back_lo = dr.out > 0  # pulls toward +c, so its back is the c0 end
    back = (a0, a1, c0, c0 + wall, z0, z1) if back_lo else (a0, a1, c1 - wall, c1, z0, z1)
    out = [
        dr.front,
        (a0, a1, c0, c1, z0, z0 + p["BoxBottomThickness"]),
        (a0, a0 + wall, c0, c1, z0, z1),
        (a1 - wall, a1, c0, c1, z0, z1),
    ]
    if fp > 0:
        out.append((a0, a1, c1 - fp, c1, z0, z1) if back_lo else (a0, a1, c0, c0 + fp, z0, z1))
    return [*out, back, *dr.items]


def inner_drawer_boxes(p: dict, box: tuple, out: float) -> list:
    """An inner drawer: its low front piece (full side height, at the pull
    end), bottom, two sides and back, run frame mm. Blum's front piece is a
    steel profile; drawn ``BoxWall`` thick like the outer box."""
    wall = p["BoxWall"]
    a0, a1, c0, c1, z0, z1 = box
    front_lo = out < 0  # pulls toward -c: its front piece is at c0
    lo_wall = (a0, a1, c0, c0 + wall, z0, z1)
    hi_wall = (a0, a1, c1 - wall, c1, z0, z1)
    front, back = (lo_wall, hi_wall) if front_lo else (hi_wall, lo_wall)
    return [front, (a0, a1, c0, c1, z0, z0 + p["BoxBottomThickness"]),
            (a0, a0 + wall, c0, c1, z0, z1), (a1 - wall, a1, c0, c1, z0, z1), back]


def latch_boxes(p: dict, dr: "Drawer", inner_box: tuple) -> list:
    """Blum ZI7.0M07: the latch on the inner drawer's front piece and its
    housing let into the back of the outer front, centred across the drawer,
    at the front piece's mid-height (drawn as boxes)."""
    dia, depth = p["LatchDiameter"], p["LatchDepth"]
    a0, a1, _c0, _c1, z0, z1 = inner_box
    am, zm = (a0 + a1) / 2.0, (z0 + z1) / 2.0
    fa0, fa1, fc0, fc1, _fz0, _fz1 = dr.front
    inner_face = fc1 if dr.out < 0 else fc0  # the front's carcass side
    into = 1.0 if dr.out < 0 else -1.0  # from the inner face into the front
    h0, h1 = sorted((inner_face, inner_face - into * depth))
    housing = (am - dia / 2, am + dia / 2, h0, h1, zm - dia / 2, zm + dia / 2)
    gap0, gap1 = sorted((inner_face, inner_face + into * p["FrontThickness"]))
    latch = (am - dia / 2, am + dia / 2, gap0, gap1, zm - dia / 4, zm + dia / 4)
    return [housing, latch]
