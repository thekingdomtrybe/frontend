import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ServiceInfo.module.scss';

function ServiceInfo({
  title,
  description,
}) {
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
};

ServiceInfo.defaultProps = {
  title: 'Sunday Service',
  description: `Join us this Sunday for a heartwarming
  gathering where we come together in unity to worship and build a stronger sense of community. Let the spirit of Sunday uplift your soul and deepen your connection with God. We welcome you to this enriching and joyful service.`,
};

export default ServiceInfo;
