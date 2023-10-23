import React from 'react';
import FormText from './FormText';
import Form from '@/components/Form/Form';
import Styles from './FormSection.module.scss';

function PrayerRequestPageFormSection() {
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
      label: 'Prayer Request',
      name: 'prayerRequest',
      type: 'textarea',
      maxChars: 500,
      numRows: 10,
    },
  ];

  return (
    <section className={Styles['form-section']}>
      <FormText />
      <Form
        onSubmit={() => {}}
        fields={fields}
        submitButtonContent="Send Request"
        submitButtonVariant="blue-1"
      />
    </section>
  );
}

export default PrayerRequestPageFormSection;
