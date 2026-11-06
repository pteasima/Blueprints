/**
 * Hinged-door tap vs drag, swing about a turned root, and splitting a merged leaf.
 * Run from this directory: node doors.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  DOOR_SWING_MS,
  DOOR_SWING_RAD,
  classifyPointerGesture,
  easeInOutCubic,
  matchDoorHosts,
  sampleDoor,
  setPivotSwing,
  splitDisconnectedMesh,
  swingAngle,
  toggleDoor,
  triangleComponents,
  bindHinge,
} from "./doors.js";

assert.equal(easeInOutCubic(0), 0);
assert.equal(easeInOutCubic(1), 1);
assert.ok(Math.abs(easeInOutCubic(0.5) - 0.5) < 1e-9);
assert.ok(easeInOutCubic(0.25) < 0.25);

assert.equal(classifyPointerGesture({ dx: 0, dy: 0 }), "tap");
assert.equal(classifyPointerGesture({ dx: 11, dy: 0 }), "tap");
assert.equal(classifyPointerGesture({ dx: 13, dy: 0 }), "drag");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, pointers: 2 }), "ignore");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, button: 2 }), "ignore");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, blocked: true }), "ignore");
assert.equal(classifyPointerGesture({ dx: 0, dy: 0, modifiers: true }), "ignore");

assert.equal(swingAngle(1, 1), DOOR_SWING_RAD);
assert.equal(swingAngle(1, -1), -DOOR_SWING_RAD);

const binding = { goal: 0, anim: null };
toggleDoor(binding, 1000);
assert.equal(sampleDoor(binding, 1000), 0);
assert.ok(sampleDoor(binding, 1000 + DOOR_SWING_MS / 2) > 0.4);
assert.equal(sampleDoor(binding, 1000 + DOOR_SWING_MS), 1);
assert.equal(binding.anim, null);

// Two panels welded into one index buffer stay two components.
const index = [0, 1, 2, 2, 1, 3, 4, 5, 6];
const groups = triangleComponents(index);
assert.equal(groups.length, 2);

function panelGeometry(w, t, h) {
  const geom = new THREE.BoxGeometry(w, t, h);
  geom.translate(w / 2, t / 2, h / 2);
  return geom;
}

// Merged mesh: two leaves with a gap. Split yields two pickable meshes.
{
  const a = panelGeometry(0.8, 0.04, 2.1);
  const b = panelGeometry(0.8, 0.04, 2.1);
  b.translate(3, 0, 0);
  const merged = new THREE.BufferGeometry();
  const pa = a.getAttribute("position");
  const pb = b.getAttribute("position");
  const positions = new Float32Array(pa.count * 3 + pb.count * 3);
  positions.set(pa.array, 0);
  positions.set(pb.array, pa.count * 3);
  merged.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const ia = a.getIndex().array;
  const ib = b.getIndex().array;
  const indices = new Uint32Array(ia.length + ib.length);
  indices.set(ia, 0);
  for (let i = 0; i < ib.length; i++) indices[ia.length + i] = ib[i] + pa.count;
  merged.setIndex(new THREE.BufferAttribute(indices, 1));
  const parent = new THREE.Group();
  const mesh = new THREE.Mesh(merged);
  mesh.name = "door";
  parent.add(mesh);
  const parts = splitDisconnectedMesh(mesh);
  assert.equal(parts.length, 2);
  assert.equal(parent.children.length, 2);
  const centers = parts.map((part) => {
    part.geometry.computeBoundingBox();
    return part.geometry.boundingBox.getCenter(new THREE.Vector3()).x;
  });
  centers.sort((p, q) => p - q);
  assert.ok(Math.abs(centers[0] - 0.4) < 1e-4);
  assert.ok(Math.abs(centers[1] - 3.4) < 1e-4);
}

// Root is the glTF Z-up rotation. The leaf's hinge is its start edge.
// +90° about world Y carries the free edge onto local +Y.
{
  const root = new THREE.Group();
  root.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
  const door = new THREE.Mesh(panelGeometry(0.8, 0.04, 2.1));
  door.name = "door";
  door.position.set(5, 1.2, 0);
  root.add(door);
  const scene = new THREE.Scene();
  scene.add(root);
  root.updateWorldMatrix(true, true);

  const hingeLocal = new THREE.Vector3(0, 0.02, 1.05);
  const farLocal = new THREE.Vector3(0.8, 0.02, 1.05);
  const hingeWorld = door.localToWorld(hingeLocal.clone());
  const farBefore = door.localToWorld(farLocal.clone());
  const centerWorld = new THREE.Box3().setFromObject(door).getCenter(new THREE.Vector3());

  const record = {
    id: "D-TEST",
    kind: "hinged",
    center: [centerWorld.x, centerWorld.y, centerWorld.z],
    hinge: [hingeWorld.x, hingeWorld.y, hingeWorld.z],
    axis: [0, 1, 0],
    sign: 1,
  };
  const host = { host: door, center: centerWorld };
  const pairs = matchDoorHosts([host], [record]);
  assert.equal(pairs.length, 1);

  const binding = bindHinge(door, record);
  assert.ok(binding);
  // Closed pose is unchanged.
  const farClosed = door.localToWorld(farLocal.clone());
  assert.ok(farClosed.distanceTo(farBefore) < 1e-4);

  setPivotSwing(binding.pivot, swingAngle(1, 1));
  binding.pivot.updateWorldMatrix(true, true);
  const farOpen = door.localToWorld(farLocal.clone());
  const hingeAfter = door.localToWorld(hingeLocal.clone());
  assert.ok(hingeAfter.distanceTo(hingeWorld) < 1e-4, "hinge stays put");

  const offset = farBefore.clone().sub(hingeWorld);
  const swung = offset.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
  const expected = hingeWorld.clone().add(swung);
  assert.ok(farOpen.distanceTo(expected) < 1e-4, `${farOpen.toArray()} vs ${expected.toArray()}`);
  // The free edge moved about 0.8 m, not through the floor.
  assert.ok(farOpen.distanceTo(farBefore) > 0.7);
  assert.ok(Math.abs(farOpen.y - farBefore.y) < 1e-4);
}

console.log("doors.test.mjs ok");
