import { Component } from 'react';
import arrow from '../../../../assets/arrow.svg';
import styles from './CurrencyDisplayer.module.css';
import Modal from '../ActionsModal/Modal';

class CurrencyDisplayer extends Component {
    render() {
        return (
            <div className={styles.currencyCard}>
                <div className={styles.currencyCurrent}>&#36;</div>
                <div>
                    <img src={arrow} alt="currency switcher" />
                </div>
                <Modal>content</Modal>
            </div>
        );
    }
}

export default CurrencyDisplayer;
