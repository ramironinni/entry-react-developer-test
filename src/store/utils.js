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
