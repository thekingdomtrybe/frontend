import React from 'react';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import WatchVideoDescriptionSection from '../DescriptionSection/DescriptionSection';
import Styles from './VideoSection.module.scss';

function WatchVideoVideoSection() {
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

  // Get more videos from API
  const moreVideos = [
    {
      title: 'Overcoming Challenges',
      url: '...',
    },
    {
      title: 'Overcoming Challenges',
      url: '...',
    },
  ];

  return (
    <section className={Styles['video-section']}>
      <VideoPlayer
        title={videoToPlay.title}
        src={videoToPlay.src}
        description={videoToPlay.description}
        // autoPlay
      />
      <WatchVideoDescriptionSection
        minister={videoToPlay.minister}
        date={videoToPlay.date}
        moreVideos={moreVideos}
      />
    </section>
  );
}

export default WatchVideoVideoSection;
