import { Component } from 'react';

import styles from './CartBadge.module.css';

class CartBadge extends Component {
    render() {
        const cartAmount = this.props.cart.reduce((acc, curr) => {
            return acc + curr.amount;
        }, 0);

        return <div className={styles.cartAmount}>{cartAmount}</div>;
    }
}

export default CartBadge;
