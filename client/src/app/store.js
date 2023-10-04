import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../product-list/productSlice.js';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});