import React from 'react';
import PropTypes from 'prop-types';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import { useGoogleSignInMutation } from '@/services/tkt-backend/auth';
// import Styles from './GoogleLogin.module.scss';

function GoogleLogin({
  text,
}) {
  const [
    submit,
    // {
    //   data: submitData,
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useGoogleSignInMutation();

  // console.log(
  //   'submitData:', submitData,
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

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
      onClick={gSignIn}
    />
  );
}

GoogleLogin.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GoogleLogin;
