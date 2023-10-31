import React from 'react';
import Styles from './Header.module.scss';

function Header() {
  return (
    <div className={Styles.header}>
      <h3>Live chat</h3>
      <p>
        All messages
      </p>
    </div>
  );
}

export default Header;
