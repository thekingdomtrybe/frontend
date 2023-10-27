import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import VolunteerGroupsHeroSection from '@/page_components/Pages_VolunteerGroupsPage/HeroSection/HeroSection';
import VolunteerGroupsGroupsSection from '@/page_components/Pages_VolunteerGroupsPage/GroupsSection/GroupsSection';
// import Styles from './VolunteerGroupsPage.module.scss';

function VolunteerGroupsPage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <VolunteerGroupsHeroSection />
      <VolunteerGroupsGroupsSection />
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

export default VolunteerGroupsPage;
