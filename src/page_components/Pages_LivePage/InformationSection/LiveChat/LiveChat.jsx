import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import Styles from './LiveChat.module.scss';

function LiveChat({
  isLiveNow,
}) {
  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${Styles['live-chat']} ${!isLiveNow && Styles.offline}`}>
      <Header />
      <Messages ref={messagesRef} scrollToBottom={scrollToBottom} />
      <Input scrollToBottom={scrollToBottom} isLiveNow={isLiveNow} />
    </div>
  );
}

LiveChat.propTypes = {
  isLiveNow: PropTypes.bool.isRequired,
};

export default LiveChat;
