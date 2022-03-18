import { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../shared/CartItemsGroup/CartItem/CartItem';
import CartItemsGroup from '../../shared/CartItemsGroup/CartItemsGroup';
import { cartActions } from '../../store/cart-slice';

import Page from '../Page';
import styles from './Cart.module.css';

class CartPage extends Component {
    addToCartHandler(id) {
        this.props.add(id);
    }

    removeFromCartHandler(id) {
        this.props.remove(id);
    }

    changeSizeHandler(id, size) {
        this.props.changeSize(id, size);
    }

    render() {
        return (
            <Page>
                <p className={styles.title}>Cart </p>
                <CartItemsGroup isPage={true} />
            </Page>
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
        changeSize: (id, size) =>
            dispatch(cartActions.changeSize({ id, size })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
