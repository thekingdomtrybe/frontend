import React from 'react';
import PropTypes from 'prop-types';
import SiteLogo from '@/components/SiteLogo/SiteLogo';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Navbar from '../Navbar/Navbar';
import { useLogoutMutation } from '@/services/tkt-backend/auth';
import UserProfileDropdown from '../UserProfileDropdown/UserProfileDropdown';
import Styles from './SiteHeader.module.scss';

function SiteHeader({
  variant,
}) {
  const [
    submit,
    {
      isSuccess: isLogoutSuccess,
    },
  ] = useLogoutMutation();

  // This should stop rendering the component when the user logs out
  // and reload the page to clear the cache
  if (isLogoutSuccess) window.location.reload();

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
    case 'light': {
      // On light mode add a bottom border
      className = `${className} ${Styles['light-border']}`;
      break;
    }
    case 'live': {
      className = `${className} ${Styles.live}`;
      break;
    }
    default:
      break;
  }

  const navLinks = [
    { label: 'ATTEND ONLINE', url: '/live', liveIndicator: true },
    { label: 'COMMUNITY', url: '/join-our-community' },
    { label: 'COUNSELLING', url: '/request-counselling' },
    { label: 'GIVE', url: '/give' },
  ];

  return (
    <header className={className}>
      <SiteLogo variant={variant} />
      <div className={Styles.nav}>
        <Navbar links={navLinks} variant={variant} />
      </div>
      <div className={Styles.menus}>
        <UserProfileDropdown
          menuItems={[
            {
              label: 'Login', url: '/login', img: '', auth: 'hide', display: 'L',
            },
            {
              label: 'Settings', url: '/settings', img: '', auth: 'show', display: 'S',
            },
            {
              label: 'Logout',
              url: '/logout',
              auth: 'show',
              type: 'button',
              display: 'L',
              img: '',
              onClick: () => {
                submit();
              },
            },
          ]}
        />
        <DropdownMenu
          variant={variant}
          menuItems={[
            {
              label: 'Join Our Community', url: '/join-our-community', img: '', tablet: true, display: 'C',
            },
            {
              label: 'Request Counselling', url: '/request-counselling', img: '', tablet: true, display: 'C',
            },
            {
              label: 'Ask For Prayer', url: '/request-for-prayer', img: '', 'desktop-first': true, display: 'P',
            },
            {
              label: 'Share Your Testimony', url: '/share-a-testimony', img: '', display: 'T',
            },
            {
              label: 'Watch Past Services', url: '/browse-past-services', img: '', display: 'W',
            },
            {
              label: 'See Upcoming Events', url: '/upcoming-events', img: '', display: 'E',
            },
            {
              label: 'Join a Volunteer Group', url: '/volunteer', img: '', 'desktop-last': true, display: 'V',
            },
            {
              label: 'Give', url: '/give', img: '', tablet: true, display: 'G',
            },
          ]}
        />
      </div>
    </header>
  );
}

SiteHeader.propTypes = {
  variant: PropTypes.string,
};

SiteHeader.defaultProps = {
  variant: 'light',
};

export default SiteHeader;
