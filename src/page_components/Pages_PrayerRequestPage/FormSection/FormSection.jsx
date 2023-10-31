import React from 'react';
import FormText from './FormText';
import Form from '@/components/Form/Form';
import FormNotification from '@/components/FormNotification/FormNotification';
import { useSubmitPrayerRequestMutation } from '@/services/tkt-backend/prayer_requests';
import Styles from './FormSection.module.scss';

function PrayerRequestPageFormSection() {
  const [submit,
    {
      isLoading: isSubmitting,
      isSuccess: isSubmitSuccess,
      isError: isSubmitError,
    },
  ] = useSubmitPrayerRequestMutation();

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

  const notificationStates = {
    success: {
      title: 'Request received!',
      message: 'We received your request! Our prayer team will attend to it as soon as possible.',
      nextSteps: [
        {
          text: 'Go back to the',
          href: '/',
          linkText: 'Homepage',
        },
        {
          text: 'Join our',
          href: '/live',
          linkText: 'Livestream',
        },
        {
          text: 'Or',
          href: '/browse-past-services',
          linkText: 'Browse our Past Services',
        },
      ],
      trigger: isSubmitSuccess,
      timeout: 15000,
    },
    error: {
      message: 'An error occured!, Please try sending your request again.',
      trigger: isSubmitError,
      timeout: 5000,
    },
  };

  const submitPrayerRequest = (e, formState) => {
    e.preventDefault();
    submit(formState);
  };

  return (
    <section className={Styles['form-section']}>
      <FormNotification notifications={notificationStates} />
      <FormText />
      <Form
        onSubmit={submitPrayerRequest}
        clear={isSubmitSuccess}
        fields={fields}
        submitButtonContent="Send Request"
        submitButtonVariant="dark"
        submitButtonStlye={Styles.submit}
        isLoading={isSubmitting}
      />
    </section>
  );
}

export default PrayerRequestPageFormSection;
