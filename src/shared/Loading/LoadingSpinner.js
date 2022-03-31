import { Component } from 'react';

import styles from './LoadingSpinner.module.css';

class LoadingSpinner extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.ldsRing}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default LoadingSpinner;
