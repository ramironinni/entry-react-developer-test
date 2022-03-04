import { Component } from 'react';
import cart from '../../../../assets/cart.svg';
import Modal from '../ActionsModal/Modal';
import styles from './Cart.module.css';
import CartOverlay from './CartOverlay/CartOverlay';

class Cart extends Component {
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
            <>
                <div className={styles.cart}>
                    <img
                        src={cart}
                        alt="cart"
                        onClick={this.props.onToggleOverlayHandler.bind(this)}
                    />
                </div>
                {this.props.showOverlay && (
                    <>
                        <Modal
                            overlayClasses={styles.modalOverlay}
                            backdropClasses={styles.backdrop}
                            onBackdropClickHandler={this.props.onToggleOverlayHandler.bind(
                                this
                            )}
                        >
                            <CartOverlay cart={this.DUMMY_CART} />
                        </Modal>
                        <div className={styles.backdropGrey} />
                    </>
                )}
            </>
        );
    }
}

export default Cart;
