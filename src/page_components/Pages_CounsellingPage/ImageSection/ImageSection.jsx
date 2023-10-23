import React from 'react';
import Styles from './ImageSection.module.scss';

function CounsellingPageImageSection() {
  return (
    <section className={Styles['image-section']}>
      <div className={Styles['hero-image-container']}>
        <div className={Styles['hero-image-overlay']} />
      </div>
    </section>
  );
}

export default CounsellingPageImageSection;
