import { Component } from 'react';

import styles from './ProductDescription.module.css';

class ProductDescription extends Component {
    render() {
        const { inStock, name, priceSymbol, priceAmount } = this.props;

        const outOfStockTextStyles = !inStock ? styles.outOfStockText : '';

        return (
            <div className={styles.descriptionContainer}>
                <p
                    className={`${styles.descriptionName} ${outOfStockTextStyles}`}
                >
                    {name}
                </p>
                <p
                    className={`${styles.descriptionPrice} ${outOfStockTextStyles}`}
                >
                    {priceSymbol}
                    {priceAmount}
                </p>
            </div>
        );
    }
}

export default ProductDescription;
