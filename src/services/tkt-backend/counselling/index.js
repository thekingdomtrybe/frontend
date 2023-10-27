import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitCounsellingRequest: builder.mutation({
      query: (body) => ({
        url: '/api/v1/counselling',
        method: 'POST',
        body: {
          requester_first_name: body.firstName,
          requester_last_name: body.lastName,
          requester_phone: body.phone,
          request_description: body.requestBody,
          request_confidentiality: 'Private',
        },
      }),
    }),
  }),
});

export const {
  useSubmitCounsellingRequestMutation,
} = tktBackendSlice;
