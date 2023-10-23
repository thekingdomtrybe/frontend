import React, { useRef } from 'react';
import useDimSection from '@/hooks/useDimSection';
import PrayerText from './Text';
import Controls from './Controls';
import Image from './Image';
import Styles from './PrayerSection.module.scss';

function LandingPagePrayerSection() {
  const sectionRef = useRef(null);
  useDimSection(sectionRef, 'dim-section', 0.4);

  return (
    <section ref={sectionRef} className={Styles['prayer-section']}>
      <div className={Styles['prayer-section-overlay']} />
      <PrayerText />
      <Controls />
      <Image />
    </section>
  );
}

export default LandingPagePrayerSection;
