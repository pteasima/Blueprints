#!/usr/bin/env node
// Performance budget for the viewer's ground-floor model (docs/viewer/Performance.md,
// "Modeling rules and budget"). Reads the GLBs' JSON chunk only (no three.js), so it
// runs in seconds with plain Node. Fails (exit 1) when a model goes over its limit.
//
//   node scripts/model_budget.mjs            # check docs/models/ground_floor*.glb
//   node scripts/model_budget.mjs --json     # print the numbers only
//
// "draws" estimates what the viewer draws after mergePrimitives.js: one mesh per
// element node and material (plus attribute set), not one per CAD face.
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

// Limits: about 1.5x the numbers on 2026-11-20 (PR 133). Raise one only on purpose,
// in the same PR as the model change, and say why in the PR description.
export const BUDGETS = {
  "docs/models/ground_floor.glb": {
    nodes: 1900, meshNodes: 1900, draws: 1900, faces: 13500, triangles: 55000,
    materials: 40, megabytes: 10, maxNodeTriangles: 5000, maxNodeFaces: 1000,
  },
  "docs/models/ground_floor.gridfinity.glb": {
    nodes: 40, meshNodes: 40, draws: 40, faces: 18000, triangles: 57000,
    materials: 4, megabytes: 12, maxNodeTriangles: 5000, maxNodeFaces: 1200,
  },
};

export function glbJson(buf) {
  if (buf.readUInt32LE(0) !== 0x46546c67) {
    const head = buf.subarray(0, 60).toString("utf8");
    if (head.startsWith("version https://git-lfs")) throw new Error("Git LFS pointer, not a GLB (check out with LFS)");
    throw new Error("not a GLB");
  }
  const len = buf.readUInt32LE(12);
  if (buf.readUInt32LE(16) !== 0x4e4f534a) throw new Error("first GLB chunk is not JSON");
  return JSON.parse(buf.subarray(20, 20 + len).toString("utf8"));
}

export function modelStats(gltf, bytes) {
  const meshes = gltf.meshes || [];
  const accessors = gltf.accessors || [];
  const tris = (p) => {
    if ((p.mode ?? 4) !== 4) return 0;
    const a = p.indices != null ? accessors[p.indices] : accessors[p.attributes.POSITION];
    return Math.floor((a?.count || 0) / 3);
  };
  let meshNodes = 0, draws = 0, faces = 0, triangles = 0;
  let maxNodeTriangles = 0, maxNodeFaces = 0, heaviest = "", mostFaces = "";
  for (const node of gltf.nodes || []) {
    if (node.mesh == null) continue;
    const prims = meshes[node.mesh].primitives;
    meshNodes++;
    faces += prims.length;
    let t = 0;
    for (const p of prims) t += tris(p);
    triangles += t;
    if (t > maxNodeTriangles) { maxNodeTriangles = t; heaviest = node.name || ""; }
    if (prims.length > maxNodeFaces) { maxNodeFaces = prims.length; mostFaces = node.name || ""; }
    if (prims.length === 1) { draws++; continue; }
    const keys = new Set(prims.map((p) => `${p.material ?? -1}|${p.mode ?? 4}|${Object.keys(p.attributes).sort().join(",")}`));
    draws += keys.size;
  }
  return {
    nodes: (gltf.nodes || []).length, meshNodes, draws, faces, triangles,
    materials: (gltf.materials || []).length,
    megabytes: Math.round((bytes / 1048576) * 100) / 100,
    maxNodeTriangles, maxNodeFaces, heaviest, mostFaces,
  };
}

export function checkBudget(stats, budget) {
  return Object.entries(budget)
    .filter(([k, max]) => stats[k] > max)
    .map(([k, max]) => `${k} ${stats[k]} > ${max}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const jsonOnly = process.argv.includes("--json");
  let failed = false;
  const out = {};
  for (const [rel, budget] of Object.entries(BUDGETS)) {
    const path = join(ROOT, rel);
    const buf = readFileSync(path);
    const stats = modelStats(glbJson(buf), statSync(path).size);
    out[rel] = stats;
    if (jsonOnly) continue;
    const over = checkBudget(stats, budget);
    const cells = Object.keys(budget).map((k) => `${k} ${stats[k]}/${budget[k]}`).join(", ");
    console.log(`${over.length ? "OVER" : "ok  "} ${rel}: ${cells}`);
    if (over.length) {
      failed = true;
      console.log(`  over budget: ${over.join("; ")}`);
      console.log(`  most triangles: ${stats.heaviest}; most faces: ${stats.mostFaces}`);
    }
  }
  if (jsonOnly) console.log(JSON.stringify(out, null, 2));
  if (failed) {
    console.log("\nSee docs/viewer/Performance.md, \"Modeling rules and budget\".");
    process.exit(1);
  }
}
