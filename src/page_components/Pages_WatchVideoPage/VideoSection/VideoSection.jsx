import React from 'react';
import Video from '@/components/Video/Video';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import VideoInfo from '@/components/VideoInfo/VideoInfo';
import { useGetPastServicesQuery } from '@/services/tkt-backend/past_services';
import VideoLoader from './Loader';
import Styles from './VideoSection.module.scss';

function WatchVideoVideoSection() {
  const { data: pastServicesData, isLoading, isError } = useGetPastServicesQuery();

  let videoComponents = null;

  // TODO: Exclude current video

  if (pastServicesData === undefined || isLoading || isError) {
    videoComponents = <VideoLoader />;
  } else if (pastServicesData && pastServicesData.length === 0) {
    videoComponents = <p>No more videos</p>;
  } else if (pastServicesData && pastServicesData.length > 0) {
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
        image=""
      />
    ));
  }

  // Get video to play from URL
  const videoToPlay = {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Overcoming Challenges',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eveniet alias laborum soluta porro magni asperiores, fugiat tenetur, harum nesciunt sunt quasi omnis voluptatum! Optio cum totam suscipit voluptatum odio iure.
      soluta porro magni asperiores, fugiat tenetur, harum nesciunt sunt quasi omnis voluptatum! Optio cum totam suscipit voluptatum odio iure.`,
    minister: 'Rev. Dr. David Antwi',
    date: '12th June, 2020',
  };

  return (
    <section className={Styles['video-section']}>
      <div className={Styles['video-player']}>
        <VideoPlayer
          src={videoToPlay.src}
          // autoPlay
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
