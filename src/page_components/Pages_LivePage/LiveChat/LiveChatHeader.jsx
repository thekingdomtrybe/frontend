import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LiveChatHeader.module.scss';
import SVG from '@/components/SVG/SVG';

function LiveChatHeader({
  viewers,
  close,
}) {
  return (
    <div className={Styles.header}>
      <div className={Styles['heading-text']}>
        <h3>Live chat</h3>
        <p>
          All messages
          {' '}
          <span className={Styles['view-count']}>
            <SVG icon="eye" />
            {' '}
            {viewers}
          </span>
        </p>
      </div>
      {
        close && (
          <div>
            <button type="button" onClick={close}>
              <SVG icon="close" />
            </button>
          </div>
        )
      }
    </div>
  );
}

LiveChatHeader.propTypes = {
  viewers: PropTypes.number.isRequired,
  close: PropTypes.func,
};

LiveChatHeader.defaultProps = {
  close: null,
};

export default LiveChatHeader;
