import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://amittcsl-backend.vercel.app",
  }),
  tagTypes: ["Application", "Contact"],
  endpoints: (builder) => ({}),
});
