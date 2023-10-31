import React from 'react';
import Styles from './Loading.module.scss';

function ProtectedRouteLoading() {
  return (
    <div className={Styles.loader}>
      <div className={Styles.overlay} />
      <span className={Styles.spinner} />
      <h1>Loading</h1>
    </div>
  );
}

export default ProtectedRouteLoading;
