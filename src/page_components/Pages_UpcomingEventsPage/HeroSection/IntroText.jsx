import React from 'react';
import Styles from './IntroText.module.scss';

function IntroText() {
  return (
    <div className={Styles['intro-text']}>
      <h1>
        Check Out What&apos;s Coming Next
      </h1>
      <p>
        Events that are planned to occur this year.
        They may also be used to welcome new members to the church
        and ask members of the larger community to participate.
        These activities are crucial in building the links of the
        church community and offering chances for spiritual growth and development.
      </p>
    </div>
  );
}

export default IntroText;
