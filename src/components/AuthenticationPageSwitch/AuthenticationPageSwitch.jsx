import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './AuthenticationPageSwitch.module.scss';

function AuthenticationPageSwitch({
  text,
  cta,
  newPageUrl,
  theme,
}) {
  return (
    <div className={Styles['auth-page-switch']}>
      {text}
      {' '}
      <Link to={newPageUrl} className={Styles[theme]}>{cta}</Link>
    </div>
  );
}

AuthenticationPageSwitch.propTypes = {
  text: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  newPageUrl: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

AuthenticationPageSwitch.defaultProps = {
  theme: 'blue',
};

export default AuthenticationPageSwitch;
