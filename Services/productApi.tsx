import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './baseApi';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery(baseUrl),
  endpoints: (build) => ({
    getAllProducts: build.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

// Auto-generated hooks
export const { useGetAllProductsQuery } = productApi;
