import { Component } from 'react';
import styles from './ProductCard.module.css';
import cartGreenIcon from '../../../assets/cart-green-icon.svg';

class ProductCard extends Component {
    render() {
        return (
            <article>
                <div className={styles.imageContainer}>
                    <div>
                        <img
                            src={cartGreenIcon}
                            alt="cart icon"
                            className={styles.cartGreenIcon}
                        />
                    </div>
                    <img
                        src="https://dummyimage.com/350/8c8c8c/e8e8e8.jpg"
                        alt="product"
                        className={styles.image}
                    />
                </div>
                <div className={styles.descriptionContainer}>
                    <p className={styles.descriptionName}>Product Name</p>
                    <p className={styles.descriptionPrice}>$00.00</p>
                </div>
            </article>
        );
    }
}

export default ProductCard;
