import React from 'react';
import IntroText from './IntroText';
import VideoList from './VideoList';
import Controls from './Controls';
import Styles from './PastServicesSection.module.scss';

function LandingPagePastServicesSection() {
  return (
    <section className={Styles['past-services-section']}>
      <IntroText />
      <VideoList />
      <Controls />
    </section>
  );
}

export default LandingPagePastServicesSection;
