import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BottomSheet } from 'react-spring-bottom-sheet';
import SVG from '@/components/SVG/SVG';
import LiveShare from '@/components/LiveShare/LiveShare';
import AccountDetails from './AccountDetails/AccountDetails';
import Styles from './Controls.module.scss';
import 'react-spring-bottom-sheet/dist/style.css';

function Controls() {
  const controlsList = [
    {
      index: 1,
      title: 'Share',
      icon: 'share',
      color: 'alpha-dark-7',
      width: 16,
    },
    {
      index: 2,
      title: 'See offering options',
      icon: 'chevron-down',
      color: 'alpha-dark-8',
      width: 24,
    },
  ];

  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const bottomSheetRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  // In case the user navigates to a page directly, open the bottom sheet
  useEffect(() => {
    if (location.pathname.startsWith('/live/share')) {
      setCurrentPage(1);
    } else if (location.pathname.startsWith('/live/give')) {
      setCurrentPage(2);
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
        url = 'give';
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
    default:
      break;
  }

  const BottomSheetComponent = (
    <div className={Styles['bottom-sheet-container']}>
      <BottomSheet
        open={showBottomSheet}
        onDismiss={closeBottomSheet}
        ref={bottomSheetRef}
        maxHeight={500}
      >
        {BottomSheetChildComponent}
      </BottomSheet>
    </div>
  );

  // Anytime the url changes, close the bottom sheet if it's open
  useEffect(() => {
    if (location.pathname === '/live/' || location.pathname === '/live') {
      setShowBottomSheet(false);
    }
  }, [location]);

  const controlComponents = controlsList.map((control) => (
    <button
      onClick={() => switchPage(control.index)}
      type="button"
      key={control.title}
      className={Styles.control}
    >
      <span>
        {control.title}
      </span>
      {
        control.icon && (
          <SVG icon={control.icon} width={control.width} color={`var(--${control.color})`} />
        )
      }
    </button>
  ));

  const desktopControls = (
    <div className={Styles['desktop-controls']}>
      <h3>Offering Options</h3>
      <AccountDetails direction="horizontal" />
    </div>
  );

  return (
    <div className={Styles.controls}>
      {controlComponents}
      {BottomSheetComponent}
      {desktopControls}
    </div>
  );
}

export default Controls;
