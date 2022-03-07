import { createStore } from 'redux';

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

const cartReducer = (state = initialCart, action) => {
    if (action.type === 'add') {
        console.log(action.id, 'Added to cart');
        return {
            // cart: state.cart + 1,
            cart: state.cart,
        };
    }

    if (action.type === 'remove') {
        console.log(action.id, 'Removed from cart');

        return {
            // cart: state.cart - 1,
            cart: state.cart,
        };
    }

    return state;
};

const store = createStore(cartReducer);

export default store;
