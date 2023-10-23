import React from 'react';
import Styles from './WelcomeText.module.scss';

function WelcomeText() {
  return (
    <div className={Styles['welcome-text']}>
      <h1>
        Welcome To
        <br />
        The Kingdom Trybe
      </h1>
      <p>
        We are the cyber arm of the Truth of Calvary
        Ministries. Come and have a great time with us every
        Sunday by 9am, 12pm and 3pm WAT.
      </p>
    </div>
  );
}

export default WelcomeText;
