import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import SiteFooter from '@/components/SiteFooter/SiteFooter';
import GiveAccountsSection from '@/page_components/Pages_GivePage/AccountsSection/AccountsSection';
import GiveHeroSection from '@/page_components/Pages_GivePage/HeroSection/HeroSection';
import GiveAccountsHeading from '@/page_components/Pages_GivePage/AccountsSection/AccountsHeading';
// import Styles from './Page.module.scss';

function GivePage() {
  return (
    <>
      <SiteHeader />
      <GiveHeroSection />
      <GiveAccountsHeading />
      <GiveAccountsSection />
      <SiteFooter />
    </>
  );
}

export default GivePage;
