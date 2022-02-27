import { Component } from 'react';
import AmountButtonController from './AmountButtonController/AmountButtonController';
import styles from './AmountController.module.css';

class AmountController extends Component {
    pageStyles = this.props.cartType === 'page' ? styles.page : '';

    render() {
        return (
            <div className={styles.amountController}>
                <AmountButtonController
                    sign="+"
                    cartType={this.props.cartType}
                    squareType={this.props.squareType}
                />
                <div>{this.props.amount}</div>
                <AmountButtonController
                    sign="-"
                    cartType={this.props.cartType}
                    squareType={this.props.squareType}
                />
            </div>
        );
    }
}

export default AmountController;
