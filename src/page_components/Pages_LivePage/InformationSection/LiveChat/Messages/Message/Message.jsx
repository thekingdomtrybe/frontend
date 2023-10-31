import React from 'react';
import PropTypes from 'prop-types';
import { useAuthenticateUserQuery } from '@/services/tkt-backend/auth';
import SVG from '@/components/SVG/SVG';
import Styles from './Message.module.scss';

function Message({
  id,
  author,
  message,
  picture,
  deleteMessage,
  togglePinMessage,
  pinned,
  parentStyles,
}) {
  const {
    data: user,
  } = useAuthenticateUserQuery();

  const className = pinned ? `${Styles.message} ${parentStyles.pinned}` : Styles.message;

  return (
    <li className={className}>
      <div className={parentStyles.pin}>
        <SVG icon="pin" color="var(--dark)" width={22} />
        <span>Pinned Message</span>
      </div>
      <img alt="" src={picture} />
      <div className={Styles['message-content']}>
        <span className={Styles.author}>{author}</span>
        <span className={Styles.content}>{message}</span>
        {
          user && user.role === 'admin' && (
            <div className={Styles['admin-controls']}>
              <button type="button" onClick={() => deleteMessage(id)}>
                <SVG icon="trash" color="var(--white)" width={18} />
              </button>
              <button type="button" onClick={() => togglePinMessage(id)}>
                <SVG icon="pin" color="var(--white)" width={28} />
              </button>
            </div>
          )
        }
      </div>
    </li>
  );
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  togglePinMessage: PropTypes.func.isRequired,
  parentStyles: PropTypes.shape({
    pinned: PropTypes.string,
    pin: PropTypes.string,
  }).isRequired,
  pinned: PropTypes.bool,
};

Message.defaultProps = {
  pinned: false,
};

export default Message;
