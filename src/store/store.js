import { configureStore } from '@reduxjs/toolkit';
import topTracksSlice from './chartsSlice';

export const store = configureStore({
  reducer: {
    tracks: topTracksSlice,
  },
});
