import { Component } from 'react';
import SquaredBox from '../SquaredBox/SquaredBox';
import styles from './SizeBox.module.css';

class SizeBox extends Component {
    render() {
        return (
            <div className={styles.sizeBox}>
                <SquaredBox type={'size'} selected={this.props.selected}>
                    {this.props.sizeName.toUpperCase()}
                </SquaredBox>
            </div>
        );
    }
}

export default SizeBox;
