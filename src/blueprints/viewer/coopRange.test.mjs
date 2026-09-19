/**
 * Smoke: cooperative range DOM + value/keyboard API (no layout / touch).
 * Run: node coopRange.test.mjs
 */
import assert from "node:assert/strict";

/** Minimal DOM so createCooperativeRange can run under plain Node. */
function installDomStub() {
  class Elem {
    constructor(tag) {
      this.tagName = String(tag).toUpperCase();
      this.className = "";
      this.tabIndex = 0;
      this.style = {};
      this.children = [];
      this.attrs = Object.create(null);
      this.listeners = Object.create(null);
    }
    setAttribute(k, v) {
      this.attrs[k] = String(v);
    }
    getAttribute(k) {
      return this.attrs[k] ?? null;
    }
    append(...nodes) {
      this.children.push(...nodes);
    }
    querySelector(sel) {
      const cls = sel.startsWith(".") ? sel.slice(1) : null;
      const walk = (n) => {
        if (cls && n.className === cls) return n;
        for (const c of n.children) {
          const hit = walk(c);
          if (hit) return hit;
        }
        return null;
      };
      return walk(this);
    }
    addEventListener(type, fn) {
      (this.listeners[type] ||= []).push(fn);
    }
    dispatchEvent(ev) {
      for (const fn of this.listeners[ev.type] || []) fn(ev);
      return true;
    }
    setPointerCapture() {}
  }

  globalThis.document = {
    createElement: (tag) => new Elem(tag),
  };
  globalThis.KeyboardEvent = class KeyboardEvent {
    constructor(type, init = {}) {
      this.type = type;
      this.key = init.key;
      this.bubbles = !!init.bubbles;
      this.defaultPrevented = false;
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
  };
  globalThis.PointerEvent = class PointerEvent {
    constructor(type, init = {}) {
      this.type = type;
      this.pointerId = init.pointerId ?? 1;
      this.pointerType = init.pointerType ?? "mouse";
      this.button = init.button ?? 0;
      this.clientX = init.clientX ?? 0;
      this.clientY = init.clientY ?? 0;
      this.bubbles = !!init.bubbles;
      this.defaultPrevented = false;
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
  };
}

installDomStub();

const { createCooperativeRange } = await import("./coopRange.js");

const calls = { input: [], change: [], start: 0, end: 0, tap: 0 };
const range = createCooperativeRange({
  min: 0,
  max: 1,
  step: 0.1,
  value: 0.3,
  ariaLabel: "Test cut",
  onInput: (v) => calls.input.push(v),
  onChange: (v) => calls.change.push(v),
  onScrubStart: () => {
    calls.start += 1;
  },
  onScrubEnd: () => {
    calls.end += 1;
  },
  onTap: () => {
    calls.tap += 1;
  },
});

assert.equal(range.el.className, "coop-range");
assert.equal(range.el.getAttribute("role"), "slider");
assert.equal(range.el.getAttribute("aria-label"), "Test cut");
assert.equal(range.el.getAttribute("aria-valuenow"), "0.3");
assert.ok(range.el.querySelector(".coop-range-track"));
assert.ok(range.el.querySelector(".coop-range-thumb"));

range.value = 0.7;
assert.equal(range.value, 0.7);
assert.equal(range.el.getAttribute("aria-valuenow"), "0.7");
assert.deepEqual(calls.input, []); // silent set

range.el.dispatchEvent(
  new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
);
assert.equal(range.value, 0.8);
assert.deepEqual(calls.change, [0.8]);

range.el.dispatchEvent(
  new KeyboardEvent("keydown", { key: "Home", bubbles: true }),
);
assert.equal(range.value, 0);
assert.deepEqual(calls.change, [0.8, 0]);

// Tap must not seek; it fires onTap only.
const inputBeforeTap = calls.input.length;
const changeBeforeTap = calls.change.length;
range.el.dispatchEvent(
  new PointerEvent("pointerdown", {
    pointerId: 1,
    pointerType: "mouse",
    button: 0,
    clientX: 80,
    clientY: 10,
  }),
);
range.el.dispatchEvent(
  new PointerEvent("pointerup", {
    pointerId: 1,
    pointerType: "mouse",
    button: 0,
    clientX: 80,
    clientY: 10,
  }),
);
assert.equal(range.value, 0, "tap must not seek");
assert.equal(calls.tap, 1);
assert.equal(calls.input.length, inputBeforeTap, "tap must not emit input");
assert.equal(calls.change.length, changeBeforeTap, "tap must not emit change");
assert.equal(calls.start, 0);
assert.equal(calls.end, 0);

range.el.dispatchEvent(
  new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
);
assert.equal(calls.tap, 2);

// thumbScrubOnly: drag that did not start on the thumb must not seek.
const thumbOnlyCalls = { input: [], tap: 0 };
const thumbOnly = createCooperativeRange({
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  thumbScrubOnly: true,
  onInput: (v) => thumbOnlyCalls.input.push(v),
  onTap: () => {
    thumbOnlyCalls.tap += 1;
  },
});
const thumbEl = thumbOnly.el.querySelector(".coop-range-thumb");
assert.ok(thumbEl);
// Layout stub: far-from-thumb hit box so pointerNearThumb returns false.
thumbEl.getBoundingClientRect = () => ({
  left: 0,
  right: 10,
  top: 0,
  bottom: 10,
  width: 10,
  height: 10,
});
thumbOnly.el.dispatchEvent(
  new PointerEvent("pointerdown", {
    pointerId: 2,
    pointerType: "mouse",
    button: 0,
    clientX: 200,
    clientY: 10,
  }),
);
thumbOnly.el.dispatchEvent(
  new PointerEvent("pointermove", {
    pointerId: 2,
    pointerType: "mouse",
    button: 0,
    clientX: 240,
    clientY: 10,
  }),
);
thumbOnly.el.dispatchEvent(
  new PointerEvent("pointerup", {
    pointerId: 2,
    pointerType: "mouse",
    button: 0,
    clientX: 240,
    clientY: 10,
  }),
);
assert.equal(thumbOnly.value, 50, "track drag must not scrub when thumbScrubOnly");
assert.equal(thumbOnlyCalls.input.length, 0);
assert.equal(thumbOnlyCalls.tap, 0, "moved drag must not tap");

// Tap still toggles when thumbScrubOnly.
thumbOnly.el.dispatchEvent(
  new PointerEvent("pointerdown", {
    pointerId: 3,
    pointerType: "mouse",
    button: 0,
    clientX: 200,
    clientY: 10,
  }),
);
thumbOnly.el.dispatchEvent(
  new PointerEvent("pointerup", {
    pointerId: 3,
    pointerType: "mouse",
    button: 0,
    clientX: 200,
    clientY: 10,
  }),
);
assert.equal(thumbOnlyCalls.tap, 1);
assert.equal(thumbOnly.value, 50, "tap must not seek");

console.log("coopRange.test.mjs: ok");
