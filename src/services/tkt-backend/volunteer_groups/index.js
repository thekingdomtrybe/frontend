import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteerGroups: builder.query({
      query: () => '/api/v1/volunteer_group',
    }),
    addVolunteerGroup: builder.mutation({
      query: (body) => ({
        url: '/api/v1/volunteer_group',
        method: 'POST',
        body,
      }),
    }),
    deleteVoluteerGroup: builder.mutation({
      query: (id) => ({
        url: `/api/v1/volunteer_group/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetVolunteerGroupsQuery,
  useAddVolunteerGroupMutation,
  useDeleteVoluteerGroupMutation,
} = tktBackendSlice;
