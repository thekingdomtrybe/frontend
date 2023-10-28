import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SVG from '@/components/SVG/SVG';
import Styles from './SiteLogo.module.scss';

function SiteLogo({
  variant,
  fontClass,
  bg,
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

  switch (bg) {
    case 'dark': {
      className = `${className} ${Styles['dark-bg']}`;
      break;
    }
    default:
      break;
  }

  let logoColorClass;
  if (variant === 'light') logoColorClass = Styles['logo-light'];
  if (variant === 'dark') logoColorClass = Styles['logo-dark'];
  if (variant === 'blue') logoColorClass = Styles['logo-dark'];
  if (bg === 'dark') logoColorClass = Styles['logo-dark'];

  return (
    <Link to="/" className={className}>
      <SVG icon="favicon" className={logoColorClass} />
      <span>THE KINGDOM TRYBE</span>
    </Link>
  );
}

SiteLogo.propTypes = {
  variant: PropTypes.string,
  fontClass: PropTypes.string,
  bg: PropTypes.string,
};

SiteLogo.defaultProps = {
  variant: 'light',
  fontClass: '',
  bg: 'white',
};

export default SiteLogo;
