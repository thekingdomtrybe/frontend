import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '@/components/GoogleLogin/GoogleLogin';
import Form from '@/components/Form/Form';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import Styles from './FormSection.module.scss';
import { useSignupMutation } from '@/services/tkt-backend/auth';

function SignUpFormSection() {
  const [
    submit,
    // {
    //   data: submitData,
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useSignupMutation();

  // console.log(
  //   'submit data', submitData,
  // );

  // console.log(
  //   'isSubmitting', isSubmitting,
  // );

  // console.log(
  //   'isSuccess', isSubmitSuccess,
  // );

  // console.log(
  //   'isError', isSubmitError,
  // );

  // console.log(
  //   'error', submitError,
  // );

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

  const signUp = (e, formState) => {
    e.preventDefault();
    submit(formState);
  };

  return (
    <section className={Styles['form-section']}>
      <Form
        type="auth"
        onSubmit={signUp}
        fields={fields}
        submitButtonContent="Sign Up"
        submitButtonVariant="blue-1"
        noLineBreakBeforeSubmit
        submitButtonFullWidth
      />

      <div className={Styles['social-login']}>
        <GoogleLogin text="Continue" />
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
