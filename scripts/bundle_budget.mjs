#!/usr/bin/env node
// Size budget for the viewer's JS bundle (docs/viewer/Performance.md, "Bundle
// size"). Reads the esbuild metafile that `npm run build -- --meta` writes to
// src/blueprints/viewer/dist/meta.json, so build first:
//
//   (cd src/blueprints/viewer && npm run build -- --meta)
//   node scripts/bundle_budget.mjs            # check against BUDGET
//   node scripts/bundle_budget.mjs --json     # print the numbers only
//
// "initial" is what the page loads before the first picture: dist/viewer.js
// and every chunk it reaches through static imports. Chunks reached only
// through import() (edit mode, measure, walk, AR export, the Realistic
// catalogue parser) load later and count only in "total".
import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const VIEWER = join(ROOT, "src", "blueprints", "viewer");
const ENTRY = "dist/viewer.js";

// Limits, in KiB, about 1.15x the numbers on 2026-11-27 (code splitting). Raise one
// only on purpose and say why in the pull request; a new heavy feature should
// usually be a lazy chunk instead (import() in main.js, see build.mjs).
export const BUDGET = {
  initialKiB: 1100,
  initialGzipKiB: 300,
  totalKiB: 1350,
  totalGzipKiB: 390,
};

/** Output files (metafile keys) the entry loads through static imports, entry first. */
export function initialFiles(meta, entry = ENTRY) {
  const seen = new Set();
  const visit = (file) => {
    if (seen.has(file) || !meta.outputs[file]) return;
    seen.add(file);
    for (const imp of meta.outputs[file].imports || []) {
      if (imp.kind === "import-statement" && !imp.external) visit(imp.path);
    }
  };
  visit(entry);
  return [...seen];
}

/**
 * @param {{ outputs: Record<string, { bytes: number, imports?: { path: string, kind: string, external?: boolean }[] }> }} meta
 * @param {(file: string) => number} gzipBytes gzipped size of one output file
 */
export function bundleStats(meta, gzipBytes, entry = ENTRY) {
  const js = Object.keys(meta.outputs).filter((f) => f.endsWith(".js"));
  const initial = initialFiles(meta, entry);
  const kib = (n) => Math.round((n / 1024) * 10) / 10;
  const sum = (files, size) => files.reduce((a, f) => a + size(f), 0);
  const raw = (f) => meta.outputs[f].bytes;
  return {
    initialKiB: kib(sum(initial, raw)),
    initialGzipKiB: kib(sum(initial, gzipBytes)),
    totalKiB: kib(sum(js, raw)),
    totalGzipKiB: kib(sum(js, gzipBytes)),
    initialFiles: initial.length,
    files: js.length,
  };
}

export function checkBundleBudget(stats, budget = BUDGET) {
  return Object.entries(budget)
    .filter(([k, max]) => stats[k] > max)
    .map(([k, max]) => `${k} ${stats[k]} > ${max}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  let meta;
  try {
    meta = JSON.parse(readFileSync(join(VIEWER, "dist", "meta.json"), "utf8"));
  } catch {
    console.error("No src/blueprints/viewer/dist/meta.json; run `npm run build -- --meta` in src/blueprints/viewer first.");
    process.exit(2);
  }
  const gz = (f) => gzipSync(readFileSync(join(VIEWER, f)), { level: 9 }).length;
  const stats = bundleStats(meta, gz);
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(stats, null, 2));
  } else {
    const over = checkBundleBudget(stats);
    const cells = Object.keys(BUDGET).map((k) => `${k} ${stats[k]}/${BUDGET[k]}`).join(", ");
    console.log(`${over.length ? "OVER" : "ok  "} viewer bundle: ${cells} (${stats.initialFiles} of ${stats.files} files at start)`);
    if (over.length) {
      console.log(`  over budget: ${over.join("; ")}`);
      console.log('\nSee docs/viewer/Performance.md, "Bundle size".');
      process.exit(1);
    }
  }
}
