import React from 'react';
import PropTypes from 'prop-types';
import Form from '@/components/Form/Form';
import { useAddVolunteerGroupMutation, useDeleteVoluteerGroupMutation, useGetVolunteerGroupsQuery } from '@/services/tkt-backend/volunteer_groups';

function VolunterGroupsControls({
  ParentStyles,
}) {
  const { data: groups, isLoading: areGroupsLoading } = useGetVolunteerGroupsQuery();

  const [addGroup,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useAddVolunteerGroupMutation();

  const [deleteGroup,
    // {
    //   isLoading: isSubmitting,
    //   isSuccess: isSubmitSuccess,
    //   isError: isSubmitError,
    //   error: submitError,
    // },
  ] = useDeleteVoluteerGroupMutation();

  // console.log(
  //   'isSubmitting:', isSubmitting,
  //   'isSubmitSuccess:', isSubmitSuccess,
  //   'isSubmitError:', isSubmitError,
  //   'submitError:', submitError,
  // );

  if (areGroupsLoading) {
    return <p>Loading...</p>;
  }

  const fields = {
    newGroup: [
      {
        label: 'Name',
        name: 'group_name',
        type: 'text',
      },
      {
        label: 'Channel',
        name: 'communication_channel',
        type: 'url',
      },
      {
        label: 'Poster URL',
        name: 'group_cover',
        type: 'url',
      },
      {
        label: 'Description',
        name: 'group_description',
        type: 'textarea',
        numRows: 5,
      },
    ],
    deleteGroup: [
      {
        label: 'Select a group to delete',
        name: 'volunteerGroupId',
        type: 'select',
        options: groups.map((group) => ({
          label: group.name,
          value: group.id.toString(),
        })),
      },
    ],
  };

  const saveNewVolunteerGroup = (e, formState) => {
    e.preventDefault();
    addGroup(formState);
  };

  const deleteVolunteerGroupById = (e, formState) => {
    e.preventDefault();
    deleteGroup(formState.volunteerGroupId);
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
            onSubmit={saveNewVolunteerGroup}
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
            onSubmit={deleteVolunteerGroupById}
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
