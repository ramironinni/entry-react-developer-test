import { Component } from 'react';

import styles from './Backdrop.module.css';

class Backdrop extends Component {
    render() {
        return (
            <div
                className={styles.backdropTransparent}
                onClick={this.props.onBackdropClickHandler}
            ></div>
        );
    }
}

export default Backdrop;
