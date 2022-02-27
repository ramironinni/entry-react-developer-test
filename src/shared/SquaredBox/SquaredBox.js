import { Component } from 'react';
import styles from './SquaredBox.module.css';

class SquaredBox extends Component {
    pageStyles = this.props.cartType === 'page' ? styles.page : '';
    sizeStyles = this.props.squareType === 'size' ? styles.size : '';
    amountStyles = this.props.squareType === 'amount' ? styles.amount : '';

    render() {
        return (
            <div
                className={`${styles.squaredBox} ${
                    this.props.squareType === 'size' &&
                    !this.props.selected &&
                    styles.nonSelected
                } ${this.pageStyles} ${this.sizeStyles} ${this.amountStyles}`}
            >
                {this.props.children}
            </div>
        );
    }
}

export default SquaredBox;
