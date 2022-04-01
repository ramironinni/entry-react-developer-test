import { createSlice, current } from '@reduxjs/toolkit';

const localStorageCart = JSON.parse(localStorage.getItem('cart'));

const initialCartState = {
    cart: (localStorageCart.length && localStorageCart) || [],
};

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

            let customizedAttributesSet = [];

            action.payload.selectedAttributes.forEach((selectedAttribute) => {
                const attributeSetToBeUpdated =
                    action.payload.product.attributes.find(
                        (setAtt) => setAtt.id === selectedAttribute.setId
                    );

                const itemAttSelected = attributeSetToBeUpdated.items.find(
                    (item) => item.id === selectedAttribute.itemId
                );

                const attributeItemsUpdated = attributeSetToBeUpdated.items.map(
                    (item) => {
                        const selected =
                            item.id === itemAttSelected.id ? true : false;
                        return { ...item, selected };
                    }
                );

                const productAttributeSetUpdated = {
                    ...attributeSetToBeUpdated,
                };

                productAttributeSetUpdated.items = attributeItemsUpdated;

                customizedAttributesSet.push(productAttributeSetUpdated);
            });

            state.cart.push({
                ...action.payload.product,
                attributes: customizedAttributesSet,
                amount: 1,
            });

            localStorage.setItem('cart', JSON.stringify(current(state.cart)));
        },
        remove(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.prodId
            );

            state.cart.splice(itemToUpdateIndex, 1);

            localStorage.setItem('cart', JSON.stringify(current(state.cart)));
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

            localStorage.setItem('cart', JSON.stringify(current(state.cart)));
        },
        increment(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            state.cart[itemToUpdateIndex].amount++;

            localStorage.setItem('cart', JSON.stringify(current(state.cart)));
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
                localStorage.setItem(
                    'cart',
                    JSON.stringify(current(state.cart))
                );

                return;
            }

            if (state.cart[itemToUpdateIndex].amount === 1) {
                state.cart.splice(itemToUpdateIndex, 1);
                localStorage.setItem(
                    'cart',
                    JSON.stringify(current(state.cart))
                );

                return;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
