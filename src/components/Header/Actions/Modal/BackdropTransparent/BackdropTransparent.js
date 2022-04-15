import { Component } from 'react';

import styles from './BackdropTransparent.module.css';

class BackdropTransparent extends Component {
    render() {
        return (
            <div
                className={styles.backdropTransparent}
                onClick={this.props.onBackdropClickHandler}
            ></div>
        );
    }
}

export default BackdropTransparent;
