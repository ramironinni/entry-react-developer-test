import { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../shared/CartItemsGroup/CartItem/CartItem';
import CartItemsGroup from '../../shared/CartItemsGroup/CartItemsGroup';
import { cartActions } from '../../store/cart-slice';

import Page from '../Page';
import styles from './Cart.module.css';

class CartPage extends Component {
    render() {
        return (
            <Page>
                <p className={styles.title}>Cart </p>
                <CartItemsGroup isPage={true} inputNameComp={'CartPage'} />
            </Page>
        );
    }
}

export default CartPage;
