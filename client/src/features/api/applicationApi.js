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
  }),
});

export const { useCreateGiftsApplicationMutation } =
  extendedApplicationApiSlice;
