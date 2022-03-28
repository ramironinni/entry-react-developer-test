import { Component } from 'react';

import Thumbnail from './Thumbnail/Thumbnail';

class ThumbnailsGroup extends Component {
    render() {
        return (
            <div>
                {this.props.gallery.map((img, i) => {
                    return (
                        <Thumbnail
                            img={img}
                            index={i}
                            key={i}
                            onSelectImageHandler={
                                this.props.onSelectImageHandler
                            }
                        />
                    );
                })}
            </div>
        );
    }
}

export default ThumbnailsGroup;
