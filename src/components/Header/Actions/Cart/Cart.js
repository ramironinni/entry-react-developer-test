import { Component } from 'react';
import cart from '../../../../assets/cart.svg';
import Modal from '../ActionsModal/Modal';
import styles from './Cart.module.css';
import CartOverlay from './CartOverlay/CartOverlay';

class Cart extends Component {
    render() {
        return (
            <div className={styles.cart}>
                <div>
                    <img src={cart} alt="cart" />
                </div>
                <Modal overlayClasses={styles.modalOverlay}>
                    <CartOverlay />
                </Modal>
            </div>
        );
    }
}

export default Cart;
