import React, { useEffect } from 'react';
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin';
import Form from '@/components/Form/Form';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import { useGoogleSignInMutation, useLoginMutation } from '@/services/tkt-backend/auth';
import FormNotification from '@/components/FormNotification/FormNotification';
import Styles from './FormSection.module.scss';

function LoginFormSection() {
  const [
    submit,
    {
      isLoading: isSubmitting,
      isSuccess: isSubmitSuccess,
      isError: isSubmitError,
      error: submitError,
    },
  ] = useLoginMutation();

  const [
    submitGoogle,
    {
      isSuccess: isSubmitSuccessGoogle,
      isError: isSubmitErrorGoogle,
      error: submitErrorGoogle,
    },
  ] = useGoogleSignInMutation();

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
      label: 'Forgot Password?',
      name: 'forgot-password',
      type: 'auth-control',
      submit: false,
      variant: 'gray-1',
      link: '/reset-password',
      onClick: () => {},
    },
  ];

  const notificationStates = {
    customSuccess: {
      message: 'Login successful!',
      trigger: isSubmitSuccess,
      styles: Styles.success,
    },
    customGoogle: {
      message: 'Login successful!',
      trigger: isSubmitSuccessGoogle,
      styles: Styles.success,
    },
    error: {
      message: submitError,
      trigger: isSubmitError,
      timeout: 5000,
    },
    errorGoogle: {
      message: submitErrorGoogle,
      trigger: isSubmitErrorGoogle,
      timeout: 5000,
    },
  };

  const login = (e, formState) => {
    e.preventDefault();
    submit({
      email: formState.email,
      password: formState.password,
    });
  };

  useEffect(() => {
    if (isSubmitSuccess || isSubmitSuccessGoogle) {
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  });

  return (
    <section className={Styles['form-section']}>
      <FormNotification notifications={notificationStates} />
      <Form
        onSubmit={login}
        clear={isSubmitSuccess}
        submitButtonContent="Sign In"
        submitButtonVariant="blue-1"
        submitButtonFullWidth
        noLineBreakBeforeSubmit
        fields={fields}
        submitButtonStlye={Styles.submit}
        isLoading={isSubmitting}
        title="Sign In"
      />

      <div className={Styles['social-login']}>
        <GoogleLogin
          text="Sign in"
          submit={submitGoogle}
        />
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
