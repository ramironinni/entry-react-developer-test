import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cart: [
        {
            id: 'apple-imac-2021',
            amount: 1,
            selectedAttributes: [
                { setId: 'Capacity', itemId: '256GB' },
                { setId: 'With USB 3 ports', itemId: 'No' },
                { setId: 'Touch ID in keyboard', itemId: 'Yes' },
            ],
        },
        {
            id: 'xbox-series-s',
            amount: 2,
            selectedAttributes: [
                { setId: 'Color', itemId: 'Cyan' },
                { setId: 'Capacity', itemId: '1T' },
            ],
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

            // if(state.cart[itemToUpdateIndex].selectedAttributes.find(attSet => attSet.id ===)){

            // }

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
        update(state, action) {
            // console.log(
            //     action.payload.setId,
            //     action.payload.itemId,
            //     action.payload.prodId
            // );

            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.prodId
            );

            const attributeToBeUpdated = state.cart[
                itemToUpdateIndex
            ].selectedAttributes.find(
                (att) => att.setId === action.payload.setId
            );

            attributeToBeUpdated.itemId = action.payload.itemId;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
