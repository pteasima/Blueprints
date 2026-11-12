/**
 * Windows: only panes that open move, every face of a pane moves together,
 * and fixed glazing is not pickable (Petr, 2026-11-12).
 * Run from this directory: node windows.test.mjs
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import * as THREE from "three";
import { DOOR_SWING_MS } from "./doors.js";
import { registerElementActions } from "./elementActions.js";
import {
  WINDOW_TRAVEL,
  createWindowSlides,
  panelIndexAt,
  panelMoves,
  windowOperable,
} from "./windows.js";

const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 1e-6, `${msg}: ${a} vs ${b}`);

// --- No record: the old whole-pane slide ---------------------------------
{
  // A 2.22 m pane exported as faces: a big face and an end face with no X extent.
  const face = new THREE.Mesh(new THREE.PlaneGeometry(2.22, 2.47));
  const end = new THREE.Mesh(new THREE.BoxGeometry(0, 2.47, 0.025));
  end.position.x = -1.11;
  const slides = createWindowSlides();
  const travel = 2.22 * WINDOW_TRAVEL;

  assert.equal(slides.isOperable("WIN"), true, "no record: still opens");
  assert.equal(slides.slide("WIN", [face, end], true, 0), true);
  assert.equal(slides.step(DOOR_SWING_MS / 2), true);
  near(face.position.x, travel / 2, "half-way");
  near(end.position.x, -1.11 + travel / 2, "end face moves with the pane");
  assert.equal(slides.step(DOOR_SWING_MS + 1), true);
  near(face.position.x, travel, "open");
  near(end.position.x, -1.11 + travel, "end open");
  assert.equal(slides.step(DOOR_SWING_MS + 50), false, "settled: nothing to redraw");

  slides.slide("WIN", [face, end], false, 1000);
  slides.step(1000 + DOOR_SWING_MS / 2);
  assert.ok(face.position.x > 0 && face.position.x < travel);
  slides.step(1000 + DOOR_SWING_MS + 1);
  near(face.position.x, 0, "shut");
  near(end.position.x, -1.11, "end shut");
}

// --- Pure helpers ---------------------------------------------------------
{
  assert.equal(panelMoves({ slide: [0, 0, 0] }), false);
  assert.equal(panelMoves({ slide: [0.5, 0, 0] }), true);
  assert.equal(windowOperable({ operable: false, panels: [{ slide: [1, 0, 0] }] }), false);
  assert.equal(windowOperable({ panels: [{ slide: [0, 0, 0] }] }), false);
  assert.equal(windowOperable({ panels: [{ slide: [0, 0, 0] }, { slide: [-1, 0, 0] }] }), true);
  const rec = {
    panels: [
      { min: [0, 0, -0.1], max: [1, 2, 0] },
      { min: [1, 0, -0.05], max: [2, 2, 0.05] },
    ],
  };
  assert.equal(panelIndexAt(rec, [0.5, 1, -0.05]), 0);
  assert.equal(panelIndexAt(rec, [1.5, 1, 0]), 1);
  assert.equal(panelIndexAt(rec, [1.0, 1, -0.02]), 1, "on the mullion: the nearer centre");
  assert.equal(panelIndexAt(rec, [5, 1, 0]), -1);
}

// A window record's panes as glTF face meshes: a front face and an end face
// per panel, placed at world positions under a plain parent.
function paneMeshes(record) {
  const parent = new THREE.Group();
  const meshes = [];
  for (const panel of record.panels) {
    const c = panel.min.map((v, k) => (v + panel.max[k]) / 2);
    const size = panel.max.map((v, k) => v - panel.min[k]);
    const front = new THREE.Mesh(new THREE.BoxGeometry(size[0], size[1], 0));
    front.position.set(c[0], c[1], c[2]);
    const endFace = new THREE.Mesh(new THREE.BoxGeometry(0, size[1], size[2]));
    endFace.position.set(panel.min[0], c[1], c[2]);
    parent.add(front, endFace);
    meshes.push(front, endFace);
  }
  parent.updateMatrixWorld(true);
  return meshes;
}

const committed = JSON.parse(readFileSync(new URL("../../../docs/models/ground_floor.windows.json", import.meta.url)));
const byId = new Map(committed.map((r) => [r.id, r]));

// --- Committed records: which panes open ---------------------------------
{
  for (const id of ["WIN-OP01", "WIN-OP02"]) {
    const r = byId.get(id);
    assert.ok(r, id);
    assert.equal(r.operable, false, `${id}: bedroom west window is fixed glass`);
    assert.equal(windowOperable(r), false);
  }
  // Bedroom, children's rooms, garzonka: west sash slides east (+X).
  for (const id of ["WIN-OP05", "WIN-OP08", "WIN-OP13", "WIN-OP16", "WIN-OP35"]) {
    const r = byId.get(id);
    assert.deepEqual(r.panels.map((p) => p.operation), ["SLIDINGHORIZONTAL", "FIXEDCASEMENT"], id);
    assert.ok(r.panels[0].slide[0] > 0, `${id}: sash slides east`);
    assert.equal(panelMoves(r.panels[1]), false, `${id}: east pane fixed`);
    assert.ok(r.panels[0].center[0] < r.panels[1].center[0], `${id}: sash is the west pane`);
  }
  // Office: mirrored, the east sash slides west.
  const office = byId.get("WIN-OP21");
  assert.deepEqual(office.panels.map((p) => p.operation), ["FIXEDCASEMENT", "SLIDINGHORIZONTAL"]);
  assert.ok(office.panels[1].slide[0] < 0, "office sash slides west");
  assert.ok(office.panels[1].center[0] > office.panels[0].center[0], "office sash is the east pane");
}

// --- Petr 2026-11-12, batch 2: small windows and OP39b, OP26 are fixed ----
{
  const fixed = [
    "WIN-OP04", "WIN-OP07", "WIN-OP12", "WIN-OP15", "WIN-OP42", "WIN-OP45", "WIN-OP46",
    "WIN-OP47", "WIN-OP48", "WIN-OP30", "WIN-OP31", "WIN-OP39b", "WIN-OP26", "WIN-OP28",
  ];
  const slides = createWindowSlides(committed);
  for (const id of fixed) {
    const r = byId.get(id);
    assert.ok(r, id);
    assert.equal(r.operable, false, `${id} is fixed glass`);
    assert.ok(r.panels.every((p) => !panelMoves(p)), `${id}: no pane moves`);
    const meshes = paneMeshes(r);
    assert.deepEqual(slides.operableMeshes(id, meshes), [], `${id}: no tap target`);
    assert.equal(slides.acceptsHit(id, meshes, meshes[0]), false, `${id}: not pickable`);
  }
  // Living-room O11: the outer sashes slide toward the centre and meet there.
  const left = byId.get("WIN-OP27");
  const right = byId.get("WIN-OP29");
  const mid = byId.get("WIN-OP28");
  const centre = mid.panels[0].center[0];
  near(left.panels[0].max[0] + left.panels[0].slide[0], centre, "OP27 open edge at the centre");
  near(right.panels[0].min[0] + right.panels[0].slide[0], centre, "OP29 open edge at the centre");
  assert.ok(left.panels[0].slide[0] > 0 && right.panels[0].slide[0] < 0, "toward the centre");
}

// --- Only the operable sash moves ----------------------------------------
{
  const record = byId.get("WIN-OP05");
  const slides = createWindowSlides(committed);
  const meshes = paneMeshes(record);
  const [sashFront, sashEnd, fixedFront, fixedEnd] = meshes;
  const at = meshes.map((m) => m.position.clone());
  assert.deepEqual(slides.operableMeshes("WIN-OP05", meshes), [sashFront, sashEnd]);
  assert.equal(slides.slide("WIN-OP05", meshes, true, 0), true);
  slides.step(DOOR_SWING_MS / 2);
  near(sashFront.position.x, at[0].x + record.panels[0].slide[0] / 2, "sash half-way");
  slides.step(DOOR_SWING_MS + 1);
  near(sashFront.position.x, at[0].x + record.panels[0].slide[0], "sash open");
  near(sashEnd.position.x, at[1].x + record.panels[0].slide[0], "sash end face open");
  assert.ok(fixedFront.position.equals(at[2]), "fixed pane does not move");
  assert.ok(fixedEnd.position.equals(at[3]), "fixed end face does not move");
  assert.deepEqual(slides.slideOf("WIN-OP05"), record.panels[0].slide);
}

// --- Fixed glass: nothing moves and nothing is pickable ------------------
{
  const record = byId.get("WIN-OP01");
  const slides = createWindowSlides(committed);
  const meshes = paneMeshes(record);
  const at = meshes.map((m) => m.position.clone());
  assert.equal(slides.isOperable("WIN-OP01"), false);
  assert.deepEqual(slides.operableMeshes("WIN-OP01", meshes), []);
  assert.equal(slides.slide("WIN-OP01", meshes, true, 0), false, "fixed glass does not open");
  assert.equal(slides.step(DOOR_SWING_MS + 1), false);
  meshes.forEach((m, i) => assert.ok(m.position.equals(at[i])));
  assert.equal(slides.acceptsHit("WIN-OP01", meshes, meshes[0]), false);
}

// --- The tap registry: fixed glass and the fixed pane claim nothing ------
{
  const slides = createWindowSlides(committed);
  const windows = {
    "WIN-OP01": { id: "WIN-OP01", globalId: "g01", type: "IfcWindow" },
    "WIN-OP05": { id: "WIN-OP05", globalId: "g05", type: "IfcWindow" },
  };
  const meshesOf = {
    "WIN-OP01": paneMeshes(byId.get("WIN-OP01")),
    "WIN-OP05": paneMeshes(byId.get("WIN-OP05")),
  };
  const owner = new Map();
  for (const [id, list] of Object.entries(meshesOf)) for (const m of list) owner.set(m, windows[id]);
  const handlers = [];
  let toggled = null;
  registerElementActions(
    { register: (h) => handlers.push(h) },
    {
      elementOf: (obj) => owner.get(obj) || null,
      onWindow: (el) => {
        toggled = el.id;
      },
      windowAccepts: (el, hit) => slides.acceptsHit(el.id, meshesOf[el.id], hit?.object),
    },
  );
  const win = handlers.find((h) => h.id === "window");
  assert.equal(win.claim({ object: meshesOf["WIN-OP01"][0] }, {}), null, "fixed window: no claim");
  assert.equal(win.claim({ object: meshesOf["WIN-OP05"][2] }, {}), null, "fixed pane of OP05: no claim");
  const claim = win.claim({ object: meshesOf["WIN-OP05"][0] }, {});
  assert.ok(claim, "the sliding sash claims");
  claim.onTap();
  assert.equal(toggled, "WIN-OP05");
}

console.log("windows.test.mjs ok");
