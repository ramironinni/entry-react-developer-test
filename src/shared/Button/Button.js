import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
    render() {
        return (
            <button
                className={`${styles.button} ${this.props.extraClasses}`}
                onClick={this.props.onClickHandler}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
