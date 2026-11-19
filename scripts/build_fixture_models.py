#!/usr/bin/env python3
"""Build the real fixture models the viewer draws instead of boxes.

Facts, sources and what was guessed: docs/electrical/FixtureModels.md.

    uv run --with trimesh --with numpy --with scipy --with pymeshlab \
        --with remotezip --with manifold3d --with networkx --with pillow \
        --with DracoPy python scripts/build_fixture_models.py

Writes docs/models/fixtures/<model>.glb. Manufacturer downloads are cached in
``$BLUEPRINTS_FIXTURE_CACHE`` (default ``~/.cache/blueprints-fixture-src``),
never committed.

Asset convention (fixtureModels.js relies on it): metres, real size; +Z points
out of the mounting surface (into the room), +Y is up for wall devices, the
origin is the centre of the back face that touches the wall or ceiling. Node
names carry the role: ``diffuser`` glows when the light is on, ``rocker``,
``rocker-1`` and ``rocker-2`` tilt when pressed. Material names are ours.
"""

from __future__ import annotations

import math
import os
import urllib.request
from pathlib import Path

import numpy as np
import pymeshlab
import trimesh
from trimesh.visual.material import PBRMaterial

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "models" / "fixtures"
CACHE = Path(os.environ.get("BLUEPRINTS_FIXTURE_CACHE", Path.home() / ".cache" / "blueprints-fixture-src"))

# Ubiquiti's own model from the store page (https://store.ui.com/us/en/products/uvc-g6-turret).
# Petr, 2026-11-19: not a commercial project, fine to use it, he takes responsibility.
UI_G6_TURRET_GLB = (
    "https://cdn.ecomm.ui.com/products/cc0e6f23-b53b-45b5-bff5-faf69f4fbf30/7648155a-3c16-4e17-a91c-7f79c02cac6b.glb"
)
# Triangle budgets. There are 45 + 7 switches and 15 lights in the house, so
# these stay small: the whole generated house is about 50k triangles.
BUDGET = {"d100-sections": 64, "jung-frame": 700, "jung-rocker": 500, "jung-rocker-half": 350}
KAMA_D100_GLB = "https://www.kamaelektro.cz/user/documents/upload/GLB_Modely/KL-D100-15W-BK.glb"
JUNG_OBJ_ZIP = "https://downloads.jung.de//Downloads/Allgemeine Downloads/2D & 3D/OBJ/JUNG_OBJ_2021.zip"
JUNG_FILES = {
    "rocker-1gang": "JUNG_OBJ_2021/LS_switch_push-button_1-gang.obj",
    "rocker-2gang": "JUNG_OBJ_2021/LS_switch_push-button_2-gang.obj",
    "frame-1gang": "JUNG_OBJ_2021/LS_1-gang_frame.obj",
}


def mat(name: str, rgb: tuple[float, float, float], roughness: float, metallic: float = 0.0,
        emissive: tuple[float, float, float] | None = None, alpha: float = 1.0) -> PBRMaterial:
    return PBRMaterial(
        name=name,
        baseColorFactor=[*rgb, alpha],
        roughnessFactor=roughness,
        metallicFactor=metallic,
        emissiveFactor=list(emissive) if emissive else None,
        alphaMode="BLEND" if alpha < 1 else None,
        doubleSided=False,
    )


def srgb(hex_: str) -> tuple[float, float, float]:
    """Hex sRGB to the linear factors glTF stores."""
    out = []
    for i in (0, 2, 4):
        c = int(hex_[i:i + 2], 16) / 255.0
        out.append(c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4)
    return tuple(out)


# Jung LS alpine white gloss (WW): inputs/materials/catalogue.yaml jung-ls-alpine-white-gloss.
JUNG_WW = srgb("f1f0ea")


def painted(mesh: trimesh.Trimesh, material: PBRMaterial) -> trimesh.Trimesh:
    mesh = mesh.copy()
    mesh.visual = trimesh.visual.TextureVisuals(material=material)
    return mesh


def decimate(mesh: trimesh.Trimesh, faces: int, min_piece_mm: float = 1.0) -> trimesh.Trimesh:
    """Quadric edge collapse (MeshLab). Pieces smaller than ``min_piece_mm``
    across (loose CAD slivers) are dropped first."""
    if len(mesh.faces) <= faces:
        return mesh
    ms = pymeshlab.MeshSet()
    # MeshLab thresholds below are in the mesh's units; work in millimetres.
    ms.add_mesh(pymeshlab.Mesh(mesh.vertices * 1000.0, mesh.faces))
    ms.meshing_merge_close_vertices(threshold=pymeshlab.PureValue(0.01))
    ms.meshing_remove_duplicate_faces()
    ms.meshing_remove_null_faces()
    ms.meshing_remove_connected_component_by_diameter(mincomponentdiag=pymeshlab.PureValue(min_piece_mm))
    ms.meshing_decimation_quadric_edge_collapse(
        targetfacenum=faces, preservenormal=True, preservetopology=False,
        planarquadric=True, qualitythr=0.3, optimalplacement=True,
    )
    out = ms.current_mesh()
    return trimesh.Trimesh(out.vertex_matrix() / 1000.0, out.face_matrix(), process=True)


def smooth(mesh: trimesh.Trimesh, angle_deg: float = 35.0) -> trimesh.Trimesh:
    """Split vertices at creases so glTF normals are smooth only on curves."""
    return trimesh.graph.smooth_shade(mesh, angle=math.radians(angle_deg))


def fetch(url: str, name: str) -> Path:
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / name
    if not path.exists():
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as r:
            path.write_bytes(r.read())
    return path


def jung_obj(key: str) -> trimesh.Trimesh:
    path = CACHE / "jung" / JUNG_FILES[key]
    if not path.exists():
        from remotezip import RemoteZip  # only the three members, not the 850 MB zip

        with RemoteZip(JUNG_OBJ_ZIP) as z:
            z.extract(JUNG_FILES[key], CACHE / "jung")
    mesh = trimesh.load(path, force="mesh", process=True)
    # Jung OBJ: centimetres, +Y out of the wall, Z vertical. Ours: metres,
    # +Z out of the wall, +Y up. (x, y, z) -> (-x, z, y) keeps handedness.
    m = np.array([[-0.01, 0, 0, 0], [0, 0, 0.01, 0], [0, 0.01, 0, 0], [0, 0, 0, 1]])
    mesh.apply_transform(m)
    return mesh


def front_faces(mesh: trimesh.Trimesh, z_min: float) -> trimesh.Trimesh:
    """Drop everything behind the wall plane (insert mechanics, fixing claws)."""
    keep = mesh.vertices[mesh.faces][:, :, 2].max(axis=1) > z_min
    out = mesh.submesh([np.nonzero(keep)[0]], append=True)
    out.remove_unreferenced_vertices()
    return out


def scene_of(parts: dict[str, trimesh.Trimesh]) -> trimesh.Scene:
    scene = trimesh.Scene()
    for name, mesh in parts.items():
        scene.add_geometry(mesh, node_name=name, geom_name=name)
    return scene


def save(scene: trimesh.Scene, name: str) -> Path:
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f"{name}.glb"
    path.write_bytes(scene.export(file_type="glb", include_normals=True))
    tris = sum(len(g.faces) for g in scene.geometry.values())
    ext = scene.bounds[1] - scene.bounds[0]
    print(f"{path.relative_to(ROOT)}: {path.stat().st_size / 1024:.0f} KB, {tris} triangles, "
          f"{ext[0] * 1000:.1f} x {ext[1] * 1000:.1f} x {ext[2] * 1000:.1f} mm")
    return path


# --- Kama Lights D100 (Kamaelektro's own SolidWorks glTF) -------------------

def kama_d100() -> None:
    src = trimesh.load(fetch(KAMA_D100_GLB, "KL-D100-15W-BK.glb"))
    meshes = {}
    for node in src.graph.nodes_geometry:
        transform, geom = src.graph[node]
        mesh = src.geometry[geom].copy()
        mesh.apply_transform(transform)
        meshes[geom] = mesh
    # Source: Z up, the ceiling face at z = 0, the light hanging to -z.
    # Ours: +Z out of the ceiling. 180 degrees about X.
    flip = trimesh.transformations.rotation_matrix(math.pi, [1, 0, 0])
    for mesh in meshes.values():
        mesh.apply_transform(flip)
    # GLTF_2 is the mounting plate inside the can: never seen, dropped.
    # The can is a solid of revolution: rather than decimate it (uneven
    # facets shade in stripes and draw broken edge rings), revolve Kama's own
    # profile, cut through the axis, from the ceiling up the outside wall and
    # down the stepped bezel to the diffuser.
    profile = d100_profile(meshes["GLTF"])
    body = trimesh.creation.revolve(profile, sections=BUDGET["d100-sections"])
    # Outside wall faces must face out (revolve's winding follows the profile).
    wall = np.linalg.norm(body.triangles_center[:, :2], axis=1) > 0.049
    if np.mean(np.einsum("ij,ij->i", body.face_normals[wall, :2], body.triangles_center[wall, :2])) < 0:
        body.invert()
    diffuser = meshes["GLTF_1"]
    white = mat("d100-body-white", srgb("f4f4f2"), 0.45)
    opal = mat("d100-diffuser-opal", srgb("eceae4"), 0.6)
    save(scene_of({"body": painted(smooth(body, 30.0), white), "diffuser": painted(diffuser, opal)}), "kama-d100")


def d100_profile(body: trimesh.Trimesh) -> np.ndarray:
    """(radius, height) polyline of the visible outside of the can, from the
    CAD cut through its axis."""
    from collections import defaultdict

    segs = trimesh.intersections.mesh_plane(body, plane_normal=[0.0123, 1, 0], plane_origin=[0, 0.00003, 0])
    segs = segs[(segs[:, :, 0] > 0).all(axis=1)]

    def rz(p):
        return round(float(np.hypot(p[0], p[1])), 6), round(float(p[2]), 6)

    adj = defaultdict(list)
    for a, b in segs:
        ka, kb = rz(a), rz(b)
        if ka != kb:
            adj[ka].append(kb)
            adj[kb].append(ka)
    start = min((k for k, v in adj.items() if len(v) == 1), key=lambda k: k[0])
    chain, seen = [start], {start}
    while True:
        nxt = [n for n in adj[chain[-1]] if n not in seen]
        if not nxt:
            break
        chain.append(nxt[0])
        seen.add(nxt[0])
    pts = np.array(chain)
    # From the outside wall's foot at the ceiling to the diffuser's rim.
    foot = int(np.argmax(pts[:, 0] - 10 * pts[:, 1]))
    pts = pts[foot:]
    keep = rdp(pts, 0.00005)
    print(f"  D100 profile: {len(keep)} points, r {keep[:, 0].min() * 1000:.1f}-{keep[:, 0].max() * 1000:.1f} mm")
    return keep


def rdp(pts: np.ndarray, tol: float) -> np.ndarray:
    """Ramer-Douglas-Peucker polyline simplification."""
    if len(pts) < 3:
        return pts
    a, b = pts[0], pts[-1]
    ab = b - a
    n = np.linalg.norm(ab)
    rel = pts - a
    d = np.abs(ab[0] * rel[:, 1] - ab[1] * rel[:, 0]) / n if n > 0 else np.linalg.norm(rel, axis=1)
    i = int(np.argmax(d))
    if d[i] <= tol:
        return np.array([a, b])
    return np.vstack([rdp(pts[: i + 1], tol)[:-1], rdp(pts[i:], tol)])


# --- Jung LS 990 rocker in a LS 981 frame (Jung's own OBJ) -----------------

def level_rocker(mesh: trimesh.Trimesh) -> trimesh.Trimesh:
    """Jung draws the LS rocker switched (the face slopes about 3.5 degrees,
    top proud). An up/down rocker rests flat, so turn it about X through
    its centre until the face is parallel to the wall."""
    n = mesh.face_normals
    front = (n[:, 2] > 0.97) & (np.abs(n[:, 0]) < 0.05)
    if not front.any():
        return mesh
    # Area-weighted normal of the front face: its Y component is the slope.
    w = mesh.area_faces[front][:, None]
    avg = (n[front] * w).sum(axis=0)
    angle = math.atan2(avg[1], avg[2])
    center = mesh.bounds.mean(axis=0)
    mesh = mesh.copy()
    mesh.apply_transform(trimesh.transformations.rotation_matrix(angle, [1, 0, 0], center))
    print(f"  rocker levelled by {math.degrees(angle):.2f} deg")
    return mesh


def jung_switch() -> None:
    gloss = mat("jung-ls-ww", JUNG_WW, 0.18)
    frame = decimate(front_faces(jung_obj("frame-1gang"), 0.0005), BUDGET["jung-frame"])
    one = decimate(level_rocker(front_faces(jung_obj("rocker-1gang"), 0.0085)), BUDGET["jung-rocker"])
    save(scene_of({"frame": painted(smooth(frame), gloss), "rocker": painted(smooth(one), gloss)}), "jung-ls990")

    two = level_rocker(front_faces(jung_obj("rocker-2gang"), 0.0085))
    centroids = two.triangles_center[:, 0]
    halves = {}
    for name, sel in (("rocker-1", centroids < 0), ("rocker-2", centroids >= 0)):
        half = two.submesh([np.nonzero(sel)[0]], append=True)
        half.remove_unreferenced_vertices()
        halves[name] = painted(smooth(decimate(half, BUDGET["jung-rocker-half"])), gloss)
    save(scene_of({"frame": painted(smooth(frame), gloss), **halves}), "jung-ls995")


def sphere_zone(radius: float, center, axis, theta0_deg: float, theta1_deg: float, rings: int,
                segments: int = 72) -> trimesh.Trimesh:
    """The band of a sphere between two polar angles from ``axis``."""
    axis = np.asarray(axis, float) / np.linalg.norm(axis)
    helper = np.array([1.0, 0, 0]) if abs(axis[0]) < 0.9 else np.array([0, 1.0, 0])
    u = np.cross(axis, helper)
    u /= np.linalg.norm(u)
    w = np.cross(axis, u)
    thetas = np.radians(np.linspace(theta0_deg, theta1_deg, rings + 1))
    phis = np.linspace(0, 2 * math.pi, segments, endpoint=False)
    verts = []
    for t in thetas:
        for ph in phis:
            d = axis * math.cos(t) + (u * math.cos(ph) + w * math.sin(ph)) * math.sin(t)
            verts.append(np.asarray(center) + radius * d)
    faces = []
    for i in range(rings):
        for j in range(segments):
            a, b = i * segments + j, i * segments + (j + 1) % segments
            c, d = a + segments, b + segments
            faces += [[a, c, b], [b, c, d]]
    mesh = trimesh.Trimesh(np.array(verts), np.array(faces), process=True)
    mesh.update_faces(mesh.nondegenerate_faces())
    outward = np.einsum("ij,ij->i", mesh.face_normals, mesh.triangles_center - np.asarray(center))
    if np.mean(outward) < 0:
        mesh.invert()
    return mesh


# --- UniFi G6 Turret (built here from the datasheet and photos) ------------

def g6_turret_handmade() -> None:
    """The first G6 Turret, built from the datasheet and photos before Petr
    cleared using Ubiquiti's model. Kept for comparison:
    ``build_fixture_models.py --g6-handmade`` writes it as
    unifi-g6-turret-handmade.glb (not used by the viewer)."""
    import manifold3d  # noqa: F401  (trimesh booleans)

    r_base, h_total = 0.050, 0.095
    r_ball = 0.0435
    ball_c = np.array([0.0, 0.0, h_total - r_ball])
    # Shell: a Ø100 can cut by a plane, low on the side the lens looks
    # over (-Y, down on a wall), high at the back; the ball sits in it.
    can = trimesh.creation.cylinder(radius=r_base, height=0.072, sections=96)
    can.apply_translation([0, 0, 0.036])
    low, high = 0.045, 0.070
    slope = (high - low) / (2 * r_base)
    normal = np.array([0.0, -slope, 1.0])
    normal /= np.linalg.norm(normal)
    cutter = trimesh.creation.box(extents=[0.3, 0.3, 0.2])
    cutter.apply_translation([0, 0, 0.1])
    tilt = trimesh.geometry.align_vectors([0, 0, 1], normal)
    cutter.apply_transform(tilt)
    cutter.apply_translation([0, 0, (low + high) / 2])
    cup = trimesh.creation.icosphere(subdivisions=4, radius=r_ball + 0.0012)
    cup.apply_translation(ball_c)
    shell = can.difference(cutter).difference(cup)
    # Bottom ring: the darker swivel band 6-9 mm above the wall.
    groove_out = trimesh.creation.cylinder(radius=r_base + 0.001, height=0.003, sections=96)
    groove_out.apply_translation([0, 0, 0.0075])
    groove_in = trimesh.creation.cylinder(radius=r_base - 0.0012, height=0.004, sections=96)
    groove_in.apply_translation([0, 0, 0.0075])
    shell = decimate(shell.difference(groove_out), 3000, min_piece_mm=0.0)
    band = trimesh.creation.cylinder(radius=r_base - 0.0010, height=0.003, sections=96)
    band.apply_translation([0, 0, 0.0075])

    # Ball, its black window around the lens, and the lens. The ball is
    # built in rings around the lens axis so the window edge is a clean circle.
    lens_dir = np.array([0.0, -math.sin(math.radians(18)), math.cos(math.radians(18))])
    window = sphere_zone(r_ball, ball_c, lens_dir, 0.0, 60.0, 22)
    body_ball = sphere_zone(r_ball, ball_c, lens_dir, 60.0, 180.0, 28)
    # Lens: a dark ring and glass sitting just proud of the window.
    ring = trimesh.creation.annulus(r_min=0.0085, r_max=0.0125, height=0.0016, sections=64)
    glass = trimesh.creation.cylinder(radius=0.0088, height=0.0010, sections=64)
    place = trimesh.geometry.align_vectors([0, 0, 1], lens_dir)
    for part, out in ((ring, -0.0017), (glass, -0.0008)):
        part.apply_transform(place)
        part.apply_translation(ball_c + lens_dir * (r_ball + out))

    white = mat("g6-white-pc", srgb("f2f2ef"), 0.4)
    grey = mat("g6-band-grey", srgb("8a8c8e"), 0.5)
    black = mat("g6-window-black", srgb("0b0c0e"), 0.06)
    ring_m = mat("g6-lens-ring", srgb("1a1b1e"), 0.35, 0.4)
    lens_m = mat("g6-lens-glass", srgb("1c2a4a"), 0.03, 0.6)
    save(
        scene_of(
            {
                "shell": painted(smooth(shell), white),
                "band": painted(band, grey),
                "ball": painted(body_ball, white),
                "window": painted(window, black),
                "lens-ring": painted(smooth(ring), ring_m),
                "lens": painted(glass, lens_m),
            }
        ),
        "unifi-g6-turret-handmade",
    )


def ui_meshes(src: trimesh.Scene) -> dict[str, trimesh.Trimesh]:
    out = {}
    for node in src.graph.nodes_geometry:
        transform, geom = src.graph[node]
        mesh = src.geometry[geom].copy()
        mesh.apply_transform(transform)
        out[node] = mesh
    return out


def g6_turret() -> None:
    """Ubiquiti's store model, aimed for a wall and made light enough for a
    phone: Draco decoded (DracoPy), then gltf_transform() below. Roughness
    is one constant instead of the source's 2048 px map."""
    src = trimesh.load(fetch(UI_G6_TURRET_GLB, "ui-g6-turret.glb"))
    parts = ui_meshes(src)  # base, camera (the ball), glass
    # Source: Y up from the mount, lens looking along +X. Ours: +Z out of
    # the wall, the shell's low side (where the lens looks over) down (-Y).
    to_wall = np.array([[0, 0, -1, 0], [-1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 1]], float)
    for m in parts.values():
        m.apply_transform(to_wall)
    # Ball: least-squares sphere through the camera mesh; aim the lens out
    # of the wall, 18 degrees down, like a facade camera watching the path.
    ball = parts["camera"]
    a = np.c_[2 * ball.vertices, np.ones(len(ball.vertices))]
    sol, *_ = np.linalg.lstsq(a, (ball.vertices ** 2).sum(axis=1), rcond=None)
    centre = sol[:3]
    lens_now = parts["glass"].vertices.mean(axis=0) - centre
    lens_now /= np.linalg.norm(lens_now)
    lens_want = np.array([0.0, -math.sin(math.radians(18)), math.cos(math.radians(18))])
    aim = trimesh.geometry.align_vectors(lens_now, lens_want)
    aim = trimesh.transformations.translation_matrix(centre) @ aim @ trimesh.transformations.translation_matrix(-centre)
    for key in ("camera", "glass"):
        parts[key].apply_transform(aim)
    print(f"  ball centre {np.round(centre * 1000, 1)} mm, lens turned "
          f"{math.degrees(math.acos(np.clip(lens_now @ lens_want, -1, 1))):.0f} deg")

    atlas = parts["base"].visual.material.baseColorTexture.convert("RGB")
    body = mat("g6-white", (1.0, 1.0, 1.0), 0.42)
    body.baseColorTexture = atlas
    glass_m = mat("g6-glass", (1.0, 1.0, 1.0), 0.02, alpha=0.36)
    for key in ("base", "camera"):
        parts[key].visual = trimesh.visual.TextureVisuals(uv=parts[key].visual.uv, material=body)
    parts["glass"].visual = trimesh.visual.TextureVisuals(material=glass_m)
    full = CACHE / "unifi-g6-turret-full.glb"
    full.write_bytes(scene_of(parts).export(file_type="glb", include_normals=True))
    gltf_transform(full, OUT / "unifi-g6-turret.glb")
    report(OUT / "unifi-g6-turret.glb")


def gltf_transform(src: Path, dst: Path) -> None:
    """meshoptimizer's simplifier (keeps UV seams and creases far better than
    MeshLab's texture decimation on this mesh), base and ball joined into one
    draw call, the 2048 px atlas cut to 512 px, and quantized attributes
    (KHR_mesh_quantization: three.js reads it with no decoder)."""
    import subprocess
    import tempfile

    cli = os.environ.get("GLTF_TRANSFORM", "npx -y @gltf-transform/cli@4.5.1").split()
    with tempfile.TemporaryDirectory() as tmp:
        a, b = Path(tmp) / "a.glb", Path(tmp) / "b.glb"
        steps = [
            ["weld", str(src), str(a)],
            ["simplify", str(a), str(b), "--ratio", "0.1", "--error", "0.001"],
            ["join", str(b), str(a)],
            ["resize", str(a), str(b), "--width", "512", "--height", "512"],
            ["quantize", str(b), str(dst)],
        ]
        for step in steps:
            subprocess.run([*cli, *step], check=True, stdout=subprocess.DEVNULL)


def report(path: Path) -> None:
    # trimesh reads quantized positions without their normalisation, so no
    # extent here (the viewer check measures it: 100 x 100 x 97 mm).
    scene = trimesh.load(path)
    tris = sum(len(g.faces) for g in scene.geometry.values())
    print(f"{path.relative_to(ROOT)}: {path.stat().st_size / 1024:.0f} KB, {tris} triangles (quantized)")


if __name__ == "__main__":
    kama_d100()
    jung_switch()
    g6_turret()
    if "--g6-handmade" in __import__("sys").argv:
        g6_turret_handmade()
