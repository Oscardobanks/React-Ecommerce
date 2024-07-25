import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.count += 1;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index !== -1) {
        state.items.splice(index, 1);
        state.count -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;