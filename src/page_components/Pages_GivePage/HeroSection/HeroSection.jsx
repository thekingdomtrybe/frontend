import React, { useRef } from 'react';
import HeroImage from './HeroImage';
import IntroText from './IntroText';
import useDimSection from '@/hooks/useDimSection';
import Styles from './HeroSection.module.scss';

function GiveHeroSection() {
  const sectionRef = useRef(null);
  useDimSection(sectionRef, 'dim-section', 0.5);

  return (
    <section ref={sectionRef} className={Styles['hero-section']}>
      <HeroImage />
      <IntroText />
    </section>
  );
}

export default GiveHeroSection;
