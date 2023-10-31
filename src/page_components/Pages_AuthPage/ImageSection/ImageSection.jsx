import React from 'react';
import images from '@/assets/images';
import Styles from './ImageSection.module.scss';

function AuthPageImageSection() {
  return (
    <section className={Styles['image-section']}>
      <div className={Styles['image-container']}>
        <picture className={Styles['hero-image']}>
          <source srcSet={images.authenticationPages.heroSectionImage.wide} type="image/webp" />
          <img src={images.authenticationPages.heroSectionImage.fallback} alt="" />
        </picture>
      </div>
    </section>
  );
}

export default AuthPageImageSection;
