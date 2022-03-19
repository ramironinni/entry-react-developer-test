import { Component } from 'react';

import { connect } from 'react-redux';
import { withApollo } from '@apollo/react-hoc';

import { GET_ITEM_BY_ID } from '../../GraphQl/queries';

import CartItem from './CartItem/CartItem';

class CartItemsGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCart: [],
            loading: true,
            error: false,
        };
        this.client = props.client;
    }

    async getItemById(itemId) {
        const { loading, error, data } = await this.client.query({
            query: GET_ITEM_BY_ID,
            variables: {
                id: itemId,
            },
        });

        if (loading) {
            this.setState({ loading: true, error: false });
        }

        if (error) {
            this.setState({ loading: false, error: error });
            console.log(error);
        }

        // console.log(error, loading, data);

        return data;
    }

    async updateCart() {
        const currentCart = [];
        for (const cartProduct of this.props.cart) {
            const productFromDb = {
                ...(await this.getItemById(cartProduct.id)).product,
            };

            const newCartProduct = JSON.parse(JSON.stringify(productFromDb));

            newCartProduct.amount = cartProduct.amount;

            cartProduct.selectedAttributes.forEach((cartAttributeSet) => {
                const foundProdDbAttribute = newCartProduct.attributes.find(
                    (attribute) =>
                        attribute.id.toUpperCase() ===
                        cartAttributeSet.setId.toUpperCase()
                );

                foundProdDbAttribute.items.forEach((item) => {
                    if (item.id === cartAttributeSet.itemId) {
                        item.selected = true;
                    } else {
                        item.selected = false;
                    }
                });
            });

            currentCart.push(newCartProduct);
        }

        console.log('currentCart', currentCart);
        console.log('redux cart', this.props.cart);
        return currentCart;
    }

    async componentDidMount() {
        const currentCart = await this.updateCart();
        this.setState({ currentCart: currentCart });
    }

    async componentDidUpdate(prevProps) {
        if (this.props.cart !== prevProps.cart) {
            const currentCart = await this.updateCart();
            this.setState({ currentCart: currentCart });
        }
    }

    render() {
        const { isPage, inputNameComp } = this.props;
        return (
            <div>
                <div>
                    {this.state.currentCart.length > 0 &&
                        this.state.currentCart.map((item, i) => {
                            return (
                                <CartItem
                                    key={i}
                                    item={item}
                                    inputName={`${i}-${inputNameComp}`}
                                    isPage={isPage}
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

export default withApollo(connect(mapStateToProps)(CartItemsGroup));
