import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLiveStreamStatus: builder.query({
      query: () => '/api/v1/system_info',
      transformResponse: (response) => response.currently_live,
      transformErrorResponse: false,
      providesTags: ['liveStreamStatus'],
    }),
    setLiveStreamStatus: builder.mutation({
      query: (body) => ({
        url: '/api/v1/system_info',
        method: 'PATCH',
        body: { currently_live: body.status },
      }),
      invalidatesTags: ['liveStreamStatus'],
    }),
    getLiveStreamURL: builder.query({
      query: () => '/api/v1/system_info',
      transformResponse: (response) => response.youtube_live_url,
      providesTags: ['liveStreamURL'],
    }),
    updateLiveStreamUrl: builder.mutation({
      query: (body) => ({
        url: '/api/v1/system_info',
        method: 'PATCH',
        body: { youtube_live_url: body.url },
      }),
      invalidatesTags: ['liveStreamURL'],
    }),
  }),
});

export const {
  useGetLiveStreamStatusQuery,
  useGetLiveStreamURLQuery,
  useSetLiveStreamStatusMutation,
  useUpdateLiveStreamUrlMutation,
} = tktBackendSlice;
