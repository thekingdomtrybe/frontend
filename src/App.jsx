import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import { SnackbarProvider, MaterialDesignContent } from 'notistack';

import Page from '@/views/__TemplatePage/Page';
import LandingPage from '@/views/LandingPage/LandingPage';
import PrayerRequestPage from '@/views/PrayerRequestsPage/PrayerRequestPage';
import TestimonyPage from '@/views/TestimoniesPage/TestimonyPage';
import PastServicesPage from '@/views/PastServicesPage/PastServicesPage';
import UpcomingEventsPage from './views/UpcomingEventsPage/UpcomingEventsPage';
import VolunteerGroupsPage from './views/VolunteerGroupsPage/VolunteerGroupsPage';
import Community from './views/CommunityPage/CommunityPage';
import GivePage from './views/GivePage/GivePage';
import LiveStreamPage from './views/LiveStreamPage/LiveStreamPage';
import WatchVideoPage from './views/WatchVideoPage/WatchVideoPage';
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import ResetPasswordPage from './views/ResetPasswordPage/ResetPasswordPage';
import NewPasswordPage from './views/NewPasswordPage/NewPasswordPage';
import CounsellingPage from './views/CounsellingPage/CounsellingPage';
import PrivacyPage from './views/PrivacyPage/PrivacyPage';
import TermsOfUsePage from './views/TermsOfUsePage/TermsOfUsePage';
import ProfileSettingsPage from './views/ProfileSettingsPage/ProfileSettingsPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const StyleMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-default': {
    backgroundColor: 'var(--white)',
    color: 'var(--dark)',
  },
}));

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // for devices with heights greater than 880px, use this instead:
    document.getElementById('root').scrollTo(0, 0);
  }, [pathname]);

  return (
    <SnackbarProvider
      Components={{
        default: StyleMaterialDesignContent,
      }}
    >
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/request-for-prayer" element={<PrayerRequestPage />} />
        <Route exact path="/share-a-testimony" element={<TestimonyPage />} />
        <Route exact path="/browse-past-services" element={<PastServicesPage />} />
        <Route exact path="/upcoming-events" element={<UpcomingEventsPage />} />
        <Route exact path="/volunteer" element={<VolunteerGroupsPage />} />
        <Route exact path="/live/*" element={<LiveStreamPage />} />
        <Route exact path="/live" element={<LiveStreamPage />} />
        <Route exact path="/watch/*" element={<WatchVideoPage />} />
        <Route exact path="/join-our-community" element={<Community />} />
        <Route exact path="/give" element={<GivePage />} />
        <Route exact path="/request-counselling" element={<CounsellingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/sign-up" element={<SignupPage />} />
        <Route exact path="/reset-password" element={<ResetPasswordPage />} />
        <Route exact path="/set-new-password" element={<NewPasswordPage />} />
        <Route exact path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route exact path="/privacy-policy" element={<PrivacyPage />} />
        <Route
          exact
          path="/settings/admin-dashboard"
          element={(
            <ProtectedRoute admin>
              <ProfileSettingsPage />
            </ProtectedRoute>
          )}
        />
        <Route exact path="/settings/*" element={<ProfileSettingsPage />} />
        <Route exact path="/settings" element={<ProfileSettingsPage />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </SnackbarProvider>
  );
}

export default App;
