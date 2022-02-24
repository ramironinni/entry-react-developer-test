import { Component } from 'react';
import styles from './InfoCard.module.css';

class InfoCard extends Component {
    render() {
        return (
            <div className={styles.InfoCard}>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <div>{this.props.size}</div>
            </div>
        );
    }
}

export default InfoCard;
