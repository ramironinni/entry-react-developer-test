import { Component } from 'react';

import styles from './SelectedImage.module.css';

class SelectedImage extends Component {
    render() {
        return (
            <div className={styles.selectedImageContainer}>
                <img
                    className={styles.selectedImage}
                    src={this.props.selectedImg}
                    alt=""
                />
            </div>
        );
    }
}

export default SelectedImage;
