import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin';
import Form from '@/components/Form/Form';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import { useLoginMutation } from '@/services/tkt-backend/auth';
import Styles from './FormSection.module.scss';

function LoginFormSection() {
  const [
    submit,
    // {
    //   data: submitData,
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useLoginMutation();

  // console.log(
  //   'submitData:', submitData,
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

  const fields = [
    {
      label: `
        Enter your email address and password to log into your account.`,
      name: 'intro',
      type: 'alert',
      icon: '',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
    },
    {
      content: (
        <>
          By signing in, you agree to our
          {' '}
          <Link to="/privacy-policy">Privacy Policy</Link>
          {' '}
          and
          {' '}
          <Link to="/terms-of-use">Terms of Use</Link>
          .
        </>
      ),
      name: 'agreements',
      type: 'checkbox',
    },
    {
      label: 'Forgot Password?',
      name: 'forgot-password',
      type: 'auth-control',
      submit: false,
      variant: 'gray-1',
      link: '/reset-password',
      onClick: () => {},
    },
  ];

  const login = (e, formState) => {
    e.preventDefault();
    submit({
      email: formState.email,
      password: formState.password,
    });
  };

  return (
    <section className={Styles['form-section']}>
      <Form
        onSubmit={login}
        submitButtonContent="Sign In"
        submitButtonVariant="blue-1"
        submitButtonFullWidth
        noLineBreakBeforeSubmit
        fields={fields}
      />

      <div className={Styles['social-login']}>
        <GoogleLogin text="Sign in" />
      </div>

      <div className={Styles['auth-page-switch']}>
        <AuthenticationPageSwitch
          text="Don't have an account?"
          cta="Sign Up"
          newPageUrl="/sign-up"
        />
      </div>
    </section>
  );
}

export default LoginFormSection;
