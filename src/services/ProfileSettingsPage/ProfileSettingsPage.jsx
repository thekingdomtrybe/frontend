import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import ProfileSettingsPageHeaderSection from '@/page_components/Pages_ProfileSettingsPage/HeaderSection/HeaderSection';
import ProfileSettingsPageSettingsSection from '@/page_components/Pages_ProfileSettingsPage/SettingsSection/SettingsSection';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
// import Styles from './ProfileSettingsPage.module.scss';

function ProfilePage() {
  return (
    <ProtectedRoute>
      <SiteHeader variant="blue" />
      <ProfileSettingsPageHeaderSection />
      <ProfileSettingsPageSettingsSection />
    </ProtectedRoute>
  );
}

export default ProfilePage;
