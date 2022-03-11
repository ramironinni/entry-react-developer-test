import { Component } from 'react';
import styles from './CurrencyItem.module.css';

class CurrencyItem extends Component {
    render() {
        return (
            <button
                className={styles.currencyItem}
                onClick={() => {
                    this.props.onSwitchCurrency(this.props.label);
                }}
            >
                {this.props.symbol} {this.props.label}
            </button>
        );
    }
}

export default CurrencyItem;
