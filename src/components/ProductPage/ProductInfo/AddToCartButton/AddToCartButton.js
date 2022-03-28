import { Component } from 'react';

import styles from './AddToCartButton.module.css';

class AddToCartButton extends Component {
    render() {
        const outOfStock = !this.props.inStock ? styles.outOfStock : '';

        return (
            <button
                className={`${styles.button} ${outOfStock}`}
                onClick={() => {
                    console.log(this.props.id, this.props.selectedAtributtes);
                    this.props.onAddProduct(
                        this.props.id,
                        this.props.selectedAtributtes
                    );
                }}
            >
                {this.props.inStock ? 'Add to cart' : 'Out of stock'}
            </button>
        );
    }
}

export default AddToCartButton;
