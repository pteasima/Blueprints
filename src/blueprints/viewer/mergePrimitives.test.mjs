import assert from "node:assert/strict";
import * as THREE from "three";
import { gltfPrimitiveTest, mergeSiblingPrimitives, primitiveGeometries } from "./mergePrimitives.js";

function quad(z) {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array([0, 0, z, 1, 0, z, 1, 1, z, 0, 1, z]), 3));
  g.setAttribute("normal", new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), 2));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
}

// A GLTFLoader-shaped scene: element node (Group) with three face primitives
// (two share a material), plus two single-primitive node meshes of one id.
const oak = new THREE.MeshStandardMaterial();
const steel = new THREE.MeshStandardMaterial();
const assoc = new Map();
const root = new THREE.Group();
const node = new THREE.Group();
node.name = "cabinet__SF-1__";
root.add(node);
const faces = [quad(0), quad(1), quad(2)].map((g, i) => {
  const m = new THREE.Mesh(g, i === 2 ? steel : oak);
  m.name = i ? `cabinet__SF-1___${i}` : "cabinet__SF-1__";
  assoc.set(m, { meshes: 0, primitives: i });
  node.add(m);
  return m;
});
faces[1].position.set(0, 0, 0); // identity: still merges
const paneA = new THREE.Mesh(quad(5), oak);
const paneB = new THREE.Mesh(quad(6), oak);
paneA.name = paneB.name = "glazing__WIN-1__";
assoc.set(paneA, { meshes: 1, primitives: 0, nodes: 2 });
assoc.set(paneB, { meshes: 2, primitives: 0, nodes: 3 });
root.add(paneA, paneB);

const stats = mergeSiblingPrimitives(root, { isPrimitive: gltfPrimitiveTest({ parser: { associations: assoc } }) });
assert.deepEqual(stats, { before: 5, after: 4 });
assert.equal(node.children.length, 2, "oak faces merged, steel face stays");
const merged = node.children.find((c) => c.material === oak);
assert.equal(merged.name, "cabinet__SF-1__");
assert.equal(merged.userData.bpMergedPrimitives, 2);
assert.equal(merged.geometry.getAttribute("position").count, 8);
assert.deepEqual([...merged.geometry.index.array], [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7]);
assert.deepEqual([...merged.geometry.userData.bpPrimitiveRanges], [0, 4, 0, 6, 4, 4, 6, 6]);
assert.ok(root.children.includes(paneA) && root.children.includes(paneB), "node meshes never merge");

// The faces come back out for per-face analysis (edges.js).
const back = primitiveGeometries(merged.geometry);
assert.equal(back.length, 2);
assert.equal(back[1].getAttribute("position").getZ(0), 1);
assert.deepEqual([...back[1].index.array], [0, 1, 2, 0, 2, 3]);
assert.equal(primitiveGeometries(paneA.geometry)[0], paneA.geometry);

// A primitive with its own transform is baked into the merged positions.
const node2 = new THREE.Group();
const a = new THREE.Mesh(quad(0), oak);
const b = new THREE.Mesh(quad(0), oak);
b.position.set(10, 0, 0);
assoc.set(a, { meshes: 3, primitives: 0 });
assoc.set(b, { meshes: 3, primitives: 1 });
node2.add(a, b);
mergeSiblingPrimitives(node2, { isPrimitive: gltfPrimitiveTest({ parser: { associations: assoc } }) });
assert.equal(node2.children.length, 1);
assert.equal(node2.children[0].geometry.getAttribute("position").getX(4), 10);

// keepSeparate leaves a node alone (operable windows, main.js).
const node3 = new THREE.Group();
node3.name = "glazing__WIN-2__";
const c = new THREE.Mesh(quad(0), oak);
const d = new THREE.Mesh(quad(1), oak);
assoc.set(c, { meshes: 4, primitives: 0 });
assoc.set(d, { meshes: 4, primitives: 1 });
node3.add(c, d);
mergeSiblingPrimitives(node3, { isPrimitive: gltfPrimitiveTest({ parser: { associations: assoc } }), keepSeparate: (n) => n === node3 });
assert.equal(node3.children.length, 2);

console.log("mergePrimitives.test.mjs: ok");
