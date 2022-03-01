import { Component } from 'react';
import styles from './SizeCheckboxItem.module.css';

class SizeCheckboxItem extends Component {
    render() {
        return (
            <label className={styles.container}>
                <input
                    type="radio"
                    checked={this.props.size.selected ? 'checked' : ''}
                    name={`size-${this.props.itemNumber}`}
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

export default SizeCheckboxItem;
