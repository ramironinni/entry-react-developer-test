import { Component } from 'react';

import { connect } from 'react-redux';
import { withApollo } from '@apollo/react-hoc';

import { GET_ITEM_BY_ID } from '../../GraphQl/queries';
import { cartActions } from '../../store/cart-slice';

class Cart extends Component {
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

    componentDidMount() {
        const currentCart = [];
        this.props.cart.forEach(async (item) => {
            const cartItem = { ...(await this.getItemById(item.id)).product };
            cartItem.amount = item.amount;
            cartItem.selectedAttributes = item.selectedAttributes;

            currentCart.push(cartItem);
        });

        this.setState({ currentCart });
    }

    addToCartHandler(id) {
        this.props.add(id);
    }

    removeFromCartHandler(id) {
        this.props.remove(id);
    }
    render() {
        return;
        <div>
            {/* <div>
                    {this.props.cart.map((item, i) => {
                        return (
                            <CartItem
                                key={i}
                                item={this.props.item}
                                inputName={`${i}-cartOverlay`}
                                onAddToCart={this.props.onAddToCart}
                                onRemoveFromCart={this.props.onRemoveFromCart}
                            />
                        );
                    })}
                </div> */}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (id) => dispatch(cartActions.add({ id })),
        remove: (id) => dispatch(cartActions.remove({ id })),
    };
};

export default withApollo(connect(mapStateToProps, mapDispatchToProps)(Cart));
