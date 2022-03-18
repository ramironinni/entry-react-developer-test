import { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../shared/CartItemsGroup/CartItem/CartItem';
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
                {this.props.cart.map((item, i) => {
                    return (
                        <CartItem
                            key={i}
                            item={item}
                            inputName={`${i}-CartPage`}
                            onAddToCart={this.addToCartHandler.bind(this)}
                            onRemoveFromCart={this.removeFromCartHandler.bind(
                                this
                            )}
                            onChangeSize={this.changeSizeHandler.bind(this)}
                        />
                    );
                })}
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
