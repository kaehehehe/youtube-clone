import { configureStore } from '@reduxjs/toolkit';

import mostPopularVideosReducer from './mostPopularVideosSlice';
import searchVideosReducer from './searchVideos';

export default configureStore({
  reducer: {
    mostPopularVideos: mostPopularVideosReducer,
    searchVideos: searchVideosReducer,
  },
});
