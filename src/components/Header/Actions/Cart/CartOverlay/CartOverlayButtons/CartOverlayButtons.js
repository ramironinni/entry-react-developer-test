import { Component } from 'react';
import Button from '../../../../../../shared/Button/Button';
import styles from './CartOverlayButtons.module.css';

class CartOverlayButtons extends Component {
    render() {
        return (
            <div className={styles.cartOverlayButtons}>
                <Button text="view bag" />
                <Button text="check out" extraClasses={styles.buttonCheckout} />
            </div>
        );
    }
}

export default CartOverlayButtons;
