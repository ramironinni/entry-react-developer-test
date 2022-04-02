import { Component } from 'react';
import { connect } from 'react-redux';

import { cartActions } from '../../../../store/cart-slice';

import styles from './AmountController.module.css';

class AmountController extends Component {
    onIncrementHandler(id) {
        this.props.increment(id);
    }

    onDecrementHandler(id) {
        this.props.decrement(id);
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
                    onClick={() => this.onIncrementHandler(this.props.id)}
                >
                    +
                </button>
                <div className={`${styles.amount} ${amountOverlayStyles}`}>
                    {this.props.amount}
                </div>
                <button
                    className={`${styles.button} ${buttonOverlayStyles}`}
                    onClick={() => this.onDecrementHandler(this.props.id)}
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
        increment: (id) => dispatch(cartActions.increment({ id })),
        decrement: (id) => dispatch(cartActions.decrement({ id })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AmountController);
