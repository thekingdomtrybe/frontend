import React from 'react';
import Styles from './Loader.module.scss';

function TestimoniesLoader() {
  return (
    <div className={Styles.loader}>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-body']} />
        <div className={Styles['loader-item-author']} />
      </div>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-body']} />
        <div className={Styles['loader-item-author']} />
      </div>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-body']} />
        <div className={Styles['loader-item-author']} />
      </div>
      <div className={Styles['loader-item']}>
        <div className={Styles['loader-item-body']} />
        <div className={Styles['loader-item-author']} />
      </div>
    </div>
  );
}

export default TestimoniesLoader;
