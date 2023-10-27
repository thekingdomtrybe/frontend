import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import LandingPageHeroSection from '@/page_components/Pages_LandingPage/HeroSection/HeroSection';
import LandingPageAboutSection from '@/page_components/Pages_LandingPage/AboutSection/AboutSection';
import LandingPagePrayerSection from '@/page_components/Pages_LandingPage/PrayerSection/PrayerSection';
import LandingPageTestimonySection from '@/page_components/Pages_LandingPage/TestimonySection/TestimonySection';
import LandingPageTeamSection from '@/page_components/Pages_LandingPage/TeamSection/TeamSection';
import LandingPagePastServicesSection from '@/page_components/Pages_LandingPage/PastServicesSection/PastServicesSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
// import Styles from './LandingPage.module.scss';

function LandingPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <LandingPageHeroSection />
      <LandingPageAboutSection />
      <LandingPagePrayerSection />
      <LandingPageTestimonySection />
      <LandingPageTeamSection />
      <LandingPagePastServicesSection />
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

export default LandingPage;
