import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
// import Styles from './Testimonies.module.scss';

function TestimonyControls({
  ParentStyles,
}) {
  const fields = {
    testimonyRecipient: [
      {
        label: 'Email address',
        name: 'testimonyRecipientEmail',
        type: 'email',
      },
    ],
    publicTestimonies: [
      {
        label: 'Testifier\'s name',
        name: 'firstTestifiersName',
        type: 'text',
      },
      {
        label: 'Testimony',
        name: 'firstTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
      },
      {
        label: 'Testifier\'s name',
        name: 'secondTestifiersName',
        type: 'text',
      },
      {
        label: 'Testimony',
        name: 'secondTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
      },
      {
        label: 'Testifier\'s name',
        name: 'thirdTestifiersName',
        type: 'text',
      },
      {
        label: 'Testimony',
        name: 'thirdTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
      },
      {
        label: 'Testifier\'s name',
        name: 'fourthTestifiersName',
        type: 'text',
      },
      {
        label: 'Testimony',
        name: 'fourthTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
      },
    ],
  };

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Testimonies</h3>

      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <h4>Testimony Recipient&apos;s email</h4>
          <p>Set the email address that should recieve new testimonies.</p>
          <Form
            fields={fields.testimonyRecipient}
            fieldSize="smaller"
            gap="small"
            onSubmit={() => {}}
            submitButtonContent="Save"
            submitButtonVariant="blue-1"
            submitButtonFullWidth
            submitButtonSize="small"
          />
        </div>

        <div className={ParentStyles['control-group-item']}>
          <h4>Public Testimonies</h4>
          <p>Configure the testimonies that are displayed on the homepage.</p>
          <Form
            fields={fields.publicTestimonies}
            fieldSize="smaller"
            gap="small"
            onSubmit={() => {}}
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

TestimonyControls.propTypes = {
  ParentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TestimonyControls;
