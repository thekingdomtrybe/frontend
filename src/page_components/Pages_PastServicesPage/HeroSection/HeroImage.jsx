import React from 'react';
import Styles from './HeroImage.module.scss';

function HeroImage() {
  return (
    <div className={Styles['hero-image-container']}>
      <div className={Styles['hero-image-overlay']} />
    </div>
  );
}

export default HeroImage;
