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
            sizes: [
                { name: 's', available: true, selected: false },
                { name: 'm', available: true, selected: true },
            ],
            img: 'https://dummyimage.com/105x137/4cb7bf/fff',
        },
        {
            name: 'Jupiter Wayfarer',
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
            <div className={styles.cartOverlay}>
                <p className={styles.title}>
                    <span className={styles.myBag}>My Bag,&nbsp;</span>
                    {this.cartAmount} items
                </p>
                <div>
                    {this.DUMMY_CART.map((item, i) => {
                        return (
                            <CartOverlayItem
                                key={i}
                                name={item.name}
                                price={item.price}
                                amount={item.amount}
                                sizes={item.sizes}
                                img={item.img}
                                itemNumber={i}
                            />
                        );
                    })}
                </div>
                <div className={styles.grandTotal}>
                    <p>Total</p>
                    <p>$100.00</p>
                </div>
                <CartOverlayButtons />
            </div>
        );
    }
}

export default CartOverlay;
