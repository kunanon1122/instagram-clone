import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CAT_HOST_API } from "@/variables/API";

import type { PostDetail } from "@/constant/api";

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({ baseUrl: CAT_HOST_API }),
  endpoints: (builder) => ({
    getCats: builder.query<PostDetail[], void>({
      query: () => ({
        url: "/v1/images/search?page=1&limit=10",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCatsQuery } = catApi;
