import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './NavLink.module.scss';

function NavLink({
  href,
  text,
}) {
  return (
    <Link className={Styles.link} to={href}>
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
