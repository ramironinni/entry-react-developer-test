import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
    query {
        category {
            products {
                id
                name
                inStock
                gallery
                description
                category
                attributes {
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                }
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
                brand
            }
        }
    }
`;

export const GET_ITEMS_BY_CATEGORY = gql`
    query GetCategoryByName($title: String!) {
        category(input: { title: $title }) {
            products {
                id
                name
                inStock
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`;

export const GET_ITEM_BY_ID = gql`
    query GetProductById($id: String!) {
        product(id: $id) {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items {
                    id
                    displayValue
                    value
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
        }
    }
`;

export const GET_CATEGORIES = gql`
    query {
        categories {
            name
        }
    }
`;

export const GET_CURRENCIES = gql`
    query {
        currencies {
            label
            symbol
        }
    }
`;
