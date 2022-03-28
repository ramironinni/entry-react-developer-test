import { Component } from 'react';

import styles from './Thumbnail.module.css';

class Thumbnail extends Component {
    render() {
        return (
            <div
                className={styles.thumbnailContainer}
                onClick={() => {
                    this.props.onSelectImageHandler(this.props.index);
                }}
            >
                <img
                    className={styles.thumbnailImg}
                    src={this.props.img}
                    alt="product"
                />
            </div>
        );
    }
}

export default Thumbnail;
