import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import ProfileSettingsPageHeaderSection from '@/page_components/Pages_ProfileSettingsPage/HeaderSection/HeaderSection';
import ProfileSettingsPageSettingsSection from '@/page_components/Pages_ProfileSettingsPage/SettingsSection/SettingsSection';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

function ProfilePage() {
  return (
    <ProtectedRoute>
      <SiteHeader />
      <ProfileSettingsPageHeaderSection />
      <ProfileSettingsPageSettingsSection />
    </ProtectedRoute>
  );
}

export default ProfilePage;
