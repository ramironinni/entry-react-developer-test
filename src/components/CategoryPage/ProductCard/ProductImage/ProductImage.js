import { Component } from 'react';
import OutOfStock from '../OutOfStock/OutOfStock';

import styles from './ProductImage.module.css';

class ProductImage extends Component {
    render() {
        const { image, inStock } = this.props;

        return (
            <div className={styles.imageContainer}>
                {!inStock && <OutOfStock />}
                <img className={styles.image} src={image} alt="product" />
            </div>
        );
    }
}

export default ProductImage;
