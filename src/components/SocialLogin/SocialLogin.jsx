import React from 'react';
import PropTypes from 'prop-types';
import SVG from '../SVG/SVG';
import Styles from './SocialLogin.module.scss';

function SocialLogin({
  svg,
  text,
  url,
  type,
  onClick,
}) {
  if (type === 'button') {
    return (
      <button type="button" className={Styles['social-login']} onClick={onClick}>
        <SVG icon={svg} />
        <span>{text}</span>
      </button>
    );
  }

  return (
    <a href={url} className={Styles['social-login']}>
      <SVG icon={svg} />
      <span>{text}</span>
    </a>
  );
}

SocialLogin.propTypes = {
  svg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

SocialLogin.defaultProps = {
  type: 'link',
  onClick: () => {},
};

export default SocialLogin;
