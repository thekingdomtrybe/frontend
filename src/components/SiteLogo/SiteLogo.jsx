import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SVG from '@/components/SVG/SVG';
import Styles from './SiteLogo.module.scss';

function SiteLogo({
  variant,
  live,
  fontClass,
}) {
  let className = Styles.logo;
  className += ` ${fontClass}`;

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

  if (live) className = `${className} ${Styles.live}`;
  const logoColor = variant === 'light' ? 'var(--dark)' : 'var(--white)';

  return (
    <Link to="/" className={className}>
      <SVG icon="favicon" color={logoColor} />
      <span>
        {
          live ? 'LIVE' : 'THE KINGDOM TRYBE'
        }
      </span>
    </Link>
  );
}

SiteLogo.propTypes = {
  variant: PropTypes.string,
  live: PropTypes.bool,
  fontClass: PropTypes.string,
};

SiteLogo.defaultProps = {
  variant: 'light',
  live: false,
  fontClass: '',
};

export default SiteLogo;
