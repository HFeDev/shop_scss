import { createSlice } from "@reduxjs/toolkit";

const productModalSlice = createSlice({
  name: "productModal",
  initialState: { value: null },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    remove: (state, action) => {
      state.value = null;
    }
  }
});

const { reducer, actions } = productModalSlice;

export const { set, remove } = actions;

export default reducer;
