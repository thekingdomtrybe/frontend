import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TeamMember.module.scss';

function TeamMember({
  name,
  role,
  img,
  size,
}) {
  let className = Styles.image;
  className += ` ${Styles[size]}`;

  return (
    <div className={Styles['team-member']}>
      <picture className={className}>
        <source srcSet={`/images/${img}.webp`} type="image/webp" />
        <img
          src={`/images/${img}.jpg`}
          alt=""
          loading="lazy"
        />
      </picture>
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
  img: PropTypes.string.isRequired,
  size: PropTypes.string,
};

TeamMember.defaultProps = {
  size: 'normal',
};

export default TeamMember;
