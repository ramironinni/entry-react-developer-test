import { Component } from 'react';
import styles from './CartOverlay.module.css';
import CartOverlayButtons from './CartOverlayButtons/CartOverlayButtons';
import CartOverlayItem from './CartOverlayItem/CartOverlayItem';

class CartOverlay extends Component {
    cartAmount = 2;
    DUMMY_CART = [
        {
            name: 'Apollo Running Short',
            price: 50,
            amount: 1,
            size: 's',
            img: 'https://dummyimage.com/105x137/4cb7bf/fff',
        },
        {
            name: 'Jupiter Wayfarer',
            price: 75,
            amount: 2,
            size: 's',
            img: 'https://dummyimage.com/105x137/4cb7bf/fff',
        },
    ];
    render() {
        return (
            <div className={styles.cartOverlay}>
                <p>My Bag, {this.cartAmount} items</p>
                <div>
                    {this.DUMMY_CART.map((item) => {
                        return (
                            <CartOverlayItem
                                name={item.name}
                                price={item.price}
                                amount={item.amount}
                                size={item.size}
                                img={item.img}
                            />
                        );
                    })}
                </div>
                <p>Total $100</p>
                <CartOverlayButtons text={'View Bag'} />
                <CartOverlayButtons text={'Check Out'} />
            </div>
        );
    }
}

export default CartOverlay;
