import React from 'react';
import PropTypes from 'prop-types';
import SVG from '@/components/SVG/SVG';
import Styles from './Testimony.module.scss';

function Testimony({
  content,
  author,
}) {
  return (
    <div className={Styles.testimony}>
      <div className={Styles.svg}>
        <SVG icon="quote-left" color="var(--white)" width={60} />
      </div>
      <p>
        {content}
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
