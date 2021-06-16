import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from './Slices/cartSlice';
import { productApi } from '../Services/productApi';
import { orderApi } from '../Services/orderApi';
import { categoryApi } from '../Services/categoryApi';

const store = configureStore({
  reducer: {
    cart: cartItemsReducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      orderApi.middleware,
      categoryApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
