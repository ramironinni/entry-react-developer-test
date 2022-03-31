import { Component } from 'react';
import Button from '../../../../shared/Button/Button';

import styles from './AddToCartButton.module.css';

class AddToCartButton extends Component {
    render() {
        const outOfStock = !this.props.inStock ? styles.outOfStock : '';

        return (
            <Button
                className={`${styles.button} ${outOfStock}`}
                onAddProduct={() => {
                    this.props.onAddProduct();
                }}
                extraClasses={styles.addToCartButton}
            >
                {this.props.product.inStock ? 'Add to cart' : 'Out of stock'}
            </Button>
        );
    }
}

export default AddToCartButton;
