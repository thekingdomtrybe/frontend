import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import BottomStuckFooterPage from '@/components/BottomStuckFooterPage/BottomStuckFooterPage';
import GiveAccountsSection from '@/page_components/Pages_GivePage/AccountsSection/AccountsSection';
import GiveHeroSection from '@/page_components/Pages_GivePage/HeroSection/HeroSection';
import GiveAccountsHeading from '@/page_components/Pages_GivePage/AccountsSection/AccountsHeading';
// import Styles from './Page.module.scss';

function GivePage() {
  const pageComponents = (
    <>
      <SiteHeader />
      <GiveHeroSection />
      <GiveAccountsHeading />
      <GiveAccountsSection />
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

export default GivePage;
