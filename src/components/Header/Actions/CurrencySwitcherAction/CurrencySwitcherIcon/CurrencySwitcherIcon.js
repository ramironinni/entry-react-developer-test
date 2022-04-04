import { Component } from 'react';

import arrow from '../../../../../assets/arrow.svg';

import styles from './CurrencySwitcherIcon.module.css';
class CurrencySwitcherIcon extends Component {
    render() {
        const invertedArrow = this.props.showOverlay
            ? styles.invertedArrow
            : '';

        return (
            <div
                className={styles.currencySwitcherIcon}
                onClick={this.props.onToggleOverlayHandler}
            >
                <div className={styles.currencyCurrent}>
                    {this.props.currencySymbol}
                </div>
                <div>
                    <img
                        className={`${invertedArrow}`}
                        src={arrow}
                        alt="currency switcher"
                    />
                </div>
            </div>
        );
    }
}

export default CurrencySwitcherIcon;
