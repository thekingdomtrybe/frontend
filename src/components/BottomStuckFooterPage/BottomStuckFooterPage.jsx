import React from 'react';
import PropTypes from 'prop-types';
import Styles from './BottomStuckFooterPage.module.scss';

function BottomStuckFooterPage({
  top,
  footer,
}) {
  return (
    <div className={Styles['bottom-stuck-footer-page']}>
      <div className={Styles.top}>
        {top}
      </div>
      <div className={Styles.footer}>
        {footer}
      </div>
    </div>
  );
}

BottomStuckFooterPage.propTypes = {
  top: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default BottomStuckFooterPage;
