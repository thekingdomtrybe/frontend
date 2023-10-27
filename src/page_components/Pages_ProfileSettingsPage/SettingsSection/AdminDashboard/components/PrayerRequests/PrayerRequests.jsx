import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import { useUpdatePrayerRequestRecipientEmailMutation } from '@/services/tkt-backend/email';
// import Styles from './PrayerRequests.module.scss';

function PrayerRequestsControls({
  ParentStyles,
}) {
  const [submit,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useUpdatePrayerRequestRecipientEmailMutation();

  const fields = {
    prayerRequestsRecipient: [
      {
        label: 'Email address',
        name: 'prayerRequestsRecipientEmail',
        type: 'email',
      },
    ],
  };

  // console.log(
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

  const handleSubmit = (e, formState) => {
    e.preventDefault();
    submit(formState);
  };

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
