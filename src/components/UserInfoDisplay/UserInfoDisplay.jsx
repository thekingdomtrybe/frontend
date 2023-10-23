import React from 'react';
import PropTypes from 'prop-types';
import Styles from './UserInfoDisplay.module.scss';

function UserInfoDisplay({
  name,
  img,
  email,
}) {
  return (
    <div className={Styles['user-info']}>
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

UserInfoDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserInfoDisplay;
