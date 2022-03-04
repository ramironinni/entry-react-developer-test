import { Component } from 'react';
import styles from './CartOverlay.module.css';
import CartOverlayButtons from './CartOverlayButtons/CartOverlayButtons';
import CartOverlayItem from './CartOverlayItem/CartOverlayItem';

class CartOverlay extends Component {
    render() {
        return (
            <div className={styles.cartOverlay}>
                <p className={styles.title}>
                    <span className={styles.myBag}>My Bag,&nbsp;</span>
                    {this.props.cart.length} items
                </p>
                <div>
                    {this.props.cart.map((item, i) => {
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
