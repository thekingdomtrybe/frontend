import React from 'react';
import Styles from './FormSection.module.scss';
import FormText from './FormText';
import Form from '@/components/Form/Form';

function CounsellingPageFormSection() {
  const fields = [
    {
      label: 'Input your first name',
      name: 'firstName',
      type: 'text',
    },
    {
      label: 'Input your last name',
      name: 'lastName',
      type: 'text',
    },
    {
      label: 'Input your email address',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Input your phone number',
      name: 'phoneNumber',
      type: 'phone',
    },
    {
      label: 'Select your gender',
      name: 'gender',
      type: 'select',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },
    {
      label: 'Describe your issue in a few sentences',
      name: 'concern',
      type: 'textarea',
      maxChars: 1000,
      numRows: 3,
    },
    {
      label: 'Have you been counselled before?',
      name: 'counselledBefore',
      type: 'select',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
    },
    {
      label: `
        Please ensure you submit this form with the button at the bottom of the page
        after scheduling your appointment.`,
      name: 'appointmentConfirmation',
      variant: 'warning',
      type: 'alert',
      icon: '',
    },
    {
      label: 'Select your preferred time',
      name: 'preferredTime',
      type: 'calendly',
      url: 'https://calendly.com/tktglobal23/one-on-one-with-me',
      prefill: {},
    },
    {
      label: 'How would you like us to contact you?',
      name: 'contactMethod',
      type: 'select',
      options: [
        { value: 'whatsapp', label: 'Whatsapp' },
        { value: 'phone-call', label: 'Phone Call' },
        { value: 'email', label: 'Email' },
        { value: 'video-call', label: 'Video Call' },
      ],
    },
    {
      label: 'Any additional comments or questions?',
      name: 'additionalComments',
      type: 'textarea',
      maxChars: 1000,
      numRows: 3,
    },
  ];

  return (
    <section className={Styles['form-section']}>
      <FormText />
      <Form
        onSubmit={() => {}}
        fields={fields}
        submitButtonContent="Submit Form"
        submitButtonVariant="blue-1"
      />
    </section>
  );
}

export default CounsellingPageFormSection;
