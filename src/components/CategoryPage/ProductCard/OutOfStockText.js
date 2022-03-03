import { Component } from 'react';
import styles from './OutOfStockText.module.css';

class OutOfStockText extends Component {
    render() {
        return <p className={styles.message}>Out of stock</p>;
    }
}

export default OutOfStockText;
