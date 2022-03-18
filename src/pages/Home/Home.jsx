import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './style';
import MostPopularVideo from '../../components/MostPopularVideo/MostPopularVideo';
import { fetchVideoData } from '../../redux/mostPopularVideosSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.mostPopularVideos);
  useEffect(() => {
    dispatch(fetchVideoData());
  }, [dispatch]);

  return (
    <S.Container>
      {!loading &&
        videos.map((video) => (
          <MostPopularVideo key={video.id} video={video} />
        ))}
    </S.Container>
  );
};

export default Home;
