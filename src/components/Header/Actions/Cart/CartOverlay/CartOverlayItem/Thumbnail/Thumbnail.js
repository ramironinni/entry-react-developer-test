import { Component } from 'react';
import styles from './Thumbnail.module.css';

class Thumbnail extends Component {
    render() {
        return (
            <div className={styles.thumbnail}>
                <img src={this.props.img} alt="" />
            </div>
        );
    }
}

export default Thumbnail;
