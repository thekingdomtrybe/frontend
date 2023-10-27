import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import PastServicesHeroSection from '@/page_components/Pages_PastServicesPage/HeroSection/HeroSection';
import PastServicesSearchSection from '@/page_components/Pages_PastServicesPage/SearchSection/SearchSection';
import PastServicesVideosSection from '@/page_components/Pages_PastServicesPage/VideosSection/VideosSection';
// import Styles from './PastServicesPage.module.scss';

function PastServicesPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <PastServicesHeroSection />
      <PastServicesSearchSection />
      <PastServicesVideosSection />
    </>
  );

  const footer = (
    <SiteFooter />
  );

  return (
    <BottomStuckFooterPage
      top={pageComponents}
      footer={footer}
    />
  );
}

export default PastServicesPage;
