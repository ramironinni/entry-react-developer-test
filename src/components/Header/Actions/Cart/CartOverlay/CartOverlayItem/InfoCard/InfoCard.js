import { Component } from 'react';
import SizeBoxGroup from '../../../../../../../shared/SizeBoxGroup/SizeBoxGroup';
import styles from './InfoCard.module.css';

class InfoCard extends Component {
    render() {
        return (
            <div className={styles.infoCard}>
                <div>{this.props.name}</div>
                <div className={styles.price}>
                    &#36;
                    {this.props.price.toFixed(2)}
                </div>
                <SizeBoxGroup size={this.props.size} />
            </div>
        );
    }
}

export default InfoCard;
