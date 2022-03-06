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
                <div
                    className={styles.cart}
                    onClick={this.props.onToggleOverlayHandler.bind(this)}
                >
                    <img src={cart} alt="cart" />
                    <div className={styles.cartAmount}>
                        {this.DUMMY_CART.length}
                    </div>
                </div>
                {this.props.showOverlay && (
                    <>
                        <Modal
                            overlayClasses={styles.modalOverlay}
                            onBackdropClickHandler={this.props.onToggleOverlayHandler.bind(
                                this
                            )}
                            backdropGrey={true}
                        >
                            <CartOverlay
                                cart={this.DUMMY_CART}
                                onCloseOverlayHandler={this.props.onToggleOverlayHandler.bind(
                                    this
                                )}
                            />
                        </Modal>
                    </>
                )}
            </>
        );
    }
}

export default Cart;
