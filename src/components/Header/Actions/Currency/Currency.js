import { Component } from 'react';
import ActionItem from '../ActionItem/ActionItem';
import arrow from '../../../../assets/arrow.svg';
import styles from './Currency.module.css';
import Modal from '../ActionsModal/Modal';

class CurrencyDisplayer extends Component {
    render() {
        return (
            <ActionItem className={styles.currencyCard}>
                <div className={styles.currencyCurrent}>&#36;</div>
                <div>
                    <img src={arrow} alt="currency switcher" />
                </div>
                <Modal>content</Modal>
            </ActionItem>
        );
    }
}

export default CurrencyDisplayer;
