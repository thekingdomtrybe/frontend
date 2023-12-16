import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitCounsellingRequest: builder.mutation({
      query: (body) => ({
        url: '/api/v1/counselling',
        method: 'POST',
        body: {
          first_name: body.firstName,
          last_name: body.lastName,
          phone: body.phoneNumber,
          description: body.concern,
          contact: body.contactMethod,
          email: body.email,
          comments: body.additionalComments,
          gender: body.gender,
        },
      }),
    }),
  }),
});

export const {
  useSubmitCounsellingRequestMutation,
} = tktBackendSlice;
