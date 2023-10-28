import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Styles from './LiveChatInput.module.scss';

function LiveChatInput() {
  // TODO: Take care of input value later
  const [inputValue, setInputValue] = useState('');

  const [showEmojiSelect, setShowEmojiSelect] = useState(false);
  const emojiSelectRef = useRef(null);
  const toggle = useRef(null);
  const navigate = useNavigate();

  const hideEmojiSelect = () => {
    if (!showEmojiSelect) return;
    setShowEmojiSelect(false);
    navigate(-1);
  };

  const toggleEmojiSelectVisible = () => {
    if (showEmojiSelect) {
      hideEmojiSelect();
      return;
    }
    setShowEmojiSelect(true);
    navigate('/live/chat/emoji');
  };

  useOnClickOutside(emojiSelectRef, (e) => {
    if (toggle.current.contains(e.target)) return;
    hideEmojiSelect();
  });

  return (
    <div className={Styles['live-chat-input-container']}>
      <div
        style={{ display: showEmojiSelect ? 'block' : 'none' }}
        ref={emojiSelectRef}
      >
        <Picker
          data={data}
          onEmojiSelect={(emoji) => setInputValue(inputValue + emoji.native)}
        />
      </div>
      <div className={Styles['live-chat-input']}>
        <input
          placeholder="Chat"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="button"
          ref={toggle}
          onClick={toggleEmojiSelectVisible}
        >
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default LiveChatInput;
