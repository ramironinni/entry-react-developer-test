import { Component } from 'react';
import cart from '../../../../assets/cart.svg';
import Modal from '../ActionsModal/Modal';
import styles from './Cart.module.css';
import CartOverlay from './CartOverlay/CartOverlay';

class Cart extends Component {
    // constructor() {
    //     super();
    //     this.state = { showOverlay: false };
    // }

    // toggleCartHandler() {
    //     this.setState((curState) => {
    //         return { showOverlay: !curState.showOverlay };
    //     });
    // }

    render() {
        return (
            <div className={styles.cart}>
                <div>
                    <img
                        src={cart}
                        alt="cart"
                        onClick={this.props.onToggleOverlayHandler.bind(this)}
                    />
                </div>
                {this.props.showOverlay && (
                    <Modal
                        overlayClasses={styles.modalOverlay}
                        onBackdropClickHandler={this.props.onToggleOverlayHandler.bind(
                            this
                        )}
                    >
                        <CartOverlay />
                    </Modal>
                )}
            </div>
        );
    }
}

export default Cart;
