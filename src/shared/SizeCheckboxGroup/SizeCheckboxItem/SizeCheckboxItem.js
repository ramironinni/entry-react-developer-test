import { Component } from 'react';
import styles from './SizeCheckboxItem.module.css';

class SizeCheckboxItem extends Component {
    unavailableStyles = !this.props.available
        ? styles.checkmarkUnavailable
        : '';

    extraClasses = this.props.extraClasses ? this.props.extraClasses : '';

    render() {
        return (
            <label className={styles.container}>
                <input
                    type="radio"
                    checked={
                        this.props.checked === this.props.name ? 'checked' : ''
                    }
                    name={`size-${this.props.inputName}`}
                    disabled={!this.props.available}
                    onChange={() => {
                        this.props.onChangeSize(this.props.name);
                    }}
                />
                <span
                    className={`${styles.checkmark} ${this.unavailableStyles} ${this.extraClasses}`}
                >
                    {this.props.name}
                </span>
            </label>
        );
    }
}

export default SizeCheckboxItem;
