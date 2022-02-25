import { Component } from 'react';
import Page from '../Page';
import ProductGallery from './ProductGallery/ProductGallery';
import styles from './ProductPage.module.css';

class ProductPage extends Component {
    render() {
        return (
            // <Page pageClasses={styles.page}>
            <Page>
                <ProductGallery />
            </Page>
        );
    }
}

export default ProductPage;
