/**
 * Window panes ease open and shut, and every face of a pane moves together.
 * Run from this directory: node windows.test.mjs
 */
import assert from "node:assert/strict";
import * as THREE from "three";
import { DOOR_SWING_MS } from "./doors.js";
import { WINDOW_TRAVEL, createWindowSlides } from "./windows.js";

// A 2.22 m pane exported as faces: a big face and an end face with no X extent.
const face = new THREE.Mesh(new THREE.PlaneGeometry(2.22, 2.47));
const end = new THREE.Mesh(new THREE.BoxGeometry(0, 2.47, 0.025));
end.position.x = -1.11;
const slides = createWindowSlides();
const travel = 2.22 * WINDOW_TRAVEL;

slides.slide("WIN", [face, end], true, 0);
assert.equal(slides.step(DOOR_SWING_MS / 2), true);
assert.ok(Math.abs(face.position.x - travel / 2) < 1e-6, `half-way ${face.position.x}`);
assert.ok(Math.abs(end.position.x - (-1.11 + travel / 2)) < 1e-6, "end face moves with the pane");
assert.equal(slides.step(DOOR_SWING_MS + 1), true);
assert.ok(Math.abs(face.position.x - travel) < 1e-6);
assert.ok(Math.abs(end.position.x - (-1.11 + travel)) < 1e-6);
assert.equal(slides.step(DOOR_SWING_MS + 50), false, "settled: nothing to redraw");

// Shutting reverses from the open pose back to where the pane started.
slides.slide("WIN", [face, end], false, 1000);
slides.step(1000 + DOOR_SWING_MS / 2);
assert.ok(face.position.x > 0 && face.position.x < travel);
slides.step(1000 + DOOR_SWING_MS + 1);
assert.ok(Math.abs(face.position.x) < 1e-6);
assert.ok(Math.abs(end.position.x + 1.11) < 1e-6);

console.log("windows.test.mjs ok");
