import { Component } from 'react';

import CurrencySwitcherAction from './CurrencySwitcherAction/CurrencySwitcherAction';
import CartAction from './CartAction/CartAction';

import styles from './Actions.module.css';

class Actions extends Component {
    constructor() {
        super();
        this.state = { showCurrencyOverlay: false, showCartOverlay: false };
    }

    toggleCurrencyOverlayHandler() {
        console.log('backdrop clicked');
        this.setState((curState) => {
            if (curState.showCartOverlay) {
                return {
                    showCurrencyOverlay: !curState.showCurrencyOverlay,
                    showCartOverlay: false,
                };
            }

            return { showCurrencyOverlay: !curState.showCurrencyOverlay };
        });
    }

    toggleCartOverlayHandler() {
        this.setState((curState) => {
            if (curState.showCurrencyOverlay) {
                return {
                    showCartOverlay: !curState.showCartOverlay,
                    showCurrencyOverlay: false,
                };
            }
            return { showCartOverlay: !curState.showCartOverlay };
        });
    }

    render() {
        return (
            <div className={styles.actions}>
                <CurrencySwitcherAction
                    onToggleOverlayHandler={this.toggleCurrencyOverlayHandler.bind(
                        this
                    )}
                    showOverlay={this.state.showCurrencyOverlay}
                />
                <CartAction
                    onToggleOverlayHandler={this.toggleCartOverlayHandler.bind(
                        this
                    )}
                    showOverlay={this.state.showCartOverlay}
                />
            </div>
        );
    }
}

export default Actions;
