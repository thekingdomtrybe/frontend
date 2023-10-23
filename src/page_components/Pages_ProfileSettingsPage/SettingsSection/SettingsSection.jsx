import React from 'react';
import AllSettings from './AllSettings';
import Styles from './SettingsSection.module.scss';

function ProfileSettingsPageSettingsSection() {
  return (
    <section className={Styles['settings-section']}>
      <AllSettings />
    </section>
  );
}

export default ProfileSettingsPageSettingsSection;
