import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import LandingPageHeroSection from '@/page_components/Pages_LandingPage/HeroSection/HeroSection';
import LandingPageAboutSection from '@/page_components/Pages_LandingPage/AboutSection/AboutSection';
import LandingPagePrayerSection from '@/page_components/Pages_LandingPage/PrayerSection/PrayerSection';
import LandingPageTestimonySection from '@/page_components/Pages_LandingPage/TestimonySection/TestimonySection';
import LandingPageTeamSection from '@/page_components/Pages_LandingPage/TeamSection/TeamSection';
import LandingPageArchiveSection from '@/page_components/Pages_LandingPage/ArchiveSection/ArchiveSection';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
// import Styles from './LandingPage.module.scss';

function LandingPage() {
  return (
    <>
      <SiteHeader leftNav />
      <LandingPageHeroSection />
      <LandingPageAboutSection />
      <LandingPagePrayerSection />
      <LandingPageTestimonySection />
      <LandingPageTeamSection />
      <LandingPageArchiveSection />
      <SiteFooter />
    </>
  );
}

export default LandingPage;
