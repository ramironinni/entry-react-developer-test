import { Component } from 'react';
import styles from './AttributeCheckboxItem.module.css';

class AttributeCheckboxItem extends Component {
    // unavailableStyles = !this.props.available
    //     ? styles.checkmarkUnavailable
    //     : '';

    extraClasses = this.props.extraClasses ? this.props.extraClasses : '';

    render() {
        const {
            id,
            setId,
            index,
            value,
            checked,
            inputName,
            extraClasses,
            onChangeAttribute,
        } = this.props;

        let valueToDisplay = (
            <span className={`${styles.checkmark} ${this.extraClasses}`}>
                {value}
            </span>
        );

        if (setId === 'Color') {
            valueToDisplay = (
                <span
                    style={{ backgroundColor: value }}
                    className={`${styles.checkmarkColor} ${this.extraClasses}`}
                ></span>
            );
        }

        return (
            <label className={styles.container}>
                <input
                    type="radio"
                    checked={checked}
                    name={`${inputName}-${index}`}
                    onChange={() => {
                        onChangeAttribute(setId, id);
                    }}
                />
                {valueToDisplay}
            </label>
        );
    }
}

export default AttributeCheckboxItem;
