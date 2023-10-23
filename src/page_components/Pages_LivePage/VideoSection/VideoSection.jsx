import React from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import YoutubeEmbed from '@/components/YoutubeEmbed/YoutubeEmbed';
import Styles from './VideoSection.module.scss';

function LiveStreamVideoSection() {
  return (
    <section className={Styles['video-section']}>
      {/* <video>
        <track kind="captions" label="English" />
      </video> */}
      <YoutubeEmbed embedId="jqUKWU7vhJA" />
      <div className={Styles['video-details']}>
        <VideoDetails />
      </div>
    </section>
  );
}

export default LiveStreamVideoSection;
