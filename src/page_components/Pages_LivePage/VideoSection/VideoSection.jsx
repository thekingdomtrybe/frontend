import React from 'react';
import PropTypes from 'prop-types';
import YoutubeEmbed from '@/components/YoutubeEmbed/YoutubeEmbed';
import { useGetLiveStreamURLQuery } from '@/services/tkt-backend/live';
import VideoLoader from './VideoLoader';
import NotLive from './NotLive';
import Styles from './VideoSection.module.scss';

function LiveStreamVideoSection({
  isLiveNow,
}) {
  const {
    isLoading,
    data: liveStreamURL,
  } = useGetLiveStreamURLQuery();

  let videoId = null;

  if (isLoading) {
    return <VideoLoader />;
  }

  if (!isLiveNow) {
    return <NotLive />;
  }

  [, videoId] = liveStreamURL.split('?v=');

  return (
    <section className={Styles['video-section']}>
      <YoutubeEmbed embedId={videoId} />
    </section>
  );
}

LiveStreamVideoSection.propTypes = {
  isLiveNow: PropTypes.bool.isRequired,
};

export default LiveStreamVideoSection;
