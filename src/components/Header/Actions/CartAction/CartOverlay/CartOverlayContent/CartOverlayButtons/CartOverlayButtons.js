import { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../../../../shared/Button/Button';
import styles from './CartOverlayButtons.module.css';

class CartOverlayButtons extends Component {
    render() {
        return (
            <div className={styles.cartOverlayButtons}>
                <Link
                    className={styles.link}
                    to="/cart"
                    onClick={this.props.onCloseOverlayHandler}
                >
                    <Button text="view bag" />
                </Link>
                <Button text="check out" extraClasses={styles.buttonCheckout} />
            </div>
        );
    }
}

export default CartOverlayButtons;
