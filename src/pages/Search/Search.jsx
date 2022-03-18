import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import SearchedVideo from '../../components/SearchedVideo/SearchedVideo';
import DefaultSideNavbar from '../../components/DefaultSideNavbar/DefaultSideNavbar';

const Search = () => {
  const { videos, loading } = useSelector((state) => state.searchVideos);
  return (
    <S.Container>
      <DefaultSideNavbar />
      <S.Videos>
        {!loading &&
          videos.map((video) => <SearchedVideo key={video.id} video={video} />)}
      </S.Videos>
    </S.Container>
  );
};

export default Search;
