import React from 'react';
import PropTypes from 'prop-types';
import Styles from './NeumorphicLoader.module.scss';

function NeumorphicLoader({
  size,
}) {
  return (
    <div
      className={Styles.loader}
      style={{
        fontSize: size,
      }}
    >
      <div className={Styles.preloader}>
        <div className={Styles['preloader-square']} />
        <div className={Styles['preloader-square']} />
        <div className={Styles['preloader-square']} />
        <div className={Styles['preloader-square']} />
      </div>
    </div>
  );
}

NeumorphicLoader.propTypes = {
  size: PropTypes.number.isRequired,
};

export default NeumorphicLoader;
