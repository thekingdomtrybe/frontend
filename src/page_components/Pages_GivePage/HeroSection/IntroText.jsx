import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h1>
        God Loves a Cheerful Giver
      </h1>
      <p>
        We reflect God&apos;s love and compassion through giving,
        and we join Him in His purpose to offer hope and healing
        to a wounded world.
        Giving is a major biblical concept that highlights
        the value of generosity and kindness to others.
      </p>
    </div>
  );
}

export default IntroText;
