import React from 'react';
import Testimony from './Testimony';
import { useGetTestimoniesQuery } from '@/services/tkt-backend/testimonies';
import TestimoniesLoader from './Loader';
import Styles from './Testimonies.module.scss';

function Testimonies() {
  const { data: testimoniesData, isLoading, isError } = useGetTestimoniesQuery();

  if (testimoniesData === undefined || isLoading || isError) {
    return <TestimoniesLoader />;
  }

  let testimonyComponents = null;
  if (testimoniesData && testimoniesData.length === 0) {
    testimonyComponents = <p>No testimonies</p>;
  } else if (testimoniesData && testimoniesData.length > 0) {
    testimonyComponents = (testimoniesData).map((testimony) => (
      <Testimony
        key={testimony.id}
        content={testimony.testimony_content}
        author={`${testimony.testifier_first_name} ${testimony.testifier_last_name ? testimony.testifier_last_name : ''}`}
      />
    ));
  }

  return (
    <div className={Styles.testimonies}>
      {testimonyComponents}
    </div>
  );
}

export default Testimonies;
