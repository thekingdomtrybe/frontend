import React from 'react';
import NavLink from './NavLink';
import Styles from './Nav.module.scss';

function Nav() {
  const links = [
    {
      href: '/live',
      text: 'Watch',
    },
    {
      href: '/give',
      text: 'Give',
    },
    {
      href: '/join-our-community',
      text: 'Community',
    },
    {
      href: '/browse-past-sermons',
      text: 'Archive',
    },
  ];

  const navLinks = links.map((link) => (
    <NavLink
      key={link.href}
      href={link.href}
      text={link.text}
    />
  ));

  return (
    <nav className={Styles.nav}>
      {navLinks}
    </nav>
  );
}

export default Nav;
