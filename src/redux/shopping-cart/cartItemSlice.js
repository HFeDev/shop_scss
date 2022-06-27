import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
  name: "cartSlice",
  initialState: { cart: [] },
  reducers: {
    addCart: (state, action) => {
      const newItem = action.payload;

      // duplicate trả về cái item trùng nhau khi mới thêm vào cart
      const duplicate = state.cart?.filter(
        (e) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      );

      if (duplicate?.length > 0) {
        console.log("trùng");
        // giỏ hàng có item trùng
        state.cart = state.cart.filter(
          (e) =>
            e.slug !== newItem.slug ||
            e.size !== newItem.size ||
            e.color !== newItem.color
        );
        state.cart = [
          ...state.cart,
          {
            id: duplicate[0].id,
            color: newItem.color,
            size: newItem.size,
            slug: newItem.slug,
            price: newItem.price,
            quantity: duplicate[0].quantity + newItem.quantity
          }
        ];
      } else {
        console.log("không trùng");
        // giỏ hàng không có item trùng
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            id:
              state.cart.length > 0
                ? state.cart[state.cart.length - 1].id + 1
                : 1
          }
        ];
      }
    },
    remove: (state, action) => {
      let newItem = action.payload;
      state.cart = state.cart.filter(
        (e) =>
          e.slug !== newItem.slug ||
          e.size !== newItem.size ||
          e.color !== newItem.color
      );
    },
    update: (state, action) => {
      const newItem = action.payload;
      const check_duplicates = state.cart.filter(
        (e) =>
          e.slug === newItem.slug &&
          e.color === newItem.color &&
          e.size === newItem.size
      );

      if (check_duplicates) {
        state.cart = state.cart.filter(
          (e) =>
            e.slug !== newItem.slug ||
            e.color !== newItem.color ||
            e.size !== newItem.size
        );

        state.cart = [
          ...state.cart,
          {
            id: check_duplicates[0].id,
            color: newItem.color,
            size: newItem.size,
            slug: newItem.slug,
            price: newItem.price,
            quantity: newItem.quantity
          }
        ];
      }
    }
  }
});

const { actions, reducer } = cartSlide;

export const { remove, addCart, update } = actions;

export default reducer;
