import { Component } from 'react';
import AttributesCheckboxGroup from './AttributesCheckboxGroup/AttributesCheckboxGroup';
import styles from './AttributesCard.module.css';

class AttributesCard extends Component {
    render() {
        const {
            index,
            prodId,
            attributeSet,
            inputName,
            onGetSelectedAttributes,
            isPage,
            // onGetProductAttribute,
        } = this.props;

        const nameOverlayStyles = !isPage ? styles.nameOverlay : '';

        return (
            <div>
                <p className={`${styles.name} ${nameOverlayStyles}`}>
                    {this.props.attributeSet.name}:
                </p>
                <AttributesCheckboxGroup
                    index={index}
                    prodId={prodId}
                    setId={attributeSet.id}
                    items={attributeSet.items}
                    inputName={inputName}
                    onGetSelectedAttributes={onGetSelectedAttributes}
                    isPage={isPage}
                    // onGetProductAttribute={onGetProductAttribute}
                />
            </div>
        );
    }
}

export default AttributesCard;
