import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonies: builder.query({
      query: () => '/api/v1/testimony/public',
      providesTags: ['testimonies'],
    }),
    sendTestimony: builder.mutation({
      query: (body) => ({
        url: '/api/v1/testimony',
        method: 'POST',
        body,
      }),
    }),
    updatePublicTestimonies: builder.mutation({
      query: (body) => ({
        url: '/api/v1/testimony/public',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['testimonies'],
    }),
  }),
});

export const {
  useGetTestimoniesQuery,
  useSendTestimonyMutation,
  useUpdatePublicTestimoniesMutation,
} = tktBackendSlice;
