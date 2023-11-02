import React from 'react';
import PropTypes from 'prop-types';
import LiveIndicator from './LiveIndicator/LiveIndicator';
import ServiceInfo from './ServiceInfo/ServiceInfo';
import Controls from './Controls/Controls';
import LiveChat from './LiveChat/LiveChat';
import Styles from './InformationSection.module.scss';

function LiveStreamInformationSection({
  viewers,
  isLiveNow,
}) {
  return (
    <section className={Styles['information-section']}>
      <LiveIndicator isLiveNow={isLiveNow} viewers={viewers} />
      <ServiceInfo isLiveNow={isLiveNow} />
      <Controls isLiveNow={isLiveNow} />
      <LiveChat isLiveNow={isLiveNow} />
    </section>
  );
}

LiveStreamInformationSection.propTypes = {
  viewers: PropTypes.number,
  isLiveNow: PropTypes.bool.isRequired,
};

LiveStreamInformationSection.defaultProps = {
  viewers: 0,
};

export default LiveStreamInformationSection;
