"""Worktops, cladding, end panels, hobs, drip grooves, and backsplashes."""
from __future__ import annotations

from .drawers import merivobox_nl
from .geometry import _mitre_cut, _near
from .hardware import (
    DRIP_GROOVE_CENTRE,
    DRIP_GROOVE_DEPTH,
    DRIP_GROOVE_END_STOP,
    DRIP_GROOVE_WIDTH,
    HOB_VENT_CHANNEL_MIN,
    MIELE_INTAKE_HOLE_D,
    MIELE_INTAKE_HOLE_GAP,
    MIELE_INTAKE_X,
    MIELE_INTAKE_Y,
    MIELE_REAR_CUTOUT_H,
    MIELE_REAR_CUTOUT_W,
    PSET_BAY,
    PSET_DRAWERS,
    PSET_HOB,
    PSET_RUN,
    PSET_SINK,
    SINK_CUTOUT_INSET_MM,
    TOL,
)
from .props import _prop
from .types import Bay, Frame, Hob, HobVent, Part, Void, _unit


def _worktop_label(material) -> str:
    """Viewer label of a worktop: ``oak`` for a wooden top (the living-room
    counter, Petr 2026-11-13: "oak veneer, not silestone"), else stone."""
    return "oak" if material and "oak" in str(material).lower() else "worktop"


def _merge_notched_worktop(top: Part, run: "Run", piece: tuple | None = None,
                           notch_width: float | None = None) -> None:
    """If a worktop is two butted rectangles of one L / notch, store it as
    one outer box plus a through void for the missing rectangle.

    Petr (t993u): the oak counter at the dining / living column is one
    continuous notched piece, not two slabs joined at the column. A mid-
    length joint is still an ``open:`` for the woodworker if the stock is
    shorter than the finished length.

    ``notch_width`` (mm), when set, is the pier cut-out from the lent
    slab's start along +a, behind the shallow cabinet; any leftover of
    that slab past the pier keeps a full-depth top.
    """
    if notch_width is not None and piece is not None and len(top.boxes) >= 2:
        A0, A1 = min(b[0] for b in top.boxes), max(b[1] for b in top.boxes)
        C0, C1 = min(b[2] for b in top.boxes), max(b[3] for b in top.boxes)
        z0, z1 = top.boxes[0][4], top.boxes[0][5]
        n0, n1 = piece[0], piece[0] + notch_width
        # Behind the shallow lent slab (its larger-c face to the outer back).
        hole_c0, hole_c1 = piece[3], C1
        if hole_c1 - hole_c0 > TOL and n1 - n0 > TOL:
            top.boxes[:] = [(A0, A1, C0, C1, z0, z1)]
            top.voids.append(Void(n0, n1, hole_c0, hole_c1, name="pier"))
            top.props["OnePiece"] = True
            top.props["OnePieceNote"] = (
                "one notched slab (t993u: no joint at the column); "
                "open: the woodworker may need a mid-length joint if the stock is shorter"
            )
            if run.worktop is not None:
                run.worktop = (A0, A1, C0, C1, z0, z1)
        return
    if len(top.boxes) != 2:
        return
    a, b = top.boxes
    if not (_near(a[4], b[4]) and _near(a[5], b[5])):
        return
    z0, z1 = a[4], a[5]
    A0, A1 = min(a[0], b[0]), max(a[1], b[1])
    C0, C1 = min(a[2], b[2]), max(a[3], b[3])
    # The AABB minus the two boxes should be one axis-aligned rectangle.
    # Sample the four possible corner leftovers.
    leftovers = []
    for x0, x1 in ((A0, a[0]), (a[1], A1), (A0, b[0]), (b[1], A1)):
        for y0, y1 in ((C0, a[2]), (a[3], C1), (C0, b[2]), (b[3], C1)):
            if x1 - x0 > TOL and y1 - y0 > TOL:
                leftovers.append((x0, x1, y0, y1))
    # Unique leftover rectangles (dedup near-equal)
    uniq = []
    for r in leftovers:
        if any(_near(r[0], u[0]) and _near(r[1], u[1]) and _near(r[2], u[2]) and _near(r[3], u[3]) for u in uniq):
            continue
        # drop leftovers that sit inside either box
        cx, cy = (r[0] + r[1]) / 2, (r[2] + r[3]) / 2
        if any(p[0] - TOL <= cx <= p[1] + TOL and p[2] - TOL <= cy <= p[3] + TOL for p in (a, b)):
            continue
        uniq.append(r)
    if len(uniq) != 1:
        return
    hole = uniq[0]
    top.boxes[:] = [(A0, A1, C0, C1, z0, z1)]
    top.voids.append(Void(hole[0], hole[1], hole[2], hole[3], name="notch"))
    top.props["OnePiece"] = True
    top.props["OnePieceNote"] = (
        "one notched slab (t993u: no joint at the column); "
        "open: the woodworker may need a mid-length joint if the stock is shorter"
    )
    if run.worktop is not None:
        run.worktop = (A0, A1, C0, C1, z0, z1)


def _join_worktops(runs_: list) -> None:
    """Slabs a bay lends to another run's counter (``Pset_KitchenBay.WorktopRun``)
    join that run's worktop part, in its frame (both frames must be
    parallel). Petr, 2026-11-20 b: at the eastern column the oak top "is part
    of the living-room oak counter"."""
    by_id = {r.id: r for r in runs_}
    for run in runs_:
        for other_id, bay_id, slab in run.lent_worktop:
            other = by_id.get(other_id)
            if other is None:
                raise ValueError(f"{bay_id}: WorktopRun {other_id} is not a kitchen run")
            top = next((p for p in other.parts if p.role == "Worktop" and p.id == f"{other.id}-WORKTOP"), None)
            if top is None:
                raise ValueError(f"{bay_id}: {other_id} has no worktop to join")
            f, g = run.frame, other.frame
            if abs(f.ux - g.ux) > 1e-9 or abs(f.uy - g.uy) > 1e-9:
                raise ValueError(f"{bay_id}: {other_id}'s frame is not parallel to {run.id}'s")
            a0, a1, c0, c1, z0, z1 = slab
            x0, y0 = f.world(a0, c0, 0.0)[:2]
            x1, y1 = f.world(a1, c1, 0.0)[:2]
            la0, lc0 = g.local(x0, y0)
            la1, lc1 = g.local(x1, y1)
            piece = (min(la0, la1), max(la0, la1), min(lc0, lc1), max(lc0, lc1), z0, z1)
            if not (_near(z0, top.boxes[0][4]) and _near(z1, top.boxes[0][5])):
                raise ValueError(f"{bay_id}: its top {z0}–{z1} is not {other_id}'s {top.boxes[0][4]}–{top.boxes[0][5]}")
            top.boxes.append(piece)
            covers = [x for x in str(top.props.get("Covers") or "").split(",") if x]
            top.props["Covers"] = ",".join(covers + [bay_id])
            if other.worktop is not None:
                w = other.worktop
                other.worktop = (min(w[0], piece[0]), max(w[1], piece[1]), min(w[2], piece[2]), max(w[3], piece[3]), w[4], w[5])
            bay = next((b for b in run.bays if b.id == bay_id), None)
            notch = _prop(bay.element, PSET_BAY, "WorktopNotchWidth") if bay is not None else None
            _merge_notched_worktop(top, other, piece, float(notch) * 1000.0 if notch is not None else None)


def _sink(ext: dict, frame: Frame, centre, ref, top: float) -> dict:
    """Worktop cut-out of a sink, centred on its box (run frame mm).

    Pset_Sink ``CutoutWidth``/``CutoutDepth``/``CutoutRadius`` are the
    manufacturer's (Width along the sink's own RefDirection). Without them
    the cut-out is the bowl less ``SINK_CUTOUT_INSET_MM`` a side (guess:).
    """
    ca, cc = centre
    rx, ry = ref

    def m(key):
        v = _prop(ext, PSET_SINK, key)
        return None if v is None else float(v) * 1000.0

    cw, cd = m("CutoutWidth"), m("CutoutDepth")
    if cw is None or cd is None:
        cw = m("BowlWidth") - 2 * SINK_CUTOUT_INSET_MM
        cd = m("BowlDepth") - 2 * SINK_CUTOUT_INSET_MM
    along_is_width = abs(rx * frame.ux + ry * frame.uy) > 0.5
    ha = (cw if along_is_width else cd) / 2.0
    hc = (cd if along_is_width else cw) / 2.0
    return {
        "yaml_id": ext["id"],
        "cutout": Void(ca - ha, ca + ha, cc - hc, cc + hc, radius=m("CutoutRadius") or 0.0, name=ext["id"]),
        "top": top,
        "mounting": str(_prop(ext, PSET_SINK, "Mounting", "Undermount")),
        # mm from the inner bowl back to the drain centre, or None to hang
        # the disposer on the bowl centre (guess:).
        "drain_from_back": m("DrainOffsetFromBack"),
    }


def _box_plan(element: dict):
    """Plan rectangle (mm) and z range of a yaml box element."""
    ox, oy = (float(v) * 1000.0 for v in element["Origin"])
    rx, ry = _unit(element.get("RefDirection"))
    nx, ny = -ry, rx
    w, d, h = (float(element[k]) * 1000.0 for k in ("Width", "Depth", "Height"))
    pts = [(ox + rx * x + nx * y, oy + ry * x + ny * y) for x in (0, w) for y in (0, d)]
    z = float(element.get("Elevation") or 0.0) * 1000.0
    return pts, (z, z + h), (rx, ry), (w, d)


class _WorktopMixin:
    def _glue_undermount_sinks(self, zb: float) -> None:
        """Keep an undermount rim glued to the worktop underside.

        Yaml Elevation is the planned position under the default counter.
        When the run height changes (or the yaml is a few millimetres off),
        the rim follows the stone so the bowl, disposer and cut-out stay
        consistent with the worktop.
        """
        for sink in self.sinks:
            if sink["mounting"] != "Undermount" or _near(sink["top"], zb):
                continue
            dz = zb - sink["top"]
            sink["top"] = zb
            a0, a1, c0, c1, z0, z1 = sink["box"]
            sink["box"] = (a0, a1, c0, c1, z0 + dz, z1 + dz)
            ext = sink.get("element")
            if ext is not None:
                ext["Elevation"] = round((z0 + dz) / 1000.0, 6)

    def _worktop(self, rows, zb, zt):
        run, p = self.run, self.p
        bays = run.bays
        a0 = min(b.a0 for b in bays)
        a1 = max(b.a1 for b in bays)
        c0, c1 = self._worktop_c(bays)
        if _prop(run.element, PSET_RUN, "CladEnds"):
            ct = p["CladdingThickness"] or p["WorktopThickness"]
            a0 -= ct
            a1 += ct
        a0, a1 = self._flush_span(a0, a1)
        voids = []
        for sink in self.sinks:
            hole = sink["cutout"]
            if not (hole.a0 >= a0 and hole.a1 <= a1 and hole.c0 >= c0 and hole.c1 <= c1):
                continue
            if sink["mounting"] != "Undermount":
                raise ValueError(f"{sink['yaml_id']}: only undermount sinks are modelled, got {sink['mounting']}")
            if not _near(sink["top"], zb):
                # An undermount rim is glued to the underside of the stone.
                raise ValueError(
                    f"{sink['yaml_id']}: undermount rim top {sink['top']} mm must be the worktop underside {zb} mm"
                )
            voids.append(hole)
        for hob in self.run.hobs.values():
            voids.append(hob.cutout)
            if hob.rebate is not None:
                voids.append(hob.rebate)
        run.worktop = (a0, a1, c0, c1, zb, zt)
        material = _prop(run.element, PSET_RUN, "WorktopMaterial")
        cuts = []
        if self._mitred():
            cuts = [_mitre_cut(a0, a0 + (zt - zb), zb, zt, "top"), _mitre_cut(a1, a1 - (zt - zb), zb, zt, "top")]
        top = self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", [run.worktop],
                      label="worktop", voids=voids, material=material, cuts=cuts))
        self._drip_grooves(top)

    def _floor_ends(self) -> set:
        """``Pset_KitchenRun.EndsToFloor``: compass names of the run ends
        (single rows) whose carcass end side runs down to the floor."""
        v = _prop(self.run.element, PSET_RUN, "EndsToFloor")
        return set(str(v or "").split())

    def _flush_ends(self) -> bool:
        """``Pset_KitchenRun.FlushEnds`` (Petr, 2026-11-22, the west run
        between the pocket doors OP24 / OP25): no cladding outside the bays;
        a carcass end side is the visible end panel and the worktop and
        backsplash stop flush with it. A run end that is a niche (the
        dishwasher slot) has no end side, so it gets one ``BoardThickness``
        panel just outside the niche (``_end_panels``), inside the run's
        span on the wall; the top and backsplash run over it."""
        v = _prop(self.run.element, PSET_RUN, "FlushEnds")
        if v and _prop(self.run.element, PSET_RUN, "CladEnds"):
            raise ValueError(f"{self.run.id}: FlushEnds and CladEnds exclude each other")
        return bool(v)

    def _niche_ends(self) -> list:
        """(direction, edge) of each run end whose end bay is a niche."""
        bays = self.run.bays
        lo, hi = min(bays, key=lambda b: b.a0), max(bays, key=lambda b: b.a1)
        return [(da, b.a0 if da < 0 else b.a1) for da, b in ((-1, lo), (1, hi)) if b.niche]

    def _flush_span(self, a0: float, a1: float) -> tuple[float, float]:
        """``a0``, ``a1`` grown over the ``FlushEnds`` niche end panels."""
        if not self._flush_ends():
            return a0, a1
        t = self.p["BoardThickness"]
        for da, _edge in self._niche_ends():
            if da < 0:
                a0 -= t
            else:
                a1 += t
        return a0, a1

    def _end_panels(self, zb, zt):
        """The ``FlushEnds`` end panel beside an end niche: floor to the
        worktop underside, wall to the back of the fronts (so the front
        covers the panel, like a carcass end side), ``BoardThickness``
        thick, in the run's end-side material (cream)."""
        run, p = self.run, self.p
        t, tf = p["BoardThickness"], p["FrontThickness"]
        for da, edge in self._niche_ends():
            name = self._end_name(da)
            bay = next(b for b in run.bays if _near(b.a0 if da < 0 else b.a1, edge))
            c0, c1 = self.c_range(bay, tf, bay.depth)
            a_range = (edge - t, edge) if da < 0 else (edge, edge + t)
            self.add(Part(f"{run.id}-NICHE-END-{name}", f"Bok {name} (u niky)", "EndSide",
                          [(*a_range, c0, c1, zb, zt)], label="cabinet"), bay)

    def _mitred(self) -> bool:
        """``MitreEnds``: the worktop and the clad ends meet at 45 degrees
        (the top's end and the panel's top edge both bevelled, outer faces
        meeting at the top's outer corner). Needs equal thicknesses."""
        run, p = self.run, self.p
        if not _prop(run.element, PSET_RUN, "MitreEnds"):
            return False
        if not _prop(run.element, PSET_RUN, "CladEnds"):
            raise ValueError(f"{run.id}: MitreEnds needs CladEnds")
        ct = p["CladdingThickness"] or p["WorktopThickness"]
        if not _near(ct, p["WorktopThickness"]):
            raise ValueError(f"{run.id}: a 45 degree mitre needs the cladding as thick as the worktop "
                             f"({ct} vs {p['WorktopThickness']})")
        return True

    def _cladding(self, rows, zb, zt):
        run, p = self.run, self.p
        ct = p["CladdingThickness"] or p["WorktopThickness"]
        if run.worktop is not None:
            c0, c1 = run.worktop[2], run.worktop[3]
        else:
            c0, c1 = min(b.c0 for b in run.bays), max(b.c1 for b in run.bays)
        a0 = min(b.a0 for b in run.bays)
        a1 = max(b.a1 for b in run.bays)
        # Petr, 2026-11-20 f: the west run's sides are cream wood, the
        # island's stay Silestone (CladdingMaterial, default the worktop's).
        material = _prop(run.element, PSET_RUN, "CladdingMaterial") or _prop(run.element, PSET_RUN, "WorktopMaterial")
        stone = _prop(run.element, PSET_RUN, "CladdingMaterial") is None
        mitre = self._mitred()
        wt = p["WorktopThickness"]
        top = zt + wt if mitre else zt
        for da, a_range, edge in ((-1, (a0 - ct, a0), a0), (1, (a1, a1 + ct), a1)):
            name = self._end_name(da)
            touching = [b for b in run.bays if _near(b.a0 if da < 0 else b.a1, edge)]
            cuts = [_mitre_cut(edge + da * ct, edge, zt, top, "clad")] if mitre else []
            self.add(Part(f"{run.id}-CLAD-{name}", f"Obklad boku {name}", "Cladding",
                          [(*a_range, c0, c1, zb, top)], label="worktop" if stone else "cabinet",
                          material=material, cuts=cuts), *touching)

    def _hob_layout(self, bay: Bay, zt: float) -> Hob:
        """The hob of one bay from its Pset_Hob (metres), run frame mm.

        Centred on the bay along the run. The cut-out's front edge is
        ``FrontOffset`` behind the bay's front face (default: the cut-out
        centred on the bay depth, guess:). Flush-fit: the glass top is the
        worktop top and the rebate is cut around the hole; surface-mounted:
        the glass rests on the worktop.
        """

        def mm(key, default=None):
            v = _prop(bay.element, PSET_HOB, key)
            if v is None:
                if default is None:
                    raise ValueError(f"{bay.id}: Pset_Hob needs {key}")
                return default
            return float(v) * 1000.0

        mounting = str(_prop(bay.element, PSET_HOB, "Mounting", "SurfaceMounted"))
        if mounting not in ("FlushFit", "SurfaceMounted"):
            raise ValueError(f"{bay.id}: Pset_Hob Mounting is FlushFit or SurfaceMounted, got {mounting}")
        cw, cd = mm("CutoutWidth"), mm("CutoutDepth")
        gw, gd, gt = mm("GlassWidth"), mm("GlassDepth"), mm("GlassThickness")
        hw, hd, ih = mm("HousingWidth"), mm("HousingDepth"), mm("InstallationHeight")
        front = mm("FrontOffset", (bay.depth - cd) / 2.0)
        am = (bay.a0 + bay.a1) / 2.0
        c0, c1 = self.c_range(bay, front, front + cd)
        cm = (c0 + c1) / 2.0
        cutout = Void(am - cw / 2, am + cw / 2, c0, c1, name="hob")
        rebate = None
        if mounting == "FlushFit":
            rw, rd, rh = mm("RebateWidth"), mm("RebateDepth"), mm("RebateHeight")
            rebate = Void(am - rw / 2, am + rw / 2, cm - rd / 2, cm + rd / 2, depth=rh, name="hob rebate")
            glass_top = zt
        else:
            glass_top = zt + gt
        glass = (am - gw / 2, am + gw / 2, cm - gd / 2, cm + gd / 2, glass_top - gt, glass_top)
        underside = glass_top - ih
        housing = (am - hw / 2, am + hw / 2, cm - hd / 2, cm + hd / 2, underside, glass_top - gt)
        wt0, wt1 = self._worktop_c(self.run.bays)
        back_edge = (wt1 - c1) if bay.front_low else (c0 - wt0)
        need = mm("MinBackEdge", 50.0)
        if back_edge < need - TOL:
            raise ValueError(f"{bay.id}: hob cut-out {back_edge} mm from the worktop's back edge, needs {need}")
        hid = str(_prop(bay.element, PSET_HOB, "Id", f"{bay.id}-HOB"))
        name = str(_prop(bay.element, PSET_HOB, "Model"))
        return Hob(hid, name, mounting, cutout, rebate, glass, housing, underside, back_edge,
                   mm("MinDrawerGap", 8.0))

    def _hob_vent_plan(self, bay: Bay, z0, z1, back_y, p) -> HobVent | None:
        """A sealed exhaust channel when this bay has a hob and a
        ``Pset_Drawers.NominalLength`` shorter than the longest NL that
        would fill the carcass (Petr, 2026-11-24, t935u–t941u)."""
        hob = self.run.hobs.get(bay.id)
        if hob is None or _prop(bay.element, PSET_DRAWERS, "NominalLength") is None:
            return None
        tf, t = p["FrontThickness"], p["BoardThickness"]
        nl = merivobox_nl(p, back_y - tf, bay.element)
        longest = merivobox_nl(p, back_y - tf, None)
        if nl >= longest - TOL:
            return None
        inner_y = tf + nl + p["MerivoboxDepthClearance"]
        back_t = t
        outer_y = inner_y + back_t
        channel = back_y - outer_y
        if channel < HOB_VENT_CHANNEL_MIN - TOL:
            raise ValueError(
                f"{bay.id}: hob exhaust channel {channel:.1f} mm is under "
                f"{HOB_VENT_CHANNEL_MIN:.0f} (NL {nl:g}, back {back_t:g}; "
                f"a shorter NL or a thinner back is needed)"
            )
        panel_t = float(_prop(bay.element, PSET_HOB, "IntakePanelThickness", 0.012)) * 1000.0
        if panel_t <= 0:
            raise ValueError(f"{bay.id}: IntakePanelThickness must be > 0 when the bay is vented")
        hole_d = float(_prop(bay.element, PSET_HOB, "IntakeHoleDiameter", 0.08)) * 1000.0
        if not (MIELE_INTAKE_HOLE_D[0] - TOL <= hole_d <= MIELE_INTAKE_HOLE_D[1] + TOL):
            raise ValueError(
                f"{bay.id}: IntakeHoleDiameter {hole_d:g} mm is not in Miele's "
                f"{MIELE_INTAKE_HOLE_D[0]:g}–{MIELE_INTAKE_HOLE_D[1]:g} mm"
            )
        vent = HobVent(
            nl=nl, back_t=back_t, channel=channel, inner_y=inner_y, outer_y=outer_y,
            back_y=back_y, cutout_h=MIELE_REAR_CUTOUT_H, cutout_w=MIELE_REAR_CUTOUT_W,
            panel_t=panel_t, hole_d=hole_d,
        )
        self.run.notes.append(
            f"{bay.id}: MERIVOBOX NL {longest:g} → {nl:g}, sealed exhaust channel "
            f"{channel:.0f} mm (moved-forward back {back_t:.0f} mm) to the central back"
        )
        self.run.notes.append(
            f"guess: {bay.id} intake panel {panel_t:.0f} mm compact HPL "
            f"(thickness not confirmed), no gap to the hob underside, holes Ø{hole_d:.0f} "
            f"at Miele X {MIELE_INTAKE_X[0]:g}/{MIELE_INTAKE_X[1]:g}, Y {MIELE_INTAKE_Y:g}"
        )
        self.run.notes.append(
            f"open: {bay.id} how exhaust leaves the island underside "
            f"(outlet / grille / duct / baffle), fillets at the channel turns, "
            f"and back-panel thickness are to be settled with the woodworker"
        )
        return vent

    def _hob_vent_carcass(self, bay: Bay, z0, z1, p, vent: HobVent):
        """Air-intake panel under the hob, and the moved-forward back with
        the Miele rear cut-out, sealing the drawer space from the exhaust
        channel. The carcass bottom already stops at ``vent.outer_y``, so
        the channel opens down into the island underside / plinth void."""
        lo, hi = bay.clear_lo, bay.clear_hi
        tb = p["BottomThickness"] or p["BoardThickness"]
        hob = self.run.hobs[bay.id]
        cut = hob.cutout
        y_front = _prop(bay.element, PSET_HOB, "FrontOffset")
        y_front = (float(y_front) * 1000.0) if y_front is not None else (
            abs((cut.c0 if bay.front_low else cut.c1) - (bay.c0 if bay.front_low else bay.c1))
        )
        mid_a = (cut.a0 + cut.a1) / 2.0
        mid_y = y_front + abs(cut.c1 - cut.c0) / 2.0
        # Panel: no gap to the hob, sealed to the new back, so intake air
        # comes only from the drawer below. Facing the front, X1.1 is to
        # the left (−a) and X2.1 to the right (+a). Y is toward the rear.
        c_p0, c_p1 = self.c_range(bay, y_front, vent.inner_y)
        r = vent.hole_d / 2.0
        hy = mid_y + MIELE_INTAKE_Y
        holes = []
        for sign, x in ((-1, MIELE_INTAKE_X[0]), (1, MIELE_INTAKE_X[1])):
            ha = mid_a + sign * x
            hc0, hc1 = self.c_range(bay, hy - r, hy + r)
            holes.append(Void(ha - r, ha + r, min(hc0, hc1), max(hc0, hc1),
                              radius=r, name=f"intake {x:g}"))
        gap = (MIELE_INTAKE_X[0] + MIELE_INTAKE_X[1]) - vent.hole_d
        if gap < MIELE_INTAKE_HOLE_GAP - TOL:
            raise ValueError(
                f"{bay.id}: intake holes {gap:.0f} mm apart, Miele needs ≥ {MIELE_INTAKE_HOLE_GAP:.0f}"
            )
        self.add(Part(f"{bay.id}-INTAKE", "Air-intake base panel", "Board",
                      [(lo, hi, c_p0, c_p1, hob.underside - vent.panel_t, hob.underside)],
                      voids=holes,
                      props={"Kind": "IntakePanel", "Thickness": round(vent.panel_t / 1000.0, 6),
                             "Guess": True}), bay)
        c_b0, c_b1 = self.c_range(bay, vent.inner_y, vent.outer_y)
        void_c0, void_c1 = min(c_b0, c_b1) - 1.0, max(c_b0, c_b1) + 1.0
        cutout = Void(mid_a - vent.cutout_w / 2.0, mid_a + vent.cutout_w / 2.0,
                      void_c0, void_c1, depth=vent.cutout_h, name="exhaust")
        self.add(Part(f"{bay.id}-BACK", "Záda (exhaust)", "Back",
                      [(lo, hi, c_b0, c_b1, z0 + tb, z1)],
                      voids=[cutout],
                      props={"Kind": "ExhaustBack", "Channel": round(vent.channel / 1000.0, 6)}), bay)

    def _drip_grooves(self, part: Part) -> None:
        """Underside drip grooves (okapnik) along this slab's front overhangs
        (Petr, 2026-11-24, t947u). guess: 5 mm wide × 3 mm deep, centreline
        10 mm in from the edge (half of the 20 mm overhang). Stopped 10 mm
        short of each free end, and of a 45° mitre's inner edge so the
        groove stays on the underside. Where two overhangs meet at a
        corner, the grooves join (one continuous centreline)."""
        if part.role != "Worktop" or not part.boxes:
            return
        # Overhang on the c0 face (a front_low row) and/or the c1 face.
        ov_lo = self._overhang(True) if any(b.front_low for b in self.run.bays) else 0.0
        ov_hi = self._overhang(False) if any(not b.front_low for b in self.run.bays) else 0.0
        width, depth = DRIP_GROOVE_WIDTH, DRIP_GROOVE_DEPTH
        centre, stop = DRIP_GROOVE_CENTRE, DRIP_GROOVE_END_STOP
        # A groove that would run past the front face onto the cabinets is
        # skipped (the overhang is too shallow for this profile).
        need = centre + width / 2.0
        mitre = (self.p["WorktopThickness"] if self._mitred() else 0.0)
        half = width / 2.0
        for box in part.boxes:
            a0, a1, c0, c1, _z0, _z1 = box
            a_lo, a_hi = a0 + mitre + stop, a1 - mitre - stop
            if a_hi - a_lo < width:
                continue
            lo = ov_lo >= need
            hi = ov_hi >= need
            if lo:
                part.voids.append(Void(a_lo, a_hi, c0 + centre - half, c0 + centre + half,
                                       depth=depth, name="drip-groove", underside=True))
            if hi:
                part.voids.append(Void(a_lo, a_hi, c1 - centre - half, c1 - centre + half,
                                       depth=depth, name="drip-groove", underside=True))

            # Opposite long edges do not meet. If a later run grows an end
            # overhang that meets a side overhang, a short corner connector
            # along c would be added here (the a-runs already stop at the
            # same a_lo/a_hi, so they would meet a c-run at the corner).

    def _overhang(self, front_low: bool) -> float:
        """Front overhang of the edge a row facing c0 (``front_low``) or c1
        has: ``WorktopOverhang<compass>`` (metres, e.g. ``WorktopOverhangE``)
        for that edge, else ``WorktopOverhang``. Petr, 2026-11-20 f: the
        island's east edge is flush with the east row's fronts."""
        face = self.run.frame.compass(0.0, -1.0 if front_low else 1.0)
        own = _prop(self.run.element, PSET_RUN, f"WorktopOverhang{face}")
        return self.p["WorktopOverhang"] if own is None else float(own) * 1000.0

    def _worktop_c(self, bays) -> tuple[float, float]:
        c0 = min(b.c0 for b in bays)
        c1 = max(b.c1 for b in bays)
        if any(b.front_low and _near(b.c0, c0) for b in bays):
            c0 -= self._overhang(True)
        if any((not b.front_low) and _near(b.c1, c1) for b in bays):
            c1 += self._overhang(False)
        return c0, c1

    def _backsplash(self, rows, pairs, zt):
        """Stone on the wall behind a single row: worktop top up to the
        lowest box hanging over that strip (the wall cabinets), else to
        ``BacksplashTop`` (an ``open:`` height)."""
        run, p = self.run, self.p
        bt = p["BacksplashThickness"]
        paired = {id(r) for pair in pairs for r in pair}
        # Wall to wall along the bays, not over the clad ends' extra 20
        # (those reach past the door jambs).
        a0, a1 = self._flush_span(min(b.a0 for b in run.bays), max(b.a1 for b in run.bays))
        material = _prop(run.element, PSET_RUN, "BacksplashMaterial") or _prop(run.element, PSET_RUN, "WorktopMaterial")
        for row in rows:
            if id(row) in paired:
                continue
            c0, c1 = self.c_range(row[0], row[0].depth - bt, row[0].depth)
            over = [
                (z, oid) for (oa0, oa1, oc0, oc1, z, oid) in self.above
                if z > zt + TOL and oa0 < a1 - TOL and oa1 > a0 + TOL and oc0 < c1 - TOL and oc1 > c0 + TOL
            ]
            if over:
                top = min(z for z, _ in over)
                covered = sorted({oid for z, oid in over})
                run.notes.append(f"backsplash top {top:.0f}: underside of {', '.join(covered)}")
            elif p["BacksplashTop"] > 0:
                top = p["BacksplashTop"]
                run.notes.append(f"open: backsplash top {top:.0f} (BacksplashTop, nothing hangs above)")
            else:
                raise ValueError(f"{run.id}: nothing above the backsplash and no BacksplashTop")
            face = run.frame.compass(0.0, 1.0 if row[0].front_low else -1.0)
            self.add(Part(f"{run.id}-BACKSPLASH", f"Obklad stěny {face}", "Backsplash",
                          [(a0, a1, c0, c1, zt, top)], label="worktop", material=material), *row)
