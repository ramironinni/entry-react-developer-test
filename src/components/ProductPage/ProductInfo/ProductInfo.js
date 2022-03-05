import { Component } from 'react';
import Button from '../../../shared/Button/Button';
import styles from './ProductInfo.module.css';
import SizeCard from './SizeCard/SizeCard';

class ProductInfo extends Component {
    render() {
        return (
            <div className={styles.productInfo}>
                <p className={styles.productName}>{this.props.product.name}</p>
                <p className={styles.productShortDesc}>
                    {this.props.product.shortDesc}
                </p>

                <SizeCard
                    sizes={this.props.product.sizes}
                    itemNumber={'product-page'}
                />
                <p className={styles.priceTitle}>PRICE: </p>
                <p className={styles.price}>$50.00</p>
                <button className={styles.button}>Add to cart</button>
                <p className={styles.productLongDesc}>
                    {this.props.product.longDesc}
                </p>
            </div>
        );
    }
}

export default ProductInfo;
