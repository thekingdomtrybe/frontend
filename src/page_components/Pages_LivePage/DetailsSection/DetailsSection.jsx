import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoDetails from '../VideoDetails/VideoDetails';
import VideoOptions from '../VideoOptions/VideoOptions';
import LiveChat from '../LiveChat/LiveChat';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import AccountDetails from './AccountDetails';
import LiveShare from '@/components/LiveShare/LiveShare';
import LiveChatFull from '../LiveChat/LiveChatFull';
import Styles from './DetailsSection.module.scss';

function LiveStreamDetailsSection({
  viewers,
}) {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // In case the user navigates to a page directly, open the bottom sheet
  useEffect(() => {
    if (location.pathname.startsWith('/live/share')) {
      setCurrentPage(1);
    } else if (location.pathname.startsWith('/live/account')) {
      setCurrentPage(2);
    } else if (location.pathname.startsWith('/live/chat')) {
      setCurrentPage(3);
    }
    setShowBottomSheet(true);
  }, [location]);

  const switchPage = (page) => {
    setCurrentPage(page);
    let url = '';
    switch (page) {
      case 1:
        url = 'share';
        break;
      case 2:
        url = 'account';
        break;
      case 3:
        url = 'chat';
        break;
      default:
        break;
    }
    navigate(`/live/${url}`);
    setShowBottomSheet(true);
  };

  const closeBottomSheet = () => {
    setShowBottomSheet(false);
    setCurrentPage(null);
    navigate(-1);
  };

  let BottomSheetChildComponent = null;
  switch (currentPage) {
    case 1:
      BottomSheetChildComponent = <LiveShare />;
      break;
    case 2:
      BottomSheetChildComponent = <AccountDetails />;
      break;
    case 3:
      BottomSheetChildComponent = (
        <LiveChatFull viewers={viewers} close={closeBottomSheet} />
      );
      break;
    default:
      break;
  }

  const BottomSheetComponent = showBottomSheet && (
    <BottomSheet
      close={closeBottomSheet}
      dim={currentPage !== 3} // don't dim the background when the chat is open
      closeOnClickOutside={currentPage !== 3} // don't close the bottom sheet when the chat is open
      showHandle
    >
      {BottomSheetChildComponent}
    </BottomSheet>
  );

  // Anytime the url changes, close the bottom sheet if it's open
  useEffect(() => {
    if (location.pathname === '/live/' || location.pathname === '/live') {
      setShowBottomSheet(false);
    }
  }, [location]);

  return (
    <section className={Styles['details-section']}>
      <div className={Styles['mobile-details']}>
        <VideoDetails />
        <VideoOptions switchPage={switchPage} />
        <LiveChat switchPage={switchPage} />
        {BottomSheetComponent}
      </div>
      <div className={Styles['desktop-details']}>
        <LiveChatFull viewers={viewers} />
      </div>
    </section>
  );
}

LiveStreamDetailsSection.propTypes = {
  viewers: PropTypes.number,
};

LiveStreamDetailsSection.defaultProps = {
  viewers: 0,
};

export default LiveStreamDetailsSection;
