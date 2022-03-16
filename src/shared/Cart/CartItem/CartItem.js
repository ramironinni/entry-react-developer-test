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
                    id={this.props.id}
                    name={this.props.name}
                    inStock={this.props.inStock}
                    image={this.props.gallery[0]}
                    description={this.props.description}
                    attributes={this.props.attributes}
                    prices={this.props.prices}
                    inputName={this.props.inputName}
                    // onChangeSize={this.props.onChangeSize}
                />
                <AmountController
                    id={this.props.item.id}
                    amount={this.props.item.amount}
                    extraClasses={styles.amountButton}
                    onAddToCart={this.props.onAddToCart}
                    onRemoveFromCart={this.props.onRemoveFromCart}
                />
                <ImageSlider images={this.props.item.images} />
            </div>
        );
    }
}

export default CartItem;
