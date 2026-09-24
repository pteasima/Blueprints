/**
 * Face depth bias must be a shader pull: polygonOffset is discarded once
 * logarithmic depth writes gl_FragDepth. The pull has to stay under the
 * edge-stroke bias or outlines sink behind the front-most layer.
 * Run: node layerDepthBias.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { EDGE_FRAG_DEPTH_BIAS } from "./edges.js";
import {
  LAYER_DEPTH_BIAS,
  LAYER_DEPTH_SHADER_REV,
  LAYER_FRAG_DEPTH_STEP,
  applyLayerDepthBias,
} from "./materials.js";

const top = Math.max(...Object.values(LAYER_DEPTH_BIAS));
assert.equal(top, 14);
// Constant step plus an equal grazing term (see applyLayerDepthBias).
const maxPull = top * LAYER_FRAG_DEPTH_STEP * 2;
assert.ok(
  maxPull < EDGE_FRAG_DEPTH_BIAS,
  `face pull ${maxPull} must stay under edge bias ${EDGE_FRAG_DEPTH_BIAS}`,
);

const plain = new THREE.MeshBasicMaterial();
applyLayerDepthBias(plain, 0);
assert.equal(plain.userData.layerDepthBias, 0);
assert.equal(plain.userData.layerDepthPatched, undefined);

const roof = new THREE.MeshBasicMaterial();
applyLayerDepthBias(roof, LAYER_DEPTH_BIAS.roofing);
assert.equal(roof.userData.layerDepthBias, 12);
assert.equal(roof.userData.layerDepthPatched, true);
assert.match(
  roof.customProgramCacheKey(),
  new RegExp(`bpLayerDepth-r${LAYER_DEPTH_SHADER_REV}-12`),
);

const shader = {
  uniforms: {},
  vertexShader: "void main() {}",
  fragmentShader:
    "#include <common>\n#include <logdepthbuf_fragment>\nvoid main() { gl_FragColor = vec4(1.0); }",
};
roof.onBeforeCompile(shader);
assert.match(shader.fragmentShader, /bpFaceBias = 12\.0 \*/);
assert.match(shader.fragmentShader, /gl_FragDepth -= bpFaceBias \+ bpGraze/);
assert.doesNotMatch(
  shader.fragmentShader,
  /#include <logdepthbuf_fragment>\s*\nvoid main/,
);

applyLayerDepthBias(roof, 3);
assert.equal(roof.userData.layerDepthBias, 12);
assert.match(roof.customProgramCacheKey(), /-12$/);
