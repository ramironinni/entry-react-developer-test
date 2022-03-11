import { createSlice } from '@reduxjs/toolkit';

const initialCurrenciesState = {
    currencies: [],
};

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: initialCurrenciesState,
    reducers: {
        change(state, action) {},
        store(state, action) {
            state.currencies = action.payload.currencies;
        },
    },
});

export const currenciesActions = currenciesSlice.actions;

export default currenciesSlice.reducer;
