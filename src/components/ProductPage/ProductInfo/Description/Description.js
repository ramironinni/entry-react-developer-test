import { Component } from 'react';
import DOMPurify from 'dompurify';

import styles from './Description.module.css';

class Description extends Component {
    dirty = this.props.description;

    getHTMLDescription() {
        return { __html: DOMPurify.sanitize(this.dirty) };
    }

    render() {
        return (
            <div
                className={styles.description}
                dangerouslySetInnerHTML={this.getHTMLDescription()}
            ></div>
        );
    }
}

export default Description;
