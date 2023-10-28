import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import { useGetAdminEmailAddressesQuery, useUpdateTestimonyRecipientEmailMutation } from '@/services/tkt-backend/email';
import { useGetTestimoniesQuery, useUpdatePublicTestimoniesMutation } from '@/services/tkt-backend/testimonies';
// import Styles from './Testimonies.module.scss';

function TestimonyControls({
  ParentStyles,
}) {
  const {
    data: emailAddresses,
    isSuccess: isEmailAddressesSuccess,
  } = useGetAdminEmailAddressesQuery();

  const {
    data: publicTestimonies,
    isSuccess: isPublicTestimoniesSuccess,
  } = useGetTestimoniesQuery();

  const [updateTestimonyRecipientEmail,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useUpdateTestimonyRecipientEmailMutation();

  const [updatePublicTestimonies,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useUpdatePublicTestimoniesMutation();

  const fields = {
    testimoniesRecipient: [
      {
        label: 'Email address',
        name: 'testimoniesRecipientEmail',
        type: 'email',
        initialValue: isEmailAddressesSuccess ? emailAddresses.testimonyRecipientEmail : '',
      },
    ],
    publicTestimonies: [
      {
        label: 'Testifier\'s name',
        name: 'firstTestifiersName',
        type: 'text',
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[0].testifier_first_name}`
          ) : '',
      },
      {
        label: 'Testimony',
        name: 'firstTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[0].testimony_content}`
          ) : '',
      },
      {
        label: 'Testifier\'s name',
        name: 'secondTestifiersName',
        type: 'text',
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[1].testifier_first_name}`
          ) : '',
      },
      {
        label: 'Testimony',
        name: 'secondTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[1].testimony_content}`
          ) : '',
      },
      {
        label: 'Testifier\'s name',
        name: 'thirdTestifiersName',
        type: 'text',
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[2].testifier_first_name}`
          ) : '',
      },
      {
        label: 'Testimony',
        name: 'thirdTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[2].testimony_content}`
          ) : '',
      },
      {
        label: 'Testifier\'s name',
        name: 'fourthTestifiersName',
        type: 'text',
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[3].testifier_first_name}`
          ) : '',
      },
      {
        label: 'Testimony',
        name: 'fourthTestifiersTestimony',
        type: 'textarea',
        numRows: 4,
        initialValue:
          isPublicTestimoniesSuccess ? (
            `${publicTestimonies[3].testimony_content}`
          ) : '',
      },
    ],
  };

  const submitTestimonyRecipientEmailUpdateForm = (e, formState) => {
    e.preventDefault();
    updateTestimonyRecipientEmail(formState);
  };

  const submitPublicTestimoniesUpdateForm = (e, formState) => {
    e.preventDefault();
    const {
      firstTestifiersName,
      firstTestifiersTestimony,
      secondTestifiersName,
      secondTestifiersTestimony,
      thirdTestifiersName,
      thirdTestifiersTestimony,
      fourthTestifiersName,
      fourthTestifiersTestimony,
    } = formState;
    const publicTestimoniesData = {
      first: { name: firstTestifiersName, content: firstTestifiersTestimony },
      second: { name: secondTestifiersName, content: secondTestifiersTestimony },
      third: { name: thirdTestifiersName, content: thirdTestifiersTestimony },
      fourth: { name: fourthTestifiersName, content: fourthTestifiersTestimony },
    };
    updatePublicTestimonies(publicTestimoniesData);
  };

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Testimonies</h3>

      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <h4>Testimony Recipient&apos;s email</h4>
          <p>Set the email address that should recieve new testimonies.</p>
          <Form
            fields={fields.testimoniesRecipient}
            fieldSize="smaller"
            gap="small"
            onSubmit={submitTestimonyRecipientEmailUpdateForm}
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
            onSubmit={submitPublicTestimoniesUpdateForm}
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
