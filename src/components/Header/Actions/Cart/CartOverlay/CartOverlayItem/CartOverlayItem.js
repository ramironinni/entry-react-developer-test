import { Component } from 'react';
import AmountController from './AmountController/AmountController';
import styles from './CartOverlayItem.module.css';
import InfoCard from './InfoCard/InfoCard';
import Thumbnail from './Thumbnail/Thumbnail';

class CartOverlayItem extends Component {
    render() {
        return (
            <div className={styles.cartOverlayItem}>
                <InfoCard
                    name={this.props.name}
                    price={this.props.price}
                    size={this.props.size}
                />
                <AmountController amount={this.props.amount} />
                <Thumbnail img={this.props.img} />
            </div>
        );
    }
}

export default CartOverlayItem;
