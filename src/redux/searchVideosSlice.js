import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const initialState = {
  videos: [],
  loading: false,
};

export const fetchSearchData = createAsyncThunk(
  'search/fetchSearchData',
  async (keyword) => {
    return await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${KEY}`,
      { method: 'GET', redirect: 'follow' }
    );
  }
);

const searchVideosSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchData.pending]: (state) => {
      state.loading = true;
    },
    [fetchSearchData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.videos = payload.data.items;
    },
  },
});

export default searchVideosSlice.reducer;
