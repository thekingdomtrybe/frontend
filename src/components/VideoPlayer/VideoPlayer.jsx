import React from 'react';
import PropTypes from 'prop-types';
import Styles from './VideoPlayer.module.scss';

function VideoPlayer({
  title,
  description,
  src,
  autoPlay,
}) {
  return (
    <div className={Styles['video-player']}>
      <div className={Styles['video-container']}>
        <video
          src={src}
          controls
          autoPlay={autoPlay}
        >
          <track kind="captions" label="English" />
        </video>
      </div>
      <div className={Styles['video-description']}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  autoPlay: false,
};

export default VideoPlayer;
