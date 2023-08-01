
import { apiSlice } from '../features/apiSlice';
const USERS_URL = '/api/v1/blog';

export const blogApiSlice
 = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    blogList: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/list`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useBlogListMutation } = blogApiSlice;
