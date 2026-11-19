/**
 * Real fixture models: which elements get a model, and where it sits.
 * Run from this directory: node fixtureModels.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { mountPose, refDirectionOf, ruleFor } from "./fixtureModels.js";

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

console.log("fixtureModels.test.mjs ok");
