import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tktBackendSlice = createApi({
  reducerPath: 'tktBackend',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://thekingdomtrybe.com',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('user-token');
      if (token) {
        headers.set('Authorization', token);
      }
    },
  }),
  endpoints: () => ({
  }),
});

export default tktBackendSlice;
