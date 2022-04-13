import { Component } from 'react';
import { connect } from 'react-redux';

import { cartActions } from '../../../store/cart-slice';

import AttributeCheckboxItem from './AttributeCheckboxItem/AttributeCheckboxItem';

import styles from './AttributesCheckboxGroup.module.css';

class AttributesCheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: null,
        };
    }

    updateAttributesHandler(setId, itemId, prodId) {
        this.setState({ checked: itemId });

        if (!this.props.isCart) {
            this.props.onGetSelectedAttributes(setId, itemId);
        }
    }

    componentDidMount() {
        if (this.props.inputName !== 'ProductPage') {
            const selectedItem = this.props.items.find((item) => item.selected);
            this.setState({ checked: selectedItem.id });
        }
    }

    render() {
        const {
            setId,
            index,
            prodId,
            inputName,
            extraClasses,
            isPage,
            isCart,
        } = this.props;

        return (
            <div className={styles.attributesCheckboxGroup}>
                {this.props.items.map((item, i) => {
                    return (
                        <AttributeCheckboxItem
                            key={i}
                            id={item.id}
                            setId={setId}
                            index={index}
                            prodId={prodId}
                            value={item.value}
                            checked={
                                this.state.checked === item.id ? 'checked' : ''
                            }
                            inputName={inputName}
                            extraClasses={extraClasses}
                            onUpdateAttributes={this.updateAttributesHandler.bind(
                                this
                            )}
                            isPage={isPage}
                            isCart={isCart}
                        />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: (setId, itemId, prodId) =>
            dispatch(cartActions.update({ setId, itemId, prodId })),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AttributesCheckboxGroup);
