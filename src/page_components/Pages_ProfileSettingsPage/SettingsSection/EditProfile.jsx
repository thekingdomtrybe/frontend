import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import Styles from './EditProfile.module.scss';

function EditProfile({
  goBack,
}) {
  const fields = [
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
      label: 'Username',
      name: 'username',
      type: 'text',
    },
  ];

  return (
    <div className={Styles['edit-profile']}>
      <div className={Styles['edit-header']}>
        <button type="button" onClick={goBack}>
          <img src="" alt="" />
          Back to settings
        </button>
        <h2>Edit Profile</h2>
      </div>

      <div className={Styles['image-select']}>
        <img alt="" className={Styles['user-img']} />
        <button type="button">
          select
        </button>
      </div>
      <Form
        onSubmit={() => {}}
        fields={fields}
        fieldSize="small"
        gap="small"
        submitButtonContent="Save Changes"
        submitButtonVariant="blue-1"
      />
    </div>
  );
}

EditProfile.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default EditProfile;
