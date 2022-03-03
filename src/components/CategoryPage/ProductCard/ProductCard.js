import { Component } from 'react';
import styles from './ProductCard.module.css';
import cartGreenIcon from '../../../assets/cart-green-icon.svg';
import OutOfStock from './OutOfStock';

class ProductCard extends Component {
    outOfStockTextStyles = this.props.stock === 0 ? styles.outOfStockText : '';
    outOfStockArticle = this.props.stock === 0 ? styles.outOfStockArticle : '';

    render() {
        return (
            <article className={`${styles.article} ${this.outOfStockArticle}`}>
                <div className={styles.imageContainer}>
                    {this.props.stock === 0 && <OutOfStock />}
                    <div>
                        <img
                            src={cartGreenIcon}
                            alt="cart icon"
                            className={styles.cartGreenIcon}
                        />
                    </div>
                    <img
                        src="https://dummyimage.com/350/884bcf/8accae"
                        alt="product"
                        className={styles.image}
                    />
                </div>
                <div className={styles.descriptionContainer}>
                    <p
                        className={`${styles.descriptionName} ${this.outOfStockTextStyles}`}
                    >
                        {this.props.name}
                    </p>
                    <p
                        className={`${styles.descriptionPrice} ${this.outOfStockTextStyles}`}
                    >
                        $00.00
                    </p>
                </div>
            </article>
        );
    }
}

export default ProductCard;
