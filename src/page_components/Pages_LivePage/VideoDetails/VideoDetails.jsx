import React from 'react';
import PropTypes from 'prop-types';
import Styles from './VideoDetails.module.scss';

function VideoDetails({
  title,
  date,
  viewers,
  hashtags,
}) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const hashtagString = hashtags.join(' ');

  return (
    <div className={Styles['video-details']}>
      <h1>
        <span className={Styles.title}>{title}</span>
        {' '}
        |
        {' '}
        <span className={Styles.date}>{formattedDate}</span>
      </h1>
      <div className={Styles.hashtags}>
        {hashtagString}
      </div>
      <div className={Styles['video-stats']}>
        <div className={Styles['video-viewers']}>
          {viewers}
          {' '}
          watching
        </div>
      </div>
    </div>
  );
}

VideoDetails.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  viewers: PropTypes.number,
  hashtags: PropTypes.arrayOf(PropTypes.string),
};

VideoDetails.defaultProps = {
  title: 'Sunday Service',
  date: '2020-01-01',
  viewers: 0,
  hashtags: ['#sunday', '#service', '#tkt', '#thekingdomtrybe'],
};

export default VideoDetails;
