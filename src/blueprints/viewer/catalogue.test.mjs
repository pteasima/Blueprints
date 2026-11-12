/**
 * Material catalogue parsing, selector matching, and a check that every
 * entry of the committed catalogue (inputs/materials/catalogue.yaml) points
 * at parts, element ids and IFC classes that exist in the exported models.
 * Run from this directory: node catalogue.test.mjs
 */
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { meshIdentity } from "./meshIdentity.js";
import {
  catalogueCoverage,
  parseCatalogue,
  parseSelector,
  resolveEntry,
  resolveMapUrl,
  sanitizeId,
  selectorScore,
} from "./catalogue.js";

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, "..", "..", "..");

// --- selector parsing ---
{
  const errors = [];
  assert.deepEqual(parseSelector({ label: "cabinet", ids: ["SF-LB", "SF-TC"] }, errors), {
    label: "cabinet",
    ids: ["SF-LB", "SF-TC"],
  });
  const pat = parseSelector({ label: "cabinet", id_pattern: "-BODY$" }, errors);
  assert.equal(pat.idPatternSource, "-BODY$");
  assert.equal(errors.length, 0);
  assert.equal(parseSelector({ colour: "red" }, errors), null);
  assert.match(errors.join("\n"), /unknown key "colour"/);
  assert.match(errors.join("\n"), /missing label/);
  assert.equal(parseSelector({ label: "x", id_pattern: "(" }, errors), null);
}

// --- specificity: ids > id_pattern > label ---
{
  const info = { part: "cabinet", element: "KR-DN-BODY" };
  const label = selectorScore(parseSelector({ label: "cabinet" }), info);
  const pattern = selectorScore(parseSelector({ label: "cabinet", id_pattern: "-BODY$" }), info);
  const ids = selectorScore(parseSelector({ label: "cabinet", ids: ["KR-DN-BODY"] }), info);
  assert.ok(label > 0 && pattern > label && ids > pattern, `${label} < ${pattern} < ${ids}`);
  assert.equal(selectorScore(parseSelector({ label: "oak" }), info), 0);
  assert.equal(selectorScore(parseSelector({ label: "cabinet", id_pattern: "-FRONT$" }), info), 0);
  assert.equal(selectorScore(parseSelector({ label: "cabinet", ids: ["X"] }), { part: "cabinet", element: null }), 0);
  assert.ok(selectorScore(parseSelector({ label: "grout" }), { part: "grout", element: null }) > 0);
  // GLTFLoader drops the dot: BED-1.11 arrives as BED-111.
  assert.ok(selectorScore(parseSelector({ label: "furniture", ids: ["BED-1.11"] }), { part: "furniture", element: "BED-111" }) > 0);
}

// --- resolve: most specific wins, ties go to the first entry ---
{
  const { entries, errors } = parseCatalogue(`
- id: carcass
  applies_to: {selectors: [{label: cabinet}]}
  base_color: "#ffffff"
- id: island-back
  applies_to: {selectors: [{label: cabinet, ids: [KR-ISL-BACK]}]}
  base_color: "#000000"
- id: also-carcass
  applies_to: {selectors: [{label: cabinet}]}
  base_color: "#123456"
`);
  assert.deepEqual(errors, []);
  assert.equal(resolveEntry(entries, { part: "cabinet", element: "KR-ISL-BACK" }).entry.id, "island-back");
  assert.equal(resolveEntry(entries, { part: "cabinet", element: "KR-T1" }).entry.id, "carcass");
  assert.equal(resolveEntry(entries, { part: "masonry", element: "W-001" }), null);
  const cov = catalogueCoverage(entries, [
    { part: "cabinet", element: "KR-T1" },
    { part: "masonry", element: "W-001" },
  ]);
  assert.equal(cov.ties.length, 1);
  assert.deepEqual(cov.ties[0].ids, ["carcass", "also-carcass"]);
  assert.equal(cov.unresolved.length, 1);
  assert.deepEqual(cov.unused, ["island-back", "also-carcass"]);
}

// --- field normalisation and validation ---
{
  const { entries, errors, warnings } = parseCatalogue(`
- id: glass
  applies_to: {selectors: [{label: glazing}]}
  base_color: f4f8f8
  roughness: 2
  transmission: 0.95
  maps: {color: docs/materials/glass/color.jpg, height: x.png}
  tile_size_m: [0.6, 0.3]
  rotation_deg: 90
  status: known
  source: [https://a, https://b]
- id: glass
  applies_to: {description: floors, pending: room floors}
  base_color: "red"
`);
  assert.equal(entries[0].baseColor, "#f4f8f8");
  assert.equal(entries[0].roughness, 1);
  assert.deepEqual(entries[0].tileSize, [0.6, 0.3]);
  assert.equal(entries[0].rotationDeg, 90);
  assert.equal(entries[0].directional, true);
  assert.equal(entries[1].directional, false);
  assert.equal(entries[0].source, "https://a https://b");
  assert.deepEqual(entries[0].maps, { color: "docs/materials/glass/color.jpg" });
  assert.match(warnings.join("\n"), /maps.height is not used/);
  assert.match(errors.join("\n"), /duplicate id/);
  assert.match(errors.join("\n"), /base_color "red"/);
  assert.equal(entries[1].pending, "room floors");
}

// --- map URLs: repo-relative docs/ paths are served from the site root ---
assert.equal(
  resolveMapUrl("docs/materials/oak/color.jpg", "../materials/catalogue.yaml?v=abc"),
  "../materials/../materials/oak/color.jpg",
);
assert.equal(resolveMapUrl("https://x/y.jpg", "../materials/catalogue.yaml"), "https://x/y.jpg");

/** Node names of a committed GLB, or null when it is still an LFS pointer. */
function glbNodeNames(path) {
  if (!existsSync(path)) return null;
  const buf = readFileSync(path);
  if (buf.toString("latin1", 0, 4) !== "glTF") return null;
  const len = buf.readUInt32LE(12);
  const doc = JSON.parse(buf.toString("utf8", 20, 20 + len));
  return (doc.nodes || []).map((n) => n.name || "");
}

// --- the committed catalogue: parses; every label exists; with the GLBs
// checked out (LFS), every mesh resolves to exactly one material ---
{
  const path = join(repo, "inputs", "materials", "catalogue.yaml");
  const { entries, errors } = parseCatalogue(readFileSync(path, "utf8"));
  assert.deepEqual(errors, [], "catalogue errors");
  assert.ok(entries.length > 0);

  const models = join(repo, "docs", "models");
  const labels = new Set();
  const walk = (nodes) => {
    for (const n of nodes) {
      if (typeof n === "string") labels.add(n);
      else walk(n.children || []);
    }
  };
  for (const m of ["ground_floor", "bathroom_107", "bathroom_120"]) {
    walk(JSON.parse(readFileSync(join(models, `${m}.parts.json`), "utf8")));
  }
  const problems = [];
  for (const entry of entries) {
    for (const sel of entry.selectors) {
      if (!labels.has(sel.label)) problems.push(`${entry.id}: label ${sel.label} is in no parts.json`);
    }
    for (const rel of Object.values(entry.maps)) {
      if (!existsSync(join(repo, rel))) problems.push(`${entry.id}: map ${rel} missing`);
    }
  }
  for (const m of ["ground_floor", "bathroom_107", "bathroom_120"]) {
    const names = glbNodeNames(join(models, `${m}.glb`));
    if (!names) {
      console.log(`skip mesh coverage for ${m} (GLB is an LFS pointer)`);
      continue;
    }
    const infos = names
      .map((n) => meshIdentity(sanitizeId(n)))
      .filter((i) => i.part && !i.part.endsWith("edges") && labels.has(i.part));
    const cov = catalogueCoverage(entries, infos);
    for (const i of cov.unresolved) problems.push(`${m}: ${i.part}/${i.element} has no material`);
    for (const t of cov.ties) problems.push(`${m}: ${t.info.part}/${t.info.element} tie ${t.ids.join(", ")}`);
  }
  assert.deepEqual(problems, [], problems.join("\n"));
}

console.log("catalogue tests ok");
