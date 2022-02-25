import { Component } from 'react';
import styles from './SizeItem.module.css';

class SizeItem extends Component {
    render() {
        return (
            <label className={styles.container}>
                <input
                    type="radio"
                    checked={this.props.size.selected ? 'checked' : ''}
                    name="size"
                />
                <span
                    className={`${styles.checkmark} ${
                        !this.props.size.available
                            ? styles.checkmarkUnavailable
                            : ''
                    }`}
                >
                    {this.props.size.name}
                </span>
            </label>
        );
    }
}

export default SizeItem;
