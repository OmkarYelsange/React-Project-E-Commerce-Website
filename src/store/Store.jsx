import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice.jsx";

const appStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
export default appStore;
