import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { enqueueSnackbar } from 'notistack';
import Form from '@/components/Form/Form';
import { useGetAdminEmailAddressesQuery, useUpdatePrayerRequestRecipientEmailMutation } from '@/services/tkt-backend/email';

function PrayerRequestsControls({
  ParentStyles,
}) {
  const {
    data: emailAddresses,
    isSuccess: isEmailAddressesSuccess,
  } = useGetAdminEmailAddressesQuery();

  const [submit,
    {
      isSuccess: isUpdatePrayerRequestRecipientEmailSuccess,
      isError: isUpdatePrayerRequestRecipientEmailError,
    },
  ] = useUpdatePrayerRequestRecipientEmailMutation();

  const fields = {
    prayerRequestsRecipient: [
      {
        label: 'Email address',
        name: 'prayerRequestsRecipientEmail',
        type: 'email',
        initialValue: isEmailAddressesSuccess ? emailAddresses.prayerRequestRecipientEmail : '',
      },
    ],
  };

  const handleSubmit = (e, formState) => {
    e.preventDefault();
    submit(formState);
  };

  useEffect(() => {
    if (isUpdatePrayerRequestRecipientEmailSuccess) {
      enqueueSnackbar('Prayer requests recipient email updated successfully', {
        variant: 'success',
        autoHideDuration: 1000,
      });
    }
  }, [isUpdatePrayerRequestRecipientEmailSuccess]);

  useEffect(() => {
    if (isUpdatePrayerRequestRecipientEmailError) {
      enqueueSnackbar('Error updating prayer requests recipient email', {
        variant: 'error',
        autoHideDuration: 1000,
      });
    }
  }, [isUpdatePrayerRequestRecipientEmailError]);

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Prayer Requests</h3>

      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <h4>Prayer Requests Recipient&apos;s email</h4>
          <p>Set the email address that should recieve new prayer requests.</p>
          <Form
            fields={fields.prayerRequestsRecipient}
            fieldSize="smaller"
            gap="small"
            onSubmit={handleSubmit}
            submitButtonContent="Save"
            submitButtonVariant="blue-1"
            submitButtonFullWidth
            submitButtonSize="small"
          />
        </div>
      </div>
    </div>
  );
}

PrayerRequestsControls.propTypes = {
  ParentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PrayerRequestsControls;
