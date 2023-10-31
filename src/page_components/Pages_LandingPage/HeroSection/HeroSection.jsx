import React, { useRef } from 'react';
import WelcomeText from './WelcomeText';
import HeroImage from './HeroImage';
import ButtonControls from './ButtonControls';
import CaratDown from './CaratDown';
import useDimSection from '@/hooks/useDimSection';
import Styles from './HeroSection.module.scss';

function LandingPageHeroSection() {
  const sectionRef = useRef(null);
  useDimSection(sectionRef, 'dim-section');

  return (
    <section id="hero section" ref={sectionRef} className={Styles['hero-section']}>
      <HeroImage />
      <div className={Styles.content}>
        <WelcomeText />
        <ButtonControls />
        <CaratDown />
      </div>
    </section>
  );
}

export default LandingPageHeroSection;
