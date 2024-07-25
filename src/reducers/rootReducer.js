import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import cartSlice from '../actions/cartSlice';
import wishListSlice from '../actions/wishlistSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartSlice,
  wishlist: wishListSlice
});

export default rootReducer;