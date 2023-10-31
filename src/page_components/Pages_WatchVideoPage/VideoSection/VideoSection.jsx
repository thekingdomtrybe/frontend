import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Video from '@/components/Video/Video';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import VideoInfo from '@/components/VideoInfo/VideoInfo';
import { useGetPastServicesQuery } from '@/services/tkt-backend/past_services';
import Styles from './VideoSection.module.scss';

function WatchVideoVideoSection() {
  const { data: pastServicesData, isLoading, isError } = useGetPastServicesQuery();
  const location = useLocation();
  const navigate = useNavigate();
  let videoComponents = null;

  // TODO: Exclude current video

  if (isError) {
    navigate('/');
  }

  if (pastServicesData === undefined && isLoading) {
    return <></>;
  }

  if (pastServicesData === undefined && !isLoading) {
    navigate('/');
  }

  const videoId = location.search.split('=')[1];
  const videoData = pastServicesData.find((video) => video.id.toString() === videoId);

  if (!videoData) {
    navigate('/');
  }

  if (pastServicesData && pastServicesData.length > 0) {
    const sortedPastServices = [...pastServicesData]
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

    videoComponents = (sortedPastServices).map((video) => (
      <Video
        key={video.id}
        id={video.id}
        title={video.title}
        minister={video.speaker_name}
        date={video.date}
        description={video.description}
        image={video.video_cover}
      />
    ));
  }

  // Get video to play from URL
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
      <div className={Styles['more-videos-container']}>
        <div className={Styles['more-videos']}>
          <h2>More Past Service Recordings</h2>
          <div className={Styles['video-list']}>
            {videoComponents}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchVideoVideoSection;
