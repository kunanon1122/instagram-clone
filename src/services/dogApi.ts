import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DOG_HOST_API } from "@/variables/API";

import type { PostDetail } from "@/constant/api";

export const dogApi = createApi({
  reducerPath: "dogApi",
  baseQuery: fetchBaseQuery({ baseUrl: DOG_HOST_API }),
  endpoints: (builder) => ({
    getDogs: builder.query<PostDetail[], void>({
      query: () => ({
        url: "/v1/images/search?page=1&has_breeds=false&limit=10",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDogsQuery } = dogApi;
