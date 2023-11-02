import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { enqueueSnackbar } from 'notistack';
import Form from '@/components/Form/Form';
import { useAddPastServiceMutation, useDeletePastServiceMutation, useGetPastServicesQuery } from '@/services/tkt-backend/past_services';

function PastServicesControls({
  ParentStyles,
}) {
  const { data: pastServices } = useGetPastServicesQuery();

  const [addPastService,
    {
      isSuccess: isSavePastServiceSuccess,
      isError: isSavePastServiceError,
    },
  ] = useAddPastServiceMutation();

  const [deletePastService,
    {
      isSuccess: isDeletePastServiceSuccess,
      isError: isDeletePastServiceError,
    },
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

  useEffect(() => {
    if (isSavePastServiceSuccess) {
      enqueueSnackbar('Past service saved successfully', {
        variant: 'success',
        autoHideDuration: 1000,
      });
    }
  }, [isSavePastServiceSuccess]);

  useEffect(() => {
    if (isSavePastServiceError) {
      enqueueSnackbar('Error saving past service', {
        variant: 'error',
        autoHideDuration: 1000,
      });
    }
  }, [isSavePastServiceError]);

  useEffect(() => {
    if (isDeletePastServiceSuccess) {
      enqueueSnackbar('Past service deleted successfully', {
        variant: 'success',
        autoHideDuration: 1000,
      });
    }
  }, [isDeletePastServiceSuccess]);

  useEffect(() => {
    if (isDeletePastServiceError) {
      enqueueSnackbar('Error deleting past service', {
        variant: 'error',
        autoHideDuration: 1000,
      });
    }
  }, [isDeletePastServiceError]);

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
