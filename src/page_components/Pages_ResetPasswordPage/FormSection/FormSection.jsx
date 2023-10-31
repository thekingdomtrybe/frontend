import React from 'react';
import SectionNotifier from '@/components/SectionNotifier/SectionNotifier';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import Form from '@/components/Form/Form';
import { useResetPasswordMutation } from '@/services/tkt-backend/auth';
import Styles from './FormSection.module.scss';

function ResetPasswordFormSection() {
  const [
    submit,
  ] = useResetPasswordMutation();

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
      <SectionNotifier
        customClass={Styles.notif}
        waitTillLoadComplete
        show
        fixed
      >
        This feature has not been fully implemented. Please bear with us as we work on it.
      </SectionNotifier>
      <Form
        type="auth"
        onSubmit={resetPassword}
        fields={fields}
        gap="small"
        submitButtonContent="Reset my password"
        submitButtonVariant="gray-1"
        // submitButtonVariant="blue-1"
        submitButtonFullWidth
        submitButtonDisabled
        noLineBreakBeforeSubmit
        title="Reset Password"
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
