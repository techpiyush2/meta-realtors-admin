import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import environment from "../environment";

export const propertySlice = createApi({
  reducerPath: "propertySlice",
  baseQuery: fetchBaseQuery({
    baseUrl: environment.baseUrl+ 'api/v1',
  }),

  endpoints: (builder) => ({
    getPropertyList: builder.mutation({
      query: (data) => ({
        url: `property/list`,
        method: 'POST',
        body: data,
      }),
    }),
    getPropertyDetails: builder.mutation({
      query: (data) => ({
        url: `property/details`,
        method: 'POST',
        body: data,
      }),
    }),
  
  }),
});

export const {
  useGetPropertyListMutation,
  useGetPropertyDetailsMutation,
} = propertySlice;
