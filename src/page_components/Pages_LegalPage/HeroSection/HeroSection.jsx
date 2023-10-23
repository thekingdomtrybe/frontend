import React from 'react';
import Styles from './HeroSection.module.scss';

function LegalPageHeroSection() {
  return (
    <section className={Styles['hero-section']}>
      <div className={Styles['hero-image-container']}>
        <div className={Styles['hero-image-overlay']} />
      </div>
    </section>
  );
}

export default LegalPageHeroSection;
