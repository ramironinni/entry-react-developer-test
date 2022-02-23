import { Component } from 'react';
import Cart from './Cart/Cart';
import CurrencyDisplayer from './CurrencyDisplayer/CurrencyDisplayer';
import styles from './Actions.module.css';

class Actions extends Component {
    render() {
        return (
            <div className={styles.actions}>
                <CurrencyDisplayer />
                <Cart />
            </div>
        );
    }
}

export default Actions;
