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

    getSelectedAttributesHandler = (setId, itemId) => {
        this.setState((prevState) => {
            console.log(prevState.selectedAtributtes.length);
            let updatedState = {
                selectedAtributtes: [
                    ...prevState.selectedAtributtes,
                    { setId, itemId },
                ],
            };

            // if (prevState.selectedAtributtes.length > 0) {
            //     // console.log(prevState.selectedAtributtes);
            //     const foundAttSet = prevState.selectedAttributes.filter(
            //         (attSet) => attSet.id === setId
            //     );
            //     if (foundAttSet) {
            //         foundAttSet.itemId = itemId;
            //     }
            //     const nonModifiedAttSet = prevState.selectedAtributtes.filter(
            //         (attSet) => attSet.id !== setId
            //     );
            //     updatedState = {
            //         selectedAtributtes: [...nonModifiedAttSet, ...foundAttSet],
            //     };
            //     // console.log(foundAttSet, 'FOUND');
            // }
            return updatedState;
        });
    };

    dirty = this.props.description;

    getHTMLDescription() {
        return { __html: DOMPurify.sanitize(this.dirty) };
    }

    componentDidUpdate() {
        console.log(this.state);
        // console.log('updated');
    }

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
                    onClick={() => {
                        console.log(
                            this.props.id,
                            this.state.selectedAtributtes
                        );
                        this.props.add(
                            this.props.id,
                            this.state.selectedAtributtes
                        );
                    }}
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
        add: (id, selectedAttributes) =>
            dispatch(cartActions.add({ id, selectedAttributes })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
