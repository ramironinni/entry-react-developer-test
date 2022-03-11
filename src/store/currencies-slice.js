import { createSlice } from '@reduxjs/toolkit';

const initialCurrenciesState = {
    currencies: [],
};

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: initialCurrenciesState,
    reducers: {
        change(state, action) {},
    },
});

export const currenciesActions = currenciesSlice.actions;

export default currenciesSlice.reducer;
