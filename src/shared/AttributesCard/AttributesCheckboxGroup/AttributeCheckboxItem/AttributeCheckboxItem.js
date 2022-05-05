import { Component } from 'react';
import styles from './AttributeCheckboxItem.module.css';

class AttributeCheckboxItem extends Component {
    extraClasses = this.props.extraClasses ? this.props.extraClasses : '';

    render() {
        const {
            id,
            setId,
            index,
            value,
            checked,
            inputName,
            onUpdateAttributes,
            isPage,
            isCart,
        } = this.props;

        const containerCartStyles = isCart ? styles.containerCart : '';

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

        const updateAttributesHandler = () => {
            if (!isCart) {
                onUpdateAttributes(setId, id, index);
            }
        };

        return (
            <label className={`${styles.container} ${containerCartStyles}`}>
                <input
                    type="radio"
                    checked={checked}
                    name={`${inputName}-${index}`}
                    onChange={updateAttributesHandler}
                />
                {valueToDisplay}
            </label>
        );
    }
}

export default AttributeCheckboxItem;
