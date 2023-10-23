import React from 'react';
import PropTypes from 'prop-types';
import Styles from './CharacterCount.module.scss';

function CharacterCount({
  maxChars,
  charsLeft,
}) {
  return (
    <p className={Styles['character-count']}>
      {charsLeft}
      /
      {maxChars}
      {' '}
      characters left
    </p>
  );
}

CharacterCount.propTypes = {
  maxChars: PropTypes.number.isRequired,
  charsLeft: PropTypes.number.isRequired,
};

export default CharacterCount;
