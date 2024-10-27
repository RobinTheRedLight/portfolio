import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://portfolio-backend-one-gamma.vercel.app",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["projects", "skills", "project", "blogs", "blog"],
  endpoints: () => ({}),
});
