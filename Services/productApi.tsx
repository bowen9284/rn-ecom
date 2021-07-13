import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './baseApi';

type ProductReponse = Product[];

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery(baseUrl),
  endpoints: (build) => ({
    getAllProducts: build.query<ProductReponse, void>({
      query: () => 'products',
      transformResponse: ((response: ProductReponse) => {
          response.forEach((product: Product) => {
           product.quantity = 1;
        });
        return response;
      })
    }),
  }),
});

// Auto-generated hooks
export const { useGetAllProductsQuery } = productApi;