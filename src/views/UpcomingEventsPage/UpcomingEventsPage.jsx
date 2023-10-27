import React from 'react';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import UpcomingEventsHeroSection from '@/page_components/Pages_UpcomingEventsPage/HeroSection/HeroSection';
import UpcomingEventsEventsSection from '@/page_components/Pages_UpcomingEventsPage/EventsSection/EventsSection';
// import Styles from './UpcomingEventsPage.module.scss';

function UpcomingEventsPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <UpcomingEventsHeroSection />
      <UpcomingEventsEventsSection />
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

export default UpcomingEventsPage;
