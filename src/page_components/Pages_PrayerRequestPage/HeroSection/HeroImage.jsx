import React from 'react';
import Styles from './HeroImage.module.scss';

function HeroImage() {
  return (
    <div className={Styles['hero-image-container']}>
      <div className={Styles['hero-image-overlay']} />
      <picture className={Styles['hero-image']}>
        <source media="(min-width: 768px)" srcSet="/images/prayer-request-page-hero-image.webp" type="image/webp" />
        <source media="(min-width: 0px)" srcSet="/images/prayer-request-page-hero-image-mobile.webp" type="image/webp" />
        <img src="/images/prayer-request-page-hero-image.jpg" alt="" />
      </picture>
    </div>
  );
}

export default HeroImage;
