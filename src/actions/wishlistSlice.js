import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  count: 0,
};

export const wishlistSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
      state.count += 1;
    },
    removeFromWishlist: (state, action) => {
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

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;