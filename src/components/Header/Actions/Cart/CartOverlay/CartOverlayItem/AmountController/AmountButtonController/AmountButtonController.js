import { Component } from 'react';
import styles from './AmountButtonController.module.css';

class AmountButtonController extends Component {
    render() {
        return (
            <div className={styles.amountButtonController}>
                {this.props.sign}
            </div>
        );
    }
}

export default AmountButtonController;
