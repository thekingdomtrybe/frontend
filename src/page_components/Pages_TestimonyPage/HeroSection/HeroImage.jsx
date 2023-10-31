import React from 'react';
import images from '@/assets/images';
import Styles from './HeroImage.module.scss';

function HeroImage() {
  return (
    <div className={Styles['hero-image-container']}>
      <div className={Styles['hero-image-overlay']} />
      <picture className={Styles['hero-image']}>
        <source media="(min-width: 768px)" srcSet={images.testimoniesPage.heroSectionImage.wide} type="image/webp" />
        <source media="(min-width: 0px)" srcSet={images.testimoniesPage.heroSectionImage.mobile} type="image/webp" />
        <img src={images.testimoniesPage.heroSectionImage.fallback} alt="" />
      </picture>
    </div>
  );
}

export default HeroImage;
