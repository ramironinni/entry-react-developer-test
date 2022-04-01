import { Component } from 'react';
import styles from './CartOverlay.module.css';

import Modal from '../../Modal/Modal';
import CartOverlayContent from './CartOverlayContent/CartOverlayContent';

class CartOverlay extends Component {
    render() {
        const { onToggleOverlayHandler, cart } = this.props;

        return (
            <Modal
                overlayClasses={styles.modalOverlay}
                onBackdropClickHandler={onToggleOverlayHandler}
                backdropGrey={true}
            >
                {cart.length === 0 && <div>Cart is empty.</div>}
                {cart.length > 0 && (
                    <CartOverlayContent
                        cart={cart}
                        onCloseOverlayHandler={onToggleOverlayHandler}
                    />
                )}
            </Modal>
        );
    }
}

export default CartOverlay;
