import React from 'react';
import Styles from './NoUser.module.scss';

function NoUser() {
  return (
    <div className={Styles['no-user']}>
      <p>Please log in to join the live chat!</p>
    </div>
  );
}

export default NoUser;
