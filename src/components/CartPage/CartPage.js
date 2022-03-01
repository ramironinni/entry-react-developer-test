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
            sizes: [
                { name: 's', available: true, selected: false },
                { name: 'm', available: true, selected: true },
            ],
            img: 'https://dummyimage.com/105x137/4cb7bf/fff',
        },
        {
            name: 'Jupiter',
            shortDesc: 'Wayfarer',
            price: 75,
            amount: 2,
            sizes: [
                { name: 's', available: true, selected: false },
                { name: 'm', available: true, selected: true },
            ],
            img: 'https://dummyimage.com/105x137/4cb7bf/fff',
        },
    ];

    render() {
        return (
            <Page>
                {console.log()}
                <p className={styles.title}>Cart</p>
                {this.DUMMY_CART.map((item, i) => {
                    return <CartItem key={i} item={item} itemNumber={i} />;
                })}
            </Page>
        );
    }
}

export default CartPage;
