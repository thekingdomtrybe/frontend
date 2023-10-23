import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h1>
        Watch Past Sermons
      </h1>
      <p>
        A collection of video recordings of previous church
        services and sermons. A useful resource for reviewing
        and reflecting on previous lessons and events, as well
        as sharing these experiences with others.
      </p>
    </div>
  );
}

export default IntroText;
