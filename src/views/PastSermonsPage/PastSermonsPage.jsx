import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import PastSermonsHeroSection from '@/page_components/Pages_PastSermonsPage/HeroSection/HeroSection';
import PastSermonsSearchSection from '@/page_components/Pages_PastSermonsPage/SearchSection/SearchSection';
import PastSermonsVideosSection from '@/page_components/Pages_PastSermonsPage/VideosSection/VideosSection';
// import Styles from './PastSermonsPage.module.scss';

function PastSermonsPage() {
  return (
    <>
      <SiteHeader />
      <PastSermonsHeroSection />
      <PastSermonsSearchSection />
      <PastSermonsVideosSection />
      <SiteFooter />
    </>
  );
}

export default PastSermonsPage;
