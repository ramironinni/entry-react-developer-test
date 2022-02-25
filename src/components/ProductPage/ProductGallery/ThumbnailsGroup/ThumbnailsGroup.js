import { Component } from 'react';
import Thumbnail from './Thumbnail/Thumbnail';

class ThumbnailsGroup extends Component {
    render() {
        return (
            <div>
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
            </div>
        );
    }
}

export default ThumbnailsGroup;
