import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
    render() {
        return (
            <button className={`${styles.button} ${this.props.extraClasses}`}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
