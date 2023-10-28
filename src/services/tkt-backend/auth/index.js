import tktBackendSlice from '@/services/tkt-backend';

export default tktBackendSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserProfile: builder.mutation({
      query: (body) => ({
        url: '/api/v1/update_user',
        method: 'PATCH',
        body: {
          user: {
            first_name: body.firstName, last_name: body.lastName, image: body.image,
          },
        },
      }),
      invalidatesTags: ['user'],
      transformErrorResponse: (response) => response?.data?.errors || response || 'An error occured!',
    }),
    updateUserPassword: builder.mutation({
      query: (body) => ({
        url: '/api/v1/update_user_password',
        method: 'PATCH',
        body: {
          user: {
            password: body.password,
          },
        },
      }),
      transformErrorResponse: (response) => response?.data?.errors || response || 'An error occured!',
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body: { user: { email: body.email, password: body.password } },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      transformResponse: (response, meta) => {
        const authorizationHeader = meta.response.headers.get('Authorization');
        localStorage.setItem('user-token', authorizationHeader);
        return response.user;
      },
      transformErrorResponse: (response) => response.data?.errors || 'An error occured!',
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        body: {
          user: {
            first_name: body.firstName,
            last_name: body.lastName,
            email: body.email,
            password: body.password,
          },
        },
      }),
      transformErrorResponse: (response) => response.data.errors[0],
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: '/reset',
        method: 'POST',
        body: {
          user: {
            email: body.email,
          },
        },
        responseHandler: (response) => response.text(),
      }),
      transformErrorResponse: (response) => {
        if (response.status === 500) return 'Internal server error';
        return 'Something went wrong';
      },
    }),
    updatePassword: builder.mutation({
      query: (body) => ({
        url: '/reset',
        method: 'PUT',
        body: {
          user: {
            password: body.password,
            password_confirmation: body.passwordConfirmation,
            reset_password_token: body.resetPasswordToken,
          },
        },
        responseHandler: (response) => response.text(),
      }),
      // this is a workaround for the fact that the backend returns a 422
      // for any error at all without the appropriate message,
      // luckily, the only possible errors that could occur here
      // are "password too short" and "expired token"
      // "password too short" will be handled from the client side leaving
      // us with only one possible error - expired token.
      // ***THIS IS MEANT TO BE TEMPORARY (hopefully)***
      // Also, TODO: After password reset (+ update), log user in...hopefully
      transformErrorResponse:
        (response) => (
          response.status === 422 ? 'Your reset password token has expired'
            : 'Something went wrong'
        ),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'DELETE',
      }),
      transformResponse: (response) => {
        localStorage.removeItem('user-token');
        return response.message;
      },
      invalidatesTags: ['user'],
    }),
    googleSignIn: builder.mutation({
      query: (body) => ({
        url: '/auth/google_oauth2/callback',
        method: 'POST',
        body: {
          code: body.code,
        },
      }),
      transformResponse: (response, meta) => {
        const authorizationHeader = meta.response.headers.get('Authorization');
        localStorage.setItem('user-token', authorizationHeader);
        return response;
      },
      transformErrorResponse: (response) => response.data.error,
    }),
    authenticateUser: builder.query({
      query: () => '/current_user',
      transformErrorResponse: (response) => {
        localStorage.removeItem('user-token');
        return response.data;
      },
      providesTags: ['user'],
    }),
  }),
});

export const {
  useUpdateUserProfileMutation,
  useLoginMutation,
  useSignupMutation,
  useResetPasswordMutation,
  useUpdatePasswordMutation,
  useLogoutMutation,
  useGoogleSignInMutation,
  useAuthenticateUserQuery,
  useUpdateUserPasswordMutation,
} = tktBackendSlice;
