import { Component } from 'react';
import AmountButtonController from './AmountButtonController/AmountButtonController';
import styles from './AmountController.module.css';

class AmountController extends Component {
    render() {
        return (
            <div className={styles.amountController}>
                <AmountButtonController sign="-" />
                <div>{this.props.amount}</div>
                <AmountButtonController sign="+" />
            </div>
        );
    }
}

export default AmountController;
