import React from 'react';
import images from '@/assets/images';
import Styles from './ImageSection.module.scss';

function CounsellingPageImageSection() {
  return (
    <section className={Styles['image-section']}>
      <div className={Styles['hero-image-container']}>
        <picture className={Styles['hero-image']}>
          <source srcSet={images.counsellingPage.heroSectionImage.wide} type="image/webp" />
          <img src={images.counsellingPage.heroSectionImage.fallback} alt="" />
        </picture>
      </div>
    </section>
  );
}

export default CounsellingPageImageSection;
