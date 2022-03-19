import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import * as S from './style';
import MostPopularVideo from '../../components/MostPopularVideo/MostPopularVideo';
import { fetchVideoData } from '../../redux/mostPopularVideosSlice';
import DefaultSideNavbar from '../../components/DefaultSideNavbar';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const Home = () => {
  const dispatch = useDispatch();
  // const { videos, loading } = useSelector((state) => state.mostPopularVideos);
  const targetRef = useRef(null);
  const [videos, setVideos] = useState([]);
  const [cnt, setCnt] = useState(20);

  const fetchData = async (cnt) => {
    try {
      return await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${cnt}&regionCode=KR&key=${KEY}`,
        { method: 'GET', redirect: 'follow' }
      );
    } catch (e) {
      console.error(e);
    }
  };

  const intersectionObserver = (entries, io) => {
    // console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        const newVideo = fetchData(cnt).then((res) =>
          setVideos(res.data.items)
        );
        setCnt(cnt + 3);
        setVideos([...videos, ...newVideo]);

        // dispatch(fetchVideoData()); //getData
      }
    });
  };

  useEffect(() => {
    fetchData(cnt).then((res) => setVideos(res.data.items));
    setCnt(cnt + 3);
  }, []);

  // useEffect(() => {
  //   dispatch(fetchVideoData()); //getData
  // }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
    console.log(targetRef.current); // null
    targetRef.current && observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [intersectionObserver]);

  return (
    <S.Container>
      <DefaultSideNavbar />
      <S.Videos>
        {videos.map((video, index) => {
          console.log(index + 1 == videos.length);
          return (
            <MostPopularVideo
              ref={index + 1 == videos.length ? targetRef : undefined}
              key={video.id}
              video={video}
            />
          );
        })}
      </S.Videos>
    </S.Container>
  );
};

export default Home;
