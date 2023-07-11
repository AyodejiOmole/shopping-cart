import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './slices/shoppingCartSlice';

export default configureStore({
  reducer: {
    cart: shoppingCartReducer,
  }
})