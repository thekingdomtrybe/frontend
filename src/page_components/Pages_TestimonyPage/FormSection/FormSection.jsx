import React from 'react';
import FormText from './FormText';
import Form from '@/components/Form/Form';
import Styles from './FormSection.module.scss';

function TestimonyPageFormSection() {
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
      label: 'Email Address',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Phone Number',
      name: 'phoneNumber',
      type: 'phone',
    },
    {
      label: 'Share Your Testimony',
      name: 'testimonyBody',
      type: 'textarea',
      maxChars: 500,
      numRows: 10,
    },
    {
      label: 'Upload an attachment',
      name: 'attachment',
      type: 'file',
      callback: () => {},
    },
  ];

  return (
    <section className={Styles['form-section']}>
      <FormText />
      <Form
        onSubmit={() => {}}
        fields={fields}
        submitButtonContent="Share Testimony"
        submitButtonVariant="blue-1"
      />
    </section>
  );
}

export default TestimonyPageFormSection;
