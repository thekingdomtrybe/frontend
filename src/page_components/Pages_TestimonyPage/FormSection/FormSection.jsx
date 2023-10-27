import React, { useState } from 'react';
import FormText from './FormText';
import SVG from '@/components/SVG/SVG';
import Form from '@/components/Form/Form';
import { useSendTestimonyMutation } from '@/services/tkt-backend/testimonies';
import Styles from './FormSection.module.scss';

function TestimonyPageFormSection() {
  const [submit,
  // {
    // isLoading: isSubmitting,
    // isSuccess: isSubmitSuccess,
    // isError: isSubmitError,
    // error: submitError,
  // }
  ] = useSendTestimonyMutation();

  // console.log(
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

  const [fileSelectText, setFileSelectText] = useState('Upload an attachment');

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
          <SVG icon="upload" color="var(--blue)" />
          {fileSelectText}
        </>
      ),
      callback: (file) => {
        if (file) setFileSelectText(file.name);
        else setFileSelectText('Upload an attachment');
      },
      styleClassName: Styles['file-select'],
    },
  ];

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
      <FormText />
      <Form
        onSubmit={submitTestimony}
        fields={fields}
        submitButtonContent="Share Testimony"
        submitButtonVariant="blue-1"
      />
    </section>
  );
}

export default TestimonyPageFormSection;
