import { apiSlice } from '../features/apiSlice';
const USERS_URL = '/api/v1/users';

export const userApiSlice
 = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    list: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/users-list`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useListMutation, useLoginMutation } = userApiSlice
;
