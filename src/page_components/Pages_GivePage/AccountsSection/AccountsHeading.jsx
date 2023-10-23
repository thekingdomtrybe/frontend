import React from 'react';
import Styles from './AccountsHeading.module.scss';

function GiveAccountsHeading() {
  return (
    <div className={Styles.heading}>
      <h2>
        Accounts
      </h2>
      <p>Make transfers to our bank accounts or via our mobile wallet options.</p>
    </div>
  );
}

export default GiveAccountsHeading;
