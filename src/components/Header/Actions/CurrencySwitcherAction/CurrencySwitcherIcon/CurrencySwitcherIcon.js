import { Component } from 'react';
import styles from './CurrencySwitcherIcon.module.css';

import arrow from '../../../../../assets/arrow.svg';

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
                <div className={styles.currencyCurrent}>&#36;</div>
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
