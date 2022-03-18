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
            amount,
            onAddToCart,
            onRemoveFromCart,
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
                    amount={amount}
                    extraClasses={styles.amountButton}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                />
                <ImageSlider images={gallery} />
            </div>
        );
    }
}

export default CartItem;
