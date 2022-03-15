import { Component } from 'react';
import styles from './AttributeCheckboxItem.module.css';

class SizeCheckboxItem extends Component {
    // unavailableStyles = !this.props.available
    //     ? styles.checkmarkUnavailable
    //     : '';

    extraClasses = this.props.extraClasses ? this.props.extraClasses : '';

    render() {
        return (
            <label className={styles.container}>
                <input
                    type="radio"
                    checked={this.props.checked}
                    name={`${this.props.inputName}-${this.props.index}`}
                    onChange={() => {
                        this.props.onChangeAttribute(this.props.id);
                    }}
                />
                <span className={`${styles.checkmark} ${this.extraClasses}`}>
                    {this.props.value}
                </span>
            </label>
        );
    }
}

export default SizeCheckboxItem;
