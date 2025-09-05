import { apiSlice } from "./apiSlice";

export const extendedApplicationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    contactTheTeam: builder.mutation({
      query: (credentials) => ({
        url: "/contact",
        method: "POST",
        body: credentials,
        formData: true,
        credentials: "include",
      }),
      transformResponse: (response) => {
        return response;
      },
      invalidatesTags: [{ type: "Contact", id: "List" }],
    }),
  }),
});

export const { useContactTheTeamMutation } = extendedApplicationApiSlice;
