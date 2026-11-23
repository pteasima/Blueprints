#!/usr/bin/env python3
"""Gridfinity fit for the kitchen drawers (docs/design/kitchen-cabinets.md,
"Gridfinity").

Reads inputs/ground_floor/furnishings.yaml, lays the runs out with
models/kitchen_cabinet.py and, for every bay whose Pset_Drawers has
``Gridfinity: true``, prints the drawer inside (Blum MERIVOBOX: LW − 51 by
NL − 42), the Gridfinity cells, and the bay width that would make the inside
exactly n × 42 + GridfinityPlay (2 since 2026-11-23, t841u) wide:

- width: the nearest n (a shared divider moves, so the clear width and the
  inside change 1:1 with the bay width);
- depth: a MERIVOBOX box is its nominal length NL long, so the depth cannot
  be tuned to the grid; the plate is snapped to the front and the slack is
  at the back (Petr, 2026-11-23, t835u). Only the slack is printed.

Then, as modelled: every drawer with a baseplate (main drawers, or the
inner drawers where ``GridfinityMain`` is false), its box length, inside,
cells and leftover.

It writes nothing. Change the yaml bay boxes by hand with its numbers (and
let the absorbing bays named on the command line take the difference), then
rerun: every line should read "ok".

    python scripts/gridfinity_fit.py [--absorb SF-I300]
"""
from __future__ import annotations

import argparse
import math
import pathlib
import sys

import yaml

ROOT = pathlib.Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))
import furnishing_links  # noqa: E402
import kitchen_cabinet as kc  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--yaml", default=str(ROOT / "inputs/ground_floor/furnishings.yaml"))
    ap.add_argument("--absorb", default="SF-I300", help="bay that takes the run-length difference")
    a = ap.parse_args()
    doc = furnishing_links.resolve(yaml.safe_load(open(a.yaml)))  # linked widths (Pset_Links)
    for run in kc.runs(doc):
        grid_bays = [b for b in run.bays if kc.wants_gridfinity(b.element)]
        if not grid_bays:
            continue
        p = run.params
        pitch, play = p["GridfinityPitch"], p["GridfinityPlay"]
        print(f"{run.id}: Blum MERIVOBOX, width LW − {p['MerivoboxWidthDeduction']:g}, depth NL − "
              f"{p['MerivoboxBaseDeduction'] + p['MerivoboxBackThickness']:g}, board {p['BoardThickness']:g}")
        total = 0.0
        depth_cuts = []
        for bay in grid_bays:
            t = p["BoardThickness"]
            back_y = bay.depth - t / 2.0  # island rows share the central back
            iw, idp = kc.drawer_inside(bay, p, back_y)
            n_lo = math.floor((iw - play) / pitch + 1e-6)
            cands = [(n, n * pitch + play - iw) for n in (n_lo, n_lo + 1)]
            n, dw = min(cands, key=lambda c: (abs(c[1]), c[1]))
            m = math.floor((idp - play) / pitch + 1e-6)
            dd = m * pitch + play - idp
            total += dw
            depth_cuts.append(dd)
            ok = "ok" if abs(dw) < 0.5 else "CHANGE"
            print(f"  {bay.id:9} width {bay.width:6.1f} inside {iw:6.1f} x {idp:6.1f} -> {n:2d} x {m:2d} "
                  f"needs {n * pitch + play:g} wide: bay width {dw:+g}  {ok}; depth slack {-dd:g} at the back (NL fixed)")
        if abs(total) >= 0.5:
            print(f"  run length {total:+g}: {a.absorb} takes {-total:+g}")
        # As modelled (2026-11-22 e): which drawers carry a baseplate, box
        # length, inside, cells and the slack left over.
        print("  as modelled (baseplate drawers):")
        for part in run.parts:
            dr = part.drawer
            if dr is None or not dr.grid:
                continue
            n, sw = kc.gridfinity_cells(p, dr.inside[0])
            m, sd = kc.gridfinity_cells(p, dr.inside[1])
            print(f"    {part.id:16} {part.role:11} box {abs(dr.box[3] - dr.box[2]):5.0f} deep, inside "
                  f"{dr.inside[0]:5.0f} x {dr.inside[1]:5.0f} -> {n:2d} x {m:2d}, slack {sw:+.0f} / {sd:+.0f}")


if __name__ == "__main__":
    main()
