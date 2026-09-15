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
  --sheet-full-h: calc(100dvh - var(--safe-t) - 4.5rem);
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
  display: flex;
  gap: 8px;
  align-items: center;
  pointer-events: none;
}

.top-chrome > * { pointer-events: auto; }

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
#ar:not([hidden]) { min-width: auto; }

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
}

.sheet-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0.15rem 1rem calc(1rem + var(--safe-b));
  overscroll-behavior: contain;
}

.sheet[data-detent="peek"] .sheet-scroll {
  pointer-events: none;
  opacity: 0;
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

/* Narrow: bottom sheet */
@media (max-width: 767px) {
  .sheet {
    left: calc(var(--safe-l) + 10px);
    right: calc(var(--safe-r) + 10px);
    bottom: calc(var(--safe-b) + 10px);
    height: var(--sheet-peek-h);
    max-height: var(--sheet-full-h);
    border-radius: var(--radius);
  }
  .sheet[data-detent="peek"] {
    height: var(--sheet-peek-h);
  }
  .sheet[data-detent="partial"] {
    height: var(--sheet-partial-h);
  }
  .sheet[data-detent="full"] {
    height: var(--sheet-full-h);
  }
}

/* Wide: right sheet */
@media (min-width: 768px) {
  .sheet {
    top: calc(var(--safe-t) + 4.25rem);
    right: calc(var(--safe-r) + 12px);
    bottom: calc(var(--safe-b) + 12px);
    width: var(--sheet-w);
    border-radius: var(--radius);
    height: auto;
  }
  .sheet-handle {
    position: absolute;
    left: -0.15rem;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
    height: 3.5rem;
    padding: 0;
    margin: 0;
    z-index: 1;
  }
  .sheet-handle::after {
    width: 0.28rem;
    height: 2.25rem;
    margin: 0.625rem auto 0;
  }
  .sheet-scroll { padding-top: 0.85rem; }
  .sheet[data-detent="closed"] {
    transform: translateX(calc(100% + 28px));
    opacity: 0.96;
    pointer-events: none;
  }
  .sheet[data-detent="closed"] .sheet-handle {
    pointer-events: auto;
  }
  .sheet[data-detent="open"] {
    transform: translateX(0);
    opacity: 1;
  }
}

.seg {
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: var(--radius-sm);
  background: var(--fill);
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

  /**
   * Insets used for camera framing. Only partial (phone) / open (wide).
   * @returns {{ top: number, right: number, bottom: number, left: number }}
   */
  function getSafeInsets() {
    const zero = { top: 0, right: 0, bottom: 0, left: 0 };
    if (!sheet) return zero;
    if (isWide()) {
      if (detent !== "open") return zero;
      const rect = sheet.getBoundingClientRect();
      const gap = 12;
      return {
        top: 0,
        right: Math.max(0, Math.round(window.innerWidth - rect.left + gap)),
        bottom: 0,
        left: 0,
      };
    }
    if (detent !== "partial") return zero;
    const rect = sheet.getBoundingClientRect();
    const gap = 10;
    return {
      top: 0,
      right: 0,
      bottom: Math.max(0, Math.round(window.innerHeight - rect.top + gap)),
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
    if (!opts.silent) notify();
  }

  function applyDefaultForViewport() {
    if (isWide()) setDetent("open");
    else setDetent("peek");
    measurePartialHeight();
  }

  // --- Drag (narrow: vertical height; wide: horizontal translate) ---
  let dragging = false;
  let startY = 0;
  let startX = 0;
  let startH = 0;
  let startTX = 0;
  let lastY = 0;
  let lastX = 0;
  let lastT = 0;
  let velY = 0;
  let velX = 0;

  function peekH() {
    // Prefer measured handle; CSS rem tokens don't parse as px via parseFloat.
    return Math.max(handle?.offsetHeight || 34, 34);
  }
  function partialH() {
    return measurePartialHeight() || window.innerHeight * 0.38;
  }
  function fullH() {
    const vh = window.innerHeight || 640;
    return Math.min(vh * 0.92, vh - 72);
  }

  function onPointerDown(ev) {
    if (!sheet || !handle) return;
    if (ev.target !== handle && !handle.contains(/** @type {Node} */ (ev.target))) {
      // Allow dragging from the top padding of the sheet near the handle only.
      if (!(ev.target === sheet)) return;
    }
    dragging = true;
    sheet.classList.add("is-dragging");
    startY = ev.clientY;
    startX = ev.clientX;
    lastY = startY;
    lastX = startX;
    lastT = performance.now();
    velY = 0;
    velX = 0;
    if (isWide()) {
      const m = /translateX\(([-\d.]+)px\)/.exec(sheet.style.transform || "");
      startTX = m ? parseFloat(m[1]) : detent === "closed" ? sheet.offsetWidth + 28 : 0;
      sheet.style.transform = `translateX(${startTX}px)`;
      sheet.style.opacity = "1";
      sheet.style.pointerEvents = "auto";
    } else {
      startH = sheet.getBoundingClientRect().height;
    }
    try {
      handle.setPointerCapture(ev.pointerId);
    } catch (_) {
      /* ignore */
    }
    ev.preventDefault();
  }

  function onPointerMove(ev) {
    if (!dragging || !sheet) return;
    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    if (isWide()) {
      const dx = ev.clientX - startX;
      velX = ((ev.clientX - lastX) / dt) * 1000;
      lastX = ev.clientX;
      lastT = now;
      const w = sheet.offsetWidth + 28;
      const x = Math.max(0, Math.min(w, startTX + dx));
      sheet.style.transform = `translateX(${x}px)`;
    } else {
      const dy = startY - ev.clientY; // up = taller
      velY = ((lastY - ev.clientY) / dt) * 1000;
      lastY = ev.clientY;
      lastT = now;
      const minH = peekH();
      const maxH = fullH();
      const h = Math.max(minH, Math.min(maxH, startH + dy));
      sheet.style.height = `${h}px`;
    }
  }

  function nearestNarrow(h, v) {
    const targets = [
      { name: "peek", h: peekH() },
      { name: "partial", h: partialH() },
      { name: "full", h: fullH() },
    ];
    let idx = 0;
    let bestD = Math.abs(h - targets[0].h);
    for (let i = 1; i < targets.length; i++) {
      const d = Math.abs(h - targets[i].h);
      if (d < bestD) {
        bestD = d;
        idx = i;
      }
    }
    if (v > 650 && idx < targets.length - 1) idx += 1;
    else if (v < -650 && idx > 0) idx -= 1;
    return targets[idx].name;
  }

  function nearestWide(x, v) {
    const w = sheet.offsetWidth + 28;
    if (v > 500) return "closed";
    if (v < -500) return "open";
    return x > w * 0.45 ? "closed" : "open";
  }

  function onPointerUp() {
    if (!dragging || !sheet) return;
    dragging = false;
    sheet.classList.remove("is-dragging");
    if (isWide()) {
      const m = /translateX\(([-\d.]+)px\)/.exec(sheet.style.transform || "");
      const x = m ? parseFloat(m[1]) : 0;
      sheet.style.transform = "";
      sheet.style.opacity = "";
      sheet.style.pointerEvents = "";
      setDetent(nearestWide(x, velX));
    } else {
      const h = sheet.getBoundingClientRect().height;
      sheet.style.height = "";
      setDetent(nearestNarrow(h, velY));
    }
  }

  handle?.addEventListener("pointerdown", onPointerDown);
  handle?.addEventListener("pointermove", onPointerMove);
  handle?.addEventListener("pointerup", onPointerUp);
  handle?.addEventListener("pointercancel", onPointerUp);
  // Double-tap handle: cycle peek → partial → full (narrow) / toggle (wide)
  let lastTap = 0;
  handle?.addEventListener("click", () => {
    const now = performance.now();
    if (now - lastTap > 350) {
      lastTap = now;
      return;
    }
    lastTap = 0;
    if (isWide()) {
      setDetent(detent === "open" ? "closed" : "open");
    } else if (detent === "peek") setDetent("partial");
    else if (detent === "partial") setDetent("full");
    else setDetent("peek");
  });

  const onWideChange = () => {
    sheet && (sheet.style.height = "");
    sheet && (sheet.style.transform = "");
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

  return {
    getDetent,
    getSafeInsets,
    onDetentChange,
    refreshPartialHeight,
    setDetent,
  };
}
