import { Component } from 'react';
import DOMPurify from 'dompurify';
import { connect } from 'react-redux';

import styles from './ProductInfo.module.css';
import AttributesCard from '../../../shared/AttributesCard/AttributesCard';
import { cartActions } from '../../../store/cart-slice';

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedAtributtes: [] };
    }

    getSelectedAttributesHandler = (selectedAtributtes) => {
        this.setState({ selectedAtributtes });
    };

    dirty = this.props.description;

    getHTMLDescription() {
        return { __html: DOMPurify.sanitize(this.dirty) };
    }

    getPrice() {}

    render() {
        const { id, name, inStock, attributes, prices, currencies } =
            this.props;

        const outOfStockButton = !inStock ? styles.outOfStockButton : '';

        const selectedCurrency = currencies.find(
            (currency) => currency.selected
        );

        const price = prices.find(
            (price) => price.currency.label === selectedCurrency.label
        );

        return (
            <div className={styles.productInfo}>
                <p className={styles.productName}>{name}</p>
                {/* <p className={styles.productShortDesc}>
                    {description}
                </p> */}

                {attributes.map((attributeSet, i) => {
                    return (
                        <AttributesCard
                            key={i}
                            index={i}
                            prodId={id}
                            attributeSet={attributeSet}
                            inputName={'ProductPage'}
                            onGetSelectedAttributes={this.getSelectedAttributesHandler.bind(
                                this
                            )}
                        />
                    );
                })}

                <div className={styles.priceContainer}>
                    <p className={styles.priceTitle}>PRICE: </p>
                    <p className={styles.price}>
                        {price.currency.label} {price.amount}
                    </p>
                </div>
                <button
                    className={`${styles.button} ${outOfStockButton}`}
                    onClick={() => {}}
                >
                    {inStock ? 'Add to cart' : 'Out of stock'}
                </button>
                <div
                    className={styles.productLongDesc}
                    dangerouslySetInnerHTML={this.getHTMLDescription()}
                ></div>
                {/* <p className={styles.productLongDesc}>
                    {description}
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

const mapDispatchToProps = (dispatch) => {
    return {
        add: (id, attributes) => dispatch(cartActions.add({ id, attributes })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
