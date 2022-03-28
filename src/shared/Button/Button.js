import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
    render() {
        return (
            <button className={`${styles.button} ${this.props.extraClasses}`}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
