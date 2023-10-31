import React from 'react';
import SVG from '@/components/SVG/SVG';
import Styles from './HeaderContent.module.scss';

function ProfileSettingsPageHeaderContent() {
  return (
    <div className={Styles['header-content']}>
      <SVG icon="settings" width={32} color="var(--dark)" />
      <h1>Settings</h1>
    </div>
  );
}

export default ProfileSettingsPageHeaderContent;
