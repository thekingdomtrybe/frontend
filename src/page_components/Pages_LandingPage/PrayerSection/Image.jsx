import React from 'react';
import Styles from './Image.module.scss';

function Image() {
  return (
    <picture className={Styles.image}>
      <source srcSet="/images/prayer-request-small.webp" type="image/webp" />
      <img src="/images/prayer-request-small.jpg" alt="" loading="lazy" />
    </picture>
  );
}

export default Image;
