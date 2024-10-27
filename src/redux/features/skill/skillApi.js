import { baseApi } from "../../api/baseApi";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    skills: builder.query({
      query: () => ({
        url: "skills",
        method: "GET",
      }),
      providesTags: ["skills"],
    }),

    skill: builder.mutation({
      query: (data) => ({
        url: "skills",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skills"],
    }),
  }),
});

export const { useSkillMutation, useSkillsQuery } = skillApi;
