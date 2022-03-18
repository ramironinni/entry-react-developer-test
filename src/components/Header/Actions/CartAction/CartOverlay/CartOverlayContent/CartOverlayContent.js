import { Component } from 'react';
import styles from './CartOverlayContent.module.css';
import CartOverlayButtons from './CartOverlayButtons/CartOverlayButtons';
import CartItemsGroup from '../../../../../../shared/CartItemsGroup/CartItemsGroup';

class CartOverlayContent extends Component {
    render() {
        return (
            <div className={styles.cartOverlay}>
                <p className={styles.title}>
                    <span className={styles.myBag}>My Bag,&nbsp;</span>
                    {this.props.cart.length} items
                </p>
                <CartItemsGroup isPage={false} inputNameComp={'CartOverlay'} />
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
