import { Component } from 'react';
import SizeCheckboxGroup from '../../../../shared/SizeCheckboxGroup/SizeCheckboxGroup';
import styles from './SizeCard.module.css';

class SizeCard extends Component {
    render() {
        return (
            <div>
                <p className={styles.sizeTitle}>SIZE:</p>
                <SizeCheckboxGroup
                    sizes={this.props.sizes}
                    inputName={this.props.inputName}
                />
            </div>
        );
    }
}

export default SizeCard;
