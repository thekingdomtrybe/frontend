import React from 'react';
import Styles from './Loading.module.scss';

function PageLoading() {
  return (
    <div className={Styles.loader}>
      <span className={Styles.spinner} />
    </div>
  );
}

export default PageLoading;
