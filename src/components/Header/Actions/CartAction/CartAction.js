import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';
import { connect } from 'react-redux';

import cart from '../../../../assets/cart.svg';

import styles from './CartAction.module.css';
import CartOverlay from './CartOverlay/CartOverlay';

class CartAction extends Component {
    render() {
        return (
            <>
                <div
                    className={styles.cart}
                    onClick={this.props.onToggleOverlayHandler}
                >
                    <img src={cart} alt="cart" />
                    {this.props.cart.length > 0 && (
                        <div className={styles.cartAmount}>
                            {this.props.cart.length}
                        </div>
                    )}
                </div>
                {this.props.showOverlay && (
                    <CartOverlay
                        onToggleOverlayHandler={
                            this.props.onToggleOverlayHandler
                        }
                        cart={this.props.cart}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

export default withApollo(connect(mapStateToProps)(CartAction));
