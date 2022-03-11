import { Component } from 'react';
import styles from './ProductCard.module.css';
import cartGreenIcon from '../../../assets/cart-green-icon.svg';
import OutOfStock from './OutOfStock';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    outOfStockTextStyles = this.props.stock === 0 ? styles.outOfStockText : '';
    outOfStockArticle = this.props.stock === 0 ? styles.outOfStockArticle : '';

    render() {
        return (
            <Link
                className={`${styles.article} ${this.outOfStockArticle}`}
                to={`/product/${this.props.id}`}
            >
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
                        {this.props.priceSymbol}
                        {this.props.priceAmount}
                    </p>
                </div>
            </Link>
        );
    }
}

export default ProductCard;
