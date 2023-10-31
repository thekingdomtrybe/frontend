import React, { useRef } from 'react';
import useDimSection from '@/hooks/useDimSection';
import TestimonyText from './Text';
import TestimonySectionControls from './Controls';
import Testimonies from './Testimonies';
import Styles from './TestimonySection.module.scss';

function LandingPageTestimonySection() {
  const sectionRef = useRef(null);
  useDimSection(sectionRef, 'dim-section', 0.15);

  return (
    <section ref={sectionRef} className={Styles['testimony-section']}>
      <TestimonyText />
      <Testimonies />
      <TestimonySectionControls />
    </section>
  );
}

export default LandingPageTestimonySection;
