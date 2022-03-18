import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cart: [
        {
            id: 'ps-5',
            amount: 1,
            selectedAttributes: { color: 'Green', capacity: '512G' },
        },
        {
            id: 'xbox-series-s',
            amount: 2,
            selectedAttributes: { color: 'Cyan', capacity: '1T' },
        },
    ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemToUpdateIndex === -1) {
                state.cart.push({
                    id: action.payload.id,
                    amount: 1,
                    selectedAttributes: action.payload.selectedAttributes,
                });
                return;
            }

            state.cart[itemToUpdateIndex].amount++;
        },
        remove(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemToUpdateIndex === -1) {
                return;
            }

            if (state.cart[itemToUpdateIndex].amount > 1) {
                state.cart[itemToUpdateIndex].amount--;
                return;
            }

            if (state.cart[itemToUpdateIndex].amount === 1) {
                state.cart.splice(itemToUpdateIndex, 1);
                return;
            }
        },
        changeAttributes(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            console.log(state.cart[itemToUpdateIndex].amount);

            // state.cart[itemToUpdateIndex].sizes.forEach(
            //     (size) => (size.available = false)
            // );
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
