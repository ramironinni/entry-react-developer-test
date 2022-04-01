import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    cart: [],
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
        },
        remove(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.prodId
            );

            state.cart.splice(itemToUpdateIndex, 1);
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
        },
        increment(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            state.cart[itemToUpdateIndex].amount++;
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
                return;
            }

            if (state.cart[itemToUpdateIndex].amount === 1) {
                state.cart.splice(itemToUpdateIndex, 1);
                return;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
