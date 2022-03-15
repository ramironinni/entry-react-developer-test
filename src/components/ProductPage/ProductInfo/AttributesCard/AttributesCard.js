import { Component } from 'react';
import AttributesCheckboxGroup from '../../../../shared/AttributesCheckboxGroup/AttributesCheckboxGroup';
import styles from './AttributesCard.module.css';

class AttributesCard extends Component {
    render() {
        console.log(this.props.attributeSet);
        return (
            <div>
                <p className={styles.sizeTitle}>
                    {this.props.attributeSet.name}:
                </p>
                <AttributesCheckboxGroup
                    // sizes={this.props.sizes}
                    index={this.props.index}
                    setId={this.props.attributeSet.id}
                    items={this.props.attributeSet.items}
                    inputName={this.props.inputName}
                />
            </div>
        );
    }
}

export default AttributesCard;
