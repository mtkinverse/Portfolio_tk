import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    paletteOpen: false,
    startOpen: false,
    theme: 'dark',
    // Transient target set by global search: { appId, itemId }.
    // The target app consumes it (scroll + highlight) then clears it.
    focusItem: null,
  },
  reducers: {
    setPalette(state, action) {
      state.paletteOpen = action.payload;
      if (action.payload) state.startOpen = false;
    },
    togglePalette(state) {
      state.paletteOpen = !state.paletteOpen;
      if (state.paletteOpen) state.startOpen = false;
    },
    setStart(state, action) {
      state.startOpen = action.payload;
      if (action.payload) state.paletteOpen = false;
    },
    toggleStart(state) {
      state.startOpen = !state.startOpen;
      if (state.startOpen) state.paletteOpen = false;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    setFocusItem(state, action) {
      state.focusItem = action.payload;
    },
    clearFocusItem(state) {
      state.focusItem = null;
    },
  },
});

export const {
  setPalette, togglePalette, setStart, toggleStart,
  toggleTheme, setFocusItem, clearFocusItem,
} = uiSlice.actions;

export const selectPaletteOpen = (s) => s.ui.paletteOpen;
export const selectStartOpen = (s) => s.ui.startOpen;
export const selectTheme = (s) => s.ui.theme;
export const selectFocusItem = (s) => s.ui.focusItem;

export default uiSlice.reducer;
