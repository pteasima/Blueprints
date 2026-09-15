/**
 * Smoke: Solid MeshBasic → AR MeshStandard so USDZExporter keeps meshes.
 * Run: node arExportMaterial.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { USDZExporter } from "three/addons/exporters/USDZExporter.js";
import { toArExportMaterial } from "./materials.js";
import { meshToClippedExportMesh } from "./clipGeometry.js";

const basic = new THREE.MeshBasicMaterial({ color: 0xe67314 });
const converted = toArExportMaterial(basic);
assert.equal(converted.isMeshStandardMaterial, true);
assert.equal(converted.isMeshBasicMaterial, undefined);
assert.ok(converted.color.equals(basic.color));
assert.equal(converted.side, THREE.FrontSide);

const geom = new THREE.BoxGeometry(1, 1, 1);
const mesh = new THREE.Mesh(geom, basic);
mesh.updateMatrixWorld(true);
const clipped = meshToClippedExportMesh(mesh, []);
assert.ok(clipped);
assert.equal(clipped.material.isMeshStandardMaterial, true);

const group = new THREE.Group();
group.add(clipped);
const buf = await new USDZExporter().parseAsync(group, {
  quickLookCompatible: true,
  includeAnchoringProperties: true,
});
assert.ok(buf.byteLength > 500, `USDZ too small (${buf.byteLength}) — meshes likely dropped`);

const text = new TextDecoder().decode(buf);
// Zip local headers include "model.usda"; USDA should mention Materials.
assert.ok(text.includes("model.usda") || text.includes("Materials"), "USDZ missing model payload");

console.log("arExportMaterial.test.mjs: ok", { bytes: buf.byteLength });
