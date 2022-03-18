import { Component } from 'react';
import styles from './Thumbnail.module.css';

class Thumbnail extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img
                    className={styles.image}
                    src={this.props.image}
                    alt="product"
                />
            </div>
        );
    }
}

export default Thumbnail;
