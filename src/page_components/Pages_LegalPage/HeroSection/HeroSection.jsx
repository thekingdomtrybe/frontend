import React from 'react';
import images from '@/assets/images';
import Styles from './HeroSection.module.scss';

function LegalPageHeroSection() {
  return (
    <section className={Styles['hero-section']}>
      <div className={Styles['hero-image-container']}>
        <picture className={Styles['hero-image']}>
          <source srcSet={images.legalPages.heroSectionImage.wide} type="image/webp" />
          <img src={images.legalPages.heroSectionImage.fallback} alt="" />
        </picture>
      </div>
    </section>
  );
}

export default LegalPageHeroSection;
