import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminEmailAddresses: builder.query({
      query: () => '/api/v1/system_info',
      transformResponse: (response) => ({
        prayerRequestRecipientEmail: response.prayer_recipient_email,
        testimonyRecipientEmail: response.testimony_recipient_email,
      }),
    }),
    updatePrayerRequestRecipientEmail: builder.mutation({
      query: (body) => ({
        url: '/api/v1/system_info',
        method: 'PATCH',
        body: { prayer_recipient_email: body.prayerRequestsRecipientEmail },
      }),
    }),
    updateTestimonyRecipientEmail: builder.mutation({
      query: (body) => ({
        url: '/api/v1/system_info',
        method: 'PATCH',
        body: { testimony_recipient_email: body.testimoniesRecipientEmail },
      }),
    }),
  }),
});

export const {
  useGetAdminEmailAddressesQuery,
  useUpdatePrayerRequestRecipientEmailMutation,
  useUpdateTestimonyRecipientEmailMutation,
} = tktBackendSlice;
