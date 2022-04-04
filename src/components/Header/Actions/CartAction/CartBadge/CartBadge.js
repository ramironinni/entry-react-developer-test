import { Component } from 'react';

import cart from '../../../../../assets/cart.svg';

import styles from './CartBadge.module.css';

class CartBadge extends Component {
    render() {
        const cartAmount = this.props.cart.reduce((acc, curr) => {
            return acc + curr.amount;
        }, 0);

        return (
            <div
                className={styles.cart}
                onClick={this.props.onToggleOverlayHandler}
            >
                <img src={cart} alt="cart" />
                {this.props.cart.length > 0 && (
                    <div className={styles.cartAmount}>{cartAmount}</div>
                )}
            </div>
        );
    }
}

export default CartBadge;
