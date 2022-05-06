import { Component } from 'react';
import { connect } from 'react-redux';

import AttributeCheckboxItem from './AttributeCheckboxItem/AttributeCheckboxItem';

import styles from './AttributesCheckboxGroup.module.css';

class AttributesCheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: null,
        };
    }

    updateAttributesHandler(setId, itemId, index) {
        this.setState({ checked: itemId });

        if (!this.props.isCart) {
            this.props.onGetSelectedAttributes(setId, itemId, index);
        }
    }

    componentDidMount() {
        if (this.props.inputName !== 'ProductPage') {
            const selectedItem = this.props.items.find((item) => item.selected);
            this.setState({ checked: selectedItem.id });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cart !== this.props.cart) {
            const selectedItem = this.props.items.find((item) => item.selected);
            this.setState({ checked: selectedItem.id });
        }
    }

    render() {
        const { setId, index, inputName, extraClasses, isPage, isCart } =
            this.props;

        return (
            <div className={styles.attributesCheckboxGroup}>
                {this.props.items.map((item, i) => {
                    return (
                        <AttributeCheckboxItem
                            key={i}
                            id={item.id}
                            setId={setId}
                            index={index}
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

export default connect(mapStateToProps)(AttributesCheckboxGroup);
