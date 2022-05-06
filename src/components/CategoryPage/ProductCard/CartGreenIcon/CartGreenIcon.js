import { Component } from 'react';
import { connect } from 'react-redux';

import cartGreenIcon from '../../../../assets/cart-green-icon.svg';
import { cartActions } from '../../../../store/cart-slice';

class CartGreenIcon extends Component {
    onAddToCartHandler = () => {
        const attributes = [];

        this.props.product.attributes.forEach((attSet, index) => {
            const item = attSet.items[0];
            attributes.push({ setId: attSet.id, itemId: item.id, index });
        });

        this.props.add(this.props.product, attributes);
    };

    render() {
        return (
            <div
                className={this.props.className}
                onClick={this.onAddToCartHandler}
            >
                <img src={cartGreenIcon} alt="cart icon" />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (product, selectedAttributes) =>
            dispatch(cartActions.add({ product, selectedAttributes })),
    };
};

export default connect(null, mapDispatchToProps)(CartGreenIcon);
