import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FileSelect from '@/components/FileSelect/FileSelect';
import Form from '@/components/Form/Form';
import { useAuthenticateUserQuery, useUpdateUserProfileMutation } from '@/services/tkt-backend/auth';
import FormNotification from '@/components/FormNotification/FormNotification';
import Styles from './EditProfile.module.scss';

function EditProfile({
  goBack,
}) {
  const [imgSrc, setImgSrc] = useState('');

  const {
    data: user,
    isSuccess: isUserLoadSuccess,
  } = useAuthenticateUserQuery();

  const [submit,
    {
      isLoading: isSubmitting,
      isSuccess: isSubmitSuccess,
      isError: isSubmitError,
      error: submitError,
    },
  ] = useUpdateUserProfileMutation();

  const fields = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      initialValue: isUserLoadSuccess ? user.first_name : '',
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      initialValue: isUserLoadSuccess ? user.last_name : '',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      disabled: true,
      initialValue: isUserLoadSuccess ? user.email : '',
    },
  ];

  const notificationStates = {
    customSuccess: {
      message: 'Profile Updated!',
      trigger: isSubmitSuccess,
      styles: Styles.success,
    },
    error: {
      message: submitError?.toString() || 'An error occured!',
      trigger: isSubmitError,
      timeout: 5000,
    },
  };

  const saveChanges = (e, formState) => {
    e.preventDefault();
    submit({ ...formState, image: imgSrc });
  };

  // Update image source if user changes
  useEffect(() => {
    if (user) setImgSrc(user.picture_url);
  }, [user]);

  return (
    <section className={Styles['edit-profile']}>
      <FormNotification notifications={notificationStates} />
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
        submitButtonStlye={Styles.submit}
        isLoading={isSubmitting}
      />
    </section>
  );
}

EditProfile.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default EditProfile;
