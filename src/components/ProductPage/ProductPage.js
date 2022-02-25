import { Component } from 'react';
import Page from '../Page';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import styles from './ProductPage.module.css';
import Button from '../../shared/Button/Button';

class ProductPage extends Component {
    DUMMY_PRODUCT = {
        name: 'Apollo',
        shortDesc: 'Running Short',
        sizes: [
            { name: 'xs', available: false, selected: false },
            { name: 's', available: true, selected: true },
            { name: 'm', available: true, selected: false },
            { name: 'l', available: true, selected: false },
        ],
        price: 50,
        longDesc:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
    };

    render() {
        return (
            <Page pageClasses={styles.page}>
                <ProductGallery />
                <ProductInfo product={this.DUMMY_PRODUCT} />
            </Page>
        );
    }
}

export default ProductPage;
