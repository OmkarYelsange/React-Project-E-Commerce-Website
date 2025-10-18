import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    CartItems: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.CartItems.push(action.payload);
    },
    removeItems: (state, action) => {
      state.CartItems.pop();
    },
    clearItems: (state, action) => {
      state.CartItems.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = CartSlice.actions;
export default CartSlice.reducer;
