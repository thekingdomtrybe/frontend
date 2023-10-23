import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import Styles from './ChangePassword.module.scss';

function ChangePassword({
  goBack,
}) {
  const fields = [
    {
      label: 'Current Password',
      name: 'currentPassword',
      type: 'password',
    },
    {
      label: 'New Password',
      name: 'newPassword',
      type: 'password',
    },
  ];

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
        onSubmit={() => {}}
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
