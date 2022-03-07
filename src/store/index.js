import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './cart-slice';

const store = configureStore({ reducer: cartSliceReducer });

export default store;
