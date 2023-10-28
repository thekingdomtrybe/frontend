import React from 'react';
import images from '@/assets/images';
import Styles from './Image.module.scss';

function Image() {
  return (
    <picture className={Styles.image}>
      <source srcSet={images.landingPage.prayerSection.prayerWEBP} type="image/webp" />
      <img src={images.landingPage.prayerSection.prayerJPG} alt="" loading="lazy" />
    </picture>
  );
}

export default Image;
