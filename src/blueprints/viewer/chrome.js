/**
 * Liquid-glass viewer chrome: detents, drag, light/dark scene sync.
 */

export const BG_LIGHT = 0xe8e8ed;
export const BG_DARK = 0x1c1c1e;

const CHROME_CSS = /* css */ `
:root {
  color-scheme: light dark;
  --safe-t: env(safe-area-inset-top, 0px);
  --safe-r: env(safe-area-inset-right, 0px);
  --safe-b: env(safe-area-inset-bottom, 0px);
  --safe-l: env(safe-area-inset-left, 0px);
  --bg: #e8e8ed;
  --fg: #1c1c1e;
  --fg-secondary: rgba(60, 60, 67, 0.78);
  --glass: rgba(255, 255, 255, 0.28);
  --glass-strong: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(255, 255, 255, 0.55);
  --hairline: rgba(60, 60, 67, 0.16);
  --fill: rgba(120, 120, 128, 0.18);
  --fill-active: rgba(120, 120, 128, 0.32);
  --accent: #007aff;
  --accent-fg: #fff;
  --danger-fg: #ff3b30;
  --shadow: 0 10px 36px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
  --radius: 20px;
  --radius-sm: 12px;
  --blur: 40px;
  --sheet-w: min(22rem, 42vw);
  --sheet-partial-h: 40vh;
  --sheet-full-h: calc(100dvh - var(--safe-t) - 3.5rem);
  --sheet-peek-h: 2.15rem;
  --chrome-pad: 12px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1c1c1e;
    --fg: #f5f5f7;
    --fg-secondary: rgba(235, 235, 245, 0.68);
    --glass: rgba(28, 28, 30, 0.38);
    --glass-strong: rgba(58, 58, 60, 0.82);
    --glass-border: rgba(255, 255, 255, 0.14);
    --hairline: rgba(84, 84, 88, 0.55);
    --fill: rgba(120, 120, 128, 0.28);
    --fill-active: rgba(120, 120, 128, 0.42);
    --shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.28);
  }
}

html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  background: var(--bg);
  color: var(--fg);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}

.top-chrome {
  position: fixed;
  z-index: 4;
  top: calc(var(--safe-t) + var(--chrome-pad));
  left: calc(var(--safe-l) + var(--chrome-pad));
  right: calc(var(--safe-r) + var(--chrome-pad));
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}

.top-chrome-start,
.top-chrome-end {
  display: flex;
  gap: 8px;
  align-items: center;
  pointer-events: none;
}

.top-chrome-start > *,
.top-chrome-end > * { pointer-events: auto; }

.chrome-btn {
  appearance: none;
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.75rem;
  height: 2.75rem;
  padding: 0 0.95rem;
  border: 1px solid var(--glass-border);
  border-radius: 999px;
  background: var(--glass);
  color: var(--fg);
  font: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: blur(var(--blur)) saturate(1.6);
  backdrop-filter: blur(var(--blur)) saturate(1.6);
  transition: background 0.15s ease, transform 0.12s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

.chrome-btn:active { transform: scale(0.96); }
.chrome-btn:disabled { opacity: 0.55; cursor: wait; }
.chrome-btn.is-active {
  background: var(--glass-strong);
  box-shadow: inset 0 0 0 1.5px var(--accent), var(--shadow);
  color: var(--accent);
}
.chrome-btn.is-live {
  min-width: 5.5rem;
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
  letter-spacing: -0.02em;
}
#ar:not([hidden]),
#measure:not([hidden]) { min-width: auto; }

.measure-crosshair {
  position: fixed;
  z-index: 2;
  width: 0;
  height: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
}
.measure-crosshair-h,
.measure-crosshair-v {
  position: absolute;
  left: 50%;
  top: 50%;
  background: rgba(255, 214, 10, 0.95);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
}
.measure-crosshair-h {
  width: 28px;
  height: 2px;
  transform: translate(-50%, -50%);
}
.measure-crosshair-v {
  width: 2px;
  height: 28px;
  transform: translate(-50%, -50%);
}
.measure-crosshair-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  border: 1.5px solid rgba(0, 0, 0, 0.45);
  transform: translate(-50%, -50%);
}
.measure-crosshair[data-snap="vertex"] .measure-crosshair-h,
.measure-crosshair[data-snap="vertex"] .measure-crosshair-v {
  background: rgba(255, 69, 58, 0.95);
}
.measure-crosshair[data-snap="edge"] .measure-crosshair-h,
.measure-crosshair[data-snap="edge"] .measure-crosshair-v {
  background: rgba(255, 214, 10, 0.95);
}
.measure-crosshair[data-snap="face"] .measure-crosshair-h,
.measure-crosshair[data-snap="face"] .measure-crosshair-v {
  background: rgba(100, 210, 255, 0.95);
}

/* After .chrome-btn so display:none wins on narrow viewports */
.sheet-toggle { display: none; }

@media (min-width: 768px) {
  .sheet-toggle { display: inline-flex; }
}

.sheet {
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  color: var(--fg);
  background: var(--glass);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: blur(var(--blur)) saturate(1.7);
  backdrop-filter: blur(var(--blur)) saturate(1.7);
  transition: transform 0.34s cubic-bezier(0.32, 0.72, 0, 1),
    height 0.34s cubic-bezier(0.32, 0.72, 0, 1),
    max-height 0.34s cubic-bezier(0.32, 0.72, 0, 1),
    opacity 0.24s ease;
  will-change: transform, height;
}

.sheet.is-dragging {
  transition: none;
}

.sheet-handle {
  appearance: none;
  flex: 0 0 auto;
  align-self: center;
  width: 100%;
  max-width: 100%;
  height: 1.35rem;
  margin: 0;
  padding: 0.4rem 0 0.15rem;
  border: 0;
  background: transparent;
  cursor: grab;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.sheet-handle:active { cursor: grabbing; }

.sheet-handle::after {
  content: "";
  display: block;
  width: 2.35rem;
  height: 0.32rem;
  margin: 0 auto;
  border-radius: 999px;
  background: var(--fg-secondary);
  opacity: 0.55;
  transition: opacity 0.12s ease, background 0.12s ease;
}

.sheet-handle:active::after {
  opacity: 0.95;
  background: var(--fg);
}

.sheet-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0.15rem 1rem calc(1rem + var(--safe-b));
  overscroll-behavior: contain;
}

.sheet[data-detent="peek"]:not(.is-dragging) .sheet-scroll {
  pointer-events: none;
  opacity: 0;
}

.sheet.is-dragging .sheet-scroll {
  opacity: 1;
  pointer-events: none;
}

.sheet-section + .sheet-section {
  margin-top: 1.1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--hairline);
}

.sheet-title {
  margin: 0 0 0.55rem;
  font-size: 0.72rem;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fg-secondary);
}

/* Narrow: bottom sheet — flush to bottom, only top corners rounded */
@media (max-width: 767px) {
  .sheet {
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--sheet-peek-h);
    max-height: var(--sheet-full-h);
    border-radius: var(--radius) var(--radius) 0 0;
    border-bottom: 0;
  }
  .sheet[data-detent="peek"] {
    height: calc(var(--sheet-peek-h) + var(--safe-b));
  }
  .sheet[data-detent="partial"] {
    height: calc(var(--sheet-partial-h) + var(--safe-b));
  }
  .sheet[data-detent="full"] {
    height: var(--sheet-full-h);
  }
}

/* Wide: classic right pane (no grabber) */
@media (min-width: 768px) {
  .sheet {
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--sheet-w);
    border-radius: 0;
    border-right: 0;
    height: auto;
    padding-top: calc(var(--safe-t) + 4.25rem);
  }
  .sheet-handle { display: none; }
  .sheet-scroll {
    padding-top: 0.35rem;
    padding-right: calc(1rem + var(--safe-r));
    padding-bottom: calc(1rem + var(--safe-b));
    touch-action: pan-y;
  }
  .sheet[data-detent="closed"] {
    transform: translateX(100%);
    opacity: 1;
    pointer-events: none;
  }
  .sheet[data-detent="open"] {
    transform: translateX(0);
    opacity: 1;
  }
  .sheet.is-dragging {
    pointer-events: auto;
  }
}

.seg {
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: var(--radius-sm);
  background: var(--fill);
}

.seg + .seg {
  margin-top: 0.55rem;
}

.seg button {
  appearance: none;
  flex: 1 1 0;
  min-width: 0;
  margin: 0;
  padding: 0.55rem 0.35rem;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--fg);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, box-shadow 0.15s ease;
}

.seg button.is-active,
.seg button:active {
  background: var(--glass-strong);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}

.parts {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

label.part {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-height: 2.65rem;
  padding: 0.2rem 0.15rem;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  cursor: pointer;
  user-select: none;
}

label.part .part-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

label.part input {
  appearance: none;
  position: relative;
  flex: 0 0 auto;
  width: 3.1rem;
  height: 1.9rem;
  margin: 0;
  border-radius: 999px;
  background: var(--fill-active);
  cursor: pointer;
  transition: background 0.2s ease;
}

label.part input::after {
  content: "";
  position: absolute;
  top: 0.15rem;
  left: 0.15rem;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.22);
  transition: transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

label.part input:checked {
  background: var(--accent);
}

label.part input:checked::after {
  transform: translateX(1.2rem);
}

.cuts {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.cut-row {
  display: flex;
  gap: 0.55rem;
  align-items: center;
  min-height: 2rem;
}

.cut-label {
  flex: 0 0 auto;
  min-width: 5.5rem;
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
  color: var(--fg-secondary);
}

.cut-row input[type="range"] {
  flex: 1;
  min-width: 0;
  height: 1.75rem;
  margin: 0;
  accent-color: var(--accent);
  cursor: pointer;
}

.cut-remove {
  appearance: none;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: var(--fill);
  color: var(--danger-fg);
  font: inherit;
  font-size: 1.15rem;
  line-height: 1;
  cursor: pointer;
}

.cut-remove:active {
  background: var(--fill-active);
}

#err {
  display: none;
  position: fixed;
  z-index: 5;
  top: calc(var(--safe-t) + 4.25rem);
  left: calc(var(--safe-l) + 12px);
  right: calc(var(--safe-r) + 12px);
  max-width: 28rem;
  margin: 0;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 59, 48, 0.35);
  background: rgba(255, 59, 48, 0.16);
  color: var(--fg);
  font: inherit;
  font-size: 0.9rem;
  white-space: pre-wrap;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
}

@media (min-width: 768px) {
  #err { right: auto; }
}
`;

let stylesInjected = false;

export function injectChromeStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const style = document.createElement("style");
  style.id = "bp-viewer-chrome";
  style.textContent = CHROME_CSS;
  document.head.appendChild(style);
}

/**
 * @param {(isDark: boolean) => void} onTheme
 */
export function initSheetChrome(onTheme) {
  injectChromeStyles();

  const sheet = document.getElementById("sheet");
  const handle = document.getElementById("sheet-handle");
  const scroll = document.getElementById("sheet-scroll");
  const wideMq = window.matchMedia("(min-width: 768px)");
  const darkMq = window.matchMedia("(prefers-color-scheme: dark)");

  /** @type {((detent: string) => void)[]} */
  const listeners = [];
  /** @type {string} */
  let detent = "peek";

  function isWide() {
    return wideMq.matches;
  }

  function getDetent() {
    return detent;
  }

  function notify() {
    for (const cb of listeners) cb(detent);
  }

  /**
   * @param {(detent: string) => void} cb
   */
  function onDetentChange(cb) {
    listeners.push(cb);
    cb(detent);
  }

  function measurePartialHeight() {
    if (!sheet || !scroll) return;
    const view = document.getElementById("section-view");
    const cutsSec = document.getElementById("section-cuts");
    const handleH = handle?.offsetHeight || 22;
    const padBottom = 16;
    let content = 0;
    if (view) content += view.offsetHeight;
    if (cutsSec) {
      // Prefer fitting title + first cut row exactly.
      const title = cutsSec.querySelector(".sheet-title");
      const firstRow = cutsSec.querySelector(".cut-row");
      const sep = 16 + 16; // margin-top + padding-top of section
      content += sep;
      if (title) content += title.offsetHeight + 8;
      if (firstRow) content += firstRow.offsetHeight;
      else content += cutsSec.offsetHeight;
    }
    const raw = handleH + content + padBottom;
    const vh = window.innerHeight || 640;
    const minH = Math.round(vh * 0.28);
    const maxH = Math.round(vh * 0.45);
    const clamped = Math.max(minH, Math.min(maxH, Math.round(raw)));
    sheet.style.setProperty("--sheet-partial-h", `${clamped}px`);
    return clamped;
  }

  function refreshPartialHeight() {
    measurePartialHeight();
    if (!isWide() && detent === "partial") notify();
  }

  /** @param {"t" | "r" | "b" | "l"} side */
  function readSafeInset(side) {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(`--safe-${side}`)
      .trim();
    const px = parseFloat(raw);
    return Number.isFinite(px) ? px : 0;
  }

  /**
   * Insets used for camera framing. Only partial (phone) / open (wide).
   * Uses target detent sizes — never live drag geometry — so framing does
   * not depend on where the finger released.
   * @returns {{ top: number, right: number, bottom: number, left: number }}
   */
  function getSafeInsets() {
    const zero = { top: 0, right: 0, bottom: 0, left: 0 };
    if (!sheet) return zero;
    if (isWide()) {
      if (detent !== "open") return zero;
      const w = sheet.offsetWidth || 0;
      return {
        top: 0,
        right: Math.max(0, Math.round(w)),
        bottom: 0,
        left: 0,
      };
    }
    if (detent !== "partial") return zero;
    // Match CSS: height: calc(var(--sheet-partial-h) + var(--safe-b))
    const bottom = Math.round(partialH() + readSafeInset("b"));
    return {
      top: 0,
      right: 0,
      bottom: Math.max(0, Math.min(window.innerHeight - 80, bottom)),
      left: 0,
    };
  }

  /**
   * @param {string} next
   * @param {{ silent?: boolean }} [opts]
   */
  function setDetent(next, opts = {}) {
    if (!sheet) return;
    const allowed = isWide()
      ? ["closed", "open"]
      : ["peek", "partial", "full"];
    if (!allowed.includes(next)) {
      next = isWide() ? "open" : "peek";
    }
    detent = next;
    sheet.dataset.detent = next;
    sheet.classList.toggle("sheet-open", next !== "peek" && next !== "closed");
    document.body.classList.toggle(
      "sheet-open",
      next !== "peek" && next !== "closed",
    );
    syncToggle();
    if (!opts.silent) notify();
  }

  function applyDefaultForViewport() {
    if (isWide()) setDetent("open");
    else setDetent("peek");
    measurePartialHeight();
  }

  // --- Toggle (wide only) ---
  const topChrome = document.getElementById("top-chrome");
  let toggle = document.getElementById("sheet-toggle");
  if (!toggle && topChrome) {
    let end = topChrome.querySelector(".top-chrome-end");
    if (!end) {
      end = document.createElement("div");
      end.className = "top-chrome-end";
      topChrome.append(end);
    }
    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.id = "sheet-toggle";
    toggle.className = "chrome-btn sheet-toggle";
    end.append(toggle);
  }

  function syncToggle() {
    if (!toggle) return;
    const open = detent === "open";
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open ? "Hide controls" : "Show controls",
    );
    toggle.title = open ? "Hide controls" : "Show controls";
    toggle.textContent = open ? "›" : "‹";
  }

  toggle?.addEventListener("click", () => {
    if (!isWide()) return;
    setDetent(detent === "open" ? "closed" : "open");
  });

  // --- Drag ---
  // Narrow: vertical height via grabber.
  // Wide: edge swipe to open; horizontal dismiss swipe on pane body
  // (not sliders / buttons / other controls); toggle button as above.
  let dragging = false;
  /** @type {"narrow" | "wide-open" | "wide-close" | null} */
  let dragKind = null;
  /** pending until direction resolves (wide-close only) */
  let pendingWideClose = false;
  let didDrag = false;
  let startY = 0;
  let startX = 0;
  let startH = 0;
  let startTX = 0;
  let startDetent = "peek";
  let lastY = 0;
  let lastX = 0;
  let lastT = 0;
  let velY = 0;
  let velX = 0;
  let activePointerId = null;
  const TAP_SLOP_PX = 12;
  const EDGE_OPEN_PX = 28;
  const WIDE_INTERACTIVE =
    'input, button, a, textarea, select, label, .seg, [role="slider"], [data-no-sheet-drag]';

  function peekH() {
    return Math.max(handle?.offsetHeight || 34, 34) + 8;
  }
  function partialH() {
    return measurePartialHeight() || window.innerHeight * 0.38;
  }
  function fullH() {
    const vh = window.innerHeight || 640;
    return Math.min(vh * 0.92, vh - 72);
  }

  function wideSheetWidth() {
    return sheet?.offsetWidth || 0;
  }

  /**
   * @param {EventTarget | null} target
   */
  function isWideInteractiveTarget(target) {
    if (!(target instanceof Element)) return false;
    return Boolean(target.closest(WIDE_INTERACTIVE));
  }

  function cycleDetent() {
    if (isWide()) {
      setDetent(detent === "open" ? "closed" : "open");
      return;
    }
    // closed (peek) → small (partial) → full → closed
    if (detent === "peek") setDetent("partial");
    else if (detent === "partial") setDetent("full");
    else setDetent("peek");
  }

  function clearInlineWide() {
    if (!sheet) return;
    sheet.style.transform = "";
    sheet.style.opacity = "";
    sheet.style.pointerEvents = "";
  }

  function beginWideDrag(ev, kind, tx) {
    if (!sheet) return;
    dragging = true;
    pendingWideClose = false;
    dragKind = kind;
    didDrag = false;
    startDetent = detent;
    startY = ev.clientY;
    startX = ev.clientX;
    lastY = startY;
    lastX = startX;
    lastT = performance.now();
    velY = 0;
    velX = 0;
    startTX = tx;
    activePointerId = ev.pointerId;
    sheet.classList.add("is-dragging");
    sheet.style.transform = `translateX(${startTX}px)`;
    sheet.style.pointerEvents = "auto";
    try {
      sheet.setPointerCapture(ev.pointerId);
    } catch (_) {
      /* ignore */
    }
  }

  function onNarrowPointerDown(ev) {
    if (!sheet || !handle) return;
    if (
      ev.target !== handle &&
      !handle.contains(/** @type {Node} */ (ev.target))
    ) {
      if (ev.target !== sheet) return;
    }
    dragging = true;
    pendingWideClose = false;
    dragKind = "narrow";
    didDrag = false;
    startDetent = detent;
    sheet.classList.add("is-dragging");
    startY = ev.clientY;
    startX = ev.clientX;
    lastY = startY;
    lastX = startX;
    lastT = performance.now();
    velY = 0;
    velX = 0;
    startH = sheet.getBoundingClientRect().height;
    activePointerId = ev.pointerId;
    try {
      handle.setPointerCapture(ev.pointerId);
    } catch (_) {
      /* ignore */
    }
    ev.preventDefault();
  }

  function onWidePointerDown(ev) {
    if (!sheet) return;
    if (ev.pointerType === "mouse" && ev.button !== 0) return;
    // Don't steal events from the toggle / other chrome buttons.
    if (ev.target instanceof Element && ev.target.closest(".chrome-btn")) {
      return;
    }

    const w = wideSheetWidth();
    if (detent === "closed") {
      const edgeLeft = window.innerWidth - EDGE_OPEN_PX - readSafeInset("r");
      if (ev.clientX < edgeLeft) return;
      beginWideDrag(ev, "wide-open", w);
      ev.preventDefault();
      return;
    }

    // Open: dismiss swipe must start on the pane, not on controls.
    if (!sheet.contains(/** @type {Node} */ (ev.target))) return;
    if (isWideInteractiveTarget(ev.target)) return;

    dragging = true;
    pendingWideClose = true;
    dragKind = "wide-close";
    didDrag = false;
    startDetent = detent;
    startY = ev.clientY;
    startX = ev.clientX;
    lastY = startY;
    lastX = startX;
    lastT = performance.now();
    velY = 0;
    velX = 0;
    startTX = 0;
    activePointerId = ev.pointerId;
    // Don't capture yet — wait until horizontal intent is clear so
    // vertical scrolling in the pane still works.
  }

  function onPointerDown(ev) {
    if (isWide()) onWidePointerDown(ev);
    else onNarrowPointerDown(ev);
  }

  function onPointerMove(ev) {
    if (!dragging || !sheet) return;
    if (activePointerId != null && ev.pointerId !== activePointerId) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    const dist = Math.hypot(ev.clientX - startX, ev.clientY - startY);

    if (pendingWideClose) {
      if (dist <= TAP_SLOP_PX) return;
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      // Vertical scroll wins unless the gesture is clearly horizontal
      // and moving toward dismiss (right).
      if (Math.abs(dx) < Math.abs(dy) * 1.15 || dx <= 0) {
        dragging = false;
        pendingWideClose = false;
        dragKind = null;
        activePointerId = null;
        return;
      }
      pendingWideClose = false;
      didDrag = true;
      sheet.classList.add("is-dragging");
      if (scroll) scroll.style.overflow = "hidden";
      try {
        sheet.setPointerCapture(ev.pointerId);
      } catch (_) {
        /* ignore */
      }
      ev.preventDefault();
    }

    if (dist > TAP_SLOP_PX) didDrag = true;

    if (dragKind === "narrow") {
      const dy = startY - ev.clientY; // up = taller
      velY = ((lastY - ev.clientY) / dt) * 1000;
      lastY = ev.clientY;
      lastT = now;
      const minH = peekH();
      const maxH = fullH();
      const h = Math.max(minH, Math.min(maxH, startH + dy));
      sheet.style.height = `${h}px`;
      return;
    }

    // Wide horizontal
    const dx = ev.clientX - startX;
    velX = ((ev.clientX - lastX) / dt) * 1000;
    lastX = ev.clientX;
    lastT = now;
    const w = wideSheetWidth();
    const x = Math.max(0, Math.min(w, startTX + dx));
    sheet.style.transform = `translateX(${x}px)`;
  }

  function nearestNarrow(h, v) {
    const targets = [
      { name: "peek", h: peekH() },
      { name: "partial", h: partialH() },
      { name: "full", h: fullH() },
    ];
    const startIdx = Math.max(
      0,
      targets.findIndex((t) => t.name === startDetent),
    );
    const startTargetH = targets[startIdx].h;
    // Tiny moves / light flings stay put (native sheet feel).
    if (Math.abs(h - startTargetH) < 36 && Math.abs(v) < 1100) {
      return startDetent;
    }
    // Light velocity projection — short flings barely move the decision point.
    const projected = h + v * 0.05;
    const mid01 = (targets[0].h + targets[1].h) / 2;
    const mid12 = (targets[1].h + targets[2].h) / 2;
    let idx = projected < mid01 ? 0 : projected < mid12 ? 1 : 2;
    // Never skip a detent in one gesture.
    if (idx > startIdx + 1) idx = startIdx + 1;
    if (idx < startIdx - 1) idx = startIdx - 1;
    // Reaching full requires crossing well past the partial↔full midpoint
    // or a strong sustained fling from partial — not a short flick from peek.
    if (idx === 2 && startIdx < 2) {
      const need = mid12 + (targets[2].h - mid12) * 0.25;
      if (h < need && v < 1400) idx = 1;
    }
    return targets[idx].name;
  }

  function nearestWide(x, v) {
    const w = wideSheetWidth();
    if (w <= 0) return startDetent;
    if (Math.abs(x - (startDetent === "closed" ? w : 0)) < 28 && Math.abs(v) < 800) {
      return startDetent;
    }
    if (v > 900) return "closed";
    if (v < -900) return "open";
    return x > w * 0.45 ? "closed" : "open";
  }

  function onPointerUp(ev) {
    if (!dragging || !sheet) return;
    if (activePointerId != null && ev.pointerId !== activePointerId) return;
    const kind = dragKind;
    const wasPending = pendingWideClose;
    dragging = false;
    pendingWideClose = false;
    dragKind = null;
    activePointerId = null;
    sheet.classList.remove("is-dragging");
    if (scroll) scroll.style.overflow = "";

    if (wasPending && !didDrag) {
      // Tap on non-interactive pane chrome — ignore.
      return;
    }

    if (!didDrag) {
      if (kind === "narrow") {
        sheet.style.height = "";
        cycleDetent();
      } else if (kind === "wide-open") {
        // Tap on the edge hit zone opens the pane.
        clearInlineWide();
        setDetent("open");
      } else {
        clearInlineWide();
      }
      return;
    }

    if (kind === "narrow") {
      const h = sheet.getBoundingClientRect().height;
      sheet.style.height = "";
      setDetent(nearestNarrow(h, velY));
      return;
    }

    const m = /translateX\(([-\d.]+)px\)/.exec(sheet.style.transform || "");
    const x = m ? parseFloat(m[1]) : 0;
    clearInlineWide();
    setDetent(nearestWide(x, velX));
  }

  // Narrow: grabber only. Wide: document-level so edge-open works while closed.
  handle?.addEventListener("pointerdown", (ev) => {
    if (isWide()) return;
    onPointerDown(ev);
  });
  handle?.addEventListener("pointermove", onPointerMove);
  handle?.addEventListener("pointerup", onPointerUp);
  handle?.addEventListener("pointercancel", onPointerUp);
  if (handle) {
    handle.setAttribute(
      "aria-label",
      "Sheet handle — tap to resize, drag to adjust",
    );
  }

  document.addEventListener(
    "pointerdown",
    (ev) => {
      if (!isWide()) return;
      onWidePointerDown(ev);
    },
    { capture: true },
  );
  document.addEventListener("pointermove", onPointerMove, { capture: true });
  document.addEventListener("pointerup", onPointerUp, { capture: true });
  document.addEventListener("pointercancel", onPointerUp, { capture: true });

  const onWideChange = () => {
    sheet && (sheet.style.height = "");
    clearInlineWide();
    if (scroll) scroll.style.overflow = "";
    applyDefaultForViewport();
  };
  if (wideMq.addEventListener) wideMq.addEventListener("change", onWideChange);
  else wideMq.addListener(onWideChange);

  function syncTheme() {
    onTheme(darkMq.matches);
  }
  syncTheme();
  if (darkMq.addEventListener) darkMq.addEventListener("change", syncTheme);
  else darkMq.addListener(syncTheme);

  window.addEventListener("resize", () => {
    measurePartialHeight();
    notify();
  });

  applyDefaultForViewport();
  syncToggle();

  return {
    getDetent,
    getSafeInsets,
    onDetentChange,
    refreshPartialHeight,
    setDetent,
  };
}
