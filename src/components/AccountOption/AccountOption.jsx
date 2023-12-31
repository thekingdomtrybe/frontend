import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import SVG from '../SVG/SVG';
import Styles from './AccountOption.module.scss';

function AccountOption({
  accountName,
  bankName,
  image,
  accountNumber,
  // availablity,
  title,
  currency,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    enqueueSnackbar('Copied to clipboard', { autoHideDuration: 1000 });
  };

  return (
    <div className={Styles['give-option']}>
      <div className={Styles['img-wrapper']}>
        <img alt="" src={image} />
      </div>
      <div className={Styles.details}>
        <div className={Styles['bank-name']}>{bankName}</div>
        <div className={Styles['account-number']}>{accountNumber}</div>
        <div className={Styles['account-name']}>{accountName}</div>
        <div className={Styles.currency}>{currency}</div>
      </div>
      <button
        title={title}
        type="button"
        onClick={copyToClipboard}
      >
        <SVG icon="clipboard" color="var(--white)" />
        <span className="placeholder-label">content</span>
      </button>
    </div>
  );
}

AccountOption.propTypes = {
  accountName: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // availablity: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default AccountOption;
