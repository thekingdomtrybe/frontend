import React from 'react';
import SectionNotifier from '@/components/SectionNotifier/SectionNotifier';
import Form from '@/components/Form/Form';
import AuthenticationPageSwitch from '@/components/AuthenticationPageSwitch/AuthenticationPageSwitch';
import { useUpdatePasswordMutation } from '@/services/tkt-backend/auth';
import Styles from './FormSection.module.scss';

function NewPasswordFormSection() {
  const [
    submit,
  ] = useUpdatePasswordMutation();

  const fields = [
    {
      label: `
        Set a new password for your account. We recommend using a strong password.`,
      name: 'intro',
      type: 'alert',
      icon: '',
    },
    {
      label: 'New Password',
      name: 'newPassword',
      type: 'password',
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
    },
  ];

  const setNewPassword = (e, formState) => {
    e.preventDefault();
    // get reset password token from url
    submit({
      password: formState.newPassword,
      passwordConfirmation: formState.confirmPassword,
      resetPasswordToken: 'Jt2LsV5exrmB9XsbsJqJ',
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
        onSubmit={setNewPassword}
        fields={fields}
        // gap="small"
        submitButtonContent="Update password"
        // submitButtonVariant="blue-1"
        submitButtonVariant="gray-1"
        submitButtonDisabled
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

export default NewPasswordFormSection;
