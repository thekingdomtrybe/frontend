import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h1>
        Serve Wholeheartedly
      </h1>
      <p>
        Church volunteering allows you to put your
        talents and abilities to use while also strengthening
        friendships within the church community and enhancing
        your spiritual growth and understanding.
      </p>
    </div>
  );
}

export default IntroText;
