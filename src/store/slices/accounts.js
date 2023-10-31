import { createSlice } from '@reduxjs/toolkit';
import images from '@/assets/images';

const initialState = [
  {
    accountName: 'Truth of Calvary Ministries',
    accountNumber: '2029090547',
    bankName: 'First Bank of Nigeria',
    currency: 'NGN',
    image: images.givePage.accounts.fbn,
    availability: 'Nigeria',
    copyTitle: 'Copy Account Number',
  },
  {
    accountName: 'Truth of Calvary Ministries',
    accountNumber: '2031301950',
    bankName: 'First Bank of Nigeria',
    image: images.givePage.accounts.fbn,
    currency: 'USD',
    availability: 'Nigeria',
    copyTitle: 'Copy Account Number',
  },
  {
    accountName: 'Truth of Calvary Ministries',
    accountNumber: '2031731506',
    bankName: 'First Bank of Nigeria',
    image: images.givePage.accounts.fbn,
    currency: 'GBP',
    availability: 'Nigeria',
    copyTitle: 'Copy Account Number',
  },
  {
    accountName: 'Truth of Calvary Ministries',
    accountNumber: '2962003096',
    bankName: 'Eco Bank',
    currency: 'NGN',
    image: images.givePage.accounts.ecobank,
    availability: 'Nigeria',
    copyTitle: 'Copy Account Number',
  },
  {
    accountName: 'Truth of Calvary Ministries',
    accountNumber: '1984639',
    bankName: 'Bank of Montreal',
    image: images.givePage.accounts.bankOfMontreal,
    currency: 'CAD',
    availability: 'Canada',
    copyTitle: 'Copy Account Number',
  },
  {
    accountName: 'Truth of Calvary Ministries',
    accountNumber: 'canadacalvary\n@gmail.com',
    bankName: 'Interac',
    image: images.givePage.accounts.interac,
    currency: '',
    availability: 'Canada',
    copyTitle: 'Copy Email Address',
  },
  {
    accountName: 'Truth of Calvary Ministries',
    accountNumber: 'olumideemmanuel02\n@gmail.com',
    bankName: 'Zelle',
    currency: '',
    image: images.givePage.accounts.zelle,
    availability: 'Global',
    copyTitle: 'Copy Email Address',
  },
];

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
});

export default accountsSlice;
