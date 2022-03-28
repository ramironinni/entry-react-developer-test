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
                    console.log(this.props.id, this.props.selectedAtributtes);
                    this.props.onAddProduct(
                        this.props.id,
                        this.props.selectedAtributtes
                    );
                }}
                extraClasses={styles.addToCartButton}
            >
                {this.props.inStock ? 'Add to cart' : 'Out of stock'}
            </Button>
        );
    }
}

export default AddToCartButton;
