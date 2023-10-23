import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SocialMediaLink.module.scss';

function SocialMediaLink({
  href,
  svg,
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={Styles.link}>
      {svg}
    </a>
  );
}

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  svg: PropTypes.node.isRequired,
};

export default SocialMediaLink;
