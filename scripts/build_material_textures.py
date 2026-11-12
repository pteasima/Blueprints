"""Build the realistic-mode texture sets under docs/materials/<id>/.

Reproducible: every set is either a pinned CC0 download (Poly Haven,
ambientCG) re-tinted to a measured or assumed colour, or a procedural
texture generated here with a fixed seed. Why each colour was chosen is in
inputs/materials/catalogue.yaml (`notes`) and docs/materials/README.md.

    python scripts/build_material_textures.py            # all sets
    python scripts/build_material_textures.py silestone-blanco-maple

Downloads are cached in ~/.cache/blueprints-materials. Manufacturer photos are
only ever *measured* (mean colour, speck density) by hand when choosing the
targets below; they are never downloaded or shipped by this script.
Needs numpy and Pillow (not repo dependencies; `pip install numpy pillow`).
"""

from __future__ import annotations

import io
import sys
import urllib.request
import zipfile
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "materials"
CACHE = Path.home() / ".cache" / "blueprints-materials"
JPG_Q = 85

POLYHAVEN = "https://dl.polyhaven.org/file/ph-assets/Textures/jpg/{res}/{a}/{a}_{m}_{res}.jpg"
AMBIENTCG = "https://ambientcg.com/get?file={a}_1K-JPG.zip"


# --------------------------------------------------------------------------- io


def _fetch(url: str, name: str) -> bytes:
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / name
    if not path.exists():
        req = urllib.request.Request(url, headers={"User-Agent": "blueprints-materials"})
        with urllib.request.urlopen(req, timeout=120) as r:
            path.write_bytes(r.read())
    return path.read_bytes()


def polyhaven(asset: str, m: str, res: str = "2k") -> np.ndarray:
    data = _fetch(POLYHAVEN.format(a=asset, m=m, res=res), f"{asset}_{m}_{res}.jpg")
    return np.asarray(Image.open(io.BytesIO(data)).convert("RGB")).astype(np.float32)


def ambientcg(asset: str, m: str) -> np.ndarray:
    data = _fetch(AMBIENTCG.format(a=asset), f"{asset}_1K-JPG.zip")
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        raw = z.read(f"{asset}_1K-JPG_{m}.jpg")
    return np.asarray(Image.open(io.BytesIO(raw)).convert("RGB")).astype(np.float32)


def save(mid: str, name: str, arr: np.ndarray, size: int, *, gray: bool = False) -> None:
    d = OUT / mid
    d.mkdir(parents=True, exist_ok=True)
    a = np.clip(arr, 0, 255).astype(np.uint8)
    im = Image.fromarray(a[..., 0] if gray and a.ndim == 3 else a)
    if im.size != (size, size):
        im = im.resize((size, size), Image.LANCZOS)
    im.save(d / f"{name}.jpg", quality=JPG_Q, optimize=True, progressive=True)


def license_txt(mid: str, text: str) -> None:
    (OUT / mid).mkdir(parents=True, exist_ok=True)
    (OUT / mid / "LICENSE.txt").write_text(text.strip() + "\n", encoding="utf-8")


def hex_rgb(h: str) -> np.ndarray:
    h = h.lstrip("#")
    return np.array([int(h[i : i + 2], 16) for i in (0, 2, 4)], np.float32)


def retint(src: np.ndarray, target_hex: str, contrast: float = 1.0) -> np.ndarray:
    """Move the per-channel mean to the target, keep the source's pattern."""
    mean = src.reshape(-1, 3).mean(0)
    lum = src.mean(2, keepdims=True)
    detail = lum - lum.mean()
    target = hex_rgb(target_hex)
    # Chroma from the target, luminance pattern from the source, plus a little
    # of the source's own colour variation so grain keeps its warm/cool shifts.
    chroma_var = (src - lum) - (mean - mean.mean())
    return target + detail * contrast * (target / max(target.mean(), 1)) + 0.5 * chroma_var


def flatten_normal(n: np.ndarray, strength: float) -> np.ndarray:
    v = n / 127.5 - 1.0
    v[..., :2] *= strength
    v /= np.linalg.norm(v, axis=2, keepdims=True) + 1e-6
    return (v + 1.0) * 127.5


# -------------------------------------------------------------- procedural


def fbm(size: int, seed: int, beta: float, lo: float = 1.0, hi: float | None = None) -> np.ndarray:
    """Tileable noise with a 1/f^beta spectrum, normalised to mean 0 std 1."""
    rng = np.random.default_rng(seed)
    white = rng.standard_normal((size, size))
    f = np.fft.fftfreq(size) * size
    fx, fy = np.meshgrid(f, f)
    r = np.hypot(fx, fy)
    r[0, 0] = 1
    amp = r ** (-beta / 2)
    amp[r < lo] = 0
    if hi is not None:
        amp[r > hi] = 0
    out = np.real(np.fft.ifft2(np.fft.fft2(white) * amp))
    return (out - out.mean()) / (out.std() + 1e-9)


def specks(size: int, seed: int, count: int, rmin: float, rmax: float, elong: float = 1.0):
    """Tileable mask of random ellipse specks; returns list of (mask, index)."""
    rng = np.random.default_rng(seed)
    yy, xx = np.mgrid[0:size, 0:size]
    out = np.zeros((size, size), np.float32)
    ids = np.full((size, size), -1, np.int32)
    for k in range(count):
        cx, cy = rng.uniform(0, size, 2)
        r = rmin * (rmax / rmin) ** rng.random() ** 2.2
        e = 1 + (elong - 1) * rng.random()
        th = rng.uniform(0, np.pi)
        x0, x1 = int(cx - r * e - 2), int(cx + r * e + 3)
        y0, y1 = int(cy - r * e - 2), int(cy + r * e + 3)
        sx = np.arange(x0, x1) % size
        sy = np.arange(y0, y1) % size
        gx, gy = np.meshgrid(np.arange(x0, x1) - cx, np.arange(y0, y1) - cy)
        u = (gx * np.cos(th) + gy * np.sin(th)) / (r * e)
        v = (-gx * np.sin(th) + gy * np.cos(th)) / r
        m = np.clip(1.5 - np.hypot(u, v) * 1.5, 0, 1)
        m = np.where(m > 0.05, np.minimum(m * 2, 1), 0)
        sub = np.ix_(sy, sx)
        upd = m > out[sub]
        out[sub] = np.where(upd, m, out[sub])
        ids[sub] = np.where(upd, k, ids[sub])
    return out, ids


def normal_from_height(h: np.ndarray, strength: float) -> np.ndarray:
    dx = (np.roll(h, -1, 1) - np.roll(h, 1, 1)) * 0.5 * strength
    dy = (np.roll(h, -1, 0) - np.roll(h, 1, 0)) * 0.5 * strength
    n = np.dstack([-dx, dy, np.ones_like(h)])  # OpenGL (+Y up) convention
    n /= np.linalg.norm(n, axis=2, keepdims=True)
    return (n + 1) * 127.5


def gray3(a: np.ndarray) -> np.ndarray:
    return np.repeat(a[..., None], 3, axis=2)


# ------------------------------------------------------------------- sets

CC0_PROC = "Procedural, generated by scripts/build_material_textures.py (seed fixed). Own work, released CC0 1.0."


def oak() -> None:
    a = "oak_veneer_01"
    # Kaplan 1934 'Přírodní D 02' swatch measures #aa7e60 (median, centre crop).
    save("oak-natural-kaplan", "color", retint(polyhaven(a, "diff"), "#aa7e60", 1.0), 2048)
    save("oak-natural-kaplan", "normal", flatten_normal(polyhaven(a, "nor_gl", "1k"), 0.6), 1024)
    # Matt lacquer: smoother and more even than the raw veneer scan.
    r = polyhaven(a, "rough", "1k")[..., 0]
    save("oak-natural-kaplan", "roughness", gray3(0.45 * 255 + (r - r.mean()) * 0.25), 1024, gray=True)
    license_txt("oak-natural-kaplan", f"""
Source: Poly Haven "Oak Veneer 01" by Jenelle van Heerden, https://polyhaven.com/a/{a} (CC0 1.0).
Modified: re-tinted to #aa7e60 (Kaplan 1934 oak 'Přírodní D 02' swatch, measured), normal flattened to 60 %,
roughness re-centred on 0.45 for matt lacquer. Physical size of one repeat: 1.83 m.
""")


def silestone() -> None:
    n = 2048  # one repeat = 1.0 m, ~0.5 mm per pixel
    base = hex_rgb("#ede8dd")
    img = np.broadcast_to(base, (n, n, 3)).copy()
    img += fbm(n, 11, 2.2, lo=2)[..., None] * np.array([2.0, 2.0, 2.4])
    # Dense fine aggregate: cool grey-white crumbs, then fewer taupe/grey/ochre
    # flecks of 0.5–3 mm (product descriptions, Cosentino slab photo density).
    palette = [
        ("#dcd8d0", 90000, 1.0, 2.2, 7),
        ("#f9f7f2", 50000, 1.0, 2.8, 8),
        ("#bdb7ad", 26000, 1.0, 3.0, 9),
        ("#a59885", 9000, 1.1, 3.6, 10),
        ("#c9b38e", 4000, 1.1, 3.4, 12),
        ("#8c8780", 2500, 1.0, 2.8, 13),
    ]
    for hx, count, rmin, rmax, seed in palette:
        m, _ = specks(n, seed, count, rmin, rmax, elong=1.8)
        img = img * (1 - m[..., None] * 0.9) + hex_rgb(hx) * (m[..., None] * 0.9)
    save("silestone-blanco-maple", "color", img, n)
    rough = 0.12 * 255 + fbm(n, 21, 1.6, lo=4)[...] * 6
    save("silestone-blanco-maple", "roughness", gray3(rough), 1024, gray=True)
    license_txt("silestone-blanco-maple", CC0_PROC + """
Matches Silestone Blanco Maple (Cosentino) by description and measured slab-photo colour; no manufacturer
image is included. One repeat = 1.0 m.""")


def trani() -> None:
    n = 1024  # one repeat = 0.6 m (one 596 mm tile + joint), ~0.6 mm per pixel
    base = hex_rgb("#e0d1bc")  # median of ABK's 24 'Faccia' renders, centre crop
    clouds = fbm(n, 31, 2.6, lo=1.5)
    grain = fbm(n, 32, 0.6, lo=40)
    img = base + clouds[..., None] * np.array([3.5, 3.5, 4.0]) + grain[..., None] * 4.5
    fossils, _ = specks(n, 33, 2500, 0.8, 4.0, elong=3.0)
    img = img * (1 - fossils[..., None] * 0.25) + hex_rgb("#cbb79a") * fossils[..., None] * 0.25
    pores, _ = specks(n, 34, 4000, 0.6, 1.6)
    img = img - pores[..., None] * np.array([18, 20, 24])
    light, _ = specks(n, 35, 1500, 0.8, 3.0, elong=2.0)
    img = img + light[..., None] * 9
    save("abk-poetry-stone-trani-beige", "color", img, n)
    h = clouds * 0.2 + grain * 0.3 - pores * 3.0
    save("abk-poetry-stone-trani-beige", "normal", normal_from_height(h, 0.9), n)
    rough = 0.62 * 255 + clouds * 5 - pores * 15
    save("abk-poetry-stone-trani-beige", "roughness", gray3(rough), n, gray=True)
    license_txt("abk-poetry-stone-trani-beige", CC0_PROC + """
Matches ABK Poetry Stone Trani Beige (natural/matt, 60x60) by its measured mean colour and visual character;
no ABK image is included. One repeat = 0.6 m.""")


def pu_floor(mid: str, hx: str, seed: int) -> None:
    n = 1024  # one repeat = 2.0 m
    clouds = fbm(n, seed, 2.8, lo=1)
    fine = fbm(n, seed + 1, 0.4, lo=60)
    img = hex_rgb(hx) + clouds[..., None] * 4.0 + fine[..., None] * 1.2
    save(mid, "color", img, n)
    rough = 0.38 * 255 + clouds * 8 + fine * 3
    save(mid, "roughness", gray3(rough), n, gray=True)
    license_txt(mid, CC0_PROC + "\nPoured polyurethane floor, colour assumed. One repeat = 2.0 m.")


def plaster() -> None:
    a = "Plaster001"
    save("paint-interior-white", "normal", flatten_normal(ambientcg(a, "NormalGL"), 0.35), 1024)
    r = ambientcg(a, "Roughness")[..., 0]
    save("paint-interior-white", "roughness", gray3(0.9 * 255 + (r - r.mean()) * 0.5), 1024, gray=True)
    license_txt("paint-interior-white", f"""
Source: ambientCG "{a}", https://ambientcg.com/view?id={a} (CC0 1.0).
Modified: normal flattened to 35 % (smooth filled-and-painted plaster), roughness re-centred on 0.9.
No colour map: the viewer uses base_color. Physical size of one repeat: assumed 2.0 m.""")


def fabric() -> None:
    a = "Fabric062"
    save("fabric-sofa-livom-harvey", "color", retint(ambientcg(a, "Color"), "#a8a398", 1.0), 1024)
    save("fabric-sofa-livom-harvey", "normal", ambientcg(a, "NormalGL"), 1024)
    save("fabric-sofa-livom-harvey", "roughness", ambientcg(a, "Roughness"), 1024, gray=True)
    save("fabric-sofa-livom-harvey", "ao", ambientcg(a, "AmbientOcclusion"), 1024, gray=True)
    license_txt("fabric-sofa-livom-harvey", f"""
Source: ambientCG "{a}", https://ambientcg.com/view?id={a} (CC0 1.0). Physical size 0.40 m (ambientCG metadata).
Modified: colour re-tinted to the assumed warm light grey #a8a398.""")


def rug() -> None:
    a = "Carpet014"
    save("rug-wool-oatmeal", "color", retint(ambientcg(a, "Color"), "#cbbfac", 1.0), 1024)
    save("rug-wool-oatmeal", "normal", ambientcg(a, "NormalGL"), 1024)
    save("rug-wool-oatmeal", "roughness", ambientcg(a, "Roughness"), 1024, gray=True)
    license_txt("rug-wool-oatmeal", f"""
Source: ambientCG "{a}", https://ambientcg.com/view?id={a} (CC0 1.0). Physical size assumed 0.5 m.
Modified: colour re-tinted to the assumed oatmeal #cbbfac.""")


def steel() -> None:
    a = "Metal009"
    save("stainless-brushed", "color", retint(ambientcg(a, "Color"), "#c4c5c6", 1.0), 1024)
    save("stainless-brushed", "normal", ambientcg(a, "NormalGL"), 1024)
    r = ambientcg(a, "Roughness")[..., 0]
    save("stainless-brushed", "roughness", gray3(0.32 * 255 + (r - r.mean())), 1024, gray=True)
    license_txt("stainless-brushed", f"""
Source: ambientCG "{a}", https://ambientcg.com/view?id={a} (CC0 1.0). Physical size assumed 0.3 m.
Modified: colour set to stainless reflectance #c4c5c6, roughness re-centred on 0.32.""")


SETS = {
    "oak-natural-kaplan": oak,
    "silestone-blanco-maple": silestone,
    "abk-poetry-stone-trani-beige": trani,
    "floor-pu-living": lambda: pu_floor("floor-pu-living", "#bdb8ae", 41),
    "floor-pu-garage": lambda: pu_floor("floor-pu-garage", "#8f9294", 51),
    "paint-interior-white": plaster,
    "fabric-sofa-livom-harvey": fabric,
    "rug-wool-oatmeal": rug,
    "stainless-brushed": steel,
}


def main(argv: list[str]) -> None:
    names = argv or list(SETS)
    for name in names:
        print("building", name)
        SETS[name]()


if __name__ == "__main__":
    main(sys.argv[1:])
