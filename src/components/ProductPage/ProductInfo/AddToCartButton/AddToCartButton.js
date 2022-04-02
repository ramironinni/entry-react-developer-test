import { Component } from 'react';
import Button from '../../../../shared/Button/Button';

import styles from './AddToCartButton.module.css';

class AddToCartButton extends Component {
    render() {
        const extraClasses = this.props.product.inStock
            ? styles.addToCartButton
            : styles.outOfStock;

        return (
            <Button
                onClickHandler={this.props.onAddProduct}
                isProductPage={true}
                inStock={this.props.product.inStock}
                extraClasses={`${extraClasses}`}
            >
                {this.props.product.inStock ? 'Add to cart' : 'Out of stock'}
            </Button>
        );
    }
}

export default AddToCartButton;
