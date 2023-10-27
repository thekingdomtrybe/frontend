import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Testimony.module.scss';
import SVG from '@/components/SVG/SVG';

function Testimony({
  content,
  author,
}) {
  return (
    <div className={Styles.testimony}>
      <p>
        &ldquo;
        {content}
        &rdquo;
      </p>
      <span>
        <SVG icon="logo" />
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
