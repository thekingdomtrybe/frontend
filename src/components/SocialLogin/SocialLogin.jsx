import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SocialLogin.module.scss';

function SocialLogin({
  img,
  text,
  url,
  type,
  onClick,
}) {
  if (type === 'button') {
    return (
      <button type="button" className={Styles['social-login']} onClick={onClick}>
        <img src={img} alt={text} />
        <span>{text}</span>
      </button>
    );
  }

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
  type: PropTypes.string,
  onClick: PropTypes.func,
};

SocialLogin.defaultProps = {
  type: 'link',
  onClick: () => {},
};

export default SocialLogin;
