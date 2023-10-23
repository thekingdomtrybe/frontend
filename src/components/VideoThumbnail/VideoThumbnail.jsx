import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './VideoThumbnail.module.scss';

function VideoThumbnail({
  title,
  id,
  cover,
}) {
  const url = `/watch?v=${id}`;

  return (
    <Link to={url} className={Styles['video-thumbnail']}>
      <div className={Styles['thumbnail-container']}>
        <img src={cover} alt="" />
        <div className={Styles['play-btn']}>
          <svg width="40" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7613 9.69163C22.3616 10.0109 22.8638 10.4875 23.214 11.0704C23.5642 11.6532 23.7492 12.3204 23.7492 13.0004C23.7492 13.6804 23.5642 14.3475 23.214 14.9304C22.8638 15.5133 22.3616 15.9899 21.7613 16.3091L5.74625 25.0179C3.1675 26.4204 0 24.5954 0 21.7104V4.29163C0 1.40413 3.1675 -0.419616 5.74625 0.981634L21.7613 9.69163Z" fill="var(--white)" />
          </svg>
        </div>
      </div>
      <div className={Styles['video-description']}>
        <span>{title}</span>
      </div>
    </Link>
  );
}

VideoThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default VideoThumbnail;
