import { Component } from 'react';
import { connect } from 'react-redux';

import { cartActions } from '../../../store/cart-slice';

import AttributesCard from '../../../shared/AttributesCard/AttributesCard';
import PriceCard from './PriceCard/PriceCard';
import Description from './Description/Description';
import AddToCartButton from './AddToCartButton/AddToCartButton';

import styles from './ProductInfo.module.css';
class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedAttributes: [] };
    }

    getSelectedAttributesHandler = (setId, itemId) => {
        // console.log(setId, itemId, this.state.selectedAttributes);

        this.setState((prevState) => {
            let updatedState;

            const foundAttribute = prevState.selectedAttributes.find(
                (att) => att.setId === setId
            );

            if (foundAttribute) {
                const unmodifiedAttributes =
                    prevState.selectedAttributes.filter(
                        (att) => att.setId !== setId
                    );

                foundAttribute.setId = setId;
                foundAttribute.itemId = itemId;

                updatedState = {
                    selectedAttributes: [
                        ...unmodifiedAttributes,
                        foundAttribute,
                    ],
                };

                return updatedState;
            }

            updatedState = {
                selectedAttributes: [
                    ...prevState.selectedAttributes,
                    { setId, itemId },
                ],
            };

            return updatedState;
        });
    };

    render() {
        const { id, name, inStock, description, attributes, prices } =
            this.props.product;

        return (
            <div className={styles.productInfo}>
                <p className={styles.productName}>{name}</p>
                {attributes.map((attributeSet, i) => {
                    return (
                        <AttributesCard
                            key={i}
                            index={i}
                            prodId={id}
                            attributeSet={attributeSet}
                            inputName={'ProductPage'}
                            onGetSelectedAttributes={this.getSelectedAttributesHandler.bind(
                                this
                            )}
                            isPage={true}
                        />
                    );
                })}
                <PriceCard prices={prices} />
                <AddToCartButton
                    product={this.props.product}
                    onAddProduct={this.props.add.bind(
                        this,
                        this.props.product,
                        this.state.selectedAttributes
                    )}
                />
                <Description description={description} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (product, selectedAttributes) =>
            dispatch(cartActions.add({ product, selectedAttributes })),
    };
};

export default connect(null, mapDispatchToProps)(ProductInfo);
