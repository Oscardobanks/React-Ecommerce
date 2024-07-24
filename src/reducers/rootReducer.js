import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import cartSlice from '../actions/cartSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartSlice,
});

export default rootReducer;