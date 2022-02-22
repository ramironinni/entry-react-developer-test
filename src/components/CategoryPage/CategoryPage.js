import { Component } from 'react';
import styles from './CategoryPage.module.css';
import ProductCard from './ProductCard/ProductCard';

class CategoryPage extends Component {
    render() {
        return (
            <main>
                <div className={styles.title}>Category Name</div>
                <div className={styles.productsContainer}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </main>
        );
    }
}

export default CategoryPage;
