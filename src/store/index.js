import { configureStore } from '@reduxjs/toolkit';
import windowsReducer from './windowsSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    windows: windowsReducer,
    ui: uiReducer,
  },
});
