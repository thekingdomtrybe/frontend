import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Event.module.scss';

function EventCard({
  id,
  title,
  date,
  image,
}) {
  return (
    <div className={Styles.event}>
      <img src={image} alt={id} />
      <div className={Styles['event-details']}>
        <span className={Styles.date}>{date}</span>
        <h3 className={Styles.title}>{title}</h3>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default EventCard;
