import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import VideoInfo from '@/components/VideoInfo/VideoInfo';
import { useGetPastServicesQuery } from '@/services/tkt-backend/past_services';
import Styles from './VideoSection.module.scss';

function WatchVideoVideoSection() {
  const { data: pastServicesData } = useGetPastServicesQuery();
  const location = useLocation();
  const navigate = useNavigate();

  const videoId = location.search.split('=')[1];
  const videoData = pastServicesData.find((video) => video.id.toString() === videoId);

  if (!videoData) {
    navigate('/');
  }

  const videoToPlay = {
    src: videoData.media_link,
    title: videoData.title,
    description: videoData.description,
    minister: videoData.speaker_name,
    date: videoData.date,
    poster: videoData.video_cover,
  };

  return (
    <section className={Styles['video-section']}>
      <div className={Styles['video-player']}>
        <VideoPlayer
          src={videoToPlay.src}
          poster={videoToPlay.poster}
        />
      </div>
      <div className={Styles['video-information']}>
        <VideoInfo
          title={videoToPlay.title}
          minister={videoToPlay.minister}
          uploadDate={videoToPlay.date}
          description={videoToPlay.description}
        />
      </div>
    </section>
  );
}

export default WatchVideoVideoSection;
