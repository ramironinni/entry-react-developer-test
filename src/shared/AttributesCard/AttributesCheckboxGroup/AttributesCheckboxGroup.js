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

    updateAttributes(setId, itemId) {
        this.setState({ checked: itemId });
        this.props.updateAttributes(setId, itemId);
    }

    // async componentDidUpdate(prevProps, prevState) {
    //     if (this.state.checked !== prevState.checked) {
    //         console.log('UPDATED');
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
                            value={item.value}
                            checked={
                                this.state.checked === item.id ? 'checked' : ''
                            }
                            inputName={this.props.inputName}
                            extraClasses={this.props.extraClasses}
                            onChangeAttribute={this.updateAttributes.bind(this)}
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
        updateAttributes: (setId, itemId) =>
            dispatch(cartActions.updateAttributes({ setId, itemId })),
    };
};

export default withApollo(
    connect(mapStateToProps, mapDispatchToProps)(AttributesCheckboxGroup)
);
