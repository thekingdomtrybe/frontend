import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tktBackendSlice = createApi({
  reducerPath: 'tktBackend',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://89.116.229.8',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('user-token');
      if (token) {
        headers.set('Authorization', token);
      }
    },
  }),
  tagTypes: [
    'liveStreamStatus',
    'liveStreamURL',
    'email',
    'testimonies',
    'pastServices',
    'events',
    'volunteerGroups',
    'user',
  ],
  endpoints: () => ({
  }),
});

export default tktBackendSlice;
