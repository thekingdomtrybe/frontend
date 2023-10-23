import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';

function EventsControls({
  ParentStyles,
}) {
  // get events from store
  const events = [
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      id: 1,
    },
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      id: 2,
    },
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      id: 3,
    },
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      id: 4,
    },
  ];

  const fields = {
    newEvent: [
      {
        label: 'Title',
        name: 'title',
        type: 'text',
      },
      {
        label: 'Date',
        name: 'date',
        type: 'date',
      },
      {
        label: 'Location',
        name: 'preacher',
        type: 'text',
      },
      {
        label: 'Poster URL',
        name: 'posterURL',
        type: 'url',
      },
      {
        label: 'Description',
        name: 'description',
        type: 'textarea',
        numRows: 5,
      },
    ],
    deleteEvent: [
      {
        label: 'Select an event to delete',
        name: 'eventToDelete',
        type: 'select',
        options: events.map((event) => ({
          label: event.title,
          value: event.id,
        })),
      },
    ],
  };

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
            onSubmit={() => {}}
            submitButtonContent="Save"
            submitButtonVariant="blue-1"
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
            onSubmit={() => {}}
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
