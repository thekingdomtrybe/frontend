import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LiveIndicator.module.scss';

function LiveIndicator({
  viewers,
  isLiveNow,
}) {
  return (
    <div className={`${Styles['live-indicator']} ${!isLiveNow && Styles.offline}`}>
      <span className={Styles.indicator}>
        {isLiveNow && 'LIVE'}
        {!isLiveNow && 'OFFLINE'}
        {isLiveNow && <div className={Styles.dot} />}
      </span>
      <span className={Styles.viewers}>
        {viewers}
      </span>
    </div>
  );
}

LiveIndicator.propTypes = {
  viewers: PropTypes.number.isRequired,
  isLiveNow: PropTypes.bool.isRequired,
};

export default LiveIndicator;
