/**
 * Outline resolution + opacity material flags.
 * Run: node partOpacity.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  PART_GROUPS,
  applyOpacityToMeshes,
  collectLeafIds,
  resolvePartOutline,
} from "./materials.js";
import { MAX_PEELS, USE_DEPTH_PEEL, VIEW_Z_EPSILON } from "./depthPeel.js";

// --- Outline ---
const outline = resolvePartOutline([
  "zdivo",
  "eps",
  "krov",
  "podlaha",
  "sklo",
  "nabytek",
]);
const ids = outline.map((n) => n.id);
assert.ok(ids.includes("walls"));
assert.ok(ids.includes("roof"));
assert.ok(ids.includes("interior"));
assert.ok(ids.includes("other"), "leftover labels go under Other");

const walls = outline.find((n) => n.id === "walls");
assert.equal(walls?.type, "group");
const wallLeaves = collectLeafIds(walls);
assert.deepEqual(wallLeaves.sort(), ["eps", "zdivo"].sort());

const other = outline.find((n) => n.id === "other");
assert.ok(collectLeafIds(other).includes("sklo"));

const empty = resolvePartOutline([]);
assert.equal(empty.length, 0);

const allLeafIds = new Set();
for (const g of PART_GROUPS) {
  for (const c of g.children) {
    if (typeof c === "string") allLeafIds.add(c);
  }
}
assert.ok(allLeafIds.has("krytina"));

// --- Opacity flags ---
const geom = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geom, mat);
mesh.userData.opaqueRenderOrder = 12;
mesh.renderOrder = 12;

applyOpacityToMeshes([mesh], 0);
assert.equal(mesh.visible, false);

applyOpacityToMeshes([mesh], 0.4);
assert.equal(mesh.visible, true);
assert.equal(mat.transparent, true);
assert.equal(mat.opacity, 0.4);
assert.equal(mat.depthWrite, false);
assert.equal(mat.userData.needsDepthPeel, true);
assert.equal(mat.side, THREE.DoubleSide);
assert.equal(mat.forceSinglePass, true);
assert.equal(mesh.renderOrder, 0, "faded meshes must not use opaque depth bias");

applyOpacityToMeshes([mesh], 1);
assert.equal(mesh.visible, true);
assert.equal(mat.transparent, false);
assert.equal(mat.opacity, 1);
assert.equal(mat.depthWrite, true);
assert.equal(mat.userData.needsDepthPeel, false);
assert.equal(mat.forceSinglePass, false);
assert.equal(mesh.renderOrder, 12, "opaque restores stored depth bias");

assert.ok(MAX_PEELS >= 4);
assert.ok(MAX_PEELS <= 8, "keep peel count modest for perf");
assert.ok(VIEW_Z_EPSILON > 0 && VIEW_Z_EPSILON < 0.01);
assert.equal(USE_DEPTH_PEEL, true, "hardened peels are the fade path");

console.log("partOpacity.test.mjs: ok");
