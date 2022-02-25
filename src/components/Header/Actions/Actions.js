import { Component } from 'react';
import Cart from './Cart/Cart';
import styles from './Actions.module.css';
import CurrencySwitcher from './CurrencySwitcher/CurrencySwitcher';

class Actions extends Component {
    render() {
        return (
            <div className={styles.actions}>
                <CurrencySwitcher />
                <Cart />
            </div>
        );
    }
}

export default Actions;
