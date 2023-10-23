import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h1>
        Pray Without Ceasing
      </h1>
      <p>
        Prayer requests are a vital method to communicate
        our needs to God and to encourage one another in faith.
        You may submit prayer requests for yourself or others.
        We believe that through prayer, God will perform miracles
        and bring peace, healing, and hope to people in need.
      </p>
    </div>
  );
}

export default IntroText;
