import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice.jsx";

const AppStore = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
export default AppStore;
