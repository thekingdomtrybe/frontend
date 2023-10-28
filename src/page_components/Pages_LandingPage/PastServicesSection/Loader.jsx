import React from 'react';
import Styles from './Loader.module.scss';

function VideoLoader() {
  return (
    <>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-video']} />
        <div className={Styles['loader-item-info']}>
          <div className={Styles['loader-item-date']} />
          <div className={Styles['loader-item-title']} />
          <div className={Styles['loader-item-author']} />
        </div>
      </div>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-video']} />
        <div className={Styles['loader-item-info']}>
          <div className={Styles['loader-item-date']} />
          <div className={Styles['loader-item-title']} />
          <div className={Styles['loader-item-author']} />
        </div>
      </div>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-video']} />
        <div className={Styles['loader-item-info']}>
          <div className={Styles['loader-item-date']} />
          <div className={Styles['loader-item-title']} />
          <div className={Styles['loader-item-author']} />
        </div>
      </div>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-video']} />
        <div className={Styles['loader-item-info']}>
          <div className={Styles['loader-item-date']} />
          <div className={Styles['loader-item-title']} />
          <div className={Styles['loader-item-author']} />
        </div>
      </div>
    </>
  );
}

export default VideoLoader;
