/**
 * Session-only visibility. Not written to the URL.
 * Hiding a row hides that element, everything aggregated or contained
 * under it, and the members of a group (a kitchen bay keeps its shared
 * dividers, see ifcTree.subtreeIds). "All others" is every element outside
 * that set.
 */

import { isGroup, subtreeIds } from "./ifcTree.js";

/**
 * @param {object} index
 */
export function createVisibility(index) {
  /** @type {Set<string>} */
  const hidden = new Set();

  function everyId() {
    return Object.keys(index.elements);
  }

  return {
    isHidden(id) {
      const element = index.elements[id];
      if (isGroup(element)) {
        const members = subtreeIds(index, id).filter(
          (item) => item !== id && !isGroup(index.elements[item]),
        );
        if (!members.length) return hidden.has(id);
        return members.every((item) => hidden.has(item));
      }
      return hidden.has(id);
    },
    anyHidden() {
      return hidden.size > 0;
    },
    hiddenIds() {
      return [...hidden];
    },
    hide(id) {
      for (const item of subtreeIds(index, id)) {
        if (!isGroup(index.elements[item]) || item === id) hidden.add(item);
      }
    },
    unhide(id) {
      for (const item of subtreeIds(index, id)) hidden.delete(item);
    },
    hideOthers(id) {
      const keep = new Set(subtreeIds(index, id));
      for (const item of everyId()) {
        if (keep.has(item) || isGroup(index.elements[item])) continue;
        hidden.add(item);
      }
    },
    unhideOthers(id) {
      const keep = new Set(subtreeIds(index, id));
      for (const item of everyId()) {
        if (keep.has(item) || isGroup(index.elements[item])) continue;
        hidden.delete(item);
      }
    },
    showAll() {
      hidden.clear();
    },
  };
}
