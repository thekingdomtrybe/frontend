import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';

function PastSermonsControls({
  ParentStyles,
}) {
  // get past sermons from store
  const pastSermons = [
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      preacher: 'Pastor John Doe',
      videoURL: 'https://www.youtube.com/watch?v=7hYlUs6y9Ug',
      id: 1,
    },
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      preacher: 'Pastor John Doe',
      videoURL: 'https://www.youtube.com/watch?v=7hYlUs6y9Ug',
      id: 2,
    },
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      preacher: 'Pastor John Doe',
      videoURL: 'https://www.youtube.com/watch?v=7hYlUs6y9Ug',
      id: 3,
    },
    {
      title: 'The Power of the Gospel',
      date: '2020-09-27',
      preacher: 'Pastor John Doe',
      videoURL: 'https://www.youtube.com/watch?v=7hYlUs6y9Ug',
      id: 4,
    },
  ];

  const fields = {
    newPastSermon: [
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
        label: 'Preacher',
        name: 'preacher',
        type: 'text',
      },
      {
        label: 'Video URL',
        name: 'videoURL',
        type: 'url',
      },
      {
        label: 'Description',
        name: 'description',
        type: 'textarea',
        numRows: 5,
      },
    ],
    deletePastSermon: [
      {
        label: 'Select a past sermon to delete',
        name: 'pastSermonToDelete',
        type: 'select',
        options: pastSermons.map((sermon) => ({
          label: sermon.title,
          value: sermon.id,
        })),
      },
    ],
  };

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Past Sermons</h3>

      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <h4>Add a past sermon</h4>
          <Form
            fields={fields.newPastSermon}
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
          <h4>Delete a past sermon</h4>
          <Form
            fields={fields.deletePastSermon}
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

PastSermonsControls.propTypes = {
  ParentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PastSermonsControls;
