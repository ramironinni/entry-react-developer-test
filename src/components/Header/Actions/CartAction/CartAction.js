import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';
import { connect } from 'react-redux';

import styles from './CartAction.module.css';
import CartOverlay from './CartOverlay/CartOverlay';
import CartBadge from './CartBadge/CartBadge';

class CartAction extends Component {
    render() {
        return (
            <>
                <CartBadge
                    cart={this.props.cart}
                    onToggleOverlayHandler={this.props.onToggleOverlayHandler}
                />
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
