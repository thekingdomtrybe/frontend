import React from 'react';
import Styles from './VideoLoader.module.scss';

function VideoLoader() {
  return (
    <div className={Styles['video-loader']}>
      <span className={Styles.spinner} />
    </div>
  );
}

export default VideoLoader;
