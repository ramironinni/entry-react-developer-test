import { Component } from 'react';
import { connect } from 'react-redux';

import styles from './PriceCard.module.css';

class PriceCard extends Component {
    render() {
        const selectedCurrency = this.props.currencies.find(
            (currency) => currency.selected
        );

        const price = this.props.prices.find(
            (price) => price.currency.label === selectedCurrency.label
        );
        return (
            <div className={styles.priceCard}>
                <p className={styles.priceTitle}>PRICE: </p>
                <p className={styles.price}>
                    {price.currency.symbol} {price.amount}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies.currencies,
    };
};

export default connect(mapStateToProps)(PriceCard);
