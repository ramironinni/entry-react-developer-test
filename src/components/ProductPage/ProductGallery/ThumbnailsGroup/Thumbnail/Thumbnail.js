import { Component } from 'react';
import styles from './Thumbnail.module.css';

class Thumbnail extends Component {
    render() {
        return (
            <div>
                <img
                    className={styles.thumbnail}
                    src="https://dummyimage.com/79x80/b09e4f/0011ff"
                    alt=""
                />
            </div>
        );
    }
}

export default Thumbnail;
