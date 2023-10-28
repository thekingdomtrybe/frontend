import React from 'react';
import Styles from './Loading.module.scss';

function UserLoading() {
  return (
    <div className={Styles.loader}>
      <span className={Styles.pic} />
    </div>
  );
}

export default UserLoading;
