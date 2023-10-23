import React from 'react';
import HeroImage from './HeroImage';
import IntroText from './IntroText';
import CommunityPageControls from './Controls';
import Styles from './HeroSection.module.scss';

function CommunityHeroSection() {
  return (
    <section className={Styles['hero-section']}>
      <IntroText />
      <CommunityPageControls />
      <HeroImage />
    </section>
  );
}

export default CommunityHeroSection;
