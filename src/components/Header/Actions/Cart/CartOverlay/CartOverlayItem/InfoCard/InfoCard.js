import { Component } from 'react';
// import SizeBoxGroup from '../../../../../../../shared/SizeBoxGroup/SizeBoxGroup';
import SizeCheckboxGroup from '../../../../../../../shared/SizeCheckboxGroup/SizeCheckboxGroup';
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
                {/* <SizeBoxGroup size={this.props.size} /> */}
                <SizeCheckboxGroup
                    sizes={this.props.sizes}
                    itemNumber={this.props.itemNumber}
                    extraClasses={styles.size}
                />
            </div>
        );
    }
}

export default InfoCard;
