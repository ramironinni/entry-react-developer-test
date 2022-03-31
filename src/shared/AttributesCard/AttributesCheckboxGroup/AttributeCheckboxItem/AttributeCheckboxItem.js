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
            prodId,
            value,
            checked,
            inputName,
            onUpdateAttributes,
            isPage,
        } = this.props;

        const checkmarkOverlayStyles = !isPage ? styles.checkmarkOverlay : '';
        const checkmarkColorOverlayStyles = !isPage
            ? styles.checkmarkColorOverlay
            : '';

        let valueToDisplay = (
            <span className={`${styles.checkmark} ${checkmarkOverlayStyles}`}>
                {value}
            </span>
        );

        if (setId === 'Color') {
            valueToDisplay = (
                <span
                    style={{ backgroundColor: value }}
                    className={`${styles.checkmarkColor} ${checkmarkColorOverlayStyles}`}
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
                        onUpdateAttributes(setId, id, prodId);
                    }}
                />
                {valueToDisplay}
            </label>
        );
    }
}

export default AttributeCheckboxItem;
