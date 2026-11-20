// node scripts/model_budget.test.mjs (run by .github/workflows/model-budget.yml)
import assert from "node:assert/strict";
import { glbJson, modelStats, checkBudget } from "./model_budget.mjs";

function glb(json) {
  let body = Buffer.from(JSON.stringify(json));
  body = Buffer.concat([body, Buffer.alloc((4 - (body.length % 4)) % 4, 0x20)]);
  const head = Buffer.alloc(20);
  head.writeUInt32LE(0x46546c67, 0); head.writeUInt32LE(2, 4);
  head.writeUInt32LE(20 + body.length, 8); head.writeUInt32LE(body.length, 12);
  head.writeUInt32LE(0x4e4f534a, 16);
  return Buffer.concat([head, body]);
}

const attrs = { POSITION: 0, NORMAL: 0 };
const gltf = {
  accessors: [{ count: 30 }, { count: 6 }],
  materials: [{}, {}],
  meshes: [
    // one element, five CAD faces in two materials -> two draws after the merge
    { primitives: [0, 0, 0, 1, 1].map((m) => ({ attributes: attrs, indices: 1, material: m })) },
    { primitives: [{ attributes: attrs, indices: 1, material: 0 }] },
  ],
  nodes: [{ name: "root", children: [1, 2] }, { name: "a", mesh: 0 }, { name: "b", mesh: 1 }],
};

const stats = modelStats(glbJson(glb(gltf)), 2 * 1048576);
assert.deepEqual(
  { ...stats },
  { nodes: 3, meshNodes: 2, draws: 3, faces: 6, triangles: 12, materials: 2, megabytes: 2,
    maxNodeTriangles: 10, maxNodeFaces: 5, heaviest: "a", mostFaces: "a" },
);
assert.deepEqual(checkBudget(stats, { draws: 3, faces: 5 }), ["faces 6 > 5"]);
assert.throws(() => glbJson(Buffer.from("version https://git-lfs.github.com/spec/v1\noid sha256:00\n")), /LFS pointer/);
console.log("model_budget ok");
