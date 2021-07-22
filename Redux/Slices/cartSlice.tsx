import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../../Models/Product';

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    items: [] as Product[],
    totalPrice: 0,
    cartSize: 0,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartSize += 1;

      const addedItem = state.items.find(
        (cartItem: Product) => cartItem.id === action.payload.id
      );

      if (addedItem === undefined) {
        state.items.push(action.payload);
      } else {
        addedItem.quantity += 1;
      }

      const prices = state.items.map(
        (product) => product.price * product.quantity
      );

      state.totalPrice = prices.reduce(
        (total, currentPrice) => total + currentPrice
      );
    },

    removeFromCart: (state, action: PayloadAction<Product>) => {
      const updatedCart = state.items.filter(
        (cartItem: Product) => cartItem.id !== action.payload.id
      );

      state.cartSize = updatedCart.reduce(
        (total, { quantity }) => total + quantity,
        0
      );
      state.items = updatedCart;
    },

    clearCart: (state) => {
      state.items = [];
      state.cartSize = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
