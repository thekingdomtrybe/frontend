import React, { useEffect } from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import LiveStreamVideoSection from '@/page_components/Pages_LivePage/VideoSection/VideoSection';
import LiveStreamDetailsSection from '@/page_components/Pages_LivePage/DetailsSection/DetailsSection';
import Styles from './LiveStreamPage.module.scss';

function LiveStreamPage() {
  // hide overflow on body
  useEffect(() => {
    document.body.classList.add(Styles['hide-overflow']);
    return () => {
      document.body.classList.remove(Styles['hide-overflow']);
    };
  });

  return (
    <>
      <SiteHeader live />
      <div className={Styles['live-stream-page']}>
        <div className={Styles['video-section']}>
          <LiveStreamVideoSection />
        </div>
        <div className={Styles['details-section']}>
          <LiveStreamDetailsSection />
        </div>
      </div>
    </>
  );
}

export default LiveStreamPage;
