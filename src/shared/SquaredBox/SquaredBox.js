import { Component } from 'react';
import styles from './SquaredBox.module.css';

class SquaredBox extends Component {
    render() {
        return (
            <div
                className={`${styles.squaredBox} ${
                    !this.props.selected && styles.nonSelected
                }`}
            >
                {this.props.children}
            </div>
        );
    }
}

export default SquaredBox;
