import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SocialLogin.module.scss';

function SocialLogin({
  img,
  text,
  url,
}) {
  return (
    <a href={url} className={Styles['social-login']}>
      <img src={img} alt={text} />
      <span>{text}</span>
    </a>
  );
}

SocialLogin.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLogin;
