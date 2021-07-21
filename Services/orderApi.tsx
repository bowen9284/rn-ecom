import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Order from '../Models/Order';
import { baseUrl } from './baseApi';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery(baseUrl),
  endpoints: (build) => ({
    addOrder: build.mutation<Order, Partial<Order>>({
      query: (body) => ({
        url: `orders`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

// Auto-generated hooks
export const { useAddOrderMutation } = orderApi;
