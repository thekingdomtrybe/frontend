import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import { useAddPastServiceMutation, useDeletePastServiceMutation, useGetPastServicesQuery } from '@/services/tkt-backend/past_services';

function PastServicesControls({
  ParentStyles,
}) {
  const { data: pastServices } = useGetPastServicesQuery();

  const [addPastService,
    {
      // isLoading: isSubmitting,
      isSuccess: isSavePastServiceSuccess,
      // isError: isSubmitError,
      // error: submitError,
    },
  ] = useAddPastServiceMutation();

  const [deletePastService,
  // {
    // isLoading: isSubmitting,
    // isSuccess: isDeletePastServiceSuccess,
    // isError: isSubmitError,
    // error: submitError,
  // },
  ] = useDeletePastServiceMutation();

  const fields = {
    newPastService: [
      {
        label: 'Title',
        name: 'sermon_title',
        type: 'text',
      },
      {
        label: 'Date',
        name: 'sermon_date',
        type: 'date',
      },
      {
        label: 'Preacher',
        name: 'speaker_name',
        type: 'text',
      },
      {
        label: 'Video URL',
        name: 'sermon_media_link',
        type: 'url',
      },
      {
        label: 'Video Cover URL',
        name: 'video_cover',
        type: 'url',
      },
      {
        label: 'Description',
        name: 'sermon_description',
        type: 'textarea',
        numRows: 5,
      },
    ],
    deletePastService: [
      {
        label: 'Select a past service to delete',
        name: 'pastServiceId',
        type: 'select',
        options: pastServices?.map((service) => ({
          label: service.title,
          value: service.id.toString(),
        })) || [],
      },
    ],
  };

  const saveNewPastService = (e, formState) => {
    e.preventDefault();
    addPastService(formState);
  };

  const deletePastServiceById = (e, formState) => {
    e.preventDefault();
    deletePastService(formState.pastServiceId);
  };

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Past Services</h3>

      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <h4>Add a past service</h4>
          <Form
            fields={fields.newPastService}
            fieldSize="smaller"
            gap="small"
            onSubmit={saveNewPastService}
            submitButtonContent="Save"
            clear={isSavePastServiceSuccess}
            submitButtonVariant="gray-1"
            submitButtonFullWidth
            submitButtonSize="small"
          />
        </div>
        <div className={ParentStyles['control-group-item']}>
          <h4>Delete a past service</h4>
          <Form
            fields={fields.deletePastService}
            fieldSize="smaller"
            gap="small"
            onSubmit={deletePastServiceById}
            submitButtonContent="Delete"
            submitButtonVariant="orange-1"
            submitButtonFullWidth
            submitButtonSize="small"
          />
        </div>
      </div>
    </div>
  );
}

PastServicesControls.propTypes = {
  ParentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PastServicesControls;
