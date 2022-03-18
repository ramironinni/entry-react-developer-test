import { Component } from 'react';
import styles from './CartOverlayContent.module.css';
import CartOverlayButtons from './CartOverlayButtons/CartOverlayButtons';
// import CartOverlayItem from './CartOverlayItem/CartOverlayItem';

class CartOverlayContent extends Component {
    render() {
        return (
            <div className={styles.cartOverlay}>
                <p className={styles.title}>
                    <span className={styles.myBag}>My Bag,&nbsp;</span>
                    {this.props.cart.length} items
                </p>
                {/* <div>
                    {this.props.cart.map((item, i) => {
                        return (
                            <CartItem
                                key={i}
                                item={this.props.item}
                                inputName={`${i}-cartOverlay`}
                                onAddToCart={this.props.onAddToCart}
                                onRemoveFromCart={this.props.onRemoveFromCart}
                            />
                        );
                    })}
                </div> */}
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

export default CartOverlayContent;
