import { Component } from 'react';
import { connect } from 'react-redux';

import Page from '../Page';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

class CartPage extends Component {
    // DUMMY_CART = [
    //     {
    //         name: 'Apollo',
    //         shortDesc: 'Running Short',
    //         price: 50,
    //         amount: 1,
    //         sizes: [
    //             { name: 's', available: true, selected: false },
    //             { name: 'm', available: true, selected: true },
    //         ],
    //         images: [
    //             'https://dummyimage.com/141x185/cfa40b/fff',
    //             'https://dummyimage.com/141x185/44dd11/fff',
    //             'https://dummyimage.com/141x185/4d1c2a/fff',
    //         ],
    //     },
    //     {
    //         name: 'Jupiter',
    //         shortDesc: 'Wayfarer',
    //         price: 75,
    //         amount: 2,
    //         sizes: [
    //             { name: 's', available: true, selected: false },
    //             { name: 'm', available: true, selected: true },
    //         ],
    //         images: [
    //             'https://dummyimage.com/141x185/cfa40b/fff',
    //             'https://dummyimage.com/141x185/44dd11/fff',
    //             'https://dummyimage.com/141x185/4d1c2a/fff',
    //         ],
    //     },
    // ];

    addToCartHandler(id) {
        this.props.add(id);
    }

    removeFromCartHandler(id) {
        this.props.remove(id);
    }

    render() {
        return (
            <Page>
                {/* {this.props.cart} */}
                <p className={styles.title}>Cart </p>
                {this.props.cart.map((item, i) => {
                    return (
                        <CartItem
                            key={i}
                            item={item}
                            inputName={`${i}-CartPage`}
                            onAddToCart={this.addToCartHandler.bind(this)}
                            onRemoveFromCart={this.removeFromCartHandler.bind(
                                this
                            )}
                        />
                    );
                })}
            </Page>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (id) => dispatch({ type: 'add', id }),
        remove: (id) => dispatch({ type: 'remove', id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
