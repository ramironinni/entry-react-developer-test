import { Component } from 'react';

import { connect } from 'react-redux';
import { withApollo } from '@apollo/react-hoc';

import { GET_ITEM_BY_ID } from '../../GraphQl/queries';

import CartItem from './CartItem/CartItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { cartActions } from '../../store/cart-slice';

class CartItemsGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            error: false,
        };
    }

    async getItemById(itemId) {
        this.setState({ isLoading: true });

        const { loading, error, data } = await this.props.client.query({
            query: GET_ITEM_BY_ID,
            variables: {
                id: itemId,
            },
        });

        if (loading) {
            this.setState({ isLoading: true, error: false });
        }

        if (error) {
            this.setState({ isLoading: false, error: error });
        }

        this.setState({ isLoading: false });

        return data;
    }

    async checkItemsInStock() {
        for (const item of this.props.cart) {
            const foundItem = (await this.getItemById(item.id)).product;

            if (!foundItem.inStock) {
                this.props.remove(foundItem.id);
            }
        }
    }

    async componentDidMount() {
        if (this.props.cart) {
            await this.checkItemsInStock();
        }
    }

    render() {
        const { isPage, inputNameComp, isCart } = this.props;

        if (this.state.isLoading) {
            return <LoadingSpinner />;
        }

        if (this.state.error) {
            return <p>{this.state.error}</p>;
        }

        if (this.props.cart.length === 0) {
            return <div>Cart is empty.</div>;
        }

        return (
            <div>
                {this.props.cart.length > 0 &&
                    this.props.cart.map((item, i) => {
                        return (
                            <CartItem
                                key={i}
                                item={item}
                                inputName={`${i}-${inputNameComp}`}
                                isPage={isPage}
                                isCart={isCart}
                            />
                        );
                    })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => dispatch(cartActions.remove({ id })),
    };
};

export default withApollo(
    connect(mapStateToProps, mapDispatchToProps)(CartItemsGroup)
);
