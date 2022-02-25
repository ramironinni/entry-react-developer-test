import { Component } from 'react';
import FocusedImage from './FocusedImage/FocusedImage';
import ThumbnailsGroup from './ThumbnailsGroup/ThumbnailsGroup';
import styles from './ProductGallery.module.css';

class ProductGallery extends Component {
    render() {
        return (
            <div className={styles.productGallery}>
                <ThumbnailsGroup />
                <FocusedImage />
            </div>
        );
    }
}

export default ProductGallery;
