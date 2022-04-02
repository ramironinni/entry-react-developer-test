import { createSlice, current } from '@reduxjs/toolkit';

import {
    getGrandTotalPricesUpdated,
    getTotalProductPrices,
    saveToLocalStorage,
} from './utils';

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

// add(state, action) {
//             const itemIndex = state.cart.findIndex(
//                 (item) => item.id === action.payload.product.id
//             );

//             let customizedAttributesSet = [];

//             action.payload.selectedAttributes.forEach((selectedAttribute) => {
//                 const attributeSetToBeUpdated =
//                     action.payload.product.attributes.find(
//                         (setAtt) => setAtt.id === selectedAttribute.setId
//                     );

//                 const itemAttSelected = attributeSetToBeUpdated.items.find(
//                     (item) => item.id === selectedAttribute.itemId
//                 );

//                 const attributeItemsUpdated = attributeSetToBeUpdated.items.map(
//                     (item) => {
//                         const selected =
//                             item.id === itemAttSelected.id ? true : false;
//                         return { ...item, selected };
//                     }
//                 );

//                 const productAttributeSetUpdated = {
//                     ...attributeSetToBeUpdated,
//                 };

//                 productAttributeSetUpdated.items = attributeItemsUpdated;

//                 customizedAttributesSet.push(productAttributeSetUpdated);
//             });

//             if (itemIndex > -1) {
//                 const isSameProductWithSameOpts = isEqual(
//                     current(state.cart[itemIndex].attributes),
//                     customizedAttributesSet
//                 );

//                 if (isSameProductWithSameOpts) {
//                     state.cart[itemIndex].amount++;

//                     const grandTotalPricesUpdated =
//                         state.cartGrandTotalPrices.map((grandTotalPrice) => {
//                             const newProductPrice =
//                                 action.payload.product.prices.find(
//                                     (price) =>
//                                         price.currency.label ===
//                                         grandTotalPrice.currency.label
//                                 );
//                             return {
//                                 ...grandTotalPrice,
//                                 amount:
//                                     grandTotalPrice.amount +
//                                     newProductPrice.amount,
//                             };
//                         });

//                     state.cartGrandTotalPrices = grandTotalPricesUpdated;

//                     localStorage.setItem(
//                         'cart',
//                         JSON.stringify(current(state.cart))
//                     );
//                     localStorage.setItem(
//                         'grandTotal',
//                         JSON.stringify(state.cartGrandTotalPrices)
//                     );
//                 }
//                 return;
//             }

//             const totalProductPrices = action.payload.product.prices.map(
//                 (price) => {
//                     return { ...price };
//                 }
//             );

//             state.cart.push({
//                 ...action.payload.product,
//                 attributes: customizedAttributesSet,
//                 amount: 1,
//                 totalProductPrices,
//             });

//             if (state.cartGrandTotalPrices.length === 0) {
//                 state.cartGrandTotalPrices = totalProductPrices;
//                 return;
//             }

//             const grandTotalPricesUpdated = state.cartGrandTotalPrices.map(
//                 (grandTotalPrice) => {
//                     const newProductPrice = action.payload.product.prices.find(
//                         (price) =>
//                             price.currency.label ===
//                             grandTotalPrice.currency.label
//                     );
//                     return {
//                         ...grandTotalPrice,
//                         amount: grandTotalPrice.amount + newProductPrice.amount,
//                     };
//                 }
//             );

//             state.cartGrandTotalPrices = grandTotalPricesUpdated;

//             localStorage.setItem('cart', JSON.stringify(current(state.cart)));
//             localStorage.setItem(
//                 'grandTotal',
//                 JSON.stringify(state.cartGrandTotalPrices)
//             );
//         },

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.product.id
            );

            if (itemToUpdateIndex > -1) {
                return;
            }

            const getCustomizedAttributesSet = () => {
                let customizedAttributesSet = [];

                action.payload.selectedAttributes.forEach(
                    (selectedAttribute) => {
                        const attributeSetToBeUpdated =
                            action.payload.product.attributes.find(
                                (setAtt) =>
                                    setAtt.id === selectedAttribute.setId
                            );

                        const itemAttSelected =
                            attributeSetToBeUpdated.items.find(
                                (item) => item.id === selectedAttribute.itemId
                            );

                        const attributeItemsUpdated =
                            attributeSetToBeUpdated.items.map((item) => {
                                const selected =
                                    item.id === itemAttSelected.id
                                        ? true
                                        : false;
                                return { ...item, selected };
                            });

                        const productAttributeSetUpdated = {
                            ...attributeSetToBeUpdated,
                        };

                        productAttributeSetUpdated.items =
                            attributeItemsUpdated;

                        customizedAttributesSet.push(
                            productAttributeSetUpdated
                        );
                    }
                );

                return customizedAttributesSet;
            };

            const getTotalProductPrices = () => {
                const totalProductPrices = action.payload.product.prices.map(
                    (price) => {
                        return { ...price };
                    }
                );
                return totalProductPrices;
            };

            state.cart.push({
                ...action.payload.product,
                attributes: getCustomizedAttributesSet(),
                amount: 1,
                totalProductPrices: getTotalProductPrices(),
            });

            if (state.cartGrandTotalPrices.length === 0) {
                state.cartGrandTotalPrices = getTotalProductPrices();
                return;
            }

            state.cartGrandTotalPrices = getGrandTotalPricesUpdated(
                state,
                action,
                null,
                'increment'
            );

            saveToLocalStorage(state);
        },
        remove(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.prodId
            );

            state.cart.splice(itemToUpdateIndex, 1);

            saveToLocalStorage(state);
        },
        update(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.prodId
            );

            const attributeSetFound = state.cart[
                itemToUpdateIndex
            ].attributes.find((attributeSet) => {
                return attributeSet.id === action.payload.setId;
            });

            const attributeSetFoundIndex = state.cart[
                itemToUpdateIndex
            ].attributes.findIndex((attributeSet) => {
                return attributeSet.id === action.payload.setId;
            });

            const attributeItemToBeSelected = attributeSetFound.items.find(
                (item) => {
                    return item.id === action.payload.itemId;
                }
            );

            const attributeSetItemsToBeUpdated = attributeSetFound.items.map(
                (item) => {
                    const selected =
                        item.id === attributeItemToBeSelected.id ? true : false;
                    return { ...item, selected };
                }
            );

            state.cart[itemToUpdateIndex].attributes[
                attributeSetFoundIndex
            ].items = attributeSetItemsToBeUpdated;

            saveToLocalStorage(state);
        },
        increment(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            state.cart[itemToUpdateIndex].amount++;

            state.cart[itemToUpdateIndex].totalProductPrices =
                getTotalProductPrices(state, itemToUpdateIndex);

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
                (item) => item.id === action.payload.id
            );

            if (itemToUpdateIndex === -1) {
                return;
            }

            if (state.cart[itemToUpdateIndex].amount > 1) {
                state.cart[itemToUpdateIndex].amount--;

                state.cart[itemToUpdateIndex].totalProductPrices =
                    getTotalProductPrices(state, itemToUpdateIndex);

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
