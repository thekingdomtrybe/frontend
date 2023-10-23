import React from 'react';
import VolunteerGroup from '@/components/VolunteerGroup/VolunteerGroup';
import Styles from './GroupsSection.module.scss';

function VolunteerGroupsGroupsSection() {
  // get groups from store or context
  const groups = [
    {
      id: 1,
      name: 'Caring Hands',
      description: 'Caring Souls is a group dedicated to providing care and support to individuals facing health challenges. Together, we can make a difference in their lives.',
      link: '/groups/caring-hands',
    },
    {
      id: 2,
      name: 'Caring Hands',
      description: 'Caring Souls is a group dedicated to providing care and support to individuals facing health challenges. Together, we can make a difference in their lives.',
      link: '/groups/caring-hands',
    },
    {
      id: 3,
      name: 'Caring Hands',
      description: 'Caring Souls is a group dedicated to providing care and support to individuals facing health challenges. Together, we can make a difference in their lives.',
      link: '/groups/caring-hands',
    },
    {
      id: 4,
      name: 'Caring Hands',
      description: 'Caring Souls is a group dedicated to providing care and support to individuals facing health challenges. Together, we can make a difference in their lives.',
      link: '/groups/caring-hands',
    },
    {
      id: 5,
      name: 'Caring Hands',
      description: 'Caring Souls is a group dedicated to providing care and support to individuals facing health challenges. Together, we can make a difference in their lives.',
      link: '/groups/caring-hands',
    },
    {
      id: 6,
      name: 'Caring Hands',
      description: 'Caring Souls is a group dedicated to providing care and support to individuals facing health challenges. Together, we can make a difference in their lives.',
      link: '/groups/caring-hands',
    },
  ];

  const groupComponents = groups.map((group) => (
    <VolunteerGroup
      key={group.id}
      id={group.id}
      name={group.name}
      description={group.description}
      link={group.link}
      image="https://via.placeholder.com/300"
    />
  ));

  return (
    <section className={Styles.groups}>
      {groupComponents}
    </section>
  );
}

export default VolunteerGroupsGroupsSection;
