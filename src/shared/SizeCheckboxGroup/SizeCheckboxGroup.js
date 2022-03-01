import { Component } from 'react';
import styles from './SizeCheckboxGroup.module.css';
import SizeCheckboxItem from './SizeCheckboxItem/SizeCheckboxItem';

class SizeCheckboxGroup extends Component {
    render() {
        return (
            <div className={styles.sizeGroup}>
                {this.props.sizes.map((size, i) => {
                    return (
                        <SizeCheckboxItem
                            key={i}
                            size={size}
                            itemNumber={this.props.itemNumber}
                            extraClasses={this.props.extraClasses}
                        />
                    );
                })}
            </div>
        );
    }
}

export default SizeCheckboxGroup;
