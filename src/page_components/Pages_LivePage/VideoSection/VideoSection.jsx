import React from 'react';
import YoutubeEmbed from '@/components/YoutubeEmbed/YoutubeEmbed';
import { useGetLiveStreamURLQuery } from '@/services/tkt-backend/live';
import VideoLoader from './VideoLoader';
import Styles from './VideoSection.module.scss';

function LiveStreamVideoSection() {
  const {
    isLoading,
    data: liveStreamURL,
  } = useGetLiveStreamURLQuery();

  let videoId = null;

  if (isLoading) {
    return <VideoLoader />;
  }

  [, videoId] = liveStreamURL.split('?v=');

  return (
    <section className={Styles['video-section']}>
      <YoutubeEmbed embedId={videoId} />
    </section>
  );
}

export default LiveStreamVideoSection;
