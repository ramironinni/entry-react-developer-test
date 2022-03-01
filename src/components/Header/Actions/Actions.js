import { Component } from 'react';
import Cart from './Cart/Cart';
import styles from './Actions.module.css';
import CurrencySwitcher from './CurrencySwitcher/CurrencySwitcher';

class Actions extends Component {
    constructor() {
        super();
        this.state = { showCurrencyOverlay: false, showCartOverlay: false };
    }

    toggleCurrencyOverlayHandler() {
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
                <CurrencySwitcher
                    onToggleOverlayHandler={this.toggleCurrencyOverlayHandler.bind(
                        this
                    )}
                    showOverlay={this.state.showCurrencyOverlay}
                />
                <Cart
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
