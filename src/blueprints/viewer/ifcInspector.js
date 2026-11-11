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
  rowTapEffect,
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
 *   liveLines?: (element: object) => string[],
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
    if (row.id === highlightId || row.id === focusId) el.classList.add("is-target");
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
   * iOS Safari cancels pointerup for a tap inside a scrolling sheet and
   * often never sends click. touchend still arrives. A long-press must not
   * also count as that tap.
   * @param {string} id
   */
  let lastSelectAt = 0;
  function selectRow(id) {
    const now = performance.now();
    if (now - lastSelectAt < 40) return;
    lastSelectAt = now;
    const effect = rowTapEffect(focusId, id);
    focusId = id;
    opts.onFrame(id, { move: effect === "frame" });
    flash(id);
    renderCrumbs();
  }

  /**
   * @param {EventTarget | null} target
   */
  function onDisclosure(target) {
    return target instanceof Element && Boolean(target.closest(".ifc-disclosure"));
  }

  /**
   * @param {HTMLElement} el
   * @param {string} id
   */
  function wireRowGesture(el, id) {
    /** @type {{ x: number, y: number, moved: number, consumed: boolean } | null} */
    let gesture = null;
    let timer = 0;
    const clearTimer = () => {
      if (timer) window.clearTimeout(timer);
      timer = 0;
    };
    const begin = (x, y, target) => {
      if (onDisclosure(target)) return;
      clearTimer();
      gesture = { x, y, moved: 0, consumed: false };
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
    };
    const move = (x, y) => {
      if (!gesture) return;
      const dist = Math.hypot(x - gesture.x, y - gesture.y);
      if (dist > gesture.moved) gesture.moved = dist;
      if (gesture.moved > 12) clearTimer();
    };
    const finish = (x, y, target) => {
      clearTimer();
      const g = gesture;
      gesture = null;
      if (!g || g.consumed || onDisclosure(target)) return;
      const dist = Math.max(g.moved, Math.hypot(x - g.x, y - g.y));
      if (dist > 12) return;
      selectRow(id);
    };
    el.addEventListener("pointerdown", (ev) => {
      if (ev.button !== undefined && ev.button !== 0) return;
      begin(ev.clientX, ev.clientY, ev.target);
    });
    el.addEventListener("pointermove", (ev) => move(ev.clientX, ev.clientY));
    el.addEventListener("pointerup", (ev) => {
      // Mouse path. Touch selection is touchend: iOS drops pointerup here.
      if (ev.pointerType === "touch") return;
      finish(ev.clientX, ev.clientY, ev.target);
    });
    el.addEventListener("pointercancel", () => clearTimer());
    el.addEventListener(
      "touchend",
      (ev) => {
        const t = ev.changedTouches[0];
        if (!t) return;
        finish(t.clientX, t.clientY, ev.target);
      },
      { passive: true },
    );
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

  /** Finger is still down from the long-press when the menu appears. */
  let menuReady = false;

  function openRowMenu(id, x, y) {
    closePopover();
    menu.replaceChildren();
    menu.hidden = false;
    menuReady = false;
    const hidden = opts.visibility.isHidden(id);
    addMenuButton(hidden ? "ui.unhideThis" : "ui.hideThis", () => {
      if (hidden) opts.visibility.unhide(id);
      else opts.visibility.hide(id);
      commitVisibility();
    });
    addMenuButton("ui.hideOthers", () => {
      opts.visibility.hideOthers(id);
      commitVisibility();
    });
    addMenuButton("ui.unhideOthers", () => {
      opts.visibility.unhideOthers(id);
      commitVisibility();
    });
    placeFloating(menu, x, y);
  }

  function commitVisibility() {
    opts.onVisibility();
    closeMenu();
    render();
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
    let used = false;
    const fire = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      if (used) return;
      used = true;
      run();
    };
    // touchend: iOS delivers this for a tap on a fixed menu. click covers mouse.
    button.addEventListener("touchend", fire);
    button.addEventListener("click", fire);
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
   * @param {{ id: string, labelKey: string, label?: string, run: Function }[]} actions
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
      const title = document.createElement("button");
      title.type = "button";
      title.className = "ifc-pop-title";
      const kicker = document.createElement("div");
      kicker.className = "ifc-kicker";
      const value = document.createElement("div");
      value.className = "ifc-name";
      const name = element.name || element.id || "";
      const gid = element.globalId || "";
      let showId = false;
      let titleAt = 0;
      const paintTitle = () => {
        kicker.hidden = !showId;
        kicker.textContent = showId ? opts.t("ui.globalId") : "";
        value.textContent = showId ? gid : name;
        value.className = showId ? "ifc-gid" : "ifc-name";
        title.setAttribute("aria-label", showId ? name : opts.t("ui.globalId"));
      };
      const swapTitle = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const now = performance.now();
        if (now - titleAt < 80) return;
        titleAt = now;
        showId = !showId;
        paintTitle();
      };
      paintTitle();
      title.append(kicker, value);
      title.addEventListener("touchend", swapTitle);
      title.addEventListener("click", swapTitle);
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
      idRow.append(title, reveal);
      pop.append(idRow);
      addLine(opts.t("ui.type"), element.type || "");
      const where = containmentOf(opts.index, element.globalId);
      if (where.storey) addLine(opts.t("ui.storey"), where.storey.name || where.storey.id);
      if (where.space) addLine(opts.t("ui.space"), where.space.name || where.space.id);
      const dims = dimensionLines(element);
      if (dims.length) addBlock(opts.t("ui.dimensions"), dims);
      const notes = noteLines(element);
      if (notes.length) addBlock(opts.t("ui.note"), notes);
      const live = opts.liveLines?.(element) || [];
      if (live.length) addBlock(opts.t("home.live"), live);
    }
    if (actions.length) {
      const row = document.createElement("div");
      row.className = "ifc-actions";
      for (const action of actions) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "ifc-action";
        button.textContent = action.label || opts.t(action.labelKey);
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

  const outside = (target) => {
    if (!(target instanceof Node)) return true;
    if (!pop.hidden && pop.contains(target)) return false;
    if (!menu.hidden && menu.contains(target)) return false;
    return true;
  };
  // The long-press finger is still down when the menu opens. Ignore that
  // release. The next pointerdown outside dismisses; a pointerdown on a
  // menu button must not remove the button before touchend/click.
  document.addEventListener(
    "pointerup",
    () => {
      if (!menu.hidden) menuReady = true;
    },
    true,
  );
  document.addEventListener(
    "pointerdown",
    (ev) => {
      const target = ev.target;
      if (!pop.hidden && outside(target)) closePopover();
      if (!menu.hidden && menuReady && outside(target)) closeMenu();
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
