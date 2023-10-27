import React from 'react';
import PropTypes from 'prop-types';
import LiveStreamControls from './components/LiveStream/LiveStream';
import TestimonyControls from './components/Testimonies/Testimonies';
import PrayerRequestsControls from './components/PrayerRequests/PrayerRequests';
import PastServicesControls from './components/PastServices/PastServices';
import EventsControls from './components/Events/Events';
import VolunterGroupsControls from './components/VolunteerGroups/VolunteerGroups';
import Styles from './AdminDashboard.module.scss';

function AdminDashboard({
  goBack,
}) {
  return (
    <div className={Styles['admin-dashboard']}>
      <div className={Styles['admin-dashboard-header']}>
        <button type="button" onClick={goBack}>
          <img src="" alt="" />
          Back to settings
        </button>
        <h2>Admin Dashboard</h2>
      </div>

      <div className={Styles['control-groups']}>
        <LiveStreamControls ParentStyles={Styles} />
        <TestimonyControls ParentStyles={Styles} />
        <PrayerRequestsControls ParentStyles={Styles} />
        <PastServicesControls ParentStyles={Styles} />
        <EventsControls ParentStyles={Styles} />
        <VolunterGroupsControls ParentStyles={Styles} />
      </div>
    </div>
  );
}

AdminDashboard.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default AdminDashboard;
