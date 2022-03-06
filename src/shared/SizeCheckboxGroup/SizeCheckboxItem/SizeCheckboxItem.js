import { Component } from 'react';
import styles from './SizeCheckboxItem.module.css';

class SizeCheckboxItem extends Component {
    unavailableStyles = !this.props.available
        ? styles.checkmarkUnavailable
        : '';

    render() {
        return (
            <label className={styles.container}>
                <input
                    type="radio"
                    checked={
                        this.props.checked === this.props.name ? 'checked' : ''
                    }
                    name={`size-${this.props.itemNumber}`}
                    disabled={!this.props.available}
                    onChange={() => {
                        this.props.onChange(this.props.name);
                    }}
                />
                <span
                    className={`${styles.checkmark} ${this.unavailableStyles} ${this.props.extraClasses}`}
                >
                    {this.props.name}
                </span>
            </label>
        );
    }
}

export default SizeCheckboxItem;
