import { Component } from 'react';
import SquaredBox from '../SquaredBox/SquaredBox';
import styles from './SizeBox.module.css';

class SizeBox extends Component {
    render() {
        return (
            <div className={styles.sizeBox}>
                <SquaredBox
                    selected={this.props.selected}
                    cartType={this.props.cartType}
                    squareType={this.props.squareType}
                >
                    {this.props.sizeName.toUpperCase()}
                </SquaredBox>
            </div>
        );
    }
}

export default SizeBox;
