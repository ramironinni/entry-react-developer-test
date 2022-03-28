import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { cartActions } from '../../../store/cart-slice';

import cartGreenIcon from '../../../assets/cart-green-icon.svg';

import OutOfStock from './OutOfStock';

import styles from './ProductCard.module.css';
class ProductCard extends Component {
    outOfStockTextStyles = !this.props.inStock ? styles.outOfStockText : '';
    outOfStockProduct = !this.props.inStock ? styles.outOfStockProduct : '';

    render() {
        return (
            <div className={`${styles.productCard} ${this.outOfStockProduct}`}>
                <div
                    onClick={() => {
                        this.props.add(this.props.id);
                    }}
                >
                    <img
                        className={styles.cartGreenIcon}
                        src={cartGreenIcon}
                        alt="cart icon"
                    />
                </div>
                <Link className={styles.info} to={`/product/${this.props.id}`}>
                    <div className={styles.imageContainer}>
                        {!this.props.inStock && <OutOfStock />}
                        <img
                            className={styles.image}
                            src={this.props.image}
                            alt="product"
                        />
                    </div>
                    <div className={styles.descriptionContainer}>
                        <p
                            className={`${styles.descriptionName} ${this.outOfStockTextStyles}`}
                        >
                            {this.props.name}
                        </p>
                        <p
                            className={`${styles.descriptionPrice} ${this.outOfStockTextStyles}`}
                        >
                            {this.props.priceSymbol}
                            {this.props.priceAmount}
                        </p>
                    </div>
                </Link>
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
        add: (id) => dispatch(cartActions.add({ id })),
        // remove: (id) => dispatch(cartActions.remove({ id })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
