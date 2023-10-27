import React from 'react';
import FormText from './FormText';
import Form from '@/components/Form/Form';
import { useSubmitPrayerRequestMutation } from '@/services/tkt-backend/prayer_requests';
import Styles from './FormSection.module.scss';

function PrayerRequestPageFormSection() {
  const [submit,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    // },
  ] = useSubmitPrayerRequestMutation();

  // console.log(
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  // );

  const fields = [
    {
      label: 'First Name',
      name: 'requester_first_name',
      type: 'text',
    },
    {
      label: 'Last Name',
      name: 'requester_last_name',
      type: 'text',
    },
    {
      label: 'Email Address',
      name: 'requester_email',
      type: 'email',
    },
    {
      label: 'Phone Number',
      name: 'requester_phone',
      type: 'phone',
    },
    {
      label: 'Prayer Request',
      name: 'request_description',
      type: 'textarea',
      maxChars: 500,
      numRows: 10,
    },
  ];

  const submitPrayerRequest = (e, formState) => {
    e.preventDefault();
    submit(formState);
  };

  return (
    <section className={Styles['form-section']}>
      <FormText />
      <Form
        onSubmit={submitPrayerRequest}
        fields={fields}
        submitButtonContent="Send Request"
        submitButtonVariant="blue-1"
      />
    </section>
  );
}

export default PrayerRequestPageFormSection;
