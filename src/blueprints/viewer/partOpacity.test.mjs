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

console.log("partOpacity.test.mjs: ok");
