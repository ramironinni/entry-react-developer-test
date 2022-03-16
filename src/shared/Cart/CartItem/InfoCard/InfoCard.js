import { Component } from 'react';
import AttributesCheckboxGroup from '../../../../shared/AttributesCheckboxGroup/AttributesCheckboxGroup';
import styles from './InfoCard.module.css';

class InfoCard extends Component {
    render() {
        return (
            <div className={styles.infoCard}>
                <div className={styles.name}>{this.props.name}</div>
                <div className={styles.shortDesc}>{this.props.shortDesc}</div>
                <div className={styles.price}>
                    &#36;
                    {this.props.price.toFixed(2)}
                </div>
                {/* <AttributesCheckboxGroup
                    id={this.props.id}
                    sizes={this.props.sizes}
                    inputName={this.props.inputName}
                    onChangeSize={this.props.onChangeSize}
                /> */}
            </div>
        );
    }
}

export default InfoCard;
