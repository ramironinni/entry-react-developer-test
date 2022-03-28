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
                    <Button>view bag</Button>
                </Link>
                <Button extraClasses={styles.buttonCheckout}>check out</Button>
            </div>
        );
    }
}

export default CartOverlayButtons;
