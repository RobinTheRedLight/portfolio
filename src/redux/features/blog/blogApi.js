import { baseApi } from "../../api/baseApi";

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    blogs: builder.query({
      query: () => ({
        url: "blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    blog: builder.mutation({
      query: (data) => ({
        url: "blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),

    singleBlog: builder.query({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
});

export const { useBlogsQuery, useBlogMutation, useSingleBlogQuery } = blogApi;
