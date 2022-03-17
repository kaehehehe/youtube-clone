import { configureStore } from '@reduxjs/toolkit';

import mostPopularVideosReducer from './mostPopularVideosSlice';
import searchVideosReducer from './searchVideosSlice';

export default configureStore({
  reducer: {
    mostPopularVideos: mostPopularVideosReducer,
    searchVideos: searchVideosReducer,
  },
});
