import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SVG from '../SVG/SVG';
import Styles from './Video.module.scss';

function Video({
  id,
  title,
  minister,
  date,
  image,
  flow,
}) {
  let videoDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  videoDate = videoDate.toLocaleDateString('en-US', options);

  if (flow === 'auto') {
    return (
      <Link to={`/watch?v=${id}`} className={Styles.video}>
        <div className={Styles['video-thumbnail']}>
          <img src={image} alt="" />
        </div>
        <div className={Styles['video-details']}>
          <span className={Styles.date}>{videoDate}</span>
          <h3>{title}</h3>
          <p className={Styles.minister}>{minister}</p>
        </div>
      </Link>
    );
  }

  if (flow === 'horizontal') {
    return (
      <Link to={`/watch?v=${id}`} className={Styles['horizontal-video']}>
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
        </div>
      </Link>
    );
  }

  return <></>;
}

Video.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  minister: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  flow: PropTypes.string,
};

Video.defaultProps = {
  flow: 'auto',
};

export default Video;
