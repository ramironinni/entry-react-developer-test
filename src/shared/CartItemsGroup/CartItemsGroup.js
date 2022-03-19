import { Component } from 'react';

import { connect } from 'react-redux';
import { withApollo } from '@apollo/react-hoc';

import { GET_ITEM_BY_ID } from '../../GraphQl/queries';
import { cartActions } from '../../store/cart-slice';

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
        const currentCart = await Promise.all(
            this.props.cart.map(async (item) => {
                return {
                    ...(await this.getItemById(item.id)).product,
                    amount: item.amount,
                    selectedAttributes: item.selectedAttributes,
                };
            })
        );

        // console.log(currentCart);
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
