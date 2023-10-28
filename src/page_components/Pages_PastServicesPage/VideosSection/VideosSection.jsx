import React from 'react';
import { useGetPastServicesQuery } from '@/services/tkt-backend/past_services';
import Video from '@/components/Video/Video';
import PastServicesLoader from './Loader';
import Styles from './VideosSection.module.scss';

function PastServicesVideosSection() {
  const { data: pastServicesData, isLoading, isError } = useGetPastServicesQuery();

  let videoComponents = null;

  if (pastServicesData === undefined || isLoading || isError) {
    videoComponents = <PastServicesLoader />;
  } else if (pastServicesData && pastServicesData.length === 0) {
    videoComponents = <p>No videos</p>;
  } else if (pastServicesData && pastServicesData.length > 0) {
    const sortedPastServices = [...pastServicesData]
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

    videoComponents = (sortedPastServices).map((video) => (
      <Video
        key={video.id}
        id={video.id}
        title={video.title}
        minister={video.speaker_name}
        date={video.date}
        description={video.description}
        image=""
      />
    ));
  }

  return (
    <section className={Styles.videos}>
      {videoComponents}
    </section>
  );
}

export default PastServicesVideosSection;
