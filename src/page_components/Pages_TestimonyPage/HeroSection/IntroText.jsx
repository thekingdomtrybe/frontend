import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h1>
        I Will Declare Your Name
      </h1>
      <p>
        Testimonies are like cheerleaders, lifting others in their faith
        journey and giving a big shout-out to God for His incredible
        power and love! They boost faith, inspire, and show how God
        can transform lives. Let&apos;s share our stories to encourage,
        uplift, and celebrate the amazing things God does!
      </p>
    </div>
  );
}

export default IntroText;
