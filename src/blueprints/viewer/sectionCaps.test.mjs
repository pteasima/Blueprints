/**
 * Solid section caps: a cut through a shell must fill the section, including
 * concave profiles, and must leave openings empty.
 * Run: node sectionCaps.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  cutCapBuffers,
  cutEdgeSegmentPositions,
  cutPlaneSegments,
  triangulateCutSegments,
  worldPlanesToLocal,
} from "./clipGeometry.js";

/**
 * @param {Float32Array} positions
 */
function areaOf(positions) {
  let area = 0;
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  const ab = new THREE.Vector3();
  const ac = new THREE.Vector3();
  for (let i = 0; i < positions.length; i += 9) {
    a.set(positions[i], positions[i + 1], positions[i + 2]);
    b.set(positions[i + 3], positions[i + 4], positions[i + 5]);
    c.set(positions[i + 6], positions[i + 7], positions[i + 8]);
    ab.subVectors(b, a);
    ac.subVectors(c, a);
    area += ab.cross(ac).length() * 0.5;
  }
  return area;
}

/**
 * Open extrusion: side walls only, so a mid cut has no real end face.
 * @param {number[][]} ring
 * @param {number} z0
 * @param {number} z1
 */
function extrudeWalls(ring, z0, z1) {
  /** @type {number[]} */
  const positions = [];
  const n = ring.length;
  for (let i = 0; i < n; i++) {
    const a = ring[i];
    const b = ring[(i + 1) % n];
    positions.push(
      a[0],
      a[1],
      z0,
      b[0],
      b[1],
      z0,
      b[0],
      b[1],
      z1,
      a[0],
      a[1],
      z0,
      b[0],
      b[1],
      z1,
      a[0],
      a[1],
      z1,
    );
  }
  const geom = new THREE.BufferGeometry();
  geom.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  return geom;
}

function totalArea(buffers) {
  return buffers.reduce((sum, cap) => sum + areaOf(cap.positions), 0);
}

// Closed box, one plane through the middle. Real end faces are elsewhere;
// the cut itself must still be a unit square.
{
  const geom = new THREE.BoxGeometry(1, 1, 2);
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const caps = cutCapBuffers(geom, [plane]);
  assert.equal(caps.length, 1);
  assert.ok(Math.abs(areaOf(caps[0].positions) - 1) < 1e-4, areaOf(caps[0].positions));
  // Kept side is +Z. The fill sits just inside that half-space, not on the cut.
  let minZ = Infinity;
  const pos = caps[0].positions;
  for (let i = 2; i < pos.length; i += 3) minZ = Math.min(minZ, pos[i]);
  assert.ok(minZ > 1e-5 && minZ < 1e-3, minZ);
  const edges = cutEdgeSegmentPositions(geom, [plane]);
  assert.ok(edges.length >= 24, "cut silhouette missing");
}

// Two opposing planes: both ends open, both filled. Same cache path.
{
  const geom = new THREE.BoxGeometry(1, 1, 2);
  const near = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0.5);
  const far = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0.5);
  const caps = cutCapBuffers(geom, [near, far]);
  assert.equal(caps.length, 2);
  for (const cap of caps) {
    assert.ok(Math.abs(areaOf(cap.positions) - 1) < 1e-4, areaOf(cap.positions));
  }
}

// Concave L profile, walls only.
{
  const L = [
    [0, 0],
    [3, 0],
    [3, 1],
    [1, 1],
    [1, 3],
    [0, 3],
  ];
  const geom = extrudeWalls(L, 0, 1);
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.5);
  const caps = cutCapBuffers(geom, [plane]);
  assert.equal(caps.length, 1);
  assert.ok(Math.abs(areaOf(caps[0].positions) - 5) < 1e-3, areaOf(caps[0].positions));
}

// Square tube: outer 4×4, hole 2×2. The opening stays empty (area 12, not 16).
{
  const outer = [
    [-2, -2],
    [2, -2],
    [2, 2],
    [-2, 2],
  ];
  const inner = [
    [-1, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
  ];
  const geom = extrudeWalls(outer.concat(), 0, 1);
  const innerGeom = extrudeWalls(inner, 0, 1);
  const merged = new Float32Array(
    geom.getAttribute("position").array.length +
      innerGeom.getAttribute("position").array.length,
  );
  merged.set(geom.getAttribute("position").array, 0);
  merged.set(
    innerGeom.getAttribute("position").array,
    geom.getAttribute("position").array.length,
  );
  const frame = new THREE.BufferGeometry();
  frame.setAttribute("position", new THREE.BufferAttribute(merged, 3));
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.5);
  const caps = cutCapBuffers(frame, [plane]);
  const area = totalArea(caps);
  assert.ok(Math.abs(area - 12) < 1e-2, area);
}

// Faces live on separate meshes. The fill is the loop around the whole part.
{
  const L = [
    [0, 0],
    [3, 0],
    [3, 1],
    [1, 1],
    [1, 3],
    [0, 3],
  ];
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -0.5);
  /** @type {THREE.Vector3[][]} */
  const segs = [];
  for (let i = 0; i < L.length; i++) {
    const a = L[i];
    const b = L[(i + 1) % L.length];
    const positions = [
      a[0], a[1], 0, b[0], b[1], 0, b[0], b[1], 1,
      a[0], a[1], 0, b[0], b[1], 1, a[0], a[1], 1,
    ];
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const mesh = new THREE.Mesh(geom);
    mesh.updateMatrixWorld(true);
    const local = worldPlanesToLocal([plane], mesh.matrixWorld);
    for (const pair of cutPlaneSegments(geom, local)[0] || []) {
      segs.push([
        pair[0].clone().applyMatrix4(mesh.matrixWorld),
        pair[1].clone().applyMatrix4(mesh.matrixWorld),
      ]);
    }
  }
  const positions = triangulateCutSegments(segs, plane);
  assert.ok(Math.abs(areaOf(positions) - 5) < 1e-3, areaOf(positions));
}

console.log("sectionCaps.test.mjs: ok");
