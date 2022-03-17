import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import SearchedVideo from '../../components/SearchedVideo/SearchedVideo';

const Search = () => {
  const { videos, loading } = useSelector((state) => state.searchVideos);
  return (
    <S.Container>
      {!loading &&
        videos.map((video) => <SearchedVideo key={video.id} video={video} />)}
    </S.Container>
  );
};

export default Search;
