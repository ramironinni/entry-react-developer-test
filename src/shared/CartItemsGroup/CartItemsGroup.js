import { Component } from 'react';

import { connect } from 'react-redux';
import { withApollo } from '@apollo/react-hoc';

import { GET_ITEM_BY_ID } from '../../GraphQl/queries';

import CartItem from './CartItem/CartItem';
import LoadingSpinner from '../Loading/LoadingSpinner';
import { cartActions } from '../../store/cart-slice';

class CartItemsGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCart: [],
            isLoading: true,
            error: false,
        };
        this.client = props.client;
    }

    async getItemById(itemId) {
        this.setState({ isLoading: true });

        const { loading, error, data } = await this.client.query({
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
            console.log(error);
        }

        // console.log(error, loading, data);

        this.setState({ isLoading: false });

        return data;
    }

    async checkOutOfStockItems() {
        for (const item of this.props.cart) {
            const foundItem = await this.getItemById(item.id);

            console.log('foundItem', foundItem);

            if (!foundItem.inStock) {
                this.props.removeAll(foundItem.id);
            }
        }
    }

    async componentDidMount() {
        console.log('this.props.cart', this.props.cart);
        if (this.props.cart) {
            this.checkOutOfStockItems();
            this.setState({ isLoading: false });
        }
    }

    async componentDidUpdate(prevProps) {
        if (this.props.cart !== prevProps.cart) {
        }
    }

    render() {
        const { isPage, inputNameComp } = this.props;

        if (this.state.isLoading) {
            return <LoadingSpinner />;
        }

        if (this.state.error) {
            return <p>{this.state.error}</p>;
        }

        return (
            <div>
                {this.props.cart.length === 0 && <div>Cart is empty.</div>}
                <div>
                    {this.props.cart.length > 0 &&
                        this.props.cart.map((item, i) => {
                            console.log(item);
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: (id) => dispatch(cartActions.removeAll({ id })),
    };
};

export default withApollo(
    connect(mapStateToProps, mapDispatchToProps)(CartItemsGroup)
);
