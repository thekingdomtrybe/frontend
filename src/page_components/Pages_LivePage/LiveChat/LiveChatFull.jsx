import React from 'react';
import PropTypes from 'prop-types';
import LiveChatMessage from './LiveChatMessage';
import LiveChatHeader from './LiveChatHeader';
import LiveChatInput from './LiveChatInput';
import Styles from './LiveChatFull.module.scss';

function LiveChatFull({
  viewers,
  close,
}) {
  // get messages from firebase
  const messages = [
    {
      id: 1,
      author: 'John Doe',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 2,
      author: 'Peter Doe',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 3,
      author: 'Small Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 4,
      author: 'John Mike',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 5,
      author: 'Priscilla',
      message: 'There is no way that Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 6,
      author: 'Small Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 7,
      author: 'John Mike',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 8,
      author: 'Priscilla',
      message: 'There is no way that Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 9,
      author: 'Small Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 10,
      author: 'John Mike',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 11,
      author: 'Priscilla',
      message: 'There is no way that Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 13,
      author: 'Small Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 14,
      author: 'John Mike',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 15,
      author: 'Priscilla',
      message: 'There is no way that Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 16,
      author: 'Small Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 17,
      author: 'John Mike',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 18,
      author: 'Priscilla',
      message: 'There is no way that Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 19,
      author: 'Small Doe',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 20,
      author: 'John Mike',
      message: 'There is no way that happened. I was around all the while. I didn\'t see it',
    },
    {
      id: 21,
      author: 'Priscilla',
      message: 'There is no way that Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
  ];

  const liveChatMessageComponents = messages.map((message) => (
    <LiveChatMessage key={message.id} author={message.author} message={message.message} />
  ));

  return (
    <div className={Styles['live-chat-full']}>
      <LiveChatHeader viewers={viewers} close={close} />
      <ul className={Styles.messages}>
        {liveChatMessageComponents}
      </ul>
      <div className={Styles['live-chat-input']}>
        <LiveChatInput />
      </div>
    </div>
  );
}

LiveChatFull.propTypes = {
  viewers: PropTypes.number.isRequired,
  close: PropTypes.func,
};

LiveChatFull.defaultProps = {
  close: null,
};

export default LiveChatFull;
