import { Component } from 'react';
import { connect } from 'react-redux';
import { cartActions } from '../../../../store/cart-slice';
import { GET_ITEM_BY_ID } from '../../../../GraphQl/queries';

import cart from '../../../../assets/cart.svg';

import Modal from '../ActionsModal/Modal';
import CartOverlay from './CartOverlay/CartOverlay';

import styles from './Cart.module.css';
import { withApollo } from '@apollo/react-hoc';

class CartAction extends Component {
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

        console.log(error, loading, data);

        return data;
    }

    componentDidMount() {
        const currentCart = [];
        this.props.cart.forEach(async (item) => {
            const cartItem = await this.getItemById(item.id);
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
        const modal = (
            <Modal
                overlayClasses={styles.modalOverlay}
                onBackdropClickHandler={this.props.onToggleOverlayHandler.bind(
                    this
                )}
                backdropGrey={true}
            >
                {this.props.cart.length === 0 && <div>Cart is empty</div>}
                {this.props.cart.length > 0 && (
                    <CartOverlay
                        cart={this.props.cart}
                        onCloseOverlayHandler={this.props.onToggleOverlayHandler.bind(
                            this
                        )}
                        onAddToCart={this.addToCartHandler.bind(this)}
                        onRemoveFromCart={this.removeFromCartHandler.bind(this)}
                    />
                )}
            </Modal>
        );

        return (
            <>
                <div
                    className={styles.cart}
                    onClick={this.props.onToggleOverlayHandler.bind(this)}
                >
                    <img src={cart} alt="cart" />
                    {this.props.cart.length > 0 && (
                        <div className={styles.cartAmount}>
                            {this.props.cart.length}
                        </div>
                    )}
                </div>
                {/* {this.props.showOverlay && modal} */}
                {console.log(this.state.currentCart)}
            </>
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
        add: (id) => dispatch(cartActions.add({ id })),
        remove: (id) => dispatch(cartActions.remove({ id })),
    };
};

export default withApollo(
    connect(mapStateToProps, mapDispatchToProps)(CartAction)
);
