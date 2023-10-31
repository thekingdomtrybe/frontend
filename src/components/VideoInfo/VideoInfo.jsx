import React from 'react';
import PropTypes from 'prop-types';
import Styles from './VideoInfo.module.scss';

function VideoInfo({
  title,
  description,
  minister,
  uploadDate,
}) {
  let videoDate = new Date(uploadDate);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  videoDate = videoDate.toLocaleDateString('en-US', options);

  return (
    <div className={Styles['video-info']}>
      <div className={Styles['video-details']}>
        <h1>{title}</h1>
        <div className={Styles['minister-upload-date']}>
          <div className={Styles.minister}>{minister}</div>
          <div className={Styles.separator} />
          <div className={Styles['upload-date']}>
            {videoDate}
          </div>
        </div>
      </div>
      <div className={Styles['video-description']}>
        <h2>About video</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

VideoInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  minister: PropTypes.string.isRequired,
  uploadDate: PropTypes.string.isRequired,
};

export default VideoInfo;
