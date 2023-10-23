import React from 'react';
import Styles from './ImageSection.module.scss';

function AuthPageImageSection() {
  return (
    <section className={Styles['image-section']}>
      <div className={Styles['image-container']}>
        <div className={Styles['image-overlay']} />
      </div>
    </section>
  );
}

export default AuthPageImageSection;
