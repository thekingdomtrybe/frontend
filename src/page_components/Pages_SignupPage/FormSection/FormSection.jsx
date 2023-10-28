import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin';
import Form from '@/components/Form/Form';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import { useGoogleSignInMutation, useSignupMutation } from '@/services/tkt-backend/auth';
import FormNotification from '@/components/FormNotification/FormNotification';
import Styles from './FormSection.module.scss';

function SignUpFormSection() {
  const [
    submit,
    {
      isLoading: isSubmitting,
      isSuccess: isSubmitSuccess,
      isError: isSubmitError,
      error: submitError,
    },
  ] = useSignupMutation();

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
        Welcome to The Kingdom Trybe. Fill out the form below to create your account.`,
      name: 'intro',
      type: 'alert',
      icon: '',
    },
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
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
          By signing up, you agree to our
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
  ];

  const notificationStates = {
    customSuccess: {
      message: 'Registration successful. Check your email for a link to verify your account.',
      trigger: isSubmitSuccess,
      styles: Styles.success,
      fixed: true,
    },
    customGoogle: {
      message: 'Login successful!',
      trigger: isSubmitSuccessGoogle,
      styles: Styles.success,
    },
    error: {
      message: submitError,
      styles: Styles.error,
      trigger: isSubmitError,
      timeout: 5000,
    },
    errorGoogle: {
      message: submitErrorGoogle,
      trigger: isSubmitErrorGoogle,
      timeout: 5000,
    },
  };

  const signUp = (e, formState) => {
    e.preventDefault();
    submit(formState);
  };

  useEffect(() => {
    if (isSubmitSuccessGoogle) {
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
  });

  return (
    <section className={Styles['form-section']}>
      <FormNotification notifications={notificationStates} />
      <Form
        type="auth"
        onSubmit={signUp}
        clear={isSubmitSuccess}
        fields={fields}
        submitButtonContent="Sign Up"
        submitButtonVariant="blue-1"
        noLineBreakBeforeSubmit
        submitButtonFullWidth
        submitButtonStlye={Styles.submit}
        isLoading={isSubmitting}
      />

      <div className={Styles['social-login']}>
        <GoogleLogin
          text="Continue"
          submit={submitGoogle}
        />
      </div>

      <div className={Styles['auth-page-switch']}>
        <AuthenticationPageSwitch
          text="Already have an account?"
          cta="Log In"
          newPageUrl="/login"
        />
      </div>
    </section>
  );
}

export default SignUpFormSection;
