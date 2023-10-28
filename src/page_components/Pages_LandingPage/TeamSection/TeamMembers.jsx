import React from 'react';
import images from '@/assets/images';
import TeamMember from './TeamMember';
import Styles from './TeamMembers.module.scss';

function TeamMembers() {
  const teamMembers = [
    {
      name: 'Pastor Olumide & Adenike Emmanuel',
      role: 'Overseer',
      webp: images.landingPage.teamSection.overseer.WEBP,
      jpeg: images.landingPage.teamSection.overseer.JPG,
      size: 'normal',
    },
    {
      name: 'Pastor Adebola Talaeat',
      role: 'Co-ordinating Leader',
      webp: images.landingPage.teamSection.leader.WEBP,
      jpeg: images.landingPage.teamSection.leader.JPG,
      size: 'thin',
    },
    {
      name: 'Gift Olasubomi-Olukoju',
      role: 'Minister-In-Charge',
      webp: images.landingPage.teamSection.minister.WEBP,
      jpeg: images.landingPage.teamSection.minister.JPG,
      size: 'thin',
    },
    {
      name: 'Olanrewaju Daniels',
      role: 'Deputy Minister-In-Charge',
      img: 'deputy',
      webp: images.landingPage.teamSection.deputy.WEBP,
      jpeg: images.landingPage.teamSection.deputy.JPG,
      size: 'large',
    },
  ];

  const teamMembersComponents = teamMembers.map((teamMember) => (
    <TeamMember
      key={teamMember.name}
      name={teamMember.name}
      role={teamMember.role}
      webp={teamMember.webp}
      jpeg={teamMember.jpeg}
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
