"""Fronts, grips, hinged leaves, and Blum AVENTOS lift motion."""
from __future__ import annotations

import math
from dataclasses import replace

from .drawers import (
    _drawer,
    bin_clearance,
    drawer_boxes,
    drawer_system,
    gridfinity_baseplate,
    gridfinity_cells,
    inner_drawer_boxes,
    inner_drawers,
    latch_boxes,
    merivobox_load,
    merivobox_profile_article,
    wants_gridfinity,
)
from .geometry import _boxes_meet, _even, _rot, _tilt_point, c_range
from .hardware import (
    AVENTOS,
    DRAWER_KINDS,
    LIFT_ARM,
    LIFT_FRONT_DENSITY,
    LIFT_HF_LOWER_OPEN_DEG,
    LIFT_HF_SHELF_SETBACK,
    LIFT_OPEN_DEG,
    LIFT_STEPS,
    MERIVOBOX_COLOUR,
    PSET_FRONTS,
    PSET_RUN,
    TOL,
    _NO_BOARD_BETWEEN,
)
from .props import _front_z0, _prop, zones
from .types import Bay, Grip, Leaf, LiftJoint, Part, Zone, grip_profile


def _grip_edge(zone: "Zone", role: str, box: tuple) -> str | None:
    """Which edge of a front gets the J grip. The band's ``grip=`` option
    wins (top | bottom | side | none: per front, so a tall door can be
    switched to a horizontal grip). Else (Petr, 2026-11-22 c, t784u): drawers
    and low doors the top edge; tall doors (over 1200 high) the vertical edge
    away from the hinge, like IKEA's VOXTORP "vertical handle" tall doors;
    doors starting above 1400 (the upper doors of tall cabinets) the bottom
    edge (guess:, within reach). Pull-outs and an integrated dishwasher's
    decor panel: the top edge too (Petr, 2026-11-23, t865u: "same J grip
    everywhere"). Fixed fronts, fillers, lift-ups: none unless asked."""
    opt = zone.opts.get("grip")
    if opt:
        return str(opt).lower()
    z0, z1 = box[4], box[5]
    if role in ("Drawer", "PullOut", "DecorPanel"):
        return "top"
    if role == "Door":
        if z1 - z0 > 1200.0:
            return "side"
        if z0 > 1400.0:
            return "bottom"
        return "top"
    return None


def _hinge_a(bay: Bay, hinge: str, a0: float, a1: float) -> float:
    """The hinge edge in the run frame. Facing the front you look into the
    carcass: along +c when the front is the c0 face, so your left is -a;
    along -c otherwise, so your left is +a."""
    left_is_low = bay.front_low
    if hinge == "L":
        return a0 if left_is_low else a1
    return a1 if left_is_low else a0


def _leaves(bay: Bay, p: dict, zone: Zone, front_box: tuple) -> dict:
    """Door leaves (hinge, a0, a1) and fixed fillers (a0, a1) of a band."""
    g = p["FrontGap"] / 2.0
    a0, a1 = bay.a0, bay.a1
    if zone.kind == "doors":
        mid = (a0 + a1) / 2.0
        lo_hinge, hi_hinge = ("L", "R") if bay.front_low else ("R", "L")
        return {"doors": [(lo_hinge, a0 + g, mid - g), (hi_hinge, mid + g, a1 - g)], "fillers": []}
    hinge = zone.opts.get("hinge", "")
    if hinge not in ("L", "R"):
        raise ValueError(f"{bay.id}: door band {zone.index} needs hinge=L or hinge=R")
    width = zone.opts.get("width")
    if width is None:
        return {"doors": [(hinge, a0 + g, a1 - g)], "fillers": []}
    w = float(width) * 1000.0
    if w > a1 - a0 + TOL:
        raise ValueError(f"{bay.id}: door {w} wider than the bay")
    side = zone.opts.get("filler", hinge)
    # The filler side as a run-frame end: L is the low-a end when the front faces -c.
    filler_low = (side == "L") == bay.front_low
    split = a0 + (a1 - a0 - w) if filler_low else a0 + w
    if filler_low:
        return {"doors": [(hinge, split + g, a1 - g)], "fillers": [(a0 + g, split - g)]}
    return {"doors": [(hinge, a0 + g, split - g)], "fillers": [(split + g, a1 - g)]}


def _racks(bay: Bay, p: dict, span: tuple, front_box: tuple, n: int) -> list:
    """Door shelves on the leaf's back, evenly up the leaf (guess:). They
    overlap the leaf by 0.5 mm so the leaf and its racks are one solid."""
    if n <= 0:
        return []
    tf = p["FrontThickness"]
    a0, a1 = span[0] + p["RackInset"], span[1] - p["RackInset"]
    c0, c1 = c_range(bay, tf - 0.5, tf + p["RackDepth"])
    z_lo, z_hi = front_box[4], front_box[5]
    step = (z_hi - z_lo) / (n + 1)
    return [(a0, a1, c0, c1, z_lo + step * (k + 1) - p["RackHeight"] / 2.0,
             z_lo + step * (k + 1) + p["RackHeight"] / 2.0) for k in range(n)]


def _hf_fourbar(lo: float, fhu: float, ua: float, mz: float, theta: list, tf: float, full: float) -> dict:
    """AVENTOS HF top as a four-bar, in (u, z) about the top hinge (u out
    of the inner face, z up, mm). The upper front's centre hinge is ``lo``
    below the top hinge; the lower front (``fhu`` long) hangs from it; the
    lever pivots at (``ua``, ``mz``) and is fixed to the lower front at
    (``ua``, ``-s``) in the lower front's frame, plumb under the pivot when
    shut. ``s`` is solved so the lower front hangs at
    ``LIFT_HF_LOWER_OPEN_DEG`` with the upper front at ``full`` (the
    mechanism without a stop); ``theta`` may end earlier (a stop). Returns
    ``s``, the lower front's absolute angle and the lever's turn per sample
    of ``theta``, the open bottom edge of the lower front (its farthest u,
    its lowest corner's z) and ``reach``: the farthest u and highest z any
    corner of either front passes on the way to ``theta[-1]``."""
    fine = [full * k / 400 for k in range(401)]

    def run(s: float, samples: list):
        r = (-lo - s) - mz
        r = abs(r)
        alpha, prev, out = 0.0, 0.0, []
        for th in samples:
            pu, pz = _rot((0.0, -lo), th)
            a = prev
            for _ in range(40):  # Newton on |A - M|^2 - r^2
                ou, oz = _rot((ua, -s), a)
                au, az = pu + ou, pz + oz
                g = (au - ua) ** 2 + (az - mz) ** 2 - r * r
                du, dz = _rot((ua, -s), a + math.pi / 2)  # d/da of the offset
                dg = 2 * (au - ua) * du + 2 * (az - mz) * dz
                if abs(dg) < 1e-9:
                    break
                step = g / dg
                a -= max(-0.2, min(0.2, step))
                if abs(step) < 1e-10:
                    break
            prev = alpha = a
            out.append((th, alpha, (au, az)))
        return out, r

    lo_s, hi_s = 0.05 * fhu, 0.95 * fhu
    target = math.radians(LIFT_HF_LOWER_OPEN_DEG)
    for _ in range(50):  # the open lower angle rises with s
        mid = (lo_s + hi_s) / 2.0
        path, _r = run(mid, fine)
        if path[-1][1] > target:
            hi_s = mid
        else:
            lo_s = mid
    s = (lo_s + hi_s) / 2.0
    path, r = run(s, fine)
    for th, a, _A in path:
        pu, _pz = _rot((0.0, -lo), th)
        bu, _bz = _rot((0.0, -fhu), a)
        if pu + bu < -TOL:
            raise ValueError("AVENTOS HF: the lower front's bottom edge would pass into the carcass")
    sweep, _r = run(s, [theta[-1] * k / 400 for k in range(401)])
    reach_u, reach_z = -1e9, -1e9
    for th, a, _A in sweep:
        pu, pz = _rot((0.0, -lo), th)
        pts = [_rot(c, th) for c in ((0.0, 0.0), (tf, 0.0), (0.0, -lo), (tf, -lo))]
        pts += [(pu + q[0], pz + q[1]) for q in (_rot(c, a) for c in ((0.0, 0.0), (tf, 0.0), (0.0, -fhu), (tf, -fhu)))]
        reach_u = max(reach_u, max(q[0] for q in pts))
        reach_z = max(reach_z, max(q[1] for q in pts))
    sampled, _r = run(s, theta)
    a0 = (0.0, -lo - s - mz)
    lever = []
    for _th, _a, (au, az) in sampled:
        v1 = (au - ua, az - mz)
        lever.append(math.atan2(a0[0] * v1[1] - a0[1] * v1[0], a0[0] * v1[0] + a0[1] * v1[1]))
    th, a, _A = sampled[-1]
    pu, pz = _rot((0.0, -lo), th)
    # The bottom edge's two corners: on the hinge line (inner face) and on
    # the outer face, the front's thickness out from it.
    corners = [_rot((0.0, -fhu), a), _rot((tf, -fhu), a)]
    bottom = (max(pu + c[0] for c in corners), min(pz + c[1] for c in corners))
    return {"s": s, "alpha": [x[1] for x in sampled], "lever": lever, "bottom": bottom, "reach": (reach_u, reach_z)}


class _FrontsMixin:
    # --- fronts and interiors (Pset_Fronts) ---------------------------------

    def _fronts(self, bay: Bay, p: dict, z0: float, z1: float, back_y: float, ceiling: float | None):
        """Every front, drawer, door, shelf and niche of one bay, from its
        zones (``Pset_Fronts.Layout``, see ``zones``) and the parameters.

        Nothing here is a typed-in coordinate: each piece comes from the bay's
        clear opening (dividers), its carcass height and the zone heights.
        """
        t, tf = p["BoardThickness"], p["FrontThickness"]
        g = p["FrontGap"] / 2.0
        bay.zones = zones(bay.element, z1 - z0, t, z0)
        fc0, fc1 = self.c_range(bay, 0.0, tf)
        out = -1.0 if bay.front_low else 1.0
        single = len(bay.zones) == 1
        drawer_no = 0
        leaf_no = 0
        front_no = 0
        lo, hi = bay.clear_lo, bay.clear_hi
        stack_top = None  # the cabinet profile of the drawer just above (MERIVOBOX stacking)
        for i, zone in enumerate(bay.zones):
            if zone.kind not in DRAWER_KINDS and zone.kind != "gap":
                stack_top = None
            below = bay.zones[i + 1] if i + 1 < len(bay.zones) else None
            top_zone = i == 0
            # A fixed board between two bands, except between drawers
            # (and a ``gap`` holding a pending drawer band).
            board_below = below is not None and not (
                zone.kind in _NO_BOARD_BETWEEN and below.kind in _NO_BOARD_BETWEEN)
            if board_below:
                bc0, bc1 = self.c_range(bay, tf, back_y)
                self.add(Part(f"{bay.id}-BOARD{zone.index}", f"Mezidno {zone.index}", "Board",
                              [(lo, hi, bc0, bc1, zone.slot_z0, zone.slot_z0 + t)],
                              props={"Zone": zone.index}), bay)
            if zone.kind == "gap":
                # No front or box. Pin the next drawer's stack to this
                # floor so its box stays where it was (t972u).
                stack_top = zone.slot_z0
                self.run.notes.append(
                    f"open: {bay.id} D2/D3 heights are pending Petr's next decision "
                    f"(a {zone.nominal:.0f} mm gap holds the lower band still)"
                )
                continue
            # Clear interior of the band: above the board under it (or the
            # carcass bottom), below the board over it (or the top/rails).
            # The lowest band stands on the carcass bottom (``BottomThickness``).
            in_z0 = zone.slot_z0 + ((p["BottomThickness"] or t) if below is None else t)
            in_z1 = zone.slot_z1 - (t if top_zone else 0.0)
            front_box = (bay.a0 + g, bay.a1 - g, fc0, fc1, _front_z0(p, zone, z0), zone.slot_z1 - g)
            base = {"Zone": zone.index, "Kind": zone.kind, "NominalHeight": round(zone.nominal / 1000.0, 6),
                    "Contents": zone.content or None}
            if zone.kind in DRAWER_KINDS:
                drawer_no += 1
                dr = _drawer(bay, p, zone, drawer_no, back_y, ceiling, self._obstacle_ceiling(bay, p),
                             carcass_z0=z0, top_limit=(z1 - t) if top_zone else None,
                             on_board=board_below, stack_top=stack_top)
                stack_top = dr.profile_z
                if zone.opts.get("front_top") is not None:
                    # ``front_top=`` (absolute z, metres): the decor front
                    # reaches past its band over the board above (Petr,
                    # 2026-11-23, t874u: SF-T3's drawer front covers the
                    # oven board's edge). Only upward, never into the box.
                    ft = float(zone.opts["front_top"]) * 1000.0
                    if ft < dr.front[5] - TOL:
                        raise ValueError(f"{bay.id}: front_top {ft:g} is below the band's front top {dr.front[5]:g}")
                    dr.front = (*dr.front[:5], ft)
                name = ("Výsuv" if zone.kind == "pullout" else "Šuplík") + f" {drawer_no} {dr.content}"
                drawer_system(bay.element)
                if dr.frame:
                    fr = dr.frame
                    props = dict(base, System="Blum MOVENTO 760H, BLUMOTION S (manual opening)",
                                 RunnerArticle=f"760H{int(dr.nl)}1S", NominalLength=round(dr.nl / 1000.0, 6),
                                 Extension=round(dr.extension / 1000.0, 6), LoadClass=40,
                                 FrameKind="U-shaped MDF plate, no side walls, runners screwed under the plate, bins hung free by the rim",
                                 RunnerHeight=round(fr["runner_z0"] / 1000.0, 6),
                                 FrontBrackets=f"{fr['brackets']} × 90° steel angle {fr['bracket'][0]:g}×{fr['bracket'][0]:g}×{fr['bracket'][2]:g}, {fr['bracket'][1]:g} wide (guess:)",
                                 FrameBoard=round(fr["plate"] / 1000.0, 6),
                                 FramePlateTop=round(fr["plate_top"] / 1000.0, 6),
                                 FrameInsideWidth=round(fr["skw"] / 1000.0, 6),
                                 FrameLength=round(fr["skl"] / 1000.0, 6),
                                 HoleWidth=round(fr["hole"][0] / 1000.0, 6), HoleDepth=round(fr["hole"][1] / 1000.0, 6),
                                 NotchStrip=round(min(fr["strip"]) / 1000.0, 6),
                                 PlateToBowl=round(fr["top_gap"] / 1000.0, 6),
                                 BinTopToBowl=round(fr["lid_gap"] / 1000.0, 6),
                                 BinBottomToFloor=round(fr["floor_gap"] / 1000.0, 6),
                                 BinsPastWorktop=round(fr["lift"] / 1000.0, 6),
                                 Items=n_bins if (n_bins := len(fr["bins"]) // 2) else None, ItemKind="bins (hung)")
                    self.run.notes.append(
                        f"open: {bay.id} bin frame: MOVENTO NL {dr.nl:g}, plate top {fr['plate_top']:g} "
                        f"({fr['top_gap']:g} under the bowl), bins {fr['floor_gap']:g} over the floor, "
                        f"{min(fr['strip']):g} mm of MDF beside the disposer notch (trap, outlet and hoses not modelled)")
                    self.run.notes.append(
                        f"open: {bay.id} bin frame has no side walls: MOVENTO is made for wooden drawer sides "
                        f"12-16 mm; here its locking devices screw under the plate's {p['FrameSide']:g} mm edge strips "
                        f"and the rear hooks go into blocks under the arms (runner bottom z {fr['runner_z0']:g}); "
                        f"check with Blum or the joiner")
                else:
                    props = None
                props = props or dict(base, System="Blum MERIVOBOX",
                             BoxColour=MERIVOBOX_COLOUR,
                             NominalLength=round(dr.nl / 1000.0, 6),
                             DrawerSide=dr.side, LoadClass=dr.load,
                             ProfileArticle=None if dr.twin else merivobox_profile_article(dr.load, dr.nl),
                             BoxBelowFront=round(dr.drop / 1000.0, 6) if dr.drop > TOL else None,
                             Extension=round(dr.extension / 1000.0, 6),
                             BoxWidth=round((dr.box[1] - dr.box[0]) / 1000.0, 6),
                             BoxDepth=round(abs(dr.box[3] - dr.box[2]) / 1000.0, 6),
                             BoxHeight=round((dr.box[5] - dr.box[4]) / 1000.0, 6),
                             Trimmed=round(dr.trimmed / 1000.0, 6) if dr.trimmed else None,
                             Items=(len(dr.items) if dr.grid is None else None) or None,
                             ItemKind=zone.opts.get("items"),
                             InsideWidth=round(dr.inside[0] / 1000.0, 6),
                             InsideDepth=round(dr.inside[1] / 1000.0, 6),
                             InsideHeight=round(dr.inside[2] / 1000.0, 6),
                             Gridfinity=f"{dr.grid[0]}x{dr.grid[1]}" if dr.grid else None,
                             GridfinitySlackWidth=round(gridfinity_cells(p, dr.inside[0])[1] / 1000.0, 6) if dr.grid else None,
                             GridfinitySlackDepth=round(gridfinity_cells(p, dr.inside[1])[1] / 1000.0, 6) if dr.grid else None)
                if dr.twin:
                    tw = dr.twin
                    props.update(System="Blum MERIVOBOX SPACE TWIN (BLUMOTION, manual opening)",
                                 Items=None, ItemKind=None,
                                 TwinBoxes=f"{dr.side} (low) + {tw['side']} (high)",
                                 TwinUpperBoxBottom=round(tw["box"][4] / 1000.0, 6),
                                 TwinProfiles="lower box: left cabinet profile; upper box: right (diagonally offset)",
                                 TwinProfileHeights=f"{dr.profile_z:g} / {tw['profile_z']:g}")
                    self.run.notes.append(
                        f"open: {bay.id} SPACE TWIN {dr.side} + {tw['side']}: inside {dr.inside[0]:g} wide, profiles at "
                        f"z {dr.profile_z:g} (left) and {tw['profile_z']:g} (right); upper box height is a guess")
                if dr.grid:
                    sw = gridfinity_cells(p, dr.inside[0])[1]
                    sd = gridfinity_cells(p, dr.inside[1])[1]
                    if abs(sw) > TOL or abs(sd) > TOL:
                        self.run.notes.append(f"open: {bay.id}-D{drawer_no} inside {dr.inside[0]:g} x {dr.inside[1]:g} is "
                                              f"{sw:+g} / {sd:+g} off the Gridfinity {dr.grid[0]}x{dr.grid[1]} size "
                                              f"(scripts/gridfinity_fit.py)")
                if zone.opts.get("items") == "bins" and bay.obstacles:
                    side_gap, top_gap = bin_clearance(dr, bay.obstacles)
                    props.update(BinClearanceSide=round(side_gap / 1000.0, 6), BinClearanceTop=round(top_gap / 1000.0, 6))
                    if side_gap < -TOL or top_gap < -TOL:
                        raise ValueError(f"{bay.id}: the bins run into the sink or disposer "
                                         f"(side {side_gap:.1f}, top {top_gap:.1f} mm)")
                    self.run.notes.append(f"open: {bay.id} bins clear the disposer by {side_gap:.1f} mm each side "
                                          f"and the bowl by {top_gap:.1f} mm on top (drawn sizes, no trap or outlet)")
                inner = [x for x in str(zone.opts.get("inner", "")).split(",") if x.strip()]
                boxes = drawer_boxes(dr, p)
                iclear = zone.opts.get("inner_clear")
                inner_boxes = (inner_drawers(p, dr, in_z1, inner, float(iclear) * 1000.0 if iclear is not None else None)
                               if inner else [])
                latch = str(zone.opts.get("latch", "top")) if inner else None
                if inner:
                    props.update(InnerDrawers=",".join(x.strip().upper() for x in inner), InnerSystem="Blum MERIVOBOX",
                                 Latch="Blum ZI7.0M07" if latch == "top" else None,
                                 OuterBoxSide=round((dr.box[5] - dr.box[4]) / 1000.0, 6))
                if latch == "top":
                    # Blum ZI7.0M07: its housing is drilled into the back of
                    # the front (rides with the front); the driver clips on the
                    # top inner drawer (rides with that drawer, below).
                    boxes += latch_boxes(p, dr, inner_boxes[0])[:1]
                grips, edge = self._grips(bay, p, zone, "Drawer" if zone.kind == "drawer" else "PullOut", dr.front)
                if edge:
                    props.update(Grip=f"J {edge}")
                outer = self.add(Part(f"{bay.id}-D{drawer_no}", name.strip(), "Drawer" if zone.kind == "drawer" else "PullOut",
                                      boxes, drawer=dr, props=props, grips=grips), bay)
                if zone.opts.get("shelf") is not None:
                    # Petr, 2026-11-23 (t871u): a FIXED shelf in the carcass
                    # behind the drawer front, over the drawer's box, for
                    # laying oven trays on; not part of the pull-out.
                    # ``shelf=`` is its top z in metres (absolute).
                    st = float(zone.opts["shelf"]) * 1000.0
                    sz0 = st - t
                    if sz0 < dr.box[5] + p["ShelfSetback"] - TOL or st > zone.slot_z1 - TOL:
                        raise ValueError(f"{bay.id}: fixed shelf {sz0:g}-{st:g} must sit over the drawer box "
                                         f"(top {dr.box[5]:g}) and under the band top {zone.slot_z1:g}")
                    sc0, sc1 = self.c_range(bay, tf + p["ShelfSetback"], back_y)
                    self.add(Part(f"{bay.id}-SH{zone.index}-1", "Police na plechy", "Shelf",
                                  [(bay.clear_lo, bay.clear_hi, sc0, sc1, sz0, st)],
                                  props={"Zone": zone.index, "Kind": "fixed shelf over the drawer box",
                                         "ShelfTop": round(st / 1000.0, 6),
                                         "OverDrawerBox": round((sz0 - dr.box[5]) / 1000.0, 6),
                                         "UnderBoard": round((zone.slot_z1 - st) / 1000.0, 6),
                                         "BehindFront": round(p["ShelfSetback"] / 1000.0, 6)}), bay)
                # Inner drawers (2026-11-20 c): each its own part and motion,
                # opening only with the front open (``Parent``); the coupled
                # top one (ZI7.0M07) opens with the front, the front closing
                # closes them all (viewer: doors.js).
                for k, ib in enumerate(inner_boxes, start=1):
                    coupled = k == 1 and latch == "top"
                    ifloor = ib[4] + p["BoxBottomThickness"]
                    iboxes = inner_drawer_boxes(p, ib, dr.out)
                    igrid, iplate = None, []
                    # Its own front piece and back: inside = box − 2 walls deep.
                    iw, idp = dr.inside[0], abs(ib[3] - ib[2]) - 2 * p["BoxWall"]
                    if zone.kind == "drawer" and wants_gridfinity(bay.element):
                        igrid = (gridfinity_cells(p, iw)[0], gridfinity_cells(p, idp)[0])
                        # Snapped to the inner drawer's front piece (Petr, t835u).
                        gd = igrid[1] * p["GridfinityPitch"]
                        if dr.out < 0:
                            ic0 = ib[2] + p["BoxWall"]
                            ic1 = ic0 + gd
                        else:
                            ic1 = ib[3] - p["BoxWall"]
                            ic0 = ic1 - gd
                        iplate = gridfinity_baseplate(p, igrid[0], igrid[1], (ib[0] + ib[1]) / 2.0, (ic0 + ic1) / 2.0, ifloor)
                    if igrid:
                        isw, isd = gridfinity_cells(p, iw)[1], gridfinity_cells(p, idp)[1]
                        if abs(isw) > TOL or abs(isd) > TOL:
                            self.run.notes.append(f"open: {bay.id}-D{drawer_no}-I{k} inside {iw:g} x {idp:g} is "
                                                  f"{isw:+g} / {isd:+g} off the Gridfinity {igrid[0]}x{igrid[1]} size "
                                                  f"(scripts/gridfinity_fit.py)")
                    if coupled:
                        iboxes += latch_boxes(p, dr, ib)[1:]
                    idr = replace(dr, front=iboxes[0], box=ib, items=list(iplate), baseplate=list(iplate), side=inner[k - 1].strip().upper(),
                                  load=merivobox_load(p, "drawer", inner[k - 1].strip().upper(), iw, dr.nl),
                                  grid=igrid, floor_z=ifloor,
                                  inside=(iw, idp, ib[5] - ifloor))
                    self.add(Part(f"{bay.id}-D{drawer_no}-I{k}", f"Vnitřní šuplík {k}", "InnerDrawer",
                                  iboxes + iplate, drawer=idr,
                                  props={"Zone": zone.index, "Kind": "inner", "System": "Blum MERIVOBOX",
                                         "BoxColour": MERIVOBOX_COLOUR,
                                         "NominalLength": round(dr.nl / 1000.0, 6),
                                         "DrawerSide": inner[k - 1].strip().upper(),
                                         "FrontPieceLength": round((bay.clear_width - p["MerivoboxInnerFrontDeduction"]) / 1000.0, 6),
                                         "SideHeight": round((ib[5] - ib[4]) / 1000.0, 6), "Latched": coupled,
                                         "ClearAbove": round((in_z1 - ifloor) / 1000.0, 6),
                                         "Latch": "Blum ZI7.0M07" if coupled else None, "Parent": outer.id, "LoadClass": idr.load,
                                         "ProfileArticle": merivobox_profile_article(idr.load, dr.nl),
                                         "InsideWidth": round(iw / 1000.0, 6), "InsideDepth": round(idp / 1000.0, 6),
                                         "Gridfinity": f"{igrid[0]}x{igrid[1]}" if igrid else None,
                                         "GridfinitySlackWidth": round(gridfinity_cells(p, iw)[1] / 1000.0, 6) if igrid else None,
                                         "GridfinitySlackDepth": round(gridfinity_cells(p, idp)[1] / 1000.0, 6) if igrid else None}), bay)
            elif zone.kind in ("door", "doors"):
                leaves = _leaves(bay, p, zone, front_box)
                for hinge, a0, a1 in leaves["doors"]:
                    leaf_no += 1
                    hinge_a = _hinge_a(bay, hinge, a0, a1)
                    face_c = fc0 if bay.front_low else fc1
                    boxes = [(a0, a1, fc0, fc1, front_box[4], front_box[5])]
                    racks = int(zone.opts.get("racks", 0))
                    boxes += _racks(bay, p, (a0, a1), front_box, racks)
                    leaf = Leaf(zone.index, hinge, hinge_a, face_c, out)
                    grips, edge = self._grips(bay, p, zone, "Door", boxes[0], hinge_a)
                    self.add(Part(f"{bay.id}-DOOR{leaf_no}", f"Dvířka {leaf_no} ({hinge})", "Door", boxes, door=leaf,
                                  grips=grips,
                                  props=dict(base, Hinge=hinge, Racks=racks or None, Grip=f"J {edge}" if edge else None,
                                             LeafWidth=round((a1 - a0) / 1000.0, 6),
                                             LeafHeight=round((front_box[5] - front_box[4]) / 1000.0, 6))), bay)
                for a0, a1 in leaves["fillers"]:
                    self.add(Part(f"{bay.id}-FILLER{zone.index}", "Lišta", "Filler",
                                  [(a0, a1, fc0, fc1, front_box[4], front_box[5])], props={"Zone": zone.index}), bay)
                self._shelves(bay, p, zone, in_z0, in_z1, back_y, racks=int(zone.opts.get("racks", 0)))
                self.run.door_bands.append((bay, zone, in_z0, in_z1, back_y, int(zone.opts.get("racks", 0))))
            elif zone.kind == "flipout":
                self._flipout(bay, p, zone, front_box, in_z0, in_z1, back_y, base)
            elif zone.kind == "lift":
                # The lowest front of a wall cabinet hangs ``WallFrontOverhang``
                # below the carcass bottom (and closes the half gap under it).
                drop = (g + p["WallFrontOverhang"]) if (below is None and p["WallFrontOverhang"] > 0) else 0.0
                mechs = self._lift(bay, p, zone, front_box, in_z1, back_y, base, drop=drop)
                lift_p = dict(p, ShelfSetback=max(p["ShelfSetback"], LIFT_HF_SHELF_SETBACK))
                self._shelves(bay, lift_p, zone, in_z0, in_z1, back_y, avoid=mechs)
            elif zone.kind == "niche":
                n0, n1 = lo, hi
                clear = zone.opts.get("clear")
                if clear is not None:
                    # Packers on both sides narrow the opening to the maker's
                    # niche width (a monoblock 600 bay is 582 clear).
                    pad = (hi - lo - float(clear) * 1000.0) / 2.0
                    if pad < -TOL:
                        raise ValueError(f"{bay.id}: niche clear {clear} wider than the opening {hi - lo:.0f}")
                    if pad > TOL:
                        pc0, pc1 = self.c_range(bay, tf, back_y)
                        for side, (x0, x1) in (("L", (lo, lo + pad)), ("R", (hi - pad, hi))):
                            self.add(Part(f"{bay.id}-PACK{zone.index}{side}", "Lišta niky", "Packer",
                                          [(x0, x1, pc0, pc1, in_z0, in_z1)],
                                          props={"Zone": zone.index, "Thickness": round(pad / 1000.0, 6)}), bay)
                        n0, n1 = lo + pad, hi - pad
                zone.niche = (n0, n1, *self.c_range(bay, 0.0, back_y), in_z0, in_z1)
            elif zone.kind == "dock":
                self._dock(bay, p, zone, front_box, back_y, z0)
            elif zone.kind == "front":
                front_no += 1
                fid = f"{bay.id}-FRONT" if single else f"{bay.id}-FRONT{zone.index}"
                self.add(Part(fid, "Dvířka", "Front", [front_box], props=base), bay)
                if zone.opts.get("shelves"):
                    self._shelves(bay, p, zone, in_z0, in_z1, back_y)

            # "none": an open band, nothing in front.

    def _dock(self, bay: Bay, p: dict, zone: Zone, front_box: tuple, back_y: float, z0: float):
        """A ``dock`` band at the bottom of a bay: an opening from the floor
        for a floor-standing appliance (a robot-vacuum station), ``width=``
        (metres) on the ``side=L|R|C`` (as you face it, default L; C centred
        on the bay's front) of the band. The kickboard and the carcass bottom
        (and back) are cut away over the opening; side boards close it off
        from the dead space beside it. The dead space is behind a fixed
        panel, or with ``front=notch`` behind the drawer front above, carried
        down to the kickboard either side of the opening (one notched front;
        Petr, 2026-11-20 c). The board over the band (``board_below`` of the
        band above) is the opening's top."""
        t, tf = p["BoardThickness"], p["FrontThickness"]
        g = p["FrontGap"] / 2.0
        if zone.slot_z0 > z0 + TOL:
            raise ValueError(f"{bay.id}: a dock band must be the lowest band")
        width = float(zone.opts.get("width", 0)) * 1000.0
        side = str(zone.opts.get("side", "L")).upper()
        lo, hi = bay.clear_lo, bay.clear_hi
        if width <= 0 or width > hi - lo - t + TOL:
            raise ValueError(f"{bay.id}: dock width {width:.0f} does not fit the {hi - lo:.0f} opening")
        dc0, dc1 = self.c_range(bay, tf, back_y)
        fc0, fc1 = self.c_range(bay, 0.0, tf)
        if side == "C":
            am = (bay.a0 + bay.a1) / 2.0
            o0, o1 = am - width / 2.0, am + width / 2.0
            if o0 < lo + t - TOL or o1 > hi - t + TOL:
                raise ValueError(f"{bay.id}: a centred {width:.0f} dock leaves no room for its side boards")
            sides = [(o0 - t, o0), (o1, o1 + t)]
            dead = [(bay.a0 + g, o0), (o1, bay.a1 - g)]
        else:
            # Left as you face it: low a when the front is the c0 face.
            at_lo = (side == "L") == bay.front_low
            o0, o1 = (lo, lo + width) if at_lo else (hi - width, hi)
            sides = [(o1, o1 + t)] if at_lo else [(o0 - t, o0)]
            dead = [(o1 + g, bay.a1 - g)] if at_lo else [(bay.a0 + g, o0 - g)]
        floor = self.run.bays[0].z_base
        oc0, oc1 = self.c_range(bay, 0.0, back_y)
        zone.dock = (o0, o1, oc0, oc1, floor, zone.slot_z1)
        for k, (s0, s1) in enumerate(sides, start=1):
            sid = f"{bay.id}-DOCKSIDE" if len(sides) == 1 else f"{bay.id}-DOCKSIDE{k}"
            self.add(Part(sid, "Bok niky stanice", "Board", [(s0, s1, dc0, dc1, z0 + t, zone.slot_z1)],
                         props={"Zone": zone.index}), bay)
        if str(zone.opts.get("front", "panel")) == "notch":
            # The drawer front over the band runs down either side of the
            # opening to the kickboard: one front with a notch.
            above = next((q for q in self.run.parts if q.drawer is not None and q.role in ("Drawer", "PullOut")
                          and q.id in bay.members and q.props.get("Zone") == zone.index - 1), None)
            if above is None:
                raise ValueError(f"{bay.id}: front=notch needs a drawer in the band above the dock")
            legs = [(f0, f1, fc0, fc1, front_box[4], above.drawer.front[4]) for f0, f1 in dead if f1 - f0 > TOL]
            above.boxes[1:1] = legs
            above.props.update(FrontNotch=round((o1 - o0) / 1000.0, 6),
                               FrontNotchHeight=round((above.drawer.front[4] - front_box[4]) / 1000.0, 6),
                               FrontBottom=round(front_box[4] / 1000.0, 6))
        else:
            for k, (f0, f1) in enumerate(dead, start=1):
                did = f"{bay.id}-DEAD" if len(dead) == 1 else f"{bay.id}-DEAD{k}"
                self.add(Part(did, "Pevný panel (mrtvý prostor)", "Front",
                              [(f0, f1, fc0, fc1, front_box[4], front_box[5])],
                              props={"Zone": zone.index, "Kind": "dead space", "Fixed": True}), bay)
        # Cut the opening out of the kickboard, the carcass bottom and back.
        for part in self.run.parts:
            if part.role not in ("Plinth", "Bottom", "Back") or part.id not in bay.members:
                continue
            kept = []
            for b in part.boxes:
                if b[0] < o1 - TOL and b[1] > o0 + TOL and (part.role != "Back" or b[4] < zone.slot_z1):
                    if b[0] < o0 - TOL:
                        kept.append((b[0], o0, *b[2:]))
                    if b[1] > o1 + TOL:
                        kept.append((o1, b[1], *b[2:]))
                    if part.role == "Back" and b[5] > zone.slot_z1 + TOL:
                        kept.append((max(b[0], o0), min(b[1], o1), b[2], b[3], zone.slot_z1, b[5]))
                else:
                    kept.append(b)
            part.boxes[:] = kept
            part.props["DockOpening"] = round((o1 - o0) / 1000.0, 6)
        bay.docks.append((bay.id, zone.index, zone.dock))
        self.run.docks.append((bay, zone))

    def _grips(self, bay: Bay, p: dict, zone: Zone, role: str, box: tuple, hinge_a: float | None = None):
        """The routed J grip of one front (``Pset_KitchenRun.FrontGrip: J``):
        (cut boxes, edge). Edge per front from the band's ``grip=`` option
        (top | bottom | side | none), else ``_grip_edge``."""
        if str(_prop(self.run.element, PSET_RUN, "FrontGrip") or "").upper() != "J":
            return [], None
        edge = _grip_edge(zone, role, box)
        if edge in (None, "none"):
            return [], None
        a0, a1, c0, c1, z0, z1 = box
        face, inward = (c0, 1.0) if bay.front_low else (c1, -1.0)
        prof = grip_profile(p)
        if edge in ("top", "bottom"):
            zz = (lambda u: z1 - u) if edge == "top" else (lambda u: z0 + u)
            return [Grip("a", a0 - 1.0, a1 + 1.0, [[(face + inward * d, zz(u)) for d, u in sg] for sg in prof])], edge
        if edge == "side":
            if hinge_a is None:
                raise ValueError(f"{bay.id}: grip=side needs a hinged door")
            latch_low = abs(hinge_a - a1) < abs(hinge_a - a0)  # the edge away from the hinge
            aa = (lambda u: a0 + u) if latch_low else (lambda u: a1 - u)
            return [Grip("z", z0 - 1.0, z1 + 1.0, [[(aa(u), face + inward * d) for d, u in sg] for sg in prof])], edge
        raise ValueError(f"{bay.id}: grip={edge!r}, one of top, bottom, side, none")

    def _flipout(self, bay: Bay, p: dict, zone: Zone, front_box, in_z0, in_z1, back_y, base):
        """Bottom-hinged tilt-out front with a hook-on bin on its inside.

        Petr, 2026-11-24 (t928u): the shallow dining filler by pier W-053
        (near the Harvey corner) becomes a flip-out trashcan for the
        Elletipi Cover Box Small 8 L (340 × 225 × 150, H × W × D).
        t930u: the 12 mm plywood cradle is gone; the bin hangs from two
        hook-in brackets on the inside of the front, near the top.
        """
        tf = p["FrontThickness"]
        g = p["FrontGap"] / 2.0
        out = -1.0 if bay.front_low else 1.0
        raw_bin = str(zone.opts.get("bin", "0.225x0.150x0.340")).lower().replace("×", "x")
        bw, bd, bh = (float(v) * 1000.0 for v in raw_bin.split("x"))
        # guess: 8 mm under the worktop at the peak of the rear rim's swing,
        # and 8 mm past the worktop edge for the expose stop.
        clearance = 8.0 if zone.opts.get("clearance") is None else float(zone.opts["clearance"]) * 1000.0
        # guess: two 2 mm stainless hook plates on the door, each with an
        # 8 mm drop-in lip, and matching 2 mm hooks on the bin's back wall.
        # The 8 mm lip is the stand-off from the door's inner face to the bin.
        hook_t = 2.0
        hook_w = 40.0
        hook_h = 18.0
        hook_lip = 8.0
        hook_inset = 30.0
        fc0, fc1 = front_box[2], front_box[3]
        fz0, fz1 = front_box[4], front_box[5]
        front = (bay.a0 + g, bay.a1 - g, fc0, fc1, fz0, fz1)
        # Piano / tilt-out hinge along the front's bottom outer edge.
        pivot_c = fc0 if bay.front_low else fc1
        pivot_z = fz0
        inner_c = (fc0 + tf) if bay.front_low else (fc1 - tf)
        mid = (bay.clear_lo + bay.clear_hi) / 2.0
        ba0, ba1 = mid - bw / 2.0, mid + bw / 2.0
        if ba0 < bay.clear_lo + 1.0 or ba1 > bay.clear_hi - 1.0:
            raise ValueError(
                f"{bay.id}: flip-out bin {bw:g} mm wide does not fit the "
                f"{bay.clear_hi - bay.clear_lo:g} mm clear width"
            )
        if hook_w + hook_inset * 2 > bw - 1.0:
            raise ValueError(f"{bay.id}: hook plates {hook_w:g} mm do not fit the bin width")
        if bay.front_low:
            bc0, bc1 = inner_c + hook_lip, inner_c + hook_lip + bd
        else:
            bc0, bc1 = inner_c - hook_lip - bd, inner_c - hook_lip
        bc0, bc1 = sorted((bc0, bc1))
        worktop_z = zone.slot_z1
        back_rail_z0 = worktop_z - p["BoardThickness"]
        rail_c0, rail_c1 = sorted(self.c_range(bay, back_y - p["RailDepth"], back_y))
        c_rear = bc1 if bay.front_low else bc0
        c_rel = abs(c_rear - pivot_c)
        r_max = worktop_z - clearance - pivot_z
        if r_max <= c_rel + 1.0:
            raise ValueError(f"{bay.id}: flip-out bin depth leaves no swing under the worktop")
        z_rel_max = math.sqrt(r_max * r_max - c_rel * c_rel)
        # Keep the rear rim under the back rail, with the same clearance,
        # for every angle while the rim is still in the rail's c-range.
        # Sweep past the expose angle so the peak (when the rim crosses
        # the front plane) is always checked.
        def _clears(z_top: float) -> bool:
            if z_top > back_rail_z0 - clearance + TOL:
                return False
            for i in range(40):
                a = math.radians(30.0) * i / 39.0
                ca, za = _tilt_point(c_rear, z_top, pivot_c, pivot_z, a, out)
                if rail_c0 - 0.5 <= ca <= rail_c1 + 0.5 and za > back_rail_z0 - clearance + TOL:
                    return False
            return True
        lo, hi = in_z0 + bh, min(back_rail_z0 - clearance, pivot_z + z_rel_max)
        if hi < lo:
            raise ValueError(f"{bay.id}: flip-out bin {bh:g} mm high does not fit the opening")
        if not _clears(hi):
            a, b = lo, hi
            for _ in range(24):
                mid_z = (a + b) / 2.0
                if _clears(mid_z):
                    a = mid_z
                else:
                    b = mid_z
            hi = a
            if not _clears(hi):
                raise ValueError(f"{bay.id}: flip-out bin rim would hit the back rail as it tilts out")
        z_top = hi
        z_bot = z_top - bh
        if z_bot < in_z0 - TOL:
            raise ValueError(
                f"{bay.id}: flip-out bin {bh:g} mm high does not fit under the "
                f"worktop with {clearance:g} mm swing clearance"
            )
        back_face = back_y
        if bay.front_low:
            if bc1 > back_face + TOL:
                raise ValueError(
                    f"{bay.id}: flip-out bin {bd:g} mm deep plus an {hook_lip:g} mm "
                    f"hang stand-off does not fit the {back_face - inner_c:g} mm clear depth"
                )
        else:
            if bc0 < back_face - TOL:
                raise ValueError(
                    f"{bay.id}: flip-out bin {bd:g} mm deep plus the hang stand-off "
                    f"does not fit the clear depth"
                )
        # Minimum angle that puts the rear rim ``clearance`` in front of the
        # worktop edge, so the full 225 × 150 mouth is clear from above.
        target_c = pivot_c + out * clearance
        def _exposed(deg: float) -> bool:
            ca, _za = _tilt_point(c_rear, z_top, pivot_c, pivot_z, math.radians(deg), out)
            return ca <= target_c + TOL if bay.front_low else ca >= target_c - TOL
        if "angle" in zone.opts:
            angle = float(zone.opts["angle"])
        else:
            a0, a1 = 0.0, 40.0
            for _ in range(60):
                mid_a = (a0 + a1) / 2.0
                if _exposed(mid_a):
                    a1 = mid_a
                else:
                    a0 = mid_a
            # Round up to 0.1° so the stop still clears the 8 mm target.
            angle = math.ceil(a1 * 10.0 - 1e-12) / 10.0
        if not _exposed(angle):
            raise ValueError(
                f"{bay.id}: flip-out stop {angle:g}° does not fully expose the bin opening"
            )
        # Bin bottom stays above the carcass bottom, closed and through the swing.
        bottom_pts = [
            (bc0, z_bot), (bc1, z_bot),
            (bc0, z_bot), (bc1, z_bot),
        ]
        for i in range(25):
            a = math.radians(angle) * i / 24.0
            for c, z in bottom_pts:
                _ca, za = _tilt_point(c, z, pivot_c, pivot_z, a, out)
                if za < in_z0 + TOL:
                    raise ValueError(
                        f"{bay.id}: flip-out bin bottom would hit the carcass "
                        f"bottom at {angle * i / 24.0:g}° (z {za:.1f} < {in_z0:.1f})"
                    )
        wall = p["BinWall"]
        bin_boxes = [
            (ba0, ba1, bc0, bc1, z_bot, z_bot + wall),
            (ba0, ba0 + wall, bc0, bc1, z_bot + wall, z_top),
            (ba1 - wall, ba1, bc0, bc1, z_bot + wall, z_top),
            (ba0 + wall, ba1 - wall, bc0, bc0 + wall, z_bot + wall, z_top),
            (ba0 + wall, ba1 - wall, bc1 - wall, bc1, z_bot + wall, z_top),
        ]
        # Two brackets on the door, two hooks on the bin, both near the top.
        # Left/right plates sit ``hook_inset`` in from each bin side.
        ha = [
            (ba0 + hook_inset, ba0 + hook_inset + hook_w),
            (ba1 - hook_inset - hook_w, ba1 - hook_inset),
        ]
        # Lip shelf a little below the rim; the hook drops onto it.
        lip_z0, lip_z1 = z_top - hook_h - 4.0, z_top - hook_h - 2.0
        plate_z0, plate_z1 = lip_z1, z_top - 4.0
        hook_fold_z0, hook_fold_z1 = lip_z1, lip_z1 + 4.0
        hook_vert_z0, hook_vert_z1 = hook_fold_z1, plate_z1
        if bay.front_low:
            br_plate_c0, br_plate_c1 = inner_c, inner_c + hook_t
            br_lip_c0, br_lip_c1 = inner_c, inner_c + hook_lip
            hk_vert_c0, hk_vert_c1 = inner_c + hook_lip - hook_t, inner_c + hook_lip
            hk_fold_c0, hk_fold_c1 = inner_c + hook_t, inner_c + hook_lip
        else:
            br_plate_c0, br_plate_c1 = inner_c - hook_t, inner_c
            br_lip_c0, br_lip_c1 = inner_c - hook_lip, inner_c
            hk_vert_c0, hk_vert_c1 = inner_c - hook_lip, inner_c - hook_lip + hook_t
            hk_fold_c0, hk_fold_c1 = inner_c - hook_lip, inner_c - hook_t
        bracket_boxes, hook_boxes = [], []
        for a0, a1 in ha:
            bracket_boxes.append((a0, a1, br_plate_c0, br_plate_c1, plate_z0, plate_z1))
            bracket_boxes.append((a0, a1, br_lip_c0, br_lip_c1, lip_z0, lip_z1))
            hook_boxes.append((a0, a1, hk_vert_c0, hk_vert_c1, hook_vert_z0, hook_vert_z1))
            hook_boxes.append((a0, a1, hk_fold_c0, hk_fold_c1, hook_fold_z0, hook_fold_z1))
        # LiftJoint positive swings the lower edge out, so a bottom hinge
        # uses negative angles: the upper edge and the bin swing out.
        n = 25
        open_rad = math.radians(angle)
        thetas = tuple(-open_rad * i / (n - 1) for i in range(n))
        group = f"{bay.id}-FLIP"
        lift = LiftJoint(group, 0, None, pivot_c, pivot_z, out, thetas)
        peak_z = pivot_z + math.hypot(c_rel, z_top - pivot_z)
        worktop_gap = worktop_z - peak_z
        ca, za = _tilt_point(c_rear, z_top, pivot_c, pivot_z, open_rad, out)
        grips, edge = self._grips(bay, p, zone, "Door", front, None)
        props = dict(
            base,
            Hinge="bottom",
            Grip=f"J {edge}" if edge else None,
            LeafWidth=round((front[1] - front[0]) / 1000.0, 6),
            LeafHeight=round((front[5] - front[4]) / 1000.0, 6),
            Bin="Elletipi Cover Box Small 8 L",
            BinSize=f"{bw:g}x{bd:g}x{bh:g}",
            OpeningAngle=round(angle, 2),
            PeakZ=round(peak_z / 1000.0, 6),
            WorktopClearance=round(worktop_gap / 1000.0, 6),
            ClosedTop=round(z_top / 1000.0, 6),
            PivotZ=round(pivot_z / 1000.0, 6),
            HangStandoff=round(hook_lip / 1000.0, 6),
        )
        self.add(Part(f"{bay.id}-FLIP", "Výklopná dvířka", "Door", [front],
                      lift=lift, grips=grips, props=props), bay)
        self.add(Part(f"{bay.id}-BRACKETS", "Závěsné konzoly koše", "Bracket",
                      bracket_boxes, lift=lift, label="appliance",
                      props={"Zone": zone.index, "Kind": "bracket",
                             "Thickness": round(hook_t / 1000.0, 6),
                             "Lip": round(hook_lip / 1000.0, 6)}), bay)
        self.add(Part(f"{bay.id}-HOOKS", "Háky koše", "Hook",
                      hook_boxes, lift=lift, label="appliance",
                      props={"Zone": zone.index, "Kind": "hook",
                             "Thickness": round(hook_t / 1000.0, 6)}), bay)
        self.add(Part(f"{bay.id}-BIN", "Elletipi Small 8 L", "Bin", bin_boxes,
                      lift=lift, props={"Zone": zone.index, "Kind": "bin",
                                        "Product": "Elletipi PTM SP34 C97 M",
                                        "Volume": 0.008,
                                        "Size": f"{bw:g}x{bd:g}x{bh:g}"}), bay)
        self.run.notes.append(
            f"{bay.id}: flip-out Elletipi Small 8 L {bw:.0f}×{bd:.0f}×{bh:.0f} mm "
            f"(W×D×H), hinge at c {pivot_c:.1f} z {pivot_z:.1f}, opens to {angle:g}°, "
            f"bin closed z {z_bot:.1f}–{z_top:.1f} c {bc0:.1f}–{bc1:.1f} "
            f"(hang stand-off {hook_lip:.0f} mm), rear-rim peak z {peak_z:.1f} "
            f"clears the worktop at {worktop_z:.1f} by {worktop_gap:.1f} mm; "
            f"open rear rim at c {ca:.1f}, z {za:.1f}"
        )

    def _lift(self, bay: Bay, p: dict, zone: Zone, front_box: tuple, in_z1: float, back_y: float,
              base: dict, drop: float = 0.0) -> list:
        """A Blum AVENTOS lift-up front (``lift`` band), its two lift
        mechanisms and the space it needs open (``run.clearances``).

        The band must be inside the fitting's Blum ranges (``AVENTOS``):
        cabinet height KH (the band), width KB (the bay), internal depth LT
        and the power factor LF = KH x front weight. The export stops if not,
        unless the bay's ``Pset_Fronts.BlumRangeOverride`` says why it may
        (a quote with its source); then each breach is kept on the front's
        properties (``OutsideBlumRange``) and in ``run.notes``.
        Returns the mechanism boxes so the shelves can keep clear of them.
        """
        fit = str(zone.opts.get("fitting", "HK"))
        if fit not in AVENTOS:
            raise ValueError(f"{bay.id}: lift fitting={fit!r}, one of {sorted(AVENTOS)}")
        spec = AVENTOS[fit]
        override = _prop(bay.element, PSET_FRONTS, "BlumRangeOverride")
        breaches = []
        t, tf = p["BoardThickness"], p["FrontThickness"]
        kh, kb, lt = zone.nominal, bay.width, back_y - tf
        lo_kh, hi_kh = spec["kh"]
        if not (lo_kh - TOL <= kh <= hi_kh + TOL):
            breaches.append(f"{spec['name']} takes a cabinet height of {lo_kh:.0f}–{hi_kh:.0f} mm, this one is {kh:.0f}")
        if kb > spec["kb"] + TOL:
            breaches.append(f"{spec['name']} takes a cabinet width up to {spec['kb']:.0f}, this one is {kb:.0f}")
        if spec["lt"] is not None and lt < spec["lt"] - TOL:
            breaches.append(f"{spec['name']} needs {spec['lt']:.0f} internal depth, this one has {lt:.0f}")
        a0, a1, fc0, fc1, z0, z1 = front_box
        fb, fh = a1 - a0, z1 - z0
        density = float(zone.opts.get("density", LIFT_FRONT_DENSITY))
        if spec["fronts"] == 2:
            gap = p["FrontGap"]
            upper = zone.opts.get("upper")
            fho = (fh - gap) / 2.0 if upper is None else float(upper) * 1000.0
            fhu = fh - gap - fho
            if fhu > fho + TOL:
                raise ValueError(f"{bay.id}: Blum HF: the taller front must be at the top")
            fronts = [("1", "Horní klapka", (z1 - fho, z1)), ("2", "Dolní klapka", (z0, z0 + fhu))]
        else:
            fho = fh
            fronts = [("", "Výklopná dvířka", (z0, z1))]
        if drop:
            # ``WallFrontOverhang``: the lowest front reaches below the carcass.
            tag_, label_, (zz0_, zz1_) = fronts[-1]
            fronts[-1] = (tag_, label_, (zz0_ - drop, zz1_))
        fg = sum((zz1 - zz0) * fb * tf for _n, _l, (zz0, zz1) in fronts) * 1e-9 * density
        lf = kh * fg
        if spec["lf"] is not None and not (spec["lf"][0] <= lf <= spec["lf"][1]):
            breaches.append(f"{spec['name']} power factor {lf:.0f} outside {spec['lf'][0]:.0f}–{spec['lf'][1]:.0f}")
        if spec["fg"] is not None and fg > spec["fg"] + 1e-6:
            breaches.append(f"{spec['name']} front weight {fg:.1f} kg over {spec['fg']} kg")
        if breaches and not override:
            raise ValueError(f"{bay.id}: {breaches[0]}")
        # Opening angle: ``angle=`` in the band, one of the fitting's stop
        # settings; else its largest.
        angle = zone.opts.get("angle")
        if angle is None:
            angle = LIFT_OPEN_DEG[fit]
        else:
            angle = float(angle)
            stops = spec.get("stops")
            if not stops or not any(abs(angle - a) < 1e-6 for a in stops):
                raise ValueError(f"{bay.id}: {spec['name']} angle={angle:g}, the opening-angle stops are "
                                 f"{', '.join(f'{a:g}' for a in stops) if stops else 'not modelled'}")
        # Space the open front needs (Blum planning pages, at the largest
        # opening angle): Y above the cabinet top, X out in front of it.
        # HF: replaced below by the swept four-bar at ``angle``.
        if fit == "HF":
            above = fho * 0.44 + 38.0  # 116°
            ahead = fho * 0.9 + tf * 1.5 + 35.0
        elif fit == "HK":
            above = fh * 0.29 + tf - t  # max angle, Y = FH x 0.29 + FD - SOB
            ahead = fh + tf  # guess: the front tilts out about its top edge
        else:
            above, ahead = fh, fh + tf  # guess: Blum's tables not read for this type
        out = -1.0 if bay.front_low else 1.0
        face = fc0 if bay.front_low else fc1
        cc0, cc1 = sorted((face, face + out * ahead))
        top = zone.slot_z1
        self.run.clearances.append((bay.id, (bay.a0, bay.a1, cc0, cc1, top, top + above)))
        props = dict(base, Fitting=spec["name"], FittingCode=fit, CabinetHeight=round(kh / 1000.0, 6),
                     FrontWeight=round(fg, 2), PowerFactor=round(lf), OpenAbove=round(above / 1000.0, 6),
                     OpenAhead=round(ahead / 1000.0, 6))
        if override:
            props.update(BlumRangeOverride=str(override))
        if breaches:
            props.update(OutsideBlumRange="; ".join(breaches))
            self.run.notes.append(f"{bay.id}: outside Blum's range, kept by override ({override}): {'; '.join(breaches)}")
        for tag, label, (zz0, zz1) in fronts:
            self.add(Part(f"{bay.id}-LIFT{tag}", label, "Lift", [(a0, a1, fc0, fc1, zz0, zz1)],
                          props=dict(props, LeafWidth=round(fb / 1000.0, 6), LeafHeight=round((zz1 - zz0) / 1000.0, 6))),
                     bay)
        mw, md, mh = spec["mech"]
        mc0, mc1 = self.c_range(bay, tf, tf + md)
        boxes = []
        for side, (x0, x1) in (("L", (bay.clear_lo, bay.clear_lo + mw)), ("R", (bay.clear_hi - mw, bay.clear_hi))):
            box = (x0, x1, mc0, mc1, in_z1 - mh, in_z1)
            boxes.append(box)
            self.add(Part(f"{bay.id}-LIFTMECH-{side}", f"Zdvihací mechanismus {fit}", "LiftMechanism", [box],
                          props={"Zone": zone.index, "Fitting": spec["name"], "FittingCode": fit}), bay)
        arms, env = self._lift_motion(bay, fit, fronts, front_box, out, boxes, in_z1 - mh, zone, spec, angle)
        boxes += arms
        if env is not None:
            # The space the swept fronts need, from the four-bar (the top
            # hinge is at the front's top edge, ``top`` the carcass top).
            max_u, max_z = env
            k, c = spec["stops"][min(spec["stops"], key=lambda a: abs(a - angle))]
            # Above: the larger of the swept fronts and Blum's Y for the stop.
            above = max(0.0, z1 + max_z - top, fho * k + c)
            ahead = max_u - tf
            cc0, cc1 = sorted((face, face + out * ahead))
            self.run.clearances[-1] = (bay.id, (bay.a0, bay.a1, cc0, cc1, top, top + above))
            for tag, _l, _z in fronts:
                self.run.part(f"{bay.id}-LIFT{tag}").props.update(
                    OpenAbove=round(above / 1000.0, 6), OpenAhead=round(ahead / 1000.0, 6),
                    BlumOpenAbove=round((fho * k + c) / 1000.0, 6))
        for tag, _l, _z in fronts:
            self.run.part(f"{bay.id}-LIFT{tag}").props.update(OpeningAngle=angle)
        self.run.notes.append(
            f"{bay.id}: {spec['name']}, KH {kh:.0f}, front(s) {fb:.0f} wide, {fg:.1f} kg, LF {lf:.0f}, "
            f"opens to {angle:g}°, {above:.0f} above the top and {ahead:.0f} ahead of the face")
        return boxes

    def _lift_motion(self, bay: Bay, fit: str, fronts: list, front_box: tuple, out: float, mechs: list,
                     mech_z0: float, zone: Zone, spec: dict, angle: float) -> tuple:
        """How the lift front moves open, as ``LiftJoint`` s on its parts,
        plus a lever arm on each side. Returns the arm boxes (the shelves
        keep clear of them too) and, for HF, the swept fronts' reach (u out
        of the inner face, z above the top hinge), else None.

        The upper front (or the one front) turns about its top edge on the
        inner face, 0 to ``angle`` (the opening-angle stop).

        HF top (two fronts), after Blum's planning sketches: the lever pivots
        at the mechanism's underside and is fixed to the lower front, which
        hangs from the centre hinge. That is a four-bar (carcass, upper
        front, lower front, lever); for each upper angle the lower front's
        angle is the one that keeps the lever's length. The fixing height is
        solved so that, open, the lower front hangs ``LIFT_HF_LOWER_OPEN_DEG``
        from vertical at the mechanism's full 116° (the lever geometry does
        not change with the stop); a stop ends the same path earlier. Partly
        folded, its bottom edge in reach (Petr,
        2026-11-13). The export stops if the lower front's bottom edge would
        pass into the carcass on the way.

        One front: each arm turns about its pivot in the mechanism and
        telescopes so its tip stays on its fixing on the front. guess: the
        arm is drawn as a straight bar placed by eye.
        """
        a0, a1, fc0, fc1, _z0, z1 = front_box
        inner = fc0 if out > 0 else fc1  # the front's carcass-side face
        top_z = z1
        steps = [k / LIFT_STEPS for k in range(LIFT_STEPS + 1)]
        theta = [math.radians(angle) * t for t in steps]
        group = f"{bay.id}-LIFT"
        aw, ad, drop = LIFT_ARM
        ac0, ac1 = sorted((inner, inner - out * ad))
        arm_c = (ac0 + ac1) / 2.0
        ua = out * (arm_c - inner)  # the arm's line, outward from the inner face (negative: inside)
        if spec["fronts"] == 2:
            (_t1, _l1, (u0, _u1)), (_t2, _l2, (lz0, l1)) = fronts
            cz = (u0 + l1) / 2.0  # centre hinge
            lo, fhu = top_z - cz, cz - lz0
            piv_z = mech_z0
            solved = _hf_fourbar(lo, fhu, ua, piv_z - top_z, theta, fc1 - fc0, math.radians(LIFT_OPEN_DEG["HF"]))
            fix_z = cz - solved["s"]
            upper = LiftJoint(group, 0, None, inner, top_z, out, tuple(theta))
            lower = LiftJoint(group, 1, 0, inner, cz, out, tuple(a - th for a, th in zip(solved["alpha"], theta)))
            self.run.part(f"{bay.id}-LIFT1").lift = upper
            self.run.part(f"{bay.id}-LIFT2").lift = lower
            bu, bz = solved["bottom"]
            props = self.run.part(f"{bay.id}-LIFT2").props
            props.update(OpenBottomEdgeHeight=round((top_z + bz) / 1000.0, 3),
                         OpenBottomEdgeAhead=round((bu - (fc1 - fc0)) / 1000.0, 3),
                         OpenLowerAngle=round(math.degrees(solved["alpha"][-1]), 1))
            self.run.notes.append(
                f"{bay.id}: open at {angle:g}°, the lower front hangs {math.degrees(solved['alpha'][-1]):.0f}° from vertical; "
                f"its bottom edge at {top_z + bz:.0f} above the floor, {bu - (fc1 - fc0):.0f} out from the closed face")
            swing, stretch = solved["lever"], None
            env = solved["reach"]
        else:
            env = None
            self.run.part(f"{bay.id}-LIFT").lift = LiftJoint(group, 0, None, inner, top_z, out, tuple(theta))
            # A bar down the inner face of the front, from inside the
            # mechanism to its fixing, turning about its top end.
            fix_z = max(mech_z0 - drop, fronts[0][2][0] + 20.0)
            piv_z = mech_z0 + 10.0
            if fix_z > mech_z0 - 20.0:
                return [], env  # the front is too short under the mechanism for an arm
            swing, stretch = [], []
            for th in theta:
                du, dz = ua, fix_z - top_z
                # A positive turn takes "down" towards "out": counter-clockwise in (u, z).
                ru = du * math.cos(th) - dz * math.sin(th)
                rz = top_z + du * math.sin(th) + dz * math.cos(th)
                v0 = (0.0, fix_z - piv_z)
                v1 = (ru - ua, rz - piv_z)
                swing.append(math.atan2(v0[0] * v1[1] - v0[1] * v1[0], v0[0] * v1[0] + v0[1] * v1[1]))
                stretch.append(math.hypot(*v1) / math.hypot(*v0))
            stretch = tuple(stretch)
        arms = []
        for side, mech in zip(("L", "R"), mechs):
            mid = (mech[0] + mech[1]) / 2.0
            box = (mid - aw / 2.0, mid + aw / 2.0, ac0, ac1, fix_z, piv_z + 15.0)
            arms.append(box)
            self.add(Part(f"{bay.id}-LIFTARM-{side}", f"Rameno zdvihacího mechanismu {fit}", "LiftArm", [box],
                          props={"Zone": zone.index, "Fitting": spec["name"], "FittingCode": fit},
                          lift=LiftJoint(group, 2, None, arm_c, piv_z, out, tuple(swing), stretch)), bay)
        return arms, env

    def _shelves(self, bay, p, zone, z_lo, z_hi, back_y, racks=0, avoid=()):
        """Loose shelves in a door band: ``shelves=N`` evenly spaced, the
        first one ``first=`` metres above the band's floor if given. A shelf
        that would hit a box in ``avoid`` (a lift mechanism) stops the export."""
        n = int(zone.opts.get("shelves", 0))
        if n <= 0:
            return
        t, tf = p["BoardThickness"], p["FrontThickness"]
        setback = p["ShelfSetback"] + (p["RackDepth"] + p["ShelfSetback"] if racks else 0.0)
        c0, c1 = self.c_range(bay, tf + setback, back_y)
        first = zone.opts.get("first")
        if first is not None:
            z = z_lo + float(first) * 1000.0
            levels = [z] + _even(z + t, z_hi, n - 1, t)
        else:
            levels = _even(z_lo, z_hi, n, t)
        for k, z in enumerate(levels, start=1):
            if z + t > z_hi - TOL or z < z_lo - TOL:
                raise ValueError(f"{bay.id}: shelf {k} of zone {zone.index} does not fit")
            shelf = (bay.clear_lo, bay.clear_hi, c0, c1, z, z + t)
            if any(_boxes_meet(shelf, box) for box in avoid):
                raise ValueError(f"{bay.id}: shelf {k} of zone {zone.index} hits the lift mechanism")
            self.add(Part(f"{bay.id}-SH{zone.index}-{k}", f"Police {k}", "Shelf",
                          [shelf],
                          props={"Zone": zone.index, "Elevation": round(z / 1000.0, 6)}), bay)

    def _obstacle_ceiling(self, bay: Bay, p: dict):
        """Things hanging into the bay from above (a sink bowl, a disposer):
        a drawer box under them stops ``ObstacleClearance`` below the lowest."""
        out = []
        for box, oid in bay.obstacles:
            out.append((box, box[4] - p["ObstacleClearance"], oid))
        return out
