import { Component } from 'react';
import styles from './AttributeCheckboxItem.module.css';

class AttributeCheckboxItem extends Component {
    // unavailableStyles = !this.props.available
    //     ? styles.checkmarkUnavailable
    //     : '';

    extraClasses = this.props.extraClasses ? this.props.extraClasses : '';

    render() {
        let value = (
            <span className={`${styles.checkmark} ${this.extraClasses}`}>
                {this.props.value}
            </span>
        );

        if (this.props.setId === 'Color') {
            value = (
                <span
                    style={{ backgroundColor: this.props.value }}
                    className={`${styles.checkmarkColor} ${this.extraClasses}`}
                ></span>
            );
        }

        return (
            <label className={styles.container}>
                <input
                    type="radio"
                    checked={this.props.checked}
                    name={`${this.props.inputName}-${this.props.index}`}
                    onChange={() => {
                        this.props.onChangeAttribute(this.props.id);
                    }}
                />
                {value}
            </label>
        );
    }
}

export default AttributeCheckboxItem;
