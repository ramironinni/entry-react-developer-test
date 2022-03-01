import { Component } from 'react';
import styles from './Thumbnail.module.css';
import arrow from '../../../../assets/arrow.svg';

class Thumbnail extends Component {
    render() {
        return (
            <div className={styles.thumbnail}>
                <div className={styles.arrowsContainer}>
                    <img className={styles.arrowLeft} src={arrow} alt="" />
                    <img className={styles.arrowRight} src={arrow} alt="" />
                </div>
                <img src={this.props.img} alt="" />
            </div>
        );
    }
}

export default Thumbnail;
