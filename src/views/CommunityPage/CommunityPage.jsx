import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import CommunityHeroSection from '@/page_components/Pages_CommunityPage/HeroSection/HeroSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
// import Styles from './CommunityPage.module.scss';

function Community() {
  return (
    <>
      <SiteHeader />
      <CommunityHeroSection />
      <SiteFooter />
    </>
  );
}

export default Community;
