import React, { useRef } from 'react';
import useDimSection from '@/hooks/useDimSection';
import Text from './Text';
import TeamMembers from './TeamMembers';
import Styles from './TeamSection.module.scss';

function LandingPageTeamSection() {
  const sectionRef = useRef(null);
  useDimSection(sectionRef, 'dim-section', 0.1);

  return (
    <section ref={sectionRef} className={Styles['team-section']}>
      <Text />
      <TeamMembers />
    </section>
  );
}

export default LandingPageTeamSection;
