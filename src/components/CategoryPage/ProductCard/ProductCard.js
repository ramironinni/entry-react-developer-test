import { Component } from 'react';
import { Link } from 'react-router-dom';

import cartGreenIcon from '../../../assets/cart-green-icon.svg';

import styles from './ProductCard.module.css';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductImage from './ProductImage/ProductImage';
class ProductCard extends Component {
    render() {
        const { name, inStock, priceSymbol, priceAmount } = this.props;

        const outOfStockProduct = !inStock ? styles.outOfStockProduct : '';

        return (
            <div className={`${styles.productCard} ${outOfStockProduct}`}>
                <Link className={styles.info} to={`/product/${this.props.id}`}>
                    <ProductImage
                        image={this.props.image}
                        inStock={this.props.inStock}
                    />
                    <ProductDescription
                        name={name}
                        inStock={inStock}
                        priceSymbol={priceSymbol}
                        priceAmount={priceAmount}
                    />
                    <div>
                        <img
                            className={styles.cartGreenIcon}
                            src={cartGreenIcon}
                            alt="cart icon"
                        />
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProductCard;
