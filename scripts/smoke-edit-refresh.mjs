/**
 * Headless check: leftover fixture-edit keys are discarded on load,
 * meshes stay at the model position, and beforeunload is armed only
 * while there are unsaved edits.
 *
 * Run: node scripts/smoke-edit-refresh.mjs
 * Needs Playwright and a current docs/viewer/viewer.iife.js (npm run build
 * in src/blueprints/viewer, then PYTHONPATH=src python3 -c
 * "from blueprints.preview_hub import ensure_viewer_shell; ensure_viewer_shell()").
 */
import { createServer } from "node:http";
import { readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const repoRoot = process.env.BLUEPRINTS_ROOT || fileURLToPath(new URL("..", import.meta.url));
const root = join(repoRoot, "docs");
const STORAGE_KEY = "blueprints.fixtureEdits.ground_floor";
const WRONG_TARGET = [18.6, 12.5, 1.53];

const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".json": "application/json",
  ".glb": "model/gltf-binary",
  ".css": "text/css",
  ".png": "image/png",
  ".usdz": "model/vnd.usdz+zip",
};

const server = createServer((req, res) => {
  const url = new URL(req.url || "/", "http://127.0.0.1");
  let path = decodeURIComponent(url.pathname);
  if (path.endsWith("/")) path += "index.html";
  const file = join(root, path);
  try {
    if (!statSync(file).isFile()) throw new Error("missing");
    res.writeHead(200, { "content-type": mime[extname(file)] || "application/octet-stream" });
    res.end(readFileSync(file));
  } catch {
    res.writeHead(404);
    res.end("missing");
  }
});

await new Promise((r) => server.listen(0, "127.0.0.1", r));
const { port } = server.address();
const base = `http://127.0.0.1:${port}`;
const viewerUrl = `${base}/viewer/?m=ground_floor`;

const browser = await chromium.launch();

async function waitForEdit(page) {
  page.on("pageerror", (e) => console.error("pageerror", e));
  await page.goto(viewerUrl, { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => window.BlueprintsViewer?.edit?.hasFixtures?.(), null, {
    timeout: 180000,
  });
  // bind() runs from showButton; wait until at least one fixture has a position.
  await page.waitForFunction(
    () => (window.BlueprintsViewer?.edit?.rows?.() || []).some((r) => Array.isArray(r.position) && r.position.length === 3),
    null,
    { timeout: 30000 },
  );
}

async function pickFixture(page) {
  return page.evaluate(() => {
    const rows = window.BlueprintsViewer.edit.rows();
    const row = rows.find((r) => Array.isArray(r.position) && r.position.length === 3);
    if (!row) throw new Error("no fixture with a position");
    return row.id;
  });
}

async function fixtureState(page, id) {
  return page.evaluate((id) => {
    const edit = window.BlueprintsViewer.edit;
    return {
      position: edit.position(id),
      world: edit.worldCenter(id),
      unsaved: edit.hasUnsavedEdits(),
      store: edit.store(),
      key: localStorage.getItem("blueprints.fixtureEdits.ground_floor"),
      camera: localStorage.getItem("blueprints.camera.ground_floor") !== null,
    };
  }, id);
}

function dispatchLeave() {
  const ev = new Event("beforeunload", { cancelable: true });
  ev.returnValue = "keep";
  const propagated = window.dispatchEvent(ev);
  return { propagated, returnValue: ev.returnValue, defaultPrevented: ev.defaultPrevented };
}

function almostEqual(a, b, eps = 0.0015) {
  if (!a || !b || a.length !== b.length) return false;
  return a.every((v, i) => Math.abs(v - b[i]) <= eps);
}

// --- Baseline: clean load, pick a placed fixture, record its model position ---
const clean = await browser.newContext();
const cleanPage = await clean.newPage({ viewport: { width: 1024, height: 768 } });
await waitForEdit(cleanPage);
const fixtureId = await pickFixture(cleanPage);
const baseline = await fixtureState(cleanPage, fixtureId);
if (!baseline.position) throw new Error(`${fixtureId} has no model position`);
console.log("baseline", { fixtureId, position: baseline.position, unsaved: baseline.unsaved, key: baseline.key });
if (baseline.unsaved) throw new Error("clean load should have no unsaved edits");
if (baseline.key != null) throw new Error("clean load should not have a fixtureEdits key");
await clean.close();

// --- Seeded load: old key must be dropped and the fixture stays put ---
const seeded = await browser.newContext();
await seeded.addInitScript(
  ({ key, id, target, base }) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        version: 2,
        model: "ground_floor",
        fixtures: { [id]: { base, target } },
        cables: {},
      }),
    );
    // Prove we do not touch other per-device state.
    localStorage.setItem("blueprints.testKeep", "keep-me");
  },
  { key: STORAGE_KEY, id: fixtureId, target: WRONG_TARGET, base: baseline.position },
);
const seededPage = await seeded.newPage({ viewport: { width: 1024, height: 768 } });
await waitForEdit(seededPage);
const afterSeed = await fixtureState(seededPage, fixtureId);
console.log("after seed", { position: afterSeed.position, unsaved: afterSeed.unsaved, key: afterSeed.key });
if (afterSeed.key != null) throw new Error("legacy fixtureEdits key should have been removed");
if (afterSeed.unsaved) throw new Error("seeded edits must not be restored");
if (!almostEqual(afterSeed.position, baseline.position)) {
  throw new Error(`fixture moved: model ${baseline.position} vs ${afterSeed.position}`);
}
if (almostEqual(afterSeed.position, WRONG_TARGET)) {
  throw new Error("fixture is still at the leftover target");
}
const visibilityKept = await seededPage.evaluate(() => localStorage.getItem("blueprints.testKeep"));
if (visibilityKept !== "keep-me") throw new Error("visibility key was disturbed");

// --- Make an edit: beforeunload armed; key stays absent ---
const movedTo = afterSeed.position.map((v, i) => (i === 2 ? v + 0.1 : v));
await seededPage.evaluate(
  ({ id, target }) => {
    window.BlueprintsViewer.edit.setPosition(id, target);
  },
  { id: fixtureId, target: movedTo },
);
const edited = await fixtureState(seededPage, fixtureId);
console.log("after edit", { position: edited.position, unsaved: edited.unsaved, key: edited.key });
if (!edited.unsaved) throw new Error("edit should be unsaved");
if (!almostEqual(edited.position, movedTo)) throw new Error(`setPosition failed: ${edited.position}`);
if (edited.key != null) throw new Error("an in-session edit must not be written to localStorage");

const armed = await seededPage.evaluate(dispatchLeave);
console.log("beforeunload armed", armed);
if (!armed.defaultPrevented) {
  throw new Error(`beforeunload should be armed after an edit: ${JSON.stringify(armed)}`);
}

// Leaving edit mode keeps unsaved edits (and the prompt).
await seededPage.evaluate(() => window.BlueprintsViewer.edit.setActive(false));
const stillArmed = await seededPage.evaluate(dispatchLeave);
if (!stillArmed.defaultPrevented) {
  throw new Error(`beforeunload should stay armed after leaving edit mode: ${JSON.stringify(stillArmed)}`);
}

// Discard all: prompt off, fixture back to the model position.
await seededPage.evaluate(() => window.BlueprintsViewer.edit.discardAll());
const cleared = await fixtureState(seededPage, fixtureId);
console.log("after discard", { position: cleared.position, unsaved: cleared.unsaved, key: cleared.key });
if (cleared.unsaved) throw new Error("discardAll should clear unsaved edits");
if (!almostEqual(cleared.position, baseline.position)) {
  throw new Error(`discard did not restore the model position: ${cleared.position}`);
}
const quiet = await seededPage.evaluate(dispatchLeave);
console.log("beforeunload quiet", quiet);
if (quiet.defaultPrevented) {
  throw new Error(`beforeunload should not be armed after discard: ${JSON.stringify(quiet)}`);
}

await browser.close();
server.close();
console.log("smoke-edit-refresh: ok", { fixture: fixtureId, modelPosition: baseline.position });
