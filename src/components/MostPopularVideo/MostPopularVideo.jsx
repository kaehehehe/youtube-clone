import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

import * as S from './style';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';
import { convertDataIntoMinutesAndSeconds } from '../../utils/convertDataIntoMinutesAndSeconds';
import { convertDataIntoNumberUsingUnits } from '../../utils/convertDataIntoNumberUsingUnits';

const MostPopularVideo = ({ video }) => {
  const heightRef = useRef(null);
  const { width, height } = useWindowSize(null);
  const [thumbnailHeight, setThumbnailHeight] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const thumbnailHeight = heightRef.current.height;
    setThumbnailHeight(thumbnailHeight);
  }, [[width, height]]);

  const handleClickVideo = () => {
    const { id } = video;
    navigate(`/video/${id}`);
  };

  return (
    <S.Video onClick={handleClickVideo}>
      <S.ThumbnailWrapper>
        <S.Thumbnail
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
          ref={heightRef}
        />
        <S.Duration height={thumbnailHeight}>
          {convertDataIntoMinutesAndSeconds(video.contentDetails.duration)}
        </S.Duration>
      </S.ThumbnailWrapper>
      <S.Wrapper>
        {/* <S.ChannelThumbnail src={} alt="channel thumbnail" /> */}
        <S.VideoMetadata>
          <p className="title">{video.snippet.title}</p>
          <p className="channel-name">{video.snippet.channelTitle}</p>
          <S.MetadataWrapper>
            <span>{`${convertDataIntoNumberUsingUnits(
              video.statistics.viewCount
            )} views`}</span>
            <VscDebugStackframeDot color="gray" />
            <span className="published-at">
              {convertDataIntoAgo(video.snippet.publishedAt)} ago
            </span>
          </S.MetadataWrapper>
        </S.VideoMetadata>
      </S.Wrapper>
    </S.Video>
  );
};

export default MostPopularVideo;
