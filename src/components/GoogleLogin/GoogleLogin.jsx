import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
// import Styles from './GoogleLogin.module.scss';

function GoogleLogin({
  text,
  submit,
}) {
  const gSignIn = () => {
    const client = window.google.accounts.oauth2.initCodeClient({
      client_id: '990018166026-4id97loigd8f5ikis5e2acsbn4d28au9.apps.googleusercontent.com',
      scope: 'email profile',
      ux_mode: 'popup',
      callback: (response) => {
        submit(response);
      },
    });
    client.requestCode();
  };

  return (
    <SocialLogin
      text={text}
      img="https://via.placeholder.com/30"
      type="button"
      url=""
      onClick={gSignIn}
    />
  );
}

GoogleLogin.propTypes = {
  text: PropTypes.string.isRequired,
  submit: PropTypes.func,
};

GoogleLogin.defaultProps = {
  submit: () => {},
};

export default GoogleLogin;
