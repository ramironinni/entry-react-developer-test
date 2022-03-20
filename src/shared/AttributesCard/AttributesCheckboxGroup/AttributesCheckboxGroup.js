import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';
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
        this.props.update(setId, itemId, prodId);
    }

    componentDidMount() {
        const selectedItem = this.props.items.find((item) => item.selected);
        this.setState({ checked: selectedItem.id });
    }

    // async componentDidUpdate(prevProps, prevState) {
    //     if (this.state.checked !== prevState.checked) {
    //     }
    // }

    render() {
        return (
            <div className={styles.sizeGroup}>
                {this.props.items.map((item, i) => {
                    return (
                        <AttributeCheckboxItem
                            key={i}
                            id={item.id}
                            setId={this.props.setId}
                            index={this.props.index}
                            prodId={this.props.prodId}
                            value={item.value}
                            checked={
                                this.state.checked === item.id ? 'checked' : ''
                            }
                            inputName={this.props.inputName}
                            extraClasses={this.props.extraClasses}
                            onChangeAttribute={this.updateAttributesHandler.bind(
                                this
                            )}
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

export default withApollo(
    connect(mapStateToProps, mapDispatchToProps)(AttributesCheckboxGroup)
);
