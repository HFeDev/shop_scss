import { configureStore } from "@reduxjs/toolkit";
import productModalSlice from "./product-modal/productModalSlice";
import cartSlice from "./shopping-cart/cartItemSlice";

export const store = configureStore({
  reducer: { productModal: productModalSlice, cart: cartSlice }
});
