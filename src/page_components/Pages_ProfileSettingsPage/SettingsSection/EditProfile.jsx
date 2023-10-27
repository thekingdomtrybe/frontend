import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FileSelect from '@/components/FileSelect/FileSelect';
import Form from '@/components/Form/Form';
import { useUpdateUserProfileMutation } from '@/services/tkt-backend/auth';
import Styles from './EditProfile.module.scss';

function EditProfile({
  goBack,
}) {
  const [imgSrc, setImgSrc] = useState('');
  const [submit,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useUpdateUserProfileMutation();

  // console.log(
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

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
      label: 'Email',
      name: 'email',
      type: 'email',
      disabled: true,
    },
  ];

  const saveChanges = (e, formState) => {
    e.preventDefault();
    submit({ ...formState, image: imgSrc });
  };

  return (
    <div className={Styles['edit-profile']}>
      <div className={Styles['edit-header']}>
        <button type="button" onClick={goBack}>
          <img src="" alt="" />
          Back to settings
        </button>
        <h2>Edit Profile</h2>
      </div>

      {/* This file select component is not part of the form because if its unique
          styling requirements. So we need to track it's changes. When submitting, we
          also need to attach the file to the data that's passed along to the mutation */}

      <div className={Styles['image-select']}>
        <img alt="" src={imgSrc} className={Styles['user-img']} />
        <FileSelect
          name="image-select"
          accept="image/*"
          callback={(file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              setImgSrc(e.target.result);
            };
            reader.readAsDataURL(file);
          }}
          className={Styles['file-select']}
        >
          s
        </FileSelect>
      </div>

      <Form
        onSubmit={saveChanges}
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
