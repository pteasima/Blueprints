"""Built-in appliances, sink fittings, decor panels, and niche appliances."""
from __future__ import annotations

import math
from dataclasses import replace

from .fronts import _hinge_a
from .geometry import _near
from .hardware import PSET_BUILTIN, PSET_FRONTS, SINK_CUTOUT_INSET_MM, TOL
from .props import _prop
from .types import Bay, Leaf, LiftJoint, Part, Zone


class _AppliancesMixin:
    def _dock_appliances(self, bays):
        """Floor appliances in a ``dock`` band (``Pset_BuiltIn.Kind: Dock``,
        ``Bay`` the section id, ``Zone``): standing on the floor in the
        opening, centred across it, front on the fronts' plane. Its height
        plus ``DockClearance`` must fit under the board over the opening,
        its width plus twice that inside the opening."""
        p = self.p
        for bay, zone in self.run.docks:
            for ext in self.builtins:
                if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Dock" or str(_prop(ext, PSET_BUILTIN, "Bay", "")) != bay.id:
                    continue
                if int(_prop(ext, PSET_BUILTIN, "Zone", zone.index)) != zone.index:
                    continue
                w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
                o0, o1, _c0, _c1, floor, top = zone.dock
                clear = p["DockClearance"]
                if h + clear > top - floor + TOL:
                    raise ValueError(f"{ext['id']}: {h:.0f} + {clear:.0f} over the station needs {h + clear:.0f}, "
                                     f"the dock opening is {top - floor:.0f}")
                if w + 2 * clear > o1 - o0 + TOL:
                    raise ValueError(f"{ext['id']}: {w:.0f} wide needs {w + 2 * clear:.0f}, the opening is {o1 - o0:.0f}")
                am = (o0 + o1) / 2.0
                b0, b1 = self.c_range(bay, 0.0, d)
                body = (am - w / 2.0, am + w / 2.0, b0, b1, floor, floor + h)
                self._builtin_part(ext, bay, [body], props={
                    "Bay": bay.id, "Zone": zone.index, "DockClearWidth": round((o1 - o0) / 1000.0, 6),
                    "DockClearHeight": round((top - floor) / 1000.0, 6),
                    "ClearanceAbove": round((top - floor - h) / 1000.0, 6)})

    def _standing_appliances(self):
        """Loose appliances on the floor of a door band (``Pset_BuiltIn.Kind:
        Standing``, ``Bay``, ``Zone``; Petr, 2026-11-23, t870u: the vacuum
        sealer at the pantry's base). Centred across the clear width, its
        front ``ShelfSetback`` behind the door racks (or the door). It must
        fit under the band's lowest shelf; ``LidOpenHeight`` (the height
        with the lid open, base to the lid's top) is checked against that
        shelf and reported, not drawn."""
        p = self.p
        # In an inner drawer (``Pset_BuiltIn.InnerDrawer``, t883u): on its
        # floor, moving with it; ``Rotation: 90`` turns the footprint (its
        # width along the drawer's depth); ``Faces`` N/S/E/W puts its front
        # against that side of the drawer.
        for ext in self.builtins:
            if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Standing":
                continue
            host_id = _prop(ext, PSET_BUILTIN, "InnerDrawer")
            if not host_id:
                continue
            host = next((q for q in self.run.parts if q.id == host_id), None)
            if host is None:
                continue
            bay = next(b for b in self.run.bays if b.id == _prop(ext, PSET_BUILTIN, "Bay"))
            w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
            rot = int(_prop(ext, PSET_BUILTIN, "Rotation", 0) or 0) % 180
            along, across = (d, w) if rot == 90 else (w, d)  # along the run (a), along the drawer depth (c)
            idr = host.drawer
            wall = p["BoxWall"]
            a0, a1, c0, c1, _z0, _z1 = idr.box
            ia0, ia1 = a0 + wall, a1 - wall
            ic0, ic1 = c0 + wall, c1 - wall
            if along > ia1 - ia0 + TOL or across > ic1 - ic0 + TOL:
                raise ValueError(f"{ext['id']}: {along:g} x {across:g} does not fit {host_id}'s inside "
                                 f"{ia1 - ia0:g} x {ic1 - ic0:g}")
            faces = str(_prop(ext, PSET_BUILTIN, "Faces", "") or "").upper()
            fr = self.run.frame
            north_hi = fr.world(ia1, 0.0, 0.0)[1] > fr.world(ia0, 0.0, 0.0)[1]
            at_hi = (faces == "N") == north_hi if faces in ("N", "S") else None
            if at_hi is None:
                x0 = (ia0 + ia1 - along) / 2.0
            else:
                x0 = ia1 - along if at_hi else ia0
            cm = (ic0 + ic1) / 2.0
            floor = idr.floor_z
            body = (x0, x0 + along, cm - across / 2.0, cm + across / 2.0, floor, floor + h)
            zone_top = floor + host.props["ClearAbove"] * 1000.0 if host.props.get("ClearAbove") is not None else None
            part = self._builtin_part(ext, bay, [body], props={
                "Bay": bay.id, "InnerDrawer": host_id, "Rotation": rot or None, "Faces": faces or None,
                "InsideWidth": round((ia1 - ia0) / 1000.0, 6), "InsideDepth": round((ic1 - ic0) / 1000.0, 6),
                "SpareAlongRun": round((ia1 - ia0 - along) / 1000.0, 6),
                "SpareAcrossDepth": round((ic1 - ic0 - across) / 1000.0, 6),
                "ClearanceAbove": round((zone_top - floor - h) / 1000.0, 6) if zone_top is not None else None,
                "Parent": host.props.get("Parent"), "Latched": host.props.get("Latched")})
            # It slides with its inner drawer (viewer: the same motion).
            part.drawer = replace(idr, front=body, box=body, items=[], baseplate=[])
            if str(_prop(ext, PSET_BUILTIN, "Shape", "") or "") == "StandMixer":
                self._stand_mixer(ext, bay, part, body, faces, north_hi, idr, host_id)
            self.run.notes.append(
                f"open: {ext['id']} in {host_id}: {along:g} along the run x {across:g} deep x {h:g}, "
                f"inside {ia1 - ia0:g} x {ic1 - ic0:g}, faces {faces or '-'}"
                + (f", {zone_top - floor - h:g} over it to the band top" if zone_top is not None else ""))
        for bay, zone, floor, top, back_y, racks in self.run.door_bands:
            for ext in self.builtins:
                if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Standing" or str(_prop(ext, PSET_BUILTIN, "Bay", "")) != bay.id:
                    continue
                if int(_prop(ext, PSET_BUILTIN, "Zone", zone.index)) != zone.index:
                    continue
                w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
                lid = float(_prop(ext, PSET_BUILTIN, "LidOpenHeight", 0.0) or 0.0) * 1000.0
                tf = p["FrontThickness"]
                front = tf + p["ShelfSetback"] + (p["RackDepth"] + p["ShelfSetback"] if racks else 0.0)
                depth_clear = back_y - front
                cw = bay.clear_hi - bay.clear_lo
                shelves = [q for q in self.run.parts if q.role == "Shelf" and q.id.startswith(f"{bay.id}-SH{zone.index}-")]
                roof = min((q.boxes[0][4] for q in shelves), default=top)
                if w > cw + TOL:
                    raise ValueError(f"{ext['id']}: {w:.0f} wide, {bay.id} is {cw:.0f} clear")
                if d > depth_clear + TOL:
                    raise ValueError(f"{ext['id']}: {d:.0f} deep, {bay.id} has {depth_clear:.0f} behind the door racks")
                if h > roof - floor + TOL:
                    raise ValueError(f"{ext['id']}: {h:.0f} high, {roof - floor:.0f} under the lowest shelf of {bay.id}")
                am = (bay.clear_lo + bay.clear_hi) / 2.0
                b0, b1 = self.c_range(bay, front, front + d)
                body = (am - w / 2.0, am + w / 2.0, b0, b1, floor, floor + h)
                lid_clear = roof - floor - lid if lid else None
                self._builtin_part(ext, bay, [body], props={
                    "Bay": bay.id, "Zone": zone.index, "ClearWidth": round(cw / 1000.0, 6),
                    "ClearDepthBehindRacks": round(depth_clear / 1000.0, 6),
                    "ClearHeight": round((roof - floor) / 1000.0, 6),
                    "SideClearance": round((cw - w) / 2000.0, 6),
                    "DepthLeftBehind": round((depth_clear - d) / 1000.0, 6),
                    "ClearanceAbove": round((roof - floor - h) / 1000.0, 6),
                    "LidOpenClearance": round(lid_clear / 1000.0, 6) if lid_clear is not None else None})
                self.run.notes.append(
                    f"{'open' if lid_clear is None or lid_clear >= 0 else 'CLASH'}: {ext['id']} in {bay.id}: "
                    f"{w:g} × {d:g} × {h:g} on z {floor:g}, {(cw - w) / 2:g} a side, {depth_clear - d:g} behind it, "
                    f"{roof - floor - h:g} over it to the lowest shelf"
                    + (f"; lid open {lid:g} (guess:) leaves {lid_clear:g}" if lid else ""))

    # --- built-in appliances and sink fittings (Pset_BuiltIn) ----------------

    def _stand_mixer(self, ext: dict, bay: Bay, part: Part, body: tuple, faces: str, north_hi: bool,
                     idr: "Drawer", host_id: str):
        """A basic kitchen machine in ``body`` (Petr, 2026-11-23, t889u: the
        Kenwood Chef XL; "proportions and display position should be
        apparent"): a base, a column at the back, a head arm over a bowl,
        and the control / display patch on the side that ``Faces`` names
        (N / S), drawn black (``hob`` label) so it stands out. ``Depth``
        runs column to bowl along the drawer's depth; ``BowlEnd`` (E / W)
        says which end the bowl is. Every piece rides the inner drawer.

        Proportions (guess:, from Kenwood's product photos, not a drawing):
        base 70 high and 85 % of the width; column 33 % of the depth, 72 %
        of the width, full height; head from the column to 25 mm short of
        the bowl end, the top 32 % of the height, 72 % of the width; bowl
        the full width across, centred half a width from the bowl end, from
        the base up to 3 mm under the head; display 90 x 55 on the head's
        side next to the column, 2 proud."""
        a0, a1, c0, c1, z0, z1 = body
        w, d, h = a1 - a0, c1 - c0, z1 - z0
        am = (a0 + a1) / 2.0
        fr = self.run.frame
        east_hi = fr.world(0.0, 1.0, 0.0)[0] > fr.world(0.0, 0.0, 0.0)[0]
        bowl_end = str(_prop(ext, PSET_BUILTIN, "BowlEnd", "E") or "E").upper()
        bowl_hi = (bowl_end == "E") == east_hi

        def span(frm: float, to: float) -> tuple:
            # c range measured from the column (back) end.
            return (c1 - to, c1 - frm) if not bowl_hi else (c0 + frm, c0 + to)

        def across(frac: float) -> tuple:
            return (am - w * frac / 2.0, am + w * frac / 2.0)

        base_h, head_h = 70.0, 0.32 * h
        col = span(0.0, 0.33 * d)
        head = span(0.0, d - 25.0)
        bowl = span(d - w, d)
        boxes = [(*across(0.85), c0, c1, z0, z0 + base_h),
                 (*across(0.72), *col, z0, z1),
                 (*across(0.72), *head, z1 - head_h, z1)]
        part.boxes = boxes
        bowl_box = (a0, a1, *bowl, z0 + base_h - 10.0, z1 - head_h - 3.0)
        side_hi = (faces == "N") == north_hi
        ha0, ha1 = across(0.72)
        da0, da1 = (ha1, ha1 + 2.0) if side_hi else (ha0 - 2.0, ha0)
        disp = (da0, da1, *span(0.33 * d - 100.0, 0.33 * d - 10.0), z1 - head_h + 20.0, z1 - head_h + 75.0)
        for suffix, name, box, label, shape in (
                ("BOWL", "Mísa", bowl_box, "appliance", "cylinder"),
                ("DISPLAY", "Ovládání / displej", disp, "hob", "box")):
            piece = Part(f"{ext['id']}-{suffix}", f"{ext.get('Name') or ext['id']}: {name}", "Appliance", [box],
                         label=label, shape=shape,
                         props={"Bay": bay.id, "InnerDrawer": host_id, "Of": ext["id"]})
            piece.drawer = replace(idr, front=box, box=box, items=[], baseplate=[])
            self.add(piece, bay)

    def _builtin_part(self, ext: dict, bay: Bay, boxes: list, shape: str = "box", props: dict | None = None) -> Part:
        label = "sink" if ext["id"] in self.sanitary else "appliance"
        part = Part(ext["id"], ext.get("Name") or ext["id"], "Appliance", boxes, label=label, shape=shape,
                    props=props or {}, builtin=ext)
        self.run.builtins.append(ext["id"])
        return self.add(part, bay)

    def _sink_fittings(self, bays, zt):
        """Disposers hang under a sink's bowl, taps stand behind it
        (positions and sizes from Pset_BuiltIn). A bowl and a disposer are
        obstacles for any drawer box under them.

        ``HoleOffset`` is the hole centre behind the inner bowl back, not
        the rim. A disposer uses ``Pset_Sink DrainOffsetFromBack`` when
        set (mm from the inner bowl back); otherwise it is centred on the
        bowl (guess:).
        """
        p = self.p
        for sink in self.sinks:
            bay = next((b for b in bays if sink["yaml_id"] in b.external), None)
            if bay is None:
                continue
            bay.obstacles.append((sink["box"], sink["yaml_id"]))
            sa0, sa1, sc0, sc1, sz0, _sz1 = sink["box"]
            ca = (sa0 + sa1) / 2.0
            for ext in self.builtins:
                if _prop(ext, PSET_BUILTIN, "Sink") != sink["yaml_id"]:
                    continue
                kind = str(_prop(ext, PSET_BUILTIN, "Kind", ""))

                def mm(key, default=None, ext=ext):
                    v = _prop(ext, PSET_BUILTIN, key)
                    if v is None:
                        if default is None:
                            raise ValueError(f"{ext['id']}: Pset_BuiltIn needs {key}")
                        return default
                    return float(v) * 1000.0

                # Inner bowl in the bay's c axis: the cut-out sits
                # SINK_CUTOUT_INSET_MM inside the bowl (Teka, and the fallback).
                inset = SINK_CUTOUT_INSET_MM
                bowl_c0 = sink["cutout"].c0 - inset
                bowl_c1 = sink["cutout"].c1 + inset
                bowl_c = (bowl_c0 + bowl_c1) / 2.0
                if kind == "Disposer":
                    d, h = mm("Width"), mm("Height")
                    drain = sink.get("drain_from_back")
                    if drain is None:
                        dc = bowl_c
                    else:
                        dc = (bowl_c1 - drain) if bay.front_low else (bowl_c0 + drain)
                    box = (ca - d / 2, ca + d / 2, dc - d / 2, dc + d / 2, sz0 - h, sz0)
                    part = self._builtin_part(ext, bay, [box], shape="cylinder",
                                              props={"Sink": sink["yaml_id"], "Top": round(sz0 / 1000.0, 6),
                                                     "Bottom": round((sz0 - h) / 1000.0, 6)})
                    bay.obstacles.append((box, part.id))
                elif kind == "Tap":
                    d, h = mm("BodyDiameter", 50.0), mm("Height")
                    reach, spout = mm("SpoutReach"), mm("SpoutHeight")
                    hole = mm("HoleOffset", 40.0)
                    # Behind the inner bowl, away from the bay front.
                    back_c = bowl_c1 + hole if bay.front_low else bowl_c0 - hole
                    toward = -1.0 if bay.front_low else 1.0  # the spout points at the bowl
                    arm = 30.0
                    body = (ca - d / 2, ca + d / 2, back_c - d / 2, back_c + d / 2, zt, zt + h)
                    tip = back_c + toward * reach
                    arm_box = (ca - arm / 2, ca + arm / 2, min(back_c, tip), max(back_c, tip), zt + h - arm, zt + h)
                    nozzle = (ca - arm / 2, ca + arm / 2, min(tip, tip - toward * arm), max(tip, tip - toward * arm),
                              zt + spout, zt + h)
                    self._builtin_part(ext, bay, [body, arm_box, nozzle],
                                       props={"Sink": sink["yaml_id"], "HoleBehindBowl": round(hole / 1000.0, 6)})
                else:
                    raise ValueError(f"{ext['id']}: a sink fitting is Kind Disposer or Tap, got {kind!r}")
        return p

    def _decor_panels(self):
        """An integrated appliance's decor front in a niche bay
        (``Pset_Fronts.DecorPanel``: the appliance id): one front on the
        fronts' plane, the bay less the front gaps, as high as the run's
        other fronts, with the run's grip. It drops down about its bottom
        edge (a dishwasher door, guess: the real hinge sits near the
        appliance's foot, not at the panel's edge). Petr, 2026-11-23, t865u:
        "fix the dishwasher, it has to sit flush with the other fronts"; "let
        me open dishwasher"."""
        p = self.p
        run = self.run
        tf, g = p["FrontThickness"], p["FrontGap"] / 2.0
        for bay in run.bays:
            appliance = _prop(bay.element, PSET_FRONTS, "DecorPanel")
            if not bay.niche or not appliance:
                continue
            fronts = [q.boxes[0] if q.drawer is None else q.drawer.front for q in run.parts
                      if q.role in ("Drawer", "PullOut", "Door")]
            if not fronts:
                raise ValueError(f"{bay.id}: DecorPanel needs another front in the run to match")
            z0, z1 = min(b[4] for b in fronts), max(b[5] for b in fronts)
            fc0, fc1 = self.c_range(bay, 0.0, tf)
            a0, a1 = bay.a0 + g, bay.a1 - g
            # t1004u: if this niche sits at a FlushEnds run end, the front
            # covers the end panel the same way a drawer front covers a
            # carcass end side (bay width includes the end, minus half-gap).
            if self._flush_ends():
                t = p["BoardThickness"]
                for da, edge in self._niche_ends():
                    if _near(bay.a0 if da < 0 else bay.a1, edge):
                        if da < 0:
                            a0 = edge - t + g
                        else:
                            a1 = edge + t - g
            box = (a0, a1, fc0, fc1, z0, z1)
            out = -1.0 if bay.front_low else 1.0
            face = fc0 if bay.front_low else fc1
            zone = Zone(0, "front", z1 - z0, z0, z1, {})
            grips, edge = self._grips(bay, p, zone, "DecorPanel", box)
            steps = 8
            lift = LiftJoint(f"{bay.id}-PANEL", 0, None, face, z0, out,
                             tuple(-math.pi / 2 * k / steps for k in range(steps + 1)))
            self.add(Part(f"{bay.id}-PANEL", f"Dekor {appliance}", "DecorPanel", [box], lift=lift, grips=grips,
                          props={"Appliance": str(appliance), "Opens": "down (guess: like the appliance door)",
                                 "Grip": f"J {edge}" if edge else None,
                                 "PanelWidth": round((box[1] - box[0]) / 1000.0, 6),
                                 "PanelHeight": round((z1 - z0) / 1000.0, 6),
                                 # Petr, t866u: the same colour as the other fronts.
                                 "Finish": "same as the other fronts (kitchen cream, matt lacquered MDF)"}), bay)

    def _niche_appliances(self, bays):
        """Appliances in a ``niche`` band: centred along the run, standing on
        the band's board, front face on the fronts' plane. The niche must be
        inside the maker's min/max niche height (Pset_BuiltIn)."""
        by_id = {b.id: b for b in bays}
        for ext in self.builtins:
            if str(_prop(ext, PSET_BUILTIN, "Kind", "")) != "Niche":
                continue
            bay = by_id.get(str(_prop(ext, PSET_BUILTIN, "Bay", "")))
            if bay is None:
                continue
            zi = int(_prop(ext, PSET_BUILTIN, "Zone", 0))
            zone = next((z for z in bay.zones if z.index == zi), None)
            if zone is None or zone.niche is None:
                raise ValueError(f"{ext['id']}: {bay.id} band {zi} is not a niche")
            w, d, h = (float(_prop(ext, PSET_BUILTIN, k)) * 1000.0 for k in ("Width", "Depth", "Height"))
            na0, na1, _nc0, _nc1, nz0, nz1 = zone.niche
            clear_h, clear_w = nz1 - nz0, na1 - na0
            for key, value in (("NicheHeight", clear_h), ("NicheWidth", clear_w)):
                lo = _prop(ext, PSET_BUILTIN, key + "Min")
                hi = _prop(ext, PSET_BUILTIN, key + "Max")
                if lo is not None and value < float(lo) * 1000.0 - TOL:
                    raise ValueError(f"{ext['id']}: {key} {value:.1f} below the maker's {float(lo) * 1000:.0f}")
                if hi is not None and value > float(hi) * 1000.0 + TOL:
                    raise ValueError(f"{ext['id']}: {key} {value:.1f} above the maker's {float(hi) * 1000:.0f}")
            depth_min = _prop(ext, PSET_BUILTIN, "NicheDepth")
            niche_depth = abs(_nc1 - _nc0) - self.p["FrontThickness"]
            if depth_min is not None and niche_depth < float(depth_min) * 1000.0 - TOL:
                raise ValueError(f"{ext['id']}: niche depth {niche_depth:.0f} under the maker's {float(depth_min) * 1000:.0f}")
            am = (bay.a0 + bay.a1) / 2.0
            tf = self.p["FrontThickness"]
            # Fascia on the fronts' plane (its thickness taken as a front's,
            # guess:), centred on the niche so it laps the boards; the body
            # fills the clear niche behind it, 1 mm off each face.
            zm = (nz0 + nz1) / 2.0
            f0, f1 = self.c_range(bay, 0.0, tf)
            b0, b1 = self.c_range(bay, tf, d)
            fascia = (am - w / 2, am + w / 2, f0, f1, zm - h / 2, zm + h / 2)
            body = (na0 + 1.0, na1 - 1.0, b0, b1, nz0 + 1.0, min(nz1, nz0 + h) - 1.0)
            # The fascia laps past the niche; the fronts above and below it
            # stop a front gap short of it.
            g = self.p["FrontGap"] / 2.0
            fz0, fz1 = fascia[4], fascia[5]
            for other in self.run.parts:
                if other.id not in bay.members or other.role not in ("Front", "Door", "Drawer", "PullOut"):
                    continue
                x0, x1, y0, y1, z0, z1 = other.boxes[0]
                if z0 < fz1 + g and z1 > fz1:
                    other.boxes[0] = (x0, x1, y0, y1, fz1 + g, z1)
                elif z1 > fz0 - g and z0 < fz0:
                    other.boxes[0] = (x0, x1, y0, y1, z0, fz0 - g)
            self._builtin_part(ext, bay, [body], props={
                "Bay": bay.id, "Zone": zi, "NicheClearWidth": round(clear_w / 1000.0, 6),
                "NicheClearHeight": round(clear_h / 1000.0, 6), "NicheClearDepth": round(niche_depth / 1000.0, 6),
                "Elevation": round(nz0 / 1000.0, 6)})
            # The fascia is the appliance door (Petr, 2026-11-23, t865u: "let
            # me open ... oven, microwave"; insides not modelled).
            # ``Pset_BuiltIn.DoorHinge``: Bottom (drops down), L or R (as
            # you face it), from the maker's data sheet.
            hinge = str(_prop(ext, PSET_BUILTIN, "DoorHinge", "Bottom"))
            out = -1.0 if bay.front_low else 1.0
            face = f0 if bay.front_low else f1
            door, lift = None, None
            if hinge == "Bottom":
                steps = 8
                lift = LiftJoint(f"{ext['id']}-DOOR", 0, None, face, fascia[4], out,
                                 tuple(-math.pi / 2 * k / steps for k in range(steps + 1)))
            elif hinge in ("L", "R"):
                door = Leaf(zi, hinge, _hinge_a(bay, hinge, fascia[0], fascia[1]), face, out)
            else:
                raise ValueError(f"{ext['id']}: DoorHinge {hinge!r}, one of Bottom, L, R")
            self.add(Part(f"{ext['id']}-DOOR", f"Dvířka {ext.get('Name') or ext['id']}", "ApplianceDoor",
                          [fascia], label="appliance", door=door, lift=lift,
                          props={"Appliance": ext["id"], "Hinge": hinge}), bay)
