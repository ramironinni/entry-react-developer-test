import { Component } from 'react';
import arrow from '../../../../assets/arrow.svg';
import styles from './CurrencyDisplayer.module.css';

class CurrencyDisplayer extends Component {
    render() {
        return (
            <div className={styles.currencyCard}>
                <div className={styles.currencyCurrent}>&#36;</div>
                <div>
                    <img src={arrow} alt="currency switcher" />
                </div>
            </div>
        );
    }
}

export default CurrencyDisplayer;
