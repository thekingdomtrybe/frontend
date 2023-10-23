import React from 'react';
import IntroText from './IntroText';
import VideoList from './VideoList';
import Controls from './Controls';
import Styles from './ArchiveSection.module.scss';

function LandingPageArchiveSection() {
  return (
    <section className={Styles['archive-section']}>
      <IntroText />
      <VideoList />
      <Controls />
    </section>
  );
}

export default LandingPageArchiveSection;
