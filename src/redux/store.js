import { configureStore } from '@reduxjs/toolkit';

import mostPopularVideosReducer from './mostPopularVideosSlice';

export default configureStore({
  reducer: {
    mostPopularVideos: mostPopularVideosReducer,
  },
});
