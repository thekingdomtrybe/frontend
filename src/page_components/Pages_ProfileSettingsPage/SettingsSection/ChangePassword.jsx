import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import { useUpdateUserPasswordMutation } from '@/services/tkt-backend/auth';
import FormNotification from '@/components/FormNotification/FormNotification';
import SVG from '@/components/SVG/SVG';
import Styles from './ChangePassword.module.scss';

function ChangePassword({
  goBack,
}) {
  const [submit,
    {
      isLoading: isSubmitting,
      isSuccess: isSubmitSuccess,
      isError: isSubmitError,
      // error: submitError,
    },
  ] = useUpdateUserPasswordMutation();

  const fields = [
    {
      label: 'New Password',
      name: 'password',
      type: 'password',
    },
    {
      label: 'Confirm New Password',
      name: 'passwordConfirmation',
      type: 'password',
    },
  ];

  const notificationStates = {
    customSuccess: {
      message: 'Password Updated!',
      trigger: isSubmitSuccess,
      styles: Styles.success,
    },
    error: {
      // message: submitError?.toString() || 'An error occured!',
      message: 'An error occured!',
      trigger: isSubmitError,
      timeout: 5000,
    },
  };

  const saveChanges = (e, formState) => {
    e.preventDefault();
    // TODO: Add validation
    submit(formState);
  };

  return (
    <section className={Styles['change-password']}>
      <FormNotification notifications={notificationStates} />
      <div className={Styles['change-password-header']}>
        <button type="button" onClick={goBack}>
          <SVG icon="arrow-left" color="var(--gray)" width={16} />
          Back to settings
        </button>
        <h2>Change Password</h2>
      </div>
      <Form
        onSubmit={saveChanges}
        fields={fields}
        fieldSize="small"
        gap="small"
        submitButtonContent="Update Password"
        submitButtonVariant="dark"
        submitButtonStlye={Styles.submit}
        isLoading={isSubmitting}
      />
    </section>
  );
}

ChangePassword.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default ChangePassword;
