import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import WatchVideoVideoSection from '@/page_components/Pages_WatchVideoPage/VideoSection/VideoSection';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './WatchVideoPage.module.scss';

function WatchVideoPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <WatchVideoVideoSection />
    </>
  );

  const footer = (
    <div className={Styles['desktop-footer']}>
      <SiteFooter />
    </div>
  );

  return (
    <BottomStuckFooterPage
      top={pageComponents}
      footer={footer}
    />
  );
}

export default WatchVideoPage;
