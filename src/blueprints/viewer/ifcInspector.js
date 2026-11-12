/**
 * IFC popover and the inspector page inside the existing sheet.
 * The sheet's detents and drag handle stay put; this only swaps the scroll
 * page and pushes a back button, the way Settings pushes a subscreen.
 *
 * Two tabs (Spatial and Groups) share a segmented picker; switching
 * animates the panes. Long-press a row for hide / isolate and Info.
 * Element and group info carry the old popover's properties and actions
 * (Petr, 2026-11-12: ditch the popover, go straight into the inspector).
 * A long-press in the model opens that info screen. Back from info
 * returns to the tree; back from the tree returns to the sheet menu.
 */

import {
  INDENT_PX,
  ROW_HEIGHT,
  ancestorIds,
  childGroupIds,
  childIds,
  containmentOf,
  dimensionLines,
  flattenGroupTree,
  flattenTree,
  groupAncestorIds,
  isGroup,
  isGroupId,
  noteLines,
  pathTo,
  rowIndent,
  rowTapEffect,
  visibleRange,
} from "./ifcTree.js";
import { LONG_PRESS_MS, classifyHold } from "./gesture.js";

/**
 * @param {{
 *   index: { elements: Record<string, object>, roots: string[], groups?: string[] },
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
  if (!scroll) return { reveal() {}, open() {}, inspect() {}, refresh() {} };

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

  const tabs = document.createElement("div");
  tabs.className = "seg ifc-tabs";
  tabs.dataset.noSheetDrag = "true";
  const spatialTab = document.createElement("button");
  spatialTab.type = "button";
  const groupsTab = document.createElement("button");
  groupsTab.type = "button";
  tabs.append(spatialTab, groupsTab);

  const crumbs = document.createElement("div");
  crumbs.className = "ifc-crumbs";
  crumbs.dataset.noSheetDrag = "true";

  const tree = document.createElement("div");
  tree.className = "ifc-tree";
  const panes = document.createElement("div");
  panes.className = "ifc-panes";
  const track = document.createElement("div");
  track.className = "ifc-panes-track";
  const spatialPane = makePane();
  const groupsPane = makePane();
  track.append(spatialPane.root, groupsPane.root);
  panes.append(track);
  tree.append(panes);

  const info = document.createElement("div");
  info.className = "ifc-info";
  info.hidden = true;

  const head = document.createElement("div");
  head.className = "ifc-head";
  head.append(toolbar, tabs, crumbs);
  page.append(head, tree, info);
  scroll.append(main, page);

  const menu = document.createElement("div");
  menu.id = "ifc-row-menu";
  menu.hidden = true;
  menu.className = "ifc-menu";
  document.body.append(menu);

  /** @type {Set<string>} */
  const expandedSpatial = new Set();
  /** @type {Set<string>} */
  const expandedGroups = new Set();
  /** @type {"spatial" | "groups"} */
  let tab = "spatial";
  /** @type {string | null} */
  let focusSpatial = null;
  /** @type {string | null} */
  let focusGroups = null;
  /** @type {string | null} */
  let highlightId = null;
  let highlightTimer = 0;
  /** @type {string | null} */
  let infoId = null;
  /** @type {string[]} */
  let infoStack = [];
  /** True when the info page is showing a solid with no IFC record. */
  let infoMissing = false;
  let infoPartName = "";
  const scrollPos = { spatial: 0, groups: 0 };

  function makePane() {
    const root = document.createElement("div");
    root.className = "ifc-pane";
    const list = document.createElement("div");
    list.className = "ifc-list";
    const spacer = document.createElement("div");
    spacer.className = "ifc-list-spacer";
    const windowEl = document.createElement("div");
    windowEl.className = "ifc-list-window";
    list.append(spacer, windowEl);
    root.append(list);
    return { root, list, spacer, windowEl };
  }

  function showMain() {
    page.hidden = true;
    main.hidden = false;
    closeMenu();
    closeInfo();
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
    if (infoId) {
      goBackFromInfo();
      return;
    }
    showMain();
    scroll.scrollTop = 0;
  });
  showAll.addEventListener("click", () => {
    opts.visibility.showAll();
    opts.onVisibility();
    render();
  });
  spatialTab.addEventListener("click", () => setTab("spatial"));
  groupsTab.addEventListener("click", () => setTab("groups"));

  function setTab(next, { animate = true, keepScroll = false } = {}) {
    if (next !== "spatial" && next !== "groups") return;
    if (tab === next) return;
    if (!infoId) scrollPos[tab] = scroll.scrollTop;
    tab = next;
    // The picker is hidden on info; jump the underlying track so Back
    // lands on the right root without a leftover slide.
    const slide = animate && !infoId;
    if (!slide) track.classList.add("is-instant");
    if (!infoId) {
      render();
      if (!keepScroll) scroll.scrollTop = scrollPos[next] || 0;
      renderRows();
    } else {
      track.classList.toggle("is-groups", tab === "groups");
    }
    if (!slide) {
      requestAnimationFrame(() => track.classList.remove("is-instant"));
    }
  }

  function labelOf(id) {
    const element = opts.index.elements[id];
    if (!element) return id;
    return element.name || element.id || element.type || id;
  }

  function focusId() {
    return tab === "groups" ? focusGroups : focusSpatial;
  }

  function setFocus(id) {
    if (tab === "groups") focusGroups = id;
    else focusSpatial = id;
  }

  function renderCrumbs() {
    crumbs.replaceChildren();
    if (tab !== "spatial" || infoId) {
      crumbs.hidden = true;
      return;
    }
    const path = focusSpatial ? pathTo(opts.index, focusSpatial) : [];
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
        focusSpatial = id;
        for (const ancestor of ancestorIds(opts.index, id)) expandedSpatial.add(ancestor);
        render();
        scrollRowIntoView(id);
      });
      crumbs.append(button);
    });
  }

  function render() {
    const inInfo = Boolean(infoId) || infoMissing;
    if (inInfo) {
      const previous = infoStack.length ? infoStack[infoStack.length - 1] : null;
      back.textContent = previous ? `‹ ${labelOf(previous)}` : `‹ ${opts.t("ui.inspector")}`;
    } else {
      back.textContent = `‹ ${opts.t("ui.menu")}`;
    }
    showAll.textContent = opts.t("ui.showAll");
    showAll.hidden = !opts.visibility.anyHidden();
    entryLabel.textContent = opts.t("ui.inspector");
    spatialTab.textContent = opts.t("ui.spatial");
    groupsTab.textContent = opts.t("ui.groups");
    spatialTab.classList.toggle("is-active", tab === "spatial");
    groupsTab.classList.toggle("is-active", tab === "groups");
    tabs.hidden = inInfo;
    tree.hidden = inInfo;
    info.hidden = !inInfo;
    track.classList.toggle("is-groups", tab === "groups");
    renderCrumbs();
    if (inInfo) renderInfo();
    else renderRows();
  }

  function listContentTop(list) {
    const scrollRect = scroll.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    return listRect.top - scrollRect.top + scroll.scrollTop;
  }

  function stickyChrome() {
    const scrollRect = scroll.getBoundingClientRect();
    return head.getBoundingClientRect().bottom - scrollRect.top + 6;
  }

  function activePane() {
    return tab === "groups" ? groupsPane : spatialPane;
  }

  function flattenActive() {
    return tab === "groups"
      ? flattenGroupTree(opts.index, expandedGroups)
      : flattenTree(opts.index, expandedSpatial);
  }

  function rowKids(id) {
    return tab === "groups" ? childGroupIds(opts.index, id) : childIds(opts.index, id);
  }

  function renderPane(pane, rows, active) {
    pane.spacer.style.height = `${rows.length * ROW_HEIGHT}px`;
    if (!active) {
      pane.windowEl.replaceChildren();
      return;
    }
    const range = visibleRange(
      scroll.scrollTop,
      scroll.clientHeight || 320,
      listContentTop(pane.list),
      rows.length,
      ROW_HEIGHT,
    );
    pane.windowEl.replaceChildren();
    pane.windowEl.style.transform = `translateY(${range.start * ROW_HEIGHT}px)`;
    for (let i = range.start; i < range.end; i++) {
      pane.windowEl.append(renderRow(rows[i]));
    }
  }

  function renderRows() {
    const spatialRows = flattenTree(opts.index, expandedSpatial);
    const groupRows = flattenGroupTree(opts.index, expandedGroups);
    const activeRows = tab === "groups" ? groupRows : spatialRows;
    panes.style.height = `${activeRows.length * ROW_HEIGHT}px`;
    renderPane(spatialPane, spatialRows, tab === "spatial");
    renderPane(groupsPane, groupRows, tab === "groups");
  }

  /**
   * @param {{ id: string, depth: number }} row
   */
  function renderRow(row) {
    const element = opts.index.elements[row.id];
    const kids = rowKids(row.id);
    const el = document.createElement("div");
    el.className = "ifc-row";
    el.dataset.id = row.id;
    el.style.paddingLeft = `${rowIndent(row.depth) + 8}px`;
    el.style.height = `${ROW_HEIGHT}px`;
    if (row.id === highlightId || row.id === focusId()) el.classList.add("is-target");
    if (opts.visibility.isHidden(row.id)) el.classList.add("is-hidden");

    if (kids.length) {
      const chevron = document.createElement("button");
      chevron.type = "button";
      chevron.className = "ifc-disclosure";
      const open = (tab === "groups" ? expandedGroups : expandedSpatial).has(row.id);
      chevron.textContent = open ? "▾" : "›";
      chevron.setAttribute("aria-expanded", open ? "true" : "false");
      chevron.setAttribute("aria-label", open ? opts.t("ui.collapse") : opts.t("ui.expand"));
      chevron.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const set = tab === "groups" ? expandedGroups : expandedSpatial;
        if (set.has(row.id)) set.delete(row.id);
        else set.add(row.id);
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
    const effect = rowTapEffect(focusId(), id);
    setFocus(id);
    opts.onFrame(id, { move: effect === "frame" });
    flash(id);
    renderCrumbs();
    renderRows();
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
      if (!infoId) renderRows();
    }, 1600);
    if (!infoId) renderRows();
  }

  function scrollRowIntoView(id) {
    const rows = flattenActive();
    const index = rows.findIndex((row) => row.id === id);
    if (index < 0) return;
    const rowTop = listContentTop(activePane().list) + index * ROW_HEIGHT;
    scroll.scrollTop = Math.max(0, rowTop - stickyChrome());
    renderRows();
  }

  /** Finger is still down from the long-press when the menu appears. */
  let menuReady = false;

  function openRowMenu(id, x, y) {
    menu.replaceChildren();
    menu.hidden = false;
    menuReady = false;
    addMenuButton("ui.info", () => openInfo(id, { fromMenu: true }));
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

  function closeInfo() {
    infoId = null;
    infoStack = [];
    infoMissing = false;
    infoPartName = "";
    info.replaceChildren();
  }

  function goBackFromInfo() {
    if (infoStack.length) {
      infoId = infoStack.pop();
      revealInTree(infoId, { switchTab: true, openInfo: false, animate: true });
      render();
      return;
    }
    closeInfo();
    render();
    requestAnimationFrame(() => {
      const id = focusId();
      if (id) scrollRowIntoView(id);
    });
  }

  /**
   * @param {string} id
   * @param {{ fromMenu?: boolean, push?: boolean }} [detail]
   */
  function openInfo(id, detail = {}) {
    if (!opts.index.elements[id]) return;
    closeMenu();
    infoMissing = false;
    infoPartName = "";
    if (detail.push && infoId && infoId !== id) infoStack.push(infoId);
    else if (detail.fromMenu) infoStack = [];
    infoId = id;
    revealInTree(id, { switchTab: true, openInfo: false, animate: true });
    opts.openSheet();
    showInspector();
    render();
  }

  /**
   * @param {string} id
   * @param {{ switchTab?: boolean, openInfo?: boolean, animate?: boolean }} [detail]
   */
  function revealInTree(id, detail = {}) {
    if (!opts.index.elements[id]) return;
    const asGroup = isGroupId(opts.index, id);
    const nextTab = asGroup ? "groups" : "spatial";
    if (detail.switchTab !== false && tab !== nextTab) {
      setTab(nextTab, { animate: detail.animate !== false, keepScroll: true });
    }
    if (asGroup) {
      for (const ancestor of groupAncestorIds(opts.index, id)) expandedGroups.add(ancestor);
      focusGroups = id;
    } else {
      for (const ancestor of ancestorIds(opts.index, id)) expandedSpatial.add(ancestor);
      focusSpatial = id;
    }
    highlightId = id;
    if (detail.openInfo) {
      openInfo(id, { push: true });
      return;
    }
    if (!infoId) {
      render();
      requestAnimationFrame(() => scrollRowIntoView(id));
    }
  }

  function renderInfo() {
    info.replaceChildren();
    const element = infoId ? opts.index.elements[infoId] : null;
    if (!element) {
      addInfoLine(opts.t("ui.noIfc"), infoPartName || "");
      return;
    }
    const title = document.createElement("button");
    title.type = "button";
    title.className = "ifc-info-swap";
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
    const wrap = document.createElement("div");
    wrap.className = "ifc-info-title";
    wrap.append(title);
    info.append(wrap);

    addInfoLine(opts.t("ui.type"), element.type || "");
    const where = containmentOf(opts.index, element.globalId);
    if (where.storey) addInfoLine(opts.t("ui.storey"), where.storey.name || where.storey.id);
    if (where.space) addInfoLine(opts.t("ui.space"), where.space.name || where.space.id);
    const dims = dimensionLines(element);
    if (dims.length) addInfoBlock(opts.t("ui.dimensions"), dims);
    const notes = noteLines(element);
    if (notes.length) addInfoBlock(opts.t("ui.note"), notes);
    const live = opts.liveLines?.(element) || [];
    if (live.length) addInfoBlock(opts.t("home.live"), live);

    if (isGroup(element)) {
      addInfoLinks(opts.t("ui.parentGroups"), element.parentGroupIds || element.groups || []);
      addInfoLinks(opts.t("ui.childGroups"), element.childGroupIds || childGroupIds(opts.index, element.globalId));
      addInfoLinks(opts.t("ui.childElements"), element.memberIds || []);
    } else {
      addInfoLinks(opts.t("ui.groups"), element.groups || []);
    }

    const interaction = opts.actionsFor?.(element) || [];
    addInfoActions(interaction);
    addInfoActions(visibilityActions(element.globalId));
  }

  /**
   * Hide / isolate / frame. A group's actions apply to its members
   * recursively (createVisibility / onFrame already use subtreeIds).
   * @param {string} id
   */
  function visibilityActions(id) {
    if (!id || !opts.index.elements[id]) return [];
    const hidden = opts.visibility.isHidden(id);
    return [
      {
        id: "frame",
        labelKey: "ui.frame",
        run: () => opts.onFrame(id, { move: true }),
      },
      {
        id: "hide",
        labelKey: hidden ? "ui.unhideThis" : "ui.hideThis",
        run: () => {
          if (hidden) opts.visibility.unhide(id);
          else opts.visibility.hide(id);
        },
      },
      {
        id: "hideOthers",
        labelKey: "ui.hideOthers",
        run: () => opts.visibility.hideOthers(id),
      },
      {
        id: "unhideOthers",
        labelKey: "ui.unhideOthers",
        run: () => opts.visibility.unhideOthers(id),
      },
    ];
  }

  /**
   * @param {{ id: string, labelKey: string, label?: string, run: Function }[]} actions
   */
  function addInfoActions(actions) {
    if (!actions.length) return;
    const row = document.createElement("div");
    row.className = "ifc-actions";
    for (const action of actions) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ifc-action";
      button.textContent = action.label || opts.t(action.labelKey);
      button.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        action.run();
        opts.onVisibility();
        render();
      });
      row.append(button);
    }
    info.append(row);
  }

  function addInfoLine(kicker, value) {
    const block = document.createElement("div");
    block.className = "ifc-line";
    const k = document.createElement("div");
    k.className = "ifc-kicker";
    k.textContent = kicker;
    const v = document.createElement("div");
    v.className = "ifc-value";
    v.textContent = value;
    block.append(k, v);
    info.append(block);
  }

  function addInfoBlock(title, lines) {
    const block = document.createElement("div");
    block.className = "ifc-line";
    const k = document.createElement("div");
    k.className = "ifc-kicker";
    k.textContent = title;
    const v = document.createElement("div");
    v.className = "ifc-note";
    v.textContent = lines.join("\n");
    block.append(k, v);
    info.append(block);
  }

  /**
   * @param {string} title
   * @param {string[]} ids
   */
  function addInfoLinks(title, ids) {
    const present = (ids || []).filter((id) => opts.index.elements[id]);
    if (!present.length) return;
    const block = document.createElement("div");
    block.className = "ifc-info-section";
    const k = document.createElement("div");
    k.className = "ifc-kicker";
    k.textContent = title;
    block.append(k);
    for (const id of present) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ifc-info-link";
      const name = document.createElement("span");
      name.className = "ifc-row-name";
      name.textContent = labelOf(id);
      const meta = document.createElement("span");
      meta.className = "ifc-row-meta";
      meta.textContent = opts.index.elements[id]?.type || "";
      button.append(name, meta);
      button.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        revealInTree(id, { switchTab: true, openInfo: true, animate: true });
      });
      block.append(button);
    }
    info.append(block);
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
  /**
   * Open the inspector on this element's info screen (a long-press in the
   * model). No IFC record still opens info, with the part name.
   * @param {object | null} element
   * @param {{ partName?: string }} [detail]
   */
  function inspect(element, detail = {}) {
    closeMenu();
    const id = element?.globalId;
    if (id && opts.index.elements[id]) {
      infoMissing = false;
      infoPartName = "";
      infoStack = [];
      infoId = id;
      revealInTree(id, { switchTab: true, openInfo: false, animate: false });
      opts.onFrame?.(id, { move: false });
    } else {
      infoId = null;
      infoStack = [];
      infoMissing = true;
      infoPartName = detail.partName || "";
    }
    opts.openSheet();
    showInspector();
    render();
  }

  function revealElement(id) {
    if (!opts.index.elements[id]) return;
    closeInfo();
    opts.openSheet();
    showInspector();
    revealInTree(id, { switchTab: true, openInfo: false, animate: false });
  }

  scroll.addEventListener(
    "scroll",
    () => {
      if (!page.hidden && !infoId && !infoMissing) renderRows();
    },
    { passive: true },
  );

  const outside = (target) => {
    if (!(target instanceof Node)) return true;
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
      if (!menu.hidden && menuReady && outside(target)) closeMenu();
    },
    true,
  );

  return {
    open: openInspector,
    refresh: render,
    inspect,
    reveal: revealElement,
    isInspectorOpen: () => !page.hidden,
  };
}
