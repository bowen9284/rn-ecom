import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    items: [] as Product[],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);

      const prices = state.items.map((product) => product.price);

      state.totalPrice = prices.reduce((total, currentPrice) => {
        return total + currentPrice;
      });
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const updatedCart = state.items.filter(
        (cartItem: Product) => cartItem.id !== action.payload.id
      );
      state.items = updatedCart;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
