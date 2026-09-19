/**
 * Horizontal range that cooperates with vertical sheet scrolling.
 *
 * Native <input type="range"> often monopolizes the touch (especially iOS),
 * so vertical pans that begin on the thumb never scroll the sheet. A div with
 * `touch-action: pan-y` lets the UA own vertical panning (like UIKit gesture
 * failure); we only consume horizontal drags. Taps do not seek — callers may
 * use `onTap` for toggle behavior (e.g. FOV ↔ ISO).
 *
 * @param {object} opts
 * @param {number} [opts.min]
 * @param {number} [opts.max]
 * @param {number} [opts.step]
 * @param {number} [opts.value]
 * @param {string} [opts.ariaLabel]
 * @param {(value: number) => string} [opts.formatAriaValue]
 * @param {(value: number) => void} [opts.onInput]
 * @param {(value: number) => void} [opts.onChange]
 * @param {() => void} [opts.onScrubStart]
 * @param {() => void} [opts.onScrubEnd]
 * @param {() => void} [opts.onTap]
 * @param {boolean} [opts.thumbScrubOnly] When true, horizontal scrub starts only
 *   if the pointer went down on/near the thumb. Track taps still fire onTap;
 *   dragging the track does not seek (avoids click-to-scrub).
 */
export function createCooperativeRange(opts = {}) {
  const min = opts.min ?? 0;
  const max = opts.max ?? 1;
  const step = opts.step ?? 0.001;
  const thumbScrubOnly = Boolean(opts.thumbScrubOnly);
  let value = clamp(opts.value ?? min, min, max);

  const root = document.createElement("div");
  root.className = "coop-range";
  root.setAttribute("role", "slider");
  root.tabIndex = 0;
  if (opts.ariaLabel) root.setAttribute("aria-label", opts.ariaLabel);
  root.setAttribute("aria-valuemin", String(min));
  root.setAttribute("aria-valuemax", String(max));

  const track = document.createElement("div");
  track.className = "coop-range-track";
  const fill = document.createElement("div");
  fill.className = "coop-range-fill";
  const thumb = document.createElement("div");
  thumb.className = "coop-range-thumb";
  track.append(fill, thumb);
  root.append(track);

  const TAP_SLOP_PX = 10;
  /** Extra hit padding around the visible thumb for grab / thumbScrubOnly. */
  const THUMB_HIT_PAD_PX = 14;

  /** @type {number | null} */
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let axisLocked = false;
  let scrubbing = false;
  let moved = false;
  /** False when thumbScrubOnly and down missed the thumb — tap ok, scrub blocked. */
  let allowScrub = true;

  function syncDom() {
    const t = max === min ? 0 : (value - min) / (max - min);
    const pct = `${t * 100}%`;
    fill.style.width = pct;
    thumb.style.left = pct;
    root.setAttribute("aria-valuenow", String(value));
    const text = opts.formatAriaValue?.(value) ?? String(value);
    root.setAttribute("aria-valuetext", text);
  }

  /**
   * @param {number} clientX
   * @param {number} clientY
   */
  function pointerNearThumb(clientX, clientY) {
    const rect =
      typeof thumb.getBoundingClientRect === "function"
        ? thumb.getBoundingClientRect()
        : null;
    if (!rect || !(rect.width > 0) || !(rect.height > 0)) {
      // No layout (tests / hidden): treat as on-thumb so scrub still works.
      return true;
    }
    return (
      clientX >= rect.left - THUMB_HIT_PAD_PX &&
      clientX <= rect.right + THUMB_HIT_PAD_PX &&
      clientY >= rect.top - THUMB_HIT_PAD_PX &&
      clientY <= rect.bottom + THUMB_HIT_PAD_PX
    );
  }

  /**
   * @param {number} v
   * @param {"input" | "change" | "silent"} [notify]
   */
  function setValue(v, notify = "input") {
    const next = quantize(clamp(v, min, max), min, max, step);
    if (next === value && notify === "silent") {
      syncDom();
      return;
    }
    value = next;
    syncDom();
    if (notify === "input" || notify === "change") opts.onInput?.(value);
    if (notify === "change") opts.onChange?.(value);
  }

  /**
   * @param {number} clientX
   */
  function valueFromClientX(clientX) {
    const rect = track.getBoundingClientRect();
    const w = Math.max(rect.width, 1);
    const t = clamp((clientX - rect.left) / w, 0, 1);
    return min + t * (max - min);
  }

  function endScrub(commit) {
    if (pointerId == null) return;
    const wasScrubbing = scrubbing;
    pointerId = null;
    axisLocked = false;
    scrubbing = false;
    allowScrub = true;
    if (wasScrubbing) opts.onScrubEnd?.();
    if (commit && wasScrubbing) opts.onChange?.(value);
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerDown(ev) {
    if (pointerId != null) return;
    if (ev.pointerType === "mouse" && ev.button !== 0) return;
    pointerId = ev.pointerId;
    startX = ev.clientX;
    startY = ev.clientY;
    moved = false;
    axisLocked = false;
    scrubbing = false;
    allowScrub = !thumbScrubOnly || pointerNearThumb(ev.clientX, ev.clientY);
    // Wait for horizontal drag past slop before seeking (mouse and touch).
    // Immediate seek on down is click-to-scrub; we do not want that.
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerMove(ev) {
    if (pointerId !== ev.pointerId) return;
    const dx = ev.clientX - startX;
    const dy = ev.clientY - startY;
    if (!moved && Math.hypot(dx, dy) > TAP_SLOP_PX) moved = true;

    if (!axisLocked) {
      if (!moved) return;
      // Vertical wins → abandon; browser scrolls the sheet (touch).
      if (ev.pointerType === "touch" && Math.abs(dy) >= Math.abs(dx)) {
        endScrub(false);
        return;
      }
      if (!allowScrub) {
        // Horizontal drag on the track with thumbScrubOnly — do not seek.
        endScrub(false);
        return;
      }
      axisLocked = true;
      scrubbing = true;
      opts.onScrubStart?.();
      try {
        root.setPointerCapture(ev.pointerId);
      } catch (_) {
        /* ignore */
      }
    }

    setValue(valueFromClientX(ev.clientX), "input");
    ev.preventDefault();
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerUp(ev) {
    if (pointerId !== ev.pointerId) return;
    // Tap (no drag): do not seek; optional toggle callback.
    if (!moved && !scrubbing) {
      pointerId = null;
      axisLocked = false;
      scrubbing = false;
      allowScrub = true;
      opts.onTap?.();
      return;
    }
    endScrub(true);
  }

  /**
   * @param {PointerEvent} ev
   */
  function onPointerCancel(ev) {
    if (pointerId !== ev.pointerId) return;
    // UA took the gesture (typically vertical pan) — do not commit a change.
    endScrub(false);
  }

  /**
   * @param {KeyboardEvent} ev
   */
  function onKeyDown(ev) {
    const span = max - min;
    const jump = step > 0 ? step : span / 100;
    const page = span / 10;
    let next = value;
    switch (ev.key) {
      case "ArrowLeft":
      case "ArrowDown":
        next = value - jump;
        break;
      case "ArrowRight":
      case "ArrowUp":
        next = value + jump;
        break;
      case "PageDown":
        next = value - page;
        break;
      case "PageUp":
        next = value + page;
        break;
      case "Home":
        next = min;
        break;
      case "End":
        next = max;
        break;
      case "Enter":
      case " ":
        ev.preventDefault();
        opts.onTap?.();
        return;
      default:
        return;
    }
    ev.preventDefault();
    setValue(next, "change");
  }

  root.addEventListener("pointerdown", onPointerDown);
  root.addEventListener("pointermove", onPointerMove);
  root.addEventListener("pointerup", onPointerUp);
  root.addEventListener("pointercancel", onPointerCancel);
  root.addEventListener("keydown", onKeyDown);

  syncDom();

  return {
    el: root,
    get value() {
      return value;
    },
    set value(v) {
      setValue(v, "silent");
    },
    /** Re-run aria-valuetext / fill sync (e.g. after external format change). */
    refresh() {
      syncDom();
    },
  };
}

/**
 * @param {number} v
 * @param {number} lo
 * @param {number} hi
 */
function clamp(v, lo, hi) {
  return Math.min(hi, Math.max(lo, v));
}

/**
 * @param {number} v
 * @param {number} lo
 * @param {number} hi
 * @param {number} step
 */
function quantize(v, lo, hi, step) {
  if (!(step > 0)) return clamp(v, lo, hi);
  const n = Math.round((v - lo) / step);
  // toPrecision avoids binary float residue (e.g. 0.1 * 7).
  const q = Number((lo + n * step).toPrecision(12));
  return clamp(q, lo, hi);
}
