import { Component } from 'react';

import { connect } from 'react-redux';
import { withApollo } from '@apollo/react-hoc';

import { GET_ITEM_BY_ID } from '../../GraphQl/queries';

import CartItem from './CartItem/CartItem';

class CartItemsGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCart: [],
            loading: true,
            error: false,
        };
        this.client = props.client;
    }

    async getItemById(itemId) {
        // console.log('itemId', itemId);
        const { loading, error, data } = await this.client.query({
            query: GET_ITEM_BY_ID,
            variables: {
                id: itemId,
            },
        });

        if (loading) {
            this.setState({ loading: true, error: false });
        }

        if (error) {
            this.setState({ loading: false, error: error });
            console.log(error);
        }

        // console.log(error, loading, data);

        return data;
    }

    async updateCart() {
        const currentCart = await Promise.all(
            this.props.cart.map(async (item) => {
                console.log(item.selectedAttributes);
                return await this.getItemById(item.id);
            })
        );

        // const currentCart = [];
        // for await (const cartProduct of this.props.cart) {
        //     const productFromDb = {
        //         ...(await this.getItemById(cartProduct.id)).product,
        //     };

        //     // console.log('productFromDb', productFromDb);

        //     const newCartProduct = JSON.parse(JSON.stringify(productFromDb));

        //     newCartProduct.amount = cartProduct.amount;

        //     console.log('cartProduct.id', cartProduct.id);
        //     console.log('newCartProduct', newCartProduct.attributes);

        //     cartProduct.selectedAttributes.forEach((cartAttributeSet) => {
        //         const foundProdDbAttribute = newCartProduct.attributes.find(
        //             (attribute) =>
        //                 attribute.id.toUpperCase() ===
        //                 cartAttributeSet.setId.toUpperCase()
        //         );

        //         // console.log('foundProdDbAttribute', foundProdDbAttribute);

        //         foundProdDbAttribute.items.forEach((item) => {
        //             if (item.id === cartAttributeSet.itemId) {
        //                 item.selected = true;
        //             } else {
        //                 item.selected = false;
        //             }
        //         });
        //     });

        //     currentCart.push(newCartProduct);
        // }

        // console.log('redux cart', this.props.cart);
        console.log('currentCart', currentCart);
        return currentCart;
    }

    async componentDidMount() {
        const currentCart = await this.updateCart();
        this.setState({ currentCart: currentCart });
        // console.log('MOUNTED');
        // const TEST = await this.getItemById('apple-imac-2021').product;
        // console.log('TEST', TEST);
    }

    async componentDidUpdate(prevProps) {
        if (this.props.cart !== prevProps.cart) {
            const currentCart = await this.updateCart();
            this.setState({ currentCart: currentCart });
            // console.log('CART HAS CHANGED', currentCart);
        }
        // console.log('UPDATED');
    }

    render() {
        const { isPage, inputNameComp } = this.props;
        return (
            <div>
                {this.props.cart.length === 0 && <div>Cart is empty.</div>}
                <div>
                    {this.state.currentCart.length > 0 &&
                        this.state.currentCart.map((item, i) => {
                            // console.log(item);
                            // return (
                            //     <CartItem
                            //         key={i}
                            //         item={item}
                            //         inputName={`${i}-${inputNameComp}`}
                            //         isPage={isPage}
                            //     />
                            // );
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};

export default withApollo(connect(mapStateToProps)(CartItemsGroup));
