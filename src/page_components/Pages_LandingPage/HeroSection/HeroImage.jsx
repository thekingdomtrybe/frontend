import React from 'react';
import images from '@/assets/images';
import Styles from './HeroImage.module.scss';

function HeroImage() {
  return (
    <div>
      <div className={Styles['hero-image-overlay']} />
      <picture className={Styles['hero-image']}>
        <source media="(min-width: 768px)" srcSet={images.landingPage.heroSectionImage.wide} type="image/webp" />
        <source media="(min-width: 0px)" srcSet={images.landingPage.heroSectionImage.mobile} type="image/webp" />
        <img src={images.landingPage.heroSectionImage.fallback} alt="" />
      </picture>
    </div>
  );
}

export default HeroImage;
