import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import CommunityHeroSection from '@/page_components/Pages_CommunityPage/HeroSection/HeroSection';
import MobileFooter from '@/components/MobileFooter/MobileFooter';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import Styles from './CommunityPage.module.scss';

function Community() {
  return (
    <>
      <SiteHeader />
      <CommunityHeroSection />
      <div className={Styles['desktop-footer']}>
        <SiteFooter />
      </div>
      <div className={Styles['mobile-footer']}>
        <MobileFooter />
      </div>
    </>
  );
}

export default Community;
