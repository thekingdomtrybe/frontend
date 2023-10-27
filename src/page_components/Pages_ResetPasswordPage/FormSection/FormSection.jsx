import React from 'react';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import Form from '@/components/Form/Form';
import { useResetPasswordMutation } from '@/services/tkt-backend/auth';
import Styles from './FormSection.module.scss';

function ResetPasswordFormSection() {
  const [
    submit,
    // {
    //   data: submitData,
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useResetPasswordMutation();

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
        Enter your email address to receive a link to reset your password.`,
      name: 'intro',
      type: 'alert',
      icon: '',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
    },
  ];

  const resetPassword = (e, formState) => {
    e.preventDefault();
    submit({
      email: formState.email,
    });
  };

  return (
    <section className={Styles['form-section']}>
      <Form
        type="auth"
        onSubmit={resetPassword}
        fields={fields}
        gap="small"
        submitButtonContent="Reset my password"
        submitButtonVariant="blue-1"
        submitButtonFullWidth
        noLineBreakBeforeSubmit
      />

      <div className={Styles['auth-page-switch']}>
        <AuthenticationPageSwitch
          text="Back to"
          cta="Login"
          newPageUrl="/login"
        />
      </div>
    </section>
  );
}

export default ResetPasswordFormSection;
