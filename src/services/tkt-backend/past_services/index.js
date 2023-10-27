import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPastService: builder.query({
      query: (id) => `/api/v1/sermon/${id}`,
    }),
    getPastServices: builder.query({
      query: () => '/api/v1/sermon',
    }),
    addPastService: builder.mutation({
      query: (body) => ({
        url: '/api/v1/sermon',
        method: 'POST',
        body: { sermon: body },
      }),
    }),
    deletePastService: builder.mutation({
      query: (id) => ({
        url: `/api/v1/sermon/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPastServiceQuery,
  useGetPastServicesQuery,
  useAddPastServiceMutation,
  useDeletePastServiceMutation,
} = tktBackendSlice;
