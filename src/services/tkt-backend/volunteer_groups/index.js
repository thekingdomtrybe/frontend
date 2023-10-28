import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteerGroups: builder.query({
      query: () => '/api/v1/volunteer_group',
      providesTags: ['volunteerGroups'],
    }),
    addVolunteerGroup: builder.mutation({
      query: (body) => ({
        url: '/api/v1/volunteer_group',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['volunteerGroups'],
    }),
    deleteVoluteerGroup: builder.mutation({
      query: (id) => ({
        url: `/api/v1/volunteer_group/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['volunteerGroups'],
    }),
  }),
});

export const {
  useGetVolunteerGroupsQuery,
  useAddVolunteerGroupMutation,
  useDeleteVoluteerGroupMutation,
} = tktBackendSlice;
