import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const initialState = {
  videos: [],
  loading: false,
};

export const fetchVideoData = createAsyncThunk(
  'mostPopularVideos/fetchVideoData',
  async () => {
    return await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=3&regionCode=KR&key=${KEY}`,
      { method: 'GET', redirect: 'follow' }
    );
  }
);

const mostPopularVideosSlice = createSlice({
  name: 'mostPopularVideos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchVideoData.pending]: (state) => {
      state.loading = true;
    },
    [fetchVideoData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.videos = payload.data.items;
    },
  },
});

export default mostPopularVideosSlice.reducer;
