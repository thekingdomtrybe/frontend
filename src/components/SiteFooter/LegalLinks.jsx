import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './LegalLinks.module.scss';

function LegalLinks() {
  return (
    <nav className={Styles.nav}>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms-of-use">Terms of Use</Link>
    </nav>
  );
}

export default LegalLinks;
