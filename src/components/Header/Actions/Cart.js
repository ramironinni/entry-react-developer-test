import { Component } from 'react';
import ActionItem from './ActionItem/ActionItem';
import cart from '../../../assets/cart.svg';

class Cart extends Component {
    render() {
        return (
            <ActionItem>
                <div>
                    <img src={cart} alt="cart" />
                </div>
            </ActionItem>
        );
    }
}

export default Cart;
