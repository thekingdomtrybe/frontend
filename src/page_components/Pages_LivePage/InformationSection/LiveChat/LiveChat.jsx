import React, { useRef } from 'react';
import Header from './Header/Header';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import Styles from './LiveChat.module.scss';

function LiveChat() {
  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={Styles['live-chat']}>
      <Header />
      <Messages ref={messagesRef} scrollToBottom={scrollToBottom} />
      <Input scrollToBottom={scrollToBottom} />
    </div>
  );
}

export default LiveChat;
