import { Component } from 'react';
import { connect } from 'react-redux';

import { cartActions } from '../../../../store/cart-slice';

import styles from './AmountController.module.css';

class AmountController extends Component {
    onIncrementHandler(uid) {
        this.props.increment(uid);
    }

    onDecrementHandler(uid) {
        this.props.decrement(uid);
    }
    render() {
        const buttonOverlayStyles = !this.props.isPage
            ? styles.buttonOverlay
            : '';

        const amountOverlayStyles = !this.props.isPage
            ? styles.amountOverlay
            : '';

        return (
            <div className={styles.amountController}>
                <button
                    className={`${styles.button} ${buttonOverlayStyles}`}
                    onClick={() => this.onIncrementHandler(this.props.uid)}
                >
                    +
                </button>
                <div className={`${styles.amount} ${amountOverlayStyles}`}>
                    {this.props.amount}
                </div>
                <button
                    className={`${styles.button} ${buttonOverlayStyles}`}
                    onClick={() => this.onDecrementHandler(this.props.uid)}
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
        increment: (uid) => dispatch(cartActions.increment({ uid })),
        decrement: (uid) => dispatch(cartActions.decrement({ uid })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AmountController);
