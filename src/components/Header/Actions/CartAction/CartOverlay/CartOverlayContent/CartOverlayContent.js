import { Component } from 'react';

import CartOverlayButtons from './CartOverlayButtons/CartOverlayButtons';
import CartItemsGroup from '../../../../../../shared/CartItemsGroup/CartItemsGroup';

import styles from './CartOverlayContent.module.css';
import { connect } from 'react-redux';
class CartOverlayContent extends Component {
    render() {
        const selectedCurrency = this.props.currencies.find(
            (currency) => currency.selected
        );

        const grandTotalPrice = this.props.cartGrandTotalPrices.find(
            (price) => price.currency.label === selectedCurrency.label
        );

        return (
            <div className={styles.cartOverlay}>
                <p className={styles.title}>
                    <span className={styles.myBag}>My Bag,&nbsp;</span>
                    {this.props.cart.length} items
                </p>
                <CartItemsGroup isPage={false} inputNameComp={'CartOverlay'} />
                <div className={styles.grandTotal}>
                    <p>Total</p>
                    <p>
                        {grandTotalPrice.currency.symbol}
                        {grandTotalPrice.amount.toFixed(2)}
                    </p>
                </div>
                <CartOverlayButtons
                    onCloseOverlayHandler={this.props.onCloseOverlayHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartGrandTotalPrices: state.cart.cartGrandTotalPrices,
        currencies: state.currencies.currencies,
    };
};

export default connect(mapStateToProps, null)(CartOverlayContent);
