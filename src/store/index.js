import { createStore } from 'redux';

const initialCart = { cart: 0 };

const cartReducer = (state = initialCart, action) => {
    if (action.type === 'add') {
        return {
            cart: state.cart + 1,
        };
    }

    if (action.type === 'remove') {
        return {
            cart: state.cart - 1,
        };
    }

    return state;
};

const store = createStore(cartReducer);

export default store;
