"""PNG previews of one kitchen run, straight from models/kitchen_cabinet.py.

    python scripts/render_kitchen_run.py KR-ISL [--bay SF-I600a] [--open SF-I600a-D1,SF-I600a-D3] [--out DIR]

Writes ``<run>-iso.png`` (the whole monoblock, worktop see-through),
``<run>-plan.png`` (a plan cut at mid carcass height with every bay's clear
width) and, with ``--bay``, ``<bay>-isolated.png``: only that bay's group
members, which is what the viewer's "Hide all others" keeps. Every number
comes from ``kitchen_cabinet.runs``; nothing here is a typed-in size.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "models"))

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402
from mpl_toolkits.mplot3d.art3d import Poly3DCollection  # noqa: E402

import ground_floor  # noqa: E402
import kitchen_cabinet as kc  # noqa: E402

COLORS = {
    "EndSide": "#c9822b",
    "Divider": "#e07a1f",
    "CentralBack": "#8d5a2b",
    "Back": "#8d5a2b",
    "Bottom": "#b88a4a",
    "Rail": "#b88a4a",
    "Top": "#b88a4a",
    "Front": "#e9c46a",
    "Drawer": "#f2d27a",
    "Plinth": "#555555",
    "Worktop": "#ece9e2",
    "Cladding": "#d9d5cc",
}
ALPHA = {"Worktop": 0.35, "Cladding": 0.45, "Front": 0.55}


def _box_faces(box, offset):
    a0, a1, c0, c1, z0, z1 = box
    p = np.array(
        [[a0, c0, z0], [a1, c0, z0], [a1, c1, z0], [a0, c1, z0], [a0, c0, z1], [a1, c0, z1], [a1, c1, z1], [a0, c1, z1]]
    ) + np.array(offset)
    idx = [(0, 1, 2, 3), (4, 5, 6, 7), (0, 1, 5, 4), (2, 3, 7, 6), (1, 2, 6, 5), (0, 3, 7, 4)]
    return [p[list(i)] for i in idx]


def iso(run, parts, open_ids, path: Path, title: str, elev=26, azim=-62):
    fig = plt.figure(figsize=(11, 9), dpi=150)
    ax = fig.add_subplot(projection="3d")
    light = np.array([-0.4, -0.7, 0.6])
    light /= np.linalg.norm(light)
    lo = np.array([np.inf] * 3)
    hi = -lo
    for part in parts:
        off = (0.0, 0.0, 0.0)
        if part.drawer is not None and part.id in open_ids:
            off = (0.0, part.drawer.out * part.drawer.extension, 0.0)
        faces = [f for box in part.boxes for f in _box_faces(box, off)]
        base = np.array(matplotlib.colors.to_rgb(COLORS.get(part.role, "#999999")))
        cols = []
        for f in faces:
            n = np.cross(f[1] - f[0], f[2] - f[0])
            s = 0.55 + 0.45 * abs(float(np.dot(n / (np.linalg.norm(n) or 1.0), light)))
            cols.append(tuple(np.clip(base * s, 0, 1)) + (ALPHA.get(part.role, 1.0),))
        ax.add_collection3d(Poly3DCollection(faces, facecolors=cols, edgecolors=(0, 0, 0, 0.25), linewidths=0.2))
        pts = np.vstack(faces)
        lo, hi = np.minimum(lo, pts.min(0)), np.maximum(hi, pts.max(0))
    span = hi - lo
    ax.set_xlim(lo[0], hi[0])
    ax.set_ylim(lo[1], hi[1])
    ax.set_zlim(lo[2], hi[2])
    ax.set_box_aspect(tuple(span))
    ax.view_init(elev=elev, azim=azim)
    ax.set_axis_off()
    ax.set_title(title, fontsize=9)
    fig.tight_layout()
    fig.savefig(path)
    plt.close(fig)


def plan(run, path: Path):
    z = (run.carcass_z0 + run.carcass_z1) / 2.0
    fig, ax = plt.subplots(figsize=(12, 7), dpi=150)
    for part in run.parts:
        for a0, a1, c0, c1, z0, z1 in part.boxes:
            if part.role == "Worktop":
                ax.add_patch(plt.Rectangle((a0, c0), a1 - a0, c1 - c0, fc="none", ec="#777", lw=0.8, ls="--"))
                for va0, va1, vc0, vc1 in part.voids:
                    ax.add_patch(plt.Rectangle((va0, vc0), va1 - va0, vc1 - vc0, fc="none", ec="#2a9", lw=0.8))
                continue
            if not (z0 <= z <= z1) or part.drawer is not None:
                continue
            ax.add_patch(plt.Rectangle((a0, c0), a1 - a0, c1 - c0, fc=COLORS.get(part.role, "#999"), ec="k", lw=0.3))
    for bay in run.bays:
        label = f"{bay.id}\n{bay.width:.0f}" + ("\nniche" if bay.niche else f"\nclear {bay.clear_width:.0f}")
        ax.text((bay.a0 + bay.a1) / 2, (bay.c0 + bay.c1) / 2, label, ha="center", va="center", fontsize=7)
    if run.worktop:
        a0, a1, c0, c1, _, zt = run.worktop
        ax.text((a0 + a1) / 2, c0 - 25, f"worktop {a1 - a0:.0f} × {c1 - c0:.0f}, top {zt:.0f}",
                ha="center", va="top", fontsize=8)
    ax.autoscale_view()
    ax.set_aspect("equal")
    ax.margins(0.06)
    ax.set_axis_off()
    ax.set_title(f"{run.id} — plan cut at z = {z:.0f} mm (run frame; bays labelled with clear inner width)", fontsize=9)
    fig.tight_layout()
    fig.savefig(path)
    plt.close(fig)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("run_id")
    ap.add_argument("--bay")
    ap.add_argument("--open", default="")
    ap.add_argument("--out", default=str(ROOT / "exports" / "kitchen_cabinet"))
    args = ap.parse_args()
    runs = {r.id: r for r in kc.runs(ground_floor.load_furnishings())}
    if args.run_id not in runs:
        raise SystemExit(f"{args.run_id} not in furnishings.yaml; runs: {', '.join(runs)}")
    run = runs[args.run_id]
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    opened = {v.strip() for v in args.open.split(",") if v.strip()}
    paths = [out / f"{run.id}-iso.png", out / f"{run.id}-plan.png"]
    iso(run, run.parts, opened, paths[0], f"{run.id} {run.element.get('Name', '')} — monoblock, {len(run.parts)} parts")
    plan(run, paths[1])
    if args.bay:
        bay = run.bay(args.bay)
        members = [run.part(m) for m in bay.members]
        paths.append(out / f"{bay.id}-isolated.png")
        iso(run, members, opened, paths[-1],
            f"{bay.id} isolated (its IfcGroup): {', '.join(p.role for p in members)}", elev=20, azim=-115)
    for p in paths:
        print(p)


if __name__ == "__main__":
    main()
