import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useGetLiveStreamStatusQuery } from '@/services/tkt-backend/live';
import Styles from './Navbar.module.scss';

function Navbar({
  links,
  variant,
}) {
  const { data: isLive } = useGetLiveStreamStatusQuery();

  let className = Styles.nav;
  if (variant === 'blue') className += ` ${Styles.blue}`;

  const navLinks = links.map((link) => {
    if (link.liveIndicator) {
      return (
        <Link
          key={link.url}
          to={link.url}
          className={Styles.link}
        >
          {isLive && (
            <span className={Styles['live-indicator']}>
              {link.label}
              <div className={Styles.dot} />
            </span>
          )}
          {!isLive && (<span>{link.label}</span>)}
        </Link>
      );
    }
    return (
      <Link
        key={link.url}
        to={link.url}
        className={Styles.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <nav className={className}>
      {navLinks}
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  variant: PropTypes.string,
};

Navbar.defaultProps = {
  variant: 'light',
};

export default Navbar;
