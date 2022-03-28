import { Component } from 'react';
import styles from './OutOfStock.module.css';

class OutOfStock extends Component {
    render() {
        return (
            <div className={styles.outOfStock}>
                <p className={styles.message}>Out of stock</p>
            </div>
        );
    }
}

export default OutOfStock;
