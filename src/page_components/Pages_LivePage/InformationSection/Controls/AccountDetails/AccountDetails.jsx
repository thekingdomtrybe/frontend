import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AccountOption from '@/components/AccountOption/AccountOption';
import Styles from './AccountDetails.module.scss';

function AccountDetails({
  direction,
}) {
  const accounts = useSelector((state) => state.accounts);

  const giveOptions = accounts.map((option) => (
    <AccountOption
      key={option.accountNumber}
      accountName={option.accountName}
      accountNumber={option.accountNumber}
      bankName={option.bankName}
      image={option.image}
      availablity={option.availability}
      currency={option.currency}
      title={option.copyTitle}
    />
  ));

  const className = `${Styles.accounts} ${Styles[direction]}`;

  return (
    <div className={className}>
      {giveOptions}
    </div>
  );
}

AccountDetails.propTypes = {
  direction: PropTypes.string,
};

AccountDetails.defaultProps = {
  direction: 'vertical',
};

export default AccountDetails;
