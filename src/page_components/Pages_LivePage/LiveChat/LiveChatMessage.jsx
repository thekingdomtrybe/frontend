import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LiveChatMessage.module.scss';

function LiveChatMessage({
  author,
  message,
}) {
  return (
    <li className={Styles.message}>
      <img alt="" src="https://via.placeholder.com/30" />
      <div className={Styles['message-content']}>
        <span className={Styles.author}>{author}</span>
        <span className={Styles.content}>{message}</span>
      </div>
    </li>
  );
}

LiveChatMessage.propTypes = {
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default LiveChatMessage;
