import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import WatchVideoVideoSection from '@/page_components/Pages_WatchVideoPage/VideoSection/VideoSection';
import MobileFooter from '@/components/MobileFooter/MobileFooter';
// import Styles from './WatchVideoPage.module.scss';

function WatchVideoPage() {
  return (
    <>
      <SiteHeader variant="blue" />
      <WatchVideoVideoSection />
      <MobileFooter variant="blue" />
    </>
  );
}

export default WatchVideoPage;
