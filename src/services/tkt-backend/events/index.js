import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => '/api/v1/event',
    }),
    addEvent: builder.mutation({
      query: (body) => ({
        url: '/api/v1/event',
        method: 'POST',
        body,
      }),
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/api/v1/event/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetEventsQuery,
  useAddEventMutation,
  useDeleteEventMutation,
} = tktBackendSlice;
