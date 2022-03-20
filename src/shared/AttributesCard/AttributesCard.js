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
        } = this.props;
        return (
            <div>
                <p className={styles.sizeTitle}>
                    {this.props.attributeSet.name}:
                </p>
                <AttributesCheckboxGroup
                    index={index}
                    prodId={prodId}
                    setId={attributeSet.id}
                    items={attributeSet.items}
                    inputName={inputName}
                    onGetSelectedAttributes={onGetSelectedAttributes}
                />
            </div>
        );
    }
}

export default AttributesCard;
