import React from 'react';
import Testimony from './Testimony';
import { useGetTestimoniesQuery } from '@/services/tkt-backend/testimonies';
import Styles from './Testimonies.module.scss';

function Testimonies() {
  const { data: testimoniesData, isLoading } = useGetTestimoniesQuery();

  let testimonyComponents = null;

  if (testimoniesData === undefined || isLoading) {
    testimonyComponents = <p>Loading...</p>;
  } else if (testimoniesData && testimoniesData.length === 0) {
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
