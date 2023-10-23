import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';

function VolunterGroupsControls({
  ParentStyles,
}) {
  // get groups from store
  const groups = [
    {
      title: 'The Power of the Gospel',
      id: 1,
    },
    {
      title: 'The Power of the Gospel',
      id: 2,
    },
    {
      title: 'The Power of the Gospel',
      id: 3,
    },
    {
      title: 'The Power of the Gospel',
      id: 4,
    },
  ];

  const fields = {
    newGroup: [
      {
        label: 'Name',
        name: 'name',
        type: 'text',
      },
      {
        label: 'Channel',
        name: 'channel',
        type: 'url',
      },
      {
        label: 'Poster URL',
        name: 'groupPosterURL',
        type: 'url',
      },
      {
        label: 'Description',
        name: 'description',
        type: 'textarea',
        numRows: 5,
      },
    ],
    deleteGroup: [
      {
        label: 'Select a group to delete',
        name: 'groupToDelete',
        type: 'select',
        options: groups.map((group) => ({
          label: group.title,
          value: group.id,
        })),
      },
    ],
  };

  return (
    <div className={ParentStyles['control-group']}>
      <h3>Voluteer Groups</h3>

      <div className={ParentStyles['control-group-items']}>
        <div className={ParentStyles['control-group-item']}>
          <h4>Add a group</h4>
          <Form
            fields={fields.newGroup}
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
          <h4>Delete a group</h4>
          <Form
            fields={fields.deleteGroup}
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

VolunterGroupsControls.propTypes = {
  ParentStyles: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default VolunterGroupsControls;
