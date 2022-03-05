import { Component } from 'react';
import AmountController from '../../../shared/AmountController/AmountController';
import styles from './CartItem.module.css';
import ImageSlider from './ImageSlider/ImageSlider';
import InfoCard from './InfoCard/InfoCard';

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
                <ImageSlider images={this.props.item.images} />
            </div>
        );
    }
}

export default CartItem;
