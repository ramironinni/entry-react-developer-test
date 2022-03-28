import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';
import { connect } from 'react-redux';
import { cartActions } from '../../../../store/cart-slice';

import styles from './AmountController.module.css';

class AmountController extends Component {
    addToCartHandler(id) {
        this.props.add(id);
    }

    removeFromCartHandler(id) {
        this.props.remove(id);
    }
    render() {
        const buttonOverlayStyles = !this.props.page
            ? styles.buttonOverlay
            : '';

        const amountOverlayStyles = !this.props.page
            ? styles.amountOverlay
            : '';

        return (
            <div className={styles.amountController}>
                <button
                    className={`${styles.button} ${buttonOverlayStyles}`}
                    onClick={() => this.addToCartHandler(this.props.id)}
                >
                    +
                </button>
                <div className={`${styles.amount} ${amountOverlayStyles}`}>
                    {this.props.amount}
                </div>
                <button
                    className={`${styles.button} ${buttonOverlayStyles}`}
                    onClick={() => this.removeFromCartHandler(this.props.id)}
                >
                    -
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (id) => dispatch(cartActions.add({ id })),
        remove: (id) => dispatch(cartActions.remove({ id })),
    };
};

export default withApollo(
    connect(mapStateToProps, mapDispatchToProps)(AmountController)
);
