/**
 * Shared edit-mode helpers and panel CSS.
 * Structural split from editMode.js; behavior is unchanged.
 */
export const PANEL_WIDE_PX = 560;
export const WALL_SNAP_MAX_M = 0.8;
export const FRAME_WALL_M = 1.1;
export const SELECT_COLOR = 0xffb020;

/** Removed from the translate gizmo: Petr asked for arrows, not planes. */
export const PLANE_HANDLES = new Set(["XY", "YZ", "XZ", "XYZ"]);

/** Hold − / +: first repeat after this delay. */
export const HOLD_DELAY_MS = 400;

/**
 * Repeat rate for a held − / + button, by how long it has been held: the
 * step grows from 1× to 5× to 10× the snap step (1 cm → 5 cm → 10 cm at
 * the 1 cm snap) and the interval shortens.
 * @param {number} heldMs
 */
export function holdRate(heldMs) {
  if (heldMs < 1200) return { factor: 1, interval: 110 };
  if (heldMs < 2400) return { factor: 5, interval: 90 };
  return { factor: 10, interval: 70 };
}

/** `FixtureEdits-YYYYMMDD-HHMM.json`, local time. */
export function shareFileName(date) {
  const pad = (n) => String(n).padStart(2, "0");
  const d = date instanceof Date ? date : new Date();
  return `FixtureEdits-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}.json`;
}

export function cssEscape(value) {
  if (typeof CSS !== "undefined" && CSS.escape) return CSS.escape(value);
  return String(value).replace(/["\\]/g, "\\$&");
}

export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

let stylesInjected = false;
export function injectStyles() {
  if (stylesInjected || typeof document === "undefined") return;
  stylesInjected = true;
  const style = document.createElement("style");
  style.id = "bp-edit-styles";
  style.textContent = `
  .edit-panel { position: fixed; z-index: 30; left: 0; right: 0; bottom: 0; height: 56vh;
    display: flex; flex-direction: column; box-sizing: border-box;
    padding: 0 0 env(safe-area-inset-bottom);
    background: rgba(28, 28, 30, 0.92); color: #f5f5f7;
    -webkit-backdrop-filter: blur(18px) saturate(1.4); backdrop-filter: blur(18px) saturate(1.4);
    border-top: 1px solid rgba(255,255,255,0.12); border-radius: 14px 14px 0 0;
    font-size: 14px; }
  .edit-panel[hidden] { display: none; }
  .edit-panel.is-collapsed { height: auto; max-height: 52vh; }
  .edit-panel.is-collapsed .edit-search, .edit-panel.is-collapsed .edit-table-wrap { display: none; }
  @media (min-width: 768px) {
    .edit-panel { left: auto; top: 0; width: ${PANEL_WIDE_PX}px; max-width: 60vw; height: auto;
      border-top: none; border-left: 1px solid rgba(255,255,255,0.12); border-radius: 0;
      padding-top: calc(env(safe-area-inset-top) + 56px); }
    .edit-panel.is-collapsed { max-height: none; }
  }
  @media (prefers-color-scheme: light) {
    .edit-panel { background: rgba(246, 246, 248, 0.94); color: #1c1c1e; border-color: rgba(0,0,0,0.12); }
    .edit-table th { background: rgba(246, 246, 248, 0.98) !important; }
    .edit-btn, .edit-seg, .edit-panel input, .edit-panel textarea { color: #1c1c1e !important;
      background: rgba(0,0,0,0.06) !important; border-color: rgba(0,0,0,0.14) !important; }
    .edit-table tr.is-selected td { background: rgba(255,176,32,0.35) !important; }
    .edit-seg.is-on { background: #0a84ff !important; border-color: #0a84ff !important; color: #fff !important; }
    .edit-panel .edit-share { background: #0a84ff !important; border-color: #0a84ff !important; color: #fff !important; }
  }
  .edit-head { display: flex; align-items: center; gap: 8px; padding: 6px 10px; min-height: 48px; box-sizing: border-box; }
  .edit-title { margin: 0; font-size: 16px; font-weight: 600; }
  .edit-count { opacity: 0.65; font-size: 13px; }
  .edit-spacer { flex: 1 1 auto; }
  .edit-btn, .edit-seg { min-height: 44px; min-width: 44px; padding: 0 12px; border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.08); color: inherit;
    font: inherit; cursor: pointer; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
  .edit-btn:active, .edit-seg:active, .edit-btn.is-held { transform: scale(0.96); filter: brightness(1.3); }
  /* A long press on a button must not select its text or open the callout. */
  .edit-panel button, .edit-panel summary, .edit-head, .edit-axis-label {
    -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; touch-action: manipulation; }
  .edit-btn:disabled { opacity: 0.4; }
  .edit-btn[hidden] { display: none; }
  .edit-share { background: #0a84ff; border-color: #0a84ff; color: #fff; }
  .edit-btn.has-edits { background: #0a84ff; border-color: #0a84ff; color: #fff; }
  .edit-danger { color: #ff6961 !important; }
  .edit-seg { min-width: 0; padding: 0 10px; }
  .edit-seg.is-on { background: #0a84ff; border-color: #0a84ff; color: #fff !important; }
  .edit-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 4px 0; }
  .edit-export { padding: 4px 10px 8px; }
  .edit-export textarea { width: 100%; box-sizing: border-box; font: 12px ui-monospace, Menlo, monospace;
    background: rgba(0,0,0,0.3); color: inherit; border: 1px solid rgba(255,255,255,0.16); border-radius: 8px; }
  .edit-hint { margin: 2px 0 6px; font-size: 13px; opacity: 0.8; }
  .edit-detail { padding: 2px 10px 6px; border-bottom: 1px solid rgba(127,127,127,0.25); overflow-y: auto; max-height: 36vh; flex: 0 0 auto; }
  .edit-panel.is-collapsed .edit-detail { max-height: none; }
  .edit-detail-head { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; padding: 2px 0 4px; }
  .edit-detail-name { opacity: 0.75; font-size: 13px; }
  .edit-badge { font-size: 12px; padding: 1px 8px; border-radius: 8px; background: #0a84ff; color: #fff; }
  .edit-badge[data-state="deleted"] { background: #ff453a; }
  .edit-badge[data-state="added"] { background: #30d158; color: #000; }
  .edit-axes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
  .edit-axis { display: flex; flex-direction: column; gap: 4px; padding-left: 6px;
    border-left: 4px solid currentColor; }
  .edit-axis-top { display: flex; align-items: center; gap: 4px; }
  .edit-axis-nudges { display: flex; gap: 4px; }
  .edit-axis-nudges .edit-btn { flex: 1 1 0; }
  .edit-axis-label { font-weight: 700; width: 12px; }
  .edit-axis input { min-width: 0; width: 100%; min-height: 44px; box-sizing: border-box; text-align: center;
    font: 14px ui-monospace, Menlo, monospace; color: inherit; background: rgba(0,0,0,0.25);
    border: 1px solid rgba(255,255,255,0.16); border-radius: 8px; padding: 0 2px; }
  .edit-nudge { padding: 0; min-width: 36px; font-size: 18px; }
  .axis-x { color: #ff5a52; } .axis-y { color: #4b8bff; } .axis-z { color: #3ccf5a; }
  .edit-axis input, .edit-axis button { color: inherit; }
  .edit-panel .edit-axis input { color: #f5f5f7; }
  .edit-snap { font-size: 13px; opacity: 0.75; }
  .edit-more summary { min-height: 36px; line-height: 36px; cursor: pointer; opacity: 0.85; }
  .edit-props { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 6px; }
  .edit-prop { display: flex; flex-direction: column; font-size: 12px; gap: 2px; opacity: 0.95; }
  .edit-prop input { min-height: 40px; box-sizing: border-box; font: inherit; font-size: 14px; color: inherit;
    background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.16); border-radius: 8px; padding: 0 8px; }
  .edit-search { padding: 6px 10px; display: flex; gap: 8px; align-items: center; }
  .edit-search input[type="search"] { flex: 1 1 auto; }
  .edit-cables-on { display: flex; align-items: center; gap: 6px; white-space: nowrap; font-size: 13px; min-height: 40px; }
  .edit-cables-on[hidden] { display: none; }
  .edit-cables-on input { width: 22px; height: 22px; margin: 0; }
  .edit-tabs { display: flex; gap: 4px; }
  .edit-tabs[hidden] { display: none; }
  .edit-tabs .edit-seg { font-weight: 600; }
  .edit-kind { display: inline-block; width: 10px; height: 10px; border-radius: 5px; margin-right: 6px; vertical-align: 0; }
  .edit-kind[data-kind="data"] { background: #0a84ff; }
  .edit-kind[data-kind="lv"] { background: #ffc400; }
  .edit-kind[data-kind="power"] { background: #ff3b30; }
  .edit-table tr[data-kind="data"] td:first-child { box-shadow: inset 4px 0 0 #0a84ff; }
  .edit-table tr[data-kind="lv"] td:first-child { box-shadow: inset 4px 0 0 #ffc400; }
  .edit-table tr[data-kind="power"] td:first-child { box-shadow: inset 4px 0 0 #ff3b30; }
  .edit-table tr.is-tail td { opacity: 0.8; }
  .edit-search input { width: 100%; box-sizing: border-box; min-height: 40px; font: inherit; font-size: 16px;
    color: inherit; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.16); border-radius: 10px; padding: 0 10px; }
  .edit-table-wrap { flex: 1 1 auto; overflow: auto; -webkit-overflow-scrolling: touch; min-height: 0; }
  .edit-table { border-collapse: collapse; width: max-content; min-width: 100%; font-size: 13px; }
  .edit-table th { position: sticky; top: 0; z-index: 1; text-align: left; font-weight: 600; padding: 6px 8px;
    background: rgba(28, 28, 30, 0.98); border-bottom: 1px solid rgba(127,127,127,0.35); white-space: nowrap; }
  .edit-table td { padding: 0 8px; height: 44px; border-bottom: 1px solid rgba(127,127,127,0.18); white-space: nowrap;
    max-width: 220px; overflow: hidden; text-overflow: ellipsis; cursor: pointer; }
  .edit-table td.num { text-align: right; font-family: ui-monospace, Menlo, monospace; }
  .edit-table tr.same-cable td:nth-child(-n+2) { color: transparent; text-shadow: none; }
  .edit-table tr.same-cable td { border-top: none; }
  .edit-table tr[data-state="edited"] td:nth-child(4) { box-shadow: inset 4px 0 0 #0a84ff; }
  .edit-table tr[data-state="added"] td:nth-child(4) { box-shadow: inset 4px 0 0 #30d158; }
  .edit-table tr[data-state="deleted"] td { text-decoration: line-through; opacity: 0.55; }
  .edit-table tr.is-selected td { background: rgba(255,176,32,0.28); }
  .mono { font-family: ui-monospace, Menlo, monospace; }
  .edit-flash { position: absolute; left: 50%; top: 52px; transform: translateX(-50%); padding: 8px 14px;
    border-radius: 10px; background: #0a84ff; color: #fff; font-size: 14px; pointer-events: none; }
  body.bp-editing #walk-hint { display: none; }
  `;
  document.head.appendChild(style);
}
