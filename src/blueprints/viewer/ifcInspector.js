/**
 * IFC popover and the inspector page inside the existing sheet.
 * The sheet's detents and drag handle stay put; this only swaps the scroll
 * page and pushes a back button, the way Settings pushes a subscreen.
 */

import {
  INDENT_PX,
  ROW_HEIGHT,
  ancestorIds,
  childIds,
  containmentOf,
  dimensionLines,
  flattenTree,
  noteLines,
  pathTo,
  rowIndent,
  visibleRange,
} from "./ifcTree.js";
import { LONG_PRESS_MS, classifyHold } from "./gesture.js";

const REVEAL_ICON = `<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M2.5 4.2h8.2v1.35H2.5V4.2zm0 5.1h8.2v1.35H2.5V9.3zm0 5.15h8.2V15.8H2.5v-1.35z"/>
  <path fill="currentColor" d="M13.2 6.15l3.15 3.15-3.15 3.15-1.05-1.05 1.35-1.35H11.2V8.55h2.3L12.15 7.2l1.05-1.05z"/>
</svg>`;

/**
 * @param {{
 *   index: { elements: Record<string, object>, roots: string[] },
 *   visibility: {
 *     isHidden: (id: string) => boolean,
 *     anyHidden: () => boolean,
 *     hide: (id: string) => void,
 *     unhide: (id: string) => void,
 *     hideOthers: (id: string) => void,
 *     unhideOthers: (id: string) => void,
 *     showAll: () => void,
 *   },
 *   t: (key: string) => string,
 *   onFrame: (id: string) => void,
 *   onVisibility: () => void,
 *   openSheet: () => void,
 *   actionsFor: (element: object | null) => { id: string, labelKey: string, run: Function }[],
 * }} opts
 */
export function mountIfcInspector(opts) {
  const scroll = document.getElementById("sheet-scroll");
  if (!scroll) return { reveal() {}, open() {}, closePopover() {}, refresh() {} };

  const main = document.createElement("div");
  main.id = "sheet-main";
  while (scroll.firstChild) main.append(scroll.firstChild);

  const entry = document.createElement("button");
  entry.type = "button";
  entry.className = "ifc-entry";
  entry.dataset.noSheetDrag = "true";
  const entryLabel = document.createElement("span");
  entryLabel.dataset.i18n = "ui.inspector";
  entryLabel.textContent = opts.t("ui.inspector");
  const entryChevron = document.createElement("span");
  entryChevron.className = "ifc-entry-chevron";
  entryChevron.setAttribute("aria-hidden", "true");
  entryChevron.textContent = "›";
  entry.append(entryLabel, entryChevron);
  main.append(entry);

  const page = document.createElement("div");
  page.id = "sheet-inspector";
  page.hidden = true;
  page.dataset.noSheetDrag = "true";

  const toolbar = document.createElement("div");
  toolbar.className = "ifc-toolbar";
  const back = document.createElement("button");
  back.type = "button";
  back.className = "ifc-back";
  back.dataset.noSheetDrag = "true";
  const showAll = document.createElement("button");
  showAll.type = "button";
  showAll.className = "ifc-show-all";
  showAll.hidden = true;
  showAll.dataset.noSheetDrag = "true";
  toolbar.append(back, showAll);

  const crumbs = document.createElement("div");
  crumbs.className = "ifc-crumbs";
  crumbs.dataset.noSheetDrag = "true";

  const list = document.createElement("div");
  list.className = "ifc-list";
  const spacer = document.createElement("div");
  spacer.className = "ifc-list-spacer";
  const windowEl = document.createElement("div");
  windowEl.className = "ifc-list-window";
  list.append(spacer, windowEl);

  const head = document.createElement("div");
  head.className = "ifc-head";
  head.append(toolbar, crumbs);
  page.append(head, list);
  scroll.append(main, page);

  const pop = document.createElement("div");
  pop.id = "ifc-popover";
  pop.hidden = true;
  pop.className = "ifc-popover";
  document.body.append(pop);

  const menu = document.createElement("div");
  menu.id = "ifc-row-menu";
  menu.hidden = true;
  menu.className = "ifc-menu";
  document.body.append(menu);

  /** @type {Set<string>} */
  const expanded = new Set();
  /** @type {string | null} */
  let focusId = null;
  /** @type {string | null} */
  let highlightId = null;
  let highlightTimer = 0;

  function showMain() {
    page.hidden = true;
    main.hidden = false;
    closeMenu();
  }

  function showInspector() {
    main.hidden = true;
    page.hidden = false;
    render();
    requestAnimationFrame(() => render());
  }

  function openInspector() {
    opts.openSheet();
    showInspector();
    scroll.scrollTop = 0;
  }

  entry.addEventListener("click", () => openInspector());
  back.addEventListener("click", () => {
    showMain();
    scroll.scrollTop = 0;
  });
  showAll.addEventListener("click", () => {
    opts.visibility.showAll();
    opts.onVisibility();
    render();
  });

  function labelOf(id) {
    const element = opts.index.elements[id];
    if (!element) return id;
    return element.name || element.id || element.type || id;
  }

  function renderCrumbs() {
    crumbs.replaceChildren();
    const path = focusId ? pathTo(opts.index, focusId) : [];
    if (!path.length) {
      crumbs.hidden = true;
      return;
    }
    crumbs.hidden = false;
    path.forEach((id, index) => {
      if (index) {
        const sep = document.createElement("span");
        sep.className = "ifc-crumb-sep";
        sep.textContent = "›";
        crumbs.append(sep);
      }
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ifc-crumb";
      button.textContent = labelOf(id);
      button.addEventListener("click", () => {
        focusId = id;
        for (const ancestor of ancestorIds(opts.index, id)) expanded.add(ancestor);
        render();
        scrollRowIntoView(id);
      });
      crumbs.append(button);
    });
  }

  function render() {
    back.textContent = `‹ ${opts.t("ui.menu")}`;
    showAll.textContent = opts.t("ui.showAll");
    showAll.hidden = !opts.visibility.anyHidden();
    entryLabel.textContent = opts.t("ui.inspector");
    renderCrumbs();
    renderRows();
  }

  function listContentTop() {
    const scrollRect = scroll.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    return listRect.top - scrollRect.top + scroll.scrollTop;
  }

  function stickyChrome() {
    const scrollRect = scroll.getBoundingClientRect();
    return head.getBoundingClientRect().bottom - scrollRect.top + 6;
  }

  function renderRows() {
    const rows = flattenTree(opts.index, expanded);
    spacer.style.height = `${rows.length * ROW_HEIGHT}px`;
    const range = visibleRange(
      scroll.scrollTop,
      scroll.clientHeight || 320,
      listContentTop(),
      rows.length,
      ROW_HEIGHT,
    );
    windowEl.replaceChildren();
    windowEl.style.transform = `translateY(${range.start * ROW_HEIGHT}px)`;
    for (let i = range.start; i < range.end; i++) {
      windowEl.append(renderRow(rows[i]));
    }
  }

  /**
   * @param {{ id: string, depth: number }} row
   */
  function renderRow(row) {
    const element = opts.index.elements[row.id];
    const kids = childIds(opts.index, row.id);
    const el = document.createElement("div");
    el.className = "ifc-row";
    el.dataset.id = row.id;
    el.style.paddingLeft = `${rowIndent(row.depth) + 8}px`;
    el.style.height = `${ROW_HEIGHT}px`;
    if (row.id === highlightId) el.classList.add("is-target");
    if (opts.visibility.isHidden(row.id)) el.classList.add("is-hidden");

    if (kids.length) {
      const chevron = document.createElement("button");
      chevron.type = "button";
      chevron.className = "ifc-disclosure";
      const open = expanded.has(row.id);
      chevron.textContent = open ? "▾" : "›";
      chevron.setAttribute("aria-expanded", open ? "true" : "false");
      chevron.setAttribute("aria-label", open ? opts.t("ui.collapse") : opts.t("ui.expand"));
      chevron.addEventListener("click", (ev) => {
        ev.stopPropagation();
        if (expanded.has(row.id)) expanded.delete(row.id);
        else expanded.add(row.id);
        render();
      });
      el.append(chevron);
    } else {
      const spacerEl = document.createElement("span");
      spacerEl.className = "ifc-disclosure-spacer";
      el.append(spacerEl);
    }

    const text = document.createElement("span");
    text.className = "ifc-row-text";
    const name = document.createElement("span");
    name.className = "ifc-row-name";
    name.textContent = labelOf(row.id);
    const meta = document.createElement("span");
    meta.className = "ifc-row-meta";
    meta.textContent = element?.type || "";
    text.append(name, meta);
    el.append(text);

    wireRowGesture(el, row.id);
    return el;
  }

  /**
   * @param {HTMLElement} el
   * @param {string} id
   */
  function wireRowGesture(el, id) {
    /** @type {{ id: number, x: number, y: number, moved: number, consumed: boolean } | null} */
    let gesture = null;
    let timer = 0;
    const clear = () => {
      if (timer) window.clearTimeout(timer);
      timer = 0;
    };
    el.addEventListener("pointerdown", (ev) => {
      if (ev.button !== undefined && ev.button !== 0) return;
      if (ev.target instanceof Element && ev.target.closest(".ifc-disclosure")) return;
      clear();
      gesture = { id: ev.pointerId, x: ev.clientX, y: ev.clientY, moved: 0, consumed: false };
      timer = window.setTimeout(() => {
        timer = 0;
        if (!gesture || gesture.consumed) return;
        const kind = classifyHold({
          dt: LONG_PRESS_MS,
          dx: gesture.moved,
          dy: 0,
          released: false,
        });
        if (kind !== "longpress") return;
        gesture.consumed = true;
        openRowMenu(id, gesture.x, gesture.y);
      }, LONG_PRESS_MS);
    });
    el.addEventListener("pointermove", (ev) => {
      if (!gesture || ev.pointerId !== gesture.id) return;
      const dist = Math.hypot(ev.clientX - gesture.x, ev.clientY - gesture.y);
      if (dist > gesture.moved) gesture.moved = dist;
      if (gesture.moved > 12) clear();
    });
    el.addEventListener("pointerup", (ev) => {
      if (!gesture || ev.pointerId !== gesture.id) return;
      clear();
      const consumed = gesture.consumed;
      const dist = Math.max(
        gesture.moved,
        Math.hypot(ev.clientX - gesture.x, ev.clientY - gesture.y),
      );
      gesture = null;
      const kind = classifyHold({
        dt: 0,
        dx: dist,
        dy: 0,
        released: true,
        consumed,
      });
      if (kind !== "tap") return;
      focusId = id;
      opts.onFrame(id);
      flash(id);
      renderCrumbs();
    });
    el.addEventListener("pointercancel", () => {
      clear();
      gesture = null;
    });
  }

  function flash(id) {
    highlightId = id;
    if (highlightTimer) window.clearTimeout(highlightTimer);
    highlightTimer = window.setTimeout(() => {
      if (highlightId === id) highlightId = null;
      renderRows();
    }, 1600);
    renderRows();
  }

  function scrollRowIntoView(id) {
    const rows = flattenTree(opts.index, expanded);
    const index = rows.findIndex((row) => row.id === id);
    if (index < 0) return;
    const rowTop = listContentTop() + index * ROW_HEIGHT;
    scroll.scrollTop = Math.max(0, rowTop - stickyChrome());
    renderRows();
  }

  function openRowMenu(id, x, y) {
    closePopover();
    menu.replaceChildren();
    menu.hidden = false;
    const hidden = opts.visibility.isHidden(id);
    addMenuButton(hidden ? "ui.unhideThis" : "ui.hideThis", () => {
      if (hidden) opts.visibility.unhide(id);
      else opts.visibility.hide(id);
      opts.onVisibility();
      closeMenu();
      render();
    });
    addMenuButton("ui.hideOthers", () => {
      opts.visibility.hideOthers(id);
      opts.onVisibility();
      closeMenu();
      render();
    });
    addMenuButton("ui.unhideOthers", () => {
      opts.visibility.unhideOthers(id);
      opts.onVisibility();
      closeMenu();
      render();
    });
    placeFloating(menu, x, y);
  }

  /**
   * @param {string} key
   * @param {() => void} run
   */
  function addMenuButton(key, run) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ifc-menu-btn";
    button.textContent = opts.t(key);
    button.addEventListener("click", (ev) => {
      ev.stopPropagation();
      run();
    });
    menu.append(button);
  }

  function closeMenu() {
    menu.hidden = true;
    menu.replaceChildren();
  }

  function closePopover() {
    pop.hidden = true;
    pop.replaceChildren();
  }

  /**
   * @param {HTMLElement} el
   * @param {number} x
   * @param {number} y
   */
  function placeFloating(el, x, y) {
    el.hidden = false;
    el.style.left = "0px";
    el.style.top = "0px";
    const rect = el.getBoundingClientRect();
    const margin = 8;
    const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
    const left = Math.min(Math.max(margin, x), maxLeft);
    let top = y + 8;
    if (top + rect.height > window.innerHeight - margin) {
      top = Math.max(margin, y - rect.height - 8);
    }
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
  }

  /**
   * @param {object | null} element
   * @param {string | null} partName
   * @param {{ id: string, labelKey: string, run: Function }[]} actions
   * @param {number} x
   * @param {number} y
   */
  function openPopover(element, partName, actions, x, y) {
    closeMenu();
    pop.replaceChildren();
    pop.hidden = false;
    if (!element) {
      addLine(opts.t("ui.noIfc"), partName || "");
    } else {
      const idRow = document.createElement("div");
      idRow.className = "ifc-pop-id";
      const idText = document.createElement("div");
      idText.className = "ifc-pop-gid";
      const kicker = document.createElement("div");
      kicker.className = "ifc-kicker";
      kicker.textContent = opts.t("ui.globalId");
      const value = document.createElement("div");
      value.className = "ifc-gid";
      value.textContent = element.globalId || "";
      idText.append(kicker, value);
      const reveal = document.createElement("button");
      reveal.type = "button";
      reveal.className = "ifc-reveal";
      reveal.innerHTML = REVEAL_ICON;
      reveal.setAttribute("aria-label", opts.t("ui.reveal"));
      reveal.title = opts.t("ui.reveal");
      reveal.addEventListener("click", (ev) => {
        ev.stopPropagation();
        closePopover();
        revealElement(element.globalId);
      });
      idRow.append(idText, reveal);
      pop.append(idRow);
      addLine(opts.t("ui.type"), element.type || "");
      addLine(opts.t("ui.name"), element.name || element.id || "");
      const where = containmentOf(opts.index, element.globalId);
      if (where.storey) addLine(opts.t("ui.storey"), where.storey.name || where.storey.id);
      if (where.space) addLine(opts.t("ui.space"), where.space.name || where.space.id);
      const dims = dimensionLines(element);
      if (dims.length) addBlock(opts.t("ui.dimensions"), dims);
      const notes = noteLines(element);
      if (notes.length) addBlock(opts.t("ui.note"), notes);
    }
    if (actions.length) {
      const row = document.createElement("div");
      row.className = "ifc-actions";
      for (const action of actions) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "ifc-action";
        button.textContent = opts.t(action.labelKey);
        button.addEventListener("click", (ev) => {
          ev.stopPropagation();
          action.run();
          opts.onVisibility();
        });
        row.append(button);
      }
      pop.append(row);
    }
    placeFloating(pop, x, y);
  }

  /**
   * @param {string} kicker
   * @param {string} value
   */
  function addLine(kicker, value) {
    const block = document.createElement("div");
    block.className = "ifc-line";
    const k = document.createElement("div");
    k.className = "ifc-kicker";
    k.textContent = kicker;
    const v = document.createElement("div");
    v.className = "ifc-value";
    v.textContent = value;
    block.append(k, v);
    pop.append(block);
  }

  /**
   * @param {string} title
   * @param {string[]} lines
   */
  function addBlock(title, lines) {
    const block = document.createElement("div");
    block.className = "ifc-line";
    const k = document.createElement("div");
    k.className = "ifc-kicker";
    k.textContent = title;
    const v = document.createElement("div");
    v.className = "ifc-note";
    v.textContent = lines.join("\n");
    block.append(k, v);
    pop.append(block);
  }

  /**
   * @param {string} id
   */
  function revealElement(id) {
    if (!opts.index.elements[id]) return;
    for (const ancestor of ancestorIds(opts.index, id)) expanded.add(ancestor);
    focusId = id;
    highlightId = id;
    opts.openSheet();
    showInspector();
    render();
    requestAnimationFrame(() => scrollRowIntoView(id));
  }

  scroll.addEventListener(
    "scroll",
    () => {
      if (!page.hidden) renderRows();
    },
    { passive: true },
  );

  document.addEventListener(
    "pointerdown",
    (ev) => {
      const target = ev.target;
      if (!(target instanceof Node)) return;
      if (!pop.hidden && !pop.contains(target)) closePopover();
      if (!menu.hidden && !menu.contains(target)) closeMenu();
    },
    true,
  );

  return {
    open: openInspector,
    refresh: render,
    closePopover,
    openPopover,
    reveal: revealElement,
    isInspectorOpen: () => !page.hidden,
  };
}
