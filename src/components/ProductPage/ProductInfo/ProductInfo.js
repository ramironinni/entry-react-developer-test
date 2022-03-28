import { Component } from 'react';
import { connect } from 'react-redux';

import styles from './ProductInfo.module.css';
import AttributesCard from '../../../shared/AttributesCard/AttributesCard';
import { cartActions } from '../../../store/cart-slice';
import PriceCard from './PriceCard/PriceCard';
import Description from './Description/Description';
import AddToCartButton from './AddToCartButton/AddToCartButton';

class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedAtributtes: [] };
    }

    getSelectedAttributesHandler = (setId, itemId) => {
        this.setState((prevState) => {
            let updatedState;

            const foundAttribute = prevState.selectedAtributtes.find(
                (att) => att.setId === setId
            );

            if (foundAttribute) {
                const unmodifiedAttributes =
                    prevState.selectedAtributtes.filter(
                        (att) => att.setId !== setId
                    );

                foundAttribute.setId = setId;
                foundAttribute.itemId = itemId;

                updatedState = {
                    selectedAtributtes: [
                        ...unmodifiedAttributes,
                        foundAttribute,
                    ],
                };

                return updatedState;
            }

            updatedState = {
                selectedAtributtes: [
                    ...prevState.selectedAtributtes,
                    { setId, itemId },
                ],
            };

            return updatedState;
        });
    };

    render() {
        const { id, name, inStock, attributes, description } = this.props;

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
                        />
                    );
                })}
                <PriceCard prices={this.props.prices} />
                <AddToCartButton
                    inStock={inStock}
                    id={id}
                    selectedAtributtes={this.state.selectedAtributtes}
                    onAddProduct={this.props.add}
                />
                <Description description={description} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (id, selectedAttributes) =>
            dispatch(cartActions.add({ id, selectedAttributes })),
    };
};

export default connect(null, mapDispatchToProps)(ProductInfo);
