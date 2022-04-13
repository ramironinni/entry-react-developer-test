import { current } from '@reduxjs/toolkit';

export const saveToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(current(state.cart)));

    localStorage.setItem(
        'grandTotal',
        JSON.stringify(state.cartGrandTotalPrices)
    );
};

export const getGrandTotalPricesUpdated = (
    state,
    action,
    itemToUpdateIndex,
    operation
) => {
    const grandTotalPricesUpdated = state.cartGrandTotalPrices.map(
        (grandTotalPrice) => {
            let toBeUpdatedProductPrice;

            if (action) {
                toBeUpdatedProductPrice = action.payload.product.prices.find(
                    (price) =>
                        price.currency.label === grandTotalPrice.currency.label
                );
            } else {
                toBeUpdatedProductPrice = state.cart[
                    itemToUpdateIndex
                ].prices.find(
                    (price) =>
                        price.currency.label === grandTotalPrice.currency.label
                );
            }

            if (operation === 'increment') {
                return {
                    ...grandTotalPrice,
                    amount:
                        grandTotalPrice.amount + toBeUpdatedProductPrice.amount,
                };
            }
            if (operation === 'decrement') {
                return {
                    ...grandTotalPrice,
                    amount:
                        grandTotalPrice.amount - toBeUpdatedProductPrice.amount,
                };
            }
        }
    );
    return grandTotalPricesUpdated;
};

export const getTotalProductPrices = (state, action, itemToUpdateIndex) => {
    if (action) {
        const totalProductPrices = action.payload.product.prices.map(
            (price) => {
                return { ...price };
            }
        );
        return totalProductPrices;
    }

    const totalProductPrices = state.cart[itemToUpdateIndex].prices.map(
        (price) => {
            return {
                ...price,
                amount: price.amount * state.cart[itemToUpdateIndex].amount,
            };
        }
    );

    return totalProductPrices;
};

export const getCustomizedAttributesSet = (action) => {
    let customizedAttributesSet = [];

    action.payload.selectedAttributes.forEach((selectedAttribute) => {
        const attributeSetToBeUpdated = action.payload.product.attributes.find(
            (setAtt) => setAtt.id === selectedAttribute.setId
        );

        const itemAttSelected = attributeSetToBeUpdated.items.find(
            (item) => item.id === selectedAttribute.itemId
        );

        const attributeItemsUpdated = attributeSetToBeUpdated.items.map(
            (item) => {
                const selected = item.id === itemAttSelected.id ? true : false;
                return { ...item, selected };
            }
        );

        const productAttributeSetUpdated = {
            ...attributeSetToBeUpdated,
        };

        productAttributeSetUpdated.items = attributeItemsUpdated;

        customizedAttributesSet.push(productAttributeSetUpdated);
    });

    return customizedAttributesSet;
};
