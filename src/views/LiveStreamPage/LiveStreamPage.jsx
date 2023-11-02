import React from 'react';
import SiteHeader from '@/components/SiteHeader/SiteHeader';
import LiveStreamVideoSection from '@/page_components/Pages_LivePage/VideoSection/VideoSection';
import LiveStreamInformationSection from '@/page_components/Pages_LivePage/InformationSection/InformationSection';
import { useGetLiveStreamStatusQuery } from '@/services/tkt-backend/live';
import Styles from './LiveStreamPage.module.scss';

function LiveStreamPage() {
  const {
    data: isLiveNow,
  } = useGetLiveStreamStatusQuery();

  return (
    <>
      <SiteHeader variant="live" />
      <div className={Styles['live-stream-page']}>
        <LiveStreamVideoSection isLiveNow={isLiveNow} />
        <LiveStreamInformationSection isLiveNow={isLiveNow} viewers={23} />
      </div>
    </>
  );
}

export default LiveStreamPage;
