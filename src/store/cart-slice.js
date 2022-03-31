import { createSlice, current } from '@reduxjs/toolkit';

const initialCartState = {
    cart: [
        // {
        //     __typename: 'Product',
        //     id: 'apple-imac-2021',
        //     name: 'iMac 2021',
        //     inStock: true,
        //     gallery: [
        //         'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000',
        //     ],
        //     description: 'The new iMac!',
        //     category: 'tech',
        //     attributes: [
        //         {
        //             __typename: 'AttributeSet',
        //             id: 'Capacity',
        //             name: 'Capacity',
        //             type: 'text',
        //             items: [
        //                 {
        //                     __typename: 'Attribute',
        //                     id: '256GB',
        //                     displayValue: '256GB',
        //                     value: '256GB',
        //                     selected: false,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: '512GB',
        //                     displayValue: '512GB',
        //                     value: '512GB',
        //                     selected: true,
        //                 },
        //             ],
        //         },
        //         {
        //             __typename: 'AttributeSet',
        //             id: 'With USB 3 ports',
        //             name: 'With USB 3 ports',
        //             type: 'text',
        //             items: [
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'Yes',
        //                     displayValue: 'Yes',
        //                     value: 'Yes',
        //                     selected: false,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'No',
        //                     displayValue: 'No',
        //                     value: 'No',
        //                     selected: true,
        //                 },
        //             ],
        //         },
        //         {
        //             __typename: 'AttributeSet',
        //             id: 'Touch ID in keyboard',
        //             name: 'Touch ID in keyboard',
        //             type: 'text',
        //             items: [
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'Yes',
        //                     displayValue: 'Yes',
        //                     value: 'Yes',
        //                     selected: true,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'No',
        //                     displayValue: 'No',
        //                     value: 'No',
        //                     selected: false,
        //                 },
        //             ],
        //         },
        //     ],
        //     prices: [
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'USD',
        //                 symbol: '$',
        //             },
        //             amount: 1688.03,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'GBP',
        //                 symbol: '£',
        //             },
        //             amount: 1213.34,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'AUD',
        //                 symbol: 'A$',
        //             },
        //             amount: 2177.57,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'JPY',
        //                 symbol: '¥',
        //             },
        //             amount: 182294.51,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'RUB',
        //                 symbol: '₽',
        //             },
        //             amount: 127653.82,
        //         },
        //     ],
        //     amount: 1,
        // },
        // {
        //     __typename: 'Product',
        //     id: 'xbox-series-s',
        //     name: 'Xbox Series S 512GB',
        //     inStock: false,
        //     gallery: [
        //         'https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg',
        //         'https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg',
        //         'https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg',
        //         'https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg',
        //         'https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg',
        //     ],
        //     description:
        //         '\n<div>\n    <ul>\n        <li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>\n        <li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>\n        <li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>\n        <li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>\n        <li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li>\n        <li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>\n        <li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>\n        <li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>\n        <li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>\n        <li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li>\n    </ul>\n</div>',
        //     category: 'tech',
        //     attributes: [
        //         {
        //             __typename: 'AttributeSet',
        //             id: 'Color',
        //             name: 'Color',
        //             type: 'swatch',
        //             items: [
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'Green',
        //                     displayValue: 'Green',
        //                     value: '#44FF03',
        //                     selected: false,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'Cyan',
        //                     displayValue: 'Cyan',
        //                     value: '#03FFF7',
        //                     selected: true,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'Blue',
        //                     displayValue: 'Blue',
        //                     value: '#030BFF',
        //                     selected: false,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'Black',
        //                     displayValue: 'Black',
        //                     value: '#000000',
        //                     selected: false,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: 'White',
        //                     displayValue: 'White',
        //                     value: '#FFFFFF',
        //                     selected: false,
        //                 },
        //             ],
        //         },
        //         {
        //             __typename: 'AttributeSet',
        //             id: 'Capacity',
        //             name: 'Capacity',
        //             type: 'text',
        //             items: [
        //                 {
        //                     __typename: 'Attribute',
        //                     id: '512G',
        //                     displayValue: '512G',
        //                     value: '512G',
        //                     selected: false,
        //                 },
        //                 {
        //                     __typename: 'Attribute',
        //                     id: '1T',
        //                     displayValue: '1T',
        //                     value: '1T',
        //                     selected: true,
        //                 },
        //             ],
        //         },
        //     ],
        //     prices: [
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'USD',
        //                 symbol: '$',
        //             },
        //             amount: 333.99,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'GBP',
        //                 symbol: '£',
        //             },
        //             amount: 240.07,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'AUD',
        //                 symbol: 'A$',
        //             },
        //             amount: 430.85,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'JPY',
        //                 symbol: '¥',
        //             },
        //             amount: 36068.27,
        //         },
        //         {
        //             __typename: 'Price',
        //             currency: {
        //                 __typename: 'Currency',
        //                 label: 'RUB',
        //                 symbol: '₽',
        //             },
        //             amount: 25257.22,
        //         },
        //     ],
        //     amount: 2,
        // },
    ],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.product.id
            );

            if (itemToUpdateIndex === -1) {
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

                state.cart.push({
                    ...action.payload.product,
                    attributes: customizedAttributesSet,
                    amount: 1,
                });

                return;
            }

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
        removeAll(state, action) {
            const itemToUpdateIndex = state.cart.findIndex(
                (item) => item.id === action.payload.prodId
            );

            state.cart.splice(itemToUpdateIndex, 1);
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

            console.log(attributeSetFoundIndex);

            const attributeItemToBeSelected = attributeSetFound.items.find(
                (item) => {
                    return item.id === action.payload.itemId;
                }
            );

            console.log(current(attributeItemToBeSelected));

            const attributeSetItemsToBeUpdated = attributeSetFound.items.map(
                (item) => {
                    const selected =
                        item.id === attributeItemToBeSelected.id ? true : false;
                    return { ...item, selected };
                }
            );

            console.log(attributeSetItemsToBeUpdated);

            state.cart[itemToUpdateIndex].attributes[
                attributeSetFoundIndex
            ].items = attributeSetItemsToBeUpdated;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
