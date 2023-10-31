import React from 'react';
import PropTypes from 'prop-types';
import Styles from './VideoPlayer.module.scss';

function VideoPlayer({
  src,
  poster,
  autoPlay,
}) {
  return (
    <video
      src={src}
      controls
      autoPlay={autoPlay}
      className={Styles.video}
      poster={poster}
    >
      <track kind="captions" label="English" />
    </video>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  poster: PropTypes.string.isRequired,
};

VideoPlayer.defaultProps = {
  autoPlay: false,
};

export default VideoPlayer;
