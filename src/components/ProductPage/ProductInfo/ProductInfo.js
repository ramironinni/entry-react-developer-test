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
        this.state = {
            selectedAttributes: [],
            isAllAttributesConfigured: false,
            isAddProductButtonTouched: false,
        };
    }

    getSelectedAttributesHandler = (setId, itemId, index) => {
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
                foundAttribute.index = index;

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
                    { setId, itemId, index },
                ],
            };

            return updatedState;
        });
    };

    addProductHandler = () => {
        if (!this.state.isAddProductButtonTouched) {
            this.setState({ isAddProductButtonTouched: true });
        }

        if (!this.state.isAllAttributesConfigured) {
            return;
        }

        if (!this.props.product.inStock) {
            return;
        }

        this.props.add(this.props.product, this.state.selectedAttributes);
    };

    componentDidMount() {
        if (this.props.product.attributes.length === 0) {
            this.setState({ isAllAttributesConfigured: true });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.selectedAttributes.length ===
            this.state.selectedAttributes.length
        ) {
            return;
        }

        if (
            !this.state.isAllAttributesConfigured &&
            this.state.selectedAttributes.length ===
                this.props.product.attributes.length
        ) {
            this.setState({ isAllAttributesConfigured: true });
        }
    }

    render() {
        const { id, name, description, attributes, prices } =
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
                    onAddProduct={this.addProductHandler.bind(this)}
                    selectedAttributes={this.state.selectedAttributes}
                />
                {this.state.isAddProductButtonTouched &&
                    !this.state.isAllAttributesConfigured && (
                        <p className={styles.selectVariantMessage}>
                            Please select an option for each variant.
                        </p>
                    )}
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
