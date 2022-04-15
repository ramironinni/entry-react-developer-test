import { Component } from 'react';

import styles from './Overlay.module.css';

class Overlay extends Component {
    render() {
        return (
            <div className={`${styles.overlay} ${this.props.overlayClasses}`}>
                <div className={styles.content}>{this.props.children}</div>
            </div>
        );
    }
}

export default Overlay;
