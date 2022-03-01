import { Component } from 'react';
import arrow from '../../../../assets/arrow.svg';
import styles from './CurrencySwitcher.module.css';
import Modal from '../ActionsModal/Modal';

class CurrencySwitcher extends Component {
    constructor() {
        super();
        this.state = { showOverlay: false };
    }

    toggleCurrencySwitcherHandler() {
        this.setState((curState) => {
            return { showOverlay: !curState.showOverlay };
        });
    }

    DUMMY_CURRENCIES = [
        { symbol: '$', code: 'USD' },
        { symbol: '€', code: 'EUR' },
        { symbol: '¥', code: 'JPY' },
    ];
    render() {
        return (
            <div
                className={styles.currencySwitcher}
                onClick={this.toggleCurrencySwitcherHandler.bind(this)}
            >
                <div className={styles.currencyCurrent}>&#36;</div>
                <div>
                    <img src={arrow} alt="currency switcher" />
                </div>
                {this.state.showOverlay && (
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
                )}
            </div>
        );
    }
}

export default CurrencySwitcher;
