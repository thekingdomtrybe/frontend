import React from 'react';
import PropTypes from 'prop-types';
import Styles from './VideoPlayer.module.scss';

function VideoPlayer({
  src,
  autoPlay,
}) {
  return (
    <video
      src={src}
      controls
      autoPlay={autoPlay}
      className={Styles.video}
    >
      <track kind="captions" label="English" />
    </video>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  autoPlay: false,
};

export default VideoPlayer;
