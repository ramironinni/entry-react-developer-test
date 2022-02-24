import { Component } from 'react';
import SizeBox from '../SizeBox/SizeBox';
import styles from './SizeBoxGroup.module.css';

class SizeBoxGroup extends Component {
    DUMMY_SIZES_NAMES = ['s', 'm'];

    render() {
        return (
            <div className={styles.sizeBoxGroup}>
                {this.DUMMY_SIZES_NAMES.map((name, i) => {
                    if (this.props.size === name) {
                        console.log(name);
                        return <SizeBox sizeName={name} selected={true} />;
                    }
                    return <SizeBox sizeName={name} selected={false} />;
                })}
            </div>
        );
    }
}

export default SizeBoxGroup;
