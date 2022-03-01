import { Component } from 'react';
import AmountController from '../../../shared/AmountController/AmountController';
import styles from './CartItem.module.css';
import InfoCard from './InfoCard/InfoCard';
import Thumbnail from './Thumbnail/Thumbnail';

class CartItem extends Component {
    render() {
        return (
            <div className={styles.cartItem}>
                <InfoCard
                    name={this.props.item.name}
                    price={this.props.item.price}
                    sizes={this.props.item.sizes}
                    shortDesc={this.props.item.shortDesc}
                    itemNumber={this.props.itemNumber}
                />
                <AmountController
                    amount={this.props.item.amount}
                    extraClasses={styles.amountButton}
                />

                <Thumbnail img={this.props.item.img} />
            </div>
        );
    }
}

export default CartItem;
