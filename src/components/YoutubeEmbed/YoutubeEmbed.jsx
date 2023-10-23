import React from 'react';
import PropTypes from 'prop-types';
import Styles from './YoutubeEmbed.module.scss';

function YoutubeEmbed({
  embedId,
}) {
  return (
    <div className={Styles.embed}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
