#!/usr/bin/env python3
"""Gridfinity fit for the kitchen drawers (docs/design/kitchen-cabinets.md,
"Gridfinity").

Reads inputs/ground_floor/furnishings.yaml, lays the runs out with
models/kitchen_cabinet.py and, for every bay whose Pset_Drawers has
``Gridfinity: true``, prints the drawer inside (MAXIMERA deductions), the
Gridfinity cells, and the bay width / depth that would make the inside
exactly n × 42 + 1 by m × 42 + 1:

- width: the nearest n (a shared divider moves, so the clear width and the
  inside change 1:1 with the bay width);
- depth: always round down (floor m): the bay gets shallower, never deeper.
  A bay with ``Pset_Drawers.GridfinityFitDepth`` cuts its box instead.

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
        print(f"{run.id}: width deduction {p['DrawerInnerWidthDeduction']:g}, depth deduction "
              f"{p['DrawerInnerDepthDeduction']:g}, board {p['BoardThickness']:g}")
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
            cut_box = kc.gridfinity_fit_depth(bay.element)
            ok = "ok" if abs(dw) < 0.5 and (abs(dd) < 0.5 or cut_box) else "CHANGE"
            if cut_box and abs(dd) >= 0.5:
                ok += f" (box cut {dd:+g}, GridfinityFitDepth)"
                dd = 0.0
            print(f"  {bay.id:9} width {bay.width:6.1f} inside {iw:6.1f} x {idp:6.1f} -> {n:2d} x {m:2d} "
                  f"needs {n * pitch + play:g} x {m * pitch + play:g}: bay width {dw:+g}, depth {dd:+g}  {ok}")
        if abs(total) >= 0.5:
            print(f"  run length {total:+g}: {a.absorb} takes {-total:+g}")
        if depth_cuts and len({round(d, 3) for d in depth_cuts}) > 1:
            print("  depth cuts differ between bays; use the deepest cut for the row")
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
