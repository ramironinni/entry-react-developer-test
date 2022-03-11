import { createSlice } from '@reduxjs/toolkit';

const initialCurrenciesState = {
    currencies: [],
};

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: initialCurrenciesState,
    reducers: {
        change(state, action) {
            state.currencies = state.currencies.map((currency) => {
                return {
                    label: currency.label,
                    symbol: currency.symbol,
                    selected:
                        currency.label === action.payload.label ? true : false,
                };
            });
        },
        store(state, action) {
            if (state.currencies.length > 0) {
                return;
            }

            state.currencies = action.payload.currencies.map((currency) => {
                return {
                    label: currency.label,
                    symbol: currency.symbol,
                    selected: currency.label === 'USD' ? true : false,
                };
            });
        },
    },
});

export const currenciesActions = currenciesSlice.actions;

export default currenciesSlice.reducer;
