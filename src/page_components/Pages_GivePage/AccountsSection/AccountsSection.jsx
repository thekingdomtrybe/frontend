import React from 'react';
import { useSelector } from 'react-redux';
import AccountOption from '@/components/AccountOption/AccountOption';
import Styles from './AccountsSection.module.scss';

function GiveAccountsSection() {
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

  return (
    <section className={Styles.accounts}>
      {giveOptions}
    </section>
  );
}

export default GiveAccountsSection;
