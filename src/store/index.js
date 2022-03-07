import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCart = {
    cart: [
        {
            id: 1,
            name: 'Apollo',
            shortDesc: 'Running Short',
            price: 50,
            amount: 1,
            sizes: [
                { name: 's', available: true, selected: false },
                { name: 'm', available: true, selected: true },
            ],
            images: [
                'https://dummyimage.com/141x185/cfa40b/fff',
                'https://dummyimage.com/141x185/44dd11/fff',
                'https://dummyimage.com/141x185/4d1c2a/fff',
                'https://dummyimage.com/105x137/4cb7bf/fff',
            ],
        },
        {
            id: 2,
            name: 'Jupiter',
            shortDesc: 'Wayfarer',
            price: 75,
            amount: 2,
            sizes: [
                { name: 's', available: true, selected: false },
                { name: 'm', available: true, selected: true },
            ],
            images: [
                'https://dummyimage.com/141x185/cfa40b/fff',
                'https://dummyimage.com/141x185/44dd11/fff',
                'https://dummyimage.com/141x185/4d1c2a/fff',
                'https://dummyimage.com/105x137/4cb7bf/fff',
            ],
        },
    ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
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

// const cartReducer = (state = initialCart, action) => {
//     if (action.type === 'add') {
//         console.log(action.id, 'Added to cart');
//         return {
//             // cart: state.cart + 1,
//             cart: state.cart,
//         };
//     }

//     if (action.type === 'remove') {
//         console.log(action.id, 'Removed from cart');

//         return {
//             // cart: state.cart - 1,
//             cart: state.cart,
//         };
//     }

//     if (action.type === 'changeSize') {
//         console.log('New size is: ', action.size);

//         return {
//             // cart: state.cart - 1,
//             cart: state.cart,
//         };
//     }

//     return state;
// };

const store = configureStore({ reducer: cartSlice.reducer });

export const cartActions = cartSlice.actions;

export default store;
