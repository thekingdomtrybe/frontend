import React from 'react';
import Nav from './Nav';
import SiteLogo from '../SiteLogo/SiteLogo';
import SocialMediaLinks from './SocialMediaLinks';
import LegalLinks from './LegalLinks';
import CopyrightText from './CopyrightText';
import Styles from './SiteFooter.module.scss';

function SiteFooter() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.logo}>
        <SiteLogo bg="dark" />
        <SiteLogo />
      </div>
      <div className={Styles.nav}><Nav /></div>
      <div className={Styles['follow-us-text']}>FOLLOW US</div>
      <div className={Styles['social-links']}><SocialMediaLinks /></div>
      <div className={Styles['legal-links']}><LegalLinks /></div>
      <div className={Styles['copyright-text']}><CopyrightText /></div>
    </footer>
  );
}

export default SiteFooter;
