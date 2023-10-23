import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LiveChat.module.scss';

function LiveChat({
  switchPage,
}) {
  return (
    <button
      type="button"
      className={Styles['live-chat']}
      onClick={() => switchPage(3)}
    >
      <h3>Live Chat</h3>
      <div className={Styles['chat-box']}>
        <img src="https://via.placeholder.com/50" alt="" />
        <input
          onClick={() => switchPage(3)}
          placeholder="Chat publicly as TheKingdomTrybe"
          disabled
        />
      </div>
    </button>
  );
}

LiveChat.propTypes = {
  switchPage: PropTypes.func.isRequired,
};

export default LiveChat;
