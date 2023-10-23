import React from 'react';
import Styles from './AboutChurchText.module.scss';

function AboutChurchText() {
  return (
    <div className={Styles['about-church-text']}>
      <h2>Who We Are</h2>
      <p>
        At The Kingdom Trybe, we are a vibrant and
        close-knit church fellowship dedicated to fostering
        spiritual growth, community, and worship.
        Our mission is to create an inclusive and nurturing
        environment where individuals from all walks of life
        can come together to seek a deeper connection with God.
      </p>
    </div>
  );
}

export default AboutChurchText;
