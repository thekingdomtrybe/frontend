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
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
};

export default ServiceInfo;
