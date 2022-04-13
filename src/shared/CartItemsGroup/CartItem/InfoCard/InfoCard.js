import { Component } from 'react';
import { connect } from 'react-redux';

import AttributesCard from '../../../AttributesCard/AttributesCard';

import styles from './InfoCard.module.css';

class InfoCard extends Component {
    render() {
        const { id, name, prices, attributes, inputName, isPage, isCart } =
            this.props;

        const selectedCurrency = this.props.currencies.find(
            (currency) => currency.selected
        );

        const price = prices.find(
            (price) => price.currency.label === selectedCurrency.label
        );

        const infoCardOverlayStyles = !this.props.isPage
            ? styles.infoCardOverlay
            : '';
        const nameOverlayStyles = !this.props.isPage ? styles.nameOverlay : '';
        const priceOverlayStyles = !this.props.isPage
            ? styles.priceOverlay
            : '';

        return (
            <div className={`${styles.infoCard} ${infoCardOverlayStyles}`}>
                <div className={`${styles.name} ${nameOverlayStyles}`}>
                    {name}
                </div>
                <div className={`${styles.price} ${priceOverlayStyles}`}>
                    {price.currency.symbol} {price.amount}
                </div>
                {attributes.map((attributeSet, i) => {
                    return (
                        <AttributesCard
                            key={i}
                            index={i}
                            prodId={id}
                            attributeSet={attributeSet}
                            inputName={inputName}
                            isPage={isPage}
                            isCart={isCart}
                        />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies.currencies,
    };
};

export default connect(mapStateToProps)(InfoCard);
