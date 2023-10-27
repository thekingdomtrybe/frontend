import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLiveStreamStatus: builder.query({
      query: () => '/api/v1/system_info',
      transformResponse: (response) => response.currently_live,
      transformErrorResponse: false,
    }),
    setLiveStreamStatus: builder.mutation({
      query: (body) => ({
        url: '/api/v1/system_info',
        method: 'PATCH',
        body: { currently_live: body.status },
      }),
    }),
    updateLiveStreamUrl: builder.mutation({
      query: (body) => ({
        url: '/api/v1/system_info',
        method: 'PATCH',
        body: { youtube_live_url: body.url },
      }),
    }),
  }),
});

export const {
  useGetLiveStreamStatusQuery,
  useSetLiveStreamStatusMutation,
  useUpdateLiveStreamUrlMutation,
} = tktBackendSlice;
