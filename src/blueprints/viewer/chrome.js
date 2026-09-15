/**
 * Liquid-glass viewer chrome: styles, sheet collapse, light/dark scene sync.
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
  --fg-secondary: rgba(60, 60, 67, 0.72);
  --glass: rgba(255, 255, 255, 0.48);
  --glass-strong: rgba(255, 255, 255, 0.72);
  --glass-border: rgba(255, 255, 255, 0.62);
  --hairline: rgba(60, 60, 67, 0.18);
  --fill: rgba(120, 120, 128, 0.16);
  --fill-active: rgba(120, 120, 128, 0.28);
  --accent: #007aff;
  --accent-fg: #fff;
  --danger-fg: #ff3b30;
  --shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.06);
  --radius: 20px;
  --radius-sm: 12px;
  --blur: 28px;
  --sheet-w: min(22rem, 42vw);
  --sheet-h: min(52vh, 28rem);
  --chrome-pad: 12px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1c1c1e;
    --fg: #f5f5f7;
    --fg-secondary: rgba(235, 235, 245, 0.6);
    --glass: rgba(36, 36, 38, 0.55);
    --glass-strong: rgba(58, 58, 60, 0.78);
    --glass-border: rgba(255, 255, 255, 0.16);
    --hairline: rgba(84, 84, 88, 0.65);
    --fill: rgba(120, 120, 128, 0.28);
    --fill-active: rgba(120, 120, 128, 0.42);
    --shadow: 0 10px 36px rgba(0, 0, 0, 0.45), 0 1px 2px rgba(0, 0, 0, 0.3);
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
  -webkit-backdrop-filter: blur(var(--blur)) saturate(1.4);
  backdrop-filter: blur(var(--blur)) saturate(1.4);
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
  -webkit-backdrop-filter: blur(var(--blur)) saturate(1.55);
  backdrop-filter: blur(var(--blur)) saturate(1.55);
  transition: transform 0.32s cubic-bezier(0.32, 0.72, 0, 1),
    opacity 0.24s ease;
}

.sheet-handle {
  appearance: none;
  flex: 0 0 auto;
  align-self: center;
  width: 2.25rem;
  height: 1.15rem;
  margin: 0.35rem 0 0.15rem;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.sheet-handle::after {
  content: "";
  display: block;
  width: 2.25rem;
  height: 0.3rem;
  margin: 0.35rem auto 0;
  border-radius: 999px;
  background: var(--fg-secondary);
  opacity: 0.55;
}

.sheet-scroll {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0.25rem 1rem calc(1rem + var(--safe-b));
  overscroll-behavior: contain;
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
    max-height: var(--sheet-h);
    border-radius: var(--radius);
  }
  .sheet[data-collapsed="true"] {
    transform: translateY(calc(100% - 2.1rem));
  }
  .sheet[data-collapsed="true"] .sheet-scroll {
    pointer-events: none;
    opacity: 0;
  }
  body.sheet-open .top-chrome #sheet-toggle {
    background: var(--fill-active);
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
  }
  .sheet-handle { display: none; }
  .sheet-scroll { padding-top: 0.85rem; }
  .sheet[data-collapsed="true"] {
    transform: translateX(calc(100% + 24px));
    opacity: 0;
    pointer-events: none;
  }
  body:not(.sheet-open) #sheet-toggle {
    /* closed: default */
  }
  body.sheet-open #sheet-toggle {
    background: var(--fill-active);
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

/* iOS-like switch */
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
  const toggle = document.getElementById("sheet-toggle");
  const handle = document.getElementById("sheet-handle");
  const wideMq = window.matchMedia("(min-width: 768px)");
  const darkMq = window.matchMedia("(prefers-color-scheme: dark)");

  function setOpen(open) {
    if (!sheet) return;
    sheet.dataset.collapsed = open ? "false" : "true";
    document.body.classList.toggle("sheet-open", open);
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function isOpen() {
    return sheet?.dataset.collapsed !== "true";
  }

  function applyDefaultForViewport() {
    // Wide: open by default; narrow: collapsed.
    setOpen(wideMq.matches);
  }

  function toggleSheet() {
    setOpen(!isOpen());
  }

  toggle?.addEventListener("click", toggleSheet);
  handle?.addEventListener("click", toggleSheet);

  const onWideChange = () => applyDefaultForViewport();
  if (wideMq.addEventListener) wideMq.addEventListener("change", onWideChange);
  else wideMq.addListener(onWideChange);

  function syncTheme() {
    onTheme(darkMq.matches);
  }
  syncTheme();
  if (darkMq.addEventListener) darkMq.addEventListener("change", syncTheme);
  else darkMq.addListener(syncTheme);

  applyDefaultForViewport();

  return { setOpen, isOpen, toggleSheet };
}
