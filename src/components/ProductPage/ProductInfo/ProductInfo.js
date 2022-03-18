import { Component } from 'react';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';

import styles from './ProductInfo.module.css';
import AttributesCard from '../../../shared/AttributesCard/AttributesCard';

class ProductInfo extends Component {
    dirty = this.props.description;

    getHTMLDescription() {
        return { __html: DOMPurify.sanitize(this.dirty) };
    }

    getPrice() {}

    render() {
        const outOfStockButton = !this.props.inStock
            ? styles.outOfStockButton
            : '';

        const selectedCurrency = this.props.currencies.find(
            (currency) => currency.selected
        );

        const price = this.props.prices.find(
            (price) => price.currency.label === selectedCurrency.label
        );

        return (
            <div className={styles.productInfo}>
                <p className={styles.productName}>{this.props.name}</p>
                {/* <p className={styles.productShortDesc}>
                    {this.props.description}
                </p> */}

                {this.props.attributes.map((attributeSet, i) => {
                    return (
                        <AttributesCard
                            key={i}
                            index={i}
                            attributeSet={attributeSet}
                            inputName={'ProductPage'}
                        />
                    );
                })}

                <div className={styles.priceContainer}>
                    <p className={styles.priceTitle}>PRICE: </p>
                    <p className={styles.price}>
                        {price.currency.label} {price.amount}
                    </p>
                </div>
                <button className={`${styles.button} ${outOfStockButton}`}>
                    {this.props.inStock ? 'Add to cart' : 'Out of stock'}
                </button>
                <div
                    className={styles.productLongDesc}
                    dangerouslySetInnerHTML={this.getHTMLDescription()}
                ></div>
                {/* <p className={styles.productLongDesc}>
                    {this.props.description}
                </p> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies.currencies,
    };
};

export default connect(mapStateToProps)(ProductInfo);
