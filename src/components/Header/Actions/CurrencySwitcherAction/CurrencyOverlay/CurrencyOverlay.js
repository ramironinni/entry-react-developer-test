import { Component } from 'react';
import Modal from '../../Modal/Modal';
import CurrencyItem from '../CurrencyItem/CurrencyItem';
import styles from './CurrencyOverlay.module.css';

class CurrencyOverlay extends Component {
    render() {
        return (
            <div className={styles.currencyOverlay}>
                <Modal
                    overlayClasses={styles.modalOverlay}
                    onBackdropClickHandler={this.props.onBackdropClickHandler}
                >
                    {!this.props.isLoading &&
                        this.props.currencies.map((currency, i) => {
                            return (
                                <CurrencyItem
                                    key={i}
                                    symbol={currency.symbol}
                                    label={currency.label}
                                    onSwitchCurrency={
                                        this.props.onSwitchCurrency
                                    }
                                ></CurrencyItem>
                            );
                        })}
                </Modal>
            </div>
        );
    }
}

export default CurrencyOverlay;
