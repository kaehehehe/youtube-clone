import React from 'react';
import { useSelector } from 'react-redux';


import * as S from './style';
const Search = () => {
  const { videos, loading } = useSelector((state) => state.searchVideos);
  console.log(videos)
  return <S.Container>

  </S.Container>;
};

export default Search;
