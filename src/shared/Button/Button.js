import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
    render() {
        const { extraClasses, onClickHandler, children } = this.props;

        return (
            <button
                className={`${styles.button} ${extraClasses}`}
                onClick={onClickHandler}
            >
                {children}
            </button>
        );
    }
}

export default Button;
