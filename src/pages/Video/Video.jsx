import React, { useEffect, useState } from 'react';
import {
  MdThumbUpAlt,
  MdThumbDownAlt,
  MdShare,
  MdFileDownload,
  MdBookmarkAdd,
  MdMoreHoriz,
} from 'react-icons/md';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { convertDataIntoMonthDayYear } from '../../utils/convertDataIntoMonthDayYear';
import { convertDataIntoNumberUsingUnits } from '../../utils/convertDataIntoNumberUsingUnits';
import * as S from './style';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const Video = () => {
  const { videos } = useSelector((state) => state.mostPopularVideos);
  const [video, setVideo] = useState(null);
  const [channel, setChannel] = useState();
  const { id } = useParams();

  const fetchChannelData = async (channelId) => {
    return await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${KEY}`,
      { method: 'GET', redirect: 'follow' }
    );
  };

  useEffect(() => {
    const video = videos.filter((video) => video.id === id);
    setVideo(video[0]);
    fetchChannelData(video[0].snippet.channelId).then((res) =>
      setChannel(res.data.items[0])
    );
  }, []);
  return (
    <>
      {video && channel && (
        <S.Container>
          <S.Video
            type="text/html"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
          ></S.Video>
          <S.Wrapper>
            <S.VideoTitle>{video.snippet.title}</S.VideoTitle>
            <S.Actions>
              <S.Metadata>
                <span>{`${Number(
                  video.statistics.viewCount
                ).toLocaleString()} views`}</span>
                <VscDebugStackframeDot color="gray" />
                <span>
                  {convertDataIntoMonthDayYear(video.snippet.publishedAt)}
                </span>
              </S.Metadata>
              <S.Buttons>
                <S.Button>
                  <MdThumbUpAlt />
                  <S.ButtonName>
                    {convertDataIntoNumberUsingUnits(
                      video.statistics.likeCount
                    )}
                  </S.ButtonName>
                </S.Button>
                <S.Button>
                  <MdThumbDownAlt />
                  <S.ButtonName>DISLIKE</S.ButtonName>
                </S.Button>
                <S.Button>
                  <MdShare />
                  <S.ButtonName>SHARE</S.ButtonName>
                </S.Button>
                <S.Button>
                  <MdFileDownload />
                  <S.ButtonName>DOWNLOAD</S.ButtonName>
                </S.Button>
                <S.Button>
                  <MdBookmarkAdd />
                  <S.ButtonName>SAVE</S.ButtonName>
                </S.Button>
                <S.Button>
                  <MdMoreHoriz />
                </S.Button>
              </S.Buttons>
            </S.Actions>
            <S.VideoInfo>
              <S.VideoInfoWrapper>
                <S.ChannelIconWrapper>
                  <S.ChannelIcon
                    src={channel.snippet.thumbnails.default.url}
                    alt="channel thumbnail"
                  />
                  <S.ChannelTitleWrapper>
                    <S.ChannelTitle>
                      {video.snippet.channelTitle}
                    </S.ChannelTitle>
                    <S.Subscribers>{`${convertDataIntoNumberUsingUnits(
                      channel.statistics.subscriberCount
                    )} subscribers`}</S.Subscribers>
                  </S.ChannelTitleWrapper>
                </S.ChannelIconWrapper>
                <S.SubBtn>subscribe</S.SubBtn>
              </S.VideoInfoWrapper>
              <S.VideoDescription>
                {video.snippet.description}
              </S.VideoDescription>
            </S.VideoInfo>
          </S.Wrapper>
          {/* Comment */}
        </S.Container>
      )}
    </>
  );
};

export default Video;
