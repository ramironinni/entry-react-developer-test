import { Component } from 'react';
import arrow from '../../../../assets/arrow.svg';
import styles from './CurrencySwitcher.module.css';
import Modal from '../ActionsModal/Modal';

class CurrencySwitcher extends Component {
    DUMMY_CURRENCIES = [
        { symbol: '$', code: 'USD' },
        { symbol: '€', code: 'EUR' },
        { symbol: '¥', code: 'JPY' },
    ];
    render() {
        return (
            <div className={styles.currencySwitcher}>
                <div className={styles.currencyCurrent}>&#36;</div>
                <div>
                    <img src={arrow} alt="currency switcher" />
                </div>
                <Modal
                    overlayClasses={styles.modalOverlay}
                    backdropClasses={styles.backdrop}
                >
                    {this.DUMMY_CURRENCIES.map((currency, i) => {
                        return (
                            <p className={styles.currencyItem} key={i}>
                                {currency.symbol} {currency.code}
                            </p>
                        );
                    })}
                </Modal>
            </div>
        );
    }
}

export default CurrencySwitcher;
