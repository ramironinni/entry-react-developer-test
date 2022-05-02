import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import {
    getCustomizedAttributesSet,
    getGrandTotalPricesUpdated,
    getTotalProductPrices,
    saveToLocalStorage,
} from './utils';

import isEqual from '../utils/isEqual';

const localStorageCart = JSON.parse(localStorage.getItem('cart'));
const localStorageGrandTotal = JSON.parse(localStorage.getItem('grandTotal'));

const initialCartState = {
    cart:
        (localStorageCart && localStorageCart.length && localStorageCart) || [],
    cartGrandTotalPrices:
        (localStorageGrandTotal &&
            localStorageGrandTotal.length &&
            localStorageGrandTotal) ||
        [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add(state, action) {
            const addToCart = () => {
                state.cart.push({
                    ...action.payload.product,
                    uid: uuidv4(),
                    attributes: getCustomizedAttributesSet(action),
                    amount: 1,
                    totalProductPrices: getTotalProductPrices(null, action),
                });
            };

            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.product.id
            );

            if (itemIndex === -1) {
                addToCart();

                if (state.cartGrandTotalPrices.length === 0) {
                    state.cartGrandTotalPrices = getTotalProductPrices(
                        null,
                        action
                    );
                    return;
                }

                state.cartGrandTotalPrices = getGrandTotalPricesUpdated(
                    state,
                    action,
                    null,
                    'increment'
                );

                saveToLocalStorage(state);
                return;
            }

            const foundIndexWithSameAtt = current(state.cart).findIndex(
                (item, index) =>
                    item.id === action.payload.product.id &&
                    isEqual(
                        {
                            ...action.payload.product,
                            attributes: getCustomizedAttributesSet(action),
                        }.attributes,
                        current(state.cart[index].attributes)
                    )
            );

            const hasSameAttributes = foundIndexWithSameAtt > -1 ? true : false;

            if (hasSameAttributes) {
                state.cart[foundIndexWithSameAtt].amount++;

                state.cart[foundIndexWithSameAtt].totalProductPrices =
                    getTotalProductPrices(state, null, foundIndexWithSameAtt);

                state.cartGrandTotalPrices = getGrandTotalPricesUpdated(
                    state,
                    null,
                    foundIndexWithSameAtt,
                    'increment'
                );

                saveToLocalStorage(state);
            }

            if (!hasSameAttributes) {
                addToCart();

                state.cartGrandTotalPrices = getGrandTotalPricesUpdated(
                    state,
                    action,
                    null,
                    'increment'
                );

                saveToLocalStorage(state);
            }
        },
        remove(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.prodId
            );

            state.cart.splice(itemToUpdateIndex, 1);

            saveToLocalStorage(state);
        },
        increment(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.uid === action.payload.uid
            );

            state.cart[itemToUpdateIndex].amount++;

            state.cart[itemToUpdateIndex].totalProductPrices =
                getTotalProductPrices(state, null, itemToUpdateIndex);

            state.cartGrandTotalPrices = getGrandTotalPricesUpdated(
                state,
                null,
                itemToUpdateIndex,
                'increment'
            );

            saveToLocalStorage(state);
        },
        decrement(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.uid === action.payload.uid
            );

            if (itemToUpdateIndex === -1) {
                return;
            }

            if (state.cart[itemToUpdateIndex].amount > 1) {
                state.cart[itemToUpdateIndex].amount--;

                state.cart[itemToUpdateIndex].totalProductPrices =
                    getTotalProductPrices(state, null, itemToUpdateIndex);

                state.cartGrandTotalPrices = getGrandTotalPricesUpdated(
                    state,
                    null,
                    itemToUpdateIndex,
                    'decrement'
                );

                saveToLocalStorage(state);

                return;
            }

            if (state.cart[itemToUpdateIndex].amount === 1) {
                state.cartGrandTotalPrices = getGrandTotalPricesUpdated(
                    state,
                    null,
                    itemToUpdateIndex,
                    'decrement'
                );

                state.cart.splice(itemToUpdateIndex, 1);

                saveToLocalStorage(state);
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
