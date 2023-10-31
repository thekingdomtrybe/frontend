import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TeamMember.module.scss';

function TeamMember({
  name,
  role,
  webp,
  jpeg,
  size,
}) {
  let className = Styles.image;
  className += ` ${Styles[size]}`;

  return (
    <div className={Styles['team-member']}>
      <div className={Styles['img-container']}>
        <picture className={className}>
          <source srcSet={webp} type="image/webp" />
          <img
            src={jpeg}
            alt=""
            loading="lazy"
          />
        </picture>
      </div>
      <div className={Styles.details}>
        <span className={Styles.name}>{name}</span>
        <span className={Styles.role}>{role}</span>
      </div>
    </div>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  webp: PropTypes.string.isRequired,
  jpeg: PropTypes.string.isRequired,
  size: PropTypes.string,
};

TeamMember.defaultProps = {
  size: 'normal',
};

export default TeamMember;
