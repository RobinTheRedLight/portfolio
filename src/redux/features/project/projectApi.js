import { baseApi } from "../../api/baseApi";

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    projects: builder.query({
      query: () => ({
        url: "projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    project: builder.mutation({
      query: (data) => ({
        url: "projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["projects"],
    }),

    singleProject: builder.query({
      query: (id) => ({
        url: `projects/${id}`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),
  }),
});

export const { useProjectsQuery, useProjectMutation, useSingleProjectQuery } =
  projectApi;
