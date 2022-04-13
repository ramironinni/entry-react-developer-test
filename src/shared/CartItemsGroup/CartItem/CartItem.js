import { Component } from 'react';

import AmountController from './AmountController/AmountController';
import ImageSlider from './ImageSlider/ImageSlider';
import InfoCard from './InfoCard/InfoCard';
import Thumbnail from './Thumbnail/Thumbnail';

import styles from './CartItem.module.css';
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
            amount,
        } = this.props.item;

        const { isPage, inputName, isCart } = this.props;

        const cartItemOverlayStyles = !isPage ? styles.cartItemOverlay : '';

        return (
            <div className={`${styles.cartItem} ${cartItemOverlayStyles}`}>
                <InfoCard
                    id={id}
                    name={name}
                    inStock={inStock}
                    gallery={gallery}
                    description={description}
                    attributes={attributes}
                    prices={prices}
                    inputName={inputName}
                    isPage={isPage}
                    isCart={isCart}
                />
                <AmountController id={id} amount={amount} isPage={isPage} />
                {isPage && <ImageSlider images={gallery} />}
                {!isPage && <Thumbnail image={gallery[0]} />}
            </div>
        );
    }
}

export default CartItem;
