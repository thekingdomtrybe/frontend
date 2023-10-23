import React, { useRef } from 'react';
import AboutChurchText from './AboutChurchText';
import ChurchFeatures from './ChurchFeatures';
// import useDimSection from '@/hooks/useDimSection';
import Styles from './AboutSection.module.scss';

function LandingPageAboutSection() {
  const sectionRef = useRef(null);
  // useDimSection(sectionRef, 'dim-section', 0.1);

  return (
    <section id="about-section" ref={sectionRef} className={Styles['about-section']}>
      <AboutChurchText />
      <ChurchFeatures />
    </section>
  );
}

export default LandingPageAboutSection;
