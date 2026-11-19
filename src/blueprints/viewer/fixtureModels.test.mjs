/**
 * Real fixture models: which elements get a model, and where it sits.
 * Run from this directory: node fixtureModels.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { featureEdges, modelEdgePositions, mountPose, refDirectionOf, ruleFor, transformPositions } from "./fixtureModels.js";

// Rules: object type, narrowed by plan symbol / product note.
{
  assert.equal(ruleFor({ objectType: "Downlight", description: "D100" })?.model, "kama-d100");
  assert.equal(ruleFor({ objectType: "Downlight", description: "D55" }), null, "only the D100 is modelled");
  assert.equal(ruleFor({ objectType: "PushButton" })?.model, "jung-ls990");
  assert.equal(ruleFor({ objectType: "DoublePushButton" })?.model, "jung-ls995");
  assert.equal(ruleFor({ objectType: "Camera", description: "G6 Turret PoE venku" })?.model, "unifi-g6-turret");
  assert.equal(ruleFor({ objectType: "Camera", description: "G6 180" }), null);
  assert.equal(ruleFor(null), null);
}

// RefDirection from the yaml-ifc pset, normalised; default east.
{
  const el = { propertySets: [{ properties: {} }, { properties: { RefDirectionX: 0, RefDirectionY: 2 } }] };
  assert.deepEqual(refDirectionOf(el), [0, 1]);
  assert.deepEqual(refDirectionOf({}), [1, 0]);
}

const near = (a, b, msg) => assert.ok(a.distanceTo(b) < 1e-9, `${msg}: ${a.toArray()} vs ${b.toArray()}`);
const zAxis = (q) => new THREE.Vector3(0, 0, 1).applyQuaternion(q);
const yAxis = (q) => new THREE.Vector3(0, 1, 0).applyQuaternion(q);

// Wall device whose wall runs east (RefDirection +x): the room side is CAD
// +y (north), world -z; the model's back sits on the wall face of the box.
{
  const box = new THREE.Box3(new THREE.Vector3(-0.04, 0.96, -0.01), new THREE.Vector3(0.04, 1.04, 0.01));
  const pose = mountPose("wall", [1, 0], box);
  near(pose.normal, new THREE.Vector3(0, 0, -1), "normal");
  near(pose.position, new THREE.Vector3(0, 1, 0.01), "origin on the wall");
  near(zAxis(pose.quaternion), pose.normal, "+Z out of the wall");
  near(yAxis(pose.quaternion), new THREE.Vector3(0, 1, 0), "+Y up");
}

// Wall running north (RefDirection +y): room side CAD -x, world -x.
{
  const box = new THREE.Box3(new THREE.Vector3(-0.01, 0, 0), new THREE.Vector3(0.01, 0.08, 0.08));
  const pose = mountPose("wall", [0, 1], box);
  near(pose.normal, new THREE.Vector3(-1, 0, 0), "normal");
  near(pose.position, new THREE.Vector3(0.01, 0.04, 0.04), "origin on the wall");
}

// Ceiling: hangs from the top of the box, +Z pointing down.
{
  const box = new THREE.Box3(new THREE.Vector3(-0.05, 2.5, -0.05), new THREE.Vector3(0.05, 2.565, 0.05));
  const pose = mountPose("ceiling", [1, 0], box);
  near(pose.position, new THREE.Vector3(0, 2.565, 0), "origin at the ceiling");
  near(zAxis(pose.quaternion), new THREE.Vector3(0, -1, 0), "+Z down");
}

// Model edges: creases over the threshold, open borders, and the front
// outline (where the surface turns past 45 degrees from +Z).
{
  const I = new THREE.Matrix4();
  const segs = (a) => a.length / 6;
  const box = new THREE.BoxGeometry(0.08, 0.08, 0.02);
  assert.equal(segs(featureEdges(box, I, { threshold: 20 })), 12, "a box has 12 creases");
  assert.equal(segs(featureEdges(box, I, { threshold: 120 })), 0, "no crease is sharper than 120");
  assert.equal(segs(featureEdges(box, I, { threshold: 120, frontOutline: true })), 4, "the front face outline only");
  const plane = new THREE.PlaneGeometry(1, 1);
  assert.equal(segs(featureEdges(plane, I, { threshold: 20 })), 4, "open borders draw");
  assert.equal(segs(featureEdges(plane, I, { threshold: 20, borders: false })), 0);
  // Positions come out in the model frame and follow the host transform.
  const root = new THREE.Group();
  const mesh = new THREE.Mesh(plane);
  mesh.position.set(0, 0, 0.5);
  root.add(mesh);
  const pos = modelEdgePositions(root, { threshold: 20 });
  for (let i = 2; i < pos.length; i += 3) assert.ok(Math.abs(pos[i] - 0.5) < 1e-9);
  const moved = transformPositions(pos, new THREE.Matrix4().makeTranslation(1, 0, 0));
  assert.ok(Math.abs(moved[0] - pos[0] - 1) < 1e-9);
}

console.log("fixtureModels.test.mjs ok");
