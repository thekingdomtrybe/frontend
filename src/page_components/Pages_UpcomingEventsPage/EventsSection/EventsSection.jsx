import React from 'react';
import EventCard from '@/components/Event/Event';
import Styles from './EventsSection.module.scss';

function UpcomingEventsEventsSection() {
  // get events from store or context
  const events = [
    {
      id: 1,
      date: 'Sunday, 12th July 2020',
      title: 'The Kingdom Trybe',
    },
    {
      id: 2,
      date: 'Sunday, 12th July 2020',
      title: 'The Kingdom Trybe',
    },
    {
      id: 3,
      date: 'Sunday, 12th July 2020',
      title: 'The Kingdom Trybe',
    },
    {
      id: 4,
      date: 'Sunday, 12th July 2020',
      title: 'The Kingdom Trybe',
    },
    {
      id: 5,
      date: 'Sunday, 12th July 2020',
      title: 'The Kingdom Trybe',
    },
    {
      id: 6,
      date: 'Sunday, 12th July 2020',
      title: 'The Kingdom Trybe',
    },
  ];

  const eventComponents = events.map((event) => (
    <EventCard
      key={event.id}
      id={event.id}
      title={event.title}
      date={event.date}
      image="https://via.placeholder.com/300"
    />
  ));

  return (
    <section className={Styles.events}>
      {eventComponents}
    </section>
  );
}

export default UpcomingEventsEventsSection;
