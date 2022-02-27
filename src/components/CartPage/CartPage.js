import { Component } from 'react';
import Page from '../Page';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

class CartPage extends Component {
    DUMMY_CART = [
        {
            name: 'Apollo',
            shortDesc: 'Running Short',
            price: 50,
            amount: 1,
            size: 's',
            img: 'https://dummyimage.com/105x137/4cb7bf/fff',
        },
        {
            name: 'Jupiter',
            shortDesc: 'Wayfarer',
            price: 75,
            amount: 2,
            size: 's',
            img: 'https://dummyimage.com/105x137/4cb7bf/fff',
        },
    ];

    render() {
        return (
            <Page>
                <p className={styles.title}>Cart</p>
                {this.DUMMY_CART.map((item, i) => {
                    return <CartItem key={i} item={item} />;
                })}
            </Page>
        );
    }
}

export default CartPage;
