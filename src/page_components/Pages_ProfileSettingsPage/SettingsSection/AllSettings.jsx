import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserInfoDisplay from '@/components/UserInfoDisplay/UserInfoDisplay';
import AccountSettings from './AccountSettings';
import MoreOptions from './MoreOptions';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import AboutUs from './AboutUs';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import Styles from './AllSettings.module.scss';

function AllSettings() {
  const [currentPage, setCurrentPage] = useState('index');
  const location = useLocation();
  const navigate = useNavigate();

  // const toggleSetting = (settingName) => {
  const toggleSetting = () => {
  };

  const onLogout = () => {
  };

  const comeBackHere = () => {
    navigate('/settings/', { replace: true });
  };

  let pageToRender;

  switch (currentPage) {
    case 'edit-profile': {
      pageToRender = (
        <EditProfile goBack={comeBackHere} />
      );
      break;
    }
    case 'change-password': {
      pageToRender = (
        <ChangePassword goBack={comeBackHere} />
      );
      break;
    }
    case 'about-us': {
      pageToRender = (
        <AboutUs goBack={comeBackHere} />
      );
      break;
    }
    case 'admin-dashboard': {
      pageToRender = (
        <AdminDashboard goBack={comeBackHere} />
      );
      break;
    }
    default: {
      pageToRender = (
        <>
          <AccountSettings setCurrentPage={setCurrentPage} toggleSetting={toggleSetting} />
          <MoreOptions setCurrentPage={setCurrentPage} onLogout={onLogout} />
        </>
      );
    }
  }

  // In case the user navigates to a page directly, go straight there
  useEffect(() => {
    if (location.pathname.startsWith('/settings/edit-profile')) {
      setCurrentPage('edit-profile');
    } else if (location.pathname.startsWith('/settings/change-password')) {
      setCurrentPage('change-password');
    } else if (location.pathname.startsWith('/settings/about-us')) {
      setCurrentPage('about-us');
    } else if (location.pathname.startsWith('/settings/admin-dashboard')) {
      setCurrentPage('admin-dashboard');
    }
  }, [location]);

  // Anytime the url changes, check if we're on the index page
  // If so, set the currentPage to index
  useEffect(() => {
    if (location.pathname === '/settings/' || location.pathname === '/settings') {
      setCurrentPage('index');
    }
  }, [location]);

  return (
    <div className={Styles['all-settings']}>
      <UserInfoDisplay
        name="Yennefer Doe"
        img=""
        email="yen@mail.com"
      />
      {pageToRender}
    </div>
  );
}

export default AllSettings;
