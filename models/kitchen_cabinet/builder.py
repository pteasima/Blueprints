"""Orchestrator that assembles one kitchen run from its bay boxes."""
from __future__ import annotations

from .appliances import _AppliancesMixin
from .carcass import _CarcassMixin
from .fronts import _FrontsMixin
from .geometry import _near, _rows, _segments, c_range
from .hardware import CARCASS_BOX, PSET_HOB, PSET_RUN
from .props import _prop
from .types import Bay, Part, Run
from .worktop import _WorktopMixin


class _Builder(_CarcassMixin, _FrontsMixin, _AppliancesMixin, _WorktopMixin):
    def __init__(self, run: Run, sinks: list[dict], above: list | None = None, builtins: list | None = None,
                 sanitary: set | None = None):
        self.run = run
        self.p = run.params
        self.sinks = sinks
        self.builtins = builtins or []  # yaml elements with Pset_BuiltIn and no box
        self.sanitary = sanitary or set()  # of those, the sanitaryTerminals (taps)
        self.above = above or []  # (a0, a1, c0, c1, z0, id): boxes hanging over the run
        self.ids: set[str] = set()

    def add(self, part: Part, *bays: Bay) -> Part:
        if part.id in self.ids:
            raise ValueError(f"duplicate part id {part.id}")
        self.ids.add(part.id)
        self.run.parts.append(part)
        for bay in bays:
            if part.id not in bay.members:
                bay.members.append(part.id)
        return part

    c_range = staticmethod(c_range)

    def build(self):
        run, p = self.run, self.p
        t, tf = p["BoardThickness"], p["FrontThickness"]
        cabinets = [b for b in run.bays if not b.niche]
        if not cabinets:
            raise ValueError(f"{run.id} has no cabinet bays")
        bases = {(round(b.z_base), round(b.height)) for b in run.bays}
        if len(bases) != 1:
            raise ValueError(f"{run.id}: every bay needs the same Elevation and Height, got {sorted(bases)}")
        z_base, height = cabinets[0].z_base, cabinets[0].height
        wt = p["WorktopThickness"]
        if str(_prop(run.element, PSET_RUN, "Carcass", "")) == CARCASS_BOX:
            self._box_run(cabinets, z_base, height, wt)
            return
        if p["UnderlayThickness"] > 0:
            raise ValueError(f"{run.id}: UnderlayThickness is only modelled for Carcass: Box runs")
        z0 = z_base + p["PlinthHeight"]
        z1 = z_base + height - wt
        run.carcass_z0, run.carcass_z1 = z0, z1
        if z1 - z0 < 4 * t:
            raise ValueError(f"{run.id}: carcass {z1 - z0} mm is too low")
        rows = _rows(run.bays)
        pairs = self._pairs(rows)
        paired = {id(r) for pair in pairs for r in pair}
        blocks = [("pair", pair) for pair in pairs]
        for row in rows:
            if id(row) in paired:
                continue
            for seg in _segments(row):
                blocks.append(("single", (seg,)))
        for kind, rows_in in blocks:
            self._block(kind, rows_in, z0, z1)
        # The kickboard runs on across a niche (the dishwasher slot) in a
        # kickboard run, like IKEA's plinth across an integrated dishwasher
        # (2026-11-20 b, guess:). The appliance's own plinth is not modelled.
        if p["PlinthHeight"] > 0 and _prop(run.element, PSET_RUN, "Kickboard"):
            for bay in run.bays:
                if not bay.niche:
                    continue
                c0, c1 = self.c_range(bay, p["PlinthSetback"], p["PlinthSetback"] + p["BoardThickness"])
                face = run.frame.compass(0.0, -1.0 if bay.front_low else 1.0)
                self.add(Part(f"{bay.id}-PLINTH-{face}", f"Soklová lišta {face}", "Plinth",
                              [(bay.a0, bay.a1, c0, c1, bay.z_base, bay.z_base + p["PlinthHeight"])],
                              props={"Kind": "Kickboard", "Setback": round(p["PlinthSetback"] / 1000.0, 6)}), bay)
        if wt > 0:
            for bay in cabinets:
                if _prop(bay.element, PSET_HOB, "Model") is not None:
                    run.hobs[bay.id] = self._hob_layout(bay, z_base + height)
        if wt > 0:
            self._glue_undermount_sinks(z_base + height - wt)
        self._sink_fittings(cabinets, z_base + height)
        for bay in cabinets:
            self._bay_parts(bay, z0, z1, shared_back=any(bay in r for k, rs in blocks if k == "pair" for r in rs))
        self._niche_appliances(cabinets)
        self._dock_appliances(cabinets)
        self._standing_appliances()
        self._decor_panels()
        if wt > 0:
            self._worktop(rows, z_base + height - wt, z_base + height)
        if _prop(run.element, PSET_RUN, "CladEnds"):
            self._cladding(rows, z_base, z_base + height - wt)
        if self._flush_ends():
            self._end_panels(z_base, z_base + height - wt)
        if wt > 0 and _prop(run.element, PSET_RUN, "Backsplash"):
            self._backsplash(rows, pairs, z_base + height)
        for bay_id, hob in run.hobs.items():
            self.add(Part(hob.id, hob.name, "Hob", [hob.glass, hob.housing], label="hob"), run.bay(bay_id))
        # A niche (dishwasher slot) has no carcass of its own; its walls are
        # the end sides of the carcass next to it.
        for bay in run.bays:
            if not bay.niche:
                continue
            for part in run.parts:
                if part.role != "EndSide":
                    continue
                a0, a1 = part.boxes[0][0], part.boxes[0][1]
                if _near(a1, bay.a0) or _near(a0, bay.a1):
                    bay.members.append(part.id)
