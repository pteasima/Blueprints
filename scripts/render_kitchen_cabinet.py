"""PNG previews of one drawer cabinet, straight from models/kitchen_cabinet.py.

    python scripts/render_kitchen_cabinet.py SF-I600a [--open 1,3] [--out DIR]

Writes ``<id>-iso.png`` (drawers in --open pulled out to full extension) and
``<id>-front.png`` (front elevation with every drawer dimension). All numbers
come from ``kitchen_cabinet.layout``; nothing here is a typed-in size.
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


def element(element_id: str) -> dict:
    doc = ground_floor.load_furnishings()
    for key in ground_floor.FURNISHING_LISTS:
        for item in doc.get(key) or []:
            if item["id"] == element_id:
                return item
    raise SystemExit(f"{element_id} not in furnishings.yaml")


def _faces(shape, offset=(0.0, 0.0, 0.0)):
    verts, tris = shape.tessellate(0.5)
    pts = np.array([[v.X, v.Y, v.Z] for v in verts]) + np.array(offset)
    return [pts[list(t)] for t in tris]


def iso(el, lay, open_ids, path: Path):
    fig = plt.figure(figsize=(9, 9), dpi=150)
    ax = fig.add_subplot(projection="3d")
    light = np.array([-0.4, -0.7, 0.6])
    light /= np.linalg.norm(light)

    def add(shape, color, offset=(0.0, 0.0, 0.0), alpha=1.0):
        faces = _faces(shape, offset)
        shades = []
        for f in faces:
            n = np.cross(f[1] - f[0], f[2] - f[0])
            norm = np.linalg.norm(n) or 1.0
            shades.append(0.55 + 0.45 * abs(float(np.dot(n / norm, light))))
        base = np.array(matplotlib.colors.to_rgb(color))
        cols = [tuple(np.clip(base * s, 0, 1)) + (alpha,) for s in shades]
        ax.add_collection3d(Poly3DCollection(faces, facecolors=cols, edgecolors="none"))

    for part in kc.carcass_solids(lay, 1.0):
        add(part, "#d9a441", alpha=0.35)
    for dr in lay.drawers:
        dy = -dr.extension if dr.index in open_ids else 0.0
        add(kc.drawer_solid(dr, lay), "#e9c46a", (0.0, dy, 0.0))
    w, d, h = lay.width, lay.depth, lay.height
    ax.set_xlim(-100, w + 100)
    ax.set_ylim(-lay.slide_length - 50, d + 50)
    ax.set_zlim(0, h + 20)
    ax.set_box_aspect((w + 200, d + lay.slide_length + 100, h + 20))
    ax.view_init(elev=24, azim=-58)
    ax.set_axis_off()
    opened = ", ".join(f"D{i}" for i in sorted(open_ids)) or "none"
    ax.set_title(
        f"{el['id']} {el['Name']} — {int(w)}×{int(d)}×{int(h)}; open: {opened} "
        f"(full extension {int(lay.slide_length)} mm)",
        fontsize=10,
    )
    fig.tight_layout()
    fig.savefig(path)
    plt.close(fig)


def _dim_v(ax, x, z0, z1, text, side=1):
    ax.annotate("", (x, z0), (x, z1), arrowprops=dict(arrowstyle="<->", lw=0.8))
    ax.text(x + side * 12, (z0 + z1) / 2, text, va="center", ha="left" if side > 0 else "right", fontsize=8, rotation=90)


def front(el, lay, path: Path):
    p = lay.params
    w, h = lay.width, lay.height
    fig, ax = plt.subplots(figsize=(8, 10), dpi=150)
    # worktop, carcass outline, plinth
    wt0 = lay.carcass_z0 + lay.carcass_height
    ax.add_patch(plt.Rectangle((0, wt0), w, h - wt0, fc="#bbbbbb", ec="k", lw=0.8))
    ax.add_patch(plt.Rectangle((0, 0), w, lay.carcass_z0, fc="#888888", ec="k", lw=0.8))
    for dr in lay.drawers:
        x0, _, z0, x1, _, z1 = dr.front
        ax.add_patch(plt.Rectangle((x0, z0), x1 - x0, z1 - z0, fc="#e9c46a", ec="k", lw=0.8))
        ax.text(w / 2, (z0 + z1) / 2, f"D{dr.index}  {dr.content}\nfront {x1 - x0:.0f}×{z1 - z0:.0f}\n"
                f"grid {dr.nominal:.0f}, box side {dr.box[5] - dr.box[2]:.0f}",
                ha="center", va="center", fontsize=8)
        _dim_v(ax, w + 40, z0, z1, f"{z1 - z0:.0f}")
        _dim_v(ax, w + 130, dr.slot_z0, dr.slot_z0 + dr.nominal, f"grid {dr.nominal:.0f}")
    _dim_v(ax, -60, 0, lay.carcass_z0, f"plinth {lay.carcass_z0:.0f}", side=-1)
    _dim_v(ax, -60, lay.carcass_z0, wt0, f"carcass {lay.carcass_height:.0f}", side=-1)
    _dim_v(ax, -60, wt0, h, f"worktop {h - wt0:.0f}", side=-1)
    _dim_v(ax, -200, 0, h, f"counter {h:.0f}", side=-1)
    ax.annotate("", (0, -60), (w, -60), arrowprops=dict(arrowstyle="<->", lw=0.8))
    ax.text(w / 2, -90, f"width {w:.0f}; front gap {p['FrontGap']:.0f}; board {p['BoardThickness']:.0f}",
            ha="center", va="top", fontsize=8)
    ax.set_xlim(-330, w + 260)
    ax.set_ylim(-160, h + 60)
    ax.set_aspect("equal")
    ax.set_axis_off()
    ax.set_title(f"{el['id']} {el['Name']} — front elevation (mm)", fontsize=10)
    fig.tight_layout()
    fig.savefig(path)
    plt.close(fig)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("element_id")
    ap.add_argument("--open", default="1,3")
    ap.add_argument("--out", default=str(ROOT / "exports" / "kitchen_cabinet"))
    args = ap.parse_args()
    el = element(args.element_id)
    w, d, h = (float(el[k]) * 1000.0 for k in ("Width", "Depth", "Height"))
    lay = kc.layout(el, w, d, h)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    opened = {int(v) for v in args.open.split(",") if v.strip()}
    iso(el, lay, opened, out / f"{el['id']}-iso.png")
    front(el, lay, out / f"{el['id']}-front.png")
    print(out / f"{el['id']}-iso.png")
    print(out / f"{el['id']}-front.png")


if __name__ == "__main__":
    main()
