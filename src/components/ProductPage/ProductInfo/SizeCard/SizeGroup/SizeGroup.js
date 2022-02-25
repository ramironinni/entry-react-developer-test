import { Component } from 'react';
import styles from './SizeGroup.module.css';
import SizeItem from './SizeItem';

class SizeGroup extends Component {
    render() {
        return (
            <div className={styles.sizeGroup}>
                {this.props.sizes.map((size, i) => {
                    return <SizeItem key={i} size={size} />;
                })}
            </div>
        );
    }
}

export default SizeGroup;
