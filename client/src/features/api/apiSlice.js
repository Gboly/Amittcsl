import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: [""],
  endpoints: (builder) => ({}),
});

export const { useGetRequestsQuery, useSubmitRequestMutation } = apiSlice;

// Example: get all VC requests
// getRequests: builder.query({
//   query: () => "/requests",
// }),
// submitRequest: builder.mutation({
//   query: (formData) => ({
//     url: "/requests",
//     method: "POST",
//     body: formData,
//   }),
// }),
