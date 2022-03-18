import { Component } from 'react';
import AmountController from '../../../../../../shared/AmountController/AmountController';
import styles from './CartOverlayItem.module.css';
import InfoCard from './InfoCard/InfoCard';
import Thumbnail from './Thumbnail/Thumbnail';

class CartOverlayItem extends Component {
    render() {
        return (
            <div className={styles.cartOverlayItem}>
                <InfoCard
                    name={this.props.name}
                    shortDesc={this.props.shortDesc}
                    price={this.props.price}
                    sizes={this.props.sizes}
                    inputName={this.props.inputName}
                />
                <AmountController
                    id={this.props.id}
                    amount={this.props.amount}
                    extraClasses={styles.amountButton}
                    onAddToCart={this.props.onAddToCart}
                    onRemoveFromCart={this.props.onRemoveFromCart}
                />
                <Thumbnail img={this.props.img} />
            </div>
        );
    }
}

export default CartOverlayItem;
