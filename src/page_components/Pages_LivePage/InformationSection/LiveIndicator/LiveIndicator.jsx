import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LiveIndicator.module.scss';

function LiveIndicator({
  viewers,
}) {
  return (
    <div className={Styles['live-indicator']}>
      <span className={Styles.indicator}>
        LIVE
        <div className={Styles.dot} />
      </span>
      <span className={Styles.viewers}>
        {viewers}
      </span>
    </div>
  );
}

LiveIndicator.propTypes = {
  viewers: PropTypes.number.isRequired,
};

export default LiveIndicator;
