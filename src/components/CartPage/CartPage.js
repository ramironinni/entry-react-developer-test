import { Component } from 'react';

import CartItemsGroup from '../../shared/CartItemsGroup/CartItemsGroup';
import Page from '../../shared/Page/Page';

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
