import { configureStore } from '@reduxjs/toolkit';
import cartSliceReducer from './cart-slice';
import currenciesSliceReducer from './currencies-slice';

const store = configureStore({
    reducer: { cart: cartSliceReducer, currencies: currenciesSliceReducer },
});

export default store;
