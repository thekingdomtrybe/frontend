import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SocialMediaLink.module.scss';

function SocialMediaLink({
  href,
  svg,
  variant,
}) {
  let className = Styles.link;
  if (variant === 'blue') className += ` ${Styles.blue}`;

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {svg}
    </a>
  );
}

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  svg: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

SocialMediaLink.defaultProps = {
  variant: '',
};

export default SocialMediaLink;
