
import { apiSlice } from '../features/apiSlice';
const USERS_URL = '/api/v1/blog';

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    blogList: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/list`,
        method: 'POST',
        body: data,
      }),
      
    }),
    blogCreate: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/create`,
        method: 'POST',
        body: data,
      }),
      
    }),
    blogUpload: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/uploadImage`,
        method: 'POST',
        body: data,
      }),
      
    }),
    blogDelete: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/delete`,
        method: 'POST',
        body: data,
      }),
      
    }),
  }),
});

export const { useBlogListMutation, useBlogCreateMutation, useBlogUploadMutation, useBlogDeleteMutation } = blogApiSlice;
