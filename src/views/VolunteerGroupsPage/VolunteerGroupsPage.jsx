import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import VolunteerGroupsHeroSection from '@/page_components/Pages_VolunteerGroupsPage/HeroSection/HeroSection';
import VolunteerGroupsGroupsSection from '@/page_components/Pages_VolunteerGroupsPage/GroupsSection/GroupsSection';
// import Styles from './VolunteerGroupsPage.module.scss';

function VolunteerGroupsPage() {
  return (
    <>
      <SiteHeader />
      <VolunteerGroupsHeroSection />
      <VolunteerGroupsGroupsSection />
      <SiteFooter />
    </>
  );
}

export default VolunteerGroupsPage;
