import { Component } from 'react';
import AmountController from '../../../shared/AmountController/AmountController';
import styles from './CartItem.module.css';
import ImageSlider from './ImageSlider/ImageSlider';
import InfoCard from './InfoCard/InfoCard';
import Thumbnail from './Thumbnail/Thumbnail';

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
            page,
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
                {page && <ImageSlider images={gallery} />}
                {!page && <Thumbnail image={gallery[0]} />}
            </div>
        );
    }
}

export default CartItem;
