import { Component } from 'react';
import SizeBoxGroup from '../../../../shared/SizeBoxGroup/SizeBoxGroup';
import styles from './InfoCard.module.css';

class InfoCard extends Component {
    pageStyles = this.props.cartType === 'page' ? styles.page : '';

    render() {
        return (
            <div className={styles.infoCard}>
                <div className={`${styles.name} ${this.pageStyles}`}>
                    {this.props.name}
                </div>
                <div className={`${styles.shortDesc} ${this.pageStyles}`}>
                    {this.props.shortDesc}
                </div>
                <div className={`${styles.price} ${this.pageStyles}`}>
                    &#36;
                    {this.props.price.toFixed(2)}
                </div>
                <SizeBoxGroup
                    size={this.props.size}
                    cartType={this.props.cartType}
                />
            </div>
        );
    }
}

export default InfoCard;
