import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const corsProxy = 'https://api.allorigins.win/raw?url=';
const apiUrl = 'https://api.deezer.com/chart';

export const fetchTopTracks = createAsyncThunk(
  'tracks/fetchAll',
  async thunkApi => {
    try {
      const response = await axios.get(`${corsProxy}${apiUrl}`);
      if (response.status === 200) {
        const tracks = response.data.tracks.data;
        return tracks;
      }
      throw new Error(response.statusText);
    } catch (error) {
      console.error(error);
    }
  }
);

export const topTracksSlice = createSlice({
  name: 'tracks',
  initialState: { tracks: [], loading: 'idle' },
  reducers: {
    sortByDurationAsc: state => {
      state.tracks.sort((a, b) => {
        return a.duration - b.duration;
      });
    },
    sortByDurationDesc: state => {
      state.tracks.sort((a, b) => {
        return b.duration - a.duration;
      });
    },
    sortDefault: state => {
      state.tracks.sort((a, b) => {
        return a.position - b.position;
      });
    },
  },
  extraReducers: {
    [fetchTopTracks.fulfilled]: (state, action) => {
      if (action.payload.error) {
        state.loading = 'error';
        return;
      }
      state.loading = 'loaded';
      state.tracks = action.payload;
    },
    [fetchTopTracks.pending]: (state, action) => {
      state.tracks = [];
      state.loading = 'loading';
    },
    [fetchTopTracks.rejected]: (state, action) => {
      state.loading = 'failed';
    },
  },
});
export const { sortByDurationAsc, sortByDurationDesc, sortDefault } =
  topTracksSlice.actions;
export default topTracksSlice.reducer;
