// src/store/CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.CartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.CartItems)); // ✅ Save to localStorage
    },
    removeItems: (state, action) => {
      state.CartItems = state.CartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.CartItems)); // ✅ Update localStorage
    },
    clearItems: (state) => {
      state.CartItems = [];
      localStorage.removeItem("cartItems"); // ✅ Clear localStorage
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
