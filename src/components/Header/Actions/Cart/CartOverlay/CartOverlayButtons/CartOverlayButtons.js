import { Component } from 'react';
import styles from './CartOverlayButtons.module.css';

class CartOverlayButtons extends Component {
    render() {
        return (
            <div className={styles.cartOverlayButtons}>{this.props.text}</div>
        );
    }
}

export default CartOverlayButtons;
