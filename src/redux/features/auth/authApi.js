import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (password) => ({
        url: "login",
        method: "POST",
        body: { password },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
