import React, { useState } from 'react';
import FormText from './FormText';
import SVG from '@/components/SVG/SVG';
import Form from '@/components/Form/Form';
import { useSendTestimonyMutation } from '@/services/tkt-backend/testimonies';
import FormNotification from '@/components/FormNotification/FormNotification';
import Styles from './FormSection.module.scss';

function TestimonyPageFormSection() {
  const [submit,
    {
      isLoading: isSubmitting,
      isSuccess: isSubmitSuccess,
      isError: isSubmitError,
    },
  ] = useSendTestimonyMutation();

  const defaultFileSelectText = 'Upload an attachment';
  const [fileSelectText, setFileSelectText] = useState(defaultFileSelectText);

  const fields = [
    {
      label: 'First Name',
      name: 'testifier_first_name',
      type: 'text',
    },
    {
      label: 'Last Name',
      name: 'testifier_last_name',
      type: 'text',
    },
    {
      label: 'Email Address',
      name: 'testifier_email',
      type: 'email',
    },
    {
      label: 'Phone Number',
      name: 'testifier_phone',
      type: 'phone',
    },
    {
      label: 'Share Your Testimony',
      name: 'testimony_content',
      type: 'textarea',
      maxChars: 500,
      numRows: 10,
    },
    {
      label: 'Upload an attachment',
      name: 'testimony_attachment',
      type: 'file',
      children: (
        <>
          <SVG icon="upload" color="var(--gray)" />
          {fileSelectText}
        </>
      ),
      callback: (file) => {
        if (file) setFileSelectText(file.name);
        else setFileSelectText(defaultFileSelectText);
      },
      onClear: () => setFileSelectText(defaultFileSelectText),
      styleClassName: Styles['file-select'],
    },
  ];

  const notificationStates = {
    success: {
      title: 'Testimony Received!',
      message: 'We received your testimony! Thanks for sharing with us.',
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

  const submitTestimony = (e, formState) => {
    e.preventDefault();

    const testimonyData = { ...formState };
    const formData = new FormData();
    formData.append('file', testimonyData.testimony_attachment || null);

    if (testimonyData.testimony_attachment) {
      delete testimonyData.testimony_attachment;
    }

    formData.append('testimony', JSON.stringify({
      ...testimonyData,
      testimony_title: 'New Testimony',
    }));

    submit(formData);
  };

  return (
    <section className={Styles['form-section']}>
      <FormNotification notifications={notificationStates} />
      <FormText />
      <Form
        onSubmit={submitTestimony}
        clear={isSubmitSuccess}
        fields={fields}
        submitButtonContent="Share Testimony"
        submitButtonVariant="dark"
        submitButtonStlye={Styles.submit}
        isLoading={isSubmitting}
      />
    </section>
  );
}

export default TestimonyPageFormSection;
