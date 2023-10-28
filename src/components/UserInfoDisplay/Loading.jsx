import React from 'react';
import Styles from './Loading.module.scss';

function UserLoading() {
  return (
    <>
      <section className={Styles.loader}>
        <span className={Styles.pic} />
        <span className={Styles.details} />
      </section>
    </>
  );
}

export default UserLoading;
