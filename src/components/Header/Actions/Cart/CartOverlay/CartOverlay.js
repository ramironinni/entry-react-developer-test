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
                                id={item.id}
                                name={item.name}
                                shortDesc={item.shortDesc}
                                price={item.price}
                                amount={item.amount}
                                sizes={item.sizes}
                                img={item.images[3]}
                                inputName={`${i}-cartOverlay`}
                                onAddToCart={this.props.onAddToCart}
                                onRemoveFromCart={this.props.onRemoveFromCart}
                            />
                        );
                    })}
                </div>
                <div className={styles.grandTotal}>
                    <p>Total</p>
                    <p>$100.00</p>
                </div>
                <CartOverlayButtons
                    onCloseOverlayHandler={this.props.onCloseOverlayHandler}
                />
            </div>
        );
    }
}

export default CartOverlay;
