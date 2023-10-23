import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './Video.module.scss';
import SVG from '../SVG/SVG';

function Video({
  id,
  title,
  minister,
  date,
  description,
  image,
}) {
  let videoDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  videoDate = videoDate.toLocaleDateString('en-US', options);

  return (
    <Link to={`/watch?v=${id}`} className={Styles.video}>
      <div className={Styles['video-thumbnail']}>
        <img src={image} alt="" />
        <div className={Styles['play-btn']}>
          <SVG icon="play-circle" color="var(--orange)" />
        </div>
      </div>
      <div className={Styles['video-details']}>
        <span className={Styles.date}>{videoDate}</span>
        <h3>{title}</h3>
        <p className={Styles.minister}>{minister}</p>
        {
          description.length > 0 && (
            <p className={Styles.description}>{description}</p>
          )
        }
      </div>
    </Link>
  );
}

Video.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  minister: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Video;
