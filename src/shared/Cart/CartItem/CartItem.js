import { Component } from 'react';
import AmountController from '../../../shared/AmountController/AmountController';
import styles from './CartItem.module.css';
import ImageSlider from './ImageSlider/ImageSlider';
import InfoCard from './InfoCard/InfoCard';

class CartItem extends Component {
    render() {
        const {
            id,
            name,
            inStock,
            gallery,
            description,
            attributes,
            prices,
            inputName,
        } = this.props.item;

        return (
            <div className={styles.cartItem}>
                <InfoCard
                    id={id}
                    name={name}
                    inStock={inStock}
                    gallery={gallery}
                    description={description}
                    attributes={attributes}
                    prices={prices}
                    inputName={inputName}
                    // onChangeSize={this.props.onChangeSize}
                />
                <AmountController
                    id={id}
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
