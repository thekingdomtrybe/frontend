import React, { useRef } from 'react';
import HeroImage from './HeroImage';
import IntroText from './IntroText';
import useDimSection from '@/hooks/useDimSection';
import Styles from './HeroSection.module.scss';

function PastServicesHeroSection() {
  const sectionRef = useRef(null);
  useDimSection(sectionRef, 'dim-section', 0.4);

  return (
    <section ref={sectionRef} className={Styles['hero-section']}>
      <IntroText />
      <HeroImage />
    </section>
  );
}

export default PastServicesHeroSection;
