import { Component } from 'react';
import styles from './CategoryPage.module.css';
import ProductCard from './ProductCard/ProductCard';

class CategoryPage extends Component {
    DUMMY_PRODUCTS = [
        { id: 1, name: 'something 1', stock: 5 },
        { id: 2, name: 'something 2', stock: 5 },
        { id: 3, name: 'something 3', stock: 0 },
        { id: 4, name: 'something 4', stock: 5 },
        { id: 5, name: 'something 5', stock: 5 },
        { id: 6, name: 'something 6', stock: 5 },
    ];
    render() {
        return (
            <main>
                <div className={styles.title}>Category Name</div>
                <div className={styles.productsContainer}>
                    {this.DUMMY_PRODUCTS.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                name={product.name}
                                stock={product.stock}
                            />
                        );
                    })}
                </div>
            </main>
        );
    }
}

export default CategoryPage;
