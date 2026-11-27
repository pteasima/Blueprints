/**
 * Edit-mode panel, fixture and cable tables, detail controls, and hold-to-repeat.
 * Structural split from editMode.js; behavior is unchanged.
 */
import { EDITABLE_PROPS, rowSearchText } from "./fixtureEdits.js";
import { isLocked, polylineLength, routeSearchText } from "./cableEdits.js";
import {
  HOLD_DELAY_MS,
  PANEL_WIDE_PX,
  cssEscape,
  escapeHtml,
  holdRate,
  injectStyles,
  shareFileName,
} from "./editModeUtils.js";

/**
 * @param {object} em edit-mode session bag shared with createEditMode and the other attach* modules
 */
export function attachEditPanel(em) {
  const ctx = em.ctx;
  const canvas = em.canvas;
  const controls = em.controls;
  const t = em.t;

  // --- DOM ---
  injectStyles();
  const button = document.createElement("button");
  button.type = "button";
  button.id = "edit";
  button.className = "chrome-btn";
  button.hidden = true;
  button.setAttribute("aria-pressed", "false");
  const startBar = document.querySelector(".top-chrome-start") || document.getElementById("top-chrome");
  if (startBar) {
    const walkBtn = document.getElementById("walk");
    if (walkBtn && walkBtn.parentElement === startBar) walkBtn.after(button);
    else startBar.appendChild(button);
  }
  button.addEventListener("click", () => em.setActive(!em.active));

  const panel = document.createElement("aside");
  panel.id = "edit-panel";
  panel.className = "edit-panel";
  panel.hidden = true;
  panel.innerHTML = `
    <header class="edit-head">
      <button type="button" class="edit-btn edit-collapse" data-role="collapse" aria-expanded="true">▾</button>
      <h2 class="edit-title" data-role="title"></h2>
      <div class="edit-tabs" data-role="tabs" role="tablist" hidden>
        <button type="button" class="edit-seg" role="tab" data-view="fixtures"></button>
        <button type="button" class="edit-seg" role="tab" data-view="cables"></button>
      </div>
      <span class="edit-count" data-role="count"></span>
      <span class="edit-spacer"></span>
      <button type="button" class="edit-btn" data-role="export"></button>
    </header>
    <div class="edit-export" data-role="export-box" hidden>
      <p class="edit-hint" data-role="export-hint"></p>
      <textarea readonly rows="6" data-role="export-text"></textarea>
      <div class="edit-row">
        <button type="button" class="edit-btn edit-share" data-role="share" hidden></button>
        <button type="button" class="edit-btn" data-role="share-file" hidden></button>
        <button type="button" class="edit-btn" data-role="copy"></button>
        <button type="button" class="edit-btn" data-role="download"></button>
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn edit-danger" data-role="discard"></button>
        <button type="button" class="edit-btn" data-role="export-close">✕</button>
      </div>
    </div>
    <section class="edit-detail" data-role="detail" hidden></section>
    <div class="edit-search">
      <input type="search" data-role="search" autocomplete="off" spellcheck="false"/>
      <label class="edit-cables-on" data-role="cables-label" hidden><input type="checkbox" data-role="cables-on" checked/><span data-role="cables-on-text"></span></label>
    </div>
    <div class="edit-table-wrap" data-role="wrap">
      <table class="edit-table">
        <thead><tr data-role="head"></tr></thead>
        <tbody data-role="body"></tbody>
      </table>
    </div>`;
  document.body.appendChild(panel);
  const $ = (role) => panel.querySelector(`[data-role="${role}"]`);
  const tbody = $("body");
  const detail = $("detail");
  const exportBox = $("export-box");
  const exportText = $("export-text");

  const COLUMNS = [
    { key: "room", label: "edit.colRoom" },
    { key: "cable", label: "edit.colCable" },
    { key: "code", label: "edit.colDevice" },
    { key: "id", label: "edit.colId" },
    { key: "name", label: "edit.colName" },
    { key: "spec", label: "edit.colSpec" },
    { key: "length", label: "edit.colLength" },
    { key: "panel", label: "edit.colPanel" },
    { key: "note", label: "edit.colNote" },
    { key: "x", label: "x", axis: 0 },
    { key: "y", label: "y", axis: 1 },
    { key: "z", label: "z", axis: 2 },
  ];
  const PROP_OF = { cable: "CableNumber", code: "DeviceCode", spec: "CableSpec", length: "CableLength", panel: "Panel", note: "Note" };

  function fmt(v) {
    return v == null || v === "" ? "" : String(v);
  }

  function fmtM(v) {
    return Number.isFinite(v) ? v.toFixed(3) : "";
  }

  function cellText(row, col) {
    if (col.axis != null) {
      const pos = em.currentTarget(row.id);
      return pos ? fmtM(pos[col.axis]) : row.hostId ? `→ ${row.hostId}` : "";
    }
    if (PROP_OF[col.key]) return fmt(em.propValue(row.id, PROP_OF[col.key]));
    if (col.key === "room") return row.room;
    return fmt(row[col.key]);
  }


  const CABLE_COLUMNS = [
    { key: "room", label: "edit.colRoom" },
    { key: "cable", label: "edit.colCable" },
    { key: "id", label: "edit.colRoute" },
    { key: "ends", label: "edit.colEnds" },
    { key: "spec", label: "edit.colSpec" },
    { key: "schedule", label: "edit.colScheduleLength", num: true },
    { key: "modelled", label: "edit.colModelled", num: true },
    { key: "vertices", label: "edit.colVertices", num: true },
  ];

  function cableCell(route, key) {
    if (key === "room") return route.room;
    if (key === "cable") return route.tail ? `${route.cable ?? ""} ↳` : fmt(route.cable);
    if (key === "id") return route.id;
    if (key === "ends") return `${route.fromBox || route.from || "?"} → ${route.toBox && !route.tail ? `${route.to} (${route.toBox})` : route.to || "?"}`;
    if (key === "spec") return route.lead ? `${route.spec} · ${route.lead}` : route.spec;
    if (key === "schedule") return route.tail || route.schedule == null ? "" : fmt(route.schedule);
    const pts = em.routePoints(route.id) || route.points;
    if (key === "modelled") return polylineLength(pts).toFixed(1);
    if (key === "vertices") return String(pts.length);
    return "";
  }

  function fillCableRow(tr, route) {
    tr.innerHTML = "";
    tr.dataset.state = em.routeEdited(route.id) ? "edited" : "";
    tr.dataset.kind = route.kind;
    tr.title = route.note || route.id;
    for (const col of CABLE_COLUMNS) {
      const td = document.createElement("td");
      td.textContent = cableCell(route, col.key);
      if (col.num) td.className = "num";
      if (col.key === "id") td.className = "mono";
      tr.appendChild(td);
    }
  }

  function renderCableRow(id) {
    if (!em.active || em.view !== "cables") return;
    const tr = tbody.querySelector(`tr[data-route="${cssEscape(id)}"]`);
    const route = em.routesById.get(id);
    if (tr && route) fillCableRow(tr, route);
    if (tr && em.cableSel?.id === id) tr.classList.add("is-selected");
  }

  function renderCableRows() {
    tbody.innerHTML = "";
    const needle = em.filterText.trim().toLowerCase();
    let shown = 0;
    for (const route of em.routes) {
      if (needle && !routeSearchText(route).includes(needle)) continue;
      const tr = document.createElement("tr");
      tr.dataset.route = route.id;
      if (route.tail) tr.classList.add("is-tail");
      fillCableRow(tr, route);
      tbody.appendChild(tr);
      shown += 1;
    }
    $("count").textContent = needle ? `${shown} / ${em.routes.length}` : String(em.routes.length);
    if (em.cableSel) tbody.querySelector(`tr[data-route="${cssEscape(em.cableSel.id)}"]`)?.classList.add("is-selected");
  }

  function renderTabs() {
    const tabs = $("tabs");
    tabs.hidden = !em.routes.length;
    $("title").hidden = em.routes.length > 0;
    for (const b of tabs.querySelectorAll("button[data-view]")) {
      b.textContent = t(b.dataset.view === "cables" ? "edit.tabCables" : "edit.tabFixtures");
      b.classList.toggle("is-on", b.dataset.view === em.view);
      b.setAttribute("aria-selected", b.dataset.view === em.view ? "true" : "false");
    }
    $("cables-label").hidden = !em.routes.length;
    $("cables-on").checked = em.cablesOn;
    $("cables-on-text").textContent = t("edit.showCables");
  }

  function renderHead() {
    $("head").innerHTML = "";
    if (em.view === "cables") {
      for (const col of CABLE_COLUMNS) {
        const th = document.createElement("th");
        th.textContent = t(col.label);
        $("head").appendChild(th);
      }
      return;
    }
    for (const col of COLUMNS) {
      const th = document.createElement("th");
      th.textContent = col.axis != null ? col.label : t(col.label);
      if (col.axis != null) th.className = `axis axis-${col.key}`;
      $("head").appendChild(th);
    }
  }

  function renderRows() {
    if (em.view === "cables") {
      renderCableRows();
      return;
    }
    tbody.innerHTML = "";
    const needle = em.filterText.trim().toLowerCase();
    let shown = 0;
    let lastCable = null;
    for (const row of em.rows) {
      if (needle && !rowSearchText(row).includes(needle)) continue;
      const tr = document.createElement("tr");
      tr.dataset.id = row.id;
      const cableNow = `${row.room}|${em.propValue(row.id, "CableNumber") ?? row.id}`;
      if (cableNow === lastCable) tr.classList.add("same-cable");
      lastCable = cableNow;
      em.fillRow(tr, row);
      tbody.appendChild(tr);
      shown += 1;
    }
    $("count").textContent = needle ? `${shown} / ${em.rows.length}` : String(em.rows.length);
    if (em.selectedId) {
      const tr = tbody.querySelector(`tr[data-id="${cssEscape(em.selectedId)}"]`);
      tr?.classList.add("is-selected");
    }
  }

  function fillRow(tr, row) {
    tr.innerHTML = "";
    tr.dataset.state = em.rowState(row.id);
    tr.title = row.description || row.name;
    for (const col of COLUMNS) {
      const td = document.createElement("td");
      td.textContent = cellText(row, col);
      if (col.axis != null) td.className = "num";
      if (col.key === "id") td.className = "mono";
      tr.appendChild(td);
    }
  }

  function renderRow(id) {
    const tr = tbody.querySelector(`tr[data-id="${cssEscape(id)}"]`);
    const row = em.rowsById.get(id);
    if (tr && row) fillRow(tr, row);
    if (tr && id === em.selectedId) tr.classList.add("is-selected");
  }

  tbody.addEventListener("click", (ev) => {
    const routeTr = ev.target.closest?.("tr[data-route]");
    if (routeTr) {
      em.selectRoute(routeTr.dataset.route, { frame: true });
      return;
    }
    const tr = ev.target.closest?.("tr[data-id]");
    if (!tr) return;
    em.select(tr.dataset.id, { frame: true });
  });

  function renderExportCount() {
    const n = Object.keys(em.store.fixtures).length + Object.keys(em.store.cables || {}).length;
    $("export").textContent = n ? `${t("edit.export")} (${n})` : t("edit.export");
    $("export").classList.toggle("has-edits", n > 0);
  }

  function renderCablePosition() {
    if (!em.cableSel || detail.hidden) return;
    const pos = em.cableSelPoint();
    for (const input of detail.querySelectorAll("input[data-axis]")) {
      if (document.activeElement === input) continue;
      input.value = pos ? fmtM(pos[Number(input.dataset.axis)]) : "";
    }
    const pts = em.routePoints(em.cableSel.id) || [];
    const len = detail.querySelector('[data-role="cable-length"]');
    if (len) len.textContent = em.cableLengthText(em.routesById.get(em.cableSel.id), pts);
  }

  function cableLengthText(route, pts) {
    const m = polylineLength(pts).toFixed(1);
    if (route?.tail || route?.schedule == null) return `${m} m`;
    return `${m} m · ${t("edit.soupis")} ${route.schedule} m`;
  }

  function syncCableState() {
    if (!em.cableSel || detail.hidden) return;
    const head = detail.querySelector(".edit-detail-head");
    let badge = head?.querySelector(".edit-badge");
    if (em.routeEdited(em.cableSel.id) && head) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "edit-badge";
        head.appendChild(badge);
      }
      badge.dataset.state = "edited";
      badge.textContent = t("edit.state.edited");
    } else badge?.remove();
    const reset = detail.querySelector('button[data-cable="reset"]');
    if (reset) reset.disabled = !em.routeEdited(em.cableSel.id);
    const n = em.routePoints(em.cableSel.id)?.length || 0;
    const del = detail.querySelector('button[data-cable="delete"]');
    if (del) del.disabled = em.cableSel.mode !== "vertex" || isLocked(em.cableSel.vertex, n) || n <= 2;
    const pos = detail.querySelector('[data-role="cable-index"]');
    if (pos) pos.textContent = em.cableIndexText(n);
  }

  function cableIndexText(n) {
    return em.cableSel.mode === "vertex"
      ? `${t("edit.vertex")} ${em.cableSel.vertex + 1} / ${n}`
      : `${t("edit.segment")} ${em.cableSel.segment + 1} / ${n - 1}`;
  }

  function renderCableDetail() {
    const route = em.routesById.get(em.cableSel.id);
    const pts = em.routePoints(em.cableSel.id);
    const n = pts.length;
    const pos = em.cableSelPoint();
    const movable = em.cableMovable();
    detail.hidden = false;
    const dis = movable && pos ? "" : "disabled";
    const axes = ["x", "y", "z"]
      .map(
        (axis, i) => `
        <div class="edit-axis axis-${axis}">
          <label class="edit-axis-top"><span class="edit-axis-label">${axis}</span>
          <input type="text" inputmode="decimal" data-axis="${i}" value="${pos ? em.fmtM(pos[i]) : ""}" ${dis}/></label>
          <div class="edit-axis-nudges">
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="-1" ${dis} aria-label="${axis} −">−</button>
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="1" ${dis} aria-label="${axis} +">+</button>
          </div>
        </div>`,
      )
      .join("");
    const snaps = [
      [0.01, "1 cm"],
      [0.001, "1 mm"],
      [0, t("edit.snapOff")],
    ]
      .map(([step, label]) => `<button type="button" class="edit-seg ${em.snapStep === step ? "is-on" : ""}" data-snap="${step}">${label}</button>`)
      .join("");
    const locked = em.cableSel.mode === "vertex" && isLocked(em.cableSel.vertex, n);
    const hint = locked
      ? t("edit.cableEndHint")
      : em.cableSel.mode === "segment"
        ? t("edit.segmentHint")
        : t("edit.vertexHint");
    detail.innerHTML = `
      <div class="edit-detail-head">
        <strong class="mono">${escapeHtml(route.id)}</strong>
        <span class="edit-detail-name"><span class="edit-kind" data-kind="${route.kind}"></span>${escapeHtml(route.spec)} · ${escapeHtml(em.cableCell(route, "ends"))} · <span data-role="cable-length">${escapeHtml(em.cableLengthText(route, pts))}</span></span>
        ${em.routeEdited(route.id) ? `<span class="edit-badge" data-state="edited">${escapeHtml(t("edit.state.edited"))}</span>` : ""}
      </div>
      <div class="edit-row edit-tools">
        <button type="button" class="edit-seg ${em.cableSel.mode === "segment" ? "is-on" : ""}" data-cable="mode-segment">${escapeHtml(t("edit.segment"))}</button>
        <button type="button" class="edit-seg ${em.cableSel.mode === "vertex" ? "is-on" : ""}" data-cable="mode-vertex">${escapeHtml(t("edit.vertex"))}</button>
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn" data-cable="prev" aria-label="${escapeHtml(t("edit.prev"))}">◀</button>
        <span class="edit-snap mono" data-role="cable-index">${escapeHtml(em.cableIndexText(n))}</span>
        <button type="button" class="edit-btn" data-cable="next" aria-label="${escapeHtml(t("edit.next"))}">▶</button>
      </div>
      <p class="edit-hint">${escapeHtml(hint)}${route.lead ? ` ${escapeHtml(t("edit.leadHint"))} ${escapeHtml(route.lead)}.` : ""}</p>
      <div class="edit-axes">${axes}</div>
      <div class="edit-row edit-tools">
        <span class="edit-snap">${escapeHtml(t("edit.snap"))}</span>${snaps}
      </div>
      <div class="edit-row">
        <button type="button" class="edit-btn" data-cable="insert">${escapeHtml(t("edit.insertVertex"))}</button>
        <button type="button" class="edit-btn edit-danger" data-cable="delete" ${em.cableSel.mode === "vertex" && !locked && n > 2 ? "" : "disabled"}>${escapeHtml(t("edit.deleteVertex"))}</button>
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn" data-cable="reset" ${em.routeEdited(route.id) ? "" : "disabled"}>${escapeHtml(t("edit.resetRoute"))}</button>
      </div>
      ${route.note ? `<p class="edit-hint">${escapeHtml(route.note)}</p>` : ""}`;
    em.notifyLayout();
  }


  function renderPosition() {
    if (em.cableSel) {
      renderCablePosition();
      return;
    }
    if (!em.selectedId) return;
    const pos = em.currentTarget(em.selectedId);
    for (const input of detail.querySelectorAll("input[data-axis]")) {
      if (document.activeElement === input) continue;
      const axis = Number(input.dataset.axis);
      input.value = pos ? fmtM(pos[axis]) : "";
    }
  }

  function renderDetail() {
    if (em.cableSel && !em.selectedId) {
      renderCableDetail();
      return;
    }
    if (!em.selectedId) {
      detail.hidden = true;
      detail.innerHTML = "";
      em.notifyLayout();
      return;
    }
    const row = em.rowsById.get(em.selectedId);
    const edit = em.store.fixtures[em.selectedId];
    const pos = em.currentTarget(em.selectedId);
    const deleted = Boolean(edit?.deleted);
    detail.hidden = false;
    const axes = ["x", "y", "z"]
      .map(
        (axis, i) => `
        <div class="edit-axis axis-${axis}">
          <label class="edit-axis-top"><span class="edit-axis-label">${axis}</span>
          <input type="text" inputmode="decimal" data-axis="${i}" value="${pos ? em.fmtM(pos[i]) : ""}" ${pos && !deleted ? "" : "disabled"}/></label>
          <div class="edit-axis-nudges">
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="-1" ${pos && !deleted ? "" : "disabled"} aria-label="${axis} −">−</button>
          <button type="button" class="edit-btn edit-nudge" data-nudge="${i}" data-sign="1" ${pos && !deleted ? "" : "disabled"} aria-label="${axis} +">+</button>
          </div>
        </div>`,
      )
      .join("");
    const props = EDITABLE_PROPS.map(
      (key) => `
        <label class="edit-prop"><span>${escapeHtml(t(`edit.prop.${key}`))}</span>
          <input type="text" data-prop="${key}" value="${escapeHtml(em.fmt(em.propValue(em.selectedId, key)))}" ${deleted ? "disabled" : ""}/></label>`,
    ).join("");
    const snaps = [
      [0.01, "1 cm"],
      [0.001, "1 mm"],
      [0, t("edit.snapOff")],
    ]
      .map(([step, label]) => `<button type="button" class="edit-seg ${em.snapStep === step ? "is-on" : ""}" data-snap="${step}">${label}</button>`)
      .join("");
    detail.innerHTML = `
      <div class="edit-detail-head">
        <strong class="mono">${escapeHtml(row.id)}</strong>
        <span class="edit-detail-name">${escapeHtml(row.name)}${row.room ? ` · ${escapeHtml(row.roomName || row.room)}` : ""}</span>
        ${edit ? `<span class="edit-badge" data-state="${em.rowState(em.selectedId)}">${escapeHtml(t(`edit.state.${em.rowState(em.selectedId)}`))}</span>` : ""}
      </div>
      ${row.hostId && !em.meshesOf(row.id).length ? `<p class="edit-hint">${escapeHtml(t("edit.inHost"))} ${escapeHtml(row.hostId)}</p>` : ""}
      <div class="edit-axes">${axes}</div>
      <div class="edit-row edit-tools">
        <span class="edit-snap">${escapeHtml(t("edit.snap"))}</span>${snaps}
        <span class="edit-spacer"></span>
        <button type="button" class="edit-btn" data-role="to-wall" ${pos && !deleted ? "" : "disabled"}>${escapeHtml(t("edit.toWall"))}</button>
      </div>
      <details class="edit-more" ${!em.collapsed && (em.wideMq.matches || em.detailsOpen) ? "open" : ""}>
        <summary>${escapeHtml(t("edit.schedule"))}</summary>
        <div class="edit-props">${props}</div>
        <div class="edit-row">
          <button type="button" class="edit-btn" data-role="duplicate" ${row.placement && row.list && !deleted ? "" : "disabled"}>${escapeHtml(t("edit.duplicate"))}</button>
          <button type="button" class="edit-btn edit-danger" data-role="delete">${escapeHtml(t(deleted ? "edit.restore" : edit?.add ? "edit.remove" : "edit.delete"))}</button>
          <span class="edit-spacer"></span>
          <button type="button" class="edit-btn" data-role="revert" ${edit && !edit.add ? "" : "disabled"}>${escapeHtml(t("edit.revert"))}</button>
        </div>
      </details>`;
    em.notifyLayout();
  }

  detail.addEventListener("click", (ev) => {
    const target = ev.target.closest?.("button");
    if (!target || (!em.selectedId && !em.cableSel)) return;
    if (target.dataset.nudge != null) {
      // Pointer presses are handled by the hold-to-repeat below; a click
      // with no pointer press (keyboard, VoiceOver) steps once.
      if (ev.detail === 0 && !em.hold) em.nudge(target, 1);
      return;
    }
    if (target.dataset.snap != null) {
      em.snapStep = Number(target.dataset.snap);
      renderDetail();
      return;
    }
    if (target.dataset.cable) {
      em.cableAction(target.dataset.cable);
      return;
    }
    if (!em.selectedId) return;
    const role = target.dataset.role;
    if (role === "to-wall") em.snapToWall(em.selectedId);
    else if (role === "duplicate") em.duplicate(em.selectedId);
    else if (role === "delete") em.toggleDelete(em.selectedId);
    else if (role === "revert") em.revert(em.selectedId);
  });

  // --- − / + hold to repeat (Petr, 2026-11-19: "I need to long press those
  // position buttons to move faster") ---
  /** @type {{ button: HTMLButtonElement, pointerId: number, t0: number, timer: ReturnType<typeof setTimeout> | null } | null} */
  let hold = null;

  function nudge(button, factor) {
    if (em.cableSel) {
      if (!em.cableMovable()) return;
      const step = (em.snapStep || 0.001) * factor;
      em.cableMove(Number(button.dataset.nudge), Number(button.dataset.sign) * step);
      return;
    }
    if (!em.selectedId) return;
    const pos = em.currentTarget(em.selectedId);
    if (!pos) return;
    const axis = Number(button.dataset.nudge);
    const step = (em.snapStep || 0.001) * factor;
    pos[axis] += Number(button.dataset.sign) * step;
    em.setTarget(em.selectedId, pos, { save: false });
  }

  function stopHold() {
    if (!hold) return;
    if (hold.timer) clearTimeout(hold.timer);
    hold.button.classList.remove("is-held");
    hold = null;
    em.save();
  }

  function holdTick() {
    if (!hold) return;
    const held = performance.now() - hold.t0;
    const { factor, interval } = holdRate(held);
    nudge(hold.button, factor);
    hold.timer = setTimeout(holdTick, interval);
  }

  detail.addEventListener("pointerdown", (ev) => {
    const button = ev.target.closest?.("button[data-nudge]");
    if (!button || button.disabled || (ev.button !== undefined && ev.button !== 0)) return;
    ev.preventDefault();
    stopHold();
    hold = { button, pointerId: ev.pointerId, t0: performance.now(), timer: null };
    button.classList.add("is-held");
    nudge(button, 1);
    hold.timer = setTimeout(holdTick, HOLD_DELAY_MS);
  });
  // Released anywhere, cancelled by the system, or slid off the button.
  for (const type of ["pointerup", "pointercancel"]) {
    window.addEventListener(type, (ev) => {
      if (hold && ev.pointerId === hold.pointerId) stopHold();
    }, true);
  }
  detail.addEventListener("pointerleave", (ev) => {
    if (hold && ev.pointerId === hold.pointerId && ev.target === hold.button) stopHold();
  }, true);
  window.addEventListener("blur", stopHold);
  // A long press must not open the iOS callout or the context menu.
  panel.addEventListener("contextmenu", (ev) => {
    if (ev.target.closest?.("button")) ev.preventDefault();
  });

  detail.addEventListener("change", (ev) => {
    const input = ev.target;
    if (!(input instanceof HTMLInputElement)) return;
    if (em.cableSel && !em.selectedId && input.dataset.axis != null) {
      const v = Number(String(input.value).replace(",", "."));
      const pos = em.cableSelPoint();
      const axis = Number(input.dataset.axis);
      if (pos && Number.isFinite(v) && em.cableMovable()) em.cableMove(axis, v - pos[axis]);
      em.save();
      renderCablePosition();
      return;
    }
    if (!em.selectedId) return;
    if (input.dataset.axis != null) {
      const v = Number(String(input.value).replace(",", "."));
      const pos = em.currentTarget(em.selectedId);
      if (!pos || !Number.isFinite(v)) {
        renderPosition();
        return;
      }
      pos[Number(input.dataset.axis)] = v;
      em.setTarget(em.selectedId, pos);
      renderPosition();
    } else if (input.dataset.prop) {
      em.setProp(em.selectedId, input.dataset.prop, input.value.trim());
      renderDetail();
    }
  });
  detail.addEventListener("toggle", (ev) => {
    if (ev.target?.classList?.contains("edit-more")) {
      em.detailsOpen = ev.target.open;
      em.notifyLayout();
    }
  }, true);
  detail.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && ev.target instanceof HTMLInputElement) ev.target.blur();
  });


  $("export").addEventListener("click", () => {
    exportBox.hidden = !exportBox.hidden;
    if (!exportBox.hidden) exportText.value = em.patchText();
    em.notifyLayout();
  });
  $("export-close").addEventListener("click", () => {
    exportBox.hidden = true;
    em.notifyLayout();
  });

  const canShareAny = typeof navigator !== "undefined" && typeof navigator.share === "function";
  if (canShareAny) $("share").hidden = false;
  // "Share file" only where the browser says it can share a JSON file.
  try {
    if (canShareAny && typeof navigator.canShare === "function" &&
        navigator.canShare({ files: [new File(["{}"], "x.json", { type: "application/json" })] })) {
      $("share-file").hidden = false;
    }
  } catch {
    /* no File constructor or canShare threw: keep it hidden */
  }


  // Share the JSON itself as text, with no title: a real iPhone sharing a
  // file + title into the Grok Bot app delivered only the title (2026-11-19).
  $("share").addEventListener("click", () => {
    const text = em.compactPatchText();
    exportText.value = em.patchText();
    em.runShare({ text });
  });
  $("share-file").addEventListener("click", () => {
    const text = em.patchText();
    exportText.value = text;
    em.runShare({ files: [new File([text], shareFileName(new Date()), { type: "application/json" })] });
  });
  $("copy").addEventListener("click", async () => {
    const text = em.patchText();
    exportText.value = text;
    try {
      await navigator.clipboard.writeText(text);
      em.flash(t("edit.copied"));
    } catch {
      exportText.focus();
      exportText.select();
      em.flash(t("edit.copyManual"));
    }
  });
  $("download").addEventListener("click", () => {
    const text = em.patchText();
    const blob = new Blob([text], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = shareFileName(new Date());
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  });
  $("discard").addEventListener("click", () => {
    if (!em.hasUnsavedEdits()) return;
    if (!window.confirm(t("edit.discardConfirm"))) return;
    em.discardAll();
    exportText.value = em.patchText();
  });
  $("search").addEventListener("input", (ev) => {
    em.filterText = ev.target.value || "";
    renderRows();
  });
  $("tabs").addEventListener("click", (ev) => {
    const b = ev.target.closest?.("button[data-view]");
    if (!b) return;
    if (b.dataset.view === "cables" && em.selectedId) em.select(null);
    const opening = b.dataset.view === "cables" && em.view !== "cables";
    em.setView(b.dataset.view);
    // Opening the Cables tab shows every route.
    if (opening && !em.cableSel) em.frameRoute(null);
  });
  $("cables-on").addEventListener("change", (ev) => {
    em.cablesOn = Boolean(ev.target.checked);
    if (!em.cablesOn && em.cableSel) em.selectRoute(null);
    ctx.markDirty();
  });
  $("collapse").addEventListener("click", () => {
    em.collapsed = !em.collapsed;
    panel.classList.toggle("is-collapsed", em.collapsed);
    $("collapse").setAttribute("aria-expanded", em.collapsed ? "false" : "true");
    $("collapse").textContent = em.collapsed ? "▴" : "▾";
    renderDetail();
    em.notifyLayout();
  });

  let flashTimer = null;
  const flashEl = document.createElement("div");
  flashEl.className = "edit-flash";
  flashEl.hidden = true;
  panel.appendChild(flashEl);
  function flash(text) {
    flashEl.textContent = text;
    flashEl.hidden = false;
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => {
      flashEl.hidden = true;
    }, 1800);
  }

  function renderStatic() {
    button.textContent = t("ui.edit");
    $("title").textContent = t("edit.title");
    $("search").placeholder = t("edit.search");
    $("share").textContent = t("edit.share");
    $("share-file").textContent = t("edit.shareFile");
    $("copy").textContent = t("edit.copy");
    $("download").textContent = t("edit.download");
    $("discard").textContent = t("edit.discard");
    $("export-hint").textContent = t("edit.exportHint");
    renderTabs();
    renderHead();
    renderExportCount();
  }

  function notifyLayout() {
    if (em.active) ctx.onLayout?.();
  }

  const sheet = document.getElementById("sheet");
  const sheetToggle = document.getElementById("sheet-toggle");

  function setActive(on) {
    if (on === em.active) return;
    if (on) ctx.beforeEnter?.();
    em.active = on;
    em.bind();
    button.classList.toggle("is-active", on);
    button.setAttribute("aria-pressed", on ? "true" : "false");
    panel.hidden = !on;
    document.body.classList.toggle("bp-editing", on);
    if (sheet) sheet.style.display = on ? "none" : "";
    if (sheetToggle) sheetToggle.style.visibility = on ? "hidden" : "";
    if (on) {
      renderStatic();
      renderRows();
      renderDetail();
    } else {
      em.gizmo.detach();
      em.gizmo.enabled = false;
      em.helper.visible = false;
      em.selHelper.visible = false;
      em.selectedId = null;
      em.cableSel = null;
      em.cableLayer.setSelection({});
      exportBox.hidden = true;
    }
    ctx.onActiveChange?.(on);
    ctx.onLayout?.();
    ctx.markDirty();
  }

  /** Space the panel covers, for the viewer's safe framing offset. */
  function getSafeInsets() {
    if (!em.active || panel.hidden) return { bottom: 0, right: 0 };
    const rect = panel.getBoundingClientRect();
    if (em.wideMq.matches) return { bottom: 0, right: Math.min(rect.width, PANEL_WIDE_PX) };
    return { bottom: Math.max(0, window.innerHeight - rect.top), right: 0 };
  }

  function onLocale() {
    button.textContent = t("ui.edit");
    if (!em.active) return;
    renderStatic();
    renderRows();
    renderDetail();
  }

  /**
   * Badge and Revert after a move, without rebuilding the pane: a rebuild
   * would replace the − / + button Petr is holding. (Revert used to stay
   * disabled after the first nudge until another fixture was selected.)
   */
  function syncDetailState() {
    if (!em.selectedId || detail.hidden) return;
    const edit = em.store.fixtures[em.selectedId];
    const state = em.rowState(em.selectedId);
    const head = detail.querySelector(".edit-detail-head");
    let badge = head?.querySelector(".edit-badge");
    if (edit && head) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "edit-badge";
        head.appendChild(badge);
      }
      badge.dataset.state = state;
      badge.textContent = t(`edit.state.${state}`);
    } else badge?.remove();
    const revertBtn = detail.querySelector('button[data-role="revert"]');
    if (revertBtn) revertBtn.disabled = !(edit && !edit.add);
  }

  Object.assign(em, {
    button,
    panel,
    $,
    tbody,
    detail,
    exportBox,
    exportText,
    sheet,
    sheetToggle,
    fmt,
    fmtM,
    cellText,
    cableCell,
    fillCableRow,
    renderCableRow,
    renderCableRows,
    renderTabs,
    renderHead,
    renderRows,
    fillRow,
    renderRow,
    renderExportCount,
    renderCablePosition,
    cableLengthText,
    syncCableState,
    cableIndexText,
    renderCableDetail,
    renderPosition,
    renderDetail,
    syncDetailState,
    nudge,
    stopHold,
    holdTick,
    flash,
    renderStatic,
    notifyLayout,
    setActive,
    getSafeInsets,
    onLocale,
  });
}
