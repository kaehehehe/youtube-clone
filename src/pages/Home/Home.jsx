import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './style';
import MostPopularVideo from '../../components/MostPopularVideo/MostPopularVideo';
import { fetchVideoData } from '../../redux/mostPopularVideosSlice';
import DefaultSideNavbar from '../../components/DefaultSideNavbar';

const Home = () => {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.mostPopularVideos);
  useEffect(() => {
    dispatch(fetchVideoData());
  }, [dispatch]);

  return (
    <S.Container>
      <DefaultSideNavbar />
      <S.Videos>
      {!loading &&
        videos.map((video) => (
          <MostPopularVideo key={video.id} video={video} />
        ))}
      </S.Videos>
    </S.Container>
  );
};

export default Home;
