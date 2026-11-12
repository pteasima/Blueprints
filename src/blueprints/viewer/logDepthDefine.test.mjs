/**
 * The edge and face depth-bias patches only work if their `#if` names the
 * define the pinned three.js really sets for logarithmic depth. three r180
 * renamed USE_LOGDEPTHBUF to USE_LOGARITHMIC_DEPTH_BUFFER; the stale name
 * sent every edge stroke to the linear branch and hid most edges.
 * Run: node logDepthDefine.test.mjs
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { LOG_DEPTH_DEFINED } from "./materials.js";

const chunk = THREE.ShaderChunk.logdepthbuf_fragment;
const used = [...chunk.matchAll(/\b(USE_LOG[A-Z_]+)\b/g)].map((m) => m[1]);
assert.ok(used.length > 0, "logdepthbuf_fragment names a log-depth define");
for (const name of used) {
  assert.ok(
    LOG_DEPTH_DEFINED.includes(`defined( ${name} )`),
    `LOG_DEPTH_DEFINED must test ${name}, the define three ${THREE.REVISION} uses`,
  );
}

for (const file of ["edges.js", "materials.js"]) {
  const src = readFileSync(new URL(`./${file}`, import.meta.url), "utf8");
  assert.ok(src.includes("#if ${LOG_DEPTH_DEFINED}"), `${file} guards its bias with LOG_DEPTH_DEFINED`);
  assert.ok(!/#if defined\( USE_LOGDEPTHBUF \)/.test(src), `${file} has no bare USE_LOGDEPTHBUF guard`);
}

console.log(`logDepthDefine: ok (three r${THREE.REVISION}, ${used.join(", ")})`);
