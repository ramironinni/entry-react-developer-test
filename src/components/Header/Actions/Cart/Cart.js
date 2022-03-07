import { Component } from 'react';
import { connect } from 'react-redux';
import cart from '../../../../assets/cart.svg';
import Modal from '../ActionsModal/Modal';
import styles from './Cart.module.css';
import CartOverlay from './CartOverlay/CartOverlay';

class Cart extends Component {
    // cart = [
    //     {
    //         name: 'Apollo Running Short',
    //         price: 50,
    //         amount: 1,
    //         sizes: [
    //             { name: 's', available: true, selected: false },
    //             { name: 'm', available: true, selected: true },
    //         ],
    //         img: 'https://dummyimage.com/105x137/4cb7bf/fff',
    //     },
    //     {
    //         name: 'Jupiter Wayfarer',
    //         price: 75,
    //         amount: 2,
    //         sizes: [
    //             { name: 's', available: true, selected: false },
    //             { name: 'm', available: true, selected: true },
    //         ],
    //         img: 'https://dummyimage.com/105x137/4cb7bf/fff',
    //     },
    // ];

    addToCartHandler(id) {
        this.props.add(id);
    }

    removeFromCartHandler(id) {
        this.props.remove(id);
    }

    render() {
        return (
            <>
                <div
                    className={styles.cart}
                    onClick={this.props.onToggleOverlayHandler.bind(this)}
                >
                    <img src={cart} alt="cart" />
                    <div className={styles.cartAmount}>
                        {this.props.cart.length}
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
                                cart={this.props.cart}
                                onCloseOverlayHandler={this.props.onToggleOverlayHandler.bind(
                                    this
                                )}
                                onAddToCart={this.addToCartHandler.bind(this)}
                                onRemoveFromCart={this.removeFromCartHandler.bind(
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (id) => dispatch({ type: 'add', id }),
        remove: (id) => dispatch({ type: 'remove', id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
