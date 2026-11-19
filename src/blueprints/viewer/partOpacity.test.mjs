/**
 * Outline resolution + opacity material flags + group opacity expansion.
 * Run: node partOpacity.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  PART_GROUPS,
  applyOpacityToMeshes,
  collectLeafIds,
  expandOpacityGroups,
  resolvePartOutline,
} from "./materials.js";
import {
  MAX_PEELS,
  MAX_PEELS_FAST,
  MAX_PEELS_HIGH,
  USE_DEPTH_PEEL,
  VIEW_Z_EPSILON,
  isSeeThroughOpacity,
} from "./depthPeel.js";

const OBYVAK_GROUPS = [
  {
    id: "shell",
    children: ["floor", "masonry", "eps", "plaster"],
  },
  {
    id: "slopes",
    children: ["slope_naturheld_140", "slope_gkf"],
  },
  {
    id: "soffit",
    children: ["soffit_naturheld_140", "soffit_gkf", "soffit_battens"],
  },
  {
    id: "furniture",
    children: ["furniture"],
  },
];

const outline = resolvePartOutline(
  [
    "floor",
    "masonry",
    "slope_naturheld_140",
    "soffit_naturheld_140",
    "soffit_gkf",
    "glazing",
    "furniture",
  ],
  OBYVAK_GROUPS,
  (id) => `L:${id}`,
);
const ids = outline.map((n) => n.id);
assert.ok(ids.includes("shell"));
assert.ok(ids.includes("slopes"));
assert.ok(ids.includes("soffit"));
assert.ok(ids.includes("furniture"));
assert.ok(ids.includes("other"), "leftover labels go under Other");

const shell = outline.find((n) => n.id === "shell");
assert.equal(shell?.type, "group");
assert.equal(shell.label, "L:shell");
assert.deepEqual(collectLeafIds(shell).sort(), ["floor", "masonry"].sort());

const other = outline.find((n) => n.id === "other");
assert.ok(collectLeafIds(other).includes("glazing"));
assert.equal(other.children[0].label, "L:glazing");

const empty = resolvePartOutline([]);
assert.equal(empty.length, 0);

assert.deepEqual(PART_GROUPS, []);

const expanded = expandOpacityGroups(
  { soffit: 1, plaster: 1 },
  outline,
);
assert.equal(expanded.soffit_naturheld_140, 1);
assert.equal(expanded.soffit_gkf, 1);
assert.equal(expanded.plaster, 1);
assert.equal(expanded.slope_naturheld_140, undefined);

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

// Edge overlays must fade with the parent mesh.
const edgeMat = new THREE.LineBasicMaterial({ color: 0x000000 });
const edge = new THREE.LineSegments(
  new THREE.BufferGeometry(),
  edgeMat,
);
edge.userData.isEdgeOverlay = true;
mesh.add(edge);

applyOpacityToMeshes([mesh], 0.35);
assert.equal(edgeMat.transparent, true);
assert.equal(edgeMat.opacity, 0.35);
assert.equal(edgeMat.depthWrite, false);

applyOpacityToMeshes([mesh], 0.35, { edgeMode: "opaque" });
assert.equal(edgeMat.transparent, false);
assert.equal(edgeMat.opacity, 1, "opaque edge mode keeps full stroke alpha");

applyOpacityToMeshes([mesh], 1);
assert.equal(edgeMat.transparent, false);
assert.equal(edgeMat.opacity, 1);

assert.ok(MAX_PEELS_FAST >= 4 && MAX_PEELS_FAST <= 8);
assert.ok(MAX_PEELS_HIGH >= MAX_PEELS_FAST);
assert.equal(MAX_PEELS, MAX_PEELS_HIGH);
assert.ok(VIEW_Z_EPSILON > 0 && VIEW_Z_EPSILON < 0.01);
assert.equal(USE_DEPTH_PEEL, true, "hardened peels are the fade path");

// Hiding a layer (0%) or showing it fully (100%) is not a fade: no peel,
// and the material ends up exactly opaque (Petr, 2026-11-19: the floor went
// dark whenever anything was hidden).
assert.equal(isSeeThroughOpacity(0), false, "0% hides; no peel");
assert.equal(isSeeThroughOpacity(1), false);
assert.equal(isSeeThroughOpacity(0.5), true);
assert.equal(isSeeThroughOpacity(Number.NaN), false);
{
  const mat = new THREE.MeshStandardMaterial();
  const m = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), mat);
  applyOpacityToMeshes([m], 0);
  assert.equal(m.visible, false, "0% sets visible = false");
  assert.equal(mat.transparent, false, "0% leaves the material opaque");
  assert.equal(mat.depthWrite, true);
  applyOpacityToMeshes([m], 0.5);
  assert.equal(mat.transparent, true);
  applyOpacityToMeshes([m], 1);
  assert.equal(m.visible, true);
  assert.equal(mat.transparent, false, "100% restores an opaque material");
  assert.equal(mat.depthWrite, true);
  assert.equal(mat.opacity, 1);
}

console.log("partOpacity.test.mjs: ok");
