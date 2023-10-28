import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => '/api/v1/event',
      providesTags: ['events'],
    }),
    addEvent: builder.mutation({
      query: (body) => ({
        url: '/api/v1/event',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['events'],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/api/v1/event/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['events'],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useAddEventMutation,
  useDeleteEventMutation,
} = tktBackendSlice;
