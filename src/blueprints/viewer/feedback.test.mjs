/**
 * Interaction feedback: glyph angles, hinge arc, lifecycle, haptics fallback.
 * Run from this directory: node feedback.test.mjs (or node --test).
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  FEEDBACK_MS,
  FEEDBACK_RISE_PX,
  createFeedbackLayer,
  createFeedbackQueue,
  feedbackFrame,
  haptic,
  hingeArc,
  rotateAboutY,
  screenAngleDeg,
  switchArrowAngle,
} from "./feedback.js";

const near = (a, b, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ≉ ${b}`);

test("switch arrows: up points up the screen, down points down", () => {
  assert.equal(switchArrowAngle("up"), -90);
  assert.equal(switchArrowAngle("down"), 90);
});

test("screen angle uses CSS axes (y down)", () => {
  near(screenAngleDeg({ x: 0, y: 0 }, { x: 10, y: 0 }), 0);
  near(screenAngleDeg({ x: 0, y: 0 }, { x: 0, y: 10 }), 90);
  near(screenAngleDeg({ x: 0, y: 0 }, { x: 0, y: -10 }), -90);
  near(Math.abs(screenAngleDeg({ x: 5, y: 5 }, { x: -5, y: 5 })), 180);
  assert.equal(screenAngleDeg({ x: 1, y: 1 }, { x: 1, y: 1 }), null);
});

test("rotateAboutY matches Object3D.rotateOnAxis(+Y)", () => {
  const pivot = [1, 0, 2];
  const p = [3, 1.5, 2];
  const got = rotateAboutY(p, pivot, Math.PI / 2);
  const o = new THREE.Object3D();
  o.position.set(...pivot);
  const child = new THREE.Object3D();
  child.position.set(p[0] - pivot[0], p[1] - pivot[1], p[2] - pivot[2]);
  o.add(child);
  o.rotateOnAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
  o.updateMatrixWorld(true);
  const want = child.getWorldPosition(new THREE.Vector3());
  near(got[0], want.x);
  near(got[1], want.y);
  near(got[2], want.z);
});

test("hinge arc bends toward the hinge and opposite on close", () => {
  // Plan view: hinge at the origin, leaf centre to the right, swings to below.
  const hinge = { x: 0, y: 0 };
  const a = { x: 10, y: 0 };
  const b = { x: 0, y: 10 };
  const open = hingeArc(a, b, hinge);
  // Chord a→b is 135°; the hinge is to its right, so the arc turns clockwise.
  assert.equal(open.bend, 1);
  near(open.angle, 180);
  const close = hingeArc(b, a, hinge);
  assert.equal(close.bend, -1);
  near(close.angle, -45 - 45);
  assert.equal(hingeArc(a, a, hinge), null);
});

test("frame: full opacity first, fades to 0, rises ~36 px, reduced motion only fades", () => {
  assert.equal(feedbackFrame(0).opacity, 1);
  assert.equal(feedbackFrame(0.1).opacity, 1);
  near(feedbackFrame(1).opacity, 0);
  near(feedbackFrame(1).rise, FEEDBACK_RISE_PX);
  assert.ok(feedbackFrame(0.5).rise > FEEDBACK_RISE_PX / 2);
  const rm = feedbackFrame(0.6, true);
  assert.equal(rm.rise, 0);
  assert.equal(rm.scale, 1);
  near(rm.opacity, feedbackFrame(0.6).opacity);
});

test("queue: overlapping items live independently and expire in order", () => {
  const q = createFeedbackQueue(700);
  q.add(0, "a");
  q.add(100, "b");
  q.add(200, "c");
  let r = q.step(650);
  assert.equal(r.alive.length, 3);
  r = q.step(750);
  assert.deepEqual(r.expired.map((i) => i.data), ["a"]);
  assert.deepEqual(r.alive.map((x) => x.item.data), ["b", "c"]);
  r = q.step(1000);
  assert.equal(r.alive.length, 0);
  assert.equal(q.items.length, 0);
});

/** Just enough DOM for the layer. */
function fakeDocument() {
  const make = (tag) => {
    const el = {
      tag,
      style: {},
      attrs: {},
      children: [],
      parent: null,
      clicks: 0,
      setAttribute(k, v) {
        this.attrs[k] = v;
      },
      appendChild(c) {
        c.parent = this;
        this.children.push(c);
        return c;
      },
      remove() {
        if (!this.parent) return;
        this.parent.children = this.parent.children.filter((c) => c !== this);
        this.parent = null;
      },
      click() {
        this.clicks += 1;
      },
    };
    return el;
  };
  return {
    body: make("body"),
    head: make("head"),
    createElement: make,
    createElementNS: (_ns, tag) => make(tag),
  };
}

function testCamera() {
  const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  cam.position.set(0, 0, 5);
  cam.lookAt(0, 0, 0);
  cam.updateMatrixWorld(true);
  return cam;
}

test("layer: rapid presses spawn separate arrows; all removed after the lifetime", () => {
  const doc = fakeDocument();
  let t = 0;
  const frames = [];
  let buzzes = 0;
  const layer = createFeedbackLayer({
    canvas: { getBoundingClientRect: () => ({ left: 0, top: 0, width: 400, height: 400 }) },
    getCamera: testCamera,
    document: doc,
    now: () => t,
    requestFrame: (fn) => frames.push(fn),
    reducedMotion: () => false,
    haptics: () => {
      buzzes += 1;
    },
  });
  layer.showFeedback({ worldPos: [0, 0, 0], kind: "switch", direction: "up" });
  t = 80;
  layer.showFeedback({ worldPos: [0, 0, 0], kind: "switch", direction: "down" });
  t = 160;
  layer.showFeedback({ worldPos: [0, 0, 0], kind: "slide", worldDir: [1, 0, 0] });
  layer.showFeedback({ worldPos: [0, 0, 0], kind: "hinge", hinge: [-0.5, 0, 0], to: [-0.5, 0.5, 0] });
  assert.equal(buzzes, 4);
  assert.equal(layer.count(), 4);
  assert.equal(frames.length, 1, "one animation loop for all items");
  const root = doc.body.children[0];
  assert.equal(root.children.length, 4);
  const [up, down, slide] = root.children;
  assert.match(up.children[0].style.transform, /rotate\(-90deg\)/);
  assert.match(down.children[0].style.transform, /rotate\(90deg\)/);
  assert.match(slide.children[0].style.transform, /rotate\(0(\.0+)?(e-\d+)?deg\)|rotate\(-?0deg\)/);
  // Centre of a 400×400 canvas.
  assert.match(up.style.transform, /translate\(200\.0px, 200\.0px\)/);
  t = 400;
  layer.tick();
  assert.ok(Number(up.style.opacity) < 1);
  assert.match(up.style.transform, /translate\(200\.0px, 1\d\d\.\dpx\)/, "rose above the anchor");
  t = FEEDBACK_MS + 1;
  layer.tick();
  assert.equal(root.children.length, 3, "first arrow gone, the rest still animate");
  t = 160 + FEEDBACK_MS + 1;
  layer.tick();
  assert.equal(root.children.length, 0);
  assert.equal(layer.count(), 0);
});

test("layer: haptic false skips the buzz; a slide without a direction draws nothing", () => {
  const doc = fakeDocument();
  let buzzes = 0;
  const layer = createFeedbackLayer({
    canvas: { getBoundingClientRect: () => ({ left: 0, top: 0, width: 100, height: 100 }) },
    getCamera: testCamera,
    document: doc,
    now: () => 0,
    requestFrame: () => {},
    reducedMotion: () => true,
    haptics: () => {
      buzzes += 1;
    },
  });
  layer.showFeedback({ worldPos: [0, 0, 0], kind: "switch", direction: "up", haptic: false });
  assert.equal(buzzes, 0);
  assert.equal(layer.showFeedback({ worldPos: [0, 0, 0], kind: "slide", haptic: false }), null);
  assert.equal(layer.count(), 1);
});

test("haptic: vibrate where it exists, iOS switch label on touch, else nothing", () => {
  const calls = [];
  assert.equal(haptic({ navigator: { vibrate: (ms) => (calls.push(ms), true) } }), "vibrate");
  assert.deepEqual(calls, [10]);
  const doc = fakeDocument();
  const ios = haptic({ navigator: {}, document: doc, matchMedia: () => ({ matches: true }) });
  assert.equal(ios, "ios-switch");
  assert.equal(doc.head.children.length, 0, "label removed again");
  assert.equal(haptic({ navigator: {}, document: doc, matchMedia: () => ({ matches: false }) }), "none");
  assert.equal(haptic({}), "none");
  assert.equal(
    haptic({
      navigator: {
        vibrate() {
          throw new Error("blocked");
        },
      },
    }),
    "none",
  );
});
