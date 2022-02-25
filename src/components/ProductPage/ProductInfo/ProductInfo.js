import { Component } from 'react';
import styles from './ProductInfo.module.css';
import SizeCard from './SizeCard/SizeCard';
import SizeGroup from './SizeCard/SizeGroup/SizeGroup';

class ProductInfo extends Component {
    render() {
        return (
            <div className={styles.productInfo}>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.shortDesc}</p>

                <SizeCard sizes={this.props.product.sizes} />
            </div>
        );
    }
}

export default ProductInfo;
