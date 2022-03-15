import { Component } from 'react';
import styles from './ProductInfo.module.css';
import DOMPurify from 'dompurify';
import AttributesCard from './AttributesCard/AttributesCard';

class ProductInfo extends Component {
    dirty = this.props.description;

    getHTMLDescription() {
        return { __html: DOMPurify.sanitize(this.dirty) };
    }

    render() {
        const outOfStockButton = !this.props.inStock
            ? styles.outOfStockButton
            : '';

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
                    <p className={styles.price}>$50.00</p>
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

export default ProductInfo;
