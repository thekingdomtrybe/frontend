import React from 'react';
import PropTypes from 'prop-types';
import SiteLogo from '@/components/SiteLogo/SiteLogo';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Navbar from '../Navbar/Navbar';
import Styles from './SiteHeader.module.scss';

function SiteHeader({
  live,
  variant,
}) {
  let className = Styles.header;

  switch (variant) {
    case 'blue': {
      className = `${className} ${Styles.blue}`;
      break;
    }
    case 'dark': {
      className = `${className} ${Styles.dark}`;
      break;
    }
    default:
      break;
  }

  const navLinks = [
    { label: 'ATTEND ONLINE', url: '/live' },
    { label: 'COMMUNITY', url: '/join-our-community' },
    { label: 'COUNSELLING', url: '/request-counselling' },
    { label: 'GIVE', url: '/give' },
  ];

  return (
    <header className={className}>
      <SiteLogo variant={variant} live={live} />
      <div className={Styles.nav}>
        <Navbar links={navLinks} variant={variant} />
      </div>
      <DropdownMenu
        variant={variant}
        menuItems={[
          { label: 'Join Our Community', url: '/join-our-community', tablet: true },
          { label: 'Book A Counselling Session', url: '/request-counselling', tablet: true },
          { label: 'Ask For Prayer', url: '/request-for-prayer' },
          { label: 'Share Your Testimony', url: '/share-a-testimony' },
          { label: 'Watch Past Sermons', url: '/browse-past-sermons' },
          { label: 'See Upcoming Events', url: '/upcoming-events' },
          { label: 'Join a Volunteer Group', url: '/volunteer' },
          { label: 'Give', url: '/give', tablet: true },
          { label: 'Login', url: '/login' },
          { label: 'Settings', url: '/settings', auth: true },
        ]}
      />
    </header>
  );
}

SiteHeader.propTypes = {
  variant: PropTypes.string,
  live: PropTypes.bool,
};

SiteHeader.defaultProps = {
  variant: 'light',
  live: false,
};

export default SiteHeader;
