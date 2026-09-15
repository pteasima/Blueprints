/**
 * Clip indexed/non-indexed BufferGeometry against planes (keep positive half-space).
 * Used to bake WebGL section cuts into meshes for USDZ export.
 */
import * as THREE from "three";
import { toArExportMaterial } from "./materials.js";

const EPS = 1e-5;

/** @param {THREE.Vector3} a @param {THREE.Vector3} b @param {number} da @param {number} db */
function lerpVertex(a, b, da, db) {
  const t = da / (da - db);
  return a.clone().lerp(b, t);
}

/**
 * @param {[THREE.Vector3, THREE.Vector3, THREE.Vector3]} tri
 * @param {THREE.Plane} plane
 * @param {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>} out
 */
function clipTriangle(tri, plane, out) {
  const [v0, v1, v2] = tri;
  const d0 = plane.distanceToPoint(v0);
  const d1 = plane.distanceToPoint(v1);
  const d2 = plane.distanceToPoint(v2);
  const in0 = d0 >= -EPS;
  const in1 = d1 >= -EPS;
  const in2 = d2 >= -EPS;
  const count = (in0 ? 1 : 0) + (in1 ? 1 : 0) + (in2 ? 1 : 0);

  if (count === 3) {
    out.push([v0, v1, v2]);
    return;
  }
  if (count === 0) return;

  const verts = [v0, v1, v2];
  const dists = [d0, d1, d2];
  const inside = [in0, in1, in2];

  if (count === 1) {
    const i0 = inside.findIndex(Boolean);
    const i1 = (i0 + 1) % 3;
    const i2 = (i0 + 2) % 3;
    const a = verts[i0];
    const b = lerpVertex(verts[i0], verts[i1], dists[i0], dists[i1]);
    const c = lerpVertex(verts[i0], verts[i2], dists[i0], dists[i2]);
    out.push([a, b, c]);
    return;
  }

  // Two vertices inside → clip to a quad (two triangles).
  const o0 = inside.findIndex((v) => !v);
  const o1 = (o0 + 1) % 3;
  const o2 = (o0 + 2) % 3;
  if (inside[o1]) {
    const a = verts[o1];
    const b = verts[o2];
    const c = lerpVertex(verts[o0], verts[o1], dists[o0], dists[o1]);
    const d = lerpVertex(verts[o0], verts[o2], dists[o0], dists[o2]);
    out.push([a, b, c]);
    out.push([b, d, c]);
  } else {
    const a = verts[o2];
    const b = lerpVertex(verts[o0], verts[o1], dists[o0], dists[o1]);
    const c = lerpVertex(verts[o0], verts[o2], dists[o0], dists[o2]);
    out.push([a, b, c]);
  }
}

/**
 * @param {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>} tris
 * @param {THREE.Plane[]} planes
 */
function clipTriangles(tris, planes) {
  let current = tris;
  for (const plane of planes) {
    const next = [];
    for (const tri of current) clipTriangle(tri, plane, next);
    current = next;
    if (current.length === 0) break;
  }
  return current;
}

/**
 * @param {THREE.BufferGeometry} geometry
 * @param {THREE.Matrix4} matrixWorld
 * @returns {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>}
 */
function extractWorldTriangles(geometry, matrixWorld) {
  const pos = geometry.getAttribute("position");
  if (!pos) return [];
  const tmp = new THREE.Vector3();
  const tris = [];
  const index = geometry.getIndex();

  function pushTri(i0, i1, i2) {
    tris.push([
      tmp.fromBufferAttribute(pos, i0).applyMatrix4(matrixWorld).clone(),
      tmp.fromBufferAttribute(pos, i1).applyMatrix4(matrixWorld).clone(),
      tmp.fromBufferAttribute(pos, i2).applyMatrix4(matrixWorld).clone(),
    ]);
  }

  if (index) {
    for (let i = 0; i < index.count; i += 3) {
      pushTri(index.getX(i), index.getX(i + 1), index.getX(i + 2));
    }
  } else {
    for (let i = 0; i < pos.count; i += 3) {
      pushTri(i, i + 1, i + 2);
    }
  }
  return tris;
}

/**
 * @param {Array<[THREE.Vector3, THREE.Vector3, THREE.Vector3]>} tris
 * @returns {THREE.BufferGeometry}
 */
function trianglesToGeometry(tris) {
  const positions = new Float32Array(tris.length * 9);
  let o = 0;
  for (const [a, b, c] of tris) {
    positions[o++] = a.x;
    positions[o++] = a.y;
    positions[o++] = a.z;
    positions[o++] = b.x;
    positions[o++] = b.y;
    positions[o++] = b.z;
    positions[o++] = c.x;
    positions[o++] = c.y;
    positions[o++] = c.z;
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geom.computeVertexNormals();
  return geom;
}

/**
 * Bake clipping planes into mesh geometry (world space).
 * @param {THREE.Mesh} mesh
 * @param {THREE.Plane[]} planes
 * @returns {THREE.Mesh | null}
 */
export function meshToClippedExportMesh(mesh, planes) {
  if (!mesh.visible || !mesh.geometry) return null;
  const tris = extractWorldTriangles(mesh.geometry, mesh.matrixWorld);
  if (tris.length === 0) return null;
  const clipped = planes.length ? clipTriangles(tris, planes) : tris;
  if (clipped.length === 0) return null;

  const geom = trianglesToGeometry(clipped);
  // MeshBasic (Solid) and other non-standard mats must become MeshStandardMaterial
  // or THREE.USDZExporter silently drops the mesh → empty/broken AR.
  const exportMat = toArExportMaterial(mesh.material, geom);
  const out = new THREE.Mesh(geom, exportMat);
  out.name = mesh.name;
  return out;
}
