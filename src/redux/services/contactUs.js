
import { apiSlice } from '../features/apiSlice';
const USERS_URL = '/api/v1/contactus';

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    messagesList: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/list`,
        method: 'POST',
        body: data,
      }),
      
    }),

    messageDelete: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/delete`,
        method: 'POST',
        body: data,
      }),
      
    }),
  }),
});

export const { useMessagesListMutation, useMessageDeleteMutation } = contactApiSlice;
