import React from 'react';
import AccountOption from '@/components/AccountOption/AccountOption';
import Styles from './AccountDetails.module.scss';

function AccountDetails() {
  // move this date to context
  const options = [
    {
      accountName: 'Truth of Calvary Ministries',
      accountNumber: '2029090547',
      bankName: 'First Bank of Nigeria',
      currency: 'NGN',
      image: 'https://via.placeholder.com/50',
      availability: 'Nigeria',
    },
    {
      accountName: 'Truth of Calvary Ministries',
      accountNumber: '2031301950',
      bankName: 'First Bank of Nigeria',
      currency: 'USD',
      image: 'https://via.placeholder.com/50',
      availability: 'Nigeria',
    },
    {
      accountName: 'Truth of Calvary Ministries',
      accountNumber: '2031731506',
      bankName: 'First Bank of Nigeria',
      currency: 'GBP',
      image: 'https://via.placeholder.com/50',
      availability: 'Nigeria',
    },
    {
      accountName: 'Truth of Calvary Ministries',
      accountNumber: '2962003096',
      bankName: 'Eco Bank',
      currency: 'NGN',
      image: 'https://via.placeholder.com/50',
      availability: 'Nigeria',
    },
    {
      accountName: 'Truth of Calvary Ministries',
      accountNumber: '1984639',
      bankName: 'Bank of Montreal',
      currency: 'CAD',
      image: 'https://via.placeholder.com/50',
      availability: 'Canada',
    },
    {
      accountName: 'Truth of Calvary Ministries',
      accountNumber: 'canadacalvary@gmail.com',
      bankName: 'Interac',
      currency: '',
      image: 'https://via.placeholder.com/50',
      availability: 'Canada',
    },
    {
      accountName: 'Truth of Calvary Ministries',
      accountNumber: 'olumideemmanuel02\n@gmail.com',
      bankName: 'Zelle',
      currency: '',
      image: 'https://via.placeholder.com/50',
      availability: 'Global',
    },
  ];

  const giveOptions = options.map((option) => (
    <AccountOption
      key={option.accountNumber}
      accountName={option.accountName}
      accountNumber={option.accountNumber}
      bankName={option.bankName}
      image={option.image}
      availablity={option.availability}
      currency={option.currency}
    />
  ));

  return (
    <div className={Styles.accounts}>
      {giveOptions}
    </div>
  );
}

export default AccountDetails;
