"""Carcass construction: box runs, dividers, plinths, legs, and LED bottoms."""
from __future__ import annotations

from dataclasses import replace

from .geometry import _boxes_meet, _cuts, _near, _ring, _rows, _segments
from .hardware import PSET_BAY, PSET_CABINET, PSET_RUN, TOL
from .props import _params, _prop, has_fronts, section_element, section_widths, zone_spec
from .types import Bay, LedField, Part
from .worktop import _worktop_label


class _CarcassMixin:
    def _box_run(self, bays, z_base, height, wt):
        """Bays as whole bodies under a stone worktop (``Carcass: Box``).

        The body keeps the bay's plan and stops at the worktop underside, so
        the 930 counter stays 930. The worktop is one part made of one slab
        per bay (bays of different depth step around the piers), each with
        the front overhang; clad ends add the cladding thickness.
        """
        run, p = self.run, self.p
        ul = p["UnderlayThickness"]
        run.carcass_z0, run.carcass_z1 = z_base, z_base + height - wt - ul
        material = _prop(run.element, PSET_RUN, "BodyMaterial")
        z0 = z_base + p["PlinthHeight"]

        def own_top(bay):
            return (_prop(bay.element, PSET_BAY, "WorktopRun") is not None
                    or _prop(bay.element, PSET_BAY, "WorktopMaterial") is not None)

        def bay_wt(bay):
            # A bay topped with its own piece may have its own thickness
            # (Pset_KitchenBay.WorktopThickness, metres): the column
            # cupboards' oak tops are 40 since 2026-11-20 f.
            own = _prop(bay.element, PSET_BAY, "WorktopThickness")
            return wt if own is None else float(own) * 1000.0

        def bay_stack(bay):
            # Everything over the carcass: the bay's own top, or the stone
            # plus the underlay (``UnderlayThickness``). The finished top
            # stays at the bay's height (930).
            return bay_wt(bay) if own_top(bay) else wt + ul

        for bay in bays:
            z1 = z_base + height - bay_stack(bay)
            if has_fronts(bay.element):
                # A bay with fronts is a carcass of its own (end sides,
                # bottom, back, rails) with its fronts, on the run's plinth.
                self._block("single", ([bay],), z0, z1)
                self._bay_parts(bay, z0, z1, shared_back=False)
                continue
            self.add(Part(f"{bay.id}-BODY", bay.element.get("Name") or bay.id, "Body",
                          [(bay.a0, bay.a1, bay.c0, bay.c1, z_base, z1)], material=material), bay)
        self._dock_appliances(bays)
        self._standing_appliances()
        self._join_flush_kickboards(bays)
        if wt <= 0:
            return
        clad = _prop(run.element, PSET_RUN, "CladEnds")
        ct = p["CladdingThickness"] or wt
        a_lo, a_hi = min(b.a0 for b in bays), max(b.a1 for b in bays)
        slabs = []
        for bay in sorted(bays, key=lambda b: b.a0):
            a0 = bay.a0 - (ct if clad and _near(bay.a0, a_lo) else 0.0)
            a1 = bay.a1 + (ct if clad and _near(bay.a1, a_hi) else 0.0)
            c0 = bay.c0 - (self._overhang(True) if bay.front_low else 0.0)
            c1 = bay.c1 + (0.0 if bay.front_low else self._overhang(False))
            slabs.append((a0, a1, c0, c1, z_base + height - bay_wt(bay), z_base + height))
        run.worktop = (min(s[0] for s in slabs), max(s[1] for s in slabs),
                       min(s[2] for s in slabs), max(s[3] for s in slabs), z_base + height - wt, z_base + height)
        material = _prop(run.element, PSET_RUN, "WorktopMaterial")
        # A bay may top itself with its own piece (Pset_KitchenBay.WorktopMaterial)
        # or with another run's counter (WorktopRun: its slab joins that run's
        # worktop, see ``_join_worktops``). Petr, 2026-11-20 b: the shallow
        # column cupboards get oak, not Silestone.
        own = []
        for bay, slab in zip(sorted(bays, key=lambda b: b.a0), list(slabs)):
            other = _prop(bay.element, PSET_BAY, "WorktopRun")
            mat = _prop(bay.element, PSET_BAY, "WorktopMaterial")
            if other is None and mat is None:
                continue
            slabs.remove(slab)
            if other is not None:
                run.lent_worktop.append((str(other), bay.id, slab))
            else:
                own.append(self.add(Part(f"{bay.id}-WORKTOP", "Pracovní deska (vlastní)", "Worktop", [slab],
                                         label=_worktop_label(mat), material=mat,
                                         props={"Material": mat}), bay))
        if slabs:
            top = self.add(Part(f"{run.id}-WORKTOP", "Pracovní deska", "Worktop", slabs, label=_worktop_label(material),
                          material=material))
            self._drip_grooves(top)
            if ul > 0:
                # The same footprint, under the stone (Petr, 2026-11-20 f:
                # "the dining part has 20 silestone and 20 oak below it").
                under = _prop(run.element, PSET_RUN, "UnderlayMaterial")
                if under is None:
                    raise ValueError(f"{run.id}: UnderlayThickness needs an UnderlayMaterial")
                self.add(Part(f"{run.id}-UNDERLAY", "Podložení pracovní desky", "Underlay",
                              [(s[0], s[1], s[2], s[3], s[4] - ul, s[4]) for s in slabs],
                              label=_worktop_label(under), material=under, props={"Material": under}))
        if clad:
            self._cladding(_rows(run.bays), z_base, z_base + height - wt - ul)

    def _pairs(self, rows):
        """Back-to-back rows: a row facing c0 whose back plane is another row's back plane."""
        pairs = []
        for a in rows:
            for b in rows:
                if a is b or not a[0].front_low or b[0].front_low:
                    continue
                if not _near(a[0].c1, b[0].c0):
                    continue
                sa, sb = _segments(a), _segments(b)
                if len(sa) != 1 or len(sb) != 1 or len(sa[0]) != len(a) or len(sb[0]) != len(b):
                    raise ValueError(f"{self.run.id}: back-to-back rows must be continuous (no niches)")
                if not (_near(a[0].a0, b[0].a0) and _near(a[-1].a1, b[-1].a1)):
                    raise ValueError(f"{self.run.id}: back-to-back rows must start and end together")
                pairs.append((a, b))
        return pairs

    def _end_name(self, da: float) -> str:
        return self.run.frame.compass(da, 0.0)

    def _block(self, kind, rows_in, z0, z1):
        run, p = self.run, self.p
        t, tf, bt = p["BoardThickness"], p["FrontThickness"], p["BackThickness"]
        a_lo = rows_in[0][0].a0
        a_hi = rows_in[0][-1].a1
        multi = len([1 for r in _rows(run.bays) for _ in _segments(r)]) > 1 and kind == "single"
        tag = ""
        if multi:
            first = rows_in[0][0].id
            tag = f"-{first}"
        if kind == "pair":
            west, east = rows_in  # names only: row facing c0, row facing c1
            c_lo = west[0].c0 + tf
            c_hi = east[0].c1 - tf
            plane = west[0].c1
            # End sides: one board across both rows (Petr: monoblock).
            for end, a_range, bays in (
                ("lo", (a_lo, a_lo + t), (west[0], east[0])),
                ("hi", (a_hi - t, a_hi), (west[-1], east[-1])),
            ):
                name = self._end_name(-1 if end == "lo" else 1)
                self.add(Part(f"{run.id}-END-{name}{tag}", f"Bok {name}", "EndSide",
                              [(*a_range, c_lo, c_hi, z0, z1)]), *bays)
            back = self.add(Part(f"{run.id}-BACK", "Společná záda", "CentralBack",
                                 [(a_lo + t, a_hi - t, plane - t / 2, plane + t / 2, z0, z1)]))
            for row in rows_in:
                for bay in row:
                    bay.members.append(back.id)
                self._dividers(row, z0, z1, back_y=row[0].depth - t / 2, tag=tag)
                self._plinth(row, a_lo, a_hi, back_y=row[0].depth - t / 2, tag=tag)
            return
        (row,) = rows_in
        floor_ends = self._floor_ends()
        for end, a_range, bay in (("lo", (a_lo, a_lo + t), row[0]), ("hi", (a_hi - t, a_hi), row[-1])):
            name = self._end_name(-1 if end == "lo" else 1)
            c0, c1 = self.c_range(bay, tf, bay.depth)
            # ``EndsToFloor`` (Petr, 2026-11-23, t865u): this end side runs
            # down past the plinth to the floor; the bottom is fixed to it
            # (guess: dowels / connectors or angle brackets) and the legs and
            # kickboard stop at its inside face.
            zs = bay.z_base if name in floor_ends else z0
            self.add(Part(f"{run.id}-END-{name}{tag}", f"Bok {name}", "EndSide",
                          [(*a_range, c0, c1, zs, z1)],
                          props={"ToFloor": True} if name in floor_ends else {}), bay)
        self._dividers(row, z0, z1, back_y=row[0].depth, tag=tag)
        self._plinth(row, a_lo, a_hi, back_y=row[0].depth - p["BackThickness"], tag=tag)

    def _dividers(self, row, z0, z1, back_y, tag):
        t, tf = self.p["BoardThickness"], self.p["FrontThickness"]
        # With one continuous LED bottom (``LedContinuous``) the dividers
        # stand on that bottom instead of running down past it.
        zd = z0 + ((self.p["BottomThickness"] or t) if self._led_continuous() else 0.0)
        for left, right in zip(row, row[1:]):
            a = left.a1
            c0, c1 = self.c_range(left, tf, back_y)
            self.add(Part(f"{self.run.id}-DIV-{left.id}-{right.id}", f"Přepážka {left.id} | {right.id}",
                          "Divider", [(a - t / 2, a + t / 2, c0, c1, zd, z1)]), left, right)
        # Clear widths: half a divider or a whole end side on each side.
        for i, bay in enumerate(row):
            bay.clear_lo = bay.a0 + (t if i == 0 else t / 2)
            bay.clear_hi = bay.a1 - (t if i == len(row) - 1 else t / 2)

    def _plinth(self, row, a_lo, a_hi, back_y, tag=""):
        """The toe-kick zone under a row (``PlinthHeight``), by
        ``Pset_KitchenRun.PlinthKind``: ``Board`` a kickboard ``PlinthSetback``
        behind the fronts; ``Legs`` open legs, plus that kickboard when
        ``Kickboard`` is true (Petr, 2026-11-20 b: "add kickboard (cover) to
        the existing plinth / toe-kick areas"); ``Flush`` a fixed kickboard
        in the fronts' plane, front-thick (the dining run: "there's no
        recessed toe-kick, but there still is a bottom fixed kickboard with
        the same 100mm height (flush with the cabinet fronts)")."""
        p = self.p
        if p["PlinthHeight"] <= 0:
            return
        kind = str(_prop(self.run.element, PSET_RUN, "PlinthKind", "Board"))
        if kind == "Legs":
            self._legs(row, back_y)
            if not _prop(self.run.element, PSET_RUN, "Kickboard"):
                return
        bay = row[0]
        if kind == "Flush":
            c0, c1 = self.c_range(bay, 0.0, p["FrontThickness"])
        else:
            c0, c1 = self.c_range(bay, p["PlinthSetback"], p["PlinthSetback"] + p["BoardThickness"])
        face = self.run.frame.compass(0.0, -1.0 if bay.front_low else 1.0)
        floor = self._floor_ends()
        t = p["BoardThickness"]
        a_lo += t if self._end_name(-1) in floor else 0.0
        a_hi -= t if self._end_name(1) in floor else 0.0
        self.add(Part(f"{self.run.id}-PLINTH-{face}{tag}", f"Soklová lišta {face}", "Plinth",
                      [(a_lo, a_hi, c0, c1, bay.z_base, bay.z_base + p["PlinthHeight"])],
                      props={"Kind": "Kickboard", "Setback": round((0.0 if kind == "Flush" else p["PlinthSetback"]) / 1000.0, 6)}),
                 *row)
        # A run end left open to the room gets a return kickboard along
        # the depth, ``PlinthSetback`` in from that end face, from the
        # front kickboard to the back (``Pset_KitchenRun.SideKickboards``:
        # "W", "E" or "W E" by compass). Petr, 2026-11-20 d: "Please add a
        # bit of kickboard between the kitchen and dining areas in the
        # south-north direction (the side of the tall kitchen cabinet has a
        # hole with no kickboard)".
        sides = str(_prop(self.run.element, PSET_RUN, "SideKickboards", "") or "").split()
        # ``SideKickboardSetback`` (metres) sets how far in from the end face
        # the return sits; default ``PlinthSetback``. KR-TALL's is 0, flush
        # with the side panel's outer face (Petr, 2026-11-20 h: "Youve made
        # it recessed, which is clearly wrong. Needs to be flush with the
        # cabinet side.").
        if sides:
            t, sb, tf = p["BoardThickness"], p["PlinthSetback"], p["FrontThickness"]
            own = _prop(self.run.element, PSET_RUN, "SideKickboardSetback")
            se = sb if own is None else float(own) * 1000.0
            # A flush front plinth (north tall cabinets, 2026-11-24, t947u):
            # the return starts at the front board's back, not at a recess.
            y0 = tf if kind == "Flush" else sb + t
            ends = {self._end_name(-1.0): (row[0], a_lo + se, a_lo + se + t),
                    self._end_name(1.0): (row[-1], a_hi - se - t, a_hi - se)}
            for name in sides:
                if name not in ends:
                    raise ValueError(f"{self.run.id}: SideKickboards {name!r} is not a run end ({', '.join(ends)})")
                end_bay, s0, s1 = ends[name]
                k0, k1 = self.c_range(end_bay, y0, back_y)
                self.add(Part(f"{self.run.id}-PLINTH-{name}{tag}", f"Soklová lišta {name}", "Plinth",
                              [(s0, s1, k0, k1, end_bay.z_base, end_bay.z_base + p["PlinthHeight"])],
                              props={"Kind": "Kickboard", "Side": name, "Setback": round(se / 1000.0, 6)}),
                         end_bay)

    def _join_flush_kickboards(self, bays):
        """One flush kickboard along a box run (Petr, 2026-11-20 d: "theres
        no reason there should be a split in the kickboard where each column
        meets the dining are, it can just be one continous kickboard"): the
        bays' boards in one front plane become one part, their touching
        pieces one piece; only a dock opening still splits it."""
        run = self.run
        kick = [q for q in run.parts if q.role == "Plinth" and q.props.get("Kind") == "Kickboard"
                and float(q.props.get("Setback") or 0.0) == 0.0]
        if len(kick) < 2:
            return
        planes = {(round(b[2], 3), round(b[3], 3), round(b[4], 3), round(b[5], 3)) for q in kick for b in q.boxes}
        if len(planes) != 1:
            return  # not one front plane: leave them
        boxes = sorted((b for q in kick for b in q.boxes), key=lambda b: b[0])
        merged = [list(boxes[0])]
        for b in boxes[1:]:
            if b[0] <= merged[-1][1] + TOL:
                merged[-1][1] = max(merged[-1][1], b[1])
            else:
                merged.append(list(b))
        face = run.frame.compass(0.0, -1.0 if bays[0].front_low else 1.0)
        ids = {q.id for q in kick}
        run.parts[:] = [q for q in run.parts if q.id not in ids]
        self.ids -= ids
        for bay in run.bays:
            bay.members[:] = [m for m in bay.members if m not in ids]
        self.add(Part(f"{run.id}-PLINTH-{face}", f"Soklová lišta {face}", "Plinth", [tuple(b) for b in merged],
                      props={**kick[0].props}), *bays)

    def _legs(self, row, back_y):
        """Open legs, no kick board (Petr, 2026-11-12: the robot vacuum
        drives under). One front and one back leg on every wall line of the
        row: under each end side and each shared divider, so a divider's
        legs are shared like the divider (guess: IKEA puts 4 per cabinet)."""
        p, run = self.p, self.run
        t, tf = p["BoardThickness"], p["FrontThickness"]
        d, inset = p["LegDiameter"], p["LegInset"]
        z0, z1 = row[0].z_base, row[0].z_base + p["PlinthHeight"]
        # An end leg sits under the end side but never past its outer face
        # (2026-11-22: a free end next to a door opening, ``FlushEnds``).
        end = max(t, d) / 2 if self._flush_ends() else t / 2
        floor = self._floor_ends()
        # An end side down to the floor (``EndsToFloor``): its leg stands
        # just inside it.
        lo_end = t + d / 2 if self._end_name(-1) in floor else end
        hi_end = t + d / 2 if self._end_name(1) in floor else end
        lines = [(row[0].a0 + lo_end, (row[0],), f"{row[0].id}-{run.frame.compass(-1.0, 0.0)}")]
        lines += [(l.a1, (l, r), f"{l.id}-{r.id}") for l, r in zip(row, row[1:])]
        lines.append((row[-1].a1 - hi_end, (row[-1],), f"{row[-1].id}-{run.frame.compass(1.0, 0.0)}"))
        for a, bays, tag in lines:
            for end, y in (("F", tf + inset), ("B", back_y - inset)):
                c = sum(self.c_range(row[0], y, y)) / 2.0
                self.add(Part(f"{run.id}-LEG-{tag}-{end}", "Nožka", "Leg",
                              [(a - d / 2, a + d / 2, c - d / 2, c + d / 2, z0, z1)], shape="cylinder"), *bays)

    def _has_sink(self, bay: Bay) -> bool:
        return any(s["yaml_id"] in bay.external for s in self.sinks)

    def _bay_parts(self, bay: Bay, z0, z1, shared_back: bool):
        run = self.run
        p = _params((run.element, PSET_RUN), (bay.element, PSET_CABINET))
        t, tf, bt = p["BoardThickness"], p["FrontThickness"], p["BackThickness"]
        lo, hi = bay.clear_lo, bay.clear_hi
        back_y = bay.depth - (t / 2 if shared_back else bt)
        vent = self._hob_vent_plan(bay, z0, z1, back_y, p)
        # A vented hob bay stops the bottom at the moved-forward back so
        # the exhaust channel is open down into the plinth.
        bottom_y = vent.outer_y if vent is not None else back_y
        c_in0, c_in1 = self.c_range(bay, tf, bottom_y)
        tb = p["BottomThickness"] or t
        if _prop(run.element, PSET_RUN, "LedPanels"):
            self._led_bottom(bay, p, lo, hi, c_in0, c_in1, z0, tb)
        else:
            self.add(Part(f"{bay.id}-BOTTOM", "Dno", "Bottom", [(lo, hi, c_in0, c_in1, z0, z0 + tb)],
                          props={"Thickness": round(tb / 1000.0, 6)} if tb != t else {}), bay)
        if not shared_back:
            c0, c1 = self.c_range(bay, back_y, bay.depth)
            self.add(Part(f"{bay.id}-BACK", "Záda", "Back", [(lo, hi, c0, c1, z0 + tb, z1)]), bay)
        hob = self.run.hobs.get(bay.id)
        if p["WorktopThickness"] > 0:
            if not self._has_sink(bay):
                rails = [("F", "Přední lišta", self.c_range(bay, tf, tf + p["RailDepth"]))]
                if not shared_back:
                    rails.append(("B", "Zadní lišta", self.c_range(bay, back_y - p["RailDepth"], back_y)))
                flipout = any(kind == "flipout" for kind, _h, _o in zone_spec(bay.element))
                for tag, name, (c0, c1) in rails:
                    box = (lo, hi, c0, c1, z1 - t, z1)
                    if tag == "F" and flipout:
                        # Petr, 2026-11-24 (t928u): a tilt-out bin has to
                        # swing through the front opening; the front rail
                        # would clip the rim. The back rail stays.
                        self.run.notes.append(f"{bay.id}: rail F left out, the flip-out bin swings through the opening")
                        continue
                    if hob is not None and _boxes_meet(box, hob.housing):
                        # The hob housing drops into the rail: no rail (guess:).
                        self.run.notes.append(f"{bay.id}: rail {tag} left out, the hob housing sits there")
                        continue
                    self.add(Part(f"{bay.id}-RAIL-{tag}", name, "Rail", [box]), bay)
        else:
            self.add(Part(f"{bay.id}-TOP", "Strop", "Top", [(lo, hi, c_in0, c_in1, z1 - t, z1)]), bay)
        # Safety distances under an air-intake panel are from the panel
        # underside (Miele pp. 19–20), not from the hob housing.
        if hob is None:
            ceiling = None
        else:
            panel_t = 0.0 if vent is None else vent.panel_t
            ceiling = hob.underside - panel_t - hob.min_drawer_gap
        subs = self._sections(bay, p, z0, z1, back_y)
        for sub in subs or [bay]:
            self._fronts(sub, p, z0, z1, back_y, ceiling)
        if vent is not None:
            self._hob_vent_carcass(bay, z0, z1, p, vent)

    def _led_continuous(self) -> bool:
        return bool(_prop(self.run.element, PSET_RUN, "LedPanels")) and bool(
            _prop(self.run.element, PSET_RUN, "LedContinuous"))

    def _led_bottom(self, bay: Bay, p: dict, lo: float, hi: float, c_in0: float, c_in1: float, z0: float, tb: float):
        """A cabinet bottom with LED panel fields routed into its underside
        (``Pset_KitchenRun.LedPanels``; Petr, 2026-11-22 a: "I want the
        underside of the cabinet to be a full led panel, with some
        reasonable padding"). One field per section (``Pset_Fronts.Sections``),
        ``LedPadding`` from the board's edges and from the section dividers,
        so each divider stands on solid board. Parts: the bottom (web over
        the pocket, the frame round the rebate, the ledge), per field the
        aluminium plate and the LED sheet pieces. The diffuser is the light
        fixture's (``Pset_YamlIfc.PanelRun`` in the room's electrical YAML)."""
        t = p["BoardThickness"]
        owners = [bay]
        bottom_id = f"{bay.id}-BOTTOM"
        if self._led_continuous():
            # Petr, 2026-11-22 a: "cant we make it a single panel even
            # accross where the cabinets meet?" One bottom board under the
            # whole run (between the end sides; the dividers stand on it) and
            # one field across it, sections ignored.
            if self.run.led_fields:
                return  # made with the run's first bay
            owners = list(self.run.bays)
            lo, hi = min(b.clear_lo for b in owners), max(b.clear_hi for b in owners)
            bottom_id = f"{self.run.id}-BOTTOM"
        pad, play, ledge = p["LedPadding"], p["LedRebatePlay"], p["LedLedge"]
        dt, gap, mt, pt = p["LedDiffuserThickness"], p["LedAirGap"], p["LedModuleThickness"], p["LedPlateThickness"]
        z_reb = z0 + dt
        z_pocket = z_reb + gap + mt + pt
        if z0 + tb - z_pocket < p["LedMinWeb"] - TOL:
            raise ValueError(f"{bay.id}: LED pocket {z_pocket - z0:.0f} deep leaves under {p['LedMinWeb']:.0f} "
                             f"of the {tb:.0f} bottom")
        # Section edges (the dividers stand on the bottom).
        spans = [(lo, hi)]
        widths = None if self._led_continuous() else section_widths(bay.element, bay.width)
        if widths is not None:
            if not bay.front_low:
                widths = widths[::-1]
            edges = [bay.a0]
            for w in widths:
                edges.append(edges[-1] + w)
            inner = edges[1:-1]
            cuts = [lo] + [x for e in inner for x in (e - t / 2, e + t / 2)] + [hi]
            spans = list(zip(cuts[0::2], cuts[1::2]))
        rebates, pockets = [], []
        for k, (s0, s1) in enumerate(spans, start=1):
            r = (s0 + pad, s1 - pad, c_in0 + pad, c_in1 - pad)
            if r[1] - r[0] < 100 or r[3] - r[2] < 100:
                raise ValueError(f"{bay.id}: LED field {k} under 100 mm")
            d = (r[0] + play, r[1] - play, r[2] + play, r[3] - play)
            pk = (r[0] + ledge, r[1] - ledge, r[2] + ledge, r[3] - ledge)
            pl = (pk[0] + p["LedPlatePlay"], pk[1] - p["LedPlatePlay"], pk[2] + p["LedPlatePlay"], pk[3] - p["LedPlatePlay"])
            # LED sheet: long side of the module along the run, cut pieces
            # at the far end and the back; centred on the plate.
            along = _cuts(pl[1] - pl[0], p["LedModuleLength"], p["LedMinCut"])
            across = _cuts(pl[3] - pl[2], p["LedModuleWidth"], p["LedMinCut"])
            a_start = (pl[0] + pl[1]) / 2 - sum(along) / 2
            c_start = (pl[2] + pl[3]) / 2 - sum(across) / 2
            z_led0 = z_reb + gap
            modules = []
            ca = a_start
            for la in along:
                cc = c_start
                for lc in across:
                    modules.append((ca, ca + la, cc, cc + lc, z_led0, z_led0 + mt))
                    cc += lc
                ca += la
            # Aluminium plates in practical lengths, butted where two
            # module columns meet (so no LED piece crosses a plate joint).
            plates = []
            start = pl[0]
            cursor = a_start
            for la in along:
                if cursor + la - start > p["LedPlateMaxLength"] + TOL and cursor > start + TOL:
                    plates.append((start, cursor))
                    start = cursor
                cursor += la
            plates.append((start, pl[1]))
            back_c = pk[3] if bay.front_low else pk[2]
            inward = -1.0 if bay.front_low else 1.0
            hole = ((pk[0] + pk[1]) / 2, back_c + inward * (p["LedCableHole"] / 2 + 10.0))
            zp0, zp1 = z_led0 + mt, z_led0 + mt + pt
            f = LedField(owners[0].id if len(owners) == 1 else self.run.id, k, (*r, z0, z_reb), (*d, z0, z0 + dt),
                         (*pk, z_reb, z_pocket), (*pl, zp0, zp1), modules, hole,
                         [(a0_, a1_, pl[2], pl[3], zp0, zp1) for a0_, a1_ in plates])
            self.run.led_fields.append(f)
            rebates.append(r)
            pockets.append(pk)
            tag = f"{f.bay_id}-LED{k}"
            self.add(Part(f"{tag}-PLATE", f"Hliníková deska LED {k}", "LedPlate", f.plates, label="appliance",
                          props={"Kind": "LedBackingPlate",
                                 "Pieces": ", ".join(f"{b[1] - b[0]:.0f} x {b[3] - b[2]:.0f} x {pt:.0f}" for b in f.plates)}),
                     *owners)
            self.add(Part(f"{tag}-SHEET", f"LED panel {k}", "LedModule", modules, label="appliance",
                          props={"Kind": "LedSheet", "Pieces": ", ".join(f"{m[1] - m[0]:.0f} x {m[3] - m[2]:.0f}" for m in modules),
                                 "ModuleSize": f"{p['LedModuleWidth']:.0f} x {p['LedModuleLength']:.0f} (guess:)"}), *owners)
        board = (lo, hi, c_in0, c_in1)
        boxes = [(lo, hi, c_in0, c_in1, z_pocket, z0 + tb)]  # the web over the pockets
        boxes += _ring(board, rebates, z0, z_pocket)  # the frame round the rebates
        for r, pk in zip(rebates, pockets):
            boxes += _ring(r, [pk], z_reb, z_pocket)  # the ledge the diffuser sits on
        self.add(Part(bottom_id, "Dno s frézovanou kapsou pro LED panel", "Bottom", boxes,
                      props={"Thickness": round(tb / 1000.0, 6), "LedFields": len(rebates),
                             "RebateDepth": round(dt / 1000.0, 6), "PocketDepth": round((z_pocket - z0) / 1000.0, 6)}), *owners)

    def _sections(self, bay: Bay, p: dict, z0: float, z1: float, back_y: float) -> list | None:
        """A wide bay split into side-by-side sections (``Pset_Fronts.Sections``):
        an 18 mm divider between two sections, each section its own fronts
        (``Layout<N>`` or the shared ``Layout``). The sections are bays of
        their own for the fronts only (``<bay>-S<N>``); every part they make
        joins the bay's group. None when the bay has no sections."""
        widths = section_widths(bay.element, bay.width)
        if widths is None:
            return None
        t, tf = p["BoardThickness"], p["FrontThickness"]
        tb = p["BottomThickness"] or t
        # Left to right as you face the front: low a first when the front is the c0 face.
        if not bay.front_low:
            widths = widths[::-1]
        order = list(range(1, len(widths) + 1))
        if not bay.front_low:
            order = order[::-1]
        edges = [bay.a0]
        for w in widths:
            edges.append(edges[-1] + w)
        dc0, dc1 = self.c_range(bay, tf, back_y)
        subs = []
        for k, (number, a0, a1) in enumerate(zip(order, edges, edges[1:])):
            first, last = k == 0, k == len(widths) - 1
            if not last:
                self.add(Part(f"{bay.id}-SDIV{k + 1}", f"Přepážka sekcí {k + 1}", "Divider",
                              [(a1 - t / 2, a1 + t / 2, dc0, dc1, z0 + tb, z1 - t)]), bay)
            sub = replace(bay, id=f"{bay.id}-S{number}", element=section_element(bay.element, number),
                          a0=a0, a1=a1, clear_lo=bay.clear_lo if first else a0 + t / 2,
                          clear_hi=bay.clear_hi if last else a1 - t / 2, zones=[])
            sub.members = bay.members  # the section's parts are the bay's
            subs.append(sub)
        subs.sort(key=lambda b: b.id)
        return subs
