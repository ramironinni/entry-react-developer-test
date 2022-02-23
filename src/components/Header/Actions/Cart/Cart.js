import { Component } from 'react';
import cart from '../../../../assets/cart.svg';
import styles from './Cart.module.css';

class Cart extends Component {
    render() {
        return (
            <div className={styles.cart}>
                <div>
                    <img src={cart} alt="cart" />
                </div>
            </div>
        );
    }
}

export default Cart;
