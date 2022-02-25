import { Component } from 'react';
import styles from './SizeCard.module.css';
import SizeGroup from './SizeGroup/SizeGroup';

class SizeCard extends Component {
    render() {
        return (
            <div>
                <p className={styles.sizeTitle}>SIZE:</p>
                <SizeGroup sizes={this.props.sizes} />
            </div>
        );
    }
}

export default SizeCard;
