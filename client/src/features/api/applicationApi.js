import { apiSlice } from "./apiSlice";

export const extendedApplicationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createGiftsApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/gifts",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    createSppApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/spp",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    createFadApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/fad",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    createCoursesApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/courses",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    createSsmApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/ssm",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    createFeeApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/fee",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    createFadApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/fad",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
    createFadApplication: builder.mutation({
      query: (credentials) => ({
        url: "/application/fad",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Application", id: "list" }],
    }),
  }),
});

export const {
  useCreateGiftsApplicationMutation,
  useCreateSppApplicationMutation,
  useCreateFadApplicationMutation,
  useCreateCoursesApplicationMutation,
  useCreateSsmApplicationMutation,
  useCreateFeeApplicationMutation,
} = extendedApplicationApiSlice;
