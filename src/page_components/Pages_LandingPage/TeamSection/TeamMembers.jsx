import React from 'react';
import TeamMember from './TeamMember';
import Styles from './TeamMembers.module.scss';

function TeamMembers() {
  const teamMembers = [
    {
      name: 'Pastor Olumide & Adenike Emmanuel',
      role: 'Overseer',
      img: 'overseer',
      size: 'normal',
    },
    {
      name: 'Pastor Adebola Talaeat',
      role: 'Co-ordinating Leader',
      img: 'leader',
      size: 'thin',
    },
    {
      name: 'Gift Olasubomi-Olukoju',
      role: 'Minister-In-Charge',
      img: 'minister',
      size: 'thin',
    },
    {
      name: 'Olanrewaju Daniels',
      role: 'Deputy Minister-In-Charge',
      img: 'deputy',
      size: 'large',
    },
  ];

  const teamMembersComponents = teamMembers.map((teamMember) => (
    <TeamMember
      key={teamMember.name}
      name={teamMember.name}
      role={teamMember.role}
      img={teamMember.img}
      size={teamMember.size}
    />
  ));

  return (
    <div className={Styles[['team-members']]}>
      {teamMembersComponents}
    </div>
  );
}

export default TeamMembers;
