import React from 'react';
import ProfileSettingsPageHeaderContent from './HeaderContent';
import Styles from './HeaderSection.module.scss';

function ProfileSettingsPageHeaderSection() {
  return (
    <section className={Styles['profile-page-header']}>
      <ProfileSettingsPageHeaderContent />
    </section>
  );
}

export default ProfileSettingsPageHeaderSection;
