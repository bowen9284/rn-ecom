import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from './Slices/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartItemsReducer,
  },
  middleware: [thunkMiddleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
