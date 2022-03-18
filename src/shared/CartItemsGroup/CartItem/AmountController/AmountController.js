import { Component } from 'react';
import styles from './AmountController.module.css';

class AmountController extends Component {
    render() {
        return (
            <div className={styles.amountController}>
                <button
                    className={`${styles.button} ${this.props.extraClasses}`}
                    onClick={() => this.props.onAddToCart(this.props.id)}
                >
                    +
                </button>
                <div>{this.props.amount}</div>
                <button
                    className={`${styles.button} ${this.props.extraClasses}`}
                    onClick={() => this.props.onRemoveFromCart(this.props.id)}
                >
                    -
                </button>
            </div>
        );
    }
}

export default AmountController;
