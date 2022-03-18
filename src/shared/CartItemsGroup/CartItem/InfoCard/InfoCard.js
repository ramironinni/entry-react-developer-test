import { Component } from 'react';
import { connect } from 'react-redux';
import AttributesCard from '../../../AttributesCard/AttributesCard';
import styles from './InfoCard.module.css';

class InfoCard extends Component {
    render() {
        const { name, prices, attributes, inputName } = this.props;

        const selectedCurrency = this.props.currencies.find(
            (currency) => currency.selected
        );

        const price = prices.find(
            (price) => price.currency.label === selectedCurrency.label
        );

        return (
            <div className={styles.infoCard}>
                <div className={styles.name}>{name}</div>
                {/* <div className={styles.shortDesc}>{this.props.description}</div> */}
                <div className={styles.price}>
                    {price.currency.label} {price.amount}
                </div>
                {attributes.map((attributeSet, i) => {
                    return (
                        <AttributesCard
                            key={i}
                            index={i}
                            attributeSet={attributeSet}
                            inputName={inputName}
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
