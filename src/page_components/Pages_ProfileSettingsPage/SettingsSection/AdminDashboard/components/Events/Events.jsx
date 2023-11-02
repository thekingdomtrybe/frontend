import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { enqueueSnackbar } from 'notistack';
import Form from '@/components/Form/Form';
import { useAddEventMutation, useDeleteEventMutation, useGetEventsQuery } from '@/services/tkt-backend/events';

function EventsControls({
  ParentStyles,
}) {
  const { data: events } = useGetEventsQuery();

  const [addEvent,
    {
      isSuccess: isSaveEventSuccess,
      isError: isSaveEventError,
    },
  ] = useAddEventMutation();

  const [deleteEvent,
    {
      isSuccess: isDeleteEventSuccess,
      isError: isDeleteEventError,
    },
  ] = useDeleteEventMutation();

  const fields = {
    newEvent: [
      {
        label: 'Title',
        name: 'event_title',
        type: 'text',
      },
      {
        label: 'Date',
        name: 'event_date',
        type: 'date',
      },
      {
        label: 'Location',
        name: 'event_location',
        type: 'text',
      },
      {
        label: 'Poster URL',
        name: 'poster_url',
        type: 'url',
      },
      {
        label: 'Description',
        name: 'event_description',
        type: 'textarea',
        numRows: 5,
      },
    ],
    deleteEvent: [
      {
        label: 'Select an event to delete',
        name: 'eventId',
        type: 'select',
        options: events?.map((event) => ({
          label: event.title,
          value: event.id.toString(),
        })) || [],
      },
    ],
  };

  const saveNewEvent = (e, formState) => {
    e.preventDefault();
    addEvent(formState);
  };

  const deleteEventById = (e, formState) => {
    e.preventDefault();
    deleteEvent(formState.eventId);
  };

  useEffect(() => {
    if (isSaveEventSuccess) {
      enqueueSnackbar('Event saved successfully', {
        variant: 'success',
        autoHideDuration: 1000,
      });
    }
  }, [isSaveEventSuccess]);

  useEffect(() => {
    if (isDeleteEventSuccess) {
      enqueueSnackbar('Event deleted successfully', {
        variant: 'success',
        autoHideDuration: 1000,
      });
    }
  }, [isDeleteEventSuccess]);

  useEffect(() => {
    if (isSaveEventError) {
      enqueueSnackbar('Error saving event', {
        variant: 'error',
        autoHideDuration: 1000,
      });
    }
  }, [isSaveEventError]);

  useEffect(() => {
    if (isDeleteEventError) {
      enqueueSnackbar('Error deleting event', {
        variant: 'error',
        autoHideDuration: 1000,
      });
    }
  }, [isDeleteEventError]);

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Events</h3>

      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <h4>Add an event</h4>
          <Form
            fields={fields.newEvent}
            fieldSize="smaller"
            gap="small"
            onSubmit={saveNewEvent}
            submitButtonContent="Save"
            submitButtonVariant="gray-1"
            clear={isSaveEventSuccess}
            submitButtonFullWidth
            submitButtonSize="small"
          />
        </div>
        <div className={ParentStyles['control-group-item']}>
          <h4>Delete an event</h4>
          <Form
            fields={fields.deleteEvent}
            fieldSize="smaller"
            gap="small"
            onSubmit={deleteEventById}
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

EventsControls.propTypes = {
  ParentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default EventsControls;
