import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
    render() {
        const onClickHandler = () => {
            this.props.isProductPage &&
                this.props.inStock &&
                this.props.onAddProduct();
        };

        return (
            <button
                className={`${styles.button} ${this.props.extraClasses}`}
                onClick={onClickHandler}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
