import React from 'react';
import VolunteerGroup from '@/components/VolunteerGroup/VolunteerGroup';
import { useGetVolunteerGroupsQuery } from '@/services/tkt-backend/volunteer_groups';
import Styles from './GroupsSection.module.scss';

function VolunteerGroupsGroupsSection() {
  const { data: volunteerGroupsData, isLoading } = useGetVolunteerGroupsQuery();

  let groupComponents = null;

  if (volunteerGroupsData === undefined || isLoading) {
    groupComponents = <p>Loading...</p>;
  } else if (volunteerGroupsData && volunteerGroupsData.length === 0) {
    groupComponents = <p>No volunteer groups</p>;
  } else if (volunteerGroupsData && volunteerGroupsData.length > 0) {
    groupComponents = (volunteerGroupsData).map((group) => (
      <VolunteerGroup
        key={group.id}
        id={group.id}
        name={group.name}
        description={group.description}
        link={group.communication_channel}
        image={group.group_cover}
      />
    ));
  }

  return (
    <section className={Styles.groups}>
      {groupComponents}
    </section>
  );
}

export default VolunteerGroupsGroupsSection;
