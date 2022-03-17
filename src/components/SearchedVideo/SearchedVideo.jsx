import React from 'react';

import * as S from './style';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';

const SearchedVideo = ({ video }) => {
  return (
    <S.Video>
      <S.Thumbnail>
        <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
      </S.Thumbnail>
      <S.VideoMetadata>
        <S.Title>{video.snippet.title}</S.Title>
        <S.PublishedAt>
          {convertDataIntoAgo(video.snippet.publishedAt)} ago
        </S.PublishedAt>
        <S.Wrapper>
          {/* <S.ChannelImg src={channel} alt="channel thumbnail" /> */}
          <S.Channel>{video.snippet.channelTitle}</S.Channel>
        </S.Wrapper>
        <S.Description>{video.snippet.description}</S.Description>
      </S.VideoMetadata>
    </S.Video>
  );
};

export default SearchedVideo;
