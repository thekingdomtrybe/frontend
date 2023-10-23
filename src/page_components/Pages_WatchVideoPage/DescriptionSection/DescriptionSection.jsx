import React from 'react';
import PropTypes from 'prop-types';
import VideoThumbnail from '@/components/VideoThumbnail/VideoThumbnail';
import Styles from './DescriptionSection.module.scss';

function WatchVideoDescriptionSection({
  minister,
  date,
  moreVideos,
}) {
  const moreVideoComponents = moreVideos.map((video) => (
    <VideoThumbnail
      key={video.title}
      cover=""
      title={video.title}
    />
  ));

  return (
    <section className={Styles['video-description-section']}>
      <h2>Video Details</h2>
      <div className={Styles.details}>
        <div className={Styles.detail}>
          <h3>Minister</h3>
          <p>{minister}</p>
        </div>
        <div className={Styles.detail}>
          <h3>Upload Date</h3>
          <p>{date}</p>
        </div>
      </div>

      <h2>More Videos</h2>
      <div className={Styles['more-videos']}>
        {moreVideoComponents}
      </div>
    </section>
  );
}

WatchVideoDescriptionSection.propTypes = {
  minister: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  moreVideos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default WatchVideoDescriptionSection;
