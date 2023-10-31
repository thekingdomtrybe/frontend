import React from 'react';
import PropTypes from 'prop-types';
import LiveIndicator from './LiveIndicator/LiveIndicator';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import Controls from './Controls/Controls';
import LiveChat from './LiveChat/LiveChat';
import Styles from './InformationSection.module.scss';

function LiveStreamInformationSection({
  viewers,
}) {
  return (
    <section className={Styles['information-section']}>
      <LiveIndicator viewers={viewers} />
      <ServiceInfo />
      <Controls />
      <LiveChat />
    </section>
  );
}

LiveStreamInformationSection.propTypes = {
  viewers: PropTypes.number,
};

LiveStreamInformationSection.defaultProps = {
  viewers: 0,
};

export default LiveStreamInformationSection;
