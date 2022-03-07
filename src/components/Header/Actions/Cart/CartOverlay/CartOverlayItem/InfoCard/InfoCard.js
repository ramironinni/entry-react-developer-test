import { Component } from 'react';
import SizeCheckboxGroup from '../../../../../../../shared/SizeCheckboxGroup/SizeCheckboxGroup';
import styles from './InfoCard.module.css';

class InfoCard extends Component {
    render() {
        return (
            <div className={styles.infoCard}>
                <div>{this.props.name}</div>
                <div>{this.props.shortDesc}</div>
                <div className={styles.price}>
                    &#36;
                    {this.props.price.toFixed(2)}
                </div>
                <SizeCheckboxGroup
                    sizes={this.props.sizes}
                    inputName={this.props.inputName}
                    extraClasses={styles.size}
                />
            </div>
        );
    }
}

export default InfoCard;
