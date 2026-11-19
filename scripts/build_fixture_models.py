#!/usr/bin/env python3
"""Build the real fixture models the viewer draws instead of boxes.

Facts, sources and what was guessed: docs/electrical/FixtureModels.md.

    uv run --with trimesh --with numpy --with scipy --with pymeshlab \
        --with remotezip --with manifold3d --with networkx \
        python scripts/build_fixture_models.py

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
    body = decimate(meshes["GLTF"], 5000)
    diffuser = meshes["GLTF_1"]
    white = mat("d100-body-white", srgb("f4f4f2"), 0.45)
    opal = mat("d100-diffuser-opal", srgb("eceae4"), 0.6)
    save(scene_of({"body": painted(smooth(body), white), "diffuser": painted(diffuser, opal)}), "kama-d100")


# --- Jung LS 990 rocker in a LS 981 frame (Jung's own OBJ) -----------------

def jung_switch() -> None:
    gloss = mat("jung-ls-ww", JUNG_WW, 0.18)
    frame = decimate(front_faces(jung_obj("frame-1gang"), 0.0005), 2500)
    one = decimate(front_faces(jung_obj("rocker-1gang"), 0.0085), 3000)
    save(scene_of({"frame": painted(smooth(frame), gloss), "rocker": painted(smooth(one), gloss)}), "jung-ls990")

    two = front_faces(jung_obj("rocker-2gang"), 0.0085)
    centroids = two.triangles_center[:, 0]
    halves = {}
    for name, sel in (("rocker-1", centroids < 0), ("rocker-2", centroids >= 0)):
        half = two.submesh([np.nonzero(sel)[0]], append=True)
        half.remove_unreferenced_vertices()
        halves[name] = painted(smooth(decimate(half, 2000)), gloss)
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

def g6_turret() -> None:
    """Ubiquiti's own 3D model may not be copied (ui.com terms), so this is
    ours: datasheet size, proportions read off the product photos."""
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
        "unifi-g6-turret",
    )


if __name__ == "__main__":
    kama_d100()
    jung_switch()
    g6_turret()
