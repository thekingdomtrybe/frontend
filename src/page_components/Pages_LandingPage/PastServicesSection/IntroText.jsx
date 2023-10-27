import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h2>Watch Past Services</h2>
      <p>
        Listen to past services delivered by men
        of God which offers a precious opportunity
        to receive divine guidance, wisdom, and inspiration.
      </p>
    </div>
  );
}

export default IntroText;
