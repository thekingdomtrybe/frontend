import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitPrayerRequest: builder.mutation({
      query: (body) => ({
        url: '/api/v1/prayer_request',
        method: 'POST',
        body: {
          ...body,
          request_confidentiality: 'Private',
        },
      }),
    }),
  }),
});

export const {
  useSubmitPrayerRequestMutation,
} = tktBackendSlice;
