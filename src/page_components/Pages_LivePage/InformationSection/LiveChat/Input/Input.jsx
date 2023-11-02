import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { v4 as UUID } from 'uuid';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useAuthenticateUserQuery } from '@/services/tkt-backend/auth';
import images from '@/assets/images';
import UserLoading from './UserLoading/UserLoading';
import NoUser from './NoUser/NoUser';
import SVG from '@/components/SVG/SVG';
import Styles from './Input.module.scss';

function Input({
  scrollToBottom,
  isLiveNow,
}) {
  const {
    data: user,
    isLoading: isUserLoading,
  } = useAuthenticateUserQuery();

  const [inputValue, setInputValue] = useState('');
  const [showEmojiSelect, setShowEmojiSelect] = useState(false);
  const emojiSelectRef = useRef(null);
  const toggle = useRef(null);

  const hideEmojiSelect = () => {
    if (!showEmojiSelect) return;
    setShowEmojiSelect(false);
  };

  useOnClickOutside(emojiSelectRef, (e) => {
    if (toggle.current.contains(e.target)) return;
    hideEmojiSelect();
  });

  if (isUserLoading) return <UserLoading />;
  if (!user) return <NoUser />;

  const toggleEmojiSelectVisible = () => {
    if (showEmojiSelect) {
      hideEmojiSelect();
      return;
    }
    setShowEmojiSelect(true);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length) return;
    window.fireBase.messageSender.sendMessage({
      id: UUID(),
      date: Date.now(),
      author: `${user.first_name} ${user.last_name}`,
      message: inputValue,
      picture: user.picture_url,
    });
    setInputValue('');
    setTimeout(scrollToBottom, 500);
  };

  return (
    <div className={Styles['input-container']}>
      <div
        style={{ display: showEmojiSelect ? 'block' : 'none' }}
        className={Styles['emoji-select']}
        ref={emojiSelectRef}
      >
        <Picker
          data={data}
          emojiStyle="facebook"
          onEmojiSelect={(emoji) => setInputValue(inputValue + emoji.native)}
        />
      </div>
      <form
        className={Styles['input-form']}
        onSubmit={sendMessage}
      >
        <input
          placeholder="Say something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!isLiveNow}
        />
        <button
          type="button"
          ref={toggle}
          onClick={toggleEmojiSelectVisible}
          disabled={!isLiveNow}
        >
          <img src={images.livePage.emoji} alt="" />
          <span className="placeholder-label">content</span>
        </button>
        <button
          type="submit"
          disabled={!isLiveNow}
        >
          <SVG icon="send" color="var(--white)" />
          <span className="placeholder-label">content</span>
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  scrollToBottom: PropTypes.func.isRequired,
  isLiveNow: PropTypes.bool.isRequired,
};

export default Input;
