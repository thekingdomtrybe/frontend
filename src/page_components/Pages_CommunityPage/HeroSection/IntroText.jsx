import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h1>
        Growing Together in God&apos;s Grace
      </h1>
      <p>
        You do not need to have everything figured out
        to be a part of it - everyone is welcome! Here
        is a great place to make new friends study the
        Word of God, and find support when you need it.
        Come as you are, and you will be welcome with open arms.
      </p>
    </div>
  );
}

export default IntroText;
