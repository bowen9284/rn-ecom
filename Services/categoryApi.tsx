import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './baseApi';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery(baseUrl),
  endpoints: (build) => ({
    getAllCategories: build.query<Category[], void>({
      query: () => 'categories',
    }),
  }),
});

// Auto-generated hooks
export const { useGetAllCategoriesQuery } = categoryApi;
