import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import UpcomingEventsHeroSection from '@/page_components/Pages_UpcomingEventsPage/HeroSection/HeroSection';
import UpcomingEventsEventsSection from '@/page_components/Pages_UpcomingEventsPage/EventsSection/EventsSection';
// import Styles from './UpcomingEventsPage.module.scss';

function UpcomingEventsPage() {
  return (
    <>
      <SiteHeader />
      <UpcomingEventsHeroSection />
      <UpcomingEventsEventsSection />
      <SiteFooter />
    </>
  );
}

export default UpcomingEventsPage;
