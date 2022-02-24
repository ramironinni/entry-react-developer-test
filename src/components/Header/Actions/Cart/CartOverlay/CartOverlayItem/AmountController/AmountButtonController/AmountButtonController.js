import { Component } from 'react';
import styles from './AmountButtonController.module.css';
import SquaredBox from '../../../../../../../../shared/SquaredBox/SquaredBox';

class AmountButtonController extends Component {
    render() {
        return (
            <div className={styles.amountButtonController}>
                <SquaredBox>{this.props.sign}</SquaredBox>
            </div>
        );
    }
}

export default AmountButtonController;
