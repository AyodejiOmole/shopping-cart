import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from '../features/shoppingCartSlice';

export default configureStore({
  reducer: {
    counter: shoppingCartReducer,
  }
})