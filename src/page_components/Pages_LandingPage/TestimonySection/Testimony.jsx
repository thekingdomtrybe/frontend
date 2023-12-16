import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Testimony.module.scss';

function Testimony({
  content,
  author,
}) {
  return (
    <div className={Styles.testimony}>
      <p>
        {content}
      </p>
      <span>
        {author}
      </span>
    </div>
  );
}

Testimony.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Testimony;
