import React from 'react';
import EventCard from '@/components/Event/Event';
import { useGetEventsQuery } from '@/services/tkt-backend/events';
import Styles from './EventsSection.module.scss';

function UpcomingEventsEventsSection() {
  const { data: eventsData, isLoading } = useGetEventsQuery();

  let eventComponents = null;

  if (eventsData === undefined || isLoading) {
    eventComponents = <p>Loading...</p>;
  } else if (eventsData && eventsData.length === 0) {
    eventComponents = <p>No events</p>;
  } else if (eventsData && eventsData.length > 0) {
    eventComponents = (eventsData).map((event) => (
      <EventCard
        key={event.id}
        id={event.id}
        title={event.title}
        date={event.event_date}
        description={event.description}
        image={event.poster_url}
      />
    ));
  }

  return (
    <section className={Styles.events}>
      {eventComponents}
    </section>
  );
}

export default UpcomingEventsEventsSection;
