import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import ProfileSettingsPageHeaderSection from '@/page_components/Pages_ProfileSettingsPage/HeaderSection/HeaderSection';
import ProfileSettingsPageSettingsSection from '@/page_components/Pages_ProfileSettingsPage/SettingsSection/SettingsSection';
// import Styles from './ProfileSettingsPage.module.scss';

function ProfilePage() {
  return (
    <>
      <SiteHeader variant="blue" />
      <ProfileSettingsPageHeaderSection />
      <ProfileSettingsPageSettingsSection />
    </>
  );
}

export default ProfilePage;
