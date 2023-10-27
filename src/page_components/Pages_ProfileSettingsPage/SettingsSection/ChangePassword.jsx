import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import { useUpdateUserPasswordMutation } from '@/services/tkt-backend/auth';
import Styles from './ChangePassword.module.scss';

function ChangePassword({
  goBack,
}) {
  const [submit,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useUpdateUserPasswordMutation();

  // console.log(
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

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

  const saveChanges = (e, formState) => {
    e.preventDefault();
    // TODO: Add validation
    submit(formState);
  };

  return (
    <div className={Styles['change-password']}>
      <div className={Styles['change-password-header']}>
        <button type="button" onClick={goBack}>
          <img src="" alt="" />
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
        submitButtonVariant="blue-1"
      />
    </div>
  );
}

ChangePassword.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default ChangePassword;
