import { Component } from 'react';
import SizeCheckboxGroup from '../../../../shared/SizeCheckboxGroup/SizeCheckboxGroup';
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
                <SizeCheckboxGroup
                    sizes={this.props.sizes}
                    inputName={this.props.inputName}
                />
            </div>
        );
    }
}

export default InfoCard;
