import { Component } from 'react';
import styles from './ProductCard.module.css';
import cartGreenIcon from '../../../assets/cart-green-icon.svg';
import OutOfStock from './OutOfStock';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    outOfStockTextStyles = !this.props.inStock ? styles.outOfStockText : '';
    outOfStockArticle = !this.props.inStock ? styles.outOfStockArticle : '';

    render() {
        return (
            <Link
                className={`${styles.article} ${this.outOfStockArticle}`}
                to={`/product/${this.props.id}`}
            >
                <div className={styles.imageContainer}>
                    {!this.props.inStock && <OutOfStock />}
                    <div>
                        <img
                            className={styles.cartGreenIcon}
                            src={cartGreenIcon}
                            alt="cart icon"
                        />
                    </div>
                    <img
                        className={styles.image}
                        src={this.props.image}
                        alt="product"
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
