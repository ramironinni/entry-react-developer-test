import { Component } from 'react';
import AmountController from './AmountController/AmountController';
import styles from './CartItem.module.css';
import InfoCard from './InfoCard/InfoCard';
import Thumbnail from './Thumbnail/Thumbnail';

class CartItem extends Component {
    render() {
        return (
            <div className={styles.cartOverlayItem}>
                <InfoCard
                    name={this.props.item.name}
                    price={this.props.item.price}
                    size={this.props.item.size}
                    shortDesc={this.props.item.shortDesc}
                    cartType="page"
                />
                <AmountController
                    amount={this.props.item.amount}
                    cartType="page"
                    squareType="amount"
                />
                <Thumbnail img={this.props.item.img} />
            </div>
        );
    }
}

export default CartItem;
