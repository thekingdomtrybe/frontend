import React from 'react';
import PropTypes from 'prop-types';
import Styles from './AccountOption.module.scss';

function AccountOption({
  accountName,
  bankName,
  image,
  accountNumber,
  // availablity,
  currency,
}) {
  return (
    <div className={Styles['give-option']}>
      <img alt="" src={image} />
      <div className={Styles.details}>
        <div className={Styles['bank-name']}>{bankName}</div>
        <div className={Styles['account-number']}>{accountNumber}</div>
        <div className={Styles['account-name']}>{accountName}</div>
        <div className={Styles.currency}>{currency}</div>
        {/* <div className={Styles.availability}>{availablity}</div> */}
      </div>
    </div>
  );
}

AccountOption.propTypes = {
  accountName: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  // availablity: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default AccountOption;
