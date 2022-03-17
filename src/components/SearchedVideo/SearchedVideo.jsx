import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as S from './style';
import { convertDataIntoAgo } from '../../utils/convertDataIntoAgo';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const SearchedVideo = ({ video }) => {
  const navigate = useNavigate();
  const [channel, setChannel] = useState();

  const fetchChannelData = async (channelId) => {
    return await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${KEY}`,
      { method: 'GET', redirect: 'follow' }
    );
  };

  useEffect(() => {
    fetchChannelData(video.snippet.channelId).then((res) =>
      setChannel(res.data.items[0])
    );
  }, []);

  const handleClickVideo = () => {
    const { videoId } = video.id;
    navigate(`/search/video/${videoId}`);
  };

  return (
    <>
      {channel && (
        <S.Video onClick={handleClickVideo}>
          <S.Thumbnail>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt="video thumbnail"
            />
          </S.Thumbnail>
          <S.VideoMetadata>
            <S.Title>{video.snippet.title}</S.Title>
            <S.PublishedAt>
              {convertDataIntoAgo(video.snippet.publishedAt)} ago
            </S.PublishedAt>
            <S.Wrapper>
              <S.ChannelImg
                src={channel.snippet.thumbnails.default.url}
                alt="channel thumbnail"
              />
              <S.Channel>{video.snippet.channelTitle}</S.Channel>
            </S.Wrapper>
            <S.Description>{video.snippet.description}</S.Description>
          </S.VideoMetadata>
        </S.Video>
      )}
    </>
  );
};

export default SearchedVideo;
