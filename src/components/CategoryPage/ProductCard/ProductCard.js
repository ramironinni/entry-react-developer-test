import { Component } from 'react';
import styles from './ProductCard.module.css';
import cartGreenIcon from '../../../assets/cart-green-icon.svg';
import OutOfStock from './OutOfStock';

class ProductCard extends Component {
    render() {
        return (
            <div className={styles.container}>
                {this.props.stock === 0 && <OutOfStock />}
                <article className={styles.article}>
                    <div className={styles.imageContainer}>
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
                        <p className={styles.descriptionName}>
                            {this.props.name}
                        </p>
                        <p className={styles.descriptionPrice}>$00.00</p>
                    </div>
                </article>
            </div>
        );
    }
}

export default ProductCard;
