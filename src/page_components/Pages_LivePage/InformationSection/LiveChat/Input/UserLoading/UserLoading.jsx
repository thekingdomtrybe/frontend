import React from 'react';
import Styles from './UserLoading.module.scss';

function UserLoading() {
  return (
    <div className={Styles['user-loading']}>
      <span className={Styles.loader} />
      <p>Authenticating...</p>
    </div>
  );
}

export default UserLoading;
