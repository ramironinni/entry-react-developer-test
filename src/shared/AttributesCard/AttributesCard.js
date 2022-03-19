import { Component } from 'react';
import AttributesCheckboxGroup from './AttributesCheckboxGroup/AttributesCheckboxGroup';
import styles from './AttributesCard.module.css';

class AttributesCard extends Component {
    render() {
        const { index, attributeSet, inputName } = this.props;
        return (
            <div>
                <p className={styles.sizeTitle}>
                    {this.props.attributeSet.name}:
                </p>
                <AttributesCheckboxGroup
                    index={index}
                    setId={attributeSet.id}
                    items={attributeSet.items}
                    inputName={inputName}
                />
            </div>
        );
    }
}

export default AttributesCard;
