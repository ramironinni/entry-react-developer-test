import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cart: [
        {
            id: 'ps-5',
            amount: 1,
            attributes: { color: 'Green', capacity: '512G' },
        },
        {
            id: 'xbox-series-s',
            amount: 2,
            attributes: { color: 'Cyan', capacity: '1T' },
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

            state.cart[itemToUpdateIndex].amount++;
        },
        remove(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            const itemToUpdate = state.cart[itemToUpdateIndex];

            if (itemToUpdate.amount < 1) {
                return;
            }

            state.cart[itemToUpdateIndex].amount--;
        },
        changeSize(state, action) {
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
