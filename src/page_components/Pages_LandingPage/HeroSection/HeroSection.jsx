import React, { useRef } from 'react';
import WelcomeText from './WelcomeText';
import HeroImage from './HeroImage';
import ButtonControls from './ButtonControls';
import CaratDown from './CaratDown';
import Styles from './HeroSection.module.scss';
import useDimSection from '@/hooks/useDimSection';

function LandingPageHeroSection() {
  const sectionRef = useRef(null);
  useDimSection(sectionRef, 'dim-section');

  return (
    <section id="hero section" ref={sectionRef} className={Styles['hero-section']}>
      <HeroImage />
      <WelcomeText />
      <ButtonControls />
      <CaratDown />
    </section>
  );
}

export default LandingPageHeroSection;
