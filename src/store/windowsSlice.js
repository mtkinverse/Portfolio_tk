import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { getApp } from '../os/apps/appMeta';

const adapter = createEntityAdapter();

// Counters live IN state so reducers stay pure and z-order is O(1).
const initialState = adapter.getInitialState({ zTop: 10, seq: 0 });

const TASKBAR_H = 56;
const clamp = (v, min, max) => Math.min(Math.max(v, min), Math.max(min, max));

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    openApp: {
      // Viewport dims are environment input, read once here (not in the reducer).
      prepare(appId, opts = {}) {
        return {
          payload: {
            appId,
            origin: opts.origin ?? null,
            props: opts.props ?? {},
            vw: window.innerWidth,
            vh: window.innerHeight,
          },
        };
      },
      reducer(state, action) {
        const { appId, origin, props, vw, vh } = action.payload;
        const existing = Object.values(state.entities).find(
          (w) => w.appId === appId && !w.closing
        );
        if (existing) {
          existing.z = ++state.zTop;
          existing.minimized = false;
          return;
        }
        const meta = getApp(appId);
        const w = Math.min(meta?.size.w ?? 720, vw - 48);
        const h = Math.min(meta?.size.h ?? 520, vh - TASKBAR_H - 40);
        const step = state.seq % 5;
        const x = clamp((vw - w) / 2 + (step - 2) * 42, 16, vw - w - 16);
        const y = clamp((vh - TASKBAR_H - h) / 2 - 12 + step * 26, 12, vh - TASKBAR_H - h - 8);
        state.seq += 1;
        adapter.addOne(state, {
          id: `w${state.seq}`,
          appId,
          title: meta?.title ?? appId,
          x, y, w, h,
          z: ++state.zTop,
          minimized: false,
          maximized: false,
          closing: false,
          origin,
          props,
        });
      },
    },
    // Two-phase close: mark closing → AnimatePresence runs the exit animation →
    // Window dispatches destroyWindow when the exit finishes.
    closeApp(state, action) {
      const w = state.entities[action.payload];
      if (w) w.closing = true;
    },
    destroyWindow(state, action) {
      adapter.removeOne(state, action.payload);
    },
    focusWindow(state, action) {
      const w = state.entities[action.payload];
      if (w && !w.closing) {
        w.z = ++state.zTop;
        w.minimized = false;
      }
    },
    minimizeWindow(state, action) {
      const w = state.entities[action.payload];
      if (w) w.minimized = true;
    },
    toggleMaximize(state, action) {
      const w = state.entities[action.payload];
      if (w && !w.closing) {
        w.maximized = !w.maximized;
        w.z = ++state.zTop;
        w.minimized = false;
      }
    },
    moveWindow(state, action) {
      const { id, x, y } = action.payload;
      const w = state.entities[id];
      if (w) {
        w.x = x;
        w.y = y;
      }
    },
    // Re-fit every window when the viewport shrinks so no title bar can end
    // up unreachable.
    clampWindows(state, action) {
      const { vw, vh } = action.payload;
      for (const id of state.ids) {
        const w = state.entities[id];
        w.w = Math.min(w.w, vw - 32);
        w.h = Math.min(w.h, vh - TASKBAR_H - 24);
        w.x = clamp(w.x, 8, vw - w.w - 8);
        w.y = clamp(w.y, 8, vh - TASKBAR_H - w.h - 4);
      }
    },
  },
});

export const {
  openApp, closeApp, destroyWindow, focusWindow,
  minimizeWindow, toggleMaximize, moveWindow, clampWindows,
} = windowsSlice.actions;

const selectors = adapter.getSelectors((s) => s.windows);
export const selectAllWindows = selectors.selectAll;
export const selectWindowById = selectors.selectById;

export const selectTopmostId = createSelector([selectAllWindows], (wins) => {
  let top = null;
  for (const w of wins) {
    if (w.minimized || w.closing) continue;
    if (!top || w.z > top.z) top = w;
  }
  return top?.id ?? null;
});

export default windowsSlice.reducer;
