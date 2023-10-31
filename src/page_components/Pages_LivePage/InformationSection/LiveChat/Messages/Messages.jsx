import React, { forwardRef, useEffect, useState } from 'react';
import Message from './Message/Message';
import Styles from './Messages.module.scss';

function Msgs(_, ref) {
  const [messages, setMessages] = useState([]);

  const { current: messageList } = ref;

  useEffect(() => {
    const scrollToBottom = () => {
      if (!messageList) return;
      messageList.scrollTo({
        top: messageList.scrollHeight,
        behavior: 'smooth',
      });
    };

    window.fireBase.messageListener.listenToMessages((messages) => {
      let messagesArray = Object.values(messages);
      messagesArray = messagesArray.sort((a, b) => a.date - b.date);
      setMessages(messagesArray);
      scrollToBottom();
    });
  }, [messageList]);

  const togglePinMessage = (id) => {
    const message = messages.find((message) => message.id === id);
    if (message.pinned) window.fireBase.messageControls.unpinMessage(message);
    else window.fireBase.messageControls.pinMessage(message);
  };

  const deleteMessage = (id) => {
    window.fireBase.messageControls.deleteMessage(id);
  };

  let isPinnedAlready = false;
  const messageElements = messages.map((message) => {
    if (message.pinned) {
      if (isPinnedAlready) {
        return (
          <Message
            id={message.id}
            key={message.id}
            author={message.author}
            message={message.message}
            picture={message.picture}
            pinned={false}
            deleteMessage={deleteMessage}
            togglePinMessage={togglePinMessage}
            parentStyles={Styles}
          />
        );
      }
      isPinnedAlready = true;
    }
    return (
      <Message
        id={message.id}
        key={message.id}
        author={message.author}
        message={message.message}
        picture={message.picture}
        pinned={message.pinned}
        deleteMessage={deleteMessage}
        togglePinMessage={togglePinMessage}
        parentStyles={Styles}
      />
    );
  });

  return (
    <ul className={Styles.messages} ref={ref}>
      {messageElements}
    </ul>
  );
}

const Messages = forwardRef(Msgs);
export default Messages;
