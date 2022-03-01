import { Component } from 'react';
import styles from './AmountController.module.css';

class AmountController extends Component {
    render() {
        return (
            <div className={styles.amountController}>
                <div className={`${styles.button} ${this.props.extraClasses}`}>
                    +
                </div>
                <div className={`${styles.button} ${this.props.extraClasses}`}>
                    -
                </div>
            </div>
        );
    }
}

export default AmountController;
