import React from 'react';
import Styles from './HeroImage.module.scss';

function HeroImage() {
  return (
    <div>
      <div className={Styles['hero-image-overlay']} />
      <picture className={Styles['hero-image']}>
        <source media="(min-width: 768px)" srcSet="/images/community-page-hero-image.webp" type="image/webp" />
        <source media="(min-width: 0px)" srcSet="/images/community-page-hero-image-mobile.webp" type="image/webp" />
        <img src="/images/community-page-hero-image.jpg" alt="" />
      </picture>
    </div>
  );
}

export default HeroImage;
