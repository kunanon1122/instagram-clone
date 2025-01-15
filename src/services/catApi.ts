import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CAT_HOST_API } from "@/variables/API";

import type { PostDetail } from "@/constant/api";

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({ baseUrl: CAT_HOST_API }),
  endpoints: (builder) => ({
    getCats: builder.query<PostDetail[], number>({
      query: (page = 1) => ({
        url: `/v1/images/search?page=${page}&limit=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCatsQuery } = catApi;
