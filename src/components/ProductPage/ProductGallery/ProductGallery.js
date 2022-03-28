import { Component } from 'react';

import SelectedImage from './SelectedImage/SelectedImage';
import ThumbnailsGroup from './ThumbnailsGroup/ThumbnailsGroup';

import styles from './ProductGallery.module.css';

class ProductGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedImg: 0 };
    }

    selectImageHandler(index) {
        this.setState({ selectedImg: index });
    }

    render() {
        return (
            <div className={styles.productGallery}>
                <ThumbnailsGroup
                    gallery={this.props.gallery}
                    onSelectImageHandler={this.selectImageHandler.bind(this)}
                />
                <SelectedImage
                    selectedImg={this.props.gallery[this.state.selectedImg]}
                />
            </div>
        );
    }
}

export default ProductGallery;
