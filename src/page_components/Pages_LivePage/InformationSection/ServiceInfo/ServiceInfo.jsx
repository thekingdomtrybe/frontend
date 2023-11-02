import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ServiceInfo.module.scss';

function ServiceInfo({
  title,
  description,
  isLiveNow,
}) {
  if (!isLiveNow) {
    return (
      <div className={Styles.offline}>
        <h1>We are not live at the moment!</h1>
        <p>
          We&apos;ll be back on Sunday by the following times.
        </p>
        <ul>
          <li>
            <span className={Styles.country}>Nigeria : </span>
            <span>
              11:00 am.
            </span>
          </li>
          <li>
            <span className={Styles.country}>South Africa : </span>
            <span>
              12 noon.
            </span>
          </li>
          <li>
            <span className={Styles.country}>United Kingdom (GMT) : </span>
            <span>
              12 noon.
            </span>
          </li>
          <li>
            <span className={Styles.country}>United States (Houston) : </span>
            <span>
              9:00 am.
            </span>
          </li>
          <li>
            <span className={Styles.country}>United States (Atlanta) : </span>
            <span>
              10:00 am.
            </span>
          </li>
          <li>
            <span className={Styles.country}>Canada (Toronto) : </span>
            <span>
              10:00 am.
            </span>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={Styles['service-info']}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

ServiceInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isLiveNow: PropTypes.bool.isRequired,
};

ServiceInfo.defaultProps = {
  title: 'Sunday Service',
  description: `Join us this Sunday for a heartwarming
  gathering where we come together in unity to worship and build a stronger sense of community. Let the spirit of Sunday uplift your soul and deepen your connection with God. We welcome you to this enriching and joyful service.`,
};

export default ServiceInfo;
